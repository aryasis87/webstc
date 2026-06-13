/**
 * app/artikel/stockity-vs-binomo-vs-olymp-trade/page.tsx
 *
 * Target keyword:
 *   Primary  : stockity vs binomo
 *   Secondary: perbandingan platform binary option indonesia, stockity vs olymp trade,
 *              perbedaan stockity dan binomo, stockity lebih baik dari binomo,
 *              platform trading terbaik indonesia 2026, binary option indonesia terpercaya,
 *              stockity atau binomo mana yang lebih baik, review platform trading stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Stockity vs Binomo vs Olymp Trade: Perbandingan Platform Trading 2026",
  description:
    "Perbandingan objektif Stockity vs Binomo vs Olymp Trade — fitur, regulasi, payout, deposit minimum, dan kompatibilitas dengan robot trading otomatis. Mana yang terbaik untuk trader Indonesia 2026?",
  keywords: [
    "stockity vs binomo",
    "perbandingan platform binary option indonesia",
    "stockity vs olymp trade",
    "perbedaan stockity dan binomo",
    "stockity lebih baik dari binomo",
    "platform trading terbaik indonesia 2026",
    "binary option indonesia terpercaya",
    "stockity atau binomo mana yang lebih baik",
    "review platform trading stockity",
    "kelebihan stockity dibanding binomo",
    "trading stockity vs binomo 2026",
    "perbandingan stockity olymp trade binomo",
    "platform binary option indonesia 2026",
    "review stockity indonesia",
    "stockity lebih baik",
    "kekurangan binomo dibanding stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/stockity-vs-binomo-vs-olymp-trade",
  },
  openGraph: {
    title: "Stockity vs Binomo vs Olymp Trade: Perbandingan Platform Trading 2026",
    description:
      "Perbandingan objektif tiga platform trading populer di Indonesia — fitur, payout, regulasi, dan kompatibilitas bot otomatis.",
    url: "https://stcautotrade.id/artikel/stockity-vs-binomo-vs-olymp-trade",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-05-21T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Stockity vs Binomo vs Olymp Trade — Perbandingan 2026",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stockity vs Binomo vs Olymp Trade: Perbandingan Platform Trading 2026",
  description:
    "Perbandingan objektif Stockity, Binomo, dan Olymp Trade — fitur, regulasi, payout, deposit minimum, dan kompatibilitas bot trading.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: {
    "@type": "Organization",
    name: "STC AutoTrade",
    logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" },
  },
  datePublished: "2025-05-21",
  dateModified: "2026-05-21",
  image: "https://stcautotrade.id/og-image.webp",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://stcautotrade.id/artikel/stockity-vs-binomo-vs-olymp-trade",
  },
  keywords:
    "stockity vs binomo, stockity vs olymp trade, perbandingan platform binary option indonesia, platform trading terbaik indonesia 2026",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Stockity vs Binomo vs Olymp Trade",
      item: "https://stcautotrade.id/artikel/stockity-vs-binomo-vs-olymp-trade",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah Stockity lebih baik dari Binomo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tergantung kebutuhan. Stockity unggul dalam hal kompatibilitas dengan robot trading otomatis seperti STC AutoTrade, dan memiliki payout yang kompetitif. Binomo lebih dikenal karena antarmuka yang ramah pemula dan akun demo yang mudah diakses. Untuk trader yang ingin trading otomatis, Stockity lebih cocok.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Stockity aman dan terpercaya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stockity.id adalah platform trading binary option yang beroperasi untuk pasar Indonesia. Seperti semua platform binary option, pastikan Anda memahami risiko trading sebelum menggunakan modal nyata. Gunakan hanya modal yang siap Anda tanggung risikonya.",
      },
    },
    {
      "@type": "Question",
      name: "Platform mana yang paling cocok untuk robot trading otomatis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stockity.id adalah platform yang kompatibel dengan STC AutoTrade — robot trading gratis dengan 6 mode strategi. Tidak semua platform binary option mendukung integrasi dengan bot trading pihak ketiga.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa payout di Stockity dibanding Binomo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Payout di platform trading binary option bervariasi tergantung aset, durasi, dan kondisi pasar. Keduanya menawarkan payout kompetitif di kisaran 70–90% untuk aset populer. Angka spesifik bisa berubah — periksa langsung di platform masing-masing.",
      },
    },
  ],
};

/* ── Komponen Lokal ───────────────────────────────────────────── */

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

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">⚠️</span>
      <p className="text-[13px] text-[#92400e] leading-relaxed">{children}</p>
    </div>
  );
}

/* ── Comparison data ──────────────────────────────────────────── */

const COMPARISON_ROWS = [
  {
    aspek: "Kompatibilitas Bot Otomatis",
    stockity: { val: "✅ STC AutoTrade (gratis)", highlight: true },
    binomo: { val: "⚠️ Bot terbatas / tidak resmi", highlight: false },
    olymp: { val: "⚠️ Bot terbatas / tidak resmi", highlight: false },
  },
  {
    aspek: "Akun Demo",
    stockity: { val: "✅ Data pasar nyata", highlight: false },
    binomo: { val: "✅ Tersedia, virtual balance", highlight: false },
    olymp: { val: "✅ Tersedia, virtual balance", highlight: false },
  },
  {
    aspek: "Deposit Minimum",
    stockity: { val: "✅ Relatif rendah", highlight: false },
    binomo: { val: "✅ Relatif rendah ($10)", highlight: false },
    olymp: { val: "✅ Relatif rendah ($10)", highlight: false },
  },
  {
    aspek: "Payout Maksimal",
    stockity: { val: "✅ Kompetitif (varies)", highlight: false },
    binomo: { val: "✅ Hingga 87%", highlight: false },
    olymp: { val: "✅ Hingga 92%", highlight: false },
  },
  {
    aspek: "Mode Trading Otomatis",
    stockity: { val: "✅ 6 strategi via STC AutoTrade", highlight: true },
    binomo: { val: "❌ Tidak ada bot resmi", highlight: false },
    olymp: { val: "❌ Tidak ada bot resmi", highlight: false },
  },
  {
    aspek: "Stop Loss Otomatis",
    stockity: { val: "✅ Via STC AutoTrade", highlight: true },
    binomo: { val: "❌ Manual oleh trader", highlight: false },
    olymp: { val: "❌ Manual oleh trader", highlight: false },
  },
  {
    aspek: "Manajemen Risiko Bot",
    stockity: { val: "✅ Otomatis (SL, SP, Martingale)", highlight: true },
    binomo: { val: "❌ Sepenuhnya manual", highlight: false },
    olymp: { val: "❌ Sepenuhnya manual", highlight: false },
  },
  {
    aspek: "Cocok untuk Pemula",
    stockity: { val: "✅ Bot CTC / AI Signal", highlight: false },
    binomo: { val: "✅ UI intuitif", highlight: false },
    olymp: { val: "✅ UI intuitif", highlight: false },
  },
  {
    aspek: "Tersedia di iOS (iPhone)",
    stockity: { val: "✅ Via stcautotradepro.id", highlight: false },
    binomo: { val: "✅ App Store tersedia", highlight: false },
    olymp: { val: "✅ App Store tersedia", highlight: false },
  },
  {
    aspek: "Trading 24 Jam Otomatis",
    stockity: { val: "✅ Bot aktif tanpa pengawasan", highlight: true },
    binomo: { val: "❌ Harus trading manual", highlight: false },
    olymp: { val: "❌ Harus trading manual", highlight: false },
  },
];

/* ── Page ─────────────────────────────────────────────────────── */

export default function StockityVsBinomoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ─────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/cara-kerja" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">Cara Kerja</Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/60 hover:text-[#1a1612] transition-colors no-underline">FAQ</Link>
              <Link href="/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Download</Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ──────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/40 flex-wrap">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/artikel" className="hover:text-[#1a1612]/70 transition-colors no-underline">Artikel</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Stockity vs Binomo vs Olymp Trade</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#fef3c7] text-[#92400e] text-[11px] font-semibold rounded-full">Perbandingan</span>
            <span className="text-[12px] text-[#1a1612]/35">21 Mei 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±13 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Stockity vs Binomo vs Olymp Trade:<br className="hidden sm:block" />
            Perbandingan Platform Trading 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Trader Indonesia sering bingung memilih antara{" "}
            <strong className="font-semibold text-[#1a1612]">Stockity, Binomo, dan Olymp Trade</strong>.
            Artikel ini membandingkan ketiganya secara objektif — dari fitur, payout, hingga
            hal yang paling penting bagi pengguna STC AutoTrade:{" "}
            <strong className="font-semibold text-[#1a1612]">kompatibilitas dengan robot trading otomatis</strong>.
          </p>

          <WarningBox>
            <strong>Disclaimer penting:</strong> Artikel ini ditulis dari perspektif kompatibilitas
            dengan STC AutoTrade. Kami tidak berafiliasi dengan Binomo atau Olymp Trade, dan tidak
            memberikan rekomendasi investasi. Trading binary option mengandung risiko tinggi.
            Lakukan riset mandiri sebelum menggunakan platform manapun.
          </WarningBox>
        </header>

        {/* ── Article Body ────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── 01: Ringkasan Tiga Platform ───────────── */}
            <section>
              <SectionLabel>01 · Ringkasan Platform</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Mengenal Tiga Platform: Stockity, Binomo, dan Olymp Trade
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    nama: "Stockity",
                    tag: "Fokus artikel ini",
                    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
                    deskripsi: "Platform trading binary option yang beroperasi khusus untuk pasar Indonesia (Stockity.id). Kompatibel penuh dengan STC AutoTrade — robot trading gratis dengan 6 mode strategi.",
                    kelebihan: ["Bot trading gratis (STC AutoTrade)", "6 mode strategi otomatis", "Stop loss & profit otomatis", "Akun demo data nyata"],
                    cocokUntuk: "Trader yang ingin trading otomatis 24 jam",
                    icon: "🇮🇩",
                  },
                  {
                    nama: "Binomo",
                    tag: "Populer di Indonesia",
                    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
                    deskripsi: "Platform trading binary option global yang populer di kalangan trader Indonesia. Memiliki antarmuka yang intuitif dan program loyalitas berjenjang (Standard, Gold, VIP).",
                    kelebihan: ["UI ramah pemula", "Turnamen trading berhadiah", "Akun demo mudah diakses", "App mobile tersedia"],
                    cocokUntuk: "Pemula yang ingin belajar trading manual",
                    icon: "🌐",
                  },
                  {
                    nama: "Olymp Trade",
                    tag: "Platform Internasional",
                    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                    deskripsi: "Platform trading global dengan pilihan instrumen lebih bervariasi — binary option, FTT (Fixed Time Trade), dan trading forex. Payout bisa lebih tinggi untuk level VIP.",
                    kelebihan: ["Payout hingga 92%", "Lebih banyak instrumen", "Analisis edukasi lengkap", "App mobile iOS & Android"],
                    cocokUntuk: "Trader yang ingin variasi instrumen lebih banyak",
                    icon: "🌍",
                  },
                ].map((p) => (
                  <div key={p.nama} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{p.icon}</span>
                        <h3 className="text-[15px] font-semibold text-[#1a1612]">{p.nama}</h3>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.tagColor}`}>{p.tag}</span>
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed mb-3">{p.deskripsi}</p>
                    <div className="space-y-1.5 mb-3">
                      {p.kelebihan.map((k) => (
                        <div key={k} className="flex items-center gap-2 text-[12px] text-[#1a1612]/70">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                            <circle cx="6" cy="6" r="5.5" stroke="#3b82f6" strokeOpacity="0.3" />
                            <path d="M4 6L5.5 7.5L8.5 4.5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {k}
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#f9fafb] rounded-lg px-3 py-2 border border-[rgba(26,22,18,0.06)]">
                      <p className="text-[11px] text-[#1a1612]/40">Cocok untuk: {p.cocokUntuk}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 02: Tabel Perbandingan Lengkap ────────── */}
            <section>
              <SectionLabel>02 · Perbandingan Detail</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tabel Perbandingan: Stockity vs Binomo vs Olymp Trade
              </h2>
              <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                        <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-[#1a1612]/50 uppercase tracking-wider">Aspek</th>
                        <th className="text-center px-4 py-3.5 text-[11px] font-semibold text-[#1d4ed8] uppercase tracking-wider">Stockity 🇮🇩</th>
                        <th className="text-center px-4 py-3.5 text-[11px] font-semibold text-[#92400e] uppercase tracking-wider">Binomo 🌐</th>
                        <th className="text-center px-5 py-3.5 text-[11px] font-semibold text-[#166534] uppercase tracking-wider">Olymp Trade 🌍</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                      {COMPARISON_ROWS.map((row) => (
                        <tr key={row.aspek} className="hover:bg-[#f9fafb]">
                          <td className="px-5 py-3.5 font-medium text-[#1a1612]">{row.aspek}</td>
                          <td className={`px-4 py-3.5 text-center ${row.stockity.highlight ? "font-semibold text-[#1d4ed8] bg-[#eff6ff]" : "text-[#14532d]"}`}>
                            {row.stockity.val}
                          </td>
                          <td className="px-4 py-3.5 text-center text-[#1a1612]/60">{row.binomo.val}</td>
                          <td className="px-5 py-3.5 text-center text-[#1a1612]/60">{row.olymp.val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-5 py-3 bg-[#f9fafb] border-t border-[rgba(26,22,18,0.06)]">
                  <p className="text-[11px] text-[#1a1612]/35">
                    Perbandingan berfokus pada fitur yang relevan untuk pengguna STC AutoTrade. Data dapat berubah — verifikasi langsung di platform masing-masing.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 03: Keunggulan Stockity untuk Bot ────── */}
            <section>
              <SectionLabel>03 · Keunggulan Utama</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Mengapa Stockity Unggul untuk Robot Trading Otomatis?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Satu keunggulan Stockity yang tidak dimiliki Binomo dan Olymp Trade secara
                  built-in adalah kompatibilitas penuh dengan{" "}
                  <strong className="text-[#1a1612]">STC AutoTrade</strong> — robot trading
                  gratis dengan manajemen risiko otomatis. Ini menciptakan perbedaan fundamental
                  dalam pengalaman trading:
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Perbandingan pengalaman */}
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-[#dbeafe] flex items-center justify-center text-sm">🤖</div>
                      <h3 className="text-[14px] font-semibold text-[#1a1612]">Trading di Stockity + STC AutoTrade</h3>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        "Bot menganalisis pasar dan eksekusi order otomatis",
                        "Stop loss & stop profit dijalankan tanpa intervensi manual",
                        "Bisa aktif 24 jam — bahkan saat tidur atau bekerja",
                        "Tidak perlu menatap chart setiap momen",
                        "6 strategi berbeda tersedia sesuai kondisi pasar",
                        "Mode demo dengan data pasar nyata untuk latihan",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[12px] text-[#1a1612]/70">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                            <circle cx="7" cy="7" r="6.5" stroke="#3b82f6" strokeOpacity="0.3" />
                            <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-[#f3f4f6] flex items-center justify-center text-sm">👤</div>
                      <h3 className="text-[14px] font-semibold text-[#1a1612]">Trading Manual di Binomo / Olymp Trade</h3>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        "Setiap order perlu keputusan manual trader",
                        "Stop loss harus diawasi dan dieksekusi sendiri",
                        "Trading aktif membutuhkan waktu dan perhatian penuh",
                        "Rentan keputusan emosional (fear, greed, FOMO)",
                        "Tidak bisa trading saat sibuk atau tidur",
                        "Disiplin manajemen risiko sepenuhnya bergantung trader",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-[12px] text-[#1a1612]/60">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                            <circle cx="7" cy="7" r="6.5" stroke="rgba(26,22,18,0.2)" />
                            <path d="M5 5l4 4M9 5l-4 4" stroke="rgba(26,22,18,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <InfoBox icon="🔑" title="Perbedaan utama yang sering diabaikan">
                  Perbedaan antara trading manual dan trading otomatis bukan hanya soal
                  kenyamanan — ini soal konsistensi. Robot tidak pernah panik, tidak pernah
                  serakah, tidak pernah lupa stop loss. Di jangka panjang, konsistensi
                  manajemen risiko jauh lebih menentukan hasil daripada keputusan trading individual.
                </InfoBox>
              </div>
            </section>

            {/* ── 04: Kapan Pilih Yang Mana ─────────────── */}
            <section>
              <SectionLabel>04 · Rekomendasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Pilih Platform yang Tepat Berdasarkan Tujuan Trading Anda
              </h2>
              <div className="space-y-3">
                {[
                  {
                    kondisi: "Ingin trading otomatis tanpa pantau chart terus-menerus",
                    pilihan: "Stockity + STC AutoTrade",
                    alasan: "Satu-satunya kombinasi platform + bot gratis dengan 6 strategi dan manajemen risiko otomatis penuh.",
                    icon: "🤖",
                    highlight: true,
                  },
                  {
                    kondisi: "Baru mengenal binary option, mau belajar trading manual dulu",
                    pilihan: "Binomo atau Olymp Trade",
                    alasan: "Keduanya memiliki UI ramah pemula, materi edukasi, dan akun demo yang mudah. Cocok untuk fase belajar sebelum beralih ke trading otomatis.",
                    icon: "📚",
                    highlight: false,
                  },
                  {
                    kondisi: "Sudah trading manual, mau beralih ke otomatis",
                    pilihan: "Pindah ke Stockity + STC AutoTrade",
                    alasan: "Pengalaman trading manual Anda akan sangat membantu dalam memilih dan mengkonfigurasi strategi yang tepat di STC AutoTrade.",
                    icon: "🔄",
                    highlight: true,
                  },
                  {
                    kondisi: "Ingin trading berbagai instrumen (forex, saham, dll)",
                    pilihan: "Olymp Trade",
                    alasan: "Olymp Trade menyediakan lebih banyak instrumen termasuk mode Forex. Namun trading otomatis tetap tidak tersedia secara native.",
                    icon: "📊",
                    highlight: false,
                  },
                  {
                    kondisi: "Mau ikut turnamen trading berhadiah",
                    pilihan: "Binomo",
                    alasan: "Binomo aktif menyelenggarakan turnamen trading yang bisa dimainkan dengan akun demo atau real.",
                    icon: "🏆",
                    highlight: false,
                  },
                ].map((item, i) => (
                  <div key={i} className={`border rounded-xl px-5 py-4 ${item.highlight ? "bg-[#eff6ff] border-[#bfdbfe]" : "bg-white border-[rgba(26,22,18,0.08)]"}`}>
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-[12px] text-[#1a1612]/50 mb-1">Jika: {item.kondisi}</p>
                        <p className={`text-[13px] font-bold mb-1 ${item.highlight ? "text-[#1d4ed8]" : "text-[#1a1612]"}`}>
                          → {item.pilihan}
                        </p>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.alasan}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 05: Cara Mulai di Stockity ────────────── */}
            <section>
              <SectionLabel>05 · Mulai di Stockity</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Mulai Trading Otomatis di Stockity dengan STC AutoTrade
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  {
                    n: "1",
                    title: "Download STC AutoTrade",
                    desc: "Download APK dari stcautotrade.id (Android) atau buka stcautotradepro.id (semua perangkat termasuk iPhone dan PC).",
                  },
                  {
                    n: "2",
                    title: "Daftar akun Stockity.id gratis",
                    desc: "Pilih 'Daftar Akun Baru' di aplikasi STC AutoTrade. Proses dilakukan langsung di dalam aplikasi — cepat dan gratis.",
                  },
                  {
                    n: "3",
                    title: "Mulai dari mode demo",
                    desc: "Sebelum deposit, gunakan mode demo untuk mengenal platform dan validasi strategi. Demo menggunakan data pasar Stockity yang nyata.",
                  },
                  {
                    n: "4",
                    title: "Deposit dan trading real",
                    desc: "Setelah strategi teruji di demo minimal 7 hari, deposit ke akun Stockity.id sesuai kemampuan (disarankan minimal Rp 300.000–500.000).",
                  },
                  {
                    n: "5",
                    title: "Aktifkan bot dengan stop loss",
                    desc: "Pastikan stop loss dan stop profit sudah diset sebelum mengaktifkan bot. Trading otomatis siap berjalan 24 jam.",
                  },
                ].map((s) => (
                  <div key={s.n} className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
                    <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">{s.n}</div>
                    <div className="pt-0.5">
                      <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{s.title}</p>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Stockity vs Binomo vs Olymp Trade
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Apakah Stockity lebih baik dari Binomo?",
                    a: "Tergantung tujuan. Untuk trading otomatis dengan robot, Stockity lebih unggul karena kompatibel dengan STC AutoTrade — bot gratis dengan 6 strategi dan manajemen risiko otomatis. Untuk trading manual dengan UI ramah pemula, Binomo memiliki antarmuka yang intuitif.",
                  },
                  {
                    q: "Bisakah menggunakan STC AutoTrade di Binomo atau Olymp Trade?",
                    a: "Tidak. STC AutoTrade dirancang khusus untuk platform Stockity.id. Binomo dan Olymp Trade memiliki sistem API yang berbeda dan tidak kompatibel dengan STC AutoTrade.",
                  },
                  {
                    q: "Apakah Stockity aman?",
                    a: "Stockity.id adalah platform binary option untuk pasar Indonesia. Seperti semua platform trading, pahami risiko sebelum menggunakan dana nyata. Gunakan hanya modal yang siap Anda tanggung risikonya.",
                  },
                  {
                    q: "Apakah bisa punya akun di ketiganya sekaligus?",
                    a: "Secara teknis mungkin — tidak ada larangan memiliki akun di beberapa platform. Namun untuk efektivitas belajar, fokus pada satu platform terlebih dahulu hingga benar-benar paham.",
                  },
                  {
                    q: "Mana yang lebih cocok untuk pemula absolut?",
                    a: "Jika ingin trading manual: Binomo atau Olymp Trade karena UI lebih sederhana dan ada materi edukasi. Jika ingin trading otomatis dari awal: Stockity + STC AutoTrade — mode CTC Copy Trading tidak memerlukan analisis manual sama sekali.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Kesimpulan ────────────────────────────── */}
            <section>
              <SectionLabel>07 · Kesimpulan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kesimpulan: Platform Mana yang Tepat untuk Anda?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Jika tujuan Anda adalah <strong className="text-[#1a1612]">trading otomatis 24 jam
                  dengan manajemen risiko terkelola</strong>, pilihan jelas adalah{" "}
                  <strong className="text-[#1a1612]">Stockity + STC AutoTrade</strong> — kombinasi
                  platform dan robot trading gratis yang tidak tersedia di Binomo atau Olymp Trade.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Binomo dan Olymp Trade tetap pilihan valid untuk trader yang prefer trading
                  manual, ingin variasi instrumen lebih banyak, atau sedang dalam fase belajar
                  sebelum beralih ke trading otomatis.
                </p>
                <WarningBox>
                  <strong>Disclaimer:</strong> Perbandingan ini berdasarkan fitur yang relevan
                  dengan STC AutoTrade dan bukan merupakan rekomendasi investasi. Semua platform
                  trading mengandung risiko kerugian. Selalu lakukan riset mandiri sebelum
                  menggunakan platform manapun dengan dana nyata.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade Stockity 2026" },
                { href: "/artikel/auto-trade-stockity-gratis", title: "Auto Trade Stockity Gratis", desc: "Cara dapat akses bot Stockity tanpa biaya" },
                { href: "/download", title: "Download STC AutoTrade", desc: "APK Android & versi web — gratis" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-4 hover:border-[#3b82f6]/30 hover:shadow-sm transition-all no-underline">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1 group-hover:text-[#3b82f6] transition-colors">{l.title} →</p>
                  <p className="text-[12px] text-[#6b6058]">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-1.5">Stockity + STC AutoTrade</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Mulai Trading Otomatis di Stockity — Gratis</p>
              <p className="text-[13px] text-[#6b6058]">Download STC AutoTrade dan mulai dari mode demo tanpa deposit.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">
                Download Gratis
              </Link>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">
                Versi Web
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#1a1612]/25">
              © 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id
            </p>
            <Link href="/" className="text-[11px] text-[#1a1612]/35 hover:text-[#1a1612]/60 transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}