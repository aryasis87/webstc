/**
 * app/artikel/trading-binary-option-modal-kecil/page.tsx
 *
 * Target keyword:
 *   Primary  : trading binary option modal kecil
 *   Secondary: trading stockity modal 100 ribu, trading binary option pemula modal kecil,
 *              mulai trading dengan modal minim, STC AutoTrade modal kecil
 */

import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Trading Binary Option Modal Kecil: Mulai dari Rp 14.000/Trade 2026",
  description:
    "Panduan trading binary option dengan modal kecil menggunakan STC AutoTrade — simulasi base Rp 14.000 dan 70.000 dengan martingale, mode yang cocok untuk modal minim, cara set SL, dan akun Demo gratis.",
  keywords: [
    "trading binary option modal kecil",
    "trading stockity modal 100 ribu",
    "trading binary option pemula modal kecil",
    "mulai trading dengan modal minim",
    "STC AutoTrade modal kecil",
    "modal kecil binary option",
    "trading stockity modal sedikit",
    "binary option 100 ribu",
    "cara trading stockity modal kecil",
    "strategi binary option modal minim",
    "minimum modal trading stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil",
  },
  openGraph: {
    title: "Trading Binary Option Modal Kecil: Mulai dari Rp 14.000/Trade 2026",
    description:
      "Simulasi trading modal kecil dengan STC AutoTrade — base Rp 14K, martingale aman, mode yang tepat, dan akun Demo gratis.",
    url: "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Trading Binary Option Modal Kecil — STC AutoTrade 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Binary Option Modal Kecil: Mulai dari Rp 14.000/Trade 2026",
    description: "Trading modal kecil dengan STC AutoTrade — simulasi, mode tepat, dan tips aman.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── JSON-LD Schemas ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Trading Binary Option Modal Kecil: Mulai dari Rp 14.000/Trade 2026",
  description:
    "Panduan trading binary option modal kecil dengan STC AutoTrade — simulasi martingale, mode yang tepat, proteksi SL, dan akun Demo gratis.",
  image: "https://stcautotrade.id/og-image.webp",
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Trading Binary Option Modal Kecil", item: "https://stcautotrade.id/artikel/trading-binary-option-modal-kecil" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah modal Rp 100.000 cukup untuk trading dengan STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Secara teknis bisa — dengan base amount Rp 14.000, modal Rp 100.000 cukup untuk 1 siklus martingale 3 step (14K + 28K + 56K = 98K). Namun ini sangat ketat tanpa buffer. Disarankan minimal Rp 200.000-300.000 dengan base 14K agar ada ruang untuk beberapa siklus recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Mode apa yang paling cocok untuk modal kecil di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk modal kecil, AI Signal atau Fastrade FTT tanpa martingale agresif adalah pilihan yang lebih aman. Kedua mode ini bekerja otomatis dan tidak membutuhkan input manual. Hindari martingale lebih dari 3 step jika modal terbatas.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa step martingale yang aman untuk modal kecil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk modal kecil (di bawah Rp 500.000 dengan base 14K), maksimal 2-3 step martingale sudah cukup ketat. Dengan base 14K dan multiplier 2×: step 1=14K, step 2=28K, step 3=56K. Total exposure 98K. Lebih dari 3 step sangat berisiko dengan modal terbatas.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Stop Loss di STC AutoTrade bisa otomatis berhentikan bot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Stop Loss (SL) di STC AutoTrade adalah batas loss maksimum harian. Saat total loss hari itu mencapai angka SL yang sudah diset, bot otomatis berhenti trading untuk hari tersebut. Ini adalah fitur perlindungan saldo yang sangat penting — terutama untuk pengguna modal kecil.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada cara trading tanpa modal sama sekali di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya — gunakan akun Demo. Setiap akun STC AutoTrade memiliki mode Demo dengan saldo virtual gratis. Semua fitur bot aktif penuh di Demo — 6 mode, martingale, SL/TP. Tidak perlu deposit apapun. Ini cara terbaik untuk belajar sebelum menggunakan uang nyata.",
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

export default function TradingBinaryOptionModalKecilPage() {
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
                  <li className="text-[#1a1612] font-medium">Trading Modal Kecil</li>
                </ol>
              </nav>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-semibold mb-4">Strategi & Modal</span>
              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-[1.2] mb-4">
                Trading Binary Option Modal Kecil: Panduan Lengkap dengan STC AutoTrade
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Modal terbatas bukan halangan untuk mulai trading dengan bot. Minimum order di STC AutoTrade hanya Rp 14.000/trade. Artikel ini membahas simulasi nyata, mode yang tepat, dan cara trading aman dengan modal kecil.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "Rp 14.000", l: "Min. Order/Trade" },
                  { v: "Demo Gratis", l: "Tanpa Modal" },
                  { v: "SL Otomatis", l: "Proteksi Saldo" },
                  { v: "6 Mode", l: "Pilih Sesuai Modal" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3 text-center">
                    <p className="text-[15px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                    <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 1 — Berapa Modal Minimum */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Modal Minimum</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Berapa Modal Minimum untuk Pakai STC AutoTrade?</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Pertanyaan yang paling sering ditanyakan trader pemula. Jawabannya simpel — tapi ada nuansanya:
              </p>
              <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl p-4 mb-5">
                <div className="text-center py-4">
                  <p className="text-[13px] text-[#6b6058] mb-1">Minimum nominal order per trade</p>
                  <p className="text-[42px] font-bold text-[#1a1612]">Rp 14.000</p>
                  <p className="text-[12px] text-[#6b6058]">per satu order yang dieksekusi bot</p>
                </div>
              </div>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Namun angka Rp 14.000 adalah <strong className="text-[#1a1612]">nominal satu order</strong> — bukan modal total yang aman. Jika menggunakan martingale, bot bisa menaikkan nominal ke step berikutnya saat loss. Artinya Anda butuh buffer lebih dari sekedar Rp 14.000 di akun.
              </p>
              <InfoBox icon="💡" title="Pakai Demo Dulu — Gratis Tanpa Deposit">
                Sebelum deposit uang nyata, gunakan akun Demo gratis di STC AutoTrade. Semua fitur aktif penuh — 6 mode, martingale, SL/TP — dengan saldo virtual. Tidak ada minimum modal untuk mulai di Demo.
              </InfoBox>
            </div>
          </section>

          {/* SECTION 2 — Simulasi Base Rp 14.000 */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Simulasi Martingale</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Simulasi Trading Base Rp 14.000 dengan Martingale</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Berikut simulasi worst-case scenario — semua step loss, multiplier 2×, dari base Rp 14.000. Ini membantu Anda menghitung berapa modal minimum yang dibutuhkan:
              </p>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl overflow-hidden mb-5">
                <div className="grid grid-cols-5 gap-0 bg-[#1a1612] px-4 py-2.5 text-[10px] sm:text-[11px] font-semibold text-white">
                  <span>Step</span>
                  <span>Nominal</span>
                  <span>Kumulatif Loss</span>
                  <span>Modal Minimum</span>
                  <span>Rekomendasi</span>
                </div>
                {[
                  { step: "K1", nominal: "Rp 14.000", kum: "Rp 14.000", modal: "Rp 14.000", rec: "Rp 50K+", color: "bg-[#f0fdf4]", recColor: "text-[#14532d]" },
                  { step: "K2", nominal: "Rp 28.000", kum: "Rp 42.000", modal: "Rp 42.000", rec: "Rp 100K+", color: "bg-white", recColor: "text-[#14532d]" },
                  { step: "K3", nominal: "Rp 56.000", kum: "Rp 98.000", modal: "Rp 98.000", rec: "Rp 200K+", color: "bg-white", recColor: "text-[#92400e]" },
                  { step: "K4", nominal: "Rp 112.000", kum: "Rp 210.000", modal: "Rp 210.000", rec: "Rp 500K+", color: "bg-[#fffbeb]", recColor: "text-[#92400e]" },
                  { step: "K5", nominal: "Rp 224.000", kum: "Rp 434.000", modal: "Rp 434.000", rec: "Rp 1jt+", color: "bg-[#fef2f2]", recColor: "text-[#dc2626]" },
                ].map((row) => (
                  <div
                    key={row.step}
                    className={`grid grid-cols-5 gap-0 px-4 py-2.5 text-[11px] border-t border-[rgba(26,22,18,0.06)] ${row.color}`}
                  >
                    <span className="font-bold text-[#1a1612]">{row.step}</span>
                    <span className="text-[#1a1612]">{row.nominal}</span>
                    <span className="text-[#6b6058]">{row.kum}</span>
                    <span className="font-semibold text-[#1a1612]">{row.modal}</span>
                    <span className={`font-semibold ${row.recColor}`}>{row.rec}</span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#6b6058] mb-4">Multiplier 2× dari base Rp 14.000. Kolom &ldquo;Rekomendasi&rdquo; adalah modal total yang disarankan agar ada buffer untuk beberapa siklus.</p>
              <WarningBox>
                Semakin banyak step martingale yang Anda aktifkan, semakin besar modal yang dibutuhkan. Untuk modal kecil (di bawah Rp 300.000), batasi martingale maksimal 2-3 step saja.
              </WarningBox>
            </div>
          </section>

          {/* SECTION 3 — Simulasi Base Rp 70.000 */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Simulasi Standar</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Simulasi Base Rp 70.000 — Rekomendasi Standar</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Base amount Rp 70.000 adalah pilihan yang lebih seimbang — profit per trade lebih berarti, tapi masih terjangkau untuk pemula yang mau mulai dengan modal sedang:
              </p>
              <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden mb-5">
                <div className="grid grid-cols-4 gap-0 bg-[#1a1612] px-4 py-2.5 text-[11px] font-semibold text-white">
                  <span>Step</span>
                  <span>Nominal</span>
                  <span>Total Exposure</span>
                  <span>Modal Buffer</span>
                </div>
                {[
                  { step: "K1", nominal: "Rp 70.000", total: "Rp 70.000", buffer: "Rp 700K – 1jt", color: "bg-white" },
                  { step: "K2", nominal: "Rp 140.000", total: "Rp 210.000", buffer: "Rp 700K – 1jt", color: "bg-white" },
                  { step: "K3", nominal: "Rp 280.000", total: "Rp 490.000", buffer: "Rp 700K – 1jt", color: "bg-[#fffbeb]" },
                  { step: "K4", nominal: "Rp 560.000", total: "Rp 1.050.000", buffer: "Rp 2jt+", color: "bg-[#fef2f2]" },
                ].map((row) => (
                  <div
                    key={row.step}
                    className={`grid grid-cols-4 gap-0 px-4 py-2.5 text-[12px] border-t border-[rgba(26,22,18,0.06)] ${row.color}`}
                  >
                    <span className="font-bold text-[#1a1612]">{row.step}</span>
                    <span className="text-[#1a1612]">{row.nominal}</span>
                    <span className="text-[#6b6058]">{row.total}</span>
                    <span className="font-semibold text-[#1a1612]">{row.buffer}</span>
                  </div>
                ))}
              </div>
              <TipBox>
                Dengan base Rp 70.000, siapkan modal Rp 700.000 – 1.000.000 untuk trading yang nyaman dengan martingale 2-3 step. Ini memberikan buffer yang cukup untuk beberapa siklus recovery sebelum SL terpicu.
              </TipBox>
            </div>
          </section>

          {/* SECTION 4 — Mode yang Cocok untuk Modal Kecil */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Pilih Mode</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Mode yang Cocok untuk Modal Kecil</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Dari 6 mode di STC AutoTrade, tidak semua sama-sama cocok untuk modal kecil. Berikut rekomendasi berdasarkan karakteristik masing-masing mode:
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    mode: "AI Signal",
                    kode: "aisignal",
                    cocok: true,
                    alasan: "Sinyal dari sistem AI — bekerja otomatis tanpa perlu konfigurasi timeframe. Tidak ada input manual. Cocok untuk pemula yang mau mulai dengan setting minimal.",
                    tips: "Aktifkan dengan martingale 2-3 step saja. Set SL ketat.",
                    badge: "Direkomendasikan",
                    badgeColor: "bg-[#dcfce7] text-[#14532d]",
                  },
                  {
                    mode: "Fastrade FTT",
                    kode: "fastrade",
                    cocok: true,
                    alasan: "Bot mendeteksi arah secara mandiri via analisis real-time. Punya pilihan timeframe (1m-1h). Cocok untuk modal kecil dengan timeframe lebih panjang (15m atau 30m) agar tidak terlalu sering trading.",
                    tips: "Gunakan timeframe 15m atau 30m untuk frekuensi order lebih terkontrol.",
                    badge: "Cocok",
                    badgeColor: "bg-[#dbeafe] text-[#1d4ed8]",
                  },
                  {
                    mode: "Indicator",
                    kode: "indicator",
                    cocok: true,
                    alasan: "Analisis teknikal menggunakan SMA, EMA, atau RSI. Bisa dikonfigurasi untuk hanya trading saat sinyal kuat — cocok untuk modal kecil yang tidak mau terlalu sering trading.",
                    tips: "Set sensitivity rendah (lebih selektif) untuk mengurangi frekuensi order.",
                    badge: "Cocok",
                    badgeColor: "bg-[#dbeafe] text-[#1d4ed8]",
                  },
                  {
                    mode: "Fastrade CTC",
                    kode: "ctc",
                    cocok: false,
                    alasan: "Mengikuti order master trader. Frekuensi order tergantung seberapa aktif master — bisa sangat sering. Ini bisa menjadi masalah untuk modal kecil jika master trading agresif.",
                    tips: "Gunakan SL ketat. Monitor frekuensi trading master sebelum aktifkan di Real.",
                    badge: "Perhatikan SL",
                    badgeColor: "bg-[#fef3c7] text-[#92400e]",
                  },
                  {
                    mode: "Signal Mode",
                    kode: "schedule",
                    cocok: true,
                    alasan: "Input sinyal manual dengan jadwal eksekusi. Karena Anda yang menentukan kapan bot trading, frekuensinya bisa sangat terkontrol. Cocok jika Anda punya sumber sinyal yang dipercaya.",
                    tips: "Pilih hanya sinyal berkualitas tinggi. Jangan trading terlalu sering.",
                    badge: "Terkontrol",
                    badgeColor: "bg-[#dbeafe] text-[#1d4ed8]",
                  },
                  {
                    mode: "Momentum",
                    kode: "momentum",
                    cocok: true,
                    alasan: "Deteksi 4 pola candlestick: CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak. Bisa aktifkan hanya pola tertentu yang win rate-nya lebih tinggi. Cocok untuk yang paham pola candlestick.",
                    tips: "Aktifkan hanya pola yang paling Anda percaya — jangan aktifkan semua sekaligus.",
                    badge: "Selektif",
                    badgeColor: "bg-[#dbeafe] text-[#1d4ed8]",
                  },
                ].map((item) => (
                  <div key={item.mode} className={`bg-white border rounded-xl p-4 ${item.cocok ? "border-[rgba(26,22,18,0.07)]" : "border-[#fde68a]"}`}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <p className="text-[13px] font-bold text-[#1a1612]">{item.mode}</p>
                        <code className="text-[10px] font-mono text-[#6b6058] bg-[#f1f5f9] px-1.5 py-0.5 rounded">{item.kode}</code>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed mb-1.5">{item.alasan}</p>
                    <p className="text-[11px] text-[#3b82f6] font-medium">Tips: {item.tips}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5 — Stop Loss Wajib */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Proteksi Modal</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Setting SL (Stop Loss) Harian: Wajib Aktif untuk Modal Kecil</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Stop Loss adalah fitur paling penting untuk trader modal kecil di STC AutoTrade. Ini bukan opsional — ini <strong className="text-[#1a1612]">wajib diaktifkan</strong> sebelum bot mulai trading.
              </p>
              <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-4 mb-5">
                <p className="text-[12px] font-bold text-[#92400e] mb-2">Cara Kerja Stop Loss di STC AutoTrade:</p>
                <p className="text-[13px] text-[#92400e] leading-relaxed">
                  SL adalah batas loss maksimum harian. Contoh: jika Anda set SL = Rp 50.000, maka saat total loss hari itu mencapai Rp 50.000, bot secara otomatis berhenti dan tidak akan membuka order baru — bahkan jika martingale belum selesai satu siklus. Bot baru bisa aktif lagi keesokan harinya.
                </p>
              </div>
              <div className="space-y-3 mb-5">
                <p className="text-[13px] font-semibold text-[#1a1612]">Cara Setting Stop Loss:</p>
                <StepCard
                  n="1"
                  title="Buka Dashboard STC AutoTrade"
                  desc="Login ke aplikasi. SL bisa diatur dari panel setting di dashboard sebelum mengaktifkan bot."
                />
                <StepCard
                  n="2"
                  title="Temukan Field Stop Loss"
                  desc="Di panel parameter bot, ada field 'Stop Loss' atau 'SL'. Masukkan nominal dalam Rupiah — ini adalah batas loss maksimum harian Anda."
                  sub="Contoh: ketik 50000 untuk SL Rp 50.000"
                />
                <StepCard
                  n="3"
                  title="Set Nilai SL yang Realistis"
                  desc="Untuk modal kecil: set SL sekitar 20-30% dari total modal. Modal Rp 300K → SL Rp 60.000-90.000. Jangan set SL terlalu kecil (bot berhenti terlalu cepat) atau terlalu besar (terlambat berhenti)."
                  sub="20-30% dari modal adalah panduan umum manajemen risiko"
                />
                <StepCard
                  n="4"
                  title="Aktifkan Bot"
                  desc="Setelah SL diset, aktifkan bot. Jika SL terpicu hari ini, bot otomatis berhenti. Besok SL reset dan bot bisa aktif kembali."
                />
              </div>
              <TipBox>
                Kombinasikan SL dengan Stop Profit (TP). TP berhentikan bot saat profit harian tercapai — mengunci keuntungan dan mencegah overtrade. Contoh: TP = Rp 50.000 dan SL = Rp 40.000. Bot berhenti saat salah satu terpicu duluan.
              </TipBox>
            </div>
          </section>

          {/* SECTION 6 — Demo Account */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Latihan Gratis</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Akun Demo: Latihan Gratis Sebelum Pakai Modal Nyata</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Sebelum deposit uang nyata sepeser pun, manfaatkan akun Demo yang sudah tersedia gratis di setiap akun STC AutoTrade. Ini bukan versi terbatas — semua fitur aktif penuh.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  { icon: "🆓", title: "100% Gratis", desc: "Tidak perlu deposit apapun. Saldo virtual disediakan langsung." },
                  { icon: "🤖", title: "Fitur Penuh", desc: "Semua 6 mode aktif, martingale jalan, SL/TP berfungsi persis seperti Real." },
                  { icon: "📊", title: "Data History", desc: "Semua order tercatat di History — bisa dievaluasi untuk optimasi setting." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{item.title}</p>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-5">
                <p className="text-[13px] font-semibold text-[#1a1612]">Cara Aktifkan Mode Demo:</p>
                <StepCard
                  n="1"
                  title="Login ke STC AutoTrade"
                  desc="Masuk dengan akun Stockity.id Anda. Mode Demo tersedia otomatis — tidak ada pendaftaran tambahan."
                />
                <StepCard
                  n="2"
                  title="Lihat Header Dashboard"
                  desc="Di bagian atas dashboard, ada toggle atau label yang menunjukkan 'Real' atau 'Demo'. Tap untuk switch."
                  sub="Switch kapan saja — bahkan saat bot tidak aktif"
                />
                <StepCard
                  n="3"
                  title="Mulai Trading Demo"
                  desc="Pilih mode, atur parameter, dan aktifkan bot di mode Demo. Hasilnya dicatat di History — bisa dievaluasi untuk mencari setting terbaik sebelum pindah ke Real."
                />
              </div>
              <InfoBox icon="🎯" title="Tanda Siap Pindah ke Akun Real">
                Pindah ke Real setelah Demo Anda menunjukkan: (1) konsisten profit selama 1-2 minggu, (2) sudah menemukan mode dan setting yang tepat, (3) sudah memahami perilaku martingale dan cara kerja SL/TP.
              </InfoBox>
            </div>
          </section>

          {/* SECTION 7 — Kesalahan yang Harus Dihindari */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Hindari Kesalahan</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesalahan Trader Modal Kecil yang Harus Dihindari</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Trader modal kecil paling rentan terhadap kesalahan berikut. Pelajari dan hindari dari awal:
              </p>
              <div className="space-y-3 mb-5">
                {[
                  {
                    kesalahan: "Mengaktifkan martingale 5-7 step dengan modal kecil",
                    dampak: "Satu siklus loss bisa menghabiskan seluruh modal sebelum ada recovery",
                    hindari: "Batasi maksimal 2-3 step martingale jika modal di bawah Rp 500.000",
                  },
                  {
                    kesalahan: "Tidak mengaktifkan Stop Loss",
                    dampak: "Bot terus trading bahkan saat serangkaian loss — saldo bisa nol",
                    hindari: "SELALU aktifkan SL sebelum nyalakan bot di akun Real",
                  },
                  {
                    kesalahan: "Langsung deposit ke Real tanpa testing Demo",
                    dampak: "Kehilangan modal karena belum paham cara kerja bot dan cara konfigurasi yang tepat",
                    hindari: "Minimal 1-2 minggu di Demo dulu dengan setting yang akan dipakai di Real",
                  },
                  {
                    kesalahan: "Base amount terlalu besar relatif terhadap modal",
                    dampak: "Martingale step pertama saja sudah 30-50% dari modal — tidak ada buffer",
                    hindari: "Base amount idealnya 5-10% dari total modal. Modal 200K → base maksimal 14K-20K",
                  },
                  {
                    kesalahan: "Trading di banyak aset sekaligus",
                    dampak: "Sulit monitoring dan kalkulasi modal yang dibutuhkan untuk martingale di setiap aset",
                    hindari: "Mulai dengan 1 aset yang dipahami — fokus adalah kunci saat modal terbatas",
                  },
                  {
                    kesalahan: "Panik dan matikan bot di tengah siklus martingale",
                    dampak: "Loss yang sudah terjadi tidak ter-recovery — siklus martingale harus selesai untuk profit kembali",
                    hindari: "Biarkan bot selesaikan siklus, atau set SL dari awal agar bot yang memutuskan kapan berhenti",
                  },
                ].map((item) => (
                  <div key={item.kesalahan} className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-red-500 text-sm flex-shrink-0 mt-0.5">✗</span>
                      <p className="text-[13px] font-semibold text-[#1a1612]">{item.kesalahan}</p>
                    </div>
                    <p className="text-[12px] text-[#6b6058] mb-1.5 pl-5">Dampak: {item.dampak}</p>
                    <p className="text-[11px] text-[#14532d] font-semibold pl-5">Solusi: {item.hindari}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 8 — Kesimpulan */}
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Ringkasan</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Kesimpulan</h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Trading binary option dengan modal kecil adalah mungkin dengan STC AutoTrade — tapi perlu strategi yang tepat:
              </p>
              <div className="space-y-3">
                {[
                  "Minimum order per trade adalah Rp 14.000 — bisa mulai dari angka ini.",
                  "Untuk martingale aman dengan base 14K, siapkan modal minimal Rp 200K-300K.",
                  "Mode paling aman untuk modal kecil: AI Signal atau Fastrade FTT dengan martingale terbatas (2-3 step).",
                  "WAJIB aktifkan Stop Loss sebelum bot jalan di akun Real.",
                  "Selalu mulai dari akun Demo — gratis, semua fitur aktif, tanpa risiko finansial apapun.",
                  "Sabar dan konsisten lebih penting dari strategi agresif — apalagi saat modal terbatas.",
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
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#1a1612] mb-4">Pertanyaan yang Sering Ditanyakan</h2>
              <div className="divide-y divide-[rgba(26,22,18,0.06)] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden">
                {[
                  {
                    q: "Apakah modal Rp 100.000 cukup untuk trading dengan STC AutoTrade?",
                    a: "Secara teknis bisa — dengan base amount Rp 14.000, modal Rp 100.000 cukup untuk 1 siklus martingale 3 step (14K + 28K + 56K = 98K). Namun ini sangat ketat tanpa buffer. Disarankan minimal Rp 200.000-300.000 dengan base 14K agar ada ruang untuk beberapa siklus recovery.",
                  },
                  {
                    q: "Mode apa yang paling cocok untuk modal kecil di STC AutoTrade?",
                    a: "Untuk modal kecil, AI Signal atau Fastrade FTT tanpa martingale agresif adalah pilihan yang lebih aman. Kedua mode ini bekerja otomatis dan tidak membutuhkan input manual. Hindari martingale lebih dari 3 step jika modal terbatas.",
                  },
                  {
                    q: "Berapa step martingale yang aman untuk modal kecil?",
                    a: "Untuk modal kecil (di bawah Rp 500.000 dengan base 14K), maksimal 2-3 step martingale sudah cukup ketat. Dengan base 14K dan multiplier 2×: step 1=14K, step 2=28K, step 3=56K. Total exposure 98K. Lebih dari 3 step sangat berisiko dengan modal terbatas.",
                  },
                  {
                    q: "Apakah Stop Loss di STC AutoTrade bisa otomatis berhentikan bot?",
                    a: "Ya. Stop Loss (SL) di STC AutoTrade adalah batas loss maksimum harian. Saat total loss hari itu mencapai angka SL yang sudah diset, bot otomatis berhenti trading untuk hari tersebut. Ini adalah fitur perlindungan saldo yang sangat penting — terutama untuk pengguna modal kecil.",
                  },
                  {
                    q: "Apakah ada cara trading tanpa modal sama sekali di STC AutoTrade?",
                    a: "Ya — gunakan akun Demo. Setiap akun STC AutoTrade memiliki mode Demo dengan saldo virtual gratis. Semua fitur bot aktif penuh di Demo — 6 mode, martingale, SL/TP. Tidak perlu deposit apapun. Ini cara terbaik untuk belajar sebelum menggunakan uang nyata.",
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
          <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f9fafb]">
            <div className="max-w-3xl mx-auto px-5">
              <SectionLabel>Artikel Terkait</SectionLabel>
              <h2 className="text-[18px] font-bold text-[#1a1612] mb-4">Baca Juga</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Panduan lengkap berapa modal ideal berdasarkan profil risiko dan gaya trading." },
                  { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale Stockity", desc: "Cara menggunakan martingale dengan bijak — kalkulasi, tips, dan batasan aman." },
                  { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading Stockity", desc: "Strategi dan tips memaksimalkan profit trading otomatis dengan STC AutoTrade." },
                ].map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="block p-4 bg-white border border-[rgba(26,22,18,0.06)] rounded-xl no-underline hover:border-[#3b82f6]/30 transition-colors"
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
                Download aplikasinya dan trading otomatis langsung dari Android. Atau akses versi web tanpa install. Mode Demo tersedia gratis — tanpa deposit.
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
