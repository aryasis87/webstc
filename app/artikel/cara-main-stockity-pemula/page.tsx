/**
 * app/artikel/cara-main-stockity-pemula/page.tsx
 *
 * Target keyword:
 *   Primary  : cara main stockity untuk pemula
 *   Secondary: cara bermain stockity, panduan stockity pemula, cara trading
 *              di stockity, belajar stockity dari nol, tutorial stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Main Stockity untuk Pemula: Panduan Lengkap dari Nol 2026",
  description:
    "Panduan cara main Stockity untuk pemula — daftar akun, memahami antarmuka, order pertama di mode demo, kesalahan yang harus dihindari, hingga trading otomatis dengan robot.",
  keywords: [
    "cara main stockity",
    "cara main stockity untuk pemula",
    "cara bermain stockity",
    "panduan stockity pemula",
    "cara trading di stockity",
    "belajar stockity dari nol",
    "tutorial stockity pemula",
    "cara menggunakan stockity",
    "stockity untuk pemula",
    "cara order di stockity",
    "trading binary option pemula",
    "robot stockity untuk pemula",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-main-stockity-pemula",
  },
  openGraph: {
    title: "Cara Main Stockity untuk Pemula: Panduan Lengkap dari Nol 2026",
    description:
      "Dari daftar akun sampai order pertama — panduan Stockity paling lengkap untuk pemula, termasuk cara trading otomatis dengan robot.",
    url: "https://stcautotrade.id/artikel/cara-main-stockity-pemula",
    type: "article",
    publishedTime: "2026-07-03T00:00:00.000Z",
    modifiedTime: "2026-07-03T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og-image.webp", width: 1200, height: 630, alt: "Cara Main Stockity untuk Pemula — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Main Stockity untuk Pemula: Panduan Lengkap dari Nol 2026",
  description: "Panduan langkah demi langkah bermain Stockity untuk pemula — daftar akun, mode demo, order pertama, dan trading otomatis.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2026-07-03",
  dateModified: "2026-07-03",
  image: "https://stcautotrade.id/og-image.webp",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/cara-main-stockity-pemula" },
  keywords: "cara main stockity, panduan stockity pemula, cara trading di stockity",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Cara Main Stockity untuk Pemula", item: "https://stcautotrade.id/artikel/cara-main-stockity-pemula" },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Main Stockity untuk Pemula",
  description: "Langkah-langkah memulai trading di Stockity dari nol untuk pemula.",
  step: [
    { "@type": "HowToStep", name: "Daftar akun Stockity", text: "Buat akun Stockity.id menggunakan email aktif — bisa langsung melalui aplikasi STC AutoTrade tanpa berpindah aplikasi." },
    { "@type": "HowToStep", name: "Kenali antarmuka trading", text: "Pahami grafik harga, pilihan aset, nominal order, durasi, dan tombol UP/DOWN sebelum melakukan order." },
    { "@type": "HowToStep", name: "Latihan di mode demo", text: "Gunakan saldo virtual di akun demo minimal 7 hari untuk memahami pergerakan pasar tanpa risiko uang asli." },
    { "@type": "HowToStep", name: "Lakukan order pertama", text: "Pilih aset, tentukan nominal kecil, pilih durasi, lalu prediksi arah harga dengan menekan UP atau DOWN." },
    { "@type": "HowToStep", name: "Evaluasi dan disiplin", text: "Catat setiap order, evaluasi win rate, dan tetapkan batas kerugian harian sebelum menambah nominal." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah Stockity cocok untuk pemula?", acceptedAnswer: { "@type": "Answer", text: "Ya. Stockity menyediakan akun demo dengan saldo virtual sehingga pemula bisa belajar tanpa risiko. Mekanisme binary option-nya juga sederhana: cukup memprediksi arah harga naik (UP) atau turun (DOWN) dalam durasi tertentu." } },
    { "@type": "Question", name: "Berapa modal minimal untuk main Stockity?", acceptedAnswer: { "@type": "Answer", text: "Deposit minimum Stockity relatif kecil (mulai puluhan ribu rupiah), namun untuk manajemen risiko yang sehat disarankan mulai dengan Rp 300.000–500.000 dan nominal per order kecil (Rp 14.000)." } },
    { "@type": "Question", name: "Apakah harus jago analisis untuk main Stockity?", acceptedAnswer: { "@type": "Answer", text: "Tidak harus. Pemula bisa mulai dari mode demo sambil belajar, atau menggunakan robot trading seperti STC AutoTrade yang menganalisis pasar secara otomatis melalui mode AI Signal dan Copy Trading." } },
    { "@type": "Question", name: "Berapa lama sebaiknya latihan di akun demo?", acceptedAnswer: { "@type": "Answer", text: "Minimal 7 hari atau sampai win rate Anda konsisten di atas 55–60% dalam beberapa sesi berturut-turut. Jangan terburu-buru pindah ke akun real." } },
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

export default function CaraMainStockityPemulaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
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
              <li className="text-[#1a1612]/70 font-medium">Cara Main Stockity untuk Pemula</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/65">3 Juli 2026</span>
            <span className="text-[12px] text-[#1a1612]/65">·</span>
            <span className="text-[12px] text-[#1a1612]/65">±9 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Cara Main Stockity untuk Pemula:<br className="hidden sm:block" />
            Panduan Lengkap dari Nol
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Baru mengenal <strong className="font-semibold text-[#1a1612]">Stockity</strong> dan bingung harus mulai
            dari mana? Panduan ini membawa Anda dari nol — daftar akun, memahami antarmuka, order pertama di
            mode demo, sampai cara mengotomatiskan trading dengan robot. Ditulis khusus untuk pemula.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Gratis", l: "Akun Demo" },
              { v: "Rp 14rb", l: "Order Minimum" },
              { v: "5 Langkah", l: "Sampai Order Pertama" },
              { v: "Otomatis", l: "Dengan Robot" },
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
              <SectionLabel>01 · Pengenalan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Apa Itu Stockity dan Bagaimana Cara Kerjanya?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  <strong className="text-[#1a1612]">Stockity.id</strong> adalah platform trading binary option
                  yang populer di Indonesia. Mekanismenya sederhana: Anda memprediksi apakah harga sebuah aset
                  (mata uang, komoditas, atau indeks) akan <strong className="text-[#1a1612]">naik (UP)</strong> atau{" "}
                  <strong className="text-[#1a1612]">turun (DOWN)</strong> dalam durasi waktu tertentu — mulai dari
                  1 menit hingga beberapa jam.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Jika prediksi benar, Anda mendapat profit sebesar persentase payout aset tersebut (umumnya
                  70–85% dari nominal order). Jika salah, nominal order hangus. Karena hanya ada dua kemungkinan
                  hasil inilah disebut <em>binary</em> option.
                </p>
                <InfoBox icon="💡" title="Konsep kunci untuk pemula">
                  Anda tidak membeli asetnya — Anda hanya memprediksi arah pergerakan harganya. Itu sebabnya
                  modal kecil pun bisa mulai, tapi disiplin manajemen risiko menjadi sangat penting.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2 ─────────────────────────────────── */}
            <section>
              <SectionLabel>02 · Persiapan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Langkah 1: Daftar Akun Stockity
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Siapkan email aktif", desc: "Gunakan email yang benar-benar Anda akses — verifikasi dan notifikasi penting akan dikirim ke sana." },
                  { n: "2", title: "Daftar melalui aplikasi STC AutoTrade", desc: "Cara termudah: download STC AutoTrade (APK Android atau versi web di stcautotradepro.id), lalu pilih 'Daftar'. Akun Stockity.id dibuat langsung dari aplikasi tanpa berpindah platform." },
                  { n: "3", title: "Verifikasi email", desc: "Buka email konfirmasi dari Stockity dan klik tautan verifikasi untuk mengaktifkan akun." },
                  { n: "4", title: "Login dan pilih mode demo", desc: "Setelah akun aktif, login dan mulai dari akun demo dengan saldo virtual — jangan langsung deposit." },
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
              <p className="text-[13px] text-[#6b6058] mt-4">
                Panduan pendaftaran yang lebih detail bisa dibaca di{" "}
                <Link href="/artikel/cara-daftar-stockity" className="text-[#047857] hover:underline no-underline">artikel cara daftar Stockity</Link>.
              </p>
            </section>

            {/* ── Section 3 ─────────────────────────────────── */}
            <section>
              <SectionLabel>03 · Antarmuka</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Langkah 2: Kenali 5 Elemen Utama Antarmuka Trading
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Sebelum menekan tombol apapun, pahami dulu lima elemen yang akan selalu Anda gunakan:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "📈", title: "Grafik Harga (Chart)", desc: "Menampilkan pergerakan harga aset secara real-time, biasanya dalam bentuk candlestick. Ini dasar dari semua keputusan trading." },
                  { icon: "💱", title: "Pemilih Aset", desc: "Daftar instrumen yang bisa diperdagangkan beserta persentase payout-nya. Pilih aset dengan payout tinggi dan pergerakan yang Anda pahami." },
                  { icon: "💰", title: "Nominal Order", desc: "Jumlah uang yang dipertaruhkan di satu order. Pemula sebaiknya mulai dari nominal terkecil (sekitar Rp 14.000)." },
                  { icon: "⏱️", title: "Durasi (Expiry)", desc: "Batas waktu prediksi Anda — 1 menit, 5 menit, dan seterusnya. Durasi pendek lebih cepat hasilnya tapi lebih sulit diprediksi." },
                  { icon: "🔼", title: "Tombol UP / DOWN", desc: "Eksekusi prediksi Anda. UP jika yakin harga naik saat durasi berakhir, DOWN jika yakin turun." },
                  { icon: "📒", title: "Riwayat Order", desc: "Catatan semua order beserta hasilnya. Pemula wajib rajin membacanya untuk evaluasi." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="text-xl mb-2">{item.icon}</div>
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#6b6058] mt-4">
                Bingung dengan istilah seperti payout, candlestick, atau expiry? Lihat{" "}
                <Link href="/kamus-trading" className="text-[#047857] hover:underline no-underline">kamus istilah trading</Link> kami.
              </p>
            </section>

            {/* ── Section 4 ─────────────────────────────────── */}
            <section>
              <SectionLabel>04 · Praktik</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Langkah 3: Order Pertama Anda (di Mode Demo!)
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Aturan emas pemula: <strong className="text-[#1a1612]">order pertama selalu di mode demo</strong>.
                  Saldo virtual demo menggunakan data pasar nyata, jadi pengalamannya identik dengan akun real —
                  tanpa risiko kehilangan uang.
                </p>
                <div className="space-y-3 max-w-2xl">
                  {[
                    { n: "1", title: "Pilih satu aset saja", desc: "Fokus pada satu aset dulu (misalnya EUR/USD) sampai Anda terbiasa dengan pola pergerakannya." },
                    { n: "2", title: "Pilih durasi 1–5 menit", desc: "Durasi pendek memberi umpan balik cepat sehingga proses belajar lebih efisien." },
                    { n: "3", title: "Amati arah tren sebelum order", desc: "Lihat 10–20 candle terakhir. Apakah harga cenderung naik, turun, atau bergerak menyamping (sideways)?" },
                    { n: "4", title: "Eksekusi UP atau DOWN", desc: "Tekan tombol sesuai prediksi, lalu tunggu durasi berakhir. Apapun hasilnya, catat alasan Anda mengambil posisi itu." },
                    { n: "5", title: "Ulangi minimal 7 hari", desc: "Target: win rate stabil di atas 55–60% sebelum mempertimbangkan akun real." },
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
                <InfoBox icon="🎯" title="Panduan demo lebih lengkap">
                  Kami membahas strategi latihan 7 hari yang terstruktur di artikel{" "}
                  <Link href="/artikel/akun-demo-stockity" className="text-[#047857] underline">akun demo Stockity</Link>.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 5 ─────────────────────────────────── */}
            <section>
              <SectionLabel>05 · Kesalahan Umum</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                5 Kesalahan Pemula yang Paling Sering Menguras Saldo
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "⚠️", title: "Langsung main di akun real", desc: "Tanpa pemahaman pola pasar, akun real hanya mempercepat kerugian. Demo dulu, selalu." },
                  { icon: "⚠️", title: "Nominal terlalu besar", desc: "Order lebih dari 5% saldo dalam satu posisi membuat beberapa loss beruntun langsung memukul modal." },
                  { icon: "⚠️", title: "Balas dendam setelah loss", desc: "Menaikkan nominal secara emosional setelah kalah (revenge trading) adalah penyebab kebangkrutan nomor satu." },
                  { icon: "⚠️", title: "Tidak punya batas harian", desc: "Tanpa stop loss dan stop profit harian, sesi trading tidak pernah 'selesai' — dan keserakahan mengambil alih." },
                  { icon: "⚠️", title: "Terlalu banyak aset sekaligus", desc: "Setiap aset punya karakter berbeda. Pemula yang melompat-lompat antar aset tidak pernah menguasai satu pun." },
                  { icon: "✅", title: "Solusinya: sistem, bukan perasaan", desc: "Trader yang bertahan adalah yang punya aturan tertulis — atau menyerahkan eksekusi ke sistem otomatis yang tidak kenal emosi." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="text-xl mb-2">{item.icon}</div>
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <WarningBox>
                  Trading binary option mengandung risiko kerugian finansial nyata. Jangan pernah menggunakan
                  uang kebutuhan pokok, dana darurat, atau uang pinjaman untuk trading.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 6 ─────────────────────────────────── */}
            <section>
              <SectionLabel>06 · Otomatisasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Langkah Lanjutan: Trading Otomatis dengan Robot
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Setelah memahami dasar-dasarnya, banyak trader pemula terbentur dua masalah yang sama:
                  tidak sempat memantau pasar terus-menerus, dan keputusan yang mudah goyah oleh emosi. Di
                  sinilah <strong className="text-[#1a1612]">robot trading STC AutoTrade</strong> membantu.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Bot terhubung langsung ke akun Stockity Anda dan mengeksekusi strategi secara otomatis — dari
                  sinyal AI, copy trading, hingga indikator teknikal — lengkap dengan stop loss dan stop profit
                  otomatis. Semua fitur juga berjalan penuh di mode demo, jadi Anda bisa mengujinya tanpa risiko.
                </p>
                <InfoBox icon="🤖" title="Gratis untuk member">
                  STC AutoTrade tersedia sebagai APK Android maupun versi web (untuk iPhone, PC, dan Mac) dan
                  gratis untuk member terdaftar. Mulai dari{" "}
                  <Link href="/download" className="text-[#047857] underline">halaman download</Link>.
                </InfoBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>07 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Pemula Stockity
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Apakah Stockity cocok untuk pemula?", a: "Ya. Ada akun demo dengan saldo virtual untuk belajar tanpa risiko, dan mekanisme UP/DOWN-nya mudah dipahami. Namun tetap pahami bahwa trading mengandung risiko finansial." },
                  { q: "Berapa modal minimal untuk mulai?", a: "Deposit minimum Stockity kecil, namun untuk manajemen risiko sehat disarankan Rp 300.000–500.000 dengan nominal order Rp 14.000 per posisi." },
                  { q: "Harus jago analisis teknikal dulu?", a: "Tidak harus. Mulai dari demo sambil belajar dasar-dasarnya, atau gunakan robot seperti STC AutoTrade yang menganalisis pasar otomatis lewat AI Signal dan Copy Trading." },
                  { q: "Berapa lama sampai bisa profit konsisten?", a: "Bervariasi — umumnya butuh minimal beberapa minggu latihan disiplin di demo. Fokus pada proses (win rate dan disiplin), bukan pada kecepatan profit." },
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
                { href: "/artikel/akun-demo-stockity", title: "Akun Demo Stockity", desc: "Cara latihan gratis tanpa modal sebelum ke real" },
                { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Panduan registrasi akun langkah demi langkah" },
                { href: "/artikel/stockity-tidak-bisa-login", title: "Stockity Tidak Bisa Login?", desc: "7 penyebab gagal masuk & cara mengatasinya" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">Mulai Tanpa Risiko</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">STC AutoTrade — Belajar Stockity Lebih Cepat dengan Bot</p>
              <p className="text-[13px] text-[#6b6058]">Semua mode strategi berjalan penuh di akun demo. Gratis untuk member terdaftar.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">Versi Web</a>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f6f4ef]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#1a1612]/65">© 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id</p>
            <Link href="/" className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
