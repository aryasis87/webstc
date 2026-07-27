/**
 * app/artikel/stockity-tidak-bisa-login/page.tsx
 *
 * Target keyword:
 *   Primary  : stockity tidak bisa login
 *   Secondary: stockity error, stockity tidak bisa dibuka, lupa password
 *              stockity, stockity down, akun stockity diblokir
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Stockity Tidak Bisa Login? 7 Penyebab & Cara Mengatasinya 2026",
  description:
    "Stockity error, tidak bisa dibuka, atau gagal login? Ini 7 penyebab paling umum beserta solusinya: password salah, gangguan jaringan, server down, cache aplikasi, hingga akun diblokir.",
  keywords: [
    "stockity tidak bisa login",
    "stockity error",
    "stockity tidak bisa dibuka",
    "lupa password stockity",
    "stockity down hari ini",
    "akun stockity diblokir",
    "stockity gagal masuk",
    "reset password stockity",
    "stockity bermasalah",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/stockity-tidak-bisa-login",
  },
  openGraph: {
    title: "Stockity Tidak Bisa Login? 7 Penyebab & Cara Mengatasinya 2026",
    description:
      "Checklist lengkap mengatasi gagal login Stockity: dari password & jaringan sampai server down dan akun diblokir.",
    url: "https://stcautotrade.id/artikel/stockity-tidak-bisa-login",
    type: "article",
    publishedTime: "2026-07-04T00:00:00.000Z",
    modifiedTime: "2026-07-04T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og?t=Stockity%20Tidak%20Bisa%20Login%3F%207%20Penyebab%20%26%20Cara%20Mengatasinya%202026&l=id", width: 1200, height: 630, alt: "Stockity Tidak Bisa Login — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stockity Tidak Bisa Login? 7 Penyebab & Cara Mengatasinya 2026",
  description: "Panduan troubleshooting gagal login Stockity: password, jaringan/ISP, server down, cache, versi aplikasi, dan akun diblokir — beserta solusi tiap kasus.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2026-07-04",
  dateModified: "2026-07-04",
  image: "https://stcautotrade.id/og?t=Stockity%20Tidak%20Bisa%20Login%3F%207%20Penyebab%20%26%20Cara%20Mengatasinya%202026&l=id",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/stockity-tidak-bisa-login" },
  keywords: "stockity tidak bisa login, stockity error, stockity tidak bisa dibuka, lupa password stockity",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Stockity Tidak Bisa Login", item: "https://stcautotrade.id/artikel/stockity-tidak-bisa-login" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Kenapa Stockity tidak bisa dibuka hari ini?", acceptedAnswer: { "@type": "Answer", text: "Tiga kemungkinan terbesar: gangguan jaringan/ISP di sisi Anda, maintenance atau gangguan server di sisi Stockity, atau masalah cache di browser/aplikasi. Coba ganti jaringan (WiFi ke data seluler), hapus cache, dan cek pengumuman resmi Stockity." } },
    { "@type": "Question", name: "Bagaimana cara reset password Stockity?", acceptedAnswer: { "@type": "Answer", text: "Di halaman login, klik 'Lupa password?', masukkan email terdaftar, lalu ikuti tautan reset yang dikirim ke email. Jika email tidak masuk, periksa folder spam dan pastikan email yang dimasukkan benar-benar email pendaftaran." } },
    { "@type": "Question", name: "Kenapa login Google/Facebook di Stockity gagal?", acceptedAnswer: { "@type": "Answer", text: "Pastikan Anda memakai metode login yang sama dengan saat mendaftar. Akun yang dibuat via Google harus login via Google — mencoba login email+password pada akun sosial biasanya gagal karena password memang tidak pernah dibuat." } },
    { "@type": "Question", name: "Akun Stockity saya diblokir, apakah bisa dibuka lagi?", acceptedAnswer: { "@type": "Answer", text: "Tergantung penyebabnya. Hubungi support resmi Stockity untuk mengetahui alasan pemblokiran. Pelanggaran berat seperti multi-akun atau penyalahgunaan bonus bisa permanen; kesalahpahaman verifikasi biasanya bisa dipulihkan setelah klarifikasi." } },
    { "@type": "Question", name: "Kalau Stockity normal tapi bot tidak bisa login, kenapa?", acceptedAnswer: { "@type": "Answer", text: "Pastikan email & password yang dimasukkan ke bot sama persis dengan kredensial Stockity, dan akun tidak sedang meminta verifikasi tambahan. Coba login manual di situs Stockity dulu — jika manual berhasil namun bot gagal, hubungi support STC AutoTrade." } },
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

export default function StockityTidakBisaLoginPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Stockity Tidak Bisa Login</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#fee2e2] text-[#b91c1c] text-[11px] font-semibold rounded-full">Troubleshooting</span>
            <span className="text-[12px] text-[#1a1612]/65">4 Juli 2026</span>
            <span className="text-[12px] text-[#1a1612]/65">·</span>
            <span className="text-[12px] text-[#1a1612]/65">±7 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Stockity Tidak Bisa Login?<br className="hidden sm:block" />
            7 Penyebab &amp; Solusinya
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            Gagal masuk saat pasar sedang bagus itu menyebalkan. Kabar baiknya:{" "}
            <strong className="font-semibold text-[#1a1612]">hampir semua kasus gagal login Stockity
            bisa diselesaikan sendiri dalam hitungan menit</strong>. Ikuti checklist ini dari atas ke
            bawah — diurutkan dari penyebab paling sering.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "7", l: "Penyebab Umum" },
              { v: "±5 mnt", l: "Rata-rata Waktu Fix" },
              { v: "3", l: "Jalur Akses Alternatif" },
              { v: "24/7", l: "Bot Tetap Jalan di Server" },
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
              <SectionLabel>01 · Checklist Cepat</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cek 3 Hal Ini Dulu (Menyelesaikan Sebagian Besar Kasus)
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Ganti jaringan: WiFi ↔ data seluler", desc: "Beberapa ISP di Indonesia kadang bermasalah menjangkau situs trading. Jika via WiFi gagal, coba data seluler (atau sebaliknya). Kalau berhasil di salah satunya, masalahnya di jaringan — bukan akun Anda." },
                  { n: "2", title: "Pastikan metode login sesuai pendaftaran", desc: "Akun yang dibuat via Google harus masuk via tombol Google; via Facebook harus via Facebook. Mencoba email+password pada akun sosial hampir pasti gagal — password-nya memang tidak pernah dibuat." },
                  { n: "3", title: "Periksa ejaan email & caps lock", desc: "Kesalahan paling klasik: typo satu huruf di email, caps lock aktif, atau spasi tak sengaja di akhir password (sering terjadi saat paste dari catatan)." },
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
            </section>

            {/* ── Section 2 ─────────────────────────────────── */}
            <section>
              <SectionLabel>02 · Diagnosis</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                7 Penyebab Gagal Login &amp; Solusi Masing-Masing
              </h2>
              <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Gejala</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Kemungkinan Penyebab</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Solusi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["“Password salah” padahal yakin benar", "Typo / metode login beda / password lama", "Reset via 'Lupa password?' — link dikirim ke email terdaftar"],
                      ["Halaman tidak terbuka sama sekali", "Gangguan ISP atau pemblokiran jaringan", "Ganti jaringan (data seluler), coba browser lain, atau gunakan aplikasi resmi"],
                      ["Loading berputar terus / timeout", "Server sibuk atau maintenance", "Tunggu 15–30 menit; cek pengumuman resmi Stockity di aplikasi/media sosialnya"],
                      ["Error hanya di aplikasi, web normal", "Cache/versi aplikasi lama", "Hapus cache aplikasi, update ke versi terbaru, atau reinstall"],
                      ["Error hanya di browser, aplikasi normal", "Cache/cookie browser korup", "Hapus cookie & cache untuk situs Stockity, atau pakai mode incognito"],
                      ["Diminta verifikasi terus-menerus", "Sistem keamanan mendeteksi perangkat baru", "Selesaikan verifikasi email/SMS; pastikan email pendaftaran masih bisa diakses"],
                      ["Pesan akun ditangguhkan/diblokir", "Pelanggaran ketentuan atau kesalahpahaman", "Hubungi support resmi Stockity dari menu bantuan — jangan pakai jasa 'buka blokir' pihak ketiga"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[rgba(26,22,18,0.05)] last:border-0">
                        <td className="px-4 py-3 font-medium text-[#1a1612]">{row[0]}</td>
                        <td className="px-4 py-3 text-[#6b6058]">{row[1]}</td>
                        <td className="px-4 py-3 text-[#6b6058]">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                <WarningBox>
                  Hati-hati dengan situs "Stockity" palsu di hasil pencarian — selalu ketik alamat resmi
                  secara langsung atau gunakan aplikasi resmi. Memasukkan kredensial di situs tiruan =
                  menyerahkan akun Anda ke penipu.
                </WarningBox>
              </div>
            </section>

            {/* ── Section 3 ─────────────────────────────────── */}
            <section>
              <SectionLabel>03 · Reset Password</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Reset Password Stockity yang Benar
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Klik 'Lupa password?' di halaman login", desc: "Jangan menebak-nebak password berkali-kali — percobaan gagal beruntun bisa memicu penguncian sementara oleh sistem keamanan." },
                  { n: "2", title: "Masukkan email pendaftaran", desc: "Harus email yang dipakai saat daftar. Kalau lupa email mana yang dipakai, cek kotak masuk lama Anda — cari email dari Stockity saat registrasi." },
                  { n: "3", title: "Buka link reset dari email", desc: "Link dikirim dalam beberapa menit. Tidak masuk? Periksa folder Spam/Promosi. Link biasanya punya masa berlaku — segera gunakan." },
                  { n: "4", title: "Buat password baru yang kuat", desc: "Kombinasi huruf besar-kecil, angka, dan simbol. Simpan di password manager — bukan di catatan yang bisa hilang." },
                  { n: "5", title: "Login ulang di semua perangkat", desc: "Setelah reset, sesi lama biasanya keluar otomatis. Login ulang di aplikasi, browser, dan bot yang terhubung ke akun Anda." },
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
            </section>

            {/* ── Section 4 ─────────────────────────────────── */}
            <section>
              <SectionLabel>04 · Kaitan dengan Bot</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Login Stockity Normal, tapi Bot Gagal Terhubung?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Jika Anda memakai <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">robot
                  trading seperti STC AutoTrade</Link>, bot login memakai kredensial Stockity yang sama.
                  Urutan diagnosisnya:
                </p>
                <div className="space-y-3 max-w-2xl">
                  {[
                    { n: "1", title: "Tes login manual dulu", desc: "Buka situs Stockity dan login manual. Kalau manual saja gagal, selesaikan dulu masalah akunnya (checklist di atas) — bot tidak akan bisa masuk selama akun bermasalah." },
                    { n: "2", title: "Cek kredensial di bot", desc: "Pastikan email & password di bot sama persis dengan yang berhasil dipakai manual — termasuk jika Anda baru saja reset password (kredensial di bot ikut harus diperbarui)." },
                    { n: "3", title: "Akun sosial? Buat password khusus", desc: "Jika akun Stockity dibuat via Google/Facebook, buat/set password akun terlebih dahulu di pengaturan Stockity agar bisa dipakai login oleh bot." },
                    { n: "4", title: "Masih gagal? Hubungi support", desc: "Jika manual berhasil tapi bot tetap gagal, hubungi support STC AutoTrade — bisa jadi ada verifikasi tambahan dari sisi platform yang perlu penanganan." },
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
                <InfoBox icon="☁️" title="Bot di server tidak ikut 'logout'">
                  Salah satu keunggulan bot berbasis server: sekali terhubung, bot tetap berjalan 24 jam
                  meski HP Anda kehabisan baterai atau aplikasi ditutup. Gangguan login di perangkat Anda
                  tidak menghentikan sesi bot yang sudah aktif.
                </InfoBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>05 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar Gagal Login Stockity
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Kenapa Stockity tidak bisa dibuka hari ini?", a: "Tiga kemungkinan terbesar: gangguan ISP di sisi Anda, maintenance/gangguan server Stockity, atau cache yang korup. Ganti jaringan, hapus cache, dan cek pengumuman resmi — urutan itu menyelesaikan mayoritas kasus." },
                  { q: "Berapa lama link reset password berlaku?", a: "Link reset umumnya berlaku singkat (menit hingga jam). Kalau kedaluwarsa, ulangi proses 'Lupa password?' untuk mendapat link baru." },
                  { q: "Apakah gagal login berkali-kali membuat akun terkunci?", a: "Percobaan gagal beruntun bisa memicu penguncian sementara oleh sistem keamanan. Berhenti menebak, gunakan reset password, dan tunggu beberapa menit sebelum mencoba lagi." },
                  { q: "Akun diblokir — bisa dipulihkan?", a: "Hubungi support resmi Stockity untuk tahu penyebabnya. Kesalahpahaman verifikasi biasanya bisa dipulihkan; pelanggaran berat (multi-akun, penyalahgunaan bonus) bisa permanen. Hindari jasa 'buka blokir' tidak resmi — itu penipuan." },
                  { q: "Apakah masalah login memengaruhi bot yang sedang berjalan?", a: "Tidak, selama sesi bot sudah aktif di server. Bot STC AutoTrade berjalan independen dari perangkat Anda — gangguan di HP/browser tidak menghentikan bot yang sedang bekerja." },
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
                { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Registrasi akun yang benar dari awal" },
                { href: "/artikel/cara-verifikasi-akun-stockity", title: "Cara Verifikasi Akun Stockity", desc: "KYC lolos sekali jalan, withdraw lancar" },
                { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade Stockity 2026" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">Sudah Bisa Login Lagi?</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">Jalankan Trading Otomatis 24 Jam dengan STC AutoTrade</p>
              <p className="text-[13px] text-[#6b6058]">Bot berjalan di server — tidak terganggu masalah perangkat atau jaringan Anda. Gratis untuk member.</p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Link href="/download" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline">Download APK</Link>
              <a href="https://stcautotradepro.id" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/70 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline">Unduh Aplikasi</a>
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
