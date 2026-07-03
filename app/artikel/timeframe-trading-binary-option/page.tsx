import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Timeframe Trading Binary Option di STC AutoTrade: Panduan Lengkap",
  description:
    "Panduan timeframe di STC AutoTrade v4.4. Timeframe 1m-1h hanya di mode Fastrade (FTT & CTC). Mode Signal pakai duration 60-300 detik. AI Signal, Indicator, Momentum tidak punya pilihan timeframe.",
  keywords: [
    "timeframe trading binary option",
    "timeframe STC AutoTrade",
    "timeframe fastrade stockity",
    "duration signal mode binary option",
    "1m 5m 15m 30m 1h binary option",
    "cara pilih timeframe bot trading",
    "timeframe terbaik binary option",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
  },
  openGraph: {
    title: "Timeframe di STC AutoTrade: Fastrade 1m-1h & Duration Signal 2026",
    description:
      "Timeframe 1m, 5m, 15m, 30m, 1h hanya tersedia di mode Fastrade FTT dan CTC. Mode Signal pakai duration 60-300 detik. AI Signal, Indicator, Momentum tidak ada pilihan timeframe.",
    url: "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
    siteName: "STC AutoTrade",
    locale: "id_ID",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Timeframe STC AutoTrade — Fastrade 1m 5m 15m 30m 1h" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeframe di STC AutoTrade: Fastrade 1m-1h, Signal 60-300 detik 2026",
    description:
      "Timeframe 1m-1h hanya di mode Fastrade. Signal mode pakai duration 60-300 detik. AI Signal, Indicator, Momentum tidak ada pilihan timeframe.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Timeframe Trading Binary Option di STC AutoTrade: Panduan Lengkap",
  description:
    "Panduan lengkap pengaturan timeframe dan duration di berbagai mode STC AutoTrade v4.4.",
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
    "@id": "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
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
      name: "Timeframe Trading Binary Option",
      item: "https://stcautotrade.id/artikel/timeframe-trading-binary-option",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Timeframe apa yang paling akurat untuk binary option di STC AutoTrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada satu timeframe yang selalu paling akurat. Timeframe 5m di mode Fastrade FTT adalah titik awal yang direkomendasikan untuk pemula — cukup memberikan waktu analisis tanpa terlalu lama menunggu hasil. Timeframe terbaik bergantung pada kondisi pasar dan aset yang ditrading.",
      },
    },
    {
      "@type": "Question",
      name: "Kenapa AI Signal dan mode Indicator tidak ada pilihan timeframe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Signal menggunakan model kecerdasan buatan yang menentukan durasi optimal sendiri berdasarkan sinyal yang dideteksi. Mode Indicator bekerja berdasarkan nilai indikator (SMA/EMA/RSI) bukan durasi candle. Mode Momentum bekerja berdasarkan pola candlestick yang terdeteksi. Ketiga mode ini memiliki logika timing sendiri tanpa perlu input timeframe dari pengguna.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa ganti timeframe saat bot Fastrade sedang berjalan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak disarankan mengubah timeframe saat bot sedang berjalan. Hentikan bot terlebih dahulu, ubah timeframe sesuai keinginan, lalu restart bot. Mengubah timeframe di tengah sesi bisa mengganggu konsistensi analisis bot.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah timeframe 1m menghasilkan lebih banyak order dari timeframe 5m?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Timeframe 1m menghasilkan lebih banyak sinyal dan order per jam karena setiap candle hanya berlangsung 1 menit. Namun lebih banyak order juga berarti lebih banyak noise dan potensi false signal. Timeframe 5m lebih seimbang antara frekuensi order dan kualitas sinyal.",
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

export default function TimeframeTradingBinaryOptionPage() {
  const faqs = [
    {
      q: "Timeframe apa yang paling akurat untuk binary option di STC AutoTrade?",
      a: "Tidak ada satu timeframe yang selalu paling akurat. Timeframe 5m di mode Fastrade FTT adalah titik awal yang direkomendasikan untuk pemula — cukup memberikan waktu analisis tanpa terlalu lama menunggu hasil. Timeframe terbaik bergantung pada kondisi pasar dan aset yang ditrading.",
    },
    {
      q: "Kenapa AI Signal dan mode Indicator tidak ada pilihan timeframe?",
      a: "AI Signal menggunakan model kecerdasan buatan yang menentukan durasi optimal sendiri. Mode Indicator bekerja berdasarkan nilai indikator (SMA/EMA/RSI) bukan durasi candle. Mode Momentum bekerja berdasarkan pola candlestick yang terdeteksi. Ketiga mode ini memiliki logika timing sendiri tanpa perlu input timeframe dari pengguna.",
    },
    {
      q: "Bisa ganti timeframe saat bot Fastrade sedang berjalan?",
      a: "Tidak disarankan. Hentikan bot terlebih dahulu, ubah timeframe, lalu restart bot. Mengubah timeframe di tengah sesi bisa mengganggu konsistensi analisis bot.",
    },
    {
      q: "Apakah timeframe 1m menghasilkan lebih banyak order dari timeframe 5m?",
      a: "Ya. Timeframe 1m menghasilkan lebih banyak sinyal dan order per jam karena setiap siklus hanya berlangsung 1 menit. Namun lebih banyak order juga berarti lebih banyak noise dan potensi false signal. Timeframe 5m lebih seimbang antara frekuensi order dan kualitas sinyal.",
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
                <span className="text-[#1a1612]/60">Timeframe Trading Binary Option</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="text-[11px] font-semibold text-[#1d4ed8] tracking-wide uppercase">
                  Timeframe & Duration
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-tight mb-4">
                Timeframe Trading Binary Option di STC AutoTrade:{" "}
                <span className="text-[#3b82f6]">Tidak Sama di Setiap Mode</span>
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Di STC AutoTrade v4.4, pengaturan timeframe berbeda-beda tergantung mode yang
                digunakan. Timeframe 1m, 5m, 15m, 30m, 1h hanya tersedia di mode Fastrade (FTT dan
                CTC). Mode Signal menggunakan "duration" 60-300 detik. Mode AI Signal, Indicator, dan
                Momentum tidak memiliki pilihan timeframe sama sekali.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "1m - 1h", l: "Fastrade Mode" },
                  { v: "60-300 det", l: "Signal Mode" },
                  { v: "Otomatis", l: "AI/Indicator/Momentum" },
                  { v: "5m", l: "Rekomendasi Awal" },
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
              <SectionLabel>Konsep Dasar</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Apa Itu Timeframe di STC AutoTrade — Tidak Sama di Semua Mode
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Banyak trader baru mengira semua mode di STC AutoTrade menggunakan konsep timeframe
                yang sama. Ini adalah kesalahpahaman yang perlu diluruskan sejak awal, karena setiap
                mode memiliki cara yang berbeda dalam menentukan durasi dan timing order.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Timeframe di STC AutoTrade merujuk pada berapa lama setiap order berlangsung setelah
                dieksekusi. Namun tidak semua mode memiliki setting ini — beberapa mode menentukan
                timing secara otomatis berdasarkan analisis internalnya.
              </p>

              {/* Overview Table */}
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl overflow-hidden mb-5">
                <div className="grid grid-cols-3 bg-[#f9fafb] border-b border-[rgba(26,22,18,0.06)] px-4 py-2.5">
                  <p className="text-[11px] font-semibold text-[#6b6058] uppercase tracking-wide">Mode</p>
                  <p className="text-[11px] font-semibold text-[#6b6058] uppercase tracking-wide">Setting Waktu</p>
                  <p className="text-[11px] font-semibold text-[#6b6058] uppercase tracking-wide">Konfigurasi</p>
                </div>
                {[
                  { mode: "Fastrade FTT", setting: "Timeframe", config: "1m, 5m, 15m, 30m, 1h" },
                  { mode: "Fastrade CTC", setting: "Timeframe", config: "1m, 5m, 15m, 30m, 1h" },
                  { mode: "Signal", setting: "Duration", config: "60 - 300 detik" },
                  { mode: "AI Signal", setting: "Otomatis", config: "Tidak ada pilihan" },
                  { mode: "Indicator", setting: "Otomatis", config: "Tidak ada pilihan" },
                  { mode: "Momentum", setting: "Otomatis", config: "Tidak ada pilihan" },
                ].map((row, i) => (
                  <div
                    key={row.mode}
                    className={`grid grid-cols-3 px-4 py-3 ${i < 5 ? "border-b border-[rgba(26,22,18,0.04)]" : ""}`}
                  >
                    <p className="text-[12px] font-semibold text-[#1a1612]">{row.mode}</p>
                    <p className="text-[12px] text-[#6b6058]">{row.setting}</p>
                    <p className="text-[12px] text-[#3b82f6] font-medium">{row.config}</p>
                  </div>
                ))}
              </div>

              <InfoBox icon="📋" title="Ringkasan Penting">
                Hanya 2 dari 6 mode yang memiliki pilihan timeframe eksplisit: Fastrade FTT dan Fastrade
                CTC. Mode Signal menggunakan "duration" yang konsepnya mirip tapi berbeda. Tiga mode
                lainnya (AI Signal, Indicator, Momentum) menentukan timing order secara otomatis.
              </InfoBox>
            </section>

            {/* Section 2 */}
            <section>
              <SectionLabel>Fastrade FTT & CTC</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Timeframe di Mode Fastrade (FTT & CTC): 1m, 5m, 15m, 30m, 1h
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Mode Fastrade FTT (Fast Trade — deteksi arah otomatis) dan Fastrade CTC (Copy Trading
                dari master trader) keduanya menggunakan pilihan timeframe yang sama: 1m, 5m, 15m,
                30m, atau 1h. Timeframe di sini menentukan durasi setiap order yang dieksekusi.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  {
                    tf: "1m (1 Menit)",
                    desc: "Order berlangsung selama 1 menit. Bot menghasilkan sinyal dan order paling sering. Cocok untuk scalping dengan banyak trade kecil. Namun noise lebih tinggi dan false signal lebih banyak. Butuh reaksi martingale yang cepat.",
                    risk: "Risiko Tinggi",
                    riskColor: "text-[#ef4444] bg-[#fef2f2] border-[#fecaca]",
                  },
                  {
                    tf: "5m (5 Menit)",
                    desc: "Order berlangsung 5 menit. Keseimbangan baik antara frekuensi sinyal dan kualitas analisis. Cukup waktu untuk melihat momentum, tidak terlalu lama menunggu hasil. Rekomendasi untuk pemula mode Fastrade.",
                    risk: "Direkomendasikan",
                    riskColor: "text-[#166534] bg-[#dcfce7] border-[#bbf7d0]",
                  },
                  {
                    tf: "15m (15 Menit)",
                    desc: "Order berlangsung 15 menit. Sinyal lebih jarang tapi lebih terfilter. Cocok untuk kondisi pasar yang sedang trending dengan momentum jelas. Setiap order perlu modal yang cukup untuk martingale jika loss.",
                    risk: "Menengah",
                    riskColor: "text-[#92400e] bg-[#fffbeb] border-[#fde68a]",
                  },
                  {
                    tf: "30m (30 Menit)",
                    desc: "Order berlangsung 30 menit. Sinyal sangat jarang — hanya cocok untuk aset yang trending sangat kuat. Perlu modal lebih besar karena bot lebih sedikit order per jam. Kurang cocok untuk akun modal kecil.",
                    risk: "Konservatif",
                    riskColor: "text-[#1d4ed8] bg-[#eff6ff] border-[#bfdbfe]",
                  },
                  {
                    tf: "1h (1 Jam)",
                    desc: "Order berlangsung 1 jam penuh. Sinyal paling jarang, paling sedikit order per sesi. Cocok untuk trader yang mau set dan tinggal tanpa monitoring aktif. Butuh kesabaran dan modal yang cukup.",
                    risk: "Sangat Konservatif",
                    riskColor: "text-[#1d4ed8] bg-[#eff6ff] border-[#bfdbfe]",
                  },
                ].map((item) => (
                  <div
                    key={item.tf}
                    className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-[13px] font-bold text-[#1a1612]">{item.tf}</h3>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.riskColor}`}
                      >
                        {item.risk}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <TipBox>
                Mode Fastrade CTC (Copy Trading) menggunakan timeframe yang sama dengan FTT. Bedanya, di
                CTC arah order mengikuti master trader real-time, bukan analisis bot sendiri. Timeframe
                yang dipilih tetap menentukan durasi setiap order yang dicopy.
              </TipBox>
            </section>

            {/* Section 3 */}
            <section>
              <SectionLabel>Mode Signal</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Duration di Mode Signal: Cara Mengatur 60-300 Detik
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Mode Signal berbeda dari Fastrade karena Anda memasukkan arah order (CALL atau PUT)
                secara manual beserta waktu eksekusinya. Di mode ini, tidak ada "timeframe" dalam arti
                durasi analisis candle — melainkan ada parameter "duration" yang menentukan berapa lama
                order berlangsung setelah dieksekusi.
              </p>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Cara Kerja Duration di Mode Signal
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8]">
                      1
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed pt-0.5">
                      Anda masukkan sinyal: arah (CALL/PUT), waktu eksekusi, dan nominal order
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8]">
                      2
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed pt-0.5">
                      Bot menunggu hingga waktu eksekusi yang ditentukan tiba
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8]">
                      3
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed pt-0.5">
                      Saat waktu tiba, bot eksekusi order dengan duration yang Anda set (60-300 detik)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8]">
                      4
                    </div>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed pt-0.5">
                      Order berlangsung selama duration yang dipilih, lalu hasil (win/loss) diketahui
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  {
                    dur: "60 detik",
                    desc: "Paling cepat. Hasil diketahui dalam 1 menit. Cocok untuk sinyal yang sangat time-sensitive.",
                  },
                  {
                    dur: "120-180 detik",
                    desc: "Durasi menengah. Memberikan sedikit ruang untuk pergerakan harga yang lebih natural.",
                  },
                  {
                    dur: "300 detik",
                    desc: "Durasi 5 menit. Memberikan waktu lebih untuk harga bergerak ke arah yang diprediksi.",
                  },
                ].map((item) => (
                  <div
                    key={item.dur}
                    className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4 text-center"
                  >
                    <p className="text-[14px] font-bold text-[#1a1612] mb-1">{item.dur}</p>
                    <p className="text-[11px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <InfoBox icon="📅" title="Kapan Menggunakan Mode Signal?">
                Mode Signal ideal jika Anda mendapatkan sinyal dari sumber eksternal (grup sinyal, analisis
                sendiri) yang menyebutkan arah dan waktu spesifik untuk masuk. Bot akan eksekusi secara
                tepat waktu sesuai jadwal yang Anda set, menghilangkan keterlambatan human execution.
              </InfoBox>
            </section>

            {/* Section 4 */}
            <section>
              <SectionLabel>Mode Tanpa Timeframe</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Mode AI Signal, Indicator, Momentum: Tidak Ada Pilihan Timeframe
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Tiga mode ini sengaja dirancang tanpa pilihan timeframe eksplisit. Bukan karena
                keterbatasan, melainkan karena masing-masing memiliki logika timing internal yang lebih
                kompleks dari sekadar memilih durasi candle.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">
                    AI Signal — Bot Tentukan Sendiri
                  </h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    Mode AI Signal menggunakan model kecerdasan buatan yang menganalisis kondisi pasar
                    secara menyeluruh. Model ini menentukan tidak hanya arah (CALL/PUT) tapi juga durasi
                    optimal berdasarkan pattern yang dideteksi. Anda tidak perlu dan tidak bisa mengubah
                    timeframe karena AI memilih durasi terbaik berdasarkan kondisi saat itu.
                  </p>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">
                    Mode Indicator — Period Bukan Timeframe
                  </h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    Di mode Indicator, yang Anda atur adalah "Period" (jumlah candle untuk menghitung
                    indikator) dan "Sensitivity" — bukan timeframe order. Bot mengeksekusi order saat
                    nilai SMA/EMA/RSI menembus threshold yang ditetapkan, dengan durasi order yang
                    ditentukan secara internal oleh sistem.
                  </p>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-[#1a1612] mb-2">
                    Mode Momentum — Dipicu Pola, Bukan Interval
                  </h3>
                  <p className="text-[13px] text-[#6b6058] leading-relaxed">
                    Mode Momentum mendeteksi 4 pola candlestick (CandleSabit, DojiTerjepit,
                    DojiPembatalan, BBSARBreak). Tidak ada interval analisis tetap — bot memantau setiap
                    candle dan eksekusi order segera saat pola yang diaktifkan terdeteksi. Durasi order
                    ditentukan internal oleh sistem.
                  </p>
                </div>
              </div>

              <WarningBox>
                Jangan mencari setting timeframe di mode AI Signal, Indicator, atau Momentum — memang
                tidak ada. Jika Anda ingin kontrol penuh atas durasi order, gunakan mode Fastrade FTT
                atau mode Signal yang memiliki pilihan timeframe/duration eksplisit.
              </WarningBox>
            </section>

            {/* Section 5 */}
            <section>
              <SectionLabel>Memilih Timeframe Fastrade</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Cara Memilih Timeframe yang Tepat di Mode Fastrade
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Memilih timeframe di mode Fastrade bukan sekadar selera — ada faktor objektif yang
                perlu dipertimbangkan untuk memaksimalkan win rate dan mengelola risiko.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl overflow-hidden mb-6">
                <div className="grid grid-cols-4 bg-[#f9fafb] border-b border-[rgba(26,22,18,0.06)] px-4 py-2.5 gap-2">
                  {["Timeframe", "Order/Jam", "Noise", "Cocok Untuk"].map((h) => (
                    <p
                      key={h}
                      className="text-[10px] font-semibold text-[#6b6058] uppercase tracking-wide"
                    >
                      {h}
                    </p>
                  ))}
                </div>
                {[
                  { tf: "1m", order: "Sangat Banyak", noise: "Tinggi", cocok: "Scalper aktif" },
                  { tf: "5m", order: "Banyak", noise: "Menengah", cocok: "Pemula / Umum" },
                  { tf: "15m", order: "Sedang", noise: "Rendah", cocok: "Trending market" },
                  { tf: "30m", order: "Sedikit", noise: "Sangat rendah", cocok: "Modal lebih besar" },
                  { tf: "1h", order: "Sangat Sedikit", noise: "Minimal", cocok: "Long-term bot" },
                ].map((row, i) => (
                  <div
                    key={row.tf}
                    className={`grid grid-cols-4 px-4 py-3 gap-2 ${row.tf === "5m" ? "bg-[#f0fdf4]" : ""} ${i < 4 ? "border-b border-[rgba(26,22,18,0.04)]" : ""}`}
                  >
                    <p
                      className={`text-[12px] font-bold ${row.tf === "5m" ? "text-[#166534]" : "text-[#1a1612]"}`}
                    >
                      {row.tf} {row.tf === "5m" ? "★" : ""}
                    </p>
                    <p className="text-[11px] text-[#6b6058]">{row.order}</p>
                    <p className="text-[11px] text-[#6b6058]">{row.noise}</p>
                    <p className="text-[11px] text-[#6b6058]">{row.cocok}</p>
                  </div>
                ))}
              </div>

              <TipBox>
                Untuk pemula, mulai dengan timeframe 5m di mode Fastrade FTT pada aset EUR/USD. Ini
                memberikan keseimbangan terbaik: cukup banyak order untuk melihat performa bot, tapi
                tidak terlalu banyak noise seperti timeframe 1m.
              </TipBox>
            </section>

            {/* Section 6 */}
            <section>
              <SectionLabel>Timeframe dan Martingale</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Hubungan Timeframe dengan Martingale dan Risiko
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Pilihan timeframe di mode Fastrade berdampak langsung pada cara martingale bekerja dan
                kecepatan risiko modal terkuras.
              </p>

              <div className="space-y-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    Timeframe Kecil (1m) + Martingale
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Dengan timeframe 1m, bot bisa mengeksekusi banyak order per jam. Jika terjadi
                    loss beruntun, martingale akan eskalasi sangat cepat. Dalam 10 menit, bisa sudah
                    ada 5-7 order martingale. Modal bisa habis jauh lebih cepat dibanding timeframe
                    yang lebih panjang. Butuh modal yang cukup besar dan Stop Loss harian yang ketat.
                  </p>
                </div>

                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    Timeframe Besar (15m-1h) + Martingale
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Dengan timeframe 15m atau lebih, loss beruntun prosesnya lebih lambat. Anda punya
                    lebih banyak waktu untuk memantau dan menghentikan bot secara manual jika situasi
                    memburuk. Namun ini juga berarti recovery dari loss membutuhkan waktu lebih lama.
                    Cocok untuk trader yang tidak bisa monitor aktif.
                  </p>
                </div>
              </div>

              <WarningBox>
                Kombinasi timeframe 1m dengan martingale Max Steps 7 adalah kombinasi risiko sangat
                tinggi. Dalam kondisi pasar buruk, 7 loss berturut-turut bisa terjadi dalam waktu
                kurang dari 10 menit dan menguras sebagian besar modal. Selalu set Stop Loss harian
                sebelum menjalankan kombinasi agresif ini.
              </WarningBox>
            </section>

            {/* Section 7 */}
            <section>
              <SectionLabel>Rekomendasi Berdasarkan Modal</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Rekomendasi Timeframe Berdasarkan Modal dan Profil Risiko
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Pilihan timeframe yang ideal tidak lepas dari berapa modal yang Anda miliki dan
                seberapa tinggi toleransi risiko Anda.
              </p>

              <div className="space-y-3">
                <StepCard
                  n="A"
                  title="Modal Kecil (Rp 100.000 - Rp 300.000)"
                  desc="Gunakan timeframe 5m atau 15m. Hindari 1m karena martingale eskalasi terlalu cepat. Base amount Rp 14.000, max steps 3-4, tanpa martingale lebih aman."
                  sub="Rekomendasi: 5m, Fastrade FTT, Martingale max 3 steps"
                />
                <StepCard
                  n="B"
                  title="Modal Menengah (Rp 300.000 - Rp 1.000.000)"
                  desc="Fleksibel antara 5m atau 15m. Bisa aktifkan martingale hingga 5 steps dengan multiplier 1.5x. Monitor aktif masih dianjurkan terutama di 5m."
                  sub="Rekomendasi: 5m-15m, Fastrade FTT, Martingale 4-5 steps"
                />
                <StepCard
                  n="C"
                  title="Modal Lebih Besar (di atas Rp 1.000.000)"
                  desc="Bisa eksplorasi timeframe 1m dengan martingale lebih banyak steps, atau timeframe 30m-1h untuk trading yang lebih santai. Modal mencukupi untuk menyerap loss beruntun."
                  sub="Rekomendasi: Sesuaikan dengan gaya trading dan target profit harian"
                />
              </div>
            </section>

            {/* Section 8 — FAQ */}
            <section>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pertanyaan Umum tentang Timeframe di STC AutoTrade
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
                Pahami Timeframe Setiap Mode Sebelum Memulai Bot
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Timeframe di STC AutoTrade v4.4 tidak bersifat universal. Hanya mode Fastrade FTT dan
                CTC yang memiliki pilihan timeframe 1m-1h. Mode Signal menggunakan duration 60-300
                detik. Mode AI Signal, Indicator, dan Momentum mengelola timing order secara otomatis
                sesuai logika internalnya masing-masing.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-6">
                Untuk pemula, mulai dengan mode Fastrade FTT timeframe 5m pada aset EUR/USD. Ini
                memberikan titik belajar yang baik sebelum mengeksplorasi timeframe lebih kecil atau
                lebih besar sesuai dengan perkembangan pemahaman dan modal trading Anda.
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
                      href: "/artikel/strategi-martingale-stockity",
                      label: "Strategi Martingale di Stockity: Cara Kerja dan Risikonya",
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
              <p className="text-[13px] text-white/60 mb-2">Siap eksplorasi timeframe yang tepat?</p>
              <h3 className="text-[18px] font-bold text-white mb-4">
                Download STC AutoTrade dan Coba di Akun Demo
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
