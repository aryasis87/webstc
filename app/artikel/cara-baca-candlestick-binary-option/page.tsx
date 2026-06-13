import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Baca Candlestick Binary Option & 4 Pola Mode Momentum STC AutoTrade",
  description:
    "Panduan lengkap membaca candlestick binary option dan 4 pola Mode Momentum STC AutoTrade: CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak. Setiap pola bisa enable/disable.",
  keywords: [
    "cara baca candlestick binary option",
    "pola candlestick binary option",
    "mode momentum STC AutoTrade",
    "CandleSabit DojiTerjepit BBSARBreak",
    "candlestick reversal binary option",
    "robot trading candlestick otomatis",
    "pola candle stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
  },
  openGraph: {
    title: "Cara Baca Candlestick & 4 Pola Mode Momentum STC AutoTrade 2026",
    description:
      "Mode Momentum STC AutoTrade mendeteksi 4 pola candlestick: CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak. Setiap pola bisa enable/disable secara individual.",
    url: "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
    siteName: "STC AutoTrade",
    locale: "id_ID",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-06-07T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "4 Pola Candlestick Mode Momentum STC AutoTrade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "4 Pola Mode Momentum STC AutoTrade: CandleSabit, Doji, BBSARBreak",
    description:
      "Mode Momentum STC AutoTrade mendeteksi 4 pola: CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak. Bisa enable/disable per pola.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Cara Baca Candlestick Binary Option & 4 Pola Mode Momentum STC AutoTrade",
  description:
    "Panduan membaca candlestick dan 4 pola Mode Momentum STC AutoTrade v4.4.",
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
    "@id": "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
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
      name: "Cara Baca Candlestick Binary Option",
      item: "https://stcautotrade.id/artikel/cara-baca-candlestick-binary-option",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah mode Momentum STC AutoTrade bisa mendeteksi semua pola candlestick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Mode Momentum di STC AutoTrade v4.4 hanya mendeteksi 4 pola spesifik: CandleSabit, DojiTerjepit, DojiPembatalan, dan BBSARBreak. Pola lain seperti Engulfing, Hammer, Morning Star tidak dideteksi.",
      },
    },
    {
      "@type": "Question",
      name: "Mana pola yang paling akurat di mode Momentum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BBSARBreak umumnya paling reliabel karena mengkombinasikan dua konfirmator sekaligus. CandleSabit baik untuk reversal di aset volatile. DojiTerjepit dan DojiPembatalan lebih cocok di pasar dengan tren jelas. Akurasi bergantung kondisi pasar saat itu.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa aktifkan hanya 1 pola saja di mode Momentum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Setiap pola (CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak) bisa di-enable atau disable secara individual. Anda bisa mengaktifkan hanya satu pola untuk fokus pada satu jenis sinyal saja.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara kerja pola BBSARBreak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BBSARBreak mendeteksi ketika harga menembus keluar dari Bollinger Bands (upper atau lower band) dan sekaligus dikonfirmasi oleh perubahan posisi Parabolic SAR. Dua konfirmator ini bersama-sama memberikan sinyal breakout yang lebih valid.",
      },
    },
    {
      "@type": "Question",
      name: "Apa itu pola DojiTerjepit dan kapan bot eksekusi order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DojiTerjepit adalah pola doji yang muncul di antara dua candle besar berlawanan arah. Ini menandakan indecision pasar. Bot eksekusi order berdasarkan candle konfirmator berikutnya setelah doji terdeteksi dalam konteks dua candle besar sebelumnya.",
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

export default function CaraBacaCandlestickBinaryOptionPage() {
  const faqs = [
    {
      q: "Apakah mode Momentum STC AutoTrade bisa mendeteksi semua pola candlestick?",
      a: "Tidak. Mode Momentum di STC AutoTrade v4.4 hanya mendeteksi 4 pola spesifik: CandleSabit, DojiTerjepit, DojiPembatalan, dan BBSARBreak. Pola lain seperti Engulfing, Hammer standard, Morning Star tidak dideteksi oleh bot ini.",
    },
    {
      q: "Mana pola yang paling akurat di mode Momentum?",
      a: "BBSARBreak umumnya paling reliabel karena mengkombinasikan dua konfirmator sekaligus (Bollinger Bands + Parabolic SAR). CandleSabit baik untuk reversal di aset volatile. DojiTerjepit dan DojiPembatalan lebih cocok di pasar dengan tren jelas. Akurasi tiap pola bergantung kondisi pasar saat itu.",
    },
    {
      q: "Bisa aktifkan hanya 1 pola saja di mode Momentum?",
      a: "Ya. Setiap pola (CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak) bisa di-enable atau disable secara individual. Anda bisa mengaktifkan hanya satu pola jika ingin fokus pada satu jenis sinyal.",
    },
    {
      q: "Bagaimana cara kerja pola BBSARBreak secara teknis?",
      a: "BBSARBreak mendeteksi ketika harga menembus keluar dari band Bollinger Bands (upper atau lower band) dan sekaligus dikonfirmasi oleh perubahan posisi Parabolic SAR. Dua kondisi ini harus terpenuhi bersamaan — itulah yang membuat sinyal ini lebih valid dibanding hanya satu indikator.",
    },
    {
      q: "Apa itu pola DojiTerjepit dan kapan bot eksekusi order?",
      a: "DojiTerjepit adalah pola doji yang muncul di antara dua candle besar berlawanan arah, menandakan indecision pasar. Bot eksekusi order berdasarkan candle konfirmator berikutnya setelah doji terdeteksi dalam konteks dua candle besar sebelumnya.",
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
                <span className="text-[#1a1612]/60">Candlestick Binary Option</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="text-[11px] font-semibold text-[#1d4ed8] tracking-wide uppercase">
                  Mode Momentum
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#1a1612] leading-tight mb-4">
                Cara Baca Candlestick Binary Option &{" "}
                <span className="text-[#3b82f6]">4 Pola Mode Momentum STC AutoTrade</span>
              </h1>
              <p className="text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Memahami candlestick adalah fondasi solid dalam trading binary option. Di STC AutoTrade
                v4.4, mode Momentum mengotomatiskan deteksi 4 pola candlestick spesifik: CandleSabit,
                DojiTerjepit, DojiPembatalan, dan BBSARBreak. Setiap pola bisa diaktifkan secara
                individual, dan bot langsung eksekusi order begitu pola terdeteksi.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "4 Pola", l: "Mode Momentum" },
                  { v: "CandleSabit", l: "Pola Utama" },
                  { v: "BBSARBreak", l: "Pola Teknikal" },
                  { v: "Otomatis", l: "Deteksi di Bot" },
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
              <SectionLabel>Dasar Candlestick</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Candlestick di Binary Option: Dasar yang Wajib Dipahami
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Candlestick adalah cara paling informatif untuk memvisualisasikan pergerakan harga
                dalam satu periode waktu. Setiap candle mengandung empat data penting: harga pembukaan
                (open), harga tertinggi (high), harga terendah (low), dan harga penutupan (close).
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Body (Badan)</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Kotak di tengah candle. Mewakili rentang antara harga open dan close. Body besar
                    menunjukkan momentum kuat. Body kecil menunjukkan ketidakpastian arah.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Shadow (Sumbu/Ekor)</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Garis tipis di atas dan bawah body. Menunjukkan level high dan low yang pernah
                    dicapai. Shadow panjang menandakan rejection kuat di level tersebut.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-4">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-2">Warna Candle</p>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Hijau/putih = bullish (close lebih tinggi dari open). Merah/hitam = bearish (close
                    lebih rendah dari open). Warna menunjukkan tekanan dominan periode tersebut.
                  </p>
                </div>
              </div>
              <InfoBox icon="📖" title="Mengapa Candlestick Penting untuk Binary Option?">
                Di binary option, Anda hanya perlu menebak apakah harga akan NAIK atau TURUN dalam
                periode waktu tertentu. Pola candlestick membantu mengidentifikasi momentum dan
                kemungkinan arah pergerakan berikutnya — inilah yang dieksploitasi oleh mode Momentum
                di STC AutoTrade secara otomatis.
              </InfoBox>
            </section>

            {/* Section 2 */}
            <section>
              <SectionLabel>Pola 1 — CandleSabit</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pola CandleSabit: Bullish Reversal yang Kuat
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                CandleSabit adalah nama yang digunakan STC AutoTrade untuk pola candlestick bullish
                reversal yang ditandai dengan body kecil di bagian atas dan ekor bawah yang sangat
                panjang — menyerupai bentuk sabit atau palu (hammer).
              </p>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">Karakteristik Pola</h3>
                <ul className="space-y-2 mb-4">
                  {[
                    "Body candle kecil, terletak di bagian atas dari keseluruhan range candle",
                    "Lower shadow (ekor bawah) minimal 2x panjang body — makin panjang makin kuat",
                    "Upper shadow (ekor atas) minimal atau tidak ada sama sekali",
                    "Paling valid ketika muncul setelah downtrend atau di level support penting",
                    "Warna body bisa bullish (hijau) maupun bearish (merah) — pola tetap valid",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                      <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">
                  <span className="font-semibold text-[#1a1612]">Makna pola:</span> Penjual sempat
                  mendorong harga sangat rendah (ekor bawah panjang), namun pembeli berhasil membalikan
                  dan menutup harga mendekati level open. Ini sinyal kuat bahwa tekanan jual mulai habis
                  dan reversal naik kemungkinan akan terjadi.
                </p>
              </div>
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-5 py-4">
                <p className="text-[12px] font-semibold text-[#166534] mb-1">Cara Bot Mendeteksi</p>
                <p className="text-[13px] text-[#14532d] leading-relaxed">
                  Bot mode Momentum secara real-time menghitung rasio lower shadow terhadap body candle.
                  Ketika pola CandleSabit diaktifkan dan terdeteksi dengan rasio memenuhi threshold
                  internal, bot langsung eksekusi order CALL — memperkirakan harga akan naik setelah
                  reversal bullish tersebut.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <SectionLabel>Pola 2 — DojiTerjepit</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pola DojiTerjepit: Sinyal Indecision Pasar
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                DojiTerjepit adalah pola doji yang muncul di antara dua candle besar berlawanan arah.
                Doji sendiri adalah candle dengan harga open dan close yang hampir sama persis,
                membentuk body yang sangat tipis atau hampir tidak ada.
              </p>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Struktur Pola (3 Candle)
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#fecaca] flex items-center justify-center text-[10px] font-bold text-[#991b1b]">
                      1
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#1a1612]">
                        Candle Pertama: Body Besar
                      </p>
                      <p className="text-[11px] text-[#6b6058] leading-relaxed">
                        Candle dengan body besar yang menunjukkan momentum kuat di satu arah. Ini adalah
                        dinding kiri yang mengurung doji di tengah — bisa bullish atau bearish.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#dbeafe] flex items-center justify-center text-[10px] font-bold text-[#1d4ed8]">
                      2
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#1a1612]">Candle Kedua: Doji</p>
                      <p className="text-[11px] text-[#6b6058] leading-relaxed">
                        Candle doji di tengah — body sangat kecil, shadow atas dan bawah ada. Harga open
                        dan close hampir sama, menunjukkan ketidakpastian arah yang sesungguhnya.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 min-w-[24px] rounded-full bg-[#bbf7d0] flex items-center justify-center text-[10px] font-bold text-[#166534]">
                      3
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-[#1a1612]">
                        Candle Ketiga: Konfirmasi
                      </p>
                      <p className="text-[11px] text-[#6b6058] leading-relaxed">
                        Candle besar berlawanan dari candle pertama. Ini adalah dinding kanan yang
                        mengkonfirmasi bahwa momentum telah berganti arah secara nyata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                <span className="font-semibold text-[#1a1612]">Makna pasar:</span> Ketika doji terjepit
                di antara dua candle besar berlawanan, ini menandakan momen transisi. Kekuatan dominan
                sebelumnya kehilangan tenaga, dan arah baru sedang terbentuk.
              </p>
              <TipBox>
                Bot mendeteksi pola ini dengan menganalisis 3 candle terakhir secara bersamaan. Ketika
                DojiTerjepit aktif dan terdeteksi, bot eksekusi order sesuai arah candle ketiga sebagai
                konfirmasi perubahan momentum.
              </TipBox>
            </section>

            {/* Section 4 */}
            <section>
              <SectionLabel>Pola 3 — DojiPembatalan</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pola DojiPembatalan: Tanda Akhir Sebuah Tren
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                DojiPembatalan adalah pola doji yang muncul setelah tren yang kuat dan konsisten.
                Kehadiran doji di ujung momentum panjang adalah sinyal bahwa tren tersebut mungkin akan
                berakhir atau setidaknya terkoreksi secara signifikan.
              </p>
              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Cara Mengenali Pola DojiPembatalan
                </h3>
                <ul className="space-y-2 mb-4">
                  {[
                    "Didahului oleh beberapa candle berturut-turut searah (minimal 3-5 candle tren)",
                    "Candle doji muncul di ujung tren — seolah mengerem momentum yang sedang berlari",
                    "Doji memiliki shadow di kedua sisi, menunjukkan pertarungan bull vs bear yang intens",
                    "Semakin panjang tren sebelumnya, semakin signifikan sinyal doji ini",
                    "Dikategorikan bearish reversal jika muncul di akhir uptrend yang panjang",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-[#6b6058]">
                      <span className="text-[#3b82f6] mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">
                  <span className="font-semibold text-[#1a1612]">Perbedaan dengan DojiTerjepit:</span>{" "}
                  DojiTerjepit fokus pada posisi doji di antara dua candle besar berlawanan arah.
                  DojiPembatalan fokus pada konteks tren panjang sebelum doji muncul. Keduanya pola
                  yang berbeda dengan kondisi trigger yang berbeda pula.
                </p>
              </div>
              <InfoBox icon="🔄" title="Cara Bot Mendeteksi DojiPembatalan">
                Bot menganalisis minimal 3-5 candle ke belakang untuk memverifikasi ada tren yang
                konsisten. Kemudian ketika doji terdeteksi di ujung tren tersebut dengan rasio body
                memenuhi threshold, bot mengeksekusi order PUT (jika di akhir uptrend) atau CALL
                (jika di akhir downtrend).
              </InfoBox>
            </section>

            {/* Section 5 */}
            <section>
              <SectionLabel>Pola 4 — BBSARBreak</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pola BBSARBreak: Breakout dengan Konfirmasi SAR
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                BBSARBreak adalah pola paling kompleks di mode Momentum. Ini mengkombinasikan dua
                indikator teknikal sekaligus — Bollinger Bands dan Parabolic SAR — untuk memvalidasi
                sinyal breakout dengan tingkat kepercayaan lebih tinggi.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    Komponen 1: Bollinger Bands
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    Terdiri dari tiga garis: middle band (SMA 20), upper band (+2 standar deviasi), dan
                    lower band (-2 standar deviasi). Harga yang menembus upper atau lower band
                    menandakan pergerakan signifikan keluar dari zona normal volatilitas.
                  </p>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <h3 className="text-[13px] font-bold text-[#1a1612] mb-2">
                    Komponen 2: Parabolic SAR
                  </h3>
                  <p className="text-[12px] text-[#6b6058] leading-relaxed">
                    SAR (Stop And Reverse) adalah titik-titik di atas atau di bawah candle. SAR di
                    bawah harga mengindikasikan uptrend. SAR di atas harga mengindikasikan downtrend.
                    Perpindahan posisi SAR menandakan perubahan arah tren.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5 mb-5">
                <h3 className="text-[14px] font-bold text-[#1a1612] mb-3">
                  Kondisi Trigger BBSARBreak
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-2 text-[12px] text-[#6b6058]">
                    <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">CALL:</span>
                    <span>
                      Harga breakout ke atas upper Bollinger Band{" "}
                      <span className="font-semibold text-[#1a1612]">DAN</span> Parabolic SAR
                      berpindah ke bawah harga (mengkonfirmasi uptrend baru)
                    </span>
                  </div>
                  <div className="flex gap-2 text-[12px] text-[#6b6058]">
                    <span className="text-red-600 font-bold flex-shrink-0 mt-0.5">PUT:</span>
                    <span>
                      Harga breakdown ke bawah lower Bollinger Band{" "}
                      <span className="font-semibold text-[#1a1612]">DAN</span> Parabolic SAR
                      berpindah ke atas harga (mengkonfirmasi downtrend baru)
                    </span>
                  </div>
                </div>
              </div>
              <WarningBox>
                BBSARBreak adalah pola yang paling jarang muncul di mode Momentum karena membutuhkan
                dua kondisi terpenuhi secara bersamaan. Namun ketika muncul, sinyal ini umumnya
                memiliki reliabilitas lebih tinggi karena double konfirmasi dari dua indikator berbeda.
              </WarningBox>
            </section>

            {/* Section 6 */}
            <section>
              <SectionLabel>Cara Setting Mode</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Cara Setting Mode Momentum di STC AutoTrade
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Setting mode Momentum dilakukan di dashboard STC AutoTrade. Yang membuat mode ini
                fleksibel adalah kemampuan enable/disable setiap pola secara individual sesuai strategi
                dan kondisi pasar yang Anda hadapi.
              </p>
              <div className="space-y-3 mb-6">
                <StepCard
                  n="1"
                  title="Pilih Mode Momentum di Dashboard"
                  desc="Di dashboard, pilih 'Momentum' dari selector mode strategi. Anda akan melihat 4 toggle switch untuk mengaktifkan/menonaktifkan setiap pola candlestick."
                  sub="Mode ke-6 dari 6 mode yang tersedia"
                />
                <StepCard
                  n="2"
                  title="Enable/Disable Pola Secara Individual"
                  desc="Aktifkan pola yang ingin dideteksi: CandleSabit, DojiTerjepit, DojiPembatalan, BBSARBreak. Bisa aktifkan semuanya sekaligus atau hanya pola tertentu."
                  sub="Minimal 1 pola harus aktif agar bot bisa berjalan"
                />
                <StepCard
                  n="3"
                  title="Set Amount, Stop Loss, dan Stop Profit"
                  desc="Atur nominal per order (min Rp 14.000), Stop Loss harian, dan Stop Profit harian. Bot berhenti otomatis saat SL atau TP tercapai."
                  sub="SL/TP wajib diisi untuk manajemen risiko yang baik"
                />
                <StepCard
                  n="4"
                  title="Konfigurasi Martingale (Opsional)"
                  desc="Aktifkan martingale jika ingin recovery otomatis saat loss. Set Max Steps (1-7) dan Multiplier (Fixed atau Percentage, 1.5x-5x)."
                  sub="Nonaktifkan martingale jika Anda baru mulai"
                />
                <StepCard
                  n="5"
                  title="Pilih Aset dan Klik Start"
                  desc="Pilih aset trading dari dropdown (EUR/USD, Gold, GBP/USD, dll), pastikan saldo cukup, lalu klik Start. Bot langsung memantau pola secara real-time."
                  sub="Gunakan Demo terlebih dahulu sebelum akun Real"
                />
              </div>
              <TipBox>
                Untuk eksperimen pertama, coba aktifkan hanya BBSARBreak saja. Pola ini paling jarang
                tapi paling kuat. Catat hasilnya di halaman History setelah beberapa sesi, lalu
                bandingkan dengan mengaktifkan CandleSabit untuk pasar yang lebih aktif.
              </TipBox>
            </section>

            {/* Section 7 */}
            <section>
              <SectionLabel>Manual vs Bot</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Membaca Pola Candlestick: Manual vs Otomatis dengan Bot
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-5">
                Ada dua pendekatan dalam memanfaatkan pola candlestick untuk binary option. Keduanya
                memiliki kelebihan masing-masing dan bukan situasi yang harus dipilih satu saja.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Membaca Manual</p>
                  <ul className="space-y-2">
                    {[
                      { pro: true, text: "Mempertimbangkan konteks pasar lebih luas" },
                      { pro: true, text: "Fleksibel, bisa skip kondisi pasar buruk" },
                      { pro: false, text: "Butuh pengalaman dan waktu belajar lama" },
                      { pro: false, text: "Rentan bias emosional (FOMO, greed, fear)" },
                      { pro: false, text: "Tidak bisa pantau chart 24 jam nonstop" },
                    ].map((item) => (
                      <li
                        key={item.text}
                        className="flex items-start gap-2 text-[12px] text-[#6b6058]"
                      >
                        <span
                          className={`flex-shrink-0 ${item.pro ? "text-[#22c55e]" : "text-[#ef4444]"}`}
                        >
                          {item.pro ? "+" : "−"}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                  <p className="text-[12px] font-semibold text-[#1a1612] mb-3">
                    Bot Mode Momentum
                  </p>
                  <ul className="space-y-2">
                    {[
                      { pro: true, text: "Deteksi pola real-time 24/7 tanpa absen" },
                      { pro: true, text: "Tidak terpengaruh emosi, konsisten" },
                      { pro: true, text: "Eksekusi instan begitu pola terpenuhi" },
                      { pro: false, text: "Terbatas pada 4 pola yang sudah ditentukan" },
                      { pro: false, text: "Tidak membaca sentimen berita makro" },
                    ].map((item) => (
                      <li
                        key={item.text}
                        className="flex items-start gap-2 text-[12px] text-[#6b6058]"
                      >
                        <span
                          className={`flex-shrink-0 ${item.pro ? "text-[#22c55e]" : "text-[#ef4444]"}`}
                        >
                          {item.pro ? "+" : "−"}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <InfoBox icon="💡" title="Kombinasi Terbaik">
                Gunakan pengetahuan membaca candlestick manual untuk menentukan kapan menjalankan bot
                (kondisi pasar bagus) dan kapan menghentikannya (news besar, volatilitas ekstrem). Bot
                bekerja paling optimal ketika Anda memberinya kondisi pasar yang tepat.
              </InfoBox>
            </section>

            {/* Section 8 — FAQ */}
            <section>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-[20px] font-bold text-[#1a1612] mb-4">
                Pertanyaan Umum tentang Candlestick dan Mode Momentum
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
                Mode Momentum: 4 Pola Candlestick Bekerja Secara Otomatis
              </h2>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-4">
                Memahami pola candlestick adalah investasi ilmu yang tak ternilai dalam trading binary
                option. Dengan STC AutoTrade v4.4, Anda tidak perlu memantau chart berjam-jam — mode
                Momentum mendeteksi 4 pola spesifik (CandleSabit, DojiTerjepit, DojiPembatalan,
                BBSARBreak) dan mengeksekusi order secara otomatis.
              </p>
              <p className="text-[14px] text-[#6b6058] leading-relaxed mb-6">
                Kunci keberhasilan: aktifkan pola yang sesuai dengan kondisi pasar saat itu, gunakan
                Stop Loss harian sebagai jaring pengaman, dan selalu mulai dengan akun Demo untuk
                memahami pola mana yang bekerja paling baik untuk aset yang Anda trading.
              </p>

              <div className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl p-5">
                <p className="text-[12px] font-semibold text-[#1a1612] mb-3">Artikel Terkait</p>
                <div className="space-y-2">
                  {[
                    {
                      href: "/artikel/indikator-trading-binary-option",
                      label: "Indikator Trading Binary Option: SMA, EMA, RSI di Mode Indicator",
                    },
                    {
                      href: "/artikel/cara-setting-robot-stockity",
                      label: "Cara Setting Robot Stockity — Panduan Lengkap Dashboard",
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
              <p className="text-[13px] text-white/60 mb-2">Siap coba mode Momentum?</p>
              <h3 className="text-[18px] font-bold text-white mb-4">
                Download STC AutoTrade dan Aktifkan Mode Momentum
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
