import type { NextConfig } from "next";

const BASE_URL = "https://stcautotrade.id";
const isDev = process.env.NODE_ENV === "development";

// ── Content Security Policy ───────────────────────────────────────────
//
// PENTING — perbedaan dev vs production:
//
// Development (next dev):
//   • React membutuhkan `unsafe-eval` untuk merekonstruksi call stack,
//     hot-module replacement, dan fitur debug lainnya.
//   • Next.js Turbopack membuka koneksi WebSocket lokal (ws://localhost)
//     untuk HMR, sehingga connect-src perlu diperluas.
//   • HSTS tidak disertakan — tidak relevan di localhost.
//
// Production (next build && next start):
//   • `unsafe-eval` dihapus — tidak dibutuhkan React di production.
//   • CSP diperketat semaksimal mungkin.
//   • HSTS diaktifkan dengan preload.
//
const buildCSP = (): string => {
  const scriptSrc = isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"   // eval untuk React dev tools
    : "script-src 'self' 'unsafe-inline'";                // JSON-LD & inline Tailwind

  const connectSrc = isDev
    // Turbopack HMR pakai WebSocket ke localhost
    ? "connect-src 'self' ws://localhost:* http://localhost:*"
    : `connect-src 'self' ${BASE_URL} https://web.stcautotrade.id`;

  const directives = [
    "default-src 'self'",
    scriptSrc,
    // Tailwind v4 menyuntikkan <style> inline; Google Fonts untuk DM Sans & DM Serif
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    connectSrc,
    "media-src 'none'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    // Hanya production yang paksa upgrade; di dev tidak ada HTTPS
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ];

  return directives.join("; ");
};

// ── Security Headers ──────────────────────────────────────────────────
const securityHeaders = [
  // Mencegah halaman di-embed dalam iframe situs lain (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Mencegah browser menebak MIME type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer hanya dikirim ke origin yang sama
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Izinkan fitur browser yang benar-benar digunakan saja
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // HSTS hanya di production — di localhost tidak ada HTTPS
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]),
  // CSP — berbeda antara dev dan production (lihat buildCSP di atas)
  {
    key: "Content-Security-Policy",
    value: buildCSP(),
  },
];

const nextConfig: NextConfig = {
  // ── Performa ─────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false, // Hapus header "X-Powered-By: Next.js"
  reactStrictMode: true,

  // ── Optimasi Gambar ──────────────────────────────────────────────────
  images: {
    // Format modern: AVIF lebih efisien dari WebP, fallback ke WebP
    formats: ["image/avif", "image/webp"],
    // Ukuran gambar yang mungkin digunakan (phone mockup = 280px, dst.)
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 280],
    // Minimumkan re-optimisasi (cache 30 hari)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Tidak ada domain eksternal — semua gambar local
    remotePatterns: [],
    // Matikan domain lama (gunakan remotePatterns)
    dangerouslyAllowSVG: false,
  },

  // ── Compiler Optimasi ────────────────────────────────────────────────
  compiler: {
    // Hapus semua console.* di production (kecuali error & warn)
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // ── Eksperimental ────────────────────────────────────────────────────
  experimental: {
    // Tree-shake ikon Phosphor & komponen Framer Motion secara agresif
    // Menghilangkan kode yang tidak dipakai dari bundle utama
    optimizePackageImports: ["@phosphor-icons/react", "framer-motion"],
  },

  // ── HTTP Headers ─────────────────────────────────────────────────────
  async headers() {
    return [
      {
        // Terapkan header keamanan ke semua route
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // Cache agresif untuk aset statis (gambar, font, APK)
        source: "/(.*)\\.(jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|otf|apk)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ── Redirect ─────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Pastikan trailing slash dihilangkan (konsistensi canonical URL)
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;