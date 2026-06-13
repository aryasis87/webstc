/**
 * app/faq/page.tsx
 * Halaman FAQ lengkap STC AutoTrade — Server Component
 * Dioptimalkan untuk SEO: h1, h2 per kategori, breadcrumb, structured data
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ STC AutoTrade — Pertanyaan Umum Robot Trading Stockity",
  description:
    "Jawaban lengkap: cara instal STC AutoTrade APK Android, versi web, keamanan akun, modal minimum, strategi, dan cara kerja martingale.",
  keywords: [
    "faq stcautotrade",
    "pertanyaan stc autotrade",
    "cara instal stcautotrade android",
    "stcautotrade web browser",
    "robot stockity aman",
    "modal minimum stcautotrade",
    "martingale stockity",
    "bot trading stockity ios iphone",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/faq",
  },
  openGraph: {
    title: "FAQ STC AutoTrade — Pertanyaan Umum Robot Trading Stockity",
    description:
      "Jawaban lengkap: cara instal, versi web, keamanan akun, modal minimum, dan cara kerja STC AutoTrade.",
    url: "https://stcautotrade.id/faq",
    type: "website",
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "FAQ STC AutoTrade — Pertanyaan Umum Robot Trading Stockity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ STC AutoTrade — Pertanyaan Umum Robot Trading Stockity",
    description:
      "Jawaban lengkap: cara instal, versi web, keamanan akun, modal minimum, dan cara kerja STC AutoTrade.",
    images: ["https://stcautotrade.id/og-image.webp"],
  },
};

/* ── Data FAQ dikelompokkan per kategori ──────────────────────── */

const FAQ_CATEGORIES = [
  {
    id: "umum",
    title: "Tentang STC AutoTrade",
    items: [
      {
        q: "Apa itu STC AutoTrade / StcAutoTrade?",
        a: "STC AutoTrade — juga dikenal sebagai StcAutoTrade, StockAutoTrade, Robot Stockity, atau Auto Stockity — adalah bot trading otomatis untuk platform Stockity.id. Tersedia sebagai APK Android maupun versi web di stcautotradepro.id yang bisa diakses dari browser tanpa instalasi.",
      },
      {
        q: "Apa perbedaan STC AutoTrade, StcAutoTrade, dan StockAutoTrade?",
        a: "Ketiganya merujuk pada produk yang sama. 'STC AutoTrade', 'Stc Auto Trade', 'StcAutoTrade', 'StockAutoTrade', dan 'Stock Auto Trade' adalah variasi penulisan nama brand yang sama — yaitu bot trading otomatis untuk Stockity.id di stcautotrade.id.",
      },
      {
        q: "Apakah Robot Stockity / Auto Stockity sama dengan STC AutoTrade?",
        a: "Ya. 'Robot Stockity', 'Auto Stockity', 'Stockity Auto Trade', dan 'Bot Stockity Otomatis' adalah sebutan populer untuk bot yang sama — STC AutoTrade (StockAutoTrade), tersedia via APK Android (stcautotrade.id) maupun versi web (stcautotradepro.id).",
      },
      {
        q: "Apakah STC AutoTrade gratis?",
        a: "Ya, STC AutoTrade gratis untuk member terdaftar. Akses diberikan melalui sistem whitelist — daftar melalui aplikasi STC AutoTrade atau halaman download kami.",
      },
    ],
  },
  {
    id: "platform",
    title: "Platform & Instalasi",
    items: [
      {
        q: "Apa perbedaan versi APK Android dan versi web?",
        a: "Versi APK diinstal di perangkat Android dan bisa berjalan di background. Versi web (stcautotradepro.id) tidak perlu instalasi — langsung buka di browser, cocok untuk PC, laptop, Mac, dan iPhone. Semua 6 fitur strategi tersedia di kedua versi, tidak ada yang dikurangi.",
      },
      {
        q: "Bagaimana cara menginstal STC AutoTrade di Android?",
        a: "1) Download file APK dari tombol di halaman download. 2) Aktifkan izin 'Instal dari sumber tidak dikenal' di Pengaturan → Keamanan / Privasi Android. 3) Buka file APK yang diunduh dan ikuti instruksi instalasi. 4) Setelah terpasang, buka aplikasi dan daftar akun baru melalui aplikasi. Atau, gunakan versi web langsung di stcautotradepro.id tanpa instalasi.",
      },
      {
        q: "Bagaimana cara menggunakan versi web STC AutoTrade?",
        a: "Buka browser (Chrome, Safari, Firefox, atau browser lainnya) dan kunjungi stcautotradepro.id. Jika belum punya akun Stockity.id, daftar terlebih dahulu melalui web tersebut — prosesnya cepat dan gratis. Setelah akun dibuat, login menggunakan akun Stockity.id. Tidak perlu unduh atau instalasi.",
      },
      {
        q: "Apakah STC AutoTrade tersedia untuk iPhone / iOS?",
        a: "Ya! Pengguna iPhone dan iPad bisa menggunakan STC AutoTrade langsung melalui versi web di stcautotradepro.id — cukup buka di browser Safari atau Chrome tanpa instalasi. Versi APK hanya tersedia untuk Android.",
      },
      {
        q: "Apakah bisa digunakan di PC atau laptop?",
        a: "Bisa. Gunakan versi web di stcautotradepro.id — buka di Chrome, Edge, Firefox, atau browser lainnya di PC/laptop Windows, Mac, atau Linux. Tidak ada perbedaan fitur dengan versi mobile.",
      },
      {
        q: "Versi Android minimum yang diperlukan?",
        a: "STC AutoTrade APK memerlukan Android 8.0 (Oreo) ke atas. Untuk versi web, bisa diakses di browser modern apapun tanpa batasan versi sistem operasi.",
      },
    ],
  },
  {
    id: "akun",
    title: "Akun & Keamanan",
    items: [
      {
        q: "Apakah data akun Stockity.id saya aman?",
        a: "Keamanan data Anda sepenuhnya terlindungi. Password tidak pernah dikirim ke, atau disimpan di server manapun — termasuk server kami. Hanya token autentikasi yang tersimpan, dienkripsi secara lokal langsung di perangkat Anda, baik di APK maupun versi web. Tidak ada pihak ketiga yang bisa mengakses kredensial akun Stockity.id Anda.",
      },
      {
        q: "Bagaimana cara daftar akun baru di Stockity.id melalui STC AutoTrade?",
        a: "Buka aplikasi STC AutoTrade (APK atau versi web), kemudian pilih opsi daftar akun baru. Proses pendaftaran dilakukan langsung melalui aplikasi — cepat, gratis, dan tidak perlu berpindah ke aplikasi atau website lain.",
      },
      {
        q: "Apa yang terjadi jika saya lupa password Stockity?",
        a: "Proses reset password dilakukan langsung di platform Stockity.id — buka website resmi Stockity.id dan gunakan fitur lupa password. STC AutoTrade tidak menyimpan password, sehingga proses reset harus melalui Stockity langsung.",
      },
    ],
  },
  {
    id: "trading",
    title: "Trading & Strategi",
    items: [
      {
        q: "Apa saja mode strategi yang tersedia?",
        a: "STC AutoTrade memiliki 6 mode strategi: (1) Schedule — trading terjadwal berdasarkan waktu; (2) Fastrade — mengikuti momentum pasar cepat; (3) CTC Copy Trading — menyalin sinyal trader lain; (4) AI Signal — sinyal dari algoritma AI real-time; (5) Indicator — berbasis SMA, EMA, dan RSI; (6) Momentum/Candlestick — mengenali pola candle seperti Doji dan Candle Sabit.",
      },
      {
        q: "Apakah bot bisa berjalan 24 jam tanpa pengawasan?",
        a: "Ya. Bot berjalan di server khusus, bukan di perangkat Anda — sehingga tetap aktif 24 jam meski aplikasi ditutup, HP dimatikan, atau koneksi internet Anda terputus. Tidak perlu khawatir soal baterai atau perangkat tetap menyala.",
      },
      {
        q: "Apa itu sistem Martingale di STC AutoTrade?",
        a: "Martingale adalah strategi manajemen risiko di mana nominal order berikutnya disesuaikan setelah loss, sehingga satu kemenangan dapat menutup seluruh kerugian sebelumnya. Di STC AutoTrade, Anda bisa mengatur MAX STEP (hingga berapa langkah kompensasi) dan MULTIPLIER (kelipatan nominal) sendiri sesuai toleransi risiko.",
      },
      {
        q: "Bagaimana cara kerja Stop Loss Otomatis?",
        a: "Anda menentukan batas kerugian maksimal harian dalam rupiah. Ketika total kerugian hari itu mencapai batas yang ditetapkan, bot otomatis berhenti total dan tidak akan membuka order baru sampai hari berikutnya — melindungi saldo tanpa perlu pengawasan.",
      },
      {
        q: "Bagaimana cara kerja Stop Profit Otomatis?",
        a: "Sama seperti Stop Loss, namun untuk keuntungan. Anda menetapkan target profit harian. Saat tercapai, bot berhenti — mengamankan keuntungan dari godaan untuk terus trading yang justru berisiko mengurangi profit.",
      },
      {
        q: "Modal minimum yang disarankan?",
        a: "Tidak ada ketentuan minimum mutlak, namun kami sarankan minimal Rp 500.000 sebagai buffer aman untuk siklus martingale konservatif (nominal awal Rp 14.000, multiplier 2,5×, 3 step). Semakin besar step dan multiplier yang Anda gunakan, semakin besar modal yang diperlukan.",
      },
      {
        q: "Apakah ada mode demo untuk latihan tanpa risiko?",
        a: "Ya. Mode demo tersedia di versi APK maupun versi web. Sangat disarankan untuk menggunakan mode demo minimal 7 hari sebelum beralih ke mode real — untuk memvalidasi strategi dan memahami cara kerja bot tanpa risiko finansial.",
      },
      {
        q: "Apakah perlu pengalaman trading untuk menggunakan STC AutoTrade?",
        a: "Tidak. STC AutoTrade dirancang agar bisa digunakan pemula sekalipun. Mode CTC Copy Trading dan AI Signal khususnya cocok untuk pemula karena tidak memerlukan analisis manual. Namun pemahaman dasar tentang manajemen risiko tetap disarankan.",
      },
    ],
  },
];

/* ── Breadcrumb JSON-LD ────────────────────────────────────────── */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://stcautotrade.id/faq" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

/* ── Page ─────────────────────────────────────────────────────── */

export default function FAQPage() {
  const totalQuestions = FAQ_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[#f9fafb]">
        {/* ── Nav ───────────────────────────────────────────── */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[rgba(26,22,18,0.08)]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
              <Image src="/logo.webp" alt="STC AutoTrade" width={28} height={28} className="rounded-[6px]" />
              <span className="text-sm font-semibold text-[#1a1612]">STC AutoTrade</span>
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1612] text-white text-xs font-semibold rounded-lg hover:bg-[#1a1612]/85 transition-colors no-underline"
            >
              Download
            </Link>
          </div>
        </nav>

        {/* ── Breadcrumb ────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[12px] text-[#1a1612]/40">
              <li><Link href="/" className="hover:text-[#1a1612]/70 transition-colors no-underline">Beranda</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-[#1a1612]/70 font-medium">FAQ</li>
            </ol>
          </nav>
        </div>

        {/* ── Header ────────────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-12">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-3">
            FAQ · {totalQuestions} Pertanyaan
          </p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-4">
            Pertanyaan Umum<br />STC AutoTrade
          </h1>
          <p className="text-[#6b6058] text-base leading-relaxed max-w-xl">
            Jawaban lengkap seputar STC AutoTrade (StcAutoTrade / StockAutoTrade) —
            robot trading otomatis untuk Stockity.id, tersedia sebagai APK Android dan
            versi web di stcautotradepro.id.
          </p>

          {/* Kategori shortcut */}
          <div className="flex flex-wrap gap-2 mt-6">
            {FAQ_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[rgba(26,22,18,0.12)] rounded-lg text-[12px] font-medium text-[#1a1612]/60 hover:border-[#3b82f6]/40 hover:text-[#3b82f6] transition-all no-underline"
              >
                {cat.title}
                <span className="text-[10px] text-[#1a1612]/30">{cat.items.length}</span>
              </a>
            ))}
          </div>
        </header>

        {/* ── FAQ Content ───────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24 space-y-14">
          {FAQ_CATEGORIES.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5 flex items-center gap-3">
                {cat.title}
                <span className="flex-1 h-px bg-[rgba(26,22,18,0.08)]" />
              </h2>
              <FAQAccordion items={cat.items} />
            </section>
          ))}
        </main>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="border-t border-[rgba(26,22,18,0.08)] bg-white py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Siap mencoba STC AutoTrade?</p>
              <p className="text-[13px] text-[#6b6058]">
                Mulai gratis dari mode demo — APK Android atau langsung via browser.
              </p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link
                href="/download"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline"
              >
                Download APK
              </Link>
              <a
                href="https://stcautotradepro.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline"
              >
                Versi Web
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="border-t border-[rgba(26,22,18,0.07)] py-6 bg-[#f9fafb]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
            <p className="text-[11px] text-[#1a1612]/25">
              © 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id
            </p>
            <Link href="/" className="text-[11px] text-[#1a1612]/35 hover:text-[#1a1612]/60 transition-colors no-underline">
              ← Beranda
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}