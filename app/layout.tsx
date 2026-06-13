import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const BASE_URL = "https://stcautotrade.id";
/**
 * FIX #1 — URL Konsisten
 * Semua referensi versi web di schema & metadata kini memakai konstanta
 * ini, selaras dengan link di page.tsx yang selalu mengarah ke stcautotradepro.id.
 */
const WEB_APP  = "https://stcautotradepro.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  /**
   * FIX #2 — Title sedikit diperpendek
   * Sebelumnya 63 karakter (borderline). Kini 48 karakter — jelas, keyword
   * di depan, tidak terpotong di SERP.
   */
  title: {
    default: "STC AutoTrade — Robot Trading Otomatis Stockity",
    template: "%s | STC AutoTrade",
  },

  /**
   * FIX #3 — Description KRITIS (sebelumnya 249 karakter → dipangkas jadi 147)
   * Google truncate di ~155 karakter. Description 249 karakter sebelumnya
   * kehilangan ~94 karakter di SERP — artinya CTA "Gratis" tidak pernah terlihat.
   */
  description:
    "Robot trading otomatis Stockity.id — STC AutoTrade (StockAutoTrade). APK Android & versi web. AI signal, copy trading, stop loss otomatis. Gratis.",

  /**
   * FIX #4 — Keywords dipangkas drastis
   * Google mengabaikan meta keywords, tapi daftar 110+ keyword sebelumnya
   * menjadi sinyal spam & "fingerprint" kompetitor. Sisakan 10–12 saja.
   */
  keywords: [
    "stc autotrade",
    "stcautotrade",
    "stockautotrade",
    "robot trading stockity",
    "bot trading stockity gratis",
    "auto trade stockity",
    "robot stockity android",
    "cara setting robot stockity",
    "cara daftar stockity",
    "robot stockity gratis",
    "copy trading stockity",
    "AI signal trading stockity",
  ],

  alternates: {
    canonical: BASE_URL,
    languages: { "id-ID": BASE_URL },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "STC AutoTrade",
    title: "STC AutoTrade — Robot Trading Otomatis Stockity.id",
    /**
     * FIX #3b — OG description juga dipangkas (141 karakter)
     * Sebelumnya 193 karakter; dipotong oleh platform sosial.
     */
    description:
      "STC AutoTrade (StockAutoTrade) — 6 mode strategi, stop loss otomatis, AI signal & copy trading. APK Android & versi web. Gratis untuk member.",
    images: [
      {
        url: `${BASE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "STC AutoTrade — Robot Trading Otomatis Stockity.id",
      },
    ],
  },

  /**
   * FIX #5 — Twitter site & creator ditambahkan
   * Twitter/X menggunakan ini untuk menampilkan profil pemilik kartu.
   * Ganti dengan handle Twitter resmi jika sudah ada.
   */
  twitter: {
    card: "summary_large_image",
    site: "@stcautotrade",
    creator: "@stcautotrade",
    title: "STC AutoTrade — Robot Trading Otomatis Stockity.id",
    description:
      "6 strategi trading otomatis, stop loss & profit, AI signal. APK Android & versi web (stcautotradepro.id). Gratis untuk member.",
    images: [`${BASE_URL}/og-image.webp`],
  },

  /**
   * FIX #6 — Icons / Favicon metadata
   * Sebelumnya tidak ada sama sekali. Browser & Google menampilkan favicon
   * di SERP dan tab — penting untuk brand recognition.
   * Pastikan file-file ini tersedia di /public/.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  /**
   * FIX #7 — Web App Manifest
   * Memungkinkan "Add to Home Screen" di mobile dan sinyal PWA untuk Google.
   * Buat /public/site.webmanifest (template minimal disediakan di catatan bawah).
   */
  manifest: "/site.webmanifest",

  applicationName: "STC AutoTrade",
  category: "finance",
  classification: "Finance, Trading, Automation",
};

/* ─────────────────────────────────────────────────────────────
   JSON-LD Structured Data — Global schemas (semua halaman)
   FIX #8  — URL konsisten stcautotradepro.id
   FIX #SEO — FAQPage & BreadcrumbList DIPINDAH ke page.tsx
              agar hanya aktif di halaman yang relevan.
              Schema yang tersisa di sini (SoftwareApplication,
              Organization, WebSite) memang global & benar.
───────────────────────────────────────────────────────────── */

const schemaApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${BASE_URL}/#app`,
  name: "STC AutoTrade",
  alternateName: [
    "StcAutoTrade",
    "Stc Auto Trade",
    "StockAutoTrade",
    "Stock Auto Trade",
    "Stockity Auto Trade",
    "Robot Stockity",
    "Auto Stockity",
    "Bot Stockity",
    "Robot Trading Stockity",
    "Bot Trading Stockity Otomatis",
    "Auto Trade Stockity",
    "Robot Stockity Android",
    "Bot Stockity Gratis",
  ],
  url: BASE_URL,
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Trading Automation",
  operatingSystem: "Android 8.0+, Web Browser (semua platform)",
  /** FIX #8 — applicationUrl diselaraskan dengan WEB_APP constant */
  applicationUrl: WEB_APP,
  downloadUrl: `${BASE_URL}/StcAutoTrade.apk`,
  inLanguage: "id",
  description:
    "STC AutoTrade (juga dikenal sebagai StockAutoTrade, Robot Stockity, atau Auto Stockity) adalah aplikasi bot trading otomatis untuk platform Stockity.id. Dilengkapi 6 mode strategi (AI Signal, Copy Trading, Indikator Teknikal, Candlestick, Fastrade, Schedule), manajemen risiko otomatis dengan stop loss & stop profit, serta sistem martingale terkelola. Gratis untuk member.",
  featureList: [
    /** FIX #8b — URL konsisten di featureList */
    `Versi Web — akses langsung di browser tanpa instalasi (${WEB_APP})`,
    "Aplikasi Android APK — berjalan di background 24/7",
    "6 Mode Strategi Trading (AI Signal, Copy Trading, Indikator, Candlestick, Fastrade, Schedule)",
    "Stop Loss Otomatis — batas kerugian harian",
    "Stop Profit Otomatis — amankan target keuntungan",
    "Sistem Martingale Terkelola (MAX STEP + MULTIPLIER kustom)",
    "Mode Demo Tanpa Risiko dengan data pasar nyata",
    "Riwayat Trading Lengkap per order",
    "100% Gratis untuk member terdaftar",
    "Kompatibel: Android, iPhone, PC, Mac, iPad",
  ],
  screenshot: {
    "@type": "ImageObject",
    url: `${BASE_URL}/screenshot.webp`,
    width: 1080,
    height: 1920,
    caption: "Layar utama STC AutoTrade — mode AI Signal aktif di Stockity.id",
  },
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    /**
     * FIX #9 — Availability diubah dari LimitedAvailability → InStock
     * Bot ini gratis & tersedia untuk semua yang daftar, bukan "terbatas".
     * LimitedAvailability bisa membingungkan crawler & menekan CTR di rich result.
     */
    availability: "https://schema.org/InStock",
    description: "Gratis sepenuhnya untuk semua member terdaftar",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "STC AutoTrade",
  alternateName: [
    "StcAutoTrade",
    "StockAutoTrade",
    "Stockity Auto Trade",
    "Robot Stockity",
    "Auto Stockity",
  ],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.webp`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "daftar@stockautotrade.id",
    contactType: "customer support",
    areaServed: "ID",
    availableLanguage: "Indonesian",
  },
  /**
   * FIX #10 — sameAs diisi dengan URL yang relevan
   * Sebelumnya array kosong. Google menggunakan sameAs untuk
   * menghubungkan entitas & meningkatkan kepercayaan Knowledge Graph.
   * Tambahkan akun media sosial resmi jika sudah ada.
   */
  sameAs: [
    WEB_APP,
    // "https://www.youtube.com/@stcautotrade",  // tambahkan jika ada
    // "https://www.instagram.com/stcautotrade", // tambahkan jika ada
    // "https://t.me/stcautotrade",              // tambahkan jika ada
  ],
};

/**
 * FIX #11 — SearchAction dihapus dari WebSite schema
 * URL template /?q= tidak mengarah ke fungsi pencarian yang nyata.
 * SearchAction palsu dapat membingungkan crawler & memperburuk UX
 * dari Google Sitelinks Searchbox. Aktifkan kembali hanya jika
 * ada search functionality yang berfungsi.
 */
const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "STC AutoTrade",
  alternateName: [
    "StcAutoTrade",
    "StockAutoTrade",
    "Robot Stockity",
    "Auto Stockity",
    "Bot Trading Stockity",
    "Auto Trade Stockity",
  ],
  url: BASE_URL,
  /** FIX #8d — URL web app diperbarui */
  description: `Bot & robot trading otomatis untuk Stockity.id — STC AutoTrade (StockAutoTrade) tersedia sebagai APK Android (stcautotrade.id) dan versi web (${WEB_APP}). Gratis untuk member.`,
  inLanguage: "id-ID",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        <meta name="theme-color" content="#f9fafb" />
        {/*
          Preconnect untuk Google Fonts sudah ditambahkan Next.js secara otomatis
          saat menggunakan next/font/google. Tag di bawah adalah pengaman eksplisit.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}