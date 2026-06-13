/**
 * app/download/page.tsx
 * Halaman download khusus STC AutoTrade — Server Component
 * Menarget keyword: "download stcautotrade apk", "cara instal stockautotrade android", dll.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Download STC AutoTrade APK Android & Versi Web — StockAutoTrade",
  description:
    "Download STC AutoTrade APK Android terbaru atau akses langsung versi web di stcautotradepro.id. Gratis untuk member. Panduan instalasi lengkap tersedia. Mendukung Android 8.0+, PC, Mac, iPhone.",
  keywords: [
    "download stcautotrade apk",
    "download stockautotrade",
    "download robot stockity",
    "cara instal stcautotrade android",
    "stcautotrade apk terbaru",
    "stockautotrade apk download gratis",
    "stcautotrade versi web",
    "robot stockity download",
    "cara download bot stockity",
    "stcautotrade iphone ios web",
    "stcautotrade pc laptop",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/download",
  },
  openGraph: {
    title: "Download STC AutoTrade APK & Versi Web — Robot Trading Stockity Gratis",
    description:
      "Download STC AutoTrade APK Android atau buka versi web langsung di browser. Gratis. Panduan instalasi tersedia.",
    url: "https://stcautotrade.id/download",
    type: "website",
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Download STC AutoTrade — APK Android & Versi Web Robot Trading Stockity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download STC AutoTrade APK & Versi Web — Robot Trading Stockity Gratis",
    description:
      "Download STC AutoTrade APK Android atau buka versi web di browser. Gratis untuk member.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── Constants ────────────────────────────────────────────────── */

const APK_PATH = "/StcAutoTrade.apk";

/* ── Structured Data ──────────────────────────────────────────── */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Download", item: "https://stcautotrade.id/download" },
  ],
};

const softwareDownloadSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://stcautotrade.id/#app-download",
  name: "STC AutoTrade",
  alternateName: ["StcAutoTrade", "StockAutoTrade", "Robot Trading Stockity"],
  operatingSystem: ["Android 8.0+", "Web Browser (iOS, Windows, macOS, Linux)"],
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Trading Automation",
  downloadUrl: "https://stcautotrade.id/StcAutoTrade.apk",
  installUrl: "https://stcautotrade.id/StcAutoTrade.apk",
  inLanguage: "id",
  description:
    "Robot trading otomatis untuk Stockity.id — 6 mode strategi, stop loss otomatis, AI signal, CTC copy trading. APK Android & versi web. Gratis untuk member.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
    description: "Gratis untuk semua member terdaftar",
  },
  potentialAction: [
    {
      "@type": "InstallAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://stcautotrade.id/StcAutoTrade.apk",
        actionPlatform: "http://schema.org/AndroidPlatform",
      },
    },
    {
      "@type": "ViewAction",
      target: "https://stcautotradepro.id",
      name: "Buka Versi Web",
    },
  ],
  screenshot: {
    "@type": "ImageObject",
    url: "https://stcautotrade.id/screenshot.webp",
    width: 1080,
    height: 1920,
  },
  featureList: [
    "AI Signal — sinyal berbasis machine learning",
    "CTC Copy Trading — salin sinyal trader berpengalaman",
    "Stop Loss Otomatis — batas kerugian harian",
    "Stop Profit Otomatis — amankan target keuntungan",
    "Sistem Martingale Terkelola",
    "Mode Demo Tanpa Risiko",
    "Kompatibel Android, iPhone, PC, Mac, iPad",
  ],
};

const howToInstallSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Menginstal STC AutoTrade APK di Android",
  description: "Panduan lengkap instalasi STC AutoTrade (StockAutoTrade) di perangkat Android.",
  step: [
    { "@type": "HowToStep", name: "Download APK", text: "Klik tombol Download APK Android di halaman ini untuk mengunduh file STC AutoTrade APK terbaru." },
    { "@type": "HowToStep", name: "Aktifkan izin instalasi", text: "Buka Pengaturan Android → Keamanan / Privasi → aktifkan 'Instal dari sumber tidak dikenal' untuk browser atau file manager yang Anda gunakan." },
    { "@type": "HowToStep", name: "Buka file APK", text: "Buka file APK yang sudah diunduh melalui notifikasi atau aplikasi File Manager." },
    { "@type": "HowToStep", name: "Ikuti instruksi instalasi", text: "Tap Instal dan tunggu proses selesai. Butuh beberapa detik." },
    { "@type": "HowToStep", name: "Daftar & login", text: "Buka aplikasi STC AutoTrade, daftar akun baru melalui aplikasi, lalu login dengan akun Stockity.id yang baru dibuat." },
  ],
};

/* ── Page ─────────────────────────────────────────────────────── */

export default function DownloadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareDownloadSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToInstallSchema) }}
      />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/cara-kerja" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">
                Cara Kerja
              </Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">
                FAQ
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/40">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Download</li>
            </ol>
          </nav>
        </div>

        {/* ── Header ────────────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-12">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-3">
            Download Gratis · APK & Web
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-4">
            Download STC AutoTrade
          </h1>
          <p className="text-[#6b6058] text-base leading-relaxed max-w-xl">
            Tersedia dua cara mengakses STC AutoTrade (StockAutoTrade) — APK Android untuk
            yang ingin aplikasi native, atau versi web tanpa instalasi untuk semua perangkat.
          </p>
        </header>

        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24 space-y-10">

          {/* ── Dua pilihan download ──────────────────────── */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* APK Android */}
            <div className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] p-7 flex flex-col">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#dbeafe] flex items-center justify-center text-lg">
                  📱
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1a1612]">APK Android</p>
                  <p className="text-[11px] text-[#6b6058]">Instal di perangkat Android</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-[#1a1612] mb-2 tracking-tight">
                Download STC AutoTrade APK
              </h2>
              <p className="text-[13px] text-[#6b6058] leading-relaxed mb-5 flex-1">
                File APK Android terbaru. Setelah terinstal, bot berjalan di background
                dan bisa aktif 24 jam di perangkat Anda.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Android 8.0 (Oreo) ke atas",
                  "Berjalan di background 24 jam",
                  "Semua 6 strategi tersedia",
                  "Update otomatis notifikasi in-app",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[12px] text-[#1a1612]/60">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <circle cx="7" cy="7" r="6.5" stroke="#3b82f6" strokeOpacity="0.3" />
                      <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <a
                href={APK_PATH}
                download
                className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 bg-[#1a1612] text-white text-sm font-bold rounded-xl hover:bg-[#1a1612]/85 active:scale-[0.98] transition-all no-underline shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download APK Android
              </a>
              <p className="text-center text-[11px] text-[#1a1612]/30 mt-2.5">
                Gratis · Perlu izin "sumber tidak dikenal"
              </p>
            </div>

            {/* Versi Web */}
            <div className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] p-7 flex flex-col">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center text-lg">
                  🌐
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1a1612]">Versi Web</p>
                  <p className="text-[11px] text-[#6b6058]">Tanpa instalasi · Semua perangkat</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-[#1a1612] mb-2 tracking-tight">
                Buka STC AutoTrade di Browser
              </h2>
              <p className="text-[13px] text-[#6b6058] leading-relaxed mb-5 flex-1">
                Tidak perlu download. Buka langsung di browser — cocok untuk PC, Mac,
                iPhone, iPad, dan semua perangkat lainnya.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Tidak perlu instalasi apapun",
                  "PC, Mac, iPhone, iPad, Android",
                  "Fitur identik dengan APK Android",
                  "Buka di Chrome, Safari, Firefox",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[12px] text-[#1a1612]/60">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <circle cx="7" cy="7" r="6.5" stroke="#3b82f6" strokeOpacity="0.3" />
                      <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <a
                href="https://stcautotradepro.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 bg-[#3b82f6] text-white text-sm font-bold rounded-xl hover:bg-[#2563eb] active:scale-[0.98] transition-all no-underline shadow-sm shadow-blue-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M5.5 8c0-2.5 1.1-4.5 2.5-4.5S10.5 5.5 10.5 8 9.4 12.5 8 12.5 5.5 10.5 5.5 8Z" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M2 8h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                Buka Versi Web
              </a>
              <p className="text-center text-[11px] text-[#1a1612]/30 mt-2.5">
                stcautotradepro.id · Gratis
              </p>
            </div>
          </div>

          {/* ── Panduan Instalasi APK ─────────────────────── */}
          <section>
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-6 flex items-center gap-3">
              Cara Instal APK Android
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </h2>
            <div className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] overflow-hidden">
              {[
                {
                  n: "01",
                  title: "Download file APK",
                  desc: "Klik tombol 'Download APK Android' di atas. File akan tersimpan di folder Unduhan perangkat Android Anda.",
                },
                {
                  n: "02",
                  title: "Aktifkan izin instalasi dari sumber tidak dikenal",
                  desc: "Buka Pengaturan → Keamanan / Privasi → cari opsi 'Instal aplikasi dari sumber tidak dikenal' → aktifkan untuk browser atau file manager yang Anda gunakan (Chrome, Files, dll).",
                },
                {
                  n: "03",
                  title: "Buka dan instal file APK",
                  desc: "Buka file APK dari notifikasi unduhan atau aplikasi Files/File Manager. Tap 'Instal' dan tunggu beberapa detik hingga proses selesai.",
                },
                {
                  n: "04",
                  title: "Buka aplikasi & daftar akun",
                  desc: "Setelah terinstal, buka STC AutoTrade. Pilih 'Daftar' untuk membuat akun Stockity.id baru langsung melalui aplikasi — cepat dan gratis.",
                },
                {
                  n: "05",
                  title: "Login dan mulai dari mode demo",
                  desc: "Login menggunakan akun Stockity.id yang baru dibuat. Mulai dari mode demo untuk belajar tanpa risiko finansial sebelum beralih ke mode real.",
                },
              ].map((s, i) => (
                <div key={s.n} className="flex gap-5 px-6 py-5 border-b border-[rgba(26,22,18,0.06)] last:border-0">
                  <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f9fafb] flex items-center justify-center text-[12px] font-semibold text-[#1a1612]/40">
                    {i + 1}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[14px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Kompatibilitas ────────────────────────────── */}
          <section>
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-6 flex items-center gap-3">
              Kompatibilitas Perangkat
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  platform: "Android (APK)",
                  req: "Android 8.0 Oreo ke atas",
                  note: "Diinstal sebagai aplikasi native. Berjalan di background.",
                  badge: "APK",
                  badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
                },
                {
                  platform: "iPhone & iPad (iOS)",
                  req: "Safari, Chrome, atau browser modern",
                  note: "Gunakan versi web di stcautotradepro.id. Tidak perlu App Store.",
                  badge: "Web",
                  badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
                },
                {
                  platform: "PC & Laptop (Windows / Mac)",
                  req: "Chrome, Firefox, Edge, Safari",
                  note: "Buka versi web di browser. Tidak ada batasan OS.",
                  badge: "Web",
                  badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
                },
                {
                  platform: "Android via Browser",
                  req: "Chrome atau browser Android modern",
                  note: "Bisa juga akses versi web di Android jika tidak ingin menginstal APK.",
                  badge: "Web",
                  badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
                },
              ].map((p) => (
                <div key={p.platform} className="bg-white rounded-xl border border-[rgba(26,22,18,0.08)] p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[13px] font-semibold text-[#1a1612]">{p.platform}</p>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#3b82f6] font-medium mb-1">{p.req}</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ singkat ────────────────────────────────── */}
          <section>
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-6 flex items-center gap-3">
              Pertanyaan Seputar Download
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </h2>
            <div className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] overflow-hidden divide-y divide-[rgba(26,22,18,0.06)]">
              {[
                {
                  q: "Apakah STC AutoTrade gratis?",
                  a: "Ya. STC AutoTrade gratis untuk member terdaftar — baik versi APK maupun versi web. Akses diberikan melalui sistem whitelist.",
                },
                {
                  q: "Kenapa harus aktifkan 'instal dari sumber tidak dikenal'?",
                  a: "Karena STC AutoTrade APK tidak didistribusikan melalui Google Play Store — melainkan langsung dari stcautotrade.id. Izin ini diperlukan Android untuk menginstal APK dari luar Play Store. Ini normal untuk banyak aplikasi trading dan enterprise.",
                },
                {
                  q: "Apakah aman menginstal APK dari stcautotrade.id?",
                  a: "Ya. File APK hanya berasal dari domain resmi stcautotrade.id. Password akun Stockity.id Anda tidak pernah dikirim ke server manapun — hanya token autentikasi yang tersimpan secara lokal dan terenkripsi di perangkat Anda.",
                },
                {
                  q: "Apakah versi APK dan versi web memiliki fitur yang sama?",
                  a: "Ya, semua 6 mode strategi (AI Signal, CTC Copy Trading, Indicator, Momentum, Schedule, Fastrade), stop loss/profit otomatis, sistem martingale, dan riwayat trading tersedia di kedua platform.",
                },
              ].map((item) => (
                <div key={item.q} className="px-6 py-5">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.q}</p>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[#1a1612]/40">
              Punya pertanyaan lain?{" "}
              <Link href="/faq" className="text-[#3b82f6] hover:underline no-underline">
                Lihat halaman FAQ lengkap →
              </Link>
            </p>
          </section>

        </main>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-8 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Image src="/logo.webp" alt="STC AutoTrade" width={20} height={20} className="rounded-[4px]" />
                <span className="text-[12px] font-medium text-[#1a1612]/50">STC AutoTrade</span>
              </div>
              <p className="text-[11px] text-[#1a1612]/25">
                StcAutoTrade · StockAutoTrade · Robot Stockity · stcautotradepro.id
              </p>
            </div>
            <p className="text-[11px] text-[#1a1612]/25 max-w-xs sm:text-right leading-relaxed">
              Trading mengandung risiko kerugian finansial. STC AutoTrade adalah alat bantu,
              bukan jaminan profit. Pahami risiko sebelum bertransaksi.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}