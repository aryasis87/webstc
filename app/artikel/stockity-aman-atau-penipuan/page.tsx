/**
 * app/artikel/stockity-aman-atau-penipuan/page.tsx
 *
 * Target keyword:
 *   Primary  : stockity aman
 *   Secondary: stockity penipuan atau tidak, stockity scam, review stockity jujur,
 *              apakah stockity aman, stockity terpercaya, stockity.id legit,
 *              bukti stockity membayar, withdraw stockity berhasil,
 *              stockity aman untuk trading, keamanan stockity
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Stockity Aman atau Penipuan? Review Jujur & Faktual 2026",
  description:
    "Apakah Stockity.id aman dan terpercaya? Ulasan jujur dan faktual: keamanan platform, bukti withdraw berhasil, risiko nyata trading binary option, dan cara trading aman di Stockity dengan STC AutoTrade.",
  keywords: [
    "stockity aman",
    "stockity penipuan atau tidak",
    "stockity scam",
    "review stockity jujur",
    "apakah stockity aman",
    "stockity terpercaya",
    "stockity.id legit",
    "bukti stockity membayar",
    "withdraw stockity berhasil",
    "stockity aman untuk trading",
    "keamanan stockity",
    "stockity review indonesia 2026",
    "stockity penipuan",
    "apakah stockity bisa dipercaya",
    "stockity aman atau tidak",
    "trading di stockity aman",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/stockity-aman-atau-penipuan",
  },
  openGraph: {
    title: "Stockity Aman atau Penipuan? Review Jujur & Faktual 2026",
    description:
      "Ulasan jujur Stockity.id — keamanan platform, risiko nyata, bukti withdraw, dan cara trading aman dengan manajemen risiko otomatis.",
    url: "https://stcautotrade.id/artikel/stockity-aman-atau-penipuan",
    type: "article",
    publishedTime: "2025-05-21T00:00:00.000Z",
    modifiedTime: "2026-05-21T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [
      {
        url: "https://stcautotrade.id/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Stockity Aman atau Penipuan — Review Jujur 2026",
      },
    ],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stockity Aman atau Penipuan? Review Jujur & Faktual 2026",
  description:
    "Ulasan faktual Stockity.id — keamanan platform, risiko trading binary option, dan cara meminimalkan risiko dengan manajemen risiko otomatis.",
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
    "@id": "https://stcautotrade.id/artikel/stockity-aman-atau-penipuan",
  },
  keywords: "stockity aman, stockity penipuan, review stockity jujur, apakah stockity aman",
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
      name: "Stockity Aman atau Penipuan",
      item: "https://stcautotrade.id/artikel/stockity-aman-atau-penipuan",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah Stockity aman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stockity.id adalah platform trading binary option yang beroperasi untuk pasar Indonesia. Platform ini dapat digunakan untuk trading, namun perlu dipahami bahwa trading binary option sendiri mengandung risiko kerugian finansial yang signifikan. Keamanan platform berbeda dari keamanan investasi — platform bisa 'aman' dari sisi teknis, namun trading di dalamnya tetap berisiko.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Stockity penipuan (scam)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak ada bukti bahwa Stockity.id adalah scam dalam artian platform tidak membayar. Namun seperti semua platform binary option, risiko kerugian dari trading itu sendiri sangat nyata. Sebagian besar trader binary option mengalami kerugian dalam jangka panjang — ini fakta industri, bukan penipuan platform.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Stockity membayar withdrawal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Berdasarkan laporan pengguna yang beredar, Stockity.id memproses withdrawal. Namun pengalaman bisa bervariasi tergantung metode, nominal, dan kelengkapan verifikasi akun. Pastikan verifikasi KYC sudah lengkap sebelum melakukan withdrawal.",
      },
    },
    {
      "@type": "Question",
      name: "Apa risiko terbesar trading di Stockity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Risiko terbesar adalah kerugian dari trading itu sendiri — bukan dari platform. Binary option memiliki struktur yang membuat mayoritas trader rugi dalam jangka panjang jika tidak menggunakan manajemen risiko yang ketat. Risiko tambahan termasuk overtrading, tidak menggunakan stop loss, dan menggunakan modal yang tidak siap hilang.",
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

function FactBox({ verdict, color, label, children }: { verdict: string; color: string; label: string; children: React.ReactNode }) {
  return (
    <div className={`border rounded-xl p-5 ${color}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{verdict}</span>
        <span className="text-[11px] font-bold uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-[13px] leading-relaxed">{children}</p>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function StockityAmanAtauPenipuanPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Stockity Aman atau Penipuan</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ──────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#fef3c7] text-[#92400e] text-[11px] font-semibold rounded-full">Review Jujur</span>
            <span className="text-[12px] text-[#1a1612]/35">21 Mei 2026</span>
            <span className="text-[12px] text-[#1a1612]/35">·</span>
            <span className="text-[12px] text-[#1a1612]/35">±12 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Stockity Aman atau Penipuan?<br className="hidden sm:block" />
            Review Jujur & Faktual 2026
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Pertanyaan paling sering ditanyakan sebelum mulai:{" "}
            <strong className="font-semibold text-[#1a1612]">apakah Stockity aman</strong>?
            Artikel ini menjawab secara faktual — membedakan antara{" "}
            <strong className="font-semibold text-[#1a1612]">keamanan platform</strong> dan
            risiko inheren dari trading binary option itu sendiri.
          </p>

          <WarningBox>
            <strong>Catatan editorial:</strong> Artikel ini ditulis dari perspektif pengguna
            STC AutoTrade yang menggunakan Stockity.id sebagai platform trading. Kami
            tidak berafiliasi resmi dengan Stockity.id dan tidak memberikan rekomendasi
            investasi. Lakukan riset mandiri sebelum mengambil keputusan finansial.
          </WarningBox>
        </header>

        {/* ── Article Body ────────────────────────────────── */}
        <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <article className="space-y-14">

            {/* ── 01: Jawaban Langsung ──────────────────── */}
            <section>
              <SectionLabel>01 · Jawaban Langsung</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Stockity Aman atau Penipuan? Jawaban Singkat
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Untuk menjawab pertanyaan ini dengan benar, kita perlu memisahkan dua hal
                  yang berbeda: <strong className="text-[#1a1612]">keamanan platform Stockity.id</strong>{" "}
                  versus <strong className="text-[#1a1612]">risiko trading binary option</strong> itu sendiri.
                  Keduanya sering dicampur aduk dan menyebabkan kesalahpahaman.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FactBox
                    verdict="✅"
                    color="bg-[#f0fdf4] border-[#bbf7d0] text-[#14532d]"
                    label="Platform Stockity"
                  >
                    Stockity.id adalah platform trading binary option yang beroperasi untuk
                    pasar Indonesia. Platform ini dapat diakses, memproses deposit, dan
                    berdasarkan laporan pengguna — memproses withdrawal. Tidak ada bukti
                    konkret bahwa platform ini adalah scam dalam artian tidak membayar.
                  </FactBox>

                  <FactBox
                    verdict="⚠️"
                    color="bg-[#fffbeb] border-[#fde68a] text-[#92400e]"
                    label="Risiko Trading Binary Option"
                  >
                    Trading binary option — di platform manapun termasuk Stockity —
                    mengandung risiko kerugian finansial yang sangat tinggi. Mayoritas
                    trader binary option mengalami kerugian dalam jangka panjang. Ini
                    adalah sifat inheren instrumen, bukan kejaahatan platform.
                  </FactBox>
                </div>

                <InfoBox icon="🔍" title="Perbedaan krusial yang sering disalahpahami">
                  "Scam" berarti platform tidak membayar atau menipu secara aktif.
                  "Risiko tinggi" berarti instrumen trading itu sendiri sulit menghasilkan
                  profit konsisten. Stockity masuk kategori kedua — ini platform trading nyata
                  dengan risiko trading yang nyata. Berbeda dengan platform yang memang
                  dirancang untuk tidak membayar.
                </InfoBox>
              </div>
            </section>

            {/* ── 02: Aspek Keamanan Platform ───────────── */}
            <section>
              <SectionLabel>02 · Keamanan Platform</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Aspek Keamanan Platform Stockity.id
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Berikut penilaian faktual terhadap berbagai aspek keamanan Stockity.id
                  berdasarkan informasi yang tersedia:
                </p>

                <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-[12px]">
                      <thead>
                        <tr className="bg-[#f9fafb] border-b border-[rgba(26,22,18,0.07)]">
                          <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-[#1a1612]/50 uppercase tracking-wider">Aspek</th>
                          <th className="text-center px-4 py-3.5 text-[11px] font-semibold text-[#1a1612]/50 uppercase tracking-wider">Status</th>
                          <th className="text-left px-5 py-3.5 text-[11px] font-semibold text-[#1a1612]/50 uppercase tracking-wider">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(26,22,18,0.05)]">
                        {[
                          { aspek: "Aksesibilitas Platform", status: "✅ Aktif", ket: "Stockity.id dapat diakses, login, dan dioperasikan secara normal.", bg: false },
                          { aspek: "Proses Deposit", status: "✅ Berfungsi", ket: "Deposit melalui berbagai metode pembayaran lokal berfungsi.", bg: false },
                          { aspek: "Proses Withdrawal", status: "⚠️ Bervariasi", ket: "Sebagian besar berhasil, namun bisa bergantung pada kelengkapan KYC dan metode.", bg: false },
                          { aspek: "Keamanan Akun (Login)", status: "✅ Standar", ket: "Sistem login dengan email dan password. Verifikasi email diperlukan.", bg: false },
                          { aspek: "Enkripsi Data", status: "✅ HTTPS", ket: "Website menggunakan HTTPS — komunikasi terenkripsi.", bg: false },
                          { aspek: "Transparansi Payout", status: "⚠️ Standar Industri", ket: "Payout dipublikasikan per aset namun bisa berubah tergantung kondisi.", bg: false },
                          { aspek: "Regulasi Resmi", status: "ℹ️ Perlu Diverifikasi", ket: "Verifikasi regulasi terkini langsung di platform Stockity.id.", bg: false },
                        ].map((row) => (
                          <tr key={row.aspek} className="hover:bg-[#f9fafb]">
                            <td className="px-5 py-3.5 font-medium text-[#1a1612]">{row.aspek}</td>
                            <td className="px-4 py-3.5 text-center font-medium text-[#1a1612]">{row.status}</td>
                            <td className="px-5 py-3.5 text-[#6b6058]">{row.ket}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 03: Risiko Nyata ──────────────────────── */}
            <section>
              <SectionLabel>03 · Risiko Nyata</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Risiko Nyata yang Perlu Dipahami Sebelum Trading di Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Inilah yang lebih penting dari pertanyaan "apakah Stockity scam" —
                  memahami risiko nyata yang mengintai setiap trader binary option.
                  Risiko ini ada di semua platform binary option, termasuk Stockity:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      n: "01",
                      judul: "Struktur profit yang tidak simetris",
                      detail: "Di binary option, jika Anda menang mendapat profit 70–90%. Jika kalah, Anda kehilangan 100% dari yang ditaruhkan. Ini berarti win rate minimal ~53–55% diperlukan hanya untuk break even. Ini struktur yang menantang secara matematis.",
                      level: "Kritis",
                      color: "text-rose-600",
                    },
                    {
                      n: "02",
                      judul: "Bias emosional saat trading manual",
                      detail: "Fear dan greed adalah musuh terbesar trader. Panik saat rugi memicu overtrading, euforia saat profit memicu pengambilan risiko berlebihan. Tanpa sistem manajemen risiko otomatis, ini yang menghancurkan kebanyakan trader.",
                      level: "Tinggi",
                      color: "text-rose-600",
                    },
                    {
                      n: "03",
                      judul: "Tidak ada stop loss → modal habis cepat",
                      detail: "Trading tanpa stop loss adalah cara paling cepat kehilangan seluruh modal. Satu sesi trading buruk bisa menguras akun jika tidak ada batas kerugian harian yang ditegakkan secara konsisten.",
                      level: "Tinggi",
                      color: "text-amber-600",
                    },
                    {
                      n: "04",
                      judul: "Modal dari dana kebutuhan pokok",
                      detail: "Menggunakan uang sewa, kebutuhan keluarga, atau pinjaman untuk trading adalah keputusan finansial berbahaya. Stres finansial memperburuk pengambilan keputusan dan meningkatkan risiko kerugian.",
                      level: "Tinggi",
                      color: "text-amber-600",
                    },
                    {
                      n: "05",
                      judul: "Ekspektasi profit tidak realistis",
                      detail: "Meyakini bisa 'kaya cepat' dari trading binary option adalah ekspektasi yang sering berujung kekecewaan. Trading yang konsisten menghasilkan profit memerlukan sistem, disiplin, dan waktu — bukan keberuntungan sesaat.",
                      level: "Menengah",
                      color: "text-blue-600",
                    },
                  ].map((item) => (
                    <div key={item.n} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4 flex gap-4">
                      <div className={`text-[18px] font-[family-name:var(--font-dm-serif)] ${item.color} flex-shrink-0 w-8`}>{item.n}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <h3 className="text-[13px] font-semibold text-[#1a1612]">{item.judul}</h3>
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${item.color === "text-rose-600" ? "bg-rose-50 text-rose-600" : item.color === "text-amber-600" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"}`}>
                            Risiko {item.level}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <WarningBox>
                  <strong>Data industri global:</strong> Studi independen menunjukkan bahwa
                  70–80% trader retail yang menggunakan binary option mengalami kerugian neto
                  dalam jangka panjang. Ini bukan angka yang dibuat-buat — ini adalah realita
                  yang perlu dipahami sebelum memutuskan untuk trading.
                </WarningBox>
              </div>
            </section>

            {/* ── 04: Cara Trading Aman di Stockity ─────── */}
            <section>
              <SectionLabel>04 · Cara Aman</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Trading Aman di Stockity: Manajemen Risiko Wajib
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Trader yang berhasil mempertahankan saldo di Stockity bukan karena mereka
                  lebih beruntung — mereka punya{" "}
                  <strong className="text-[#1a1612]">sistem manajemen risiko yang konsisten</strong>.
                  Berikut prinsip-prinsip yang membedakan trader yang bertahan dari yang tidak:
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      prinsip: "Gunakan Stop Loss SETIAP SESI",
                      icon: "🛡️",
                      priority: "Wajib",
                      priorityColor: "bg-rose-50 text-rose-700 border-rose-200",
                      desc: "Tidak ada alasan untuk tidak menggunakan stop loss. Tetapkan batas kerugian maksimal harian (20–30% modal) dan patuhi — otomatis via STC AutoTrade atau manual.",
                      action: "Di STC AutoTrade: aktifkan Stop Loss di menu manajemen risiko sebelum start bot.",
                    },
                    {
                      prinsip: "Modal Hanya dari Dana Bebas",
                      icon: "💰",
                      priority: "Wajib",
                      priorityColor: "bg-rose-50 text-rose-700 border-rose-200",
                      desc: "Gunakan HANYA uang yang sudah Anda relakan untuk hilang sepenuhnya. Tidak ada yang namanya 'pinjaman modal trading' yang aman — ini jalan menuju masalah finansial serius.",
                      action: "Aturan: jika uang ini hilang, kehidupan Anda tidak berubah. Kalau tidak, jangan gunakan.",
                    },
                    {
                      prinsip: "Mulai dari Mode Demo",
                      icon: "🎮",
                      priority: "Sangat Disarankan",
                      priorityColor: "bg-amber-50 text-amber-700 border-amber-200",
                      desc: "Demo di STC AutoTrade menggunakan data pasar Stockity yang nyata. Ini cara terbaik memvalidasi strategi tanpa risiko modal. Minimal 7 hari demo sebelum ke real.",
                      action: "Aktifkan mode demo di STC AutoTrade → jalankan 7–14 hari → evaluasi win rate.",
                    },
                    {
                      prinsip: "Gunakan Bot untuk Konsistensi",
                      icon: "🤖",
                      priority: "Sangat Disarankan",
                      priorityColor: "bg-amber-50 text-amber-700 border-amber-200",
                      desc: "Robot trading seperti STC AutoTrade menghilangkan bias emosional dari persamaan. Bot tidak panik, tidak serakah, tidak lupa stop loss. Konsistensi ini adalah keunggulan terbesar bot vs trading manual.",
                      action: "Gunakan STC AutoTrade gratis — 6 strategi + stop loss & profit otomatis.",
                    },
                    {
                      prinsip: "Mulai Nominal Kecil",
                      icon: "📊",
                      priority: "Disarankan",
                      priorityColor: "bg-blue-50 text-blue-700 border-blue-200",
                      desc: "Mulai dengan nominal terkecil yang diperbolehkan platform. Kenali pola pasar Stockity, pahami perilaku bot Anda, sebelum menaikkan nominal secara bertahap.",
                      action: "Nominal awal: Rp 14.000–25.000. Naikan setelah 30+ hari konsisten.",
                    },
                    {
                      prinsip: "Tetapkan Target Profit Harian",
                      icon: "🎯",
                      priority: "Disarankan",
                      priorityColor: "bg-blue-50 text-blue-700 border-blue-200",
                      desc: "Stop profit otomatis mencegah overtrading — keserakahan yang mengikis profit yang sudah terkumpul. Setelah target tercapai, berhenti. Bot akan melakukan ini otomatis di STC AutoTrade.",
                      action: "Set stop profit = 2–3× nilai stop loss Anda.",
                    },
                  ].map((item) => (
                    <div key={item.prinsip} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <h3 className="text-[13px] font-semibold text-[#1a1612]">{item.prinsip}</h3>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${item.priorityColor}`}>
                          {item.priority}
                        </span>
                      </div>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed mb-3">{item.desc}</p>
                      <div className="bg-[#f9fafb] rounded-lg px-3 py-2 border border-[rgba(26,22,18,0.06)]">
                        <p className="text-[11px] text-[#1a1612]/50">→ {item.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 05: Tanda Waspada ─────────────────────── */}
            <section>
              <SectionLabel>05 · Waspada</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Hal yang Perlu Diwaspadai Saat Trading di Stockity
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Ada beberapa hal di luar platform itu sendiri yang perlu diwaspadai
                  oleh pengguna Stockity:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      judul: "Penipuan atas nama Stockity atau STC AutoTrade",
                      desc: "Ada oknum yang mengaku sebagai admin Stockity atau STC AutoTrade di WhatsApp, Telegram, atau media sosial, menawarkan akses berbayar, sinyal berbayar, atau 'jaminan profit'. Ini penipuan — STC AutoTrade gratis, tidak ada admin yang menghubungi Anda duluan.",
                      icon: "🚨",
                    },
                    {
                      judul: "APK STC AutoTrade dari sumber tidak resmi",
                      desc: "APK STC AutoTrade hanya dari satu sumber resmi: stcautotrade.id. APK dari link WhatsApp, Telegram, atau website lain berpotensi berbahaya — bisa berisi malware atau mencuri kredensial akun Anda.",
                      icon: "⛔",
                    },
                    {
                      judul: "Klaim 'robot 100% profit tanpa risiko'",
                      desc: "Tidak ada robot trading yang menjamin profit 100%. Siapapun yang mengklaim demikian — atas nama Stockity, STC AutoTrade, atau platform lainnya — adalah penipuan. Trading selalu ada risiko kerugian.",
                      icon: "❌",
                    },
                    {
                      judul: "'Sistem member berbayar' untuk akses sinyal Stockity",
                      desc: "Jika ada yang menawarkan grup VIP, sinyal Stockity berbayar, atau 'modal dikelola' dengan imbalan sebagian profit — verifikasi dengan sangat hati-hati. Banyak skema demikian yang berujung kerugian bagi 'investor'.",
                      icon: "🔴",
                    },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-5 py-4 flex gap-3">
                      <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{item.judul}</h3>
                        <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <InfoBox icon="🔒" title="Cara verifikasi keaslian STC AutoTrade">
                  Satu-satunya sumber resmi STC AutoTrade: domain{" "}
                  <strong>stcautotrade.id</strong> (APK Android) dan{" "}
                  <strong>stcautotradepro.id</strong> (versi web). Tidak ada channel Telegram
                  berbayar, tidak ada grup WhatsApp resmi yang meminta pembayaran, tidak ada
                  admin yang menghubungi Anda secara proaktif.
                </InfoBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum: Keamanan Stockity
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Apakah Stockity scam (penipuan)?",
                    a: "Tidak ada bukti konkret bahwa Stockity.id adalah scam dalam artian platform sengaja tidak membayar. Platform ini beroperasi dan memproses transaksi. Namun perlu dipahami: risiko kerugian dari trading binary option itu sendiri sangat nyata dan tinggi — ini berbeda dengan penipuan platform.",
                  },
                  {
                    q: "Apakah Stockity membayar withdrawal?",
                    a: "Berdasarkan laporan pengguna yang beredar, Stockity.id memproses withdrawal. Namun pengalaman bisa bervariasi. Pastikan verifikasi KYC akun sudah lengkap dan ikuti prosedur withdrawal sesuai ketentuan platform untuk kelancaran proses.",
                  },
                  {
                    q: "Bagaimana cara memastikan trading di Stockity aman?",
                    a: "Gunakan selalu stop loss (otomatis via STC AutoTrade atau manual). Gunakan hanya modal yang siap Anda tanggung risikonya. Mulai dari mode demo minimal 7 hari. Jangan pernah menggunakan dana pinjaman atau kebutuhan pokok untuk trading.",
                  },
                  {
                    q: "Apakah STC AutoTrade aman untuk akun Stockity saya?",
                    a: "Ya. Password akun Stockity.id Anda tidak pernah dikirim atau disimpan di server STC AutoTrade. Hanya token autentikasi yang tersimpan secara lokal dan terenkripsi di perangkat Anda. STC AutoTrade tidak bisa mengakses atau mengubah data akun Anda selain mengeksekusi order.",
                  },
                  {
                    q: "Apa perbedaan risiko Stockity dan investasi konvensional?",
                    a: "Binary option (termasuk di Stockity) adalah instrumen jangka sangat pendek dengan payout asimetris — berbeda jauh dari investasi konvensional seperti reksa dana atau saham. Volatilitas jauh lebih tinggi, dan kerugian total per transaksi adalah kemungkinan nyata. Pastikan memahami ini sebelum mulai.",
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
              <SectionLabel>07 · Kesimpulan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kesimpulan: Stockity Aman — Trading Binary Option Tetap Berisiko
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  <strong className="text-[#1a1612]">Platform Stockity.id dapat digunakan</strong> —
                  tidak ada bukti konkret bahwa ini adalah scam yang tidak membayar.
                  Yang perlu dipahami adalah risiko inheren dari trading binary option itu
                  sendiri: mayoritas trader mengalami kerugian jika tidak menggunakan
                  manajemen risiko yang ketat dan konsisten.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Jika Anda memutuskan untuk trading di Stockity, gunakan sistem manajemen
                  risiko otomatis — STC AutoTrade menyediakan stop loss, stop profit, dan
                  strategi terkelola secara gratis, yang secara signifikan mengurangi
                  risiko kerugian tak terkendali.
                </p>
                <WarningBox>
                  <strong>Disclaimer penting:</strong> Artikel ini bukan rekomendasi untuk
                  mulai trading. Trading binary option mengandung risiko kerugian finansial
                  yang sangat tinggi. Tidak ada jaminan profit. Lakukan riset mandiri,
                  konsultasikan dengan ahli finansial jika perlu, dan gunakan hanya dana
                  yang siap Anda tanggung risikonya sepenuhnya.
                </WarningBox>
              </div>
            </section>

          </article>

          {/* ── Internal Links ────────────────────────────── */}
          <div className="mt-14 pt-10 border-t border-[rgba(26,22,18,0.08)]">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/35 mb-5">Artikel Terkait</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Panduan registrasi akun Stockity gratis" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal minimum yang dibutuhkan?" },
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Auto trade dengan manajemen risiko otomatis" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#3b82f6] mb-1.5">Trading dengan Manajemen Risiko Otomatis</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Minimalkan Risiko dengan STC AutoTrade</p>
              <p className="text-[13px] text-[#6b6058]">Stop loss, stop profit, dan 6 strategi — gratis. Mulai dari mode demo tanpa risiko finansial.</p>
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