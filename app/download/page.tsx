/**
 * app/download/page.tsx
 * Halaman download khusus STC AutoTrade — Server Component
 * Menarget keyword: "download stcautotrade apk", "cara instal technoautotrade android", dll.
 */

import type { Metadata } from "next";
import { RILIS_TERBARU } from "@/lib/appRelease";
import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Download STC AutoTrade APK Android — TechnoAutoTrade",
  description:
    "Download STC AutoTrade APK Android terbaru atau akses langsung aplikasi di stcautotradepro.id. Gratis untuk member. Panduan instalasi lengkap tersedia. Mendukung Android 8.0+, PC, Mac, iPhone.",
  keywords: [
    "download stcautotrade apk",
    "download technoautotrade",
    "download robot stockity",
    "cara instal stcautotrade android",
    "stcautotrade apk terbaru",
    "technoautotrade apk download gratis",
    "stcautotrade android",
    "robot stockity download",
    "cara download bot stockity",
    "stcautotrade iphone ios web",
    "stcautotrade pc laptop",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/download",
    // hreflang: pasangan ID ↔ EN; x-default = ID (pasar utama)
    languages: {
      "id-ID": "https://stcautotrade.id/download",
      en: "https://stcautotrade.id/en/download",
      ru: "https://stcautotrade.id/ru/download",
      "x-default": "https://stcautotrade.id/download",
    },
  },
  openGraph: {
    title: "Download STC AutoTrade APK — Robot Trading Stockity Gratis",
    description:
      "Download STC AutoTrade APK Android untuk robot trading Stockity. Gratis. Panduan instalasi tersedia.",
    url: "https://stcautotrade.id/download",
    type: "website",
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Download STC AutoTrade — APK Android Robot Trading Stockity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download STC AutoTrade APK — Robot Trading Stockity Gratis",
    description:
      "Download STC AutoTrade APK Android. Gratis untuk member terdaftar.",
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
  // @id disamakan dengan schema global (#app) agar tidak tercipta entitas
  // SoftwareApplication kedua di halaman ini — Google merge node ber-@id sama.
  "@id": "https://stcautotrade.id/#app",
  name: "STC AutoTrade",
  alternateName: ["StcAutoTrade", "TechnoAutoTrade", "Robot Trading Stockity"],
  operatingSystem: ["Android 8.0+", "Web Browser (iOS, Windows, macOS, Linux)"],
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Trading Automation",
  downloadUrl: "https://stcautotrade.id/StcAutoTrade.apk",
  installUrl: "https://stcautotrade.id/StcAutoTrade.apk",
  inLanguage: "id",
  description:
    "Robot trading otomatis untuk Stockity.id — 7 mode strategi, stop loss otomatis, AI signal, CTC copy trading. Aplikasi Android. Gratis untuk member.",
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
      name: "Unduh Aplikasi",
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
  description: "Panduan lengkap instalasi STC AutoTrade (TechnoAutoTrade) di perangkat Android.",
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

      <div className="min-h-screen bg-[#f6f4ef]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/cara-kerja" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">
                Cara Kerja
              </Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">
                FAQ
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Download</li>
            </ol>
          </nav>
        </div>

        {/* ── Header ────────────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-12">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-3">
            Download Gratis · APK & Web
          </p>
          <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-[#ecfdf5] border border-[#10b981]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#047857]">
              Versi {RILIS_TERBARU.versi} sudah rilis · diperbarui {RILIS_TERBARU.tanggalTampil}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-4">
            Download STC AutoTrade
          </h1>
          <p className="text-[#6b6058] text-base leading-relaxed max-w-xl">
            STC AutoTrade tersedia sebagai aplikasi Android dan versi browser di
            stcautotradepro.id. Aplikasi menjalankan trading langsung dari HP Anda,
            sedangkan versi browser dijalankan dari server kami. Pendaftaran akun baru
            hanya dapat dilakukan lewat aplikasi.
          </p>
        </header>

        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24 space-y-10">

          {/* ── Dua pilihan download ──────────────────────── */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* APK Android */}
            <div className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] p-7 flex flex-col">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#d1fae5] flex items-center justify-center text-lg">
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
                  "Semua 7 strategi tersedia",
                  "Update otomatis notifikasi in-app",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-[12px] text-[#1a1612]/65">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                      <circle cx="7" cy="7" r="6.5" stroke="#10b981" strokeOpacity="0.3" />
                      <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
              <p className="text-center text-[11px] text-[#1a1612]/65 mt-2.5">
                Gratis · Perlu izin "sumber tidak dikenal"
              </p>
              <a
                href="https://stcautotradepro.id"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[rgba(26,22,18,0.16)] px-5 py-3 text-sm font-semibold text-[#1a1612] no-underline transition-all hover:border-[rgba(26,22,18,0.28)] hover:bg-white"
              >
                Buka Versi Web
              </a>
              <p className="mt-2 text-center text-[11px] text-[#1a1612]/65">
                Tanpa instalasi · Bisa di komputer & iPhone
              </p>
            </div>

          </div>

          {/* ── Panduan Instalasi APK ─────────────────────── */}
          <section>
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-6 flex items-center gap-3">
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
                  <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f6f4ef] flex items-center justify-center text-[12px] font-semibold text-[#1a1612]/65">
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
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-6 flex items-center gap-3">
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
                  badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
                {
                  platform: "iPhone & iPad (iOS)",
                  req: "Safari, Chrome, atau browser modern",
                  note: "Gunakan aplikasi di stcautotradepro.id. Tidak perlu App Store.",
                  badge: "Web",
                  badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
                },
                {
                  platform: "PC & Laptop (Windows / Mac)",
                  req: "—",
                  note: "Lewat browser di stcautotradepro.id.",
                  badge: "Belum",
                  badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
                },
                {
                  platform: "Android (HP & Tablet)",
                  req: "Android 7.0 ke atas",
                  note: "Unduh APK-nya, lalu izinkan pemasangan saat diminta.",
                  badge: "Didukung",
                  badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                },
              ].map((p) => (
                <div key={p.platform} className="bg-white rounded-xl border border-[rgba(26,22,18,0.08)] p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[13px] font-semibold text-[#1a1612]">{p.platform}</p>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#047857] font-medium mb-1">{p.req}</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ singkat ────────────────────────────────── */}
          <section>
            <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-6 flex items-center gap-3">
              Pertanyaan Seputar Download
              <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
            </h2>
            <div className="bg-white rounded-2xl border border-[rgba(26,22,18,0.08)] overflow-hidden divide-y divide-[rgba(26,22,18,0.06)]">
              {[
                {
                  q: "Apakah STC AutoTrade gratis?",
                  a: "Aplikasi, mode demo, dan mode strategi dasar gratis — bot berjalan penuh tanpa biaya. Berbayar dan opsional: membuka mode REAL (Rp 150.000 / 30 hari), langganan AI Signal (Rp 50.000/bulan), mode 5st Blitz (Rp 85.000/30 hari), dan mode Agent Alpha (Rp 850.000/30 hari, WR hingga 90%). Tidak ada langganan wajib.",
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
                  q: "Apakah STC AutoTrade masih punya versi web?",
                  a: "Ya. Versi browser dapat dibuka di stcautotradepro.id dan dijalankan dari server kami, sehingga bisa dipakai di komputer maupun iPhone. Bedanya, aplikasi Android menjalankan trading langsung dari perangkat Anda sendiri. Pendaftaran akun baru hanya bisa lewat aplikasi.",
                },
              ].map((item) => (
                <div key={item.q} className="px-6 py-5">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.q}</p>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[#1a1612]/65">
              Punya pertanyaan lain?{" "}
              <Link href="/faq" className="text-[#047857] hover:underline no-underline">
                Lihat halaman FAQ lengkap →
              </Link>
            </p>
          </section>

        </main>

        {/* ── Footer ────────────────────────────────────────── */}
        <SiteFooter />
      </div>
    </>
  );
}