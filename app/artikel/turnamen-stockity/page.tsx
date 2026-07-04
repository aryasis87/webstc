/**
 * app/artikel/turnamen-stockity/page.tsx
 * Primary: turnamen stockity · Secondary: daily free stockity, kompetisi
 * trading stockity, cara ikut turnamen stockity
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "turnamen-stockity",
  title: "Turnamen Stockity: Cara Ikut, Jenis Kompetisi & Tips Menang 2026",
  description:
    "Panduan turnamen trading Stockity: jenis turnamen (gratis & berbayar), cara daftar, sistem peringkat, hadiah, dan strategi realistis untuk naik leaderboard tanpa menghancurkan akun.",
  keywords: [
    "turnamen stockity",
    "daily free stockity",
    "kompetisi trading stockity",
    "cara ikut turnamen stockity",
    "hadiah turnamen stockity",
    "leaderboard stockity",
    "turnamen trading gratis",
  ],
  breadcrumbName: "Turnamen Stockity",
  datePublished: "2026-07-04",
  faq: [
    { q: "Apakah turnamen Stockity gratis?", a: "Ada dua jenis: turnamen gratis (free entry, seperti daily free) yang bisa diikuti tanpa biaya, dan turnamen berbayar dengan entry fee yang hadiahnya lebih besar. Pemula sebaiknya mulai dari yang gratis." },
    { q: "Bagaimana sistem penilaian turnamen?", a: "Umumnya berdasarkan saldo turnamen tertinggi di akhir periode — semua peserta mulai dari saldo turnamen yang sama, siapa yang menumbuhkannya paling besar menang. Detail aturan tiap turnamen tercantum di halaman turnamen tersebut." },
    { q: "Apakah hadiah turnamen bisa ditarik?", a: "Hadiah umumnya masuk sebagai saldo real dan mengikuti aturan penarikan platform — termasuk syarat verifikasi akun. Sebagian turnamen mungkin menerapkan syarat trading tertentu pada hadiah; baca ketentuan masing-masing." },
    { q: "Apakah boleh pakai robot saat turnamen?", a: "Aturan tiap turnamen bisa berbeda — periksa syarat & ketentuan turnamen yang diikuti. Di luar turnamen, bot seperti STC AutoTrade bekerja pada akun demo/real biasa, bukan pada saldo khusus turnamen." },
    { q: "Strategi apa yang realistis untuk menang turnamen?", a: "Turnamen menghargai pertumbuhan agresif dalam waktu terbatas — kebalikan dari trading harian yang sehat. Pisahkan mindset: di turnamen boleh lebih agresif karena risiko terbatas pada entry fee; di akun utama tetap disiplin manajemen risiko." },
  ],
};

export const metadata = buildMetadata(seo);
const schemas = buildSchemas(seo);

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ArtikelShell
        badge="Panduan"
        date="4 Juli 2026"
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        title={<>Turnamen Stockity: Cara Ikut<br className="hidden sm:block" /> &amp; Tips Naik Leaderboard</>}
        lede={<>Turnamen adalah cara <strong className="font-semibold text-[#1a1612]">menambah saldo real dengan risiko terukur</strong> — bahkan gratis untuk jenis tertentu. Panduan ini membahas jenis turnamen, cara daftar, sistem peringkat, dan strategi yang realistis.</>}
        stats={[
          { v: "Gratis", l: "Ada Turnamen Free Entry" },
          { v: "Setara", l: "Semua Mulai Saldo Sama" },
          { v: "Real", l: "Hadiah Masuk Saldo Real" },
          { v: "Terpisah", l: "Dari Akun Utama Anda" },
        ]}
        related={[
          { href: "/artikel/bonus-deposit-stockity", title: "Bonus Deposit Stockity", desc: "Cara klaim bonus & memahami syarat turnover" },
          { href: "/artikel/akun-demo-stockity", title: "Akun Demo Stockity", desc: "Latihan gratis sebelum ikut kompetisi" },
          { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale", desc: "Setting martingale yang aman & terkelola" },
        ]}
        ctaEyebrow="Di Luar Turnamen?"
        ctaTitle="Biarkan STC AutoTrade yang Trading di Akun Utama Anda"
        ctaDesc="Turnamen untuk adrenalin, akun utama untuk konsistensi — bot dengan stop loss otomatis menjaga sisi konsistensinya."
      >
        <section>
          <SectionLabel>01 · Konsep</SectionLabel>
          <H2>Apa Itu Turnamen Stockity &amp; Kenapa Menarik?</H2>
          <div className="space-y-4">
            <P>
              Turnamen adalah kompetisi trading berjangka waktu: semua peserta memulai dengan{" "}
              <strong className="text-[#1a1612]">saldo turnamen yang sama</strong>, lalu bersaing
              menumbuhkannya dalam periode tertentu. Peringkat teratas leaderboard membawa pulang hadiah
              dari prize pool.
            </P>
            <P>
              Daya tarik utamanya ada di struktur risikonya: kerugian maksimal Anda terbatas pada entry fee
              (atau nol untuk turnamen gratis), sementara potensi hadiahnya berkali lipat. Ini profil
              risiko yang sangat berbeda dari trading langsung di akun real.
            </P>
            <InfoBox icon="🏆" title="Latihan dengan tekanan nyata">
              Banyak trader memakai turnamen gratis sebagai "jembatan" antara akun demo dan akun real:
              tekanan kompetisinya nyata, tetapi dompet tetap aman.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Jenis</SectionLabel>
          <H2>Jenis Turnamen yang Umum Tersedia</H2>
          <DataTable
            head={["Jenis", "Biaya Masuk", "Karakteristik"]}
            rows={[
              ["Daily free / turnamen gratis", "Gratis", "Diadakan rutin (harian), hadiah lebih kecil, peserta ramai — pintu masuk terbaik untuk pemula"],
              ["Turnamen reguler berbayar", "Entry fee kecil", "Prize pool lebih besar, peserta lebih serius, durasi bervariasi (harian-mingguan)"],
              ["Turnamen spesial/event", "Bervariasi", "Diadakan pada momen tertentu dengan hadiah terbesar — pantau banner pengumuman di platform"],
            ]}
          />
          <div className="mt-4">
            <P>
              Jadwal, biaya, dan hadiah pastinya selalu tercantum di menu turnamen dalam platform — jadikan
              halaman itu rujukan utama karena detailnya berubah dari waktu ke waktu.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Cara Ikut</SectionLabel>
          <H2>Cara Mendaftar Turnamen Langkah demi Langkah</H2>
          <Steps
            items={[
              { title: "Login & buka menu Turnamen", desc: "Menu turnamen tersedia di dalam platform Stockity — berisi daftar kompetisi yang sedang dan akan berjalan beserta detailnya." },
              { title: "Pilih turnamen & baca aturannya", desc: "Perhatikan: durasi, saldo awal turnamen, entry fee, struktur hadiah, dan aturan khusus (misalnya rebuy — membeli ulang saldo turnamen jika habis)." },
              { title: "Daftar / bayar entry fee", desc: "Untuk turnamen gratis cukup klik ikut; untuk berbayar, entry fee dipotong dari saldo real Anda." },
              { title: "Trading dengan saldo turnamen", desc: "Saldo turnamen terpisah dari akun utama. Semua order selama periode turnamen memakai saldo ini — akun real Anda tidak tersentuh." },
              { title: "Pantau leaderboard sampai akhir", desc: "Peringkat diperbarui berkala. Hadiah dibagikan otomatis ke peringkat teratas setelah turnamen berakhir, sesuai struktur prize pool." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>04 · Strategi</SectionLabel>
          <H2>Strategi Realistis: Turnamen ≠ Trading Harian</H2>
          <div className="space-y-4">
            <P>
              Kesalahan terbesar peserta turnamen adalah memakai strategi yang salah tempat. Leaderboard
              hanya menghargai posisi teratas — finis di tengah dengan saldo utuh tidak dapat apa-apa.
              Karena itu matematika turnamen mendorong permainan agresif:{" "}
              <strong className="text-[#1a1612]">lebih baik peluang kecil menjadi juara daripada peluang
              besar finis biasa-biasa saja</strong>.
            </P>
            <DataTable
              head={["Aspek", "Trading Harian (akun real)", "Turnamen"]}
              rows={[
                ["Tujuan", "Konsistensi jangka panjang", "Peringkat teratas dalam waktu terbatas"],
                ["Ukuran order", "Kecil, terukur (1–5% saldo)", "Boleh agresif — risiko terbatas entry fee"],
                ["Sikap terhadap loss", "Dibatasi ketat stop loss", "Saldo turnamen habis = selesai, coba lagi besok"],
                ["Alat bantu", "Bot + manajemen risiko", "Manual agresif atau sesuai aturan turnamen"],
              ]}
            />
            <WarningBox>
              Jangan bawa mindset turnamen ke akun utama. Gaya agresif yang masuk akal di turnamen (karena
              risikonya dibatasi entry fee) akan menghancurkan akun real. Pisahkan keduanya dengan tegas —
              di akun utama, tetap pakai <Link href="/artikel/cara-menghindari-loss-stockity" className="text-[#92400e] underline">stop loss &amp; manajemen risiko</Link>.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Seputar Turnamen Stockity</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
