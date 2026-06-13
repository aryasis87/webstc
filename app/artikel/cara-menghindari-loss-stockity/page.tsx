import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Menghindari Loss di Stockity: Fitur SL, TP, Demo & Manajemen Risiko",
  description:
    "Panduan lengkap menghindari loss trading di Stockity dengan STC AutoTrade. Fitur Stop Loss harian, Stop Profit, Always Signal, akun Demo, History page, dan setting martingale yang tepat.",
  keywords: [
    "cara menghindari loss stockity",
    "stop loss stockity",
    "manajemen risiko trading binary option",
    "always signal STC AutoTrade",
    "akun demo stockity",
    "cara cek win rate stockity",
    "stop profit harian stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
  },
  openGraph: {
    title: "Cara Menghindari Loss: SL Harian, Always Signal & Demo di STC AutoTrade 2026",
    description:
      "STC AutoTrade punya Stop Loss harian otomatis, Stop Profit, fitur Always Signal untuk recovery martingale, dan History page untuk analisis win rate per mode dan aset.",
    url: "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
    siteName: "STC AutoTrade",
    locale: "id_ID",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Manajemen Risiko STC AutoTrade — Stop Loss Always Signal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cara Menghindari Loss di STC AutoTrade: SL Harian & Always Signal 2026",
    description:
      "Stop Loss harian otomatis, Stop Profit, Always Signal recovery martingale, Demo account, dan History page di STC AutoTrade untuk kelola risiko.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cara Menghindari Loss di Stockity: Fitur SL, TP, Demo & Manajemen Risiko",
  description:
    "Panduan lengkap menghindari loss trading di Stockity menggunakan fitur-fitur STC AutoTrade v4.4.",
  datePublished: "2025-05-21",
  dateModified: "2026-06-07",
  author: { "@type": "Organization", name: "STC AutoTrade" },
  publisher: {
    "@type": "Organization",
    name: "STC AutoTrade",
    logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://stcautotrade.id" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Artikel",
      item: "https://stcautotrade.id/artikel",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cara Menghindari Loss Stockity",
      item: "https://stcautotrade.id/artikel/cara-menghindari-loss-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah Stop Loss harian di STC AutoTrade aktif otomatis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak otomatis aktif — Anda harus mengisi nilai Stop Loss saat mengkonfigurasi bot sebelum klik Start. Setelah diisi, bot akan berhenti otomatis saat total loss harian mencapai nilai SL yang diset. Jika SL dibiarkan kosong atau nol, bot tidak akan berhenti otomatis karena loss.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa nilai Stop Loss harian yang wajar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aturan umum: jangan set SL lebih dari 20-30% dari total modal yang dialokasikan untuk sesi itu. Misalnya jika Anda mengalokasikan Rp 200.000 untuk satu sesi, SL yang wajar adalah Rp 40.000-60.000. Ini melindungi modal utama dari kerugian besar dalam satu hari buruk.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara cek win rate di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buka halaman History di STC AutoTrade. Di sana tersedia statistik lengkap termasuk win rate keseluruhan, breakdown per mode strategi, dan breakdown per aset. Anda bisa menganalisis mana mode dan aset yang memberikan win rate terbaik berdasarkan riwayat trading aktual Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu fitur Always Signal di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always Signal adalah fitur martingale recovery otomatis yang memungkinkan bot langsung lanjut ke step berikutnya setelah loss tanpa menunggu sinyal baru. Bot terus recovery hingga win atau mencapai max steps yang dikonfigurasi. Fitur ini cocok untuk strategi martingale agresif tapi meningkatkan risiko bila loss beruntun panjang.",
      },
    },
  ],
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}

function InfoBox({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
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

function StepCard({
  n,
  title,
  desc,
  sub,
}: {
  n: string;
  title: string;
  desc: string;
  sub?: string;
}) {
  return (
    <div className="flex gap-3.5 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3.5">
      <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">
        {n}
      </div>
      <div className="pt-0.5">
        <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{title}</p>
        <p className="text-[12px] text-[#6b6058] leading-relaxed">{desc}</p>
        {sub && <p className="text-[11px] text-[#3b82f6] mt-1 font-medium">{sub}</p>}
      </div>
    </div>
  );
}

export default function CaraMenghindariLossStockityPage() {
  const faqs = [
    {
      q: "Apakah Stop Loss harian di STC AutoTrade aktif otomatis?",
      a: "Tidak otomatis aktif — Anda harus mengisi nilai Stop Loss saat mengkonfigurasi bot sebelum klik Start. Setelah diisi, bot akan berhenti otomatis saat total loss harian mencapai nilai SL. Jika SL dibiarkan kosong atau nol, bot tidak akan berhenti otomatis karena loss.",
    },
    {
      q: "Berapa nilai Stop Loss harian yang wajar?",
      a: "Aturan umum: jangan set SL lebih dari 20-30% dari total modal yang dialokasikan untuk sesi itu. Misalnya jika Anda mengalokasikan Rp 200.000, SL yang wajar adalah Rp 40.000-60.000. Ini melindungi modal utama dari kerugian besar dalam satu hari buruk.",
    },
    {
      q: "Bagaimana cara cek win rate di STC AutoTrade?",
      a: "Buka halaman History di STC AutoTrade. Di sana tersedia statistik lengkap termasuk win rate keseluruhan, breakdown per mode strategi, dan breakdown per aset. Anda bisa menganalisis mana mode dan aset yang memberikan win rate terbaik berdasarkan riwayat trading aktual.",
    },
    {
      q: "Apa itu fitur Always Signal di STC AutoTrade?",
      a: "Always Signal adalah fitur martingale recovery otomatis yang memungkinkan bot langsung lanjut ke step berikutnya setelah loss tanpa menunggu sinyal baru. Bot terus recovery hingga win atau mencapai max steps yang dikonfigurasi. Fitur ini meningkatkan risiko bila loss beruntun panjang.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-[#f9fafb] text-[#1a1612] font-[family-name:var(--font-dm-sans)]">
        {/* Navbar */}
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[rgba(26,22,18,0.06)]">
          <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <span className="text-base font-bold text-[#1a1612]">
                STC <span className="text-[#3b82f6]">AutoTrade</span>
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/artikel"
                className="text-[13px] text-[#6b6058] hover:text-[#1a1612] transition-colors no-underline"
              >
                Semua Artikel
              </Link>
              <a
                href="/StcAutoTrade.apk"
                download
                className="px-4 py-2 bg-[#1a1612] text-white text-[12px] font-semibold rounded-lg no-underline"
              >
                Download APK
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-14">
          {/* Hero */}
          <div className="bg-white border-b border-[rgba(26,22,18,0.06)]">
            <div className="max-w-3xl mx-auto px-5 py-10">
              <nav className="flex items-center gap-2 text-[12px] text-[#6b6058] mb-6">
                <Link href="/" className="hover:text-[#1a1612] no-underline transition-colors">
                  Beranda
                </Link>
                <span className="text-[#1a1612]/20">/</span>
                <Link
                  href="/artikel"
                  className="hover:text-[#1a1612] no-underline transition-colors"
                >
                  Artikel
                </Link>
                <span className="text-[#1a1612]/20">/</span>
                <span className="text-[#1a1612]/60">Cara Menghindari Loss Stockity</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="text-[11px] font-semibold text-[#1d4ed8] tracking-wide uppercase">
                  Manajemen Risiko
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-tight mb-4">
                Cara Menghindari Loss di Stockity:{" "}
                <span className="text-[#3b82f6]">SL, TP, Demo, dan Fitur Proteksi STC AutoTrade</span>
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Tidak ada bot yang 100% profit — loss adalah bagian dari trading. Yang membedakan
                trader sukses adalah kemampuan mengelola loss, bukan menghindarinya sepenuhnya. STC
                AutoTrade v4.4 menyediakan beberapa fitur penting untuk membantu Anda mengelola risiko:
                Stop Loss harian, Stop Profit, Always Signal, akun Demo, dan History page.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "SL/TP", l: "Stop Otomatis" },
                  { v: "Demo", l: "Tanpa Risiko" },
                  { v: "History", l: "Analisis Mandiri" },
                  { v: "Always Signal", l: "Recovery Martingale" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3 text-center"
                  >
                    <p className="text-[16px] font-bold text-[#1a1612] mb-0.5">{s.v}</p>
                    <p className="text-[11px] text-[#6b6058]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-5 py-10 space-y-14">
            {/* Section 1 */}
            <section>
              <SectionLabel>Realita Bot Trading</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Mengapa Bot Pun Bisa Loss? Ekspektasi yang Realistis
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Banyak pengguna baru STC AutoTrade berharap bot akan selalu profit. Ini adalah
                ekspektasi yang perlu diluruskan sejak awal. Bot trading — sekompleks apapun
                algoritmanya — beroperasi berdasarkan pola historis dan indikator teknikal. Pasar
                tidak selalu mengikuti pola yang diprediksi.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Ada hari-hari di mana kondisi pasar sangat tidak mendukung analisis bot: volatilitas
                ekstrem mendadak, berita besar yang mengubah sentimen tiba-tiba, atau pasar yang
                bergerak acak tanpa tren. Dalam kondisi ini, bahkan bot dengan win rate 60% bisa
                mengalami loss streak yang signifikan.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4 text-center">
                  <p className="text-[20px] font-bold text-[#3b82f6] mb-1">55-65%</p>
                  <p className="text-[11px] text-[#6b6058]">Win rate wajar untuk bot binary option</p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4 text-center">
                  <p className="text-[20px] font-bold text-[#f59e0b] mb-1">5-10</p>
                  <p className="text-[11px] text-[#6b6058]">Loss beruntun bisa terjadi di hari buruk</p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4 text-center">
                  <p className="text-[20px] font-bold text-[#22c55e] mb-1">SL/TP</p>
                  <p className="text-[11px] text-[#6b6058]">Satu-satunya proteksi yang bisa Anda kontrol</p>
                </div>
              </div>

              <InfoBox icon="🧠" title="Mindset yang Benar untuk Trading Bot">
                Fokus bukan pada menghindari semua loss, tapi pada memastikan total profit dalam jangka
                panjang lebih besar dari total loss. SL/TP harian adalah alat utama untuk mencapai ini —
                batasi kerugian hari buruk dan kunci profit hari baik.
              </InfoBox>
            </section>

            {/* Section 2 */}
            <section>
              <SectionLabel>Stop Loss Harian</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Fitur Stop Loss Harian di STC AutoTrade: Cara Setting dan Manfaatnya
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Stop Loss (SL) harian adalah fitur paling penting untuk manajemen risiko di STC
                AutoTrade. Ini menentukan batas maksimum kerugian dalam satu sesi — ketika tercapai,
                bot berhenti otomatis tanpa perlu Anda pantau secara manual.
              </p>

              <div className="space-y-3 mb-6">
                <StepCard
                  n="1"
                  title="Buka Dashboard dan Konfigurasi Bot"
                  desc="Sebelum menekan Start, Anda akan melihat field 'Stop Loss' di bagian pengaturan bot. Ini adalah tempat Anda mengisi nilai SL dalam Rupiah."
                  sub="SL harus diisi SEBELUM bot dijalankan"
                />
                <StepCard
                  n="2"
                  title="Isi Nilai Stop Loss"
                  desc="Masukkan angka maksimum kerugian yang Anda toleransi untuk sesi ini. Misalnya: Rp 50.000 artinya bot akan berhenti otomatis setelah total loss mencapai Rp 50.000."
                  sub="Rekomendasi: 20-30% dari modal yang dialokasikan sesi ini"
                />
                <StepCard
                  n="3"
                  title="Bot Berhenti Otomatis Saat SL Tercapai"
                  desc="Ketika akumulasi loss harian menyentuh nilai SL yang diset, bot langsung berhenti tanpa eksekusi order baru. Anda mendapat notifikasi bahwa SL telah tercapai."
                  sub="Tidak perlu monitor manual — bot handle sendiri"
                />
                <StepCard
                  n="4"
                  title="Evaluasi Sebelum Restart"
                  desc="Setelah SL tercapai, jangan langsung restart bot. Evaluasi kondisi pasar, cek History untuk memahami mengapa loss beruntun terjadi, baru putuskan apakah lanjut atau istirahat hari ini."
                  sub="Hari buruk = istirahat hari itu, lebih aman"
                />
              </div>

              <TipBox>
                Stop Loss harian adalah satu-satunya jaring pengaman yang benar-benar bisa Anda kontrol.
                Jangan pernah menjalankan bot tanpa mengisi SL — tanpa SL, satu hari buruk bisa
                menguras sebagian besar modal Anda.
              </TipBox>
            </section>

            {/* Section 3 */}
            <section>
              <SectionLabel>Stop Profit Harian</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Fitur Stop Profit Harian: Kunci Menjaga Profit yang Sudah Diraih
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Stop Profit (TP) harian adalah pasangan dari Stop Loss — bot berhenti otomatis ketika
                target profit harian tercapai. Ini terdengar kontra-intuitif (mengapa menghentikan bot
                saat sedang profit?), tapi ada alasan kuat di baliknya.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Pasar bisa berbalik kapan saja. Sesi yang awalnya sangat menguntungkan bisa berubah
                menjadi loss jika bot terus berjalan saat kondisi pasar memburuk. Stop Profit memastikan
                keuntungan yang sudah diraih tidak dikembalikan ke pasar.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Cara Menentukan Nilai Stop Profit yang Realistis
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "Target TP Konservatif",
                      val: "5-10% dari modal",
                      desc: "Mudah dicapai, bot sering berhenti karena TP. Profit kecil tapi konsisten. Cocok untuk pemula yang masih belajar.",
                      color: "text-[#22c55e]",
                    },
                    {
                      label: "Target TP Menengah",
                      val: "10-20% dari modal",
                      desc: "Keseimbangan antara ambisi dan realitas pasar. Masih bisa dicapai di hari-hari market yang baik.",
                      color: "text-[#f59e0b]",
                    },
                    {
                      label: "Target TP Agresif",
                      val: "20-50% dari modal",
                      desc: "Sulit dicapai secara konsisten. Hanya pas di hari pasar sangat bagus. Risiko bot jalan terus tanpa TP tercapai.",
                      color: "text-[#ef4444]",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className={`text-[12px] font-bold flex-shrink-0 ${item.color}`}>
                        {item.val}
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold text-[#1a1612]">{item.label}</p>
                        <p className="text-[11px] text-[#6b6058]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <InfoBox icon="🎯" title="Rasio SL dan TP yang Sehat">
                Idealnya, target TP Anda setidaknya sama dengan atau lebih besar dari SL. Misalnya SL
                Rp 50.000 dan TP Rp 75.000. Dengan rasio ini, Anda hanya perlu profit 2 dari 3 hari
                untuk tetap net profit secara keseluruhan.
              </InfoBox>
            </section>

            {/* Section 4 */}
            <section>
              <SectionLabel>Always Signal</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Memahami Always Signal: Martingale Recovery Otomatis
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Always Signal adalah fitur di STC AutoTrade yang memungkinkan bot melakukan recovery
                martingale secara otomatis tanpa menunggu sinyal baru dari analisis bot. Setelah loss,
                bot langsung masuk ke step martingale berikutnya dengan nominal lebih besar.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Cara Kerja Always Signal
                </h3>
                <div className="space-y-3">
                  <div className="bg-[#fef2f2] rounded-lg p-3">
                    <p className="text-[11px] font-semibold text-[#991b1b] mb-1">
                      Tanpa Always Signal (Martingale Biasa)
                    </p>
                    <p className="text-[11px] text-[#6b6058]">
                      Loss → Bot tunggu sinyal baru → Jika sinyal muncul → Order step berikutnya dengan
                      nominal lebih besar → Dst. Bot hanya eskalasi martingale saat ada sinyal baru.
                    </p>
                  </div>
                  <div className="bg-[#f0fdf4] rounded-lg p-3">
                    <p className="text-[11px] font-semibold text-[#166534] mb-1">
                      Dengan Always Signal Aktif
                    </p>
                    <p className="text-[11px] text-[#6b6058]">
                      Loss → Bot LANGSUNG masuk step berikutnya tanpa tunggu sinyal → Nominal lebih besar
                      → Dst hingga win atau max steps tercapai. Recovery lebih agresif dan cepat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[13px] font-bold text-[#1a1612] mb-3">
                  Contoh Skenario Always Signal (Max Steps 5, Multiplier 2x, Base Rp 14.000)
                </h3>
                <div className="space-y-2">
                  {[
                    { step: "Step 1", amount: "Rp 14.000", result: "LOSS → lanjut" },
                    { step: "Step 2", amount: "Rp 28.000", result: "LOSS → lanjut" },
                    { step: "Step 3", amount: "Rp 56.000", result: "WIN ← recovery" },
                    { step: "Step 4", amount: "Rp 112.000", result: "Tidak terjadi" },
                    { step: "Step 5", amount: "Rp 224.000", result: "Tidak terjadi" },
                  ].map((row, i) => (
                    <div
                      key={row.step}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-[12px] ${
                        i === 2
                          ? "bg-[#f0fdf4] border border-[#bbf7d0]"
                          : i < 2
                          ? "bg-[#fef2f2] border border-[#fecaca]"
                          : "bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] opacity-50"
                      }`}
                    >
                      <span className="font-semibold text-[#1a1612]">{row.step}</span>
                      <span className="text-[#6b6058]">{row.amount}</span>
                      <span
                        className={`font-medium ${
                          i === 2
                            ? "text-[#166534]"
                            : i < 2
                            ? "text-[#991b1b]"
                            : "text-[#6b6058]"
                        }`}
                      >
                        {row.result}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#6b6058] mt-3">
                  Total loss step 1-2: Rp 42.000. WIN di step 3 (Rp 56.000) mengcover semua loss
                  sebelumnya dan menghasilkan net profit.
                </p>
              </div>

              <WarningBox>
                Always Signal meningkatkan risiko jika loss streak sangat panjang. Dengan Max Steps 5
                dan multiplier 2x, loss 5 kali berturut-turut berarti order terakhir Rp 224.000 dari
                base Rp 14.000. Pastikan Stop Loss harian sudah diset untuk mencegah kondisi terburuk
                ini menguras seluruh modal.
              </WarningBox>
            </section>

            {/* Section 5 */}
            <section>
              <SectionLabel>Akun Demo</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Cara Menggunakan Akun Demo untuk Menghindari Loss di Real
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                STC AutoTrade menyediakan mode Demo yang bisa diakses langsung dari header dashboard
                dengan switch sederhana. Di mode Demo, Anda menggunakan saldo virtual gratis — trading
                berlangsung dengan kondisi pasar real tapi tidak menggunakan uang nyata.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Cara Switch ke Akun Demo
                </h3>
                <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">
                  Di header dashboard STC AutoTrade, ada toggle/selector yang menampilkan akun aktif
                  saat ini — Real atau Demo. Klik untuk beralih antara keduanya. Saldo Demo adalah
                  saldo virtual yang tidak berpengaruh pada saldo Real Anda di Stockity.
                </p>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">
                  Semua fitur bot — semua 6 mode, martingale, SL/TP — bekerja identik di akun Demo
                  dan Real. Satu-satunya perbedaan: di Demo Anda tidak bisa profit atau loss uang
                  nyata.
                </p>
              </div>

              <div className="space-y-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    Apa yang Perlu Diuji di Demo Sebelum Real
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Coba setiap mode bot (Fastrade FTT, Indicator, Momentum, dll) untuk memahami perilakunya",
                      "Uji berbagai kombinasi timeframe dan mode pada aset yang ingin Anda trade",
                      "Amati bagaimana martingale bekerja dalam skenario loss beruntun",
                      "Cari tahu mode dan aset mana yang memberikan win rate terbaik untuk gaya Anda",
                      "Praktikkan setting SL dan TP yang tepat sebelum implementasi di Real",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                        <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <TipBox>
                Jalankan akun Demo minimal 2-3 hari penuh sebelum beralih ke Real. Catat semua hasil di
                History, analisis win rate per mode dan per aset, dan baru pindah ke Real ketika sudah
                konsisten profit di Demo selama beberapa sesi berturut-turut.
              </TipBox>
            </section>

            {/* Section 6 */}
            <section>
              <SectionLabel>History Page</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Analisis Riwayat Trading di History Page
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Halaman History di STC AutoTrade adalah alat analisis mandiri yang sangat berguna.
                Di sini tersimpan semua riwayat order yang pernah dieksekusi, berikut statistik
                yang membantu Anda memahami performa trading secara objektif.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                {[
                  {
                    title: "Win Rate Keseluruhan",
                    desc: "Persentase order yang win dari total order. Ini baseline untuk mengevaluasi apakah strategi Anda profitabel secara matematis.",
                  },
                  {
                    title: "Breakdown per Mode Bot",
                    desc: "Win rate dipisah per mode (Fastrade FTT, Indicator, Momentum, dll). Identifikasi mode mana yang paling efektif untuk gaya trading Anda.",
                  },
                  {
                    title: "Breakdown per Aset",
                    desc: "Win rate dipisah per aset yang ditrading. Mungkin EUR/USD lebih baik dari Gold, atau sebaliknya — data History akan memberitahu Anda.",
                  },
                  {
                    title: "Total P&L (Profit & Loss)",
                    desc: "Total keuntungan atau kerugian kumulatif. Bisa dilihat per hari, per minggu, atau keseluruhan untuk evaluasi performa jangka panjang.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4"
                  >
                    <p className="text-[12px] font-bold text-[#1a1612] mb-1.5">{item.title}</p>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                  Cara Membaca Data History untuk Identifikasi Pola Loss
                </h3>
                <p className="text-[12px] text-[#6b6058] leading-relaxed mb-3">
                  Perhatikan pola berikut di History Anda:
                </p>
                <ul className="space-y-2">
                  {[
                    "Jam berapa loss rate tinggi? Hindari trading di jam tersebut.",
                    "Mode mana yang win rate-nya di bawah 50%? Pertimbangkan untuk tidak menggunakannya.",
                    "Aset mana yang selalu loss? Coba aset lain.",
                    "Apakah loss terjadi setelah jam tertentu? Mungkin kondisi pasar berubah.",
                    "Apakah martingale sering sampai step tertinggi? Max steps mungkin perlu dikurangi.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                      <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <InfoBox icon="📊" title="Data adalah Teman Terbaik Anda">
                Jangan abaikan History page. Trader yang secara rutin menganalisis riwayat tradingnya
                memiliki kemampuan adaptasi jauh lebih baik dibanding yang hanya menjalankan bot tanpa
                evaluasi. Data history Anda adalah peta untuk menghindari kesalahan yang sama di masa
                depan.
              </InfoBox>
            </section>

            {/* Section 7 */}
            <section>
              <SectionLabel>Mengatur Martingale</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Mengatur Martingale Max Steps Sesuai Modal
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Salah satu faktor terbesar yang mempengaruhi risiko loss adalah konfigurasi martingale,
                khususnya Max Steps (1-7). Lebih banyak steps berarti potensi recovery yang lebih
                panjang, tapi juga eksposur risiko yang jauh lebih besar.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl overflow-hidden mb-5">
                <div className="grid grid-cols-4 bg-[#f9fafb] border-b border-[rgba(26,22,18,0.06)] px-4 py-2.5">
                  {["Max Steps", "Multiplier 1.5x", "Multiplier 2x", "Profil Risiko"].map((h) => (
                    <p
                      key={h}
                      className="text-[10px] font-semibold text-[#6b6058] uppercase tracking-wide"
                    >
                      {h}
                    </p>
                  ))}
                </div>
                {[
                  { steps: "3 Steps", m15: "~3x base", m2: "~7x base", risk: "Konservatif", riskColor: "text-[#166534]" },
                  { steps: "4 Steps", m15: "~5x base", m2: "~15x base", risk: "Menengah", riskColor: "text-[#92400e]" },
                  { steps: "5 Steps", m15: "~7.5x base", m2: "~31x base", risk: "Agresif", riskColor: "text-[#ef4444]" },
                  { steps: "7 Steps", m15: "~17x base", m2: "~127x base", risk: "Sangat Agresif", riskColor: "text-[#991b1b]" },
                ].map((row, i) => (
                  <div
                    key={row.steps}
                    className={`grid grid-cols-4 px-4 py-3 ${i < 3 ? "border-b border-[rgba(26,22,18,0.04)]" : ""}`}
                  >
                    <p className="text-[12px] font-semibold text-[#1a1612]">{row.steps}</p>
                    <p className="text-[11px] text-[#6b6058]">{row.m15}</p>
                    <p className="text-[11px] text-[#6b6058]">{row.m2}</p>
                    <p className={`text-[11px] font-semibold ${row.riskColor}`}>{row.risk}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-1">
                    Untuk Modal Kecil (di bawah Rp 300.000)
                  </p>
                  <p className="text-[12px] text-[#6b6058]">
                    Gunakan Max Steps 3-4 dengan multiplier 1.5x. Ini membatasi eksposur maksimum
                    sekitar 5x base amount — masih manageable untuk modal kecil.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-4 py-3">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-1">
                    Untuk Modal Menengah (Rp 300.000 - Rp 1.000.000)
                  </p>
                  <p className="text-[12px] text-[#6b6058]">
                    Max Steps 4-5, multiplier 1.5x-2x bisa dipertimbangkan. Pastikan SL harian
                    mencukupi untuk cover seluruh skenario martingale yang mungkin terjadi.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 — FAQ */}
            <section>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pertanyaan Umum tentang Manajemen Risiko di STC AutoTrade
              </h2>
              <div className="divide-y divide-[rgba(26,22,18,0.06)] border border-[rgba(26,22,18,0.06)] rounded-xl overflow-hidden">
                {faqs.map((faq) => (
                  <div key={faq.q} className="px-5 py-4">
                    <p className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{faq.q}</p>
                    <p className="text-[13px] text-[#6b6058] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9 — Kesimpulan */}
            <section>
              <SectionLabel>Kesimpulan</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Kelola Risiko dengan Fitur yang Sudah Ada di STC AutoTrade
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                STC AutoTrade v4.4 sudah menyediakan semua alat yang dibutuhkan untuk manajemen risiko
                yang efektif: Stop Loss harian yang menghentikan bot otomatis saat batas kerugian
                tercapai, Stop Profit yang mengunci keuntungan, Always Signal untuk recovery martingale,
                akun Demo untuk berlatih tanpa risiko, dan History page untuk analisis mandiri.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-6">
                Kunci utama: selalu isi Stop Loss sebelum menjalankan bot, mulai dengan akun Demo,
                analisis History secara rutin, dan sesuaikan Max Steps martingale dengan modal yang
                benar-benar Anda siap risiko. Loss tidak bisa dihindari, tapi bisa dikelola.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Artikel Terkait</p>
                <div className="space-y-2">
                  {[
                    {
                      href: "/artikel/strategi-martingale-stockity",
                      label: "Strategi Martingale di Stockity: Cara Kerja dan Risikonya",
                    },
                    {
                      href: "/artikel/modal-trading-stockity",
                      label: "Modal Trading Stockity: Berapa yang Dibutuhkan?",
                    },
                    {
                      href: "/artikel/cara-profit-trading-stockity",
                      label: "Cara Profit Trading Stockity dengan Bot STC AutoTrade",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-[13px] text-[#3b82f6] hover:text-[#1d4ed8] no-underline transition-colors"
                    >
                      <span className="text-[10px]">→</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-[#1a1612] rounded-2xl p-6 text-center">
              <p className="text-[13px] text-white/60 mb-2">
                Mulai trading dengan manajemen risiko yang benar
              </p>
              <h3 className="text-[18px] font-bold text-white mb-4">
                Download STC AutoTrade — Set SL/TP dan Mulai Demo
              </h3>
              <a
                href="/StcAutoTrade.apk"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white text-[13px] font-semibold rounded-xl no-underline hover:bg-[#2563eb] transition-colors"
              >
                Download APK Gratis
              </a>
            </div>
          </div>
        </main>

        <footer className="py-8 bg-[#1a1612] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-white/40">© 2026 STC AutoTrade. Hak cipta dilindungi.</p>
            <div className="flex gap-5">
              <Link
                href="/"
                className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors"
              >
                Beranda
              </Link>
              <Link
                href="/artikel"
                className="text-[12px] text-white/40 hover:text-white/70 no-underline transition-colors"
              >
                Artikel
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
