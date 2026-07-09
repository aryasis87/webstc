/**
 * app/artikel/akun-demo-stockity/page.tsx
 *
 * Target keyword:
 *   Primary  : akun demo stockity
 *   Secondary: cara daftar demo stockity, stockity demo gratis, latihan
 *              trading tanpa modal, akun demo binary option, demo vs real
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/* ── SEO Metadata ─────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Akun Demo Stockity: Cara Daftar & Latihan Gratis Tanpa Modal 2026",
  description:
    "Panduan akun demo Stockity — cara mengaktifkan saldo virtual gratis, perbedaan demo vs real, program latihan 7 hari yang terstruktur, dan kapan waktu tepat pindah ke akun real.",
  keywords: [
    "akun demo stockity",
    "cara daftar demo stockity",
    "stockity demo gratis",
    "latihan trading tanpa modal",
    "akun demo binary option",
    "saldo virtual stockity",
    "demo vs real stockity",
    "cara pakai akun demo stockity",
    "belajar trading gratis",
    "robot stockity mode demo",
  ],
  alternates: {
    canonical: "https://stcautotrade.id/artikel/akun-demo-stockity",
  },
  openGraph: {
    title: "Akun Demo Stockity: Cara Daftar & Latihan Gratis Tanpa Modal 2026",
    description:
      "Saldo virtual gratis, data pasar nyata — panduan lengkap memaksimalkan akun demo Stockity sebelum trading dengan uang asli.",
    url: "https://stcautotrade.id/artikel/akun-demo-stockity",
    type: "article",
    publishedTime: "2026-07-03T00:00:00.000Z",
    modifiedTime: "2026-07-03T00:00:00.000Z",
    authors: ["STC AutoTrade"],
    images: [{ url: "https://stcautotrade.id/og?t=Akun%20Demo%20Stockity%3A%20Cara%20Daftar%20%26%20Latihan%20Gratis%20Tanpa%20Modal%202026&l=id", width: 1200, height: 630, alt: "Akun Demo Stockity — STC AutoTrade" }],
  },
};

/* ── Structured Data ──────────────────────────────────────────── */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Akun Demo Stockity: Cara Daftar & Latihan Gratis Tanpa Modal 2026",
  description: "Cara mengaktifkan akun demo Stockity, perbedaan demo vs real, dan program latihan 7 hari sebelum pindah ke akun real.",
  author: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  publisher: { "@type": "Organization", name: "STC AutoTrade", logo: { "@type": "ImageObject", url: "https://stcautotrade.id/logo.webp" } },
  datePublished: "2026-07-03",
  dateModified: "2026-07-03",
  image: "https://stcautotrade.id/og?t=Akun%20Demo%20Stockity%3A%20Cara%20Daftar%20%26%20Latihan%20Gratis%20Tanpa%20Modal%202026&l=id",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stcautotrade.id/artikel/akun-demo-stockity" },
  keywords: "akun demo stockity, stockity demo gratis, latihan trading tanpa modal",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: "https://stcautotrade.id" },
    { "@type": "ListItem", position: 2, name: "Artikel", item: "https://stcautotrade.id/artikel" },
    { "@type": "ListItem", position: 3, name: "Akun Demo Stockity", item: "https://stcautotrade.id/artikel/akun-demo-stockity" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Apakah akun demo Stockity gratis?", acceptedAnswer: { "@type": "Answer", text: "Ya, sepenuhnya gratis. Setiap akun Stockity otomatis memiliki akses ke mode demo dengan saldo virtual yang bisa diisi ulang, tanpa deposit apapun." } },
    { "@type": "Question", name: "Apakah data pasar di akun demo sama dengan akun real?", acceptedAnswer: { "@type": "Answer", text: "Ya. Akun demo Stockity menggunakan data pasar real-time yang sama persis dengan akun real — yang berbeda hanya saldonya (virtual vs uang asli)." } },
    { "@type": "Question", name: "Berapa lama sebaiknya berlatih di akun demo?", acceptedAnswer: { "@type": "Answer", text: "Minimal 7 hari dengan sesi teratur, atau sampai win rate Anda konsisten di atas 55–60% selama beberapa sesi berturut-turut sebelum mempertimbangkan akun real." } },
    { "@type": "Question", name: "Bisakah robot trading dijalankan di akun demo Stockity?", acceptedAnswer: { "@type": "Answer", text: "Bisa. STC AutoTrade mendukung mode demo sepenuhnya — semua 6 mode strategi, martingale, stop loss, dan stop profit berjalan identik dengan akun real." } },
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

/* ── Page ─────────────────────────────────────────────────────── */

export default function AkunDemoStockityPage() {
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
              <li className="text-[#1a1612]/70 font-medium">Akun Demo Stockity</li>
            </ol>
          </nav>
        </div>

        {/* ── Article Header ────────────────────────────────── */}
        <header className="max-w-4xl mx-auto px-5 sm:px-8 pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 bg-[#dbeafe] text-[#1d4ed8] text-[11px] font-semibold rounded-full">Panduan</span>
            <span className="text-[12px] text-[#1a1612]/65">3 Juli 2026</span>
            <span className="text-[12px] text-[#1a1612]/65">·</span>
            <span className="text-[12px] text-[#1a1612]/65">±7 menit baca</span>
          </div>

          <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl sm:text-5xl font-normal tracking-tight leading-[1.1] text-[#1a1612] mb-5">
            Akun Demo Stockity: Cara Daftar &<br className="hidden sm:block" />
            Latihan Gratis Tanpa Modal
          </h1>

          <p className="text-[#6b6058] text-base sm:text-lg leading-relaxed max-w-2xl">
            <strong className="font-semibold text-[#1a1612]">Akun demo Stockity</strong> adalah alat belajar
            terbaik yang sering diremehkan pemula. Saldo virtual, data pasar nyata, nol risiko — panduan ini
            menunjukkan cara memaksimalkannya dengan program latihan 7 hari yang terstruktur.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-8 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden">
            {[
              { v: "Rp 0", l: "Biaya Daftar" },
              { v: "Real-time", l: "Data Pasar" },
              { v: "7 Hari", l: "Program Latihan" },
              { v: "Semua Fitur", l: "Bot Berjalan Penuh" },
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
                Apa Itu Akun Demo Stockity?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Akun demo adalah mode latihan resmi dari Stockity di mana Anda trading menggunakan{" "}
                  <strong className="text-[#1a1612]">saldo virtual</strong> — bukan uang asli. Yang membuatnya
                  sangat berharga: grafik, harga, dan pergerakan pasar yang Anda lihat adalah{" "}
                  <strong className="text-[#1a1612]">data real-time yang sama persis</strong> dengan yang dilihat
                  trader akun real.
                </p>
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Artinya, setiap keterampilan yang Anda bangun di demo — membaca tren, menentukan momen entry,
                  disiplin manajemen modal — akan langsung berlaku di akun real. Satu-satunya yang tidak bisa
                  disimulasikan demo adalah tekanan psikologis kehilangan uang asli.
                </p>
                <InfoBox icon="💡" title="Saldo virtual bisa diisi ulang">
                  Jika saldo demo habis, Anda bisa mengisi ulang kapan saja tanpa biaya. Manfaatkan ini untuk
                  bereksperimen dengan strategi yang lebih berisiko tanpa konsekuensi.
                </InfoBox>
              </div>
            </section>

            {/* ── Section 2 ─────────────────────────────────── */}
            <section>
              <SectionLabel>02 · Aktivasi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Cara Mengaktifkan Akun Demo Stockity
              </h2>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1", title: "Daftar akun Stockity", desc: "Jika belum punya akun, daftar gratis — paling mudah langsung melalui aplikasi STC AutoTrade (APK atau versi web) tanpa berpindah platform." },
                  { n: "2", title: "Login ke platform", desc: "Masuk menggunakan email dan password akun Stockity.id Anda." },
                  { n: "3", title: "Pilih akun 'Demo' di pemilih saldo", desc: "Di pojok atas antarmuka trading terdapat pemilih akun — ganti dari 'Real' ke 'Demo'. Saldo virtual langsung tersedia." },
                  { n: "4", title: "Mulai trading tanpa risiko", desc: "Semua fitur platform berjalan normal. Order, riwayat, dan statistik tercatat — hanya saldonya yang virtual." },
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

            {/* ── Section 3 ─────────────────────────────────── */}
            <section>
              <SectionLabel>03 · Perbandingan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Akun Demo vs Akun Real: Apa Saja Bedanya?
              </h2>
              <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-[#f6f4ef] border-b border-[rgba(26,22,18,0.07)]">
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Aspek</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Akun Demo</th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a1612]">Akun Real</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Saldo", "Virtual, bisa diisi ulang gratis", "Uang asli dari deposit"],
                      ["Data pasar", "Real-time, identik", "Real-time, identik"],
                      ["Payout aset", "Sama dengan real", "Sesuai ketentuan platform"],
                      ["Withdraw profit", "Tidak bisa (virtual)", "Bisa ke rekening/e-wallet"],
                      ["Tekanan psikologis", "Rendah — tidak ada risiko", "Nyata — faktor emosi bekerja"],
                      ["Robot STC AutoTrade", "Berjalan penuh", "Berjalan penuh"],
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
            </section>

            {/* ── Section 4 ─────────────────────────────────── */}
            <section>
              <SectionLabel>04 · Program Latihan</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Program Latihan Demo 7 Hari yang Terstruktur
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed mb-6">
                Kebanyakan pemula membuka demo, order asal-asalan beberapa kali, lalu merasa "sudah paham".
                Ini rencana yang lebih baik — 30–60 menit per hari:
              </p>
              <div className="space-y-3 max-w-2xl">
                {[
                  { n: "1–2", title: "Kenali satu aset", desc: "Pilih satu aset (misal EUR/USD). Amati pola pergerakannya di berbagai jam tanpa banyak order. Order maksimal 5×/hari, nominal terkecil." },
                  { n: "3–4", title: "Uji satu aturan entry", desc: "Tetapkan satu aturan sederhana (misal: entry searah tren 10 candle terakhir). Patuh 100% pada aturan itu, catat hasil setiap order." },
                  { n: "5", title: "Evaluasi win rate", desc: "Hitung win rate dari catatan Anda. Di bawah 50%? Ubah aturannya. Di atas 55%? Lanjutkan dengan disiplin yang sama." },
                  { n: "6", title: "Simulasi manajemen modal", desc: "Terapkan batas harian: stop setelah loss 3× berturut atau profit target tercapai. Latih 'berhenti' — keterampilan tersulit dalam trading." },
                  { n: "7", title: "Uji coba robot", desc: "Aktifkan STC AutoTrade di mode demo. Bandingkan hasil bot (AI Signal / Copy Trading) dengan hasil manual Anda selama 6 hari sebelumnya." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                    <div className="min-w-[52px] h-8 px-2 rounded-full border border-[rgba(26,22,18,0.12)] bg-[#f0fdf4] flex items-center justify-center text-[11px] font-bold text-[#0f766e]">Hari {s.n}</div>
                    <div className="pt-0.5">
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{s.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Section 5 ─────────────────────────────────── */}
            <section>
              <SectionLabel>05 · Transisi</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-4 leading-snug">
                Kapan Waktu yang Tepat Pindah ke Akun Real?
              </h2>
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15px] text-[#6b6058] leading-relaxed">
                  Pindah ke akun real bukan soal berapa lama Anda di demo, tapi soal{" "}
                  <strong className="text-[#1a1612]">apakah checklist ini sudah terpenuhi</strong>:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "✅", title: "Win rate stabil ≥55%", desc: "Bukan satu sesi beruntung — melainkan konsisten selama minimal 5 sesi latihan terakhir." },
                    { icon: "✅", title: "Punya aturan tertulis", desc: "Kapan entry, kapan berhenti, berapa nominal per order — semuanya ditulis dan sudah terbukti Anda patuhi di demo." },
                    { icon: "✅", title: "Modal bebas risiko", desc: "Dana yang akan dideposit bukan uang kebutuhan pokok, dan Anda siap secara mental jika hilang." },
                    { icon: "✅", title: "Mulai dari nominal terkecil", desc: "Di akun real, mulai lagi dari nominal minimum — psikologi uang asli berbeda dengan demo." },
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl p-5">
                      <div className="text-xl mb-2">{item.icon}</div>
                      <h3 className="text-[13px] font-semibold text-[#1a1612] mb-2">{item.title}</h3>
                      <p className="text-[12px] text-[#6b6058] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <InfoBox icon="🤖" title="Uji bot di demo dulu, selalu">
                  Prinsip yang sama berlaku untuk robot trading: validasi konfigurasi STC AutoTrade Anda
                  (mode, martingale, stop loss) di demo minimal 7 hari sebelum menjalankannya di akun real.
                </InfoBox>
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────── */}
            <section>
              <SectionLabel>06 · FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-normal text-[#1a1612] mb-6 leading-snug">
                Pertanyaan Umum Seputar Akun Demo
              </h2>
              <div className="space-y-3">
                {[
                  { q: "Apakah akun demo Stockity gratis selamanya?", a: "Ya. Tidak ada batas waktu maupun biaya. Anda bisa kembali ke mode demo kapan saja bahkan setelah punya akun real — berguna untuk menguji strategi baru." },
                  { q: "Apakah profit di akun demo bisa ditarik?", a: "Tidak. Saldo demo adalah uang virtual untuk latihan, sehingga profit di dalamnya tidak bisa di-withdraw. Untuk profit nyata, gunakan akun real." },
                  { q: "Apakah hasil di demo menjamin hasil sama di real?", a: "Tidak menjamin — data pasarnya identik, tapi faktor psikologis uang asli membuat banyak trader mengambil keputusan berbeda di akun real. Karena itu mulai real dengan nominal kecil." },
                  { q: "Bisakah STC AutoTrade dijalankan di akun demo?", a: "Bisa, sepenuhnya. Semua 6 mode strategi, sistem martingale, stop loss, dan stop profit berjalan identik di demo — cara teraman menguji konfigurasi bot Anda." },
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
                { href: "/artikel/cara-main-stockity-pemula", title: "Cara Main Stockity untuk Pemula", desc: "Panduan lengkap dari nol sampai order pertama" },
                { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal minimum & cara mulai modal kecil" },
                { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot Stockity", desc: "Konfigurasi bot langkah demi langkah" },
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
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-1.5">Latihan Lebih Efektif</p>
              <p className="text-base font-semibold text-[#1a1612] mb-1">STC AutoTrade — Semua Fitur Berjalan Penuh di Mode Demo</p>
              <p className="text-[13px] text-[#6b6058]">Uji 6 mode strategi dengan saldo virtual dan data pasar nyata. Gratis untuk member.</p>
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
