/**
 * app/artikel/cara-verifikasi-akun-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : cara verifikasi akun stockity
 *   Secondary: verifikasi stockity, kyc stockity, verifikasi identitas
 *              stockity, dokumen verifikasi stockity, stockity tidak bisa wd
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cara Verifikasi Akun Stockity (KYC): Panduan Lengkap & Syarat 2026",
  description:
    "Panduan verifikasi akun Stockity langkah demi langkah: dokumen yang dibutuhkan, cara upload, berapa lama prosesnya, penyebab ditolak, dan kenapa KYC wajib sebelum withdraw.",
  keywords: [
    "cara verifikasi akun stockity",
    "verifikasi stockity",
    "kyc stockity",
    "verifikasi identitas stockity",
    "dokumen verifikasi stockity",
    "verifikasi stockity berapa lama",
    "verifikasi stockity ditolak",
    "stockity tidak bisa withdraw",
    "upload ktp stockity",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/cara-verifikasi-akun-stockity",
    languages: {
      "id-ID": "https://stcautotrade.id/artikel/cara-verifikasi-akun-stockity",
      en: "https://stcautotrade.id/en/articles/stockity-account-verification",
      ru: "https://stcautotrade.id/ru/articles/stockity-account-verification",
      "x-default": "https://stcautotrade.id/artikel/cara-verifikasi-akun-stockity",
    },
  },
  openGraph: {
    title: "Cara Verifikasi Akun Stockity (KYC): Panduan Lengkap & Syarat 2026",
    description:
      "Dokumen yang dibutuhkan, langkah upload, durasi proses, penyebab ditolak, dan kenapa KYC wajib sebelum withdraw Stockity.",
    url: "https://stcautotrade.id/artikel/cara-verifikasi-akun-stockity",
    type: "article",
    publishedTime: "2026-07-04T00:00:00.000Z",
    modifiedTime: "2026-07-04T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og?t=Cara%20Verifikasi%20Akun%20Stockity%20(KYC)%3A%20Panduan%20Lengkap%20%26%20Syarat%202026&l=id", width: 1200, height: 630, alt: "Cara Verifikasi Akun Stockity — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Verifikasi Akun Stockity (KYC): Panduan Lengkap & Syarat 2026",
  description: "Panduan verifikasi identitas (KYC) akun Stockity: dokumen, langkah upload, durasi, penyebab ditolak, dan kaitannya dengan withdraw.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  image: "https://stcautotrade.id/og?t=Cara%20Verifikasi%20Akun%20Stockity%20(KYC)%3A%20Panduan%20Lengkap%20%26%20Syarat%202026&l=id",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/cara-verifikasi-akun-stockity" },
  keywords: "cara verifikasi akun stockity, kyc stockity, verifikasi identitas stockity",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Cara Verifikasi Akun Stockity", item: "https://stcautotrade.id/artikel/cara-verifikasi-akun-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah verifikasi akun Stockity wajib?", acceptedAnswer: { "@type": "Answer", text: "Untuk trading dan deposit umumnya bisa dilakukan tanpa verifikasi penuh, tetapi untuk WITHDRAW (penarikan dana) verifikasi identitas (KYC) wajib diselesaikan lebih dulu. Tanpa KYC, permintaan penarikan tidak akan diproses." } },
    { "@type": "Question", name: "Berapa lama proses verifikasi Stockity?", acceptedAnswer: { "@type": "Answer", text: "Umumnya beberapa jam hingga 1–3 hari kerja tergantung antrean dan kualitas dokumen yang diunggah. Dokumen yang jelas dan sesuai ketentuan biasanya diproses lebih cepat." } },
    { "@type": "Question", name: "Dokumen apa saja yang dibutuhkan untuk KYC Stockity?", acceptedAnswer: { "@type": "Answer", text: "Dokumen identitas resmi yang masih berlaku — e-KTP (untuk WNI) atau paspor — plus foto selfie sesuai instruksi. Jika deposit memakai kartu bank, kadang diminta konfirmasi kepemilikan kartu." } },
    { "@type": "Question", name: "Kenapa verifikasi Stockity saya ditolak?", acceptedAnswer: { "@type": "Answer", text: "Penyebab paling umum: foto buram/terpotong, data akun tidak sama dengan data di dokumen, dokumen kedaluwarsa, atau usia belum memenuhi syarat. Perbaiki penyebabnya lalu ajukan ulang." } },
    { "@type": "Question", name: "Apakah perlu verifikasi ulang jika pakai robot trading?", acceptedAnswer: { "@type": "Answer", text: "Tidak. Robot seperti STC AutoTrade hanya terhubung ke akun Stockity Anda untuk eksekusi order — status verifikasi mengikuti akun Stockity itu sendiri dan tidak berubah karena pemakaian bot." } },
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

export default function CaraVerifikasiAkunStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Cara Verifikasi Akun Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/65">4 Juli 2026</span>
            <span className="text-[12px] text-[#1a1612]/65">·</span>
            <span className="text-[12px] text-[#1a1612]/65">±6 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Cara Verifikasi Akun Stockity:<br className="hidden sm:block" />
            Panduan KYC Sampai Lolos
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Banyak trader baru sadar pentingnya verifikasi justru saat{" "}
            <strong className="font-semibold text-[#1a1612]">withdraw pertama ditolak</strong>. Artikel ini
            membahas dokumen yang dibutuhkan, langkah upload yang benar, durasi proses, dan penyebab
            verifikasi ditolak — supaya dana Anda bisa ditarik tanpa hambatan.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "e-KTP", l: "Dokumen Utama" },
              { v: "1×", l: "Cukup Sekali Seumur Akun" },
              { v: "±1–3 hari", l: "Durasi Umum" },
              { v: "Wajib", l: "Sebelum Withdraw" },
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
                Apa Itu Verifikasi (KYC) dan Kenapa Wajib?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  KYC (<em>Know Your Customer</em>) adalah proses pencocokan identitas pemilik akun dengan
                  dokumen resmi. Ini standar industri keuangan global untuk mencegah pencucian uang dan
                  pemakaian identitas orang lain — bukan aturan khusus Stockity.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Konsekuensinya sederhana: Anda bisa{" "}
                  <Link href="/artikel/cara-daftar-stockity" className="text-[#047857] underline">daftar</Link>,{" "}
                  <Link href="/artikel/cara-deposit-stockity" className="text-[#047857] underline">deposit</Link>, dan
                  trading lebih dulu — tetapi{" "}
                  <strong className="text-[#1a1612]">penarikan dana tidak akan diproses sebelum KYC selesai</strong>.
                  Karena itu waktu terbaik verifikasi adalah segera setelah daftar, bukan saat sudah ingin
                  menarik profit.
                </p>
                <InfoBox icon="🔐" title="Data Anda dipakai untuk apa?">
                  Dokumen identitas hanya digunakan untuk pencocokan kepemilikan akun. Pastikan Anda selalu
                  mengunggah dokumen lewat situs/aplikasi resmi Stockity — jangan pernah mengirim KTP lewat
                  chat ke pihak yang mengaku "admin".
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2 ─────────────────────────────────── */}
            <section>
              <SectionLabel>02 · Persiapan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Dokumen &amp; Syarat yang Perlu Disiapkan
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🪪", title: "Dokumen identitas resmi", desc: "e-KTP untuk WNI (atau paspor). Harus masih berlaku, fisik asli — bukan fotokopi atau hasil scan yang diedit." },
                  { icon: "🤳", title: "Foto selfie", desc: "Umumnya diminta selfie memegang dokumen atau selfie sesuai instruksi di halaman verifikasi. Wajah dan dokumen harus terlihat jelas." },
                  { icon: "📇", title: "Data akun yang konsisten", desc: "Nama, tanggal lahir, dan data profil Stockity harus SAMA PERSIS dengan yang tertera di dokumen. Selisih satu huruf pun bisa jadi alasan penolakan." },
                  { icon: "💳", title: "Konfirmasi metode pembayaran", desc: "Jika deposit memakai kartu bank, kadang diminta bukti kepemilikan kartu (foto kartu dengan sebagian digit ditutup). Deposit e-wallet umumnya tidak perlu." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                    <div className="text-xl mb-2">{item.icon}</div>
                    <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                    <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 3 ─────────────────────────────────── */}
            <section>
              <SectionLabel>03 · Langkah</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Langkah-Langkah Verifikasi Akun Stockity
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Lengkapi profil akun", desc: "Login ke Stockity → buka menu Profil. Isi nama lengkap, tanggal lahir, dan nomor telepon sesuai dokumen identitas. Konfirmasi email dan nomor HP jika diminta." },
                  { n: "2", title: "Buka bagian Verifikasi", desc: "Di halaman profil/pengaturan akun terdapat bagian verifikasi identitas. Stockity juga biasanya menampilkan permintaan verifikasi otomatis saat Anda mengajukan penarikan pertama." },
                  { n: "3", title: "Upload dokumen identitas", desc: "Foto e-KTP dengan pencahayaan cukup: seluruh sisi dokumen terlihat, teks terbaca, tanpa pantulan cahaya. Gunakan kamera belakang, bukan hasil screenshot." },
                  { n: "4", title: "Upload selfie sesuai instruksi", desc: "Ikuti instruksi di layar (selfie biasa atau selfie memegang dokumen). Jangan memakai topi/kacamata gelap, pastikan wajah tidak terpotong." },
                  { n: "5", title: "Kirim & tunggu review", desc: "Setelah dikirim, status akan berubah menjadi 'sedang ditinjau'. Umumnya selesai dalam beberapa jam hingga 1–3 hari kerja. Anda tetap bisa trading selama menunggu." },
                  { n: "6", title: "Cek status & selesai", desc: "Jika disetujui, status akun menjadi terverifikasi dan penarikan dana terbuka. Jika ditolak, baca alasannya, perbaiki, lalu ajukan ulang." },
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
              <div className="mt-4">
                <InfoBox icon="⏱️" title="Verifikasi duluan, withdraw belakangan">
                  Selesaikan KYC segera setelah daftar — prosesnya berjalan sementara Anda latihan di{" "}
                  <Link href="/artikel/akun-demo-stockity" className="text-[#047857] underline">akun demo</Link>.
                  Saat profit pertama siap ditarik, tidak ada lagi antrean verifikasi yang menahan dana Anda.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 4 ─────────────────────────────────── */}
            <section>
              <SectionLabel>04 · Penolakan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Penyebab Verifikasi Ditolak &amp; Cara Memperbaikinya
              </h2>
              <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Penyebab Umum</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Solusi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Foto buram, gelap, atau terpotong", "Foto ulang dengan kamera belakang, pencahayaan alami, seluruh dokumen masuk frame"],
                      ["Data profil ≠ data dokumen", "Samakan nama & tanggal lahir di profil Stockity dengan e-KTP (perhatikan ejaan persis)"],
                      ["Dokumen kedaluwarsa / tidak didukung", "Gunakan e-KTP atau paspor yang masih berlaku — SIM/kartu pelajar umumnya tidak diterima"],
                      ["Pantulan cahaya menutupi teks", "Hindari lampu langsung dari atas; foto di dekat jendela dengan sudut miring tipis"],
                      ["Usia belum memenuhi syarat", "Trading memiliki batas usia minimal — jika belum memenuhi, akun tidak dapat diverifikasi"],
                      ["Akun ganda (satu orang > 1 akun)", "Gunakan hanya satu akun per identitas; akun duplikat berisiko diblokir permanen"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                        <td className="px-4 py-3 font-medium text-[#1a1612]">{row[0]}</td>
                        <td className="px-4 py-3 text-[#6b6058]">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <WarningBox>
                  Jangan pernah membeli "akun Stockity terverifikasi" milik orang lain atau memakai identitas
                  orang lain. Selain melanggar ketentuan platform, dana Anda menjadi milik identitas tersebut —
                  dan bisa hangus kapan saja.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 5 ─────────────────────────────────── */}
            <section>
              <SectionLabel>05 · Kaitan dengan Bot</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                KYC &amp; Robot Trading: Apa Hubungannya?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Jika Anda memakai <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">robot
                  trading seperti STC AutoTrade</Link>, tidak ada proses verifikasi tambahan — bot hanya
                  terhubung ke akun Stockity Anda untuk eksekusi order. Status KYC sepenuhnya milik akun
                  Stockity itu sendiri.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Justru karena bot bisa menghasilkan profit lebih konsisten dan Anda akan lebih sering
                  menarik dana, menyelesaikan KYC di awal menjadi semakin penting: profit dari{" "}
                  <Link href="/artikel/cara-profit-trading-stockity" className="text-[#047857] underline">trading
                  otomatis</Link> hanya benar-benar jadi milik Anda setelah berhasil{" "}
                  <Link href="/artikel/cara-withdraw-stockity" className="text-[#047857] underline">ditarik ke rekening</Link>.
                </p>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar Verifikasi Stockity
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Apakah verifikasi akun Stockity wajib?", a: "Untuk trading dan deposit umumnya belum wajib, tetapi untuk withdraw wajib. Permintaan penarikan tidak diproses sebelum KYC selesai — jadi selesaikan sedini mungkin." },
                  { q: "Berapa lama proses verifikasinya?", a: "Umumnya beberapa jam hingga 1–3 hari kerja, tergantung antrean dan kualitas dokumen. Dokumen jelas dan data konsisten = proses lebih cepat." },
                  { q: "Apakah bisa trading sambil menunggu verifikasi?", a: "Bisa. Deposit dan trading tetap berjalan normal selama status verifikasi masih ditinjau — hanya penarikan yang menunggu KYC selesai." },
                  { q: "Verifikasi ditolak terus, harus bagaimana?", a: "Baca alasan penolakan yang ditampilkan, perbaiki (biasanya kualitas foto atau ketidakcocokan data), lalu ajukan ulang. Jika tetap gagal, hubungi support resmi Stockity melalui menu bantuan di platform." },
                  { q: "Apakah pakai robot trading memengaruhi status verifikasi?", a: "Tidak. Bot hanya mengeksekusi order di akun Anda. Status KYC melekat pada akun Stockity dan tidak berubah karena pemakaian bot." },
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
                { href: "/artikel/cara-withdraw-stockity", title: "Cara Withdraw Stockity", desc: "Panduan tarik dana ke rekening setelah KYC lolos" },
                { href: "/artikel/cara-deposit-stockity", title: "Cara Deposit Stockity", desc: "Isi saldo via bank & e-wallet langkah demi langkah" },
                { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Registrasi akun dari nol sampai siap trading" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">Akun Sudah Terverifikasi?</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Otomatiskan Trading Stockity Anda dengan STC AutoTrade</p>
              <p className="text-[13px] text-[#6b6058]">6 mode strategi, stop loss otomatis, berjalan 24 jam di server. Gratis untuk member.</p>
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
            <p className="text-[11px] text-[#1a1612]/65">© 2026 STC AutoTrade (TechnoAutoTrade) · stcautotrade.id</p>
            <Link href="/" className="text-[11px] text-[#1a1612]/65 hover:text-[#1a1612] transition-colors no-underline">← Beranda</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
