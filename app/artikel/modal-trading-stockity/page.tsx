/**
 * app/artikel/modal-trading-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : modal trading stockity
 *   Secondary: modal minimum stockity, berapa modal untuk trading stockity,
 *              modal awal stockity, berapa modal bot stockity, cara mulai stockity modal kecil,
 *              modal minimal stockity otomatis, trading stockity pemula modal berapa,
 *              modal deposit stockity, cara trading stockity dengan modal kecil
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Modal Trading Stockity: Berapa Minimum & Cara Mulai dengan Modal Kecil 2026",
  description:
    "Panduan lengkap modal trading Stockity — berapa modal minimum yang dibutuhkan, cara hitung buffer martingale, tabel simulasi modal vs potensi profit, dan strategi mulai dari modal Rp 300.000.",
  keywords: [
    "modal trading stockity",
    "modal minimum stockity",
    "berapa modal untuk trading stockity",
    "modal awal stockity",
    "berapa modal bot stockity",
    "cara mulai stockity modal kecil",
    "modal minimal stockity otomatis",
    "trading stockity pemula modal berapa",
    "modal deposit stockity",
    "cara trading stockity dengan modal kecil",
    "modal minimum auto trade stockity",
    "stockity trading modal 300rb",
    "modal minimal stcautotrade",
    "berapa modal untuk robot stockity",
    "trading stockity berapa rupiah",
    "cara hitung modal bot stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/modal-trading-stockity",
  },
  openGraph: {
    title: "Modal Trading Stockity: Berapa Minimum & Cara Mulai 2026",
    description:
      "Berapa modal minimum untuk trading Stockity otomatis? Panduan lengkap kalkulasi martingale, tabel simulasi, dan strategi modal kecil.",
    url: "https://stcautotrade.id/artikel/modal-trading-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-05-21T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Modal Trading Stockity — Panduan Kalkulasi Modal",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Modal Trading Stockity: Berapa Minimum & Cara Mulai dengan Modal Kecil 2026",
  description:
    "Panduan kalkulasi modal trading Stockity — minimum yang dibutuhkan, buffer martingale, simulasi profit/loss, dan strategi modal kecil.",
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
    "@id": "https://stcautotrade.id/artikel/modal-trading-stockity",
  },
  keywords:
    "modal trading stockity, modal minimum stockity, berapa modal untuk trading stockity, modal awal stockity",
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
      name: "Modal Trading Stockity",
      item: "https://stcautotrade.id/artikel/modal-trading-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa modal minimum untuk trading Stockity otomatis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modal minimum absolut di Stockity.id adalah sesuai ketentuan platform, namun untuk menggunakan STC AutoTrade dengan aman, kami sarankan minimal Rp 300.000 untuk profil konservatif (nominal Rp 14.000, multiplier 2×, 3 step) atau Rp 500.000 untuk profil standar (multiplier 2,5×).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa trading Stockity dengan modal Rp 100.000?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara teknis mungkin, namun sangat tidak disarankan. Modal Rp 100.000 tidak cukup untuk buffer martingale bahkan 2 step — satu siklus loss bisa menguras modal sepenuhnya. Modal minimal yang aman adalah Rp 300.000 dengan setting paling konservatif.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa potensi profit harian dari trading Stockity otomatis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Potensi profit sangat bergantung pada nominal, strategi, dan kondisi pasar. Dengan modal Rp 500.000 dan setting konservatif, target profit harian yang realistis adalah Rp 50.000–200.000. Angka lebih tinggi mungkin terjadi, namun tidak konsisten setiap hari.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menghitung modal yang dibutuhkan untuk bot Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rumus: Modal = (Nominal × Multiplier^1) + (Nominal × Multiplier^2) + ... + (Nominal × Multiplier^MaxStep) + Buffer Stop Loss. Contoh: Nominal Rp 14.000, multiplier 2,5×, 3 step = Rp 35.000 + Rp 87.500 + Rp 218.750 = Rp 341.250 total eksposur. Ditambah buffer stop loss (misal Rp 100.000) = Rp 441.250. Disarankan Rp 500.000.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah modal di Stockity bisa ditarik kembali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, deposit dan profit di Stockity.id bisa ditarik (withdrawal) sesuai prosedur platform Stockity.id. STC AutoTrade hanya berperan sebagai bot trading — tidak menyimpan atau mengelola dana Anda.",
      },
    },
  ],
};

/* ── Data Kalkulasi ───────────────────────────────────────────── */

type ModalProfile = {
  label: string;
  color: string;
  badgeColor: string;
  nominal: number;
  multiplier: number;
  steps: number;
  stopLoss: number;
  modal: number;
  targetProfitHarian: number;
  for: string;
};

const MODAL_PROFILES: ModalProfile[] = [
  {
    label: "Pemula Ketat",
    color: "border-l-emerald-400",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    nominal: 14000,
    multiplier: 2.0,
    steps: 3,
    stopLoss: 60000,
    modal: 300000,
    targetProfitHarian: 50000,
    for: "Baru coba, modal terbatas",
  },
  {
    label: "Standar Pemula",
    color: "border-l-blue-400",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    nominal: 14000,
    multiplier: 2.5,
    steps: 3,
    stopLoss: 100000,
    modal: 500000,
    targetProfitHarian: 100000,
    for: "Pemula yang serius",
  },
  {
    label: "Intermediate",
    color: "border-l-amber-400",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    nominal: 25000,
    multiplier: 2.5,
    steps: 3,
    stopLoss: 200000,
    modal: 1000000,
    targetProfitHarian: 250000,
    for: "7+ hari demo, win rate stabil",
  },
  {
    label: "Advanced",
    color: "border-l-rose-400",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    nominal: 50000,
    multiplier: 3.0,
    steps: 3,
    stopLoss: 500000,
    modal: 3000000,
    targetProfitHarian: 750000,
    for: "Trader berpengalaman",
  },
];

function calcMartingaleExposure(nominal: number, multiplier: number, steps: number): number[] {
  const arr: number[] = [];
  let current = nominal;
  for (let i = 0; i < steps; i++) {
    current = Math.round(current * multiplier);
    arr.push(current);
  }
  return arr;
}

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

/* ── Page ─────────────────────────────────────────────────────── */

export default function ModalTradingStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Modal Trading Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dcfce7] text-[#15803d] text-[11px] font-semibold rounded-full">Panduan Modal</span>
            <span className="text-[12px] text-[#1a1612]/35">21 Mei 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±14 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Modal Trading Stockity:<br className="hidden sm:block" />
            Berapa yang Dibutuhkan & Cara Mulai Kecil
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Salah satu pertanyaan paling umum dari pemula:{" "}
            <strong className="font-semibold text-[#1a1612]">berapa modal untuk trading Stockity</strong>{" "}
            dengan bot otomatis? Artikel ini menjawab secara spesifik — lengkap dengan
            tabel kalkulasi martingale, rekomendasi per profil risiko, dan cara memulai
            dari <strong className="font-semibold text-[#1a1612]">modal Rp 300.000</strong>.
          </p>

          {/* Key takeaway box */}
          <div className="mt-7 bg-white border border-[rgba(26,22,18,0.09)] rounded-2xl px-6 py-5">
            <p className="text-[11px] font-semibold text-[#1a1612]/40 uppercase tracking-wider mb-3">Ringkasan Cepat</p>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { label: "Modal Minimum Aman", value: "Rp 300rb", sub: "Profil paling konservatif" },
                { label: "Modal Standar Pemula", value: "Rp 500rb", sub: "Disarankan untuk awal" },
                { label: "Modal Intermediate", value: "Rp 1 juta", sub: "Nominal lebih besar" },
                { label: "Modal Advanced", value: "Rp 3 juta+", sub: "Profil agresif" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-[family-name:var(--font-dm-serif)] text-xl text-[#1a1612] mb-0.5">{item.value}</p>
                  <p className="text-[11px] font-semibold text-[#1a1612] mb-0.5">{item.label}</p>
                  <p className="text-[10px] text-[#6b6058]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── Article Body ────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── 01: Kenapa Modal Penting ──────────────── */}
            <section>
              <SectionLabel>01 · Dasar Perhitungan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kenapa Modal Harus Dihitung dengan Tepat?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Modal trading Stockity bukan hanya soal "berapa yang Anda miliki" —
                  ini soal <strong className="text-[#1a1612]">berapa yang dibutuhkan bot untuk
                  berjalan dengan aman</strong> tanpa risiko margin call atau modal habis
                  sebelum stop loss bekerja.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Di STC AutoTrade, modal perlu mencakup tiga komponen:
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      n: "1",
                      icon: "💰",
                      title: "Buffer Martingale",
                      desc: "Modal yang cukup untuk menanggung seluruh siklus martingale (nominal awal × multiplier × jumlah step) jika terjadi serangkaian loss.",
                      penting: "Komponen terbesar",
                    },
                    {
                      n: "2",
                      icon: "🛡️",
                      title: "Buffer Stop Loss",
                      desc: "Dana cadangan di atas total eksposur martingale, sebesar nilai stop loss yang Anda set — agar bot sempat berhenti sebelum modal benar-benar habis.",
                      penting: "Wajib ada",
                    },
                    {
                      n: "3",
                      icon: "📊",
                      title: "Dana Operasional",
                      desc: "Modal untuk order-order normal (non-martingale) selama bot berjalan di kondisi pasar baik. Biasanya sudah ter-cover oleh buffer martingale.",
                      penting: "Sudah ter-cover",
                    },
                  ].map((c) => (
                    <div key={c.n} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <p className="text-[10px] font-semibold text-[#3b82f6] uppercase tracking-wider mb-1">{c.penting}</p>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{c.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>

                <InfoBox icon="📐" title="Formula sederhana modal aman">
                  Modal Aman = Total Eksposur Martingale + Nilai Stop Loss yang Diset.
                  Contoh: Eksposur martingale Rp 341.000 + Stop Loss Rp 100.000 = Modal minimum Rp 441.000 → bulatkan ke Rp 500.000.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Tabel Kalkulasi Martingale ────────── */}
            <section>
              <SectionLabel>02 · Kalkulasi Modal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Tabel Kalkulasi Modal per Profil Risiko
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed mb-5">
                Berikut empat profil <strong className="text-[#1a1612]">modal trading Stockity</strong>{" "}
                yang kami rekomendasikan — dari paling konservatif hingga agresif:
              </p>

              <div className="space-y-4">
                {MODAL_PROFILES.map((profile) => {
                  const steps = calcMartingaleExposure(profile.nominal, profile.multiplier, profile.steps);
                  const totalEksposur = steps.reduce((a, b) => a + b, 0) + profile.nominal;
                  return (
                    <div key={profile.label} className={`bg-white border border-[rgba(26,22,18,0.08)] border-l-4 ${profile.color} rounded-2xl overflow-hidden`}>
                      {/* Header */}
                      <div className="px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${profile.badgeColor}`}>
                            {profile.label}
                          </span>
                          <p className="text-[12px] text-[#6b6058]">{profile.for}</p>
                        </div>
                        <p className="text-[13px] font-bold text-[#1a1612]">
                          Modal: Rp {profile.modal.toLocaleString("id")}
                        </p>
                      </div>
                      {/* Detail */}
                      <div className="px-6 pb-5 grid sm:grid-cols-2 gap-5">
                        {/* Konfigurasi */}
                        <div>
                          <p className="text-[11px] font-semibold text-[#1a1612]/40 uppercase tracking-wider mb-2.5">Konfigurasi Bot</p>
                          <div className="space-y-1.5">
                            {[
                              { k: "Nominal Awal", v: `Rp ${profile.nominal.toLocaleString("id")}` },
                              { k: "Multiplier", v: `${profile.multiplier}×` },
                              { k: "Max Step", v: `${profile.steps} step` },
                              { k: "Stop Loss Disarankan", v: `Rp ${profile.stopLoss.toLocaleString("id")}` },
                              { k: "Target Profit/Hari", v: `Rp ${profile.targetProfitHarian.toLocaleString("id")}` },
                            ].map((row) => (
                              <div key={row.k} className="flex items-center justify-between text-[12px] py-1 border-b border-[rgba(26,22,18,0.05)] last:border-0">
                                <span className="text-[#1a1612]/50">{row.k}</span>
                                <span className="font-semibold text-[#1a1612]">{row.v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Siklus Martingale */}
                        <div>
                          <p className="text-[11px] font-semibold text-[#1a1612]/40 uppercase tracking-wider mb-2.5">Siklus Martingale (Jika Loss Beruntun)</p>
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[12px] py-1 border-b border-[rgba(26,22,18,0.05)]">
                              <span className="text-[#1a1612]/50">Order Normal</span>
                              <span className="font-semibold text-[#1a1612]">Rp {profile.nominal.toLocaleString("id")}</span>
                            </div>
                            {steps.map((s, i) => (
                              <div key={i} className="flex items-center justify-between text-[12px] py-1 border-b border-[rgba(26,22,18,0.05)] last:border-0">
                                <span className="text-[#1a1612]/50">Kompensasi Step {i + 1}</span>
                                <span className={`font-semibold ${i === steps.length - 1 ? "text-rose-600" : "text-[#1a1612]"}`}>
                                  Rp {s.toLocaleString("id")}
                                </span>
                              </div>
                            ))}
                            <div className="flex items-center justify-between text-[12px] py-2 bg-[#f9fafb] rounded-lg px-3 mt-2">
                              <span className="font-semibold text-[#1a1612]/60">Total Eksposur Maksimal</span>
                              <span className="font-bold text-[#1a1612]">Rp {totalEksposur.toLocaleString("id")}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-[12px] text-[#1a1612]/40">
                Total eksposur maksimal = nominal awal + semua step kompensasi. Modal harus melebihi angka ini ditambah buffer stop loss.
              </p>
            </section>

            {/* ── 03: Cara Mulai Modal Kecil ────────────── */}
            <section>
              <SectionLabel>03 · Modal Kecil</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Trading Stockity dengan Modal Kecil (Rp 300.000)
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Bisa mulai dengan modal kecil — asalkan menggunakan{" "}
                  <strong className="text-[#1a1612]">setting yang disesuaikan</strong>.
                  Berikut konfigurasi yang aman untuk modal Rp 300.000:
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] border-l-4 border-l-emerald-400 rounded-2xl p-6">
                  <p className="text-[11px] font-semibold text-[#15803d] uppercase tracking-wider mb-4">
                    Setting Optimal: Modal Rp 300.000
                  </p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      {[
                        { k: "Nominal Awal", v: "Rp 14.000", c: "" },
                        { k: "Multiplier", v: "2,0× (bukan 2,5×)", c: "text-emerald-600" },
                        { k: "Max Step", v: "3", c: "" },
                        { k: "Stop Loss Harian", v: "Rp 60.000", c: "" },
                        { k: "Stop Profit Harian", v: "Rp 120.000–150.000", c: "" },
                        { k: "Strategi", v: "CTC Copy Trading / AI Signal", c: "" },
                      ].map((row) => (
                        <div key={row.k} className="flex items-center justify-between text-[13px] py-1.5 border-b border-[rgba(26,22,18,0.05)] last:border-0">
                          <span className="text-[#6b6058]">{row.k}</span>
                          <span className={`font-semibold text-[#1a1612] ${row.c}`}>{row.v}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Mengapa multiplier 2,0× bukan 2,5×?</p>
                      <div className="bg-[#f9fafb] rounded-xl px-4 py-3 border border-[rgba(26,22,18,0.07)] text-[12px] text-[#6b6058] leading-relaxed space-y-2">
                        <p>Dengan multiplier 2,0×, total eksposur 3 step = Rp 28K + Rp 56K + Rp 112K = Rp 196.000.</p>
                        <p>Ditambah nominal awal Rp 14.000 + stop loss buffer Rp 60.000 = <strong className="text-[#1a1612]">total Rp 270.000</strong> — masih di bawah modal Rp 300.000.</p>
                        <p>Dengan multiplier 2,5×, total eksposur sudah Rp 341.000 — melebihi modal Rp 300.000.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulasi hari pertama */}
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1a1612] mb-3">
                    Simulasi Skenario: Modal Rp 300.000 dalam 7 Hari
                  </h3>
                  <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[12px]">
                        <thead>
                          <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                            <th className="text-left px-5 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase tracking-wider">Skenario</th>
                            <th className="text-right px-4 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase tracking-wider">Hasil/Hari</th>
                            <th className="text-right px-4 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase tracking-wider">7 Hari</th>
                            <th className="text-right px-5 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase tracking-wider">Modal Akhir</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                          {[
                            { s: "Hari bagus (win rate 65%)", h: "+Rp 80.000", t: "+Rp 560.000", m: "Rp 860.000", color: "text-emerald-600" },
                            { s: "Hari normal (win rate 55%)", h: "+Rp 40.000", t: "+Rp 280.000", m: "Rp 580.000", color: "text-blue-600" },
                            { s: "Hari buruk (stop loss hit)", h: "–Rp 60.000", t: "–Rp 60.000 (1 hari)", m: "Rp 240.000", color: "text-rose-600" },
                            { s: "Mixed 7 hari (5 profit, 2 loss)", h: "±varies", t: "+Rp 140.000", m: "Rp 440.000", color: "text-amber-600" },
                          ].map((row) => (
                            <tr key={row.s} className="hover:bg-[#f9fafb]">
                              <td className="px-5 py-3.5 text-[#1a1612]/70">{row.s}</td>
                              <td className={`px-4 py-3.5 text-right font-semibold ${row.color}`}>{row.h}</td>
                              <td className={`px-4 py-3.5 text-right font-semibold ${row.color}`}>{row.t}</td>
                              <td className="px-5 py-3.5 text-right font-bold text-[#1a1612]">{row.m}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-5 py-3 bg-[#f9fafb] border-t border-[rgba(26,22,18,0.06)]">
                      <p className="text-[11px] text-[#1a1612]/35">
                        Simulasi berdasarkan target profit harian Rp 120.000 dan stop loss Rp 60.000. Hasil nyata bervariasi tergantung kondisi pasar.
                      </p>
                    </div>
                  </div>
                </div>

                <WarningBox>
                  <strong>Angka di atas adalah simulasi, bukan jaminan.</strong> Win rate harian
                  sangat bergantung pada kondisi pasar, strategi yang dipilih, dan waktu trading.
                  Selalu gunakan mode demo terlebih dahulu untuk memvalidasi strategi sebelum
                  menggunakan modal nyata.
                </WarningBox>
              </div>
            </section>

            {/* ── 04: Strategi Naikkan Modal ────────────── */}
            <section>
              <SectionLabel>04 · Skala Modal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kapan dan Bagaimana Menaikkan Modal Trading Stockity?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Salah satu kesalahan terbesar pemula adalah menaikkan modal (atau nominal)
                  terlalu cepat — sebelum strategi terbukti konsisten. Berikut panduan kapan
                  boleh naik ke level berikutnya:
                </p>

                <div className="space-y-3 max-w-2xl">
                  {[
                    {
                      kondisi: "Minggu 1–2",
                      status: "Demo Only",
                      statusColor: "bg-blue-50 text-blue-700",
                      syarat: "Uji strategi di mode demo. Win rate harus di atas 50% selama 7–14 hari berturut-turut.",
                      larangan: "Jangan pernah mulai real sebelum fase ini selesai.",
                    },
                    {
                      kondisi: "Minggu 3–4",
                      status: "Real Modal Kecil",
                      statusColor: "bg-emerald-50 text-emerald-700",
                      syarat: "Mulai real dengan modal Rp 300.000–500.000 dan setting konservatif. Win rate real harus konsisten di atas 50%.",
                      larangan: "Jangan naikkan nominal atau modal sebelum 2 minggu real yang konsisten.",
                    },
                    {
                      kondisi: "Bulan 2",
                      status: "Naik ke Intermediate",
                      statusColor: "bg-amber-50 text-amber-700",
                      syarat: "Setelah 30+ hari real konsisten, naikkan ke profil Intermediate (Rp 1 juta, nominal Rp 25.000).",
                      larangan: "Jangan skip fase — langsung dari Rp 300K ke Rp 1 juta tanpa track record.",
                    },
                    {
                      kondisi: "Bulan 3+",
                      status: "Skala Bertahap",
                      statusColor: "bg-rose-50 text-rose-700",
                      syarat: "Naikkan modal hanya dari profit yang sudah dihasilkan — bukan dari tambahan modal baru. Prinsip: trading dengan profit, bukan modal tabungan.",
                      larangan: "Hindari meminjam uang untuk modal trading.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${item.statusColor}`}>{item.status}</span>
                        <span className="text-[12px] text-[#1a1612]/40">{item.kondisi}</span>
                      </div>
                      <p className="text-[13px] text-[#1a1612] mb-2 leading-relaxed">{item.syarat}</p>
                      <p className="text-[12px] text-rose-600 font-medium">⛔ {item.larangan}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 05: Kesalahan Modal ───────────────────── */}
            <section>
              <SectionLabel>05 · Kesalahan Umum</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                5 Kesalahan Modal Paling Umum Trader Stockity Pemula
              </h2>
              <div className="space-y-3">
                {[
                  {
                    n: "01",
                    judul: "Modal tidak cukup untuk full siklus martingale",
                    detail: "Jika modal tidak mencukupi step martingale terakhir, bot akan gagal mengeksekusi order kompensasi — justru mengunci kerugian. Selalu hitung total eksposur sebelum start.",
                    warna: "text-rose-600",
                  },
                  {
                    n: "02",
                    judul: "Tidak set stop loss — biarkan bot jalan tanpa batas",
                    detail: "Tanpa stop loss, satu hari buruk bisa menguras sebagian besar modal. Stop loss adalah lapisan keamanan wajib — bukan opsional.",
                    warna: "text-rose-600",
                  },
                  {
                    n: "03",
                    judul: "Langsung pakai nominal besar tanpa demo",
                    detail: "Banyak pemula tergoda langsung pakai nominal besar karena ingin profit cepat. Tanpa validasi di demo, strategi yang buruk akan terdeteksi saat modal sudah terkuras.",
                    warna: "text-rose-600",
                  },
                  {
                    n: "04",
                    judul: "Menaikkan modal saat sedang rugi ('average down')",
                    detail: "Menambah modal saat sedang dalam siklus loss adalah reaksi emosional yang berbahaya. Bot sudah ada sistem martingale — tambahan modal manual bisa merusak kalkulasi.",
                    warna: "text-amber-600",
                  },
                  {
                    n: "05",
                    judul: "Menggunakan uang kebutuhan pokok sebagai modal",
                    detail: "Modal trading harus dari dana yang benar-benar 'siap hilang'. Menggunakan dana darurat, tabungan wajib, atau uang pinjaman untuk trading adalah keputusan finansial yang sangat berisiko.",
                    warna: "text-amber-600",
                  },
                ].map((item) => (
                  <div key={item.n} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4 flex gap-4">
                    <div className={`text-[18px] font-[family-name:var(--font-dm-serif)] font-normal ${item.warna} flex-shrink-0 w-8`}>{item.n}</div>
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.judul}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Modal Trading Stockity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Berapa modal minimum untuk trading Stockity otomatis?",
                    a: "Modal minimum yang aman adalah Rp 300.000 dengan profil paling konservatif: nominal Rp 14.000, multiplier 2,0×, max step 3. Untuk profil standar pemula (multiplier 2,5×), disarankan Rp 500.000.",
                  },
                  {
                    q: "Apakah bisa mulai dengan Rp 100.000?",
                    a: "Secara teknis mungkin, namun sangat tidak disarankan. Modal Rp 100.000 tidak cukup untuk buffer martingale — bahkan satu siklus loss di step 2 atau 3 sudah menguras modal. Mulai minimal Rp 300.000.",
                  },
                  {
                    q: "Bagaimana cara menghitung modal yang dibutuhkan?",
                    a: "Rumus: Total Eksposur = Nominal + (Nominal × M) + (Nominal × M²) + (Nominal × M³), di mana M = multiplier. Tambahkan nilai stop loss yang Anda set. Total tersebut adalah modal minimum yang aman.",
                  },
                  {
                    q: "Berapa potensi profit harian dengan modal Rp 500.000?",
                    a: "Dengan setting standar pemula (nominal Rp 14.000, SL Rp 100K, SP Rp 250K), target profit harian realistis adalah Rp 80.000–200.000 di hari yang baik. Namun ini tidak dijamin setiap hari.",
                  },
                  {
                    q: "Kapan boleh menaikkan modal trading?",
                    a: "Setelah minimal 30 hari trading real dengan hasil yang konsisten (win rate di atas 50% secara rata-rata mingguan). Naikkan bertahap — tidak langsung double modal. Idealnya dari profit yang sudah dikumpulkan.",
                  },
                  {
                    q: "Apakah modal di Stockity bisa ditarik kapan saja?",
                    a: "Ya, sesuai ketentuan withdrawal platform Stockity.id. STC AutoTrade tidak menyimpan atau mengelola dana Anda — semua dana tetap di akun Stockity.id Anda sendiri.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <h3 className="text-[13px] sm:text-[14px] font-semibold text-[#1a1612] mb-2 leading-snug">{item.q}</h3>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot Stockity", desc: "Panduan lengkap konfigurasi martingale & strategi" },
                { href: "/artikel/auto-trade-stockity-gratis", title: "Auto Trade Stockity Gratis", desc: "Akses robot trading Stockity tanpa biaya" },
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan auto trade Stockity untuk semua level" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Mulai dari Modal Rp 300.000</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Coba Robot Stockity — Mulai dari Mode Demo Gratis</p>
              <p className="text-[13px] text-[#6b6058]">Download APK atau buka versi web — validasi strategi di demo sebelum gunakan modal nyata.</p>
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