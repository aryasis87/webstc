/**
 * app/artikel/copy-trading-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : copy trading stockity
 *   Secondary: CTC stockity, cara copy trading stockity, fastrade CTC,
 *              copy trade binary option, cara pakai CTC di STC AutoTrade
 */

import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Copy Trading Stockity: Mode Fastrade CTC di STC AutoTrade 2026",
  description:
    "Panduan lengkap copy trading dengan mode Fastrade CTC di STC AutoTrade v4.4 — cara kerja mirror order dari master trader secara real-time, cara setting, perbandingan 6 mode, dan tips memaksimalkan performa CTC.",
  keywords: [
    "copy trading stockity",
    "CTC stockity",
    "fastrade CTC",
    "cara copy trading stockity",
    "copy trade binary option",
    "cara pakai CTC di STC AutoTrade",
    "mode CTC STC AutoTrade",
    "bot copy trade stockity",
    "mirror trading stockity",
    "cara setting CTC stockity",
    "copy trading otomatis stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/copy-trading-stockity",
  },
  openGraph: {
    title: "Copy Trading Stockity: Mode Fastrade CTC di STC AutoTrade 2026",
    description:
      "Mode Fastrade CTC di STC AutoTrade — mirror order master trader secara real-time dan otomatis. Panduan setting dan tips lengkap.",
    url: "https://stcautotrade.id/artikel/copy-trading-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Copy Trading Stockity — Mode Fastrade CTC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Copy Trading Stockity: Mode Fastrade CTC di STC AutoTrade 2026",
    description: "Mode Fastrade CTC — mirror order master trader real-time dan otomatis di STC AutoTrade.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── JSON-LD Schemas ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Copy Trading Stockity: Mode Fastrade CTC di STC AutoTrade 2026",
  description:
    "Panduan lengkap mode Fastrade CTC di STC AutoTrade v4.4 — cara kerja copy trading otomatis, setting, dan perbandingan dengan mode lain.",
  image: "https://stcautotrade.id/og-image.webp",
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/copy-trading-stockity" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Copy Trading Stockity", item: "https://stcautotrade.id/artikel/copy-trading-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu mode Fastrade CTC di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fastrade CTC (kode: ctc) adalah salah satu dari 6 mode strategi di STC AutoTrade v4.4. CTC adalah mode Copy Trading — bot secara otomatis mirror atau mengikuti order dari master trader secara real-time. User tidak perlu input manual sama sekali; setiap order dari master langsung dieksekusi oleh bot.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah aplikasi STC AutoTrade harus tetap terbuka saat CTC berjalan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bot STC AutoTrade perlu tetap aktif (tidak di-force close) agar dapat menerima dan mengeksekusi sinyal real-time dari master trader. Untuk penggunaan lebih stabil di PC/laptop, gunakan versi web di stcautotradepro.id dan jangan tutup tab browser.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa gabungkan mode CTC dengan martingale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Martingale bisa diaktifkan bersamaan dengan mode CTC. Saat terjadi loss, bot otomatis lanjut ke step martingale berikutnya sesuai konfigurasi (max step 1-7, multiplier 1.5x-5x). Fitur Always Signal juga tersedia untuk recovery otomatis.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah perlu berlangganan atau membayar untuk mengikuti master trader di mode CTC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mode CTC di STC AutoTrade adalah fitur yang sudah termasuk dalam aplikasi — tidak ada biaya tambahan untuk mengaktifkannya. Fitur ini sudah terintegrasi dalam sistem STC AutoTrade v4.4 dan tersedia untuk semua pengguna yang terdaftar (whitelist).",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan Fastrade CTC dengan Fastrade FTT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keduanya termasuk dalam kategori Fastrade, tapi cara kerjanya berbeda: Fastrade FTT (Fast Trade) menganalisis pasar secara mandiri dan mengeksekusi order berdasarkan deteksi arah sendiri. Fastrade CTC (Copy Trading) mengikuti dan mirror order dari master trader secara real-time — tidak ada analisis mandiri. Keduanya mendukung timeframe: 1m, 5m, 15m, 30m, 1h.",
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

export default function CopyTradingStockityPage() {
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
              <a href="/StcAutoTrade.apk" className="px-4 py-2 bg-[#1a1612] text-white text-[12px] font-semibold rounded-lg no-underline">Download APK</a>
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
                  <li className="text-[#1a1612] font-medium">Copy Trading Stockity</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Fitur & Mode Trading</span>
              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
                Copy Trading Stockity: Mode Fastrade CTC di STC AutoTrade v4.4
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Mode Fastrade CTC adalah fitur copy trading yang sudah terintegrasi di STC AutoTrade. Bot secara otomatis mirror order dari master trader secara real-time — tanpa input manual sama sekali. Ini panduan lengkapnya.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "Fastrade CTC", l: "Nama Mode" },
                  { v: "Otomatis", l: "Eksekusi Order" },
                  { v: "Real-time", l: "Mirror Order" },
                  { v: "Ungu/Violet", l: "Warna UI" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3 text-center">
                    <p className="text-[15px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                    <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 1 — Apa Itu Mode Fastrade CTC */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Pengenalan Mode</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Apa Itu Mode Fastrade CTC di STC AutoTrade?</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                <strong className="text-[#1a1612]">Fastrade CTC</strong> (kode: <code className="bg-[#f1f5f9] px-1.5 py-0.5 rounded text-[12px] font-mono text-[#1d4ed8]">ctc</code>) adalah salah satu dari <strong className="text-[#1a1612]">6 mode strategi</strong> yang tersedia di STC AutoTrade v4.4. CTC adalah mode <em>Copy Trading</em> — bot Anda secara otomatis mengikuti dan meniru order dari master trader yang terhubung ke sistem.
              </p>
              <InfoBox icon="📋" title="Definisi Tepat Fastrade CTC">
                CTC bukan aplikasi terpisah atau channel berlangganan. Ini adalah mode strategi yang sudah terintegrasi di dalam dashboard STC AutoTrade — sama seperti mode Signal, AI Signal, Indicator, dan lainnya. Aktifkan dari dashboard, atur parameter, dan bot langsung mulai mirror order master.
              </InfoBox>
              <div className="mt-5 bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl p-4">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Identifikasi Fastrade CTC di Aplikasi:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Nama lengkap", value: "Fastrade CTC" },
                    { label: "Kode internal", value: "ctc" },
                    { label: "Warna UI", value: "Violet / Ungu (#D37EFF)" },
                    { label: "Timeframe tersedia", value: "1m, 5m, 15m, 30m, 1h" },
                    { label: "Input manual", value: "Tidak diperlukan" },
                    { label: "Deteksi sinyal", value: "Dari master trader" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-2 py-1.5 border-b border-[rgba(26,22,18,0.05)] last:border-0">
                      <span className="text-[12px] text-[#6b6058]">{item.label}</span>
                      <span className="text-[12px] font-semibold text-[#1a1612]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 — Cara Kerja */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Cara Kerja</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Kerja Copy Trading di Mode CTC</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mode CTC bekerja berdasarkan sistem mirror trading — setiap order yang dibuat master trader akan direplikasi secara otomatis oleh bot ke akun Anda. Prosesnya berlangsung real-time.
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    step: "1",
                    icon: "👤",
                    title: "Master Trader Membuat Order",
                    desc: "Master trader yang terhubung ke sistem STC AutoTrade membuat order di platform Stockity — misalnya CALL EUR/USD dengan nominal tertentu.",
                  },
                  {
                    step: "2",
                    icon: "📡",
                    title: "Sinyal Dikirim Real-time",
                    desc: "Sistem STC AutoTrade menangkap order master trader secara real-time dan mengirimkan sinyal ke semua bot yang sedang berjalan dalam mode CTC.",
                  },
                  {
                    step: "3",
                    icon: "🤖",
                    title: "Bot Anda Menerima Sinyal",
                    desc: "Bot STC AutoTrade Anda menerima sinyal dari master — termasuk informasi arah (CALL/PUT), aset yang diperdagangkan, dan timeframe.",
                  },
                  {
                    step: "4",
                    icon: "⚡",
                    title: "Order Dieksekusi Otomatis",
                    desc: "Bot langsung mengeksekusi order yang sama di akun Stockity Anda, menggunakan nominal yang sudah Anda setting di parameter bot (bukan nominal master).",
                  },
                  {
                    step: "5",
                    icon: "📊",
                    title: "Martingale Aktif (jika ON)",
                    desc: "Jika order loss dan martingale diaktifkan, bot otomatis lanjut ke step martingale berikutnya saat menerima sinyal berikutnya dari master.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
                    <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#f3e8ff] flex items-center justify-center text-base">{item.icon}</div>
                    <div className="pt-0.5">
                      <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{item.step}. {item.title}</p>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <InfoBox icon="💡" title="Nominal Order Anda Sendiri yang Berlaku">
                Mode CTC hanya meng-copy arah dan timing dari master trader — BUKAN nominal-nya. Nominal order yang dieksekusi bot adalah nominal yang Anda set di pengaturan Base Amount. Jadi Anda punya kendali penuh atas berapa uang yang digunakan per trade.
              </InfoBox>
            </div>
          </section>

          {/* SECTION 3 — Cara Mengaktifkan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Panduan Aktivasi</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Cara Mengaktifkan Mode CTC</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mengaktifkan mode CTC mudah — cukup pilih mode dari dashboard, atur parameter, lalu mulai bot. Tidak ada konfigurasi sinyal yang rumit.
              </p>
              <div className="space-y-3">
                <StepCard
                  n="1"
                  title="Buka Dashboard STC AutoTrade"
                  desc="Login ke STC AutoTrade menggunakan akun Stockity.id Anda. Pastikan sudah login dan saldo tampil dengan benar."
                  sub="Gunakan email & password akun Stockity.id"
                />
                <StepCard
                  n="2"
                  title="Pilih Mode Fastrade CTC"
                  desc="Di dashboard, pilih mode strategi 'Fastrade CTC'. Mode ini ditandai dengan warna Violet/Ungu di antarmuka. Beda dengan Fastrade FTT yang berwarna berbeda."
                  sub="Pastikan pilih CTC, bukan FTT"
                />
                <StepCard
                  n="3"
                  title="Pilih Timeframe"
                  desc="Pilih timeframe sesuai strategi master yang diikuti: 1m, 5m, 15m, 30m, atau 1h. Timeframe menentukan durasi setiap order yang dieksekusi."
                  sub="Timeframe tersedia: 1m, 5m, 15m, 30m, 1h"
                />
                <StepCard
                  n="4"
                  title="Setting Parameter Bot"
                  desc="Atur Base Amount (nominal per trade), Stop Loss harian, Stop Profit harian, dan konfigurasi martingale (on/off, max step, multiplier)."
                  sub="Parameter ini berlaku universal untuk semua mode"
                />
                <StepCard
                  n="5"
                  title="Pilih Akun (Real/Demo)"
                  desc="Pilih apakah bot akan berjalan di akun Real atau Demo. Untuk percobaan pertama, gunakan Demo terlebih dahulu."
                  sub="Switch Real/Demo di header dashboard"
                />
                <StepCard
                  n="6"
                  title="Aktifkan Bot"
                  desc="Tekan tombol Start/Aktifkan. Bot CTC sekarang aktif dan menunggu sinyal dari master trader. Setiap sinyal yang masuk akan langsung dieksekusi otomatis."
                  sub="Bot akan diam sampai ada sinyal masuk dari master"
                />
              </div>
            </div>
          </section>

          {/* SECTION 4 — Setting Penting */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Konfigurasi Bot</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Setting Penting Sebelum Aktifkan CTC</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Meskipun mode CTC sepenuhnya otomatis, ada beberapa parameter yang <strong className="text-[#1a1612]">wajib dikonfigurasi dengan benar</strong> sebelum mengaktifkan bot. Parameter ini berlaku untuk semua mode di STC AutoTrade.
              </p>
              <div className="space-y-4 mb-5">
                {[
                  {
                    param: "Base Amount",
                    icon: "💰",
                    desc: "Nominal order per trade. Minimum Rp 14.000. Quick amounts tersedia: 14K, 70K, 140K, 280K, 700K, 1,4jt, 2,8jt. Bot akan mengeksekusi setiap sinyal CTC dengan nominal ini.",
                    important: "Sesuaikan dengan modal dan toleransi risiko Anda",
                  },
                  {
                    param: "Stop Loss (SL) Harian",
                    icon: "🛑",
                    desc: "Batas loss maksimum dalam satu hari. Saat total loss harian mencapai angka ini, bot otomatis berhenti. Wajib aktifkan untuk melindungi saldo.",
                    important: "Sangat disarankan: set SL maksimal 20-30% dari modal",
                  },
                  {
                    param: "Stop Profit (TP) Harian",
                    icon: "🎯",
                    desc: "Target profit harian. Saat profit harian mencapai angka ini, bot otomatis berhenti trading untuk hari tersebut.",
                    important: "Realistis: set TP 10-20% dari modal untuk manajemen risiko baik",
                  },
                  {
                    param: "Martingale",
                    icon: "📈",
                    desc: "Saat loss, bot bisa otomatis menaikkan nominal ke step berikutnya. Max Step: 1-7. Multiplier: Fixed atau Percentage (nilai 1.5x - 5x). Fitur Always Signal membantu recovery otomatis.",
                    important: "Hati-hati: martingale step banyak butuh modal buffer besar",
                  },
                  {
                    param: "Timeframe",
                    icon: "⏱️",
                    desc: "Pilih dari: 1m, 5m, 15m, 30m, 1h. Timeframe menentukan durasi setiap trade. Timeframe lebih pendek = lebih sering trading; lebih panjang = lebih sedikit tapi lebih akurat.",
                    important: "Sesuaikan dengan strategi master yang diikuti",
                  },
                ].map((item) => (
                  <div key={item.param} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{item.icon}</span>
                      <p className="text-[13px] font-bold text-[#1a1612]">{item.param}</p>
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-[11px] text-[#3b82f6] font-medium">→ {item.important}</p>
                  </div>
                ))}
              </div>
              <WarningBox>
                Jangan aktifkan bot CTC tanpa mengatur Stop Loss. Mode CTC bisa menerima banyak sinyal dalam waktu singkat. Tanpa SL, saldo bisa habis jika master trader mengalami serangkaian loss berturut-turut.
              </WarningBox>
            </div>
          </section>

          {/* SECTION 5 — Perbandingan 6 Mode */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Perbandingan Mode</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Perbedaan CTC vs Mode Lainnya di STC AutoTrade</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                STC AutoTrade v4.4 memiliki 6 mode strategi. Berikut perbandingan lengkapnya — di mana CTC masuk dalam kategori Fastrade bersama FTT.
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    mode: "Signal Mode",
                    kode: "schedule",
                    cara: "Input manual sinyal + jadwal waktu eksekusi",
                    timeframe: "N/A",
                    otomatis: false,
                    highlight: false,
                  },
                  {
                    mode: "Fastrade FTT",
                    kode: "fastrade",
                    cara: "Bot deteksi arah sendiri via analisis real-time",
                    timeframe: "1m/5m/15m/30m/1h",
                    otomatis: true,
                    highlight: false,
                  },
                  {
                    mode: "Fastrade CTC",
                    kode: "ctc",
                    cara: "Mirror order dari master trader real-time",
                    timeframe: "1m/5m/15m/30m/1h",
                    otomatis: true,
                    highlight: true,
                  },
                  {
                    mode: "AI Signal",
                    kode: "aisignal",
                    cara: "Sinyal dari sistem AI analyzer, eksekusi otomatis",
                    timeframe: "Otomatis (tidak dipilih)",
                    otomatis: true,
                    highlight: false,
                  },
                  {
                    mode: "Indicator",
                    kode: "indicator",
                    cara: "Analisis teknikal: SMA, EMA, RSI",
                    timeframe: "N/A",
                    otomatis: true,
                    highlight: false,
                  },
                  {
                    mode: "Momentum",
                    kode: "momentum",
                    cara: "Deteksi 4 pola candlestick spesifik",
                    timeframe: "N/A",
                    otomatis: true,
                    highlight: false,
                  },
                ].map((item) => (
                  <div
                    key={item.mode}
                    className={`rounded-xl border px-4 py-3.5 ${item.highlight ? "bg-[#faf5ff] border-[#d8b4fe]" : "bg-white border-[rgba(26,22,18,0.07)]"}`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <p className="text-[13px] font-bold text-[#1a1612]">{item.mode}</p>
                        {item.highlight && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#f3e8ff] text-[#7c3aed] rounded-full">Mode Ini</span>
                        )}
                      </div>
                      <code className="text-[10px] font-mono text-[#6b6058] bg-[#f1f5f9] px-1.5 py-0.5 rounded">{item.kode}</code>
                    </div>
                    <p className="text-[12px] text-[#6b6058] mb-1">{item.cara}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-[#6b6058]">Timeframe: <strong className="text-[#1a1612]">{item.timeframe}</strong></span>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${item.otomatis ? "bg-[#dcfce7] text-[#14532d]" : "bg-[#fef3c7] text-[#92400e]"}`}>
                        {item.otomatis ? "Otomatis" : "Semi-manual"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <TipBox>
                CTC dan Fastrade FTT adalah satu-satunya mode yang punya pilihan timeframe. Mode lain (Signal, AI Signal, Indicator, Momentum) tidak memiliki pilihan timeframe karena cara kerjanya berbeda.
              </TipBox>
            </div>
          </section>

          {/* SECTION 6 — Tips */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Tips & Strategi</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Tips Memaksimalkan Performa Mode CTC</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mode CTC bekerja optimal saat dikonfigurasi dengan benar dan dijalankan dalam kondisi yang mendukung. Berikut tips berdasarkan cara kerja aplikasi:
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    tip: "Coba Demo Dulu",
                    desc: "Sebelum jalankan CTC dengan akun Real, aktifkan di akun Demo. Perhatikan seberapa sering sinyal masuk, win rate, dan bagaimana martingale bekerja. Ini penting untuk menentukan base amount yang tepat.",
                  },
                  {
                    tip: "Pastikan Koneksi Internet Stabil",
                    desc: "Mode CTC sangat bergantung pada koneksi real-time. Sinyal yang datang terlambat bisa menyebabkan eksekusi order di waktu yang kurang tepat. Gunakan WiFi atau koneksi 4G/5G yang stabil.",
                  },
                  {
                    tip: "Set Stop Loss yang Realistis",
                    desc: "Dengan mode CTC, Anda bergantung pada performa master trader. Lindungi diri dengan SL harian yang ketat — jika master sedang dalam drawdown, bot Anda ikut loss. SL menghentikan bot sebelum saldo habis.",
                  },
                  {
                    tip: "Mulai dengan Base Amount Kecil",
                    desc: "Saat pertama mencoba mode CTC, gunakan base amount minimum (Rp 14.000) atau base kecil lainnya. Setelah Anda lihat win rate dan pola trading master, baru tingkatkan base amount.",
                  },
                  {
                    tip: "Jangan Tutup Aplikasi Saat Bot Aktif",
                    desc: "Bot CTC perlu terhubung ke server untuk menerima sinyal. Jaga aplikasi tetap terbuka. Untuk PC/laptop, gunakan stcautotradepro.id di browser dan aktifkan 'prevent sleep mode'.",
                  },
                  {
                    tip: "Pantau Halaman History Secara Berkala",
                    desc: "Cek halaman History untuk melihat semua order yang dieksekusi — aset, arah, nominal, hasil, dan step martingale. Data ini penting untuk evaluasi performa mode CTC.",
                  },
                ].map((item) => (
                  <div key={item.tip} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5 flex gap-3">
                    <span className="text-[#3b82f6] font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{item.tip}</p>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 7 — Kesimpulan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Ringkasan</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesimpulan</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mode Fastrade CTC adalah salah satu fitur unggulan STC AutoTrade — copy trading yang benar-benar otomatis tanpa input manual apapun. Poin kunci yang perlu diingat:
              </p>
              <div className="space-y-3">
                {[
                  "Fastrade CTC (kode: ctc) adalah 1 dari 6 mode di STC AutoTrade v4.4 — bukan aplikasi terpisah.",
                  "Bot secara otomatis mirror order master trader real-time — tidak ada input manual dari user.",
                  "Nominal order yang dieksekusi adalah Base Amount yang Anda set sendiri, bukan nominal master.",
                  "Timeframe tersedia: 1m, 5m, 15m, 30m, 1h — sama seperti mode Fastrade FTT.",
                  "Wajib set Stop Loss dan Stop Profit sebelum mengaktifkan mode CTC.",
                  "Coba di akun Demo gratis terlebih dahulu untuk memahami cara kerjanya tanpa risiko finansial.",
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
                    q: "Apa itu mode Fastrade CTC di STC AutoTrade?",
                    a: "Fastrade CTC (kode: ctc) adalah salah satu dari 6 mode strategi di STC AutoTrade v4.4. CTC adalah mode Copy Trading — bot secara otomatis mirror atau mengikuti order dari master trader secara real-time. User tidak perlu input manual sama sekali; setiap order dari master langsung dieksekusi oleh bot.",
                  },
                  {
                    q: "Apakah aplikasi STC AutoTrade harus tetap terbuka saat CTC berjalan?",
                    a: "Bot STC AutoTrade perlu tetap aktif (tidak di-force close) agar dapat menerima dan mengeksekusi sinyal real-time dari master trader. Untuk penggunaan lebih stabil di PC/laptop, gunakan versi web di stcautotradepro.id dan jangan tutup tab browser.",
                  },
                  {
                    q: "Bisa gabungkan mode CTC dengan martingale?",
                    a: "Ya. Martingale bisa diaktifkan bersamaan dengan mode CTC. Saat terjadi loss, bot otomatis lanjut ke step martingale berikutnya sesuai konfigurasi (max step 1-7, multiplier 1.5x-5x). Fitur Always Signal juga tersedia untuk recovery otomatis.",
                  },
                  {
                    q: "Apakah perlu berlangganan atau membayar untuk mengikuti master trader di mode CTC?",
                    a: "Mode CTC di STC AutoTrade adalah fitur yang sudah termasuk dalam aplikasi — tidak ada biaya tambahan untuk mengaktifkannya. Fitur ini sudah terintegrasi dalam sistem STC AutoTrade v4.4 dan tersedia untuk semua pengguna yang terdaftar (whitelist).",
                  },
                  {
                    q: "Apa perbedaan Fastrade CTC dengan Fastrade FTT?",
                    a: "Keduanya termasuk dalam kategori Fastrade, tapi cara kerjanya berbeda: Fastrade FTT (Fast Trade) menganalisis pasar secara mandiri dan mengeksekusi order berdasarkan deteksi arah sendiri. Fastrade CTC (Copy Trading) mengikuti dan mirror order dari master trader secara real-time — tidak ada analisis mandiri. Keduanya mendukung timeframe: 1m, 5m, 15m, 30m, 1h.",
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
                  { href: "/artikel/sinyal-trading-stockity-gratis", title: "Sinyal Trading Stockity Gratis", desc: "Cara mendapatkan dan menggunakan sinyal trading gratis untuk STC AutoTrade." },
                  { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot Stockity", desc: "Panduan lengkap setting semua parameter bot STC AutoTrade untuk semua mode." },
                  { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading Stockity", desc: "Strategi dan tips memaksimalkan profit trading otomatis dengan STC AutoTrade." },
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
                <a href="/StcAutoTrade.apk" className="px-7 py-3.5 bg-white text-[#1a1612] text-sm font-bold rounded-xl no-underline">Download APK Android</a>
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
