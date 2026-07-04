/**
 * app/artikel/manajemen-modal-trading-binary-option/page.tsx
 * Primary: manajemen modal trading · Secondary: money management binary
 * option, position sizing, aturan 1-5 persen, kelola modal trading
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, CardGrid } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "manajemen-modal-trading-binary-option",
  title: "Manajemen Modal Trading Binary Option: Aturan 1–5% & Position Sizing",
  description:
    "Money management untuk binary option: aturan 1–5% per order, cara menghitung ukuran order dari saldo, tabel ketahanan modal terhadap losing streak, dan cara menerapkannya otomatis dengan bot.",
  keywords: [
    "manajemen modal trading",
    "money management binary option",
    "position sizing binary option",
    "aturan 1 persen trading",
    "cara mengelola modal trading",
    "berapa persen modal per trade",
    "money management stockity",
  ],
  breadcrumbName: "Manajemen Modal Trading",
  datePublished: "2026-07-04",
  faq: [
    { q: "Berapa persen modal yang ideal per order?", a: "Konsensus umum manajemen risiko: 1–5% dari saldo per order. Pemula sebaiknya di ujung bawah (1–2%). Dengan 2% per order, dibutuhkan puluhan kekalahan beruntun untuk menghabiskan akun — memberi ruang sangat besar untuk bertahan dan belajar." },
    { q: "Apa bedanya money management dengan stop loss?", a: "Money management mengatur UKURAN tiap order relatif terhadap saldo; stop loss membatasi TOTAL kerugian per hari/sesi. Keduanya saling melengkapi: ukuran order yang benar membuat stop loss jarang tersentuh; stop loss menjadi rem darurat saat hari benar-benar buruk." },
    { q: "Apakah ukuran order harus disesuaikan saat saldo berubah?", a: "Ya — itu inti position sizing. Order 2% dari saldo berarti nominalnya mengecil saat saldo turun (melindungi modal tersisa) dan membesar saat saldo tumbuh (compound). Evaluasi dan sesuaikan nominal secara berkala, misalnya mingguan." },
    { q: "Bagaimana money management bekerja dengan martingale?", a: "Martingale menggandakan order setelah loss — artinya konsumsi modal melonjak cepat. Jika memakai martingale, hitung total kebutuhan seluruh step sebagai satu kesatuan risiko (bukan hanya order pertama), batasi maksimal 3 step, dan pastikan total step masih dalam batas persentase risiko harian Anda." },
    { q: "Bisakah manajemen modal dijalankan otomatis?", a: "Sebagian besar bisa. Di STC AutoTrade Anda menetapkan nominal order, batas martingale, stop loss dan stop profit harian — bot mematuhi batas-batas itu tanpa tergoda 'balas dendam' setelah kalah, yang justru merupakan kegagalan manajemen modal paling umum pada trader manual." },
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
        badge="Strategi"
        date="4 Juli 2026"
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        title={<>Manajemen Modal Trading:<br className="hidden sm:block" /> Aturan yang Menjaga Akun Tetap Hidup</>}
        lede={<>Strategi menentukan seberapa sering Anda menang; <strong className="font-semibold text-[#1a1612]">manajemen modal menentukan apakah Anda masih punya akun saat strategi itu bekerja</strong>. Ini pembahasan praktis position sizing untuk binary option — dengan angka, bukan slogan.</>}
        stats={[
          { v: "1–5%", l: "Per Order dari Saldo" },
          { v: "50×", l: "Ruang Napas di 2%" },
          { v: "Harian", l: "Batas Loss Terpisah" },
          { v: "Otomatis", l: "Bisa Dijalankan Bot" },
        ]}
        related={[
          { href: "/artikel/cara-menghindari-loss-stockity", title: "Cara Menghindari Loss", desc: "Fitur SL, TP & manajemen risiko di Stockity" },
          { href: "/artikel/strategi-martingale-stockity", title: "Strategi Martingale", desc: "Setting martingale aman dengan batas step" },
          { href: "/artikel/modal-trading-stockity", title: "Modal Trading Stockity", desc: "Berapa modal minimum yang masuk akal" },
        ]}
        ctaEyebrow="Disiplin Tanpa Drama"
        ctaTitle="STC AutoTrade Mematuhi Batas Risiko Anda — Setiap Order, Tanpa Emosi"
        ctaDesc="Nominal tetap, martingale terkelola, stop loss & stop profit harian otomatis. Gratis untuk member."
      >
        <section>
          <SectionLabel>01 · Prinsip</SectionLabel>
          <H2>Kenapa Ukuran Order Lebih Penting dari Win Rate</H2>
          <div className="space-y-4">
            <P>
              Dua trader dengan win rate sama persis bisa berakhir sangat berbeda: yang satu bangkrut, yang
              satu tumbuh. Pembedanya bukan strategi — melainkan{" "}
              <strong className="text-[#1a1612]">berapa persen saldo yang dipertaruhkan tiap order</strong>.
              Kekalahan beruntun (losing streak) adalah kepastian statistik yang akan dialami semua trader;
              manajemen modal menentukan apakah streak itu jadi pelajaran atau jadi akhir cerita.
            </P>
            <DataTable
              head={["% per Order", "Order Sebelum Habis*", "Karakter"]}
              rows={[
                ["1%", "±100 kekalahan beruntun", "Sangat konservatif — ideal fase belajar"],
                ["2%", "±50 kekalahan beruntun", "Konservatif — rekomendasi umum pemula"],
                ["5%", "±20 kekalahan beruntun", "Moderat — untuk sistem yang sudah teruji"],
                ["10%", "±10 kekalahan beruntun", "Agresif — streak biasa saja sudah mengancam akun"],
                ["25%+", "±4 kekalahan beruntun", "Judi, bukan trading"],
              ]}
            />
            <p className="text-[12px] text-[#6b6058]">*Ilustrasi kasar dengan nominal tetap — untuk menunjukkan orde besaran ketahanan modal, bukan angka pasti.</p>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Praktik</SectionLabel>
          <H2>Menghitung Nominal Order dari Saldo Anda</H2>
          <div className="space-y-4">
            <P>
              Rumusnya sederhana: <strong className="text-[#1a1612]">nominal order = saldo × persentase
              risiko</strong>. Saldo Rp1.000.000 dengan risiko 2% berarti order Rp20.000. Karena Stockity
              memiliki minimal order (±Rp14.000), ini juga menentukan modal minimum yang masuk akal: dengan
              aturan 2%, saldo idealnya minimal ±Rp700.000 — detailnya di artikel{" "}
              <Link href="/artikel/modal-trading-stockity" className="text-[#047857] underline">modal trading Stockity</Link>.
            </P>
            <CardGrid
              items={[
                { icon: "🧮", title: "Tetapkan % dulu, nominal kemudian", desc: "Jangan mulai dari 'saya mau order Rp50.000' — mulai dari 'risiko saya 2%', lalu hitung nominalnya dari saldo. Arahnya satu jalan." },
                { icon: "📉", title: "Saldo turun → nominal ikut turun", desc: "Setelah drawdown, hitung ulang nominal dari saldo baru. Ini yang membuat akun 'sulit mati' — kerugian mengecil justru saat Anda paling rentan." },
                { icon: "📈", title: "Saldo naik → compound pelan-pelan", desc: "Naikkan nominal hanya saat evaluasi berkala (mingguan), bukan setiap habis menang. Compound yang tergesa = agresivitas terselubung." },
                { icon: "🗓️", title: "Batas harian terpisah", desc: "Selain % per order, tetapkan batas loss harian (misal 10% saldo). Tersentuh = berhenti hari itu, tanpa negosiasi. Di bot, ini fitur stop loss otomatis." },
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>03 · Martingale</SectionLabel>
          <H2>Money Management Saat Memakai Martingale</H2>
          <div className="space-y-4">
            <P>
              <Link href="/artikel/strategi-martingale-stockity" className="text-[#047857] underline">Martingale</Link>{" "}
              menggandakan nominal setelah kalah — artinya satu "siklus" martingale mengonsumsi modal jauh
              lebih besar dari order pertamanya. Dengan multiplier 2× dan 3 step, total eksposur satu siklus
              adalah 1 + 2 + 4 = <strong className="text-[#1a1612]">7× order awal</strong>. Maka aturannya:
              hitung persentase risiko dari total siklus, bukan dari step pertama.
            </P>
            <WarningBox>
              Contoh salah kaprah yang umum: "order saya cuma 2% kok" — padahal dengan martingale 5 step
              multiplier 2×, siklus penuhnya 31× order awal alias 62% saldo. Satu siklus gagal = akun
              terkuras. Batasi step (maks. 3 untuk kebanyakan orang) dan pastikan total siklus tetap di
              bawah batas loss harian Anda.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Otomasi</SectionLabel>
          <H2>Menjalankan Aturan Ini Secara Otomatis</H2>
          <div className="space-y-4">
            <P>
              Bagian tersulit money management bukan menghitungnya — melainkan{" "}
              <strong className="text-[#1a1612]">mematuhinya setelah kalah tiga kali beruntun</strong>.
              Di titik itulah trader manual menggandakan order di luar rencana ("balas dendam"), dan di
              titik itulah bot unggul: aturan yang Anda set adalah aturan yang dijalankan, titik.
            </P>
            <P>
              Di <Link href="/artikel/cara-setting-robot-stockity" className="text-[#047857] underline">STC
              AutoTrade</Link>, seluruh kerangka di artikel ini diterjemahkan jadi empat setelan: nominal
              order (hasil hitungan % Anda), batas step &amp; multiplier martingale, stop loss harian, dan
              stop profit harian. Setelah diset, bot mematuhi batas itu 24 jam tanpa pengecualian.
            </P>
            <InfoBox icon="🧊" title="Aturan dibuat saat kepala dingin">
              Set semua batas SEBELUM sesi dimulai — saat Anda objektif. Jangan pernah mengubah batas di
              tengah sesi yang sedang merah; itu bukan penyesuaian strategi, itu emosi yang menyamar.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Manajemen Modal</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
