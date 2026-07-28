/**
 * app/artikel/jam-trading-terbaik-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : jam trading terbaik stockity
 *   Secondary: waktu terbaik trading binary option, jam pasar forex WIB,
 *              sesi trading asia eropa amerika, jam ramai trading stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Jam Trading Terbaik Stockity: Waktu Paling Profit (WIB) 2026",
  description:
    "Kapan jam trading terbaik di Stockity? Pembagian sesi pasar Asia, Eropa, dan Amerika dalam WIB, jam paling likuid untuk tiap aset, waktu yang harus dihindari, dan cara mengotomatiskan jadwal.",
  keywords: [
    "jam trading terbaik stockity",
    "waktu terbaik trading binary option",
    "jam trading stockity wib",
    "sesi pasar forex wib",
    "jam ramai trading stockity",
    "waktu trading paling profit",
    "sesi asia eropa amerika trading",
    "jam sepi trading binary option",
    "jadwal trading stockity",
    "schedule trading otomatis stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/jam-trading-terbaik-stockity",
    languages: {
      "id-ID": "https://stcautotrade.id/artikel/jam-trading-terbaik-stockity",
      en: "https://stcautotrade.id/en/articles/stockity-trading-hours",
      ru: "https://stcautotrade.id/ru/articles/stockity-trading-hours",
      "x-default": "https://stcautotrade.id/artikel/jam-trading-terbaik-stockity",
    },
  },
  openGraph: {
    title: "Jam Trading Terbaik Stockity: Waktu Paling Profit (WIB) 2026",
    description:
      "Sesi Asia, Eropa, dan Amerika dalam WIB — jam paling likuid untuk trading di Stockity dan waktu yang sebaiknya dihindari.",
    url: "https://stcautotrade.id/artikel/jam-trading-terbaik-stockity",
    type: "article",
    publishedTime: "2026-07-03T00:00:00.000Z",
    modifiedTime: "2026-07-03T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og?t=Jam%20Trading%20Terbaik%20Stockity%3A%20Waktu%20Paling%20Profit%20(WIB)%202026&l=id", width: 1200, height: 630, alt: "Jam Trading Terbaik Stockity — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jam Trading Terbaik Stockity: Waktu Paling Profit (WIB) 2026",
  description: "Pembagian sesi pasar dalam WIB, jam paling likuid untuk tiap jenis aset di Stockity, dan waktu yang sebaiknya dihindari trader.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2026-07-03",
  dateModified: "2026-07-03",
  image: "https://stcautotrade.id/og?t=Jam%20Trading%20Terbaik%20Stockity%3A%20Waktu%20Paling%20Profit%20(WIB)%202026&l=id",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/jam-trading-terbaik-stockity" },
  keywords: "jam trading terbaik stockity, waktu terbaik trading binary option, sesi pasar wib",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Jam Trading Terbaik Stockity", item: "https://stcautotrade.id/artikel/jam-trading-terbaik-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Jam berapa waktu terbaik trading di Stockity?", acceptedAnswer: { "@type": "Answer", text: "Secara umum, jam 14.00–17.00 WIB (pembukaan sesi Eropa) dan 19.00–23.00 WIB (overlap Eropa–Amerika) adalah periode paling likuid dengan pergerakan tren yang lebih jelas untuk mayoritas pasangan mata uang." } },
    { "@type": "Question", name: "Apakah Stockity bisa ditradingkan 24 jam?", acceptedAnswer: { "@type": "Answer", text: "Platform aktif hampir 24 jam di hari kerja, dan menyediakan aset OTC di akhir pekan. Namun likuiditas dan karakter pergerakan berbeda di tiap sesi — tidak semua jam sama baiknya untuk semua strategi." } },
    { "@type": "Question", name: "Kapan waktu yang sebaiknya dihindari untuk trading?", acceptedAnswer: { "@type": "Answer", text: "Menit-menit sekitar rilis berita ekonomi besar (pergerakan liar dan sulit diprediksi), pergantian sesi dengan volume tipis (04.00–06.00 WIB), dan saat spread/noise tinggi di pasar sepi." } },
    { "@type": "Question", name: "Bagaimana cara trading otomatis di jam tertentu?", acceptedAnswer: { "@type": "Answer", text: "Gunakan mode Schedule di STC AutoTrade — Anda menetapkan waktu, arah, dan aset, lalu bot mengeksekusi order secara otomatis tepat pada jadwalnya, bahkan saat Anda tidur." } },
  ],
};

/* ── Komponen Lokal ───────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5 flex items-center gap-3">
      {children}
      <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
    </p>
  );
}

function InfoBox({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-xl px-5 py-4 flex gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div>
        <p className="text-[12px] font-semibold text-[#047857] mb-1">{title}</p>
        <p className="text-[13px] text-[#065f46] leading-relaxed">{children}</p>
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

export default function JamTradingTerbaikStockityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#f6f4ef]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/cara-kerja" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">Cara Kerja</Link>
              <Link href="/faq" className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">FAQ</Link>
              <Link href="/download" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline">Download</Link>
            </div>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/65 flex-wrap">
              <li><Link href="/" className="hover:text-[#1a1612] transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/artikel" className="hover:text-[#1a1612] transition-colors no-underline">Artikel</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">Jam Trading Terbaik Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#ccfbf1] text-[#0f766e] text-[11px] font-semibold rounded-full">Strategi</span>
            <span className="text-[12px] text-[#1a1612]/65">3 Juli 2026</span>
            <span className="text-[12px] text-[#1a1612]/65">·</span>
            <span className="text-[12px] text-[#1a1612]/65">±8 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Jam Trading Terbaik Stockity:<br className="hidden sm:block" />
            Waktu Paling Profit dalam WIB
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Strategi yang sama bisa untung di jam 20.00 dan buntung di jam 05.00. Mengetahui{" "}
            <strong className="font-semibold text-[#1a1612]">jam trading terbaik di Stockity</strong> adalah
            salah satu keunggulan paling murah yang bisa dimiliki trader — cukup tahu kapan pasar hidup,
            dan kapan sebaiknya tidak membuka posisi sama sekali.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "14–17", l: "WIB · Sesi Eropa Buka" },
              { v: "19–23", l: "WIB · Overlap EU–US" },
              { v: "04–06", l: "WIB · Hindari (Sepi)" },
              { v: "Schedule", l: "Mode Otomatis Bot" },
            ].map((s, i) => (
              <div key={i} className="bg-white py-4 px-4 text-center border-r border-[rgba(26,22,18,0.07)] last:border-0">
                <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#1a1612] mb-0.5">{s.v}</p>
                <p className="text-[11px] text-[#1a1612]/65">{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        {/* ── Article Body ──────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── Section 1 ─────────────────────────────────── */}
            <section>
              <SectionLabel>01 · Konsep</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kenapa Jam Trading Sangat Berpengaruh?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Pasar finansial global tidak pernah "rata". Aktivitasnya mengikuti jam kerja tiga pusat
                  keuangan dunia — <strong className="text-[#1a1612]">Asia (Tokyo), Eropa (London), dan
                  Amerika (New York)</strong>. Saat sebuah sesi aktif, volume transaksi aset yang terkait
                  sesi itu meningkat: pergerakan lebih tegas, tren lebih jelas, dan pola teknikal lebih bisa
                  diandalkan.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Sebaliknya di jam sepi, harga bergerak "menyamping" dengan banyak noise — kondisi terburuk
                  untuk binary option yang menuntut prediksi arah dalam waktu singkat.
                </p>
                <InfoBox icon="💡" title="Prinsip sederhana">
                  Trading-lah saat pasar aset Anda "bangun". Pasangan EUR/USD paling hidup saat London dan
                  New York aktif; USD/JPY lebih hidup di sesi Asia.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2 ─────────────────────────────────── */}
            <section>
              <SectionLabel>02 · Sesi Pasar</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Pembagian Sesi Pasar dalam WIB
              </h2>
              <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Sesi</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Jam (WIB)</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Karakter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Asia (Tokyo, Sydney)", "06.00 – 15.00", "Tenang–moderat; cocok untuk JPY, AUD; pergerakan cenderung teratur"],
                      ["Eropa (London)", "14.00 – 23.00", "Likuid dan bertren; jam 14.00–17.00 sering jadi awal tren harian"],
                      ["Amerika (New York)", "19.00 – 04.00", "Volume besar, volatil; dipengaruhi rilis data ekonomi AS"],
                      ["Overlap Eropa–Amerika", "19.00 – 23.00", "Paling likuid sepanjang hari — favorit mayoritas trader"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                        <td className="px-4 py-3 font-medium text-[#1a1612]">{row[0]}</td>
                        <td className="px-4 py-3 text-[#6b6058] whitespace-nowrap">{row[1]}</td>
                        <td className="px-4 py-3 text-[#6b6058]">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-[#1a1612]/65 mt-2">
                Jam bersifat aproksimasi dan dapat bergeser ±1 jam mengikuti daylight saving time di Eropa/AS.
              </p>
            </section>

            {/* ── Section 3 ─────────────────────────────────── */}
            <section>
              <SectionLabel>03 · Rekomendasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Jam Terbaik Menurut Gaya Trading Anda
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🌅", title: "Pagi santai (08.00–11.00 WIB)", desc: "Sesi Asia yang teratur — cocok untuk pemula yang masih belajar membaca pola, dan untuk aset JPY/AUD. Pergerakan tidak liar, tapi peluang tren besar juga lebih kecil." },
                  { icon: "🏙️", title: "Sore produktif (14.00–17.00 WIB)", desc: "Pembukaan London — tren harian sering dimulai di sini. Waktu favorit untuk strategi mengikuti tren (momentum dan indikator)." },
                  { icon: "🌆", title: "Malam prime-time (19.00–23.00 WIB)", desc: "Overlap London–New York, likuiditas puncak. Pergerakan tegas dan payout kompetitif — jam paling populer trader Indonesia karena selepas jam kerja." },
                  { icon: "🌙", title: "Dini hari (00.00–04.00 WIB)", desc: "Sesi New York paruh kedua. Masih layak untuk trader malam, namun waspadai penurunan volume menjelang jam 04.00." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="text-xl mb-2">{item.icon}</div>
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 4 ─────────────────────────────────── */}
            <section>
              <SectionLabel>04 · Hindari</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Waktu yang Sebaiknya Dihindari
              </h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "⚠️", title: "Pergantian sesi sepi (04.00–06.00 WIB)", desc: "New York tutup, Tokyo belum ramai. Volume tipis, harga bergerak acak — musuh utama strategi arah." },
                    { icon: "⚠️", title: "Menit-menit rilis berita besar", desc: "NFP, keputusan suku bunga, CPI — harga bisa melonjak dua arah dalam hitungan detik. Hindari ±15 menit sekitar rilis, atau pastikan stop loss bot aktif." },
                    { icon: "⚠️", title: "Jumat malam menjelang penutupan pekan", desc: "Banyak pelaku pasar menutup posisi; pergerakan bisa tidak mencerminkan tren sebenarnya." },
                    { icon: "⚠️", title: "Saat Anda sendiri lelah", desc: "Waktu terbaik pasar tidak berguna jika kondisi Anda buruk. Trading mengantuk = keputusan emosional. (Atau serahkan ke bot.)" },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="text-xl mb-2">{item.icon}</div>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <WarningBox>
                  Jam likuid bukan jaminan profit — ia hanya memperbesar peluang pola teknikal bekerja
                  sebagaimana mestinya. Manajemen modal dan disiplin tetap penentu utama.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 5 ─────────────────────────────────── */}
            <section>
              <SectionLabel>05 · Otomatisasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Mengotomatiskan Jadwal dengan Mode Schedule
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Sudah tahu jam terbaik tapi tidak selalu bisa standby? <strong className="text-[#1a1612]">Mode
                  Schedule di STC AutoTrade</strong> dibuat persis untuk masalah ini: Anda menetapkan waktu,
                  aset, dan arah — bot mengeksekusi tepat pada jadwalnya, bahkan saat Anda tidur atau bekerja.
                </p>
                <div className="space-y-3 max-w-2xl">
                  {[
                    { n: "1", title: "Identifikasi jam produktif Anda", desc: "Gunakan riwayat trading (atau data demo) untuk menemukan jam dengan win rate terbaik untuk aset pilihan Anda." },
                    { n: "2", title: "Buat jadwal di mode Schedule", desc: "Set waktu eksekusi, arah (UP/DOWN), aset, dan nominal untuk tiap slot jadwal." },
                    { n: "3", title: "Aktifkan stop loss & stop profit", desc: "Batas harian tetap wajib — bot berhenti otomatis saat target atau batas kerugian tercapai." },
                    { n: "4", title: "Evaluasi mingguan", desc: "Tinjau riwayat order per jam setiap pekan, lalu geser jadwal ke slot yang terbukti paling profitabel." },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                      <div className="w-8 h-8 min-w-[32px] rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f0fdf4] flex items-center justify-center text-[12px] font-bold text-[#0f766e]">{s.n}</div>
                      <div className="pt-0.5">
                        <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <InfoBox icon="🤖" title="Alternatif: biarkan AI yang memilih momen">
                  Tidak mau pusing soal jam? Mode AI Signal menganalisis kondisi pasar real-time dan hanya
                  mengeksekusi saat probabilitas mencukupi — apapun jamnya. Baca selengkapnya di artikel{" "}
                  <Link href="/artikel/ai-trading-stockity" className="text-[#047857] underline">AI trading Stockity</Link>.
                </InfoBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar Jam Trading
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Jam berapa paling profit untuk trading di Stockity?", a: "Untuk mayoritas pasangan mata uang: 14.00–17.00 WIB (London buka) dan 19.00–23.00 WIB (overlap London–New York). Namun jam 'terbaik' sesungguhnya adalah jam di mana strategi Anda terbukti punya win rate tertinggi — cek riwayat order Anda." },
                  { q: "Apakah akhir pekan bisa trading di Stockity?", a: "Pasar forex reguler tutup di akhir pekan, namun Stockity menyediakan aset OTC (over-the-counter) yang tetap bisa ditradingkan. Karakter pergerakannya berbeda dari pasar reguler — uji dulu di demo." },
                  { q: "Apakah bot harus dimatikan di jam sepi?", a: "Tidak wajib, tapi bijak membatasi. Alternatifnya gunakan mode Schedule agar bot hanya aktif di jam produktif, atau andalkan stop loss harian sebagai jaring pengaman." },
                  { q: "Bagaimana dampak berita ekonomi terhadap jam trading?", a: "Rilis berita besar (NFP, suku bunga, CPI) menciptakan lonjakan volatilitas beberapa menit — berbahaya untuk prediksi arah jangka pendek. Cek kalender ekonomi dan hindari ±15 menit di sekitar rilis." },
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
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/timeframe-trading-binary-option", title: "Timeframe Trading Binary Option", desc: "Memilih durasi yang tepat untuk strategi Anda" },
                { href: "/artikel/aset-terbaik-trading-stockity", title: "Aset Terbaik Trading Stockity", desc: "Pasangan mata uang & aset paling ramah trader" },
                { href: "/artikel/kalender-ekonomi-binary-option", title: "Kalender Ekonomi", desc: "Jam-jam berita besar yang wajib dihindari (WIB)" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group block bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-4 hover:border-[#10b981]/30 hover:shadow-sm transition-all no-underline">
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-1 group-hover:text-[#047857] transition-colors">{l.title} →</p>
                  <p className="text-[12px] text-[#6b6058]">{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">Trading di Jam Terbaik, Otomatis</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">STC AutoTrade — Mode Schedule Eksekusi Tepat Waktu</p>
              <p className="text-[13px] text-[#6b6058]">Set jadwal sekali, bot yang menjalankan — lengkap dengan stop loss otomatis.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f6f4ef]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#1a1612]/65">© 2026 STC AutoTrade (TechnoAutoTrade) · stcautotrade.id</p>
            <Link href="/" className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
