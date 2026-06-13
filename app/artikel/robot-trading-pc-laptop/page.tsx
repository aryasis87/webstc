/**
 * app/artikel/robot-trading-pc-laptop/page.tsx
 *
 * Target keyword:
 *   Primary  : robot trading pc laptop
 *   Secondary: STC AutoTrade versi web, bot trading stockity pc,
 *              cara pakai stockity di laptop, stcautotradepro.id,
 *              robot trading browser
 */

import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Robot Trading PC & Laptop: STC AutoTrade Versi Web di stcautotradepro.id 2026",
  description:
    "Panduan lengkap cara pakai bot trading STC AutoTrade di PC dan laptop — akses versi web di stcautotradepro.id, semua 6 mode tersedia, perbandingan APK vs web, dan tips optimasi agar bot tetap jalan.",
  keywords: [
    "robot trading pc laptop",
    "STC AutoTrade versi web",
    "bot trading stockity pc",
    "cara pakai stockity di laptop",
    "stcautotradepro.id",
    "robot trading browser",
    "trading stockity di laptop",
    "trading stockity di pc",
    "robot trading tanpa android",
    "bot trading stockity komputer",
    "STC AutoTrade pc",
    "auto trade stockity laptop",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/robot-trading-pc-laptop",
  },
  openGraph: {
    title: "Robot Trading PC & Laptop: STC AutoTrade Versi Web 2026",
    description:
      "Akses STC AutoTrade di PC/laptop via stcautotradepro.id — semua fitur, tanpa instal, semua browser.",
    url: "https://stcautotrade.id/artikel/robot-trading-pc-laptop",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Robot Trading PC Laptop — STC AutoTrade Versi Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robot Trading PC & Laptop: STC AutoTrade Versi Web 2026",
    description: "Akses bot trading STC AutoTrade di PC/laptop via stcautotradepro.id — tanpa install.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── JSON-LD Schemas ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Robot Trading PC & Laptop: STC AutoTrade Versi Web di stcautotradepro.id 2026",
  description:
    "Panduan menggunakan bot trading STC AutoTrade di PC dan laptop melalui versi web — fitur lengkap, semua browser, tanpa install.",
  image: "https://stcautotrade.id/og-image.webp",
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/robot-trading-pc-laptop" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Robot Trading PC Laptop", item: "https://stcautotrade.id/artikel/robot-trading-pc-laptop" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah versi web STC AutoTrade sama lengkap dengan versi APK Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Versi web di stcautotradepro.id menggunakan codebase yang sama dengan APK Android — dibangun dengan Capacitor. Semua 6 mode trading (Signal, Fastrade FTT, Fastrade CTC, AI Signal, Indicator, Momentum), martingale, SL/TP, history, dan semua fitur tersedia di versi web.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah perlu download atau install aplikasi untuk pakai di PC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Cukup buka browser (Chrome, Firefox, Edge, atau browser modern lainnya) dan akses stcautotradepro.id. Login dengan akun Stockity.id Anda dan bot langsung bisa dijalankan tanpa proses install apapun.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bot tetap jalan jika saya menutup tab browser?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Bot STC AutoTrade memerlukan tab browser tetap terbuka untuk berjalan. Jika tab ditutup, koneksi ke server terputus dan bot berhenti. Solusi: gunakan tab yang dedicated, aktifkan 'keep awake' extension, atau pertimbangkan membiarkan PC tetap menyala dengan tab terbuka saat bot sedang trading.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa login di PC dan Android secara bersamaan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Disarankan untuk tidak menjalankan bot di dua perangkat sekaligus dengan mode yang sama, karena bisa menyebabkan eksekusi order ganda. Pilih satu perangkat utama untuk menjalankan bot — PC/laptop via web atau Android via APK.",
      },
    },
    {
      "@type": "Question",
      name: "Browser apa yang direkomendasikan untuk STC AutoTrade versi web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "STC AutoTrade versi web kompatibel dengan semua browser modern: Google Chrome (direkomendasikan), Mozilla Firefox, Microsoft Edge, dan Opera. Gunakan versi browser terbaru untuk performa dan stabilitas terbaik.",
      },
    },
  ],
};

/* ── Sub-components ───────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}

function InfoBox({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[12px] font-semibold text-[#1d4ed8] mb-1">{title}</p>
        <p className="text-[13px] text-[#1e40af] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">✅</span>
      <p className="text-[13px] text-[#14532d] leading-relaxed">{children}</p>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">⚠️</span>
      <p className="text-[13px] text-[#92400e] leading-relaxed">{children}</p>
    </div>
  );
}

function StepCard({ n, title, desc, sub }: { n: string; title: string; desc: string; sub?: string }) {
  return (
    <div className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
      <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">{n}</div>
      <div className="pt-0.5">
        <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{title}</p>
        <p className="text-[12px] text-[#6b6058] leading-relaxed">{desc}</p>
        {sub && <p className="text-[11px] text-[#3b82f6] mt-1 font-medium">{sub}</p>}
      </div>
    </div>
  );
}

/* ── Page Component ───────────────────────────────────────────── */

export default function RobotTradingPcLaptopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#f9fafb] text-[#1a1612] font-[family-name:var(--font-dm-sans)]">
        {/* NAV */}
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <span className="text-base font-bold text-[#1a1612]">STC <span className="text-[#3b82f6]">AutoTrade</span></span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/artikel" className="text-[13px] text-[#6b6058] hover:text-[#1a1612] transition-colors no-underline">Semua Artikel</Link>
              <a href="/StcAutoTrade.apk" download className="px-4 py-2 bg-[#1a1612] text-white text-[12px] font-semibold rounded-lg no-underline">Download APK</a>
            </div>
          </div>
        </nav>

        <main>
          {/* ARTICLE HEADER */}
          <div className="pt-28 pb-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <nav aria-label="breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-[12px] text-[#6b6058]">
                  <li><Link href="/" className="hover:text-[#1a1612] no-underline transition-colors">Beranda</Link></li>
                  <li>/</li>
                  <li><Link href="/artikel" className="hover:text-[#1a1612] no-underline transition-colors">Artikel</Link></li>
                  <li>/</li>
                  <li className="text-[#1a1612] font-medium">Robot Trading PC Laptop</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Panduan Platform</span>
              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
                Robot Trading PC &amp; Laptop: Pakai STC AutoTrade via Browser di stcautotradepro.id
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Tidak punya Android atau lebih nyaman di PC? STC AutoTrade tersedia dalam versi web yang bisa diakses dari browser manapun. Semua fitur sama persis dengan versi APK — tanpa instalasi, langsung jalan.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "stcautotradepro.id", l: "Versi Web" },
                  { v: "Semua Browser", l: "Chrome/Firefox/Edge" },
                  { v: "Fitur Sama", l: "6 Mode Trading" },
                  { v: "Tanpa Install", l: "Langsung Akses" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3 text-center">
                    <p className="text-[14px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                    <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 1 — Tersedia di Browser */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Versi Web</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">STC AutoTrade Tersedia Penuh di Browser</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                STC AutoTrade dibangun menggunakan <strong className="text-[#1a1612]">Capacitor</strong> — framework yang memungkinkan satu codebase berjalan di Android, iOS, <em>dan</em> web browser sekaligus. Artinya versi web bukan versi terbatas — ini aplikasi yang sama, dijalankan di browser.
              </p>
              <InfoBox icon="🌐" title="Akses Versi Web di stcautotradepro.id">
                Buka browser apapun di PC atau laptop Anda, ketik <strong>stcautotradepro.id</strong>, dan login dengan email serta password akun Stockity.id Anda. Bot langsung siap dijalankan — tidak perlu download, install, atau konfigurasi apapun.
              </InfoBox>
              <div className="mt-5 bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl p-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Informasi Versi Web:</p>
                <div className="space-y-2">
                  {[
                    { label: "URL", value: "stcautotradepro.id" },
                    { label: "Platform", value: "Web Browser (semua OS)" },
                    { label: "Browser yang didukung", value: "Chrome, Firefox, Edge, Opera, Safari" },
                    { label: "Instalasi diperlukan", value: "Tidak" },
                    { label: "Login", value: "Email + password Stockity.id (sama dengan APK)" },
                    { label: "Jumlah mode trading", value: "6 mode (sama dengan APK)" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-2 py-1.5 border-b border-[rgba(26,22,18,0.05)] last:border-0">
                      <span className="text-[12px] text-[#6b6058]">{item.label}</span>
                      <span className="text-[12px] font-semibold text-[#1a1612] text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 — Cara Akses */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Panduan Akses</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Akses STC AutoTrade di PC/Laptop</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Prosesnya sangat sederhana — cukup 3 langkah utama untuk mulai trading dengan bot di PC atau laptop:
              </p>
              <div className="space-y-3">
                <StepCard
                  n="1"
                  title="Buka Browser di PC/Laptop"
                  desc="Gunakan Google Chrome, Mozilla Firefox, Microsoft Edge, atau browser modern lainnya. Pastikan menggunakan versi browser terbaru untuk performa terbaik."
                  sub="Chrome direkomendasikan untuk stabilitas terbaik"
                />
                <StepCard
                  n="2"
                  title="Buka stcautotradepro.id"
                  desc="Ketik stcautotradepro.id di address bar browser dan tekan Enter. Halaman login STC AutoTrade akan tampil — tampilan web-responsive yang sama seperti di HP."
                  sub="Bookmark halaman ini untuk akses lebih cepat"
                />
                <StepCard
                  n="3"
                  title="Login dengan Akun Stockity.id"
                  desc="Masukkan email dan password akun Stockity.id Anda. Ini adalah akun yang sama yang Anda gunakan di APK Android — tidak ada akun terpisah untuk versi web."
                  sub="Whitelist berlaku sama — akun harus sudah didaftarkan admin/reseller"
                />
                <StepCard
                  n="4"
                  title="Dashboard Terbuka"
                  desc="Setelah login, dashboard STC AutoTrade tampil lengkap di browser. Saldo real/demo tersinkronisasi langsung, semua mode tersedia."
                />
                <StepCard
                  n="5"
                  title="Pilih Mode dan Mulai Bot"
                  desc="Pilih salah satu dari 6 mode trading, atur parameter (base amount, SL, TP, martingale), pilih akun Real atau Demo, lalu aktifkan bot."
                  sub="Semua cara setting sama persis dengan versi APK"
                />
              </div>
            </div>
          </section>

          {/* SECTION 3 — Fitur di Versi Web */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Fitur Lengkap</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Semua Fitur Tersedia di Versi Web</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Tidak ada fitur yang &ldquo;dikurangi&rdquo; di versi web. Berikut konfirmasi fitur yang tersedia:
              </p>
              <div className="space-y-3 mb-5">
                <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl p-4">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-3">6 Mode Trading (semua tersedia):</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {[
                      { mode: "Signal Mode", kode: "schedule", desc: "Input sinyal manual + jadwal eksekusi" },
                      { mode: "Fastrade FTT", kode: "fastrade", desc: "Analisis otomatis real-time" },
                      { mode: "Fastrade CTC", kode: "ctc", desc: "Copy trading dari master real-time" },
                      { mode: "AI Signal", kode: "aisignal", desc: "Sinyal dari sistem AI analyzer" },
                      { mode: "Indicator", kode: "indicator", desc: "Analisis SMA, EMA, RSI" },
                      { mode: "Momentum", kode: "momentum", desc: "Deteksi 4 pola candlestick" },
                    ].map((item) => (
                      <div key={item.mode} className="flex items-start gap-2 py-1">
                        <span className="text-[#3b82f6] font-bold text-sm flex-shrink-0">✓</span>
                        <div>
                          <span className="text-[12px] font-semibold text-[#1a1612]">{item.mode}</span>
                          <span className="text-[11px] text-[#6b6058] ml-1">({item.kode})</span>
                          <p className="text-[11px] text-[#6b6058]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl p-4">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Fitur Lainnya (semua tersedia):</p>
                  <div className="grid sm:grid-cols-2 gap-1.5">
                    {[
                      "Martingale (on/off, 1-7 step, multiplier)",
                      "Stop Loss harian otomatis",
                      "Stop Profit harian otomatis",
                      "Always Signal (recovery otomatis)",
                      "Switch Real / Demo account",
                      "Halaman History (filter, detail order)",
                      "Timeframe 1m/5m/15m/30m/1h (Fastrade)",
                      "Quick Amount buttons (14K-2,8jt)",
                      "Webview untuk buka Stockity.id",
                      "Real-time saldo dari Stockity API",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-[#3b82f6] font-bold text-sm flex-shrink-0">✓</span>
                        <p className="text-[12px] text-[#6b6058]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <TipBox>
                Satu-satunya perbedaan nyata versi web vs APK adalah notifikasi push — versi web tidak punya notifikasi push seperti aplikasi Android. Namun semua fungsi bot berjalan identik.
              </TipBox>
            </div>
          </section>

          {/* SECTION 4 — Perbandingan APK vs Web */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Perbandingan</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Perbandingan APK Android vs Versi Web</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Pilih platform sesuai kebutuhan dan kenyamanan Anda:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#dcfce7] flex items-center justify-center text-base">📱</div>
                    <p className="text-[13px] font-bold text-[#1a1612]">APK Android</p>
                  </div>
                  <div className="space-y-2 mb-3">
                    <p className="text-[11px] font-semibold text-[#14532d]">Kelebihan:</p>
                    {[
                      "Berjalan di background (tidak perlu buka terus)",
                      "Notifikasi push tersedia",
                      "Responsif untuk layar mobile",
                      "Performa optimal di Android",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <span className="text-green-500 text-xs flex-shrink-0">+</span>
                        <p className="text-[12px] text-[#6b6058]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold text-[#dc2626]">Kekurangan:</p>
                    {[
                      "Hanya untuk Android (tidak iOS native)",
                      "Perlu download dan install APK",
                      "Layar HP lebih kecil untuk monitoring",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <span className="text-red-500 text-xs flex-shrink-0">-</span>
                        <p className="text-[12px] text-[#6b6058]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#dbeafe] flex items-center justify-center text-base">💻</div>
                    <p className="text-[13px] font-bold text-[#1a1612]">Versi Web (stcautotradepro.id)</p>
                  </div>
                  <div className="space-y-2 mb-3">
                    <p className="text-[11px] font-semibold text-[#14532d]">Kelebihan:</p>
                    {[
                      "Berjalan di semua OS (Windows, Mac, Linux)",
                      "Tidak perlu install — langsung akses",
                      "Layar besar untuk monitoring lebih nyaman",
                      "Mudah multitasking dengan tab lain",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <span className="text-green-500 text-xs flex-shrink-0">+</span>
                        <p className="text-[12px] text-[#6b6058]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold text-[#dc2626]">Kekurangan:</p>
                    {[
                      "Tab harus tetap terbuka (tidak background)",
                      "Tidak ada notifikasi push",
                      "PC/laptop harus tetap menyala",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <span className="text-red-500 text-xs flex-shrink-0">-</span>
                        <p className="text-[12px] text-[#6b6058]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <InfoBox icon="💡" title="Rekomendasi Penggunaan">
                Jika Anda lebih banyak di depan PC/laptop saat trading, gunakan versi web. Jika lebih mobile dan ingin bot jalan di background, gunakan APK Android. Keduanya bisa digunakan sesuai situasi — cukup tidak jalankan bot di dua perangkat sekaligus.
              </InfoBox>
            </div>
          </section>

          {/* SECTION 5 — Tips Optimasi */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Tips Optimasi</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Tips Optimasi Saat Pakai di PC/Laptop</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Untuk memastikan bot berjalan stabil dan tidak terputus di versi web, terapkan tips berikut:
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    tip: "Nonaktifkan Sleep Mode PC",
                    desc: "Masuk ke Settings → Power & Sleep → set 'Never' untuk screen off dan sleep saat PC sedang dicolokin. Jika PC tidur, browser menutup koneksi dan bot berhenti.",
                    icon: "🔋",
                  },
                  {
                    tip: "Jangan Tutup Tab STC AutoTrade",
                    desc: "Dedikasikan satu tab browser khusus untuk STC AutoTrade. Jangan tutup atau refresh tab tersebut saat bot sedang aktif. Gunakan tab lain untuk kegiatan lain.",
                    icon: "🗂️",
                  },
                  {
                    tip: "Gunakan Koneksi Internet Stabil",
                    desc: "Bot STC AutoTrade membutuhkan koneksi internet yang stabil — terutama untuk mode CTC dan Fastrade FTT yang bergantung pada sinyal real-time. Gunakan WiFi atau koneksi kabel yang andal.",
                    icon: "📶",
                  },
                  {
                    tip: "Matikan Tab Throttling di Browser",
                    desc: "Beberapa browser membatasi aktivitas tab yang tidak aktif (background throttling). Di Chrome: buka chrome://flags, cari 'throttle background', nonaktifkan untuk performa lebih stabil.",
                    icon: "⚡",
                  },
                  {
                    tip: "Install Ekstensi Keep Awake (Opsional)",
                    desc: "Ekstensi seperti 'Keep Awake' atau 'Caffeine' di Chrome/Firefox bisa mencegah PC sleep secara paksa melalui browser tanpa harus mengubah pengaturan sistem.",
                    icon: "☕",
                  },
                  {
                    tip: "Bookmark stcautotradepro.id",
                    desc: "Bookmark URL stcautotradepro.id di browser untuk akses cepat tanpa perlu mengetik setiap kali. Bisa juga pin tab-nya agar selalu ada di browser.",
                    icon: "🔖",
                  },
                ].map((item) => (
                  <div key={item.tip} className="flex gap-3 bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3.5">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{item.tip}</p>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 6 — Cara Setting Bot di PC */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Setting Bot</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Setting Bot di PC agar Tetap Jalan</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Berikut checklist lengkap sebelum dan saat menjalankan bot di PC/laptop versi web:
              </p>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4 mb-5">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Checklist Sebelum Aktifkan Bot:</p>
                <div className="space-y-2">
                  {[
                    { done: true, item: "Browser sudah dibuka di stcautotradepro.id" },
                    { done: true, item: "Login berhasil — saldo tampil di dashboard" },
                    { done: true, item: "Mode trading sudah dipilih (6 opsi tersedia)" },
                    { done: true, item: "Base Amount sudah diset (min. Rp 14.000)" },
                    { done: true, item: "Stop Loss harian sudah diaktifkan" },
                    { done: true, item: "Stop Profit harian sudah diset" },
                    { done: true, item: "Martingale dikonfigurasi (atau dinonaktifkan)" },
                    { done: true, item: "Akun Real/Demo sudah dipilih di header" },
                    { done: true, item: "Sleep mode PC sudah dinonaktifkan" },
                    { done: true, item: "Koneksi internet stabil" },
                  ].map((c) => (
                    <div key={c.item} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded border border-[rgba(26,22,18,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {c.done && <span className="text-[#3b82f6] text-[10px] font-bold">✓</span>}
                      </div>
                      <p className="text-[12px] text-[#6b6058]">{c.item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <WarningBox>
                Jangan refresh halaman saat bot sedang aktif trading — ini akan memutus koneksi bot dan menghentikan semua proses yang sedang berjalan. Jika perlu reload, matikan bot dulu dari dashboard, baru refresh.
              </WarningBox>
            </div>
          </section>

          {/* SECTION 7 — Kesimpulan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Ringkasan</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesimpulan</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                STC AutoTrade versi web adalah pilihan yang sepenuhnya valid untuk trading dari PC atau laptop:
              </p>
              <div className="space-y-3">
                {[
                  "Akses di stcautotradepro.id — tidak perlu download atau install apapun.",
                  "Semua 6 mode trading tersedia identik dengan versi APK Android.",
                  "Login menggunakan email dan password Stockity.id yang sama.",
                  "Pastikan tab tidak ditutup dan PC tidak sleep saat bot aktif.",
                  "Gunakan koneksi internet stabil untuk mode real-time seperti CTC dan Fastrade FTT.",
                  "Cocok untuk trader yang lebih nyaman monitoring di layar besar.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 items-start">
                    <span className="text-[#3b82f6] font-bold text-sm flex-shrink-0">✓</span>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Pertanyaan yang Sering Ditanyakan</h2>
              <div className="divide-y divide-[rgba(26,22,18,0.06)] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden">
                {[
                  {
                    q: "Apakah versi web STC AutoTrade sama lengkap dengan versi APK Android?",
                    a: "Ya. Versi web di stcautotradepro.id menggunakan codebase yang sama dengan APK Android — dibangun dengan Capacitor. Semua 6 mode trading (Signal, Fastrade FTT, Fastrade CTC, AI Signal, Indicator, Momentum), martingale, SL/TP, history, dan semua fitur tersedia di versi web.",
                  },
                  {
                    q: "Apakah perlu download atau install aplikasi untuk pakai di PC?",
                    a: "Tidak. Cukup buka browser (Chrome, Firefox, Edge, atau browser modern lainnya) dan akses stcautotradepro.id. Login dengan akun Stockity.id Anda dan bot langsung bisa dijalankan tanpa proses install apapun.",
                  },
                  {
                    q: "Apakah bot tetap jalan jika saya menutup tab browser?",
                    a: "Tidak. Bot STC AutoTrade memerlukan tab browser tetap terbuka untuk berjalan. Jika tab ditutup, koneksi ke server terputus dan bot berhenti. Solusi: gunakan tab yang dedicated, aktifkan 'keep awake' extension, atau pertimbangkan membiarkan PC tetap menyala dengan tab terbuka saat bot sedang trading.",
                  },
                  {
                    q: "Bisa login di PC dan Android secara bersamaan?",
                    a: "Disarankan untuk tidak menjalankan bot di dua perangkat sekaligus dengan mode yang sama, karena bisa menyebabkan eksekusi order ganda. Pilih satu perangkat utama untuk menjalankan bot — PC/laptop via web atau Android via APK.",
                  },
                  {
                    q: "Browser apa yang direkomendasikan untuk STC AutoTrade versi web?",
                    a: "STC AutoTrade versi web kompatibel dengan semua browser modern: Google Chrome (direkomendasikan), Mozilla Firefox, Microsoft Edge, dan Opera. Gunakan versi browser terbaru untuk performa dan stabilitas terbaik.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="px-5 py-4">
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{faq.q}</p>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INTERNAL LINKS */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Artikel Terkait</SectionLabel>
              <h2 className="text-[18px] font-bold text-[#1a1612] mb-4">Baca Juga</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap cara kerja robot trading STC AutoTrade dari awal hingga profit." },
                  { href: "/artikel/robot-stockity-android", title: "Robot Stockity Android", desc: "Panduan download dan install APK STC AutoTrade untuk perangkat Android." },
                  { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot Stockity", desc: "Panduan konfigurasi lengkap semua parameter bot STC AutoTrade." },
                ].map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="block p-4 bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl no-underline hover:border-[#3b82f6]/30 transition-colors"
                  >
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{r.title}</p>
                    <p className="text-[11px] text-[#6b6058]">{r.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 bg-[#1a1612]">
            <div className="max-w-3xl mx-auto px-5 text-center">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-4">Mulai Sekarang</p>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-white mb-3">Coba STC AutoTrade Gratis</h2>
              <p className="text-[14px] text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
                Download aplikasinya dan trading otomatis langsung dari Android. Atau akses versi web tanpa install.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/StcAutoTrade.apk" download className="px-7 py-3.5 bg-white text-[#1a1612] text-sm font-bold rounded-xl no-underline">Download APK Android</a>
                <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-xl no-underline">Buka Versi Web</a>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="py-8 bg-[#1a1612] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/40">© 2026 STC AutoTrade. Hak cipta dilindungi.</p>
            <div className="flex gap-5">
              <Link href="/" className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors">Beranda</Link>
              <Link href="/artikel" className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors">Artikel</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
