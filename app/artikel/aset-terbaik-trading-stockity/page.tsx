import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aset Terbaik Trading Stockity di STC AutoTrade: Forex, Gold, Crypto",
  description:
    "Panduan memilih aset trading terbaik di Stockity untuk STC AutoTrade. Forex (EUR/USD, USD/IDR), Gold, Oil, Crypto — semua real-time dari API Stockity. Tips pilih aset per mode bot.",
  keywords: [
    "aset terbaik trading stockity",
    "aset binary option stockity",
    "EUR USD trading binary option",
    "gold trading binary option",
    "crypto binary option stockity",
    "cara pilih aset STC AutoTrade",
    "aset forex stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
  },
  openGraph: {
    title: "Aset Terbaik Trading Stockity: Forex, Gold & Crypto di STC AutoTrade 2026",
    description:
      "Aset di STC AutoTrade diambil real-time dari API Stockity. Forex (EUR/USD, USD/IDR), Gold, Oil, Crypto — pilih dari dropdown di dashboard. Tips memilih aset per mode bot.",
    url: "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
    siteName: "STC AutoTrade",
    locale: "id_ID",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Aset Trading Stockity — Forex Gold Crypto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aset Terbaik Trading Stockity: Forex, Gold & Crypto 2026",
    description:
      "Panduan memilih aset di STC AutoTrade — EUR/USD, USD/IDR, Gold, Crypto. Diambil real-time dari API Stockity, dipilih dari dropdown dashboard.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Aset Terbaik Trading Stockity di STC AutoTrade: Forex, Gold, Crypto",
  description:
    "Panduan memilih aset terbaik di Stockity untuk STC AutoTrade v4.4.",
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
    "@id": "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
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
      name: "Aset Terbaik Trading Stockity",
      item: "https://stcautotrade.id/artikel/aset-terbaik-trading-stockity",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bisa ganti aset saat bot sedang berjalan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak disarankan. Untuk mengganti aset, hentikan bot terlebih dahulu, pilih aset baru di dropdown, lalu jalankan bot kembali. Mengganti aset di tengah sesi bisa menyebabkan inkonsistensi dalam strategi bot.",
      },
    },
    {
      "@type": "Question",
      name: "Aset mana yang paling profit di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada aset yang 'selalu paling profit'. EUR/USD populer karena likuiditas tinggi dan spread kecil. Gold cocok untuk mode Momentum karena volatilitasnya. Crypto lebih volatile tapi lebih berisiko. Pilih aset sesuai mode bot dan kondisi pasar saat itu.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada kategori OTC di Stockity atau STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada kategori OTC terpisah di STC AutoTrade. Semua aset ditampilkan dari satu dropdown yang sama, diambil dari API Stockity secara real-time. Anda memilih aset langsung dari daftar yang tersedia tanpa pembagian kategori OTC/non-OTC.",
      },
    },
    {
      "@type": "Question",
      name: "Mana yang lebih baik: USD/IDR atau EUR/USD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EUR/USD umumnya lebih stabil, memiliki spread lebih kecil, dan pergerakannya lebih bisa diprediksi secara teknikal. USD/IDR bisa lebih volatile karena faktor lokal Indonesia. Untuk pemula, EUR/USD lebih direkomendasikan sebagai aset utama.",
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

export default function AsetTerbaikTradingStockityPage() {
  const faqs = [
    {
      q: "Bisa ganti aset saat bot sedang berjalan?",
      a: "Tidak disarankan. Untuk mengganti aset, hentikan bot terlebih dahulu, pilih aset baru di dropdown, lalu jalankan bot kembali. Mengganti aset di tengah sesi bisa menyebabkan inkonsistensi dalam strategi bot.",
    },
    {
      q: "Aset mana yang paling profit di Stockity?",
      a: "Tidak ada aset yang selalu paling profit. EUR/USD populer karena likuiditas tinggi dan spread kecil. Gold cocok untuk mode Momentum karena volatilitasnya. Crypto lebih volatile tapi lebih berisiko. Pilih aset sesuai mode bot dan kondisi pasar saat itu.",
    },
    {
      q: "Apakah ada kategori OTC di Stockity atau STC AutoTrade?",
      a: "Tidak ada kategori OTC terpisah di STC AutoTrade. Semua aset ditampilkan dari satu dropdown yang sama, diambil dari API Stockity secara real-time. Anda memilih aset langsung dari daftar yang tersedia tanpa pembagian kategori OTC atau non-OTC.",
    },
    {
      q: "Mana yang lebih baik: USD/IDR atau EUR/USD?",
      a: "EUR/USD umumnya lebih stabil, memiliki spread lebih kecil, dan pergerakannya lebih bisa diprediksi secara teknikal. USD/IDR bisa lebih volatile karena faktor lokal Indonesia. Untuk pemula, EUR/USD lebih direkomendasikan sebagai aset utama.",
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
                <span className="text-[#1a1612]/60">Aset Terbaik Trading Stockity</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="text-[11px] font-semibold text-[#1d4ed8] tracking-wide uppercase">
                  Panduan Aset
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-tight mb-4">
                Aset Terbaik Trading Stockity di STC AutoTrade:{" "}
                <span className="text-[#3b82f6]">Forex, Gold, dan Crypto</span>
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Di STC AutoTrade v4.4, semua aset trading diambil secara real-time dari API Stockity.
                Forex, komoditas, crypto, dan indices — semuanya tersedia dari satu dropdown di
                dashboard. Memilih aset yang tepat untuk setiap mode bot adalah kunci performa yang
                optimal.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "Real-time", l: "Update Aset" },
                  { v: "Forex/Crypto", l: "Berbagai Kategori" },
                  { v: "1 Aset/Sesi", l: "Focus Trading" },
                  { v: "Profit Rate", l: "Tampil di App" },
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
              <SectionLabel>Cara Memilih Aset</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Cara Memilih Aset di STC AutoTrade
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Berbeda dari platform lain yang memisahkan aset berdasarkan kategori OTC atau
                non-OTC, STC AutoTrade menampilkan semua aset yang tersedia di Stockity dalam satu
                dropdown terpadu. Daftar aset ini diperbarui secara real-time dari API Stockity —
                artinya Anda selalu melihat aset yang sedang aktif dan tersedia untuk trading saat itu.
              </p>
              <div className="space-y-3 mb-6">
                <StepCard
                  n="1"
                  title="Buka Dashboard STC AutoTrade"
                  desc="Di halaman utama dashboard, Anda akan melihat header dengan selector akun (Demo/Real) dan dropdown pemilihan aset trading."
                  sub="Pastikan sudah switch ke akun yang diinginkan (Demo atau Real)"
                />
                <StepCard
                  n="2"
                  title="Klik Dropdown Asset"
                  desc="Klik dropdown 'Asset' untuk melihat semua aset yang tersedia dari API Stockity. Daftar berisi Forex, Komoditas, Crypto, dan Stock Indices."
                  sub="Aset diperbarui real-time — daftar bisa berubah sesuai ketersediaan"
                />
                <StepCard
                  n="3"
                  title="Lihat Profit Rate Setiap Aset"
                  desc="Setiap aset menampilkan profit rate (%) yang akan Anda dapatkan jika prediksi benar. Profit rate berbeda-beda antar aset dan bisa berubah."
                  sub="Pilih aset dengan profit rate kompetitif dan yang familiar dengan Anda"
                />
                <StepCard
                  n="4"
                  title="Pilih Aset dan Konfigurasikan Bot"
                  desc="Setelah memilih aset, atur mode bot, parameter, SL/TP, lalu klik Start. Bot akan trading pada aset yang dipilih selama sesi berlangsung."
                  sub="Satu bot fokus pada 1 aset per sesi"
                />
              </div>
              <InfoBox icon="💡" title="Tidak Ada Kategori OTC Terpisah">
                Di STC AutoTrade v4.4 tidak ada pemisahan khusus antara aset OTC dan reguler. Semua
                aset tampil dalam satu dropdown yang sama. Anda cukup memilih dari daftar yang
                tersedia tanpa perlu memikirkan kategori OTC atau non-OTC.
              </InfoBox>
            </section>

            {/* Section 2 */}
            <section>
              <SectionLabel>Aset Forex</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Aset Forex: Paling Populer untuk Bot Trading
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Aset forex adalah kategori yang paling sering dipilih oleh pengguna STC AutoTrade.
                Pasangan mata uang memiliki likuiditas tertinggi di dunia, spread yang relatif kecil,
                dan pergerakan yang lebih bisa diprediksi secara teknikal dibanding aset lain.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                {[
                  {
                    pair: "EUR/USD",
                    desc: "Pasangan paling liquid di dunia. Spread sangat kecil, pergerakan stabil dan terprediksi. Cocok untuk semua mode bot, terutama mode Indicator (SMA/EMA/RSI) dan mode Fastrade.",
                    tag: "Sangat Direkomendasikan",
                    tagColor: "bg-[#dcfce7] text-[#166534]",
                  },
                  {
                    pair: "USD/IDR",
                    desc: "Pasangan mata uang Dolar AS vs Rupiah Indonesia. Lebih volatile karena faktor ekonomi lokal. Cocok untuk trader yang memahami dinamika pasar Indonesia.",
                    tag: "Moderate",
                    tagColor: "bg-[#fef9c3] text-[#854d0e]",
                  },
                  {
                    pair: "GBP/USD",
                    desc: "Pasangan Pounds vs Dolar. Volatilitas lebih tinggi dari EUR/USD, pergerakan cukup besar terutama di sesi London. Cocok untuk mode Momentum dan Fastrade FTT.",
                    tag: "Cocok Trader Aktif",
                    tagColor: "bg-[#eff6ff] text-[#1d4ed8]",
                  },
                  {
                    pair: "Pasangan Lainnya",
                    desc: "Stockity menyediakan berbagai pasangan forex lain yang ditampilkan di dropdown secara real-time. Daftar lengkap tersedia di dashboard saat bot aktif.",
                    tag: "Cek di Dashboard",
                    tagColor: "bg-[#f3f4f6] text-[#374151]",
                  },
                ].map((item) => (
                  <div
                    key={item.pair}
                    className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[14px] font-bold text-[#1a1612]">{item.pair}</h3>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <TipBox>
                Untuk pemula, mulai dengan EUR/USD. Pasangan ini paling banyak dianalisis oleh trader
                profesional, memiliki spread terkecil di Stockity, dan pergerakannya paling stabil
                untuk diuji coba di akun Demo terlebih dahulu.
              </TipBox>
            </section>

            {/* Section 3 */}
            <section>
              <SectionLabel>Aset Komoditas</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Aset Komoditas: Gold dan Oil
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Komoditas — terutama Gold (emas) dan Oil (minyak) — adalah aset dengan karakteristik
                unik yang berbeda dari forex. Volatilitasnya lebih tinggi, terutama saat ada berita
                geopolitik atau data ekonomi global yang signifikan.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">Gold (Emas/XAU/USD)</h3>
                  <ul className="space-y-2 mb-3">
                    {[
                      "Volatilitas menengah-tinggi, pergerakan bisa signifikan",
                      "Sangat sensitif terhadap geopolitik dan data ekonomi AS",
                      "Cocok untuk mode Momentum (pola CandleSabit, BBSARBreak)",
                      "Profit rate di Stockity biasanya kompetitif",
                      "Aktif 23 jam sehari (kecuali saat pasar tutup)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                        <span className="text-[#f59e0b] mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[#3b82f6] font-medium">
                    Cocok: Mode Momentum, Fastrade FTT
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">Oil (Minyak/WTI)</h3>
                  <ul className="space-y-2 mb-3">
                    {[
                      "Volatilitas tinggi, pergerakan bisa sangat besar",
                      "Dipengaruhi kebijakan OPEC dan stok minyak AS mingguan",
                      "Kurang cocok untuk pemula karena sulit diprediksi",
                      "Bagus untuk trader berpengalaman dengan mode Fastrade",
                      "Perlu pemahaman faktor fundamental minyak global",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                        <span className="text-[#f59e0b] mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[#f59e0b] font-medium">
                    Untuk: Trader Berpengalaman
                  </p>
                </div>
              </div>
              <WarningBox>
                Saat ada rilis data inventory minyak mingguan (biasanya Rabu malam WIB) atau pengumuman
                OPEC, volatilitas Oil bisa sangat ekstrem. Pertimbangkan untuk menghentikan bot sementara
                selama periode high-impact news tersebut.
              </WarningBox>
            </section>

            {/* Section 4 */}
            <section>
              <SectionLabel>Aset Crypto</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Aset Crypto di Stockity
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Crypto seperti Bitcoin (BTC) dan Ethereum (ETH) tersedia di Stockity dan bisa
                ditrading menggunakan STC AutoTrade. Namun karakteristiknya sangat berbeda dari forex
                atau komoditas — perlu pendekatan yang berbeda pula.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Karakteristik Crypto untuk Binary Option
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Kelebihan</p>
                    <ul className="space-y-1.5">
                      {[
                        "Volatilitas tinggi = peluang profit besar",
                        "Aktif 24/7 tanpa jam buka/tutup pasar",
                        "Bisa trending kuat selama berhari-hari",
                        "Cocok untuk mode Fastrade FTT saat trending",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[12px] text-[#6b6058]"
                        >
                          <span className="text-[#22c55e] flex-shrink-0">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Kekurangan</p>
                    <ul className="space-y-1.5">
                      {[
                        "Volatilitas tinggi = risiko loss juga besar",
                        "Sangat sensitif berita/regulasi crypto global",
                        "Spread bisa lebih besar saat volatilitas ekstrem",
                        "Lebih sulit diprediksi secara teknikal",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[12px] text-[#6b6058]"
                        >
                          <span className="text-[#ef4444] flex-shrink-0">−</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <InfoBox icon="⚡" title="Rekomendasi untuk Crypto">
                Jika ingin mencoba crypto, gunakan mode Fastrade FTT dengan timeframe 5m atau 15m pada
                kondisi pasar yang sedang trending jelas (bukan sideways). Selalu set Stop Loss harian
                yang lebih ketat dibanding saat trading forex, karena pergerakan crypto bisa sangat
                mendadak dan besar.
              </InfoBox>
            </section>

            {/* Section 5 */}
            <section>
              <SectionLabel>Interaksi Mode Bot dengan Aset</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Bagaimana Setiap Mode Bot Berinteraksi dengan Pilihan Aset
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Tidak semua mode bot cocok untuk semua jenis aset. Memahami hubungan antara mode bot
                dan karakteristik aset akan meningkatkan performa trading secara signifikan.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    mode: "Mode Indicator (SMA/EMA/RSI)",
                    aset: "EUR/USD, GBP/USD, USD/IDR",
                    why: "Indikator teknikal bekerja paling baik di aset dengan pergerakan yang relatif stabil dan mengikuti pola teknikal. Forex major memenuhi kriteria ini. Crypto terlalu volatile untuk indikator sederhana.",
                    color: "border-[#bfdbfe] bg-[#eff6ff]",
                    labelColor: "text-[#1d4ed8]",
                  },
                  {
                    mode: "Mode Momentum (4 Pola Candlestick)",
                    aset: "Gold, EUR/USD, GBP/USD",
                    why: "Mode Momentum membutuhkan pola candlestick yang terbentuk jelas. Gold dan forex major membentuk pola yang cukup bersih. Crypto terkadang terlalu choppy untuk pola candlestick yang valid.",
                    color: "border-[#bbf7d0] bg-[#f0fdf4]",
                    labelColor: "text-[#166534]",
                  },
                  {
                    mode: "Mode Fastrade FTT & CTC",
                    aset: "EUR/USD, Gold, Crypto (saat trending)",
                    why: "Fastrade lebih fleksibel karena menganalisis momentum langsung. Bisa digunakan di berbagai aset selama ada tren yang jelas. Hindari aset yang sangat sepi di luar jam aktifnya.",
                    color: "border-[#fde68a] bg-[#fffbeb]",
                    labelColor: "text-[#92400e]",
                  },
                  {
                    mode: "Mode AI Signal",
                    aset: "Semua aset tersedia",
                    why: "AI Signal menentukan aset dan sinyal sendiri. Namun Anda tetap memilih aset mana yang akan dieksekusi di dashboard. Ikuti rekomendasi sinyal untuk aset yang sedang aktif.",
                    color: "border-[rgba(26,22,18,0.07)] bg-white",
                    labelColor: "text-[#6b6058]",
                  },
                  {
                    mode: "Mode Signal (Manual)",
                    aset: "Semua aset, tergantung sinyal yang Anda terima",
                    why: "Mode Signal mengeksekusi berdasarkan input CALL/PUT manual pada waktu yang dijadwalkan. Pilih aset sesuai sinyal yang Anda dapatkan dari sumber referensi.",
                    color: "border-[rgba(26,22,18,0.07)] bg-white",
                    labelColor: "text-[#6b6058]",
                  },
                ].map((item) => (
                  <div
                    key={item.mode}
                    className={`border rounded-xl p-4 ${item.color}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <p className={`text-[12px] font-bold ${item.labelColor}`}>{item.mode}</p>
                      <span className="text-[10px] font-semibold text-[#6b6058] bg-white/70 px-2 py-0.5 rounded-full border border-[rgba(26,22,18,0.06)]">
                        {item.aset}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.why}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <SectionLabel>Tips Memilih Aset</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Tips Memilih Aset yang Tepat untuk Setiap Mode Bot
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Ada beberapa prinsip praktis yang bisa membantu Anda memilih aset yang tepat sebelum
                menjalankan bot STC AutoTrade.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    1. Perhatikan Jam Trading Aktif
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    EUR/USD paling aktif saat sesi London dan New York overlap (20:00-23:00 WIB). Gold
                    aktif sepanjang hari tapi paling bergerak saat New York buka. Crypto aktif 24 jam.
                    Hindari trading aset forex di luar jam aktifnya karena spread melebar dan pergerakan
                    sangat minimal.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    2. Cek Profit Rate Sebelum Start
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Profit rate ditampilkan di sebelah nama aset di dropdown. Pilih aset dengan profit
                    rate yang masuk akal — terlalu rendah akan membuat susah profit meski win rate
                    tinggi. Perhatikan bahwa profit rate bisa berubah sesuai kondisi pasar.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    3. Mulai dengan 1 Aset, Kuasai Dulu
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Jangan loncat-loncat antara banyak aset. Pilih satu aset (misalnya EUR/USD), pelajari
                    polanya, coba berbagai mode bot di aset tersebut, dan catat hasilnya. Setelah
                    konsisten profit, barulah eksplorasi ke aset lain. Fokus menghasilkan performa lebih
                    baik dari diversifikasi aset yang prematur.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    4. Hindari Aset Saat High-Impact News
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Pengumuman NFP, keputusan suku bunga Fed, atau data CPI bisa membuat harga bergerak
                    sangat drastis dalam hitungan detik. Dalam kondisi ini, hampir semua mode bot bisa
                    menghasilkan sinyal yang salah. Hentikan bot sebelum news besar dan restart setelah
                    volatilitas mereda (15-30 menit setelah rilis).
                  </p>
                </div>
              </div>

              <TipBox>
                Gunakan fitur akun Demo untuk menguji kombinasi mode bot + aset tanpa risiko modal nyata.
                Catat hasil sesi Demo di halaman History, analisis aset mana yang memberikan win rate
                terbaik, lalu terapkan di akun Real.
              </TipBox>
            </section>

            {/* Section 7 */}
            <section>
              <SectionLabel>Kesalahan Umum</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Kesalahan Umum dalam Memilih Aset dan Cara Menghindarinya
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Banyak trader pemula melakukan kesalahan yang sama berulang kali dalam memilih aset.
                Kenali dan hindari pola ini sejak awal.
              </p>

              <div className="space-y-4">
                {[
                  {
                    kesalahan: "Memilih aset berdasarkan 'feeling' atau saran random",
                    solusi:
                      "Pilih aset berdasarkan karakteristik yang sesuai dengan mode bot yang digunakan. EUR/USD untuk mode Indicator, Gold untuk Momentum, bukan berdasarkan rumor atau saran tanpa dasar.",
                  },
                  {
                    kesalahan: "Trading aset forex saat pasar sepi tengah malam",
                    solusi:
                      "Perhatikan jam aktif setiap aset. Forex major paling optimal saat sesi London atau New York aktif. Trading saat sepi menghasilkan banyak false signal dan spread yang melebar.",
                  },
                  {
                    kesalahan: "Ganti-ganti aset setiap sesi tanpa pola yang jelas",
                    solusi:
                      "Konsisten dengan 1-2 aset yang sudah Anda pelajari. Ganti aset hanya jika ada alasan jelas, bukan karena bosan atau frustrasi setelah loss.",
                  },
                  {
                    kesalahan: "Trading crypto dengan modal yang sama seperti forex",
                    solusi:
                      "Alokasikan modal lebih kecil untuk crypto karena volatilitasnya lebih tinggi. Jika Anda trade EUR/USD dengan Rp 50.000 per order, pertimbangkan Rp 20.000-30.000 untuk crypto.",
                  },
                  {
                    kesalahan: "Tidak memperhatikan profit rate sebelum mulai",
                    solusi:
                      "Selalu cek profit rate di dropdown sebelum memulai sesi. Profit rate berbeda tiap aset dan bisa berubah. Aset dengan profit rate terlalu rendah membuat strategi martingale lebih berisiko.",
                  },
                ].map((item) => (
                  <div
                    key={item.kesalahan}
                    className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5"
                  >
                    <div className="flex gap-2 mb-2">
                      <span className="text-[#ef4444] font-bold text-[13px] flex-shrink-0">✗</span>
                      <p className="text-[13px] font-semibold text-[#1a1612]">{item.kesalahan}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#22c55e] font-bold text-[13px] flex-shrink-0">✓</span>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.solusi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8 — FAQ */}
            <section>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pertanyaan Umum tentang Aset Trading di Stockity
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
                Pilih Aset yang Tepat, Optimalkan Performa Bot
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Semua aset di STC AutoTrade diambil real-time dari API Stockity — Forex, Komoditas,
                Crypto, hingga Stock Indices. Tidak ada kategori OTC terpisah; semua tersedia dalam
                satu dropdown yang sama. Kunci performa optimal adalah mencocokkan aset dengan mode
                bot yang tepat dan memperhatikan jam aktif pasar.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-6">
                Mulai dengan EUR/USD jika Anda pemula — paling stabil, spread kecil, dan paling banyak
                dibahas secara teknikal. Gunakan akun Demo untuk menguji kombinasi aset dan mode bot
                sebelum beralih ke akun Real dengan modal nyata.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Artikel Terkait</p>
                <div className="space-y-2">
                  {[
                    {
                      href: "/artikel/cara-setting-robot-stockity",
                      label: "Cara Setting Robot Stockity — Panduan Lengkap Dashboard",
                    },
                    {
                      href: "/artikel/cara-profit-trading-stockity",
                      label: "Cara Profit Trading Stockity dengan Bot STC AutoTrade",
                    },
                    {
                      href: "/artikel/modal-trading-stockity",
                      label: "Modal Trading Stockity: Berapa yang Dibutuhkan?",
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
                Mulai trading dengan aset pilihan terbaik Anda
              </p>
              <h3 className="text-[18px] font-bold text-white mb-4">
                Download STC AutoTrade — Coba Demo Gratis
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
