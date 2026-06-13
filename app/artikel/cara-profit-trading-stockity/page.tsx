/**
 * app/artikel/cara-profit-trading-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : cara profit trading stockity
 *   Secondary: strategi trading stockity menang, tips trading stockity pemula,
 *              cara menang trading stockity, strategi stockity terbaik,
 *              cara trading stockity yang benar, teknik trading stockity,
 *              cara konsisten profit di stockity, trading stockity strategi menang,
 *              waktu terbaik trading stockity, cara baca sinyal stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Profit Trading Stockity: Strategi & Tips Konsisten 2026",
  description:
    "Panduan cara profit trading Stockity — strategi terbaik, tips manajemen risiko, waktu trading optimal, setting bot STC AutoTrade, dan cara konsisten profit jangka panjang di platform Stockity.id.",
  keywords: [
    "cara profit trading stockity",
    "strategi trading stockity menang",
    "tips trading stockity pemula",
    "cara menang trading stockity",
    "strategi stockity terbaik",
    "cara trading stockity yang benar",
    "teknik trading stockity",
    "cara konsisten profit di stockity",
    "trading stockity strategi menang",
    "waktu terbaik trading stockity",
    "cara baca sinyal stockity",
    "tips sukses trading stockity",
    "cara trading binary option stockity menang",
    "strategi bot stockity terbaik",
    "cara menghasilkan dari stockity",
    "manajemen modal trading stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-profit-trading-stockity",
  },
  openGraph: {
    title: "Cara Profit Trading Stockity: Strategi & Tips Konsisten 2026",
    description:
      "Strategi, tips, dan sistem manajemen risiko untuk trading konsisten profitable di Stockity — menggunakan STC AutoTrade.",
    url: "https://stcautotrade.id/artikel/cara-profit-trading-stockity",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-05-21T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cara Profit Trading Stockity — Strategi & Tips 2026",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Profit Trading Stockity: Strategi & Tips Konsisten 2026",
  description:
    "Panduan strategi, manajemen risiko, dan tips trading konsisten profitable di Stockity menggunakan STC AutoTrade.",
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
    "@id": "https://stcautotrade.id/artikel/cara-profit-trading-stockity",
  },
  keywords:
    "cara profit trading stockity, strategi trading stockity, tips trading stockity, cara menang trading stockity",
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
      name: "Cara Profit Trading Stockity",
      item: "https://stcautotrade.id/artikel/cara-profit-trading-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa strategi terbaik untuk profit di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada satu strategi yang 'selalu menang'. Yang terbukti bekerja adalah kombinasi: strategi yang divalidasi di demo (minimal 7 hari), manajemen risiko ketat (stop loss + stop profit), modal yang cukup untuk buffer martingale, dan konsistensi dalam menjalankan sistem. Untuk pemula, CTC Copy Trading dan AI Signal di STC AutoTrade adalah titik awal yang baik karena tidak memerlukan analisis manual.",
      },
    },
    {
      "@type": "Question",
      name: "Kapan waktu terbaik trading di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umumnya sesi trading paling aktif adalah saat overlap jam trading Asia dan Eropa (sekitar pukul 14.00–17.00 WIB) dan sesi Eropa-Amerika (sekitar 19.00–22.00 WIB). Namun waktu terbaik bervariasi per aset dan kondisi pasar. Validasi waktu trading terbaik Anda di mode demo STC AutoTrade sebelum beralih ke real.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah bisa profit konsisten setiap hari di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Profit konsisten setiap hari adalah target yang tidak realistis di trading binary option. Trader yang berhasil di jangka panjang fokus pada profit mingguan atau bulanan yang positif secara rata-rata — bukan profit setiap hari. Ada hari-hari di mana stop loss hit, dan itu normal dalam sistem trading yang sehat.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara meningkatkan win rate di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk meningkatkan win rate: (1) validasi strategi di mode demo dengan data nyata, (2) hindari trading saat volatilitas pasar sangat tinggi (berita ekonomi besar), (3) konsisten menggunakan satu strategi — jangan ganti-ganti strategi setiap hari, (4) gunakan bot seperti STC AutoTrade untuk menghilangkan bias emosional, (5) evaluasi performa setiap minggu dan kalibrasi ulang jika diperlukan.",
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

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">✅</span>
      <p className="text-[13px] text-[#14532d] leading-relaxed">{children}</p>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function CaraProfitTradingStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Cara Profit Trading Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dcfce7] text-[#15803d] text-[11px] font-semibold rounded-full">Strategi</span>
            <span className="text-[12px] text-[#1a1612]/35">21 Mei 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±14 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Cara Profit Trading Stockity:<br className="hidden sm:block" />
            Strategi & Tips Konsisten 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Artikel ini membahas{" "}
            <strong className="font-semibold text-[#1a1612]">cara profit trading Stockity</strong>{" "}
            secara realistis — bukan janji kaya cepat, tapi sistem dan kebiasaan yang
            membedakan trader yang bertahan dari yang tidak: strategi tervalidasi,{" "}
            <strong className="font-semibold text-[#1a1612]">manajemen risiko otomatis</strong>,
            dan disiplin konsisten.
          </p>

          <WarningBox>
            <strong>Disclaimer awal:</strong> Tidak ada strategi yang menjamin profit di
            trading binary option. Artikel ini membahas pendekatan untuk{" "}
            <em>meminimalkan risiko</em> dan{" "}
            <em>meningkatkan konsistensi</em> — bukan jaminan keuntungan.
            Trading selalu mengandung risiko kerugian.
          </WarningBox>
        </header>

        {/* ── Article Body ────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── 01: Fondasi Profit ────────────────────── */}
            <section>
              <SectionLabel>01 · Fondasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Mengapa Sebagian Trader Profit, Sebagian Tidak?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Sebelum membahas strategi spesifik, penting memahami satu fakta:
                  perbedaan antara trader yang konsisten profit dan yang terus rugi
                  <strong className="text-[#1a1612]"> bukan terletak pada keberuntungan</strong>,
                  melainkan pada tiga faktor yang bisa dipelajari:
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "🧱",
                      n: "01",
                      title: "Sistem yang Tervalidasi",
                      desc: "Strategi yang sudah diuji di mode demo dengan data nyata selama minimal 7–14 hari, menghasilkan win rate konsisten di atas 53%. Bukan strategi yang hanya 'terasa bagus'.",
                    },
                    {
                      icon: "🛡️",
                      n: "02",
                      title: "Manajemen Risiko Ketat",
                      desc: "Stop loss harian yang tidak pernah dilewati, stop profit yang mengamankan keuntungan, dan martingale yang terkontrol. Satu aturan: tidak ada order tanpa batas risiko.",
                    },
                    {
                      icon: "🧘",
                      n: "03",
                      title: "Disiplin Tanpa Emosi",
                      desc: "Tidak mengganti strategi saat sedang rugi. Tidak 'balas dendam' setelah loss besar. Tidak menambah nominal karena sedang profit. Konsistensi sistem di atas emosi sesaat.",
                    },
                  ].map((item) => (
                    <div key={item.n} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-[10px] font-semibold text-[#3b82f6] uppercase tracking-wider mb-1">Faktor {item.n}</p>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <InfoBox icon="🔑" title="Keunggulan bot vs trader manual">
                  Bot trading seperSTC AutoTrade menangani faktor ketiga (disiplin tanpa emosi)
                  secara otomatis. Bot tidak pernah panik, tidak pernah 'balas dendam', tidak
                  pernah lupa stop loss. Ini satu-satunya cara mendapatkan konsistensi emosional
                  yang mustahil dilakukan manusia secara terus-menerus.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Pilihan Strategi per Level ────────── */}
            <section>
              <SectionLabel>02 · Strategi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Strategi Trading Stockity Berdasarkan Level & Tujuan
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Tidak ada strategi universal yang cocok untuk semua trader.
                  Berikut panduan memilih strategi berdasarkan level dan tujuan Anda:
                </p>

                {/* Level Pemula */}
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden">
                  <div className="px-5 py-3.5 bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)] flex items-center gap-2">
                    <span className="text-sm">⭐</span>
                    <h3 className="text-[13px] font-semibold text-[#1a1612]">Pemula: Prioritaskan Kemudahan & Keamanan</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      {
                        strategi: "CTC Copy Trading",
                        kenapa: "Salin sinyal trader berpengalaman secara otomatis. Tidak perlu analisis manual sama sekali — aktifkan dan bot bekerja sendiri. Cocok untuk yang baru pertama kali.",
                        setting: "Nominal: Rp 14.000 | Multiplier: 2× | Max Step: 3 | SL: 20% modal",
                        color: "border-l-violet-400",
                      },
                      {
                        strategi: "AI Signal",
                        kenapa: "Algoritma AI menganalisis ratusan data poin per detik. Tidak memerlukan pengetahuan teknikal apapun dari trader. Hasilnya objektif dan tidak dipengaruhi emosi.",
                        setting: "Nominal: Rp 14.000 | Multiplier: 2,5× | Max Step: 3 | SL: 20% modal",
                        color: "border-l-rose-400",
                      },
                    ].map((s) => (
                      <div key={s.strategi} className={`border-l-4 ${s.color} bg-[#f9fafb] rounded-r-xl pl-4 py-3 pr-3`}>
                        <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.strategi}</p>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{s.kenapa}</p>
                        <div className="bg-white rounded-lg px-3 py-1.5 border border-[rgba(26,22,18,0.07)]">
                          <p className="text-[11px] text-[#3b82f6] font-medium">Setting awal: {s.setting}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level Intermediate */}
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden">
                  <div className="px-5 py-3.5 bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)] flex items-center gap-2">
                    <span className="text-sm">⭐⭐</span>
                    <h3 className="text-[13px] font-semibold text-[#1a1612]">Intermediate: Tambahkan Analisis Teknikal</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      {
                        strategi: "Indicator (SMA/EMA/RSI)",
                        kenapa: "Untuk trader yang memahami moving average dan RSI. Sinyal lebih presisi karena mengikuti kondisi indikator spesifik yang Anda sudah pahami maknanya.",
                        setting: "Nominal: Rp 25.000 | Multiplier: 2,5× | Max Step: 3 | Modal: Rp 1 juta",
                        color: "border-l-amber-400",
                      },
                      {
                        strategi: "Momentum/Candlestick",
                        kenapa: "Mengenali formasi candlestick bertenaga (Hammer, Doji, Engulfing). Cocok untuk trader yang bisa membaca price action dan ingin trading saat momentum terbentuk.",
                        setting: "Nominal: Rp 25.000 | Multiplier: 2,5× | Max Step: 3 | Modal: Rp 1 juta",
                        color: "border-l-orange-400",
                      },
                    ].map((s) => (
                      <div key={s.strategi} className={`border-l-4 ${s.color} bg-[#f9fafb] rounded-r-xl pl-4 py-3 pr-3`}>
                        <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.strategi}</p>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{s.kenapa}</p>
                        <div className="bg-white rounded-lg px-3 py-1.5 border border-[rgba(26,22,18,0.07)]">
                          <p className="text-[11px] text-[#3b82f6] font-medium">Setting awal: {s.setting}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level Advanced */}
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden">
                  <div className="px-5 py-3.5 bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)] flex items-center gap-2">
                    <span className="text-sm">⭐⭐⭐</span>
                    <h3 className="text-[13px] font-semibold text-[#1a1612]">Advanced: Optimalkan dengan Data Historis</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      {
                        strategi: "Schedule (Trading Terjadwal)",
                        kenapa: "Jika Anda memiliki data historis sesi trading yang konsisten profitable, jadwalkan bot untuk aktif hanya pada waktu-waktu tersebut. Mengurangi eksposur pada sesi yang tidak produktif.",
                        setting: "Sesuaikan dengan data sesi profitable Anda. Modal: Rp 2 juta+",
                        color: "border-l-blue-400",
                      },
                      {
                        strategi: "Fastrade (Frekuensi Tinggi)",
                        kenapa: "Volume order lebih tinggi berarti lebih banyak peluang — namun juga lebih banyak eksposur. Cocok hanya untuk trader yang sudah sangat familiar dengan pola pasar Stockity.",
                        setting: "Nominal: Rp 25.000–50.000 | Multiplier: 2× | Max Step: 3 | Modal: Rp 2 juta+",
                        color: "border-l-emerald-400",
                      },
                    ].map((s) => (
                      <div key={s.strategi} className={`border-l-4 ${s.color} bg-[#f9fafb] rounded-r-xl pl-4 py-3 pr-3`}>
                        <p className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.strategi}</p>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{s.kenapa}</p>
                        <div className="bg-white rounded-lg px-3 py-1.5 border border-[rgba(26,22,18,0.07)]">
                          <p className="text-[11px] text-[#3b82f6] font-medium">Setting awal: {s.setting}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── 03: Formula Manajemen Risiko ──────────── */}
            <section>
              <SectionLabel>03 · Sistem Risiko</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Formula Manajemen Risiko untuk Profit Konsisten
              </h2>
              <div className="space-y-5">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Trader yang profit konsisten bukan berarti selalu menang —
                  mereka punya <strong className="text-[#1a1612]">sistem yang membuat kerugian tetap terkontrol</strong>{" "}
                  dan keuntungan bisa mengkompensasinya secara kumulatif.
                  Berikut formula yang terbukti bekerja:
                </p>

                {/* Formula utama */}
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl p-6">
                  <h3 className="text-[14px] font-semibold text-[#1a1612] mb-5">📐 Formula Risiko yang Sehat</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        label: "Stop Loss Harian",
                        formula: "20–30% Modal",
                        contoh: "Modal Rp 500K → SL Rp 100K–150K",
                        desc: "Batas kerugian maksimal satu hari. Bot berhenti otomatis saat mencapai batas ini.",
                        color: "border-rose-200 bg-rose-50",
                      },
                      {
                        label: "Stop Profit Harian",
                        formula: "2–3× Stop Loss",
                        contoh: "SL Rp 100K → SP Rp 200K–300K",
                        desc: "Bot berhenti saat profit harian tercapai — amankan keuntungan dari godaan overtrade.",
                        color: "border-emerald-200 bg-emerald-50",
                      },
                      {
                        label: "Risk:Reward Ratio",
                        formula: "Min 1:2",
                        contoh: "Risiko Rp 100K → Target Rp 200K",
                        desc: "Dengan R:R 1:2, Anda cukup menang 40% waktu untuk tetap net positif.",
                        color: "border-blue-200 bg-blue-50",
                      },
                    ].map((f) => (
                      <div key={f.label} className={`border rounded-xl p-4 ${f.color}`}>
                        <p className="text-[11px] font-semibold text-[#1a1612]/50 uppercase tracking-wider mb-1">{f.label}</p>
                        <p className="font-[family-name:var(--font-dm-serif)] text-xl text-[#1a1612] mb-1">{f.formula}</p>
                        <p className="text-[11px] font-medium text-[#3b82f6] mb-2">{f.contoh}</p>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kalkulasi martingale */}
                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl p-6">
                  <h3 className="text-[14px] font-semibold text-[#1a1612] mb-4">
                    🔢 Kalkulasi Martingale yang Tepat untuk Profit Jangka Panjang
                  </h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed mb-4">
                    Martingale adalah alat, bukan solusi ajaib. Digunakan dengan benar,
                    ia membantu menutup kerugian. Digunakan dengan salah, ia mempercepat
                    kehancuran saldo. Kuncinya ada pada tiga angka ini:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                          <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase">Profil</th>
                          <th className="text-right px-3 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase">Nominal</th>
                          <th className="text-right px-3 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase">Multiplier</th>
                          <th className="text-right px-3 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase">Max Step</th>
                          <th className="text-right px-4 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase">Modal Min</th>
                          <th className="text-left px-4 py-3 text-[11px] font-semibold text-[#1a1612]/40 uppercase">Untuk Siapa</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                        {[
                          { profil: "Konservatif", nominal: "Rp 14.000", mult: "2,0×", step: "3", modal: "Rp 300.000", untuk: "Pemula / modal terbatas" },
                          { profil: "Standar", nominal: "Rp 14.000", mult: "2,5×", step: "3", modal: "Rp 500.000", untuk: "Pemula serius" },
                          { profil: "Intermediate", nominal: "Rp 25.000", mult: "2,5×", step: "3", modal: "Rp 1.000.000", untuk: "Trader 30+ hari" },
                          { profil: "Advanced", nominal: "Rp 50.000", mult: "3,0×", step: "3", modal: "Rp 3.000.000", untuk: "Trader berpengalaman" },
                        ].map((r) => (
                          <tr key={r.profil} className="hover:bg-[#f9fafb]">
                            <td className="px-4 py-3 font-medium text-[#1a1612]">{r.profil}</td>
                            <td className="px-3 py-3 text-right text-[#6b6058]">{r.nominal}</td>
                            <td className="px-3 py-3 text-right text-[#6b6058]">{r.mult}</td>
                            <td className="px-3 py-3 text-right text-[#6b6058]">{r.step}</td>
                            <td className="px-4 py-3 text-right font-semibold text-[#1a1612]">{r.modal}</td>
                            <td className="px-4 py-3 text-[#6b6058]">{r.untuk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 04: Waktu Trading Optimal ─────────────── */}
            <section>
              <SectionLabel>04 · Waktu Optimal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Waktu Terbaik Trading di Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Pasar binary option memiliki pola volatilitas yang berulang berdasarkan
                  jam sesi trading global. Memahami waktu dengan sinyal paling kuat adalah
                  keunggulan yang dapat secara signifikan meningkatkan win rate:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      sesi: "Sesi Asia",
                      jam: "07.00–12.00 WIB",
                      volatilitas: "Rendah–Menengah",
                      volColor: "bg-blue-50 text-blue-700",
                      karakteristik: "Pergerakan lebih terprediksi, volume lebih rendah. Cocok untuk strategi Schedule pada jam tertentu yang sudah terbukti profitable dari data Anda.",
                      rekomendasiBot: "AI Signal atau CTC",
                      icon: "🌏",
                    },
                    {
                      sesi: "Overlap Asia–Eropa",
                      jam: "14.00–17.00 WIB",
                      volatilitas: "Menengah–Tinggi",
                      volColor: "bg-amber-50 text-amber-700",
                      karakteristik: "Transisi antara sesi Asia dan Eropa — sering menghasilkan momentum yang kuat. Ini salah satu periode paling aktif untuk berbagai pasangan aset.",
                      rekomendasiBot: "Momentum/Candlestick atau AI Signal",
                      icon: "🌍",
                    },
                    {
                      sesi: "Sesi Eropa",
                      jam: "15.00–20.00 WIB",
                      volatilitas: "Tinggi",
                      volColor: "bg-rose-50 text-rose-700",
                      karakteristik: "Volume tinggi, tren lebih kuat dan lebih mudah diikuti. Namun volatilitas juga berarti risiko lebih tinggi. Strategi yang mengikuti tren bekerja lebih baik.",
                      rekomendasiBot: "AI Signal atau Indicator",
                      icon: "🏛️",
                    },
                    {
                      sesi: "Overlap Eropa–Amerika",
                      jam: "19.00–22.00 WIB",
                      volatilitas: "Sangat Tinggi",
                      volColor: "bg-rose-50 text-rose-700",
                      karakteristik: "Paling aktif dalam sehari — volume tertinggi, tren paling kuat, namun reversal juga lebih sering terjadi. Periode rilis berita ekonomi AS sering menyebabkan spike.",
                      rekomendasiBot: "AI Signal — hindari saat rilis data ekonomi besar",
                      icon: "🗽",
                    },
                    {
                      sesi: "Malam–Dini Hari",
                      jam: "23.00–06.00 WIB",
                      volatilitas: "Rendah",
                      volColor: "bg-gray-100 text-gray-600",
                      karakteristik: "Volume sangat rendah — spread lebih lebar, pergerakan kurang terprediksi. Untuk bot yang berjalan 24 jam, pertimbangkan untuk menggunakan stop profit lebih rendah di sesi ini.",
                      rekomendasiBot: "CTC Copy Trading — atau nonaktifkan bot di jam ini",
                      icon: "🌙",
                    },
                  ].map((sesi) => (
                    <div key={sesi.sesi} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{sesi.icon}</span>
                          <h3 className="text-[13px] font-semibold text-[#1a1612]">{sesi.sesi}</h3>
                          <span className="text-[12px] text-[#3b82f6] font-medium">{sesi.jam}</span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${sesi.volColor}`}>
                          Volatilitas: {sesi.volatilitas}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed mb-2">{sesi.karakteristik}</p>
                      <div className="bg-[#f9fafb] rounded-lg px-3 py-1.5 border border-[rgba(26,22,18,0.06)]">
                        <p className="text-[11px] text-[#1a1612]/50">Bot rekomendasi: <strong className="text-[#3b82f6]">{sesi.rekomendasiBot}</strong></p>
                      </div>
                    </div>
                  ))}
                </div>

                <TipBox>
                  <strong>Cara menemukan waktu terbaik untuk akun Anda:</strong> Jalankan bot
                  di mode demo STC AutoTrade selama 14 hari di berbagai sesi. Catat win rate
                  per sesi waktu dari riwayat trading. Gunakan data ini untuk setting strategi
                  Schedule yang menarget jam dengan win rate tertinggi.
                </TipBox>
              </div>
            </section>

            {/* ── 05: 7 Kesalahan Fatal ─────────────────── */}
            <section>
              <SectionLabel>05 · Kesalahan Fatal</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                7 Kesalahan Fatal yang Menghancurkan Profit di Stockity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    n: "01",
                    judul: "Tidak pakai stop loss — 'yakin' strategi akan balik profit",
                    detail: "Tidak ada strategi yang 100% menang. Tanpa stop loss, satu hari buruk bisa menguras minggu-minggu profit. Stop loss bukan pesimisme — ini manajemen realita.",
                    fatal: true,
                  },
                  {
                    n: "02",
                    judul: "Mengganti strategi setelah serangkaian loss",
                    detail: "Loss beruntun adalah bagian normal dari setiap strategi trading. Mengganti strategi di tengah drawdown berarti Anda akan selalu telat pindah dan tidak pernah punya data yang cukup untuk evaluasi yang valid.",
                    fatal: true,
                  },
                  {
                    n: "03",
                    judul: "'Trading balas dendam' setelah hit stop loss",
                    detail: "Setelah bot berhenti karena stop loss, banyak trader menambah nominal atau mengaktifkan ulang bot tanpa jeda — mencoba 'balik' modal yang hilang dalam satu sesi. Ini hampir selalu berujung kerugian lebih besar.",
                    fatal: true,
                  },
                  {
                    n: "04",
                    judul: "Menaikkan nominal terlalu cepat setelah profit",
                    detail: "Setelah beberapa hari profit, trader tergoda menaikkan nominal drastis. Namun drawdown berikutnya — yang pasti akan datang — terjadi di nominal lebih besar, mengikis keuntungan yang terkumpul.",
                    fatal: false,
                  },
                  {
                    n: "05",
                    judul: "Tidak validasi strategi di demo sebelum real",
                    detail: "Langsung pakai mode real tanpa uji demo. Akibatnya: baru menemukan kelemahan strategi saat modal nyata sudah tergerus.",
                    fatal: false,
                  },
                  {
                    n: "06",
                    judul: "Trading saat rilis berita ekonomi besar tanpa antisipasi",
                    detail: "NFP, FOMC, data inflasi AS — semua ini menyebabkan spike volatilitas yang tidak terprediksi oleh kebanyakan strategi bot. Pertimbangkan nonaktifkan bot 30 menit sebelum dan sesudah rilis berita besar.",
                    fatal: false,
                  },
                  {
                    n: "07",
                    judul: "Menggunakan modal yang tidak siap hilang",
                    detail: "Menggunakan uang tabungan darurat, pinjaman, atau kebutuhan bulanan untuk trading. Tekanan finansial memperburuk pengambilan keputusan dan mendorong pengambilan risiko berlebihan.",
                    fatal: true,
                  },
                ].map((item) => (
                  <div key={item.n} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4 flex gap-4">
                    <div className={`text-[18px] font-[family-name:var(--font-dm-serif)] flex-shrink-0 w-8 ${item.fatal ? "text-rose-600" : "text-amber-600"}`}>
                      {item.n}
                    </div>
                    <div>
                      <div className="flex items-start gap-2 mb-1.5">
                        <h3 className="text-[13px] font-semibold text-[#1a1612]">{item.judul}</h3>
                        {item.fatal && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 bg-rose-50 text-rose-600 rounded flex-shrink-0">FATAL</span>
                        )}
                      </div>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 06: Roadmap Profit 30 Hari ────────────── */}
            <section>
              <SectionLabel>06 · Roadmap</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Roadmap 30 Hari: Dari Nol ke Trading Real Konsisten
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed mb-5">
                Berikut roadmap realistis bagi pemula yang ingin mulai profit di Stockity
                dengan manajemen risiko yang benar:
              </p>

              <div className="max-w-2xl space-y-3">
                {[
                  {
                    periode: "Hari 1–3",
                    badge: "Setup",
                    badgeColor: "bg-blue-50 text-blue-700",
                    tasks: [
                      "Download STC AutoTrade APK atau buka versi web",
                      "Daftar akun Stockity.id melalui aplikasi (gratis)",
                      "Pelajari cara kerja 6 strategi di halaman Cara Kerja",
                      "Setup: pilih strategi CTC atau AI Signal untuk demo",
                    ],
                  },
                  {
                    periode: "Hari 4–10",
                    badge: "Demo Minggu 1",
                    badgeColor: "bg-violet-50 text-violet-700",
                    tasks: [
                      "Aktifkan bot di mode demo dengan setting konservatif",
                      "Catat win rate harian dan drawdown maksimal",
                      "Amati perilaku bot di kondisi pasar berbeda",
                      "JANGAN ubah strategi di tengah periode — konsisten",
                    ],
                  },
                  {
                    periode: "Hari 11–17",
                    badge: "Demo Minggu 2",
                    badgeColor: "bg-amber-50 text-amber-700",
                    tasks: [
                      "Lanjut demo dengan strategi yang sama",
                      "Bandingkan performa dua minggu",
                      "Identifikasi sesi jam trading dengan win rate terbaik",
                      "Evaluasi: apakah win rate rata-rata di atas 53%?",
                    ],
                  },
                  {
                    periode: "Hari 18–24",
                    badge: "Real Minimal",
                    badgeColor: "bg-emerald-50 text-emerald-700",
                    tasks: [
                      "Deposit minimal (Rp 300.000–500.000) ke Stockity.id",
                      "Aktifkan bot real dengan nominal SETENGAH dari demo",
                      "Stop loss wajib aktif — tidak ada pengecualian",
                      "Target: validasi bahwa hasil demo tercermin di real",
                    ],
                  },
                  {
                    periode: "Hari 25–30",
                    badge: "Evaluasi & Skala",
                    badgeColor: "bg-rose-50 text-rose-700",
                    tasks: [
                      "Tinjau performa keseluruhan 30 hari",
                      "Jika konsisten profitable: pertimbangkan naikkan nominal 25–50%",
                      "Jika masih loss: kembali demo dengan strategi berbeda",
                      "Dokumentasi semua parameter untuk referensi ke depan",
                    ],
                  },
                ].map((phase, i) => (
                  <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${phase.badgeColor}`}>{phase.badge}</span>
                      <span className="text-[12px] text-[#1a1612]/40 font-medium">{phase.periode}</span>
                    </div>
                    <div className="space-y-1.5">
                      {phase.tasks.map((task, j) => (
                        <div key={j} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                            <circle cx="7" cy="7" r="6.5" stroke="#3b82f6" strokeOpacity="0.3" />
                            <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>07 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Cara Profit di Stockity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Berapa win rate minimal untuk bisa profit di Stockity?",
                    a: "Dengan payout rata-rata 80%, break even point ada di sekitar win rate 56% (karena setiap win = +80%, setiap loss = -100%). Untuk profit nyata, win rate minimal 58–60% secara konsisten diperlukan. Di bawah itu, sistem martingale masih bisa membantu, namun membutuhkan modal buffer yang lebih besar.",
                  },
                  {
                    q: "Apakah bisa profit tanpa martingale di Stockity?",
                    a: "Ya, bisa. Trading fixed nominal (tanpa martingale) lebih sederhana dari sisi manajemen modal. Namun untuk menghasilkan profit yang berarti, win rate harus lebih tinggi karena tidak ada mekanisme kompensasi loss. Pilih fixed nominal jika modal terbatas dan ingin manajemen risiko yang lebih mudah dipahami.",
                  },
                  {
                    q: "Kapan saya harus berhenti trading hari ini?",
                    a: "Berhenti saat: (1) stop loss harian tercapai, (2) stop profit harian tercapai, (3) kondisi pasar sangat tidak stabil (misalnya saat rilis berita besar), (4) secara emosional sedang tidak dalam kondisi baik untuk trading manual. STC AutoTrade menangani ini otomatis untuk poin 1 dan 2.",
                  },
                  {
                    q: "Apakah harus selalu aktif memantau bot yang sedang berjalan?",
                    a: "Tidak, jika stop loss dan stop profit sudah diaktifkan. STC AutoTrade dirancang untuk berjalan tanpa pengawasan konstan — bot akan berhenti otomatis saat batas risiko atau target tercapai. Cukup tinjau riwayat trading sekali sehari atau sekali seminggu untuk evaluasi.",
                  },
                  {
                    q: "Berapa target profit harian yang realistis?",
                    a: "Target realistis sangat bergantung pada modal dan setting. Sebagai acuan kasar: dengan modal Rp 500.000 dan setting standar, target profit harian Rp 50.000–200.000 di hari yang baik. Namun tidak semua hari akan profit — fokuslah pada profit mingguan atau bulanan yang positif secara rata-rata, bukan profit setiap hari.",
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
              <SectionLabel>08 · Kesimpulan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kesimpulan: Sistem + Disiplin = Profit Konsisten
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  <strong className="text-[#1a1612]">Cara profit di Stockity</strong> bukan
                  tentang menemukan "sinyal ajaib" atau "strategi tersembunyi" — ini tentang
                  membangun dan menjalankan sistem yang terdiri dari: strategi tervalidasi,
                  manajemen risiko otomatis (stop loss + stop profit), modal yang cukup, dan
                  konsistensi tanpa gangguan emosi.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  STC AutoTrade menyediakan infrastruktur untuk menjalankan sistem ini secara
                  gratis — 6 strategi, stop loss otomatis, martingale terkelola, dan mode demo
                  dengan data nyata untuk validasi.
                </p>
                <WarningBox>
                  <strong>Disclaimer:</strong> Tidak ada jaminan profit dalam trading binary option.
                  Panduan ini adalah framework untuk mengelola risiko lebih baik, bukan formula
                  kemenangan. Selalu gunakan modal yang siap Anda tanggung kehilangannya.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot Stockity", desc: "Konfigurasi martingale, stop loss & strategi" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Kalkulasi modal aman per profil risiko" },
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade 2026" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#15803d] mb-1.5">Validasi Strategi Anda di Mode Demo Dulu</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Terapkan Sistem Ini dengan STC AutoTrade — Gratis</p>
              <p className="text-[13px] text-[#6b6058]">Stop loss, stop profit, 6 strategi, mode demo nyata — mulai dari nol tanpa risiko finansial.</p>
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