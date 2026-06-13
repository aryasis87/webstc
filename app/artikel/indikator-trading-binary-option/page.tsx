import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indikator Trading Binary Option di STC AutoTrade: SMA, EMA, RSI",
  description:
    "Panduan lengkap mode Indicator di STC AutoTrade v4.4. Bot otomatis analisis SMA, EMA, dan RSI — hanya 3 indikator ini. Pelajari cara setting period, sensitivity, dan overbought/oversold.",
  keywords: [
    "indikator trading binary option",
    "SMA EMA RSI binary option",
    "mode indicator STC AutoTrade",
    "moving average binary option",
    "RSI overbought oversold",
    "robot trading indikator",
    "cara setting indicator bot stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/indikator-trading-binary-option",
  },
  openGraph: {
    title: "Indikator di STC AutoTrade: Panduan Mode SMA, EMA, RSI 2026",
    description:
      "Mode Indicator di STC AutoTrade hanya mendukung SMA, EMA, dan RSI. Pelajari cara setting period, sensitivity, overbought/oversold untuk bot trading otomatis.",
    url: "https://stcautotrade.id/artikel/indikator-trading-binary-option",
    siteName: "STC AutoTrade",
    locale: "id_ID",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Mode Indicator STC AutoTrade — SMA EMA RSI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indikator di STC AutoTrade: SMA, EMA, RSI 2026",
    description:
      "Mode Indicator STC AutoTrade v4.4 — hanya SMA, EMA, RSI. Setting period, sensitivity, overbought/oversold untuk bot otomatis.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Indikator Trading Binary Option di STC AutoTrade: SMA, EMA, RSI",
  description:
    "Panduan lengkap mode Indicator di STC AutoTrade v4.4 dengan tiga indikator: SMA, EMA, dan RSI.",
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
    "@id": "https://stcautotrade.id/artikel/indikator-trading-binary-option",
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
      name: "Indikator Trading Binary Option",
      item: "https://stcautotrade.id/artikel/indikator-trading-binary-option",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah mode Indicator STC AutoTrade mendukung Bollinger Bands atau Stochastic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Mode Indicator di STC AutoTrade v4.4 hanya mendukung tiga indikator: SMA, EMA, dan RSI. Bollinger Bands, Stochastic Oscillator, MACD, dan indikator lainnya tidak tersedia di mode ini.",
      },
    },
    {
      "@type": "Question",
      name: "Apa perbedaan SMA dan EMA di mode Indicator STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SMA menghitung rata-rata harga secara merata untuk semua periode. EMA memberikan bobot lebih besar pada harga terbaru sehingga lebih cepat bereaksi. Untuk pasar volatile, EMA lebih responsif. Untuk pasar stabil/ranging, SMA lebih cocok.",
      },
    },
    {
      "@type": "Question",
      name: "Period berapa yang direkomendasikan untuk mode Indicator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk SMA/EMA, period 14 atau 20 adalah titik awal yang umum. Period kecil (5-10) lebih reaktif tapi lebih banyak false signal. Period besar (50-200) lebih stabil tapi sinyal lebih jarang. Untuk RSI, period 14 adalah standar industri.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa nilai Sensitivity yang direkomendasikan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sensitivity 0 artinya bot eksekusi setiap sinyal. Sensitivity mendekati 1 berarti bot hanya masuk pada sinyal sangat kuat. Untuk pemula, mulai dari 0.3-0.5 untuk menyeimbangkan frekuensi order dengan kualitas sinyal.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara membaca sinyal di log saat mode Indicator aktif?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Di log aktivitas bot akan muncul keterangan seperti 'RSI: 28 - CALL signal' atau 'EMA cross UP - CALL executed'. Bot mencatat setiap analisis indikator dan eksekusi order secara real-time di halaman dashboard.",
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

export default function IndikatorTradingBinaryOptionPage() {
  const faqs = [
    {
      q: "Apakah mode Indicator STC AutoTrade mendukung Bollinger Bands atau Stochastic?",
      a: "Tidak. Mode Indicator di STC AutoTrade v4.4 hanya mendukung tiga indikator: SMA (Simple Moving Average), EMA (Exponential Moving Average), dan RSI (Relative Strength Index). Bollinger Bands, Stochastic Oscillator, MACD, dan indikator lainnya tidak tersedia di mode ini.",
    },
    {
      q: "Apa perbedaan SMA dan EMA di mode Indicator STC AutoTrade?",
      a: "SMA menghitung rata-rata harga secara merata untuk semua periode, lebih lambat bereaksi. EMA memberikan bobot lebih besar pada harga terbaru, lebih cepat bereaksi. Untuk pasar volatile, EMA lebih responsif. Untuk pasar ranging/stabil, SMA lebih cocok karena lebih mulus.",
    },
    {
      q: "Period berapa yang direkomendasikan untuk mode Indicator?",
      a: "Untuk SMA/EMA, period 14 atau 20 adalah titik awal yang umum. Period kecil (5-10) lebih reaktif tapi lebih banyak false signal. Period besar (50-200) lebih stabil tapi sinyal lebih jarang. Untuk RSI, period 14 adalah standar industri yang sudah teruji.",
    },
    {
      q: "Berapa nilai Sensitivity yang direkomendasikan?",
      a: "Sensitivity 0 artinya bot eksekusi setiap sinyal sekalipun kecil. Sensitivity mendekati 1 berarti bot hanya masuk pada sinyal yang sangat kuat. Untuk pemula, mulai dari 0.3-0.5 untuk menyeimbangkan frekuensi order dengan kualitas sinyal.",
    },
    {
      q: "Bagaimana cara membaca sinyal di log saat mode Indicator aktif?",
      a: "Di log aktivitas bot akan muncul keterangan seperti 'RSI: 28 - CALL signal' atau 'EMA cross UP - CALL executed'. Bot mencatat setiap analisis indikator dan eksekusi order secara real-time di halaman dashboard saat bot sedang berjalan.",
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
                <span className="text-[#1a1612]/60">Indikator Trading</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="text-[11px] font-semibold text-[#1d4ed8] tracking-wide uppercase">
                  Mode Indicator
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-tight mb-4">
                Indikator Trading Binary Option di STC AutoTrade:{" "}
                <span className="text-[#3b82f6]">SMA, EMA, dan RSI</span>
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Mode Indicator di STC AutoTrade v4.4 adalah bot trading otomatis berbasis analisis
                teknikal. Bot membaca SMA, EMA, atau RSI secara real-time dan mengeksekusi order
                CALL/PUT tanpa intervensi manual. Hanya tiga indikator ini yang tersedia — tidak ada
                Bollinger Bands, Stochastic, atau MACD.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "SMA/EMA/RSI", l: "3 Jenis Indikator" },
                  { v: "Period 1-200", l: "Bisa Dikustom" },
                  { v: "Sensitivity", l: "Filter Sinyal" },
                  { v: "Otomatis", l: "Eksekusi Order" },
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
              <SectionLabel>Pengenalan</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Mode Indicator di STC AutoTrade: Bukan Sekadar Grafik
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Banyak trader berpikir "indikator" di STC AutoTrade hanya tampilan grafis di layar.
                Anggapan itu keliru. Mode Indicator adalah salah satu dari 6 mode strategi bot yang
                benar-benar mengeksekusi order secara otomatis berdasarkan analisis indikator teknikal
                real-time.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Ketika Anda mengaktifkan mode Indicator dan menekan tombol Start, bot akan terus-menerus
                membaca data harga dari Stockity, menghitung nilai indikator yang dipilih (SMA, EMA,
                atau RSI), dan begitu sinyal terpenuhi sesuai threshold yang Anda set, bot langsung
                memasang order CALL atau PUT tanpa perlu konfirmasi manual.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Ini berbeda dengan mode Signal yang membutuhkan input manual, atau mode AI Signal yang
                menggunakan model kecerdasan buatan. Mode Indicator murni berbasis matematika indikator
                teknikal klasik yang sudah teruji selama puluhan tahun di pasar finansial global.
              </p>
              <InfoBox icon="📊" title="Penting untuk Dipahami">
                Mode Indicator di STC AutoTrade v4.4 HANYA mendukung tiga indikator: SMA, EMA, dan RSI.
                Tidak ada Bollinger Bands, Stochastic Oscillator, MACD, Williams %R, atau indikator
                lainnya. Tiga indikator ini dipilih karena paling fundamental dan relevan untuk binary
                option dengan durasi pendek.
              </InfoBox>
            </section>

            {/* Section 2 */}
            <section>
              <SectionLabel>Pilihan Indikator</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                3 Indikator yang Tersedia: SMA, EMA, RSI
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-6">
                Di dashboard mode Indicator, Anda memilih satu dari tiga jenis indikator. Setiap
                indikator punya logika berbeda dalam menghasilkan sinyal CALL atau PUT. Memahami cara
                kerja masing-masing sangat penting sebelum memilih mana yang akan digunakan.
              </p>

              <div className="space-y-4">
                {/* SMA */}
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">
                      1
                    </span>
                    <h3 className="text-[15px] font-bold text-[#1a1612]">
                      SMA — Simple Moving Average
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">
                    SMA menghitung rata-rata harga penutupan selama N periode terakhir secara merata.
                    Setiap candle diberi bobot yang sama. Hasilnya adalah garis rata-rata yang halus dan
                    lambat bereaksi terhadap perubahan harga mendadak — cocok untuk membaca tren jangka
                    menengah.
                  </p>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    <span className="font-semibold text-[#1a1612]">Cara kerja bot:</span> Bot terus
                    membandingkan harga saat ini dengan nilai SMA. Jika harga bergerak melewati SMA dari
                    bawah ke atas (golden cross), bot eksekusi CALL. Jika harga turun menembus SMA dari
                    atas ke bawah (death cross), bot eksekusi PUT.
                  </p>
                </div>

                {/* EMA */}
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">
                      2
                    </span>
                    <h3 className="text-[15px] font-bold text-[#1a1612]">
                      EMA — Exponential Moving Average
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">
                    EMA juga menghitung rata-rata harga, namun memberikan bobot eksponensial yang lebih
                    besar pada harga terbaru. Ini membuat EMA jauh lebih cepat bereaksi terhadap
                    perubahan harga dibandingkan SMA dengan period yang sama, sehingga sangat cocok
                    untuk pasar yang sedang bergerak dinamis.
                  </p>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    <span className="font-semibold text-[#1a1612]">Cara kerja bot:</span> Logika sama
                    dengan SMA — bot analisis crossover harga terhadap garis EMA. Karena EMA lebih
                    responsif, sinyal muncul lebih cepat dibanding SMA, namun ada risiko lebih banyak
                    false signal di pasar yang sedang ranging (bergerak sideways tanpa tren jelas).
                  </p>
                </div>

                {/* RSI */}
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#dbeafe] flex items-center justify-center text-[11px] font-bold text-[#1d4ed8]">
                      3
                    </span>
                    <h3 className="text-[15px] font-bold text-[#1a1612]">
                      RSI — Relative Strength Index
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">
                    RSI adalah osilator momentum yang mengukur kecepatan dan besarnya perubahan harga.
                    Nilainya selalu antara 0 dan 100. RSI di atas 70 menandakan pasar overbought
                    (terlalu banyak pembeli, kemungkinan reversal turun). RSI di bawah 30 menandakan
                    oversold (terlalu banyak penjual, kemungkinan reversal naik).
                  </p>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    <span className="font-semibold text-[#1a1612]">Cara kerja bot:</span> Bot terus
                    menghitung RSI secara real-time. Ketika RSI menembus level overbought yang Anda set
                    (default 70), bot eksekusi PUT. Ketika RSI turun ke bawah level oversold (default
                    30), bot eksekusi CALL.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <SectionLabel>Panduan Setting</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Cara Setting Mode Indicator di Dashboard STC AutoTrade
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Setting mode Indicator dilakukan langsung di dashboard STC AutoTrade. Prosesnya
                straightforward — pilih mode, atur parameter, dan mulai bot. Tidak ada konfigurasi
                timeframe di mode ini karena bot bekerja berdasarkan analisis indikator, bukan
                berdasarkan durasi candle tertentu.
              </p>
              <div className="space-y-3 mb-6">
                <StepCard
                  n="1"
                  title="Buka Dashboard dan Pilih Mode"
                  desc="Di halaman utama dashboard, temukan selector mode strategi. Pilih 'Indicator' dari 6 mode yang tersedia (Signal, Fastrade FTT, Fastrade CTC, AI Signal, Indicator, Momentum)."
                  sub="Mode Indicator ada di urutan ke-5"
                />
                <StepCard
                  n="2"
                  title="Pilih Jenis Indikator"
                  desc="Di pengaturan mode Indicator, pilih salah satu: SMA, EMA, atau RSI. Hanya bisa aktif satu indikator dalam satu sesi bot berjalan."
                  sub="Pilihan: SMA / EMA / RSI"
                />
                <StepCard
                  n="3"
                  title="Set Period (1-200)"
                  desc="Masukkan angka period untuk kalkulasi indikator. Angka kecil = lebih reaktif, lebih banyak sinyal. Angka besar = lebih stabil, sinyal lebih jarang tapi lebih terfilter."
                  sub="Recommended: 14 untuk RSI, 20 untuk SMA/EMA"
                />
                <StepCard
                  n="4"
                  title="Set RSI Overbought & Oversold (khusus RSI)"
                  desc="Jika memilih RSI, atur level overbought (default 70) dan oversold (default 30). Bot PUT ketika RSI melewati overbought, bot CALL ketika RSI di bawah oversold."
                  sub="Default 70/30 sudah cukup untuk mayoritas kondisi pasar"
                />
                <StepCard
                  n="5"
                  title="Set Sensitivity (0-1)"
                  desc="Atur threshold kekuatan sinyal minimum sebelum bot eksekusi. Sensitivity 0 = eksekusi semua sinyal. Sensitivity 1 = hanya sinyal dengan confidence tertinggi yang dieksekusi."
                  sub="Pemula: mulai dari 0.3-0.5"
                />
                <StepCard
                  n="6"
                  title="Atur Amount, SL, TP, dan Martingale, lalu Start"
                  desc="Set nominal per order (min Rp 14.000), Stop Loss harian, Stop Profit harian, dan konfigurasi martingale jika diinginkan. Klik Start untuk menjalankan bot."
                  sub="Bot aktif setelah Start, pantau log di dashboard"
                />
              </div>
              <TipBox>
                Setelah bot aktif, pantau log di dashboard. Anda akan melihat bot mencatat setiap
                kalkulasi indikator dan eksekusi order secara real-time. Ini sangat berguna untuk
                memahami kapan dan mengapa bot memutuskan masuk posisi.
              </TipBox>
            </section>

            {/* Section 4 */}
            <section>
              <SectionLabel>Parameter RSI Detail</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Setting RSI: Overbought, Oversold, dan Sensitivity
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mode RSI memiliki parameter paling banyak dibanding SMA/EMA. Memahami fungsi setiap
                parameter ini krusial untuk performa bot yang optimal.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">RSI Period</h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    Period menentukan berapa banyak candle terakhir yang digunakan untuk menghitung RSI.
                    Period 14 adalah standar industri yang dikembangkan oleh J. Welles Wilder sendiri —
                    pencipta RSI. Period lebih kecil (6-9) membuat RSI lebih volatile, sering menembus
                    level ekstrem, menghasilkan lebih banyak sinyal tapi juga lebih banyak false signal.
                    Period lebih besar (21-28) membuat RSI lebih mulus dan sinyal lebih valid namun
                    lebih jarang terpicu.
                  </p>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">
                    RSI Overbought (default: 70)
                  </h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    Ketika RSI melewati level ini dari bawah, bot akan eksekusi PUT karena pasar
                    dianggap sudah terlalu beli dan kemungkinan akan reversal turun. Anda bisa
                    menurunkan level ini ke 65 untuk sinyal lebih sering, atau menaikkan ke 80 untuk
                    sinyal yang lebih terkonfirmasi. Namun level terlalu tinggi (misal 85-90) akan
                    menghasilkan sangat sedikit sinyal karena kondisi ekstrem ini jarang terjadi.
                  </p>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">
                    RSI Oversold (default: 30)
                  </h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    Ketika RSI turun ke bawah level ini, bot akan eksekusi CALL karena pasar dianggap
                    sudah terlalu jual dan kemungkinan akan reversal naik. Anda bisa menaikkan level ini
                    ke 35 untuk sinyal lebih sering, atau menurunkan ke 20 untuk sinyal yang lebih
                    terkonfirmasi. Semakin jauh RSI dari center (50), semakin kuat potensi reversalnya
                    secara teori.
                  </p>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">
                    Sensitivity (0-1): Filter Kualitas Sinyal
                  </h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    Parameter ini adalah gatekeeper terakhir sebelum bot eksekusi order. Sensitivity 0
                    berarti bot masuk di setiap sinyal sekecil apapun yang melewati threshold
                    overbought/oversold. Sensitivity 1 berarti hanya sinyal dengan confidence tertinggi
                    yang dieksekusi. Nilai 0.3-0.5 adalah sweet spot untuk pemula: cukup selektif tanpa
                    terlalu membatasi peluang trading.
                  </p>
                </div>
              </div>

              <WarningBox>
                Mengubah RSI overbought ke level sangat tinggi (90+) atau oversold ke level sangat rendah
                (10 ke bawah) memang menghasilkan sinyal lebih "murni", tapi bot bisa tidak eksekusi
                sama sekali dalam berjam-jam karena kondisi ekstrem tersebut sangat jarang terjadi di
                pasar normal.
              </WarningBox>
            </section>

            {/* Section 5 */}
            <section>
              <SectionLabel>SMA vs EMA</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Setting Moving Average (SMA vs EMA): Mana yang Lebih Cocok?
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Pertanyaan klasik: SMA atau EMA? Jawaban bergantung pada kondisi pasar saat itu dan
                preferensi risiko Anda. Tidak ada yang selalu lebih baik secara absolut.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">SMA — Lebih Cocok Untuk:</h3>
                  <ul className="space-y-2">
                    {[
                      "Pasar yang bergerak stabil atau ranging",
                      "Trader yang ingin meminimalisir false signal",
                      "Kondisi volatilitas rendah",
                      "Period panjang (20-50 ke atas)",
                      "Sesi trading yang tenang seperti sesi Asia",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                        <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                    EMA — Lebih Cocok Untuk:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Pasar trending kuat (uptrend/downtrend jelas)",
                      "Trader yang ingin masuk posisi lebih awal",
                      "Kondisi volatilitas menengah hingga tinggi",
                      "Period pendek (9-21)",
                      "Sesi London/New York yang aktif dan volatile",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                        <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <InfoBox icon="💡" title="Rekomendasi Praktis untuk Pemula">
                Jika baru mulai dengan mode Indicator, coba EMA period 20 dengan sensitivity 0.4 pada
                aset EUR/USD. Ini memberikan keseimbangan antara responsivitas dan stabilitas sinyal
                untuk mayoritas kondisi pasar forex di Stockity.
              </InfoBox>
            </section>

            {/* Section 6 */}
            <section>
              <SectionLabel>Kombinasi Martingale</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Cara Kombinasi Mode Indicator dengan Martingale
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mode Indicator bisa dikombinasikan dengan fitur Martingale di STC AutoTrade untuk
                strategi recovery otomatis saat terjadi loss berturut-turut.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-4">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">Cara Kerja Kombinasi</h3>
                <p className="text-[13px] text-[#6b6058] leading-relaxed mb-3">
                  Ketika mode Indicator menghasilkan sinyal dan bot masuk posisi, jika order tersebut
                  kalah (loss), martingale akan otomatis melipatgandakan nominal order berikutnya sesuai
                  multiplier yang Anda set. Bot terus melakukan ini hingga menang (win) atau mencapai
                  Max Steps yang dikonfigurasi (1-7 step).
                </p>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">
                  Fitur <span className="font-semibold text-[#1a1612]">Always Signal</span> memungkinkan
                  recovery martingale berlanjut ke step berikutnya secara otomatis tanpa menunggu
                  sinyal baru dari indikator — bot langsung masuk lagi setelah loss.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-1">Multiplier Fixed</p>
                  <p className="text-[12px] text-[#6b6058]">
                    Nominal dilipatkan dengan angka tetap setiap step. Contoh: Rp 14.000 → Rp 21.000 →
                    Rp 31.500 (dengan 1.5x multiplier). Nominal tumbuh secara konsisten di setiap step.
                  </p>
                </div>
                <div className="bg-[#f9fafb] border border-[rgba(26,22,18,0.06)] rounded-xl px-4 py-3">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-1">Multiplier Percentage</p>
                  <p className="text-[12px] text-[#6b6058]">
                    Nominal ditambah persentase dari base amount setiap step. Perhitungan berbeda dari
                    Fixed — umumnya lebih konservatif di step-step awal recovery.
                  </p>
                </div>
              </div>

              <WarningBox>
                Martingale meningkatkan eksposur risiko secara eksponensial. Dengan Max Steps 7 dan
                multiplier 2x, order ke-7 adalah 128x nominal awal. Pastikan modal Anda cukup untuk
                menanggung semua step sebelum mengaktifkan martingale, dan selalu set Stop Loss harian.
              </WarningBox>
            </section>

            {/* Section 7 */}
            <section>
              <SectionLabel>Waktu Penggunaan</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Kapan Mode Indicator Cocok Digunakan
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mode Indicator paling efektif dalam kondisi pasar tertentu. Memahami kondisi yang
                mendukung dan yang harus dihindari akan meningkatkan win rate secara signifikan.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5">
                  <p className="text-[12px] font-semibold text-[#166534] mb-3 uppercase tracking-wide">
                    Kondisi Ideal
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Pasar sedang trending kuat dan konsisten",
                      "Volatilitas normal, bukan ekstrem mendadak",
                      "Sesi aktif — London atau New York",
                      "Aset likuid tinggi seperti EUR/USD atau Gold",
                      "Tidak ada berita ekonomi besar yang akan rilis",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#14532d]">
                        <span className="flex-shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-5">
                  <p className="text-[12px] font-semibold text-[#991b1b] mb-3 uppercase tracking-wide">
                    Kondisi yang Harus Dihindari
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Pasar ranging tanpa arah jelas (sideways choppy)",
                      "Sebelum atau sesaat news besar — NFP, FOMC, CPI",
                      "Volatilitas ekstrem mendadak (flash crash, dll)",
                      "Sesi Asia tengah malam yang cenderung sepi",
                      "Gap besar di pembukaan sesi atau hari trading",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-[#991b1b]">
                        <span className="flex-shrink-0 mt-0.5">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <TipBox>
                Gunakan SMA/EMA saat pasar trending jelas, dan beralih ke RSI saat pasar bergerak dalam
                range (sideways). Switching strategi sesuai kondisi pasar adalah kunci win rate yang
                lebih konsisten dengan mode Indicator.
              </TipBox>
            </section>

            {/* Section 8 — FAQ */}
            <section>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pertanyaan Umum tentang Mode Indicator
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
                Mode Indicator: Analisis Teknikal Bekerja Secara Otomatis
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Mode Indicator di STC AutoTrade v4.4 adalah solusi trading berbasis analisis teknikal
                tanpa perlu Anda terus-menerus memantau grafik. Dengan tiga indikator yang tersedia —
                SMA, EMA, dan RSI — bot bekerja menganalisis pasar dan mengeksekusi order sesuai sinyal
                yang terdeteksi secara otomatis.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-6">
                Kunci sukses mode ini adalah memilih indikator yang sesuai kondisi pasar saat itu,
                mengatur parameter (period, sensitivity, overbought/oversold) dengan bijak, dan
                menggunakan Stop Loss harian sebagai jaring pengaman. Mulai selalu dengan akun Demo
                untuk memahami perilaku bot sebelum beralih ke akun Real.
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
                      href: "/artikel/cara-baca-candlestick-binary-option",
                      label: "Cara Baca Candlestick Binary Option & Mode Momentum",
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
              <p className="text-[13px] text-white/60 mb-2">Siap coba mode Indicator?</p>
              <h3 className="text-[18px] font-bold text-white mb-4">
                Download STC AutoTrade dan Mulai dengan Demo
              </h3>
              <a
                href="/StcAutoTrade.apk"
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
