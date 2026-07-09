/**
 * app/artikel/berapa-penghasilan-trading-binary-option/page.tsx
 * Primary: berapa penghasilan trading binary option · Secondary: penghasilan
 * trader binary option, gaji trader, profit trading per bulan
 * Angle: anti-hype dengan matematika jujur (payout 80%, BEP 56%) —
 * membangun trust E-E-A-T sekaligus menjaring query bervolume besar.
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "berapa-penghasilan-trading-binary-option",
  title: "Berapa Penghasilan Trading Binary Option? Hitungan Realistis 2026",
  description:
    "Berapa sebenarnya penghasilan trader binary option? Bukan janji manis — ini matematikanya: payout 80%, break even di win rate 56%, simulasi profit per win rate & modal, dan kenapa 'gaji tetap' dari trading itu mitos.",
  keywords: [
    "berapa penghasilan trading binary option",
    "penghasilan trader binary option",
    "gaji trader binary option",
    "profit trading per bulan",
    "penghasilan trading stockity",
    "apakah trading bisa jadi penghasilan utama",
  ],
  breadcrumbName: "Penghasilan Trading",
  datePublished: "2026-07-09",
  faq: [
    { q: "Berapa penghasilan rata-rata trader binary option?", a: "Tidak ada angka rata-rata resmi — dan mayoritas trader ritel justru merugi, terutama di bulan-bulan awal. Penghasilan ditentukan tiga variabel: win rate, nominal per order, dan disiplin manajemen risiko. Dengan payout 80%, Anda baru mulai untung konsisten di atas win rate 56%." },
    { q: "Apakah trading bisa menggantikan gaji bulanan?", a: "Bisa secara matematis, tapi sangat sulit secara praktik — hasil trading berfluktuasi, tidak seperti gaji. Pendekatan yang sehat: perlakukan trading sebagai penghasilan tambahan dulu, dengan modal yang siap hilang, sampai performa 6–12 bulan membuktikan konsistensi." },
    { q: "Kenapa break even point di 56%, bukan 50%?", a: "Karena struktur payout asimetris: order menang menghasilkan +80% dari nominal, order kalah kehilangan 100%. Dengan 56% win rate, profit dari yang menang baru menutup kerugian yang kalah (0,56 × 80 ≈ 0,44 × 100)." },
    { q: "Berapa modal yang dibutuhkan untuk target profit tertentu?", a: "Kerjakan mundur: profit harian yang realistis berkisar 1–3% dari modal bagi trader disiplin. Target Rp 100 ribu/hari dengan asumsi 2% berarti butuh modal kerja sekitar Rp 5 juta — bukan Rp 500 ribu seperti janji konten hype." },
    { q: "Apakah bot membuat penghasilan jadi pasti?", a: "Tidak. Bot seperti STC AutoTrade mengeksekusi strategi dengan disiplin — tanpa emosi, dengan stop loss/profit otomatis — tetapi tidak mengubah matematika pasar. Yang bot hilangkan adalah kerugian akibat emosi, bukan risiko pasar itu sendiri." },
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
        badge="Edukasi"
        date="9 Juli 2026"
        readMins={9}
        breadcrumbName={seo.breadcrumbName}
        title={<>Berapa Penghasilan Trading<br className="hidden sm:block" /> Binary Option? Ini Hitungannya</>}
        lede={<>Lupakan tangkapan layar profit jutaan di media sosial. Artikel ini menjawab dengan <strong className="font-semibold text-[#1a1612]">matematika yang bisa Anda verifikasi sendiri</strong>: payout, break even point, simulasi per win rate, dan batas realistisnya.</>}
        stats={[
          { v: "80%", l: "Payout Rata-rata per Win" },
          { v: "56%", l: "Win Rate Break Even" },
          { v: "1–3%", l: "Target Harian Realistis" },
          { v: "6–12 bln", l: "Uji Konsistensi Minimal" },
        ]}
        related={[
          { href: "/kalkulator-compounding", title: "Kalkulator Compounding", desc: "Proyeksikan angka artikel ini dengan modal Anda" },
          { href: "/artikel/manajemen-modal-trading-binary-option", title: "Manajemen Modal", desc: "Fondasi yang menentukan bertahan atau tidak" },
          { href: "/artikel/cara-profit-trading-stockity", title: "Cara Profit Trading Stockity", desc: "Strategi & tips konsisten di Stockity" },
        ]}
        ctaEyebrow="Disiplin Adalah Separuh Persamaan"
        ctaTitle="STC AutoTrade Mengeksekusi Tanpa Emosi"
        ctaDesc="Win rate ditentukan strategi; kerugian akibat emosi dihilangkan bot — stop loss & stop profit otomatis setiap hari."
      >
        <section>
          <SectionLabel>01 · Matematika</SectionLabel>
          <H2>Aturan Mainnya: Payout 80%, Kalah Hangus 100%</H2>
          <div className="space-y-4">
            <P>
              Sebelum bicara nominal, pahami strukturnya. Di binary option, order yang menang menghasilkan
              payout — di Stockity rata-rata <strong className="text-[#1a1612]">80% dari nominal
              order</strong> — sedangkan order yang kalah kehilangan seluruh nominalnya. Struktur asimetris
              ini menggeser titik impas Anda dari 50% ke sekitar{" "}
              <strong className="text-[#1a1612]">win rate 56%</strong>.
            </P>
            <P>
              Artinya: trader yang menang setengah dari seluruh order-nya <em>tetap merugi</em>. Setiap
              klaim penghasilan harus diukur terhadap fakta ini — dan inilah alasan mayoritas trader
              ritel yang asal tebak berakhir minus.
            </P>
            <InfoBox icon="🧮" title="Verifikasi sendiri">
              Profit bersih = (order menang × 0,8 × nominal) − (order kalah × nominal). Coba masukkan
              100 order dengan win rate 50%: 50×0,8 − 50×1 = −10 nominal. Rugi.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Simulasi</SectionLabel>
          <H2>Simulasi 100 Order: Profit per Win Rate</H2>
          <div className="space-y-4">
            <P>
              Tabel berikut memakai nominal tetap Rp 14.000 per order (nominal minimum) — 100 order,
              tanpa martingale, tanpa compound:
            </P>
            <DataTable
              head={["Win Rate", "Hasil 100 Order", "Keterangan"]}
              rows={[
                ["50%", "− Rp 140.000", "Rugi — di bawah break even"],
                ["56%", "± Rp 0", "Titik impas"],
                ["60%", "+ Rp 112.000", "Profit tipis — realistis bagi trader disiplin"],
                ["65%", "+ Rp 238.000", "Profit sehat — butuh strategi teruji"],
                ["70%", "+ Rp 364.000", "Sangat baik — sulit dipertahankan jangka panjang"],
              ]}
            />
            <P>
              Perhatikan betapa sensitifnya hasil terhadap win rate: selisih 5 poin mengubah rugi
              menjadi untung. Karena itu klaim &ldquo;win rate 90%&rdquo; di konten promosi patut
              dicurigai — angka 60–65% yang konsisten sudah tergolong sangat baik.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Nominal</SectionLabel>
          <H2>Dari Persentase ke Rupiah: Peran Modal</H2>
          <div className="space-y-4">
            <P>
              Win rate menentukan <em>arah</em>, modal menentukan <em>skala</em>. Target harian yang
              realistis bagi trader disiplin adalah <strong className="text-[#1a1612]">1–3% dari modal
              kerja</strong> — lebih dari itu biasanya berarti mengambil risiko yang tidak berkelanjutan:
            </P>
            <DataTable
              head={["Modal Kerja", "Target 2%/Hari", "± Sebulan (20 hari aktif)"]}
              rows={[
                ["Rp 500.000", "Rp 10.000", "Rp 200.000"],
                ["Rp 2.000.000", "Rp 40.000", "Rp 800.000"],
                ["Rp 5.000.000", "Rp 100.000", "Rp 2.000.000"],
                ["Rp 10.000.000", "Rp 200.000", "Rp 4.000.000"],
              ]}
            />
            <WarningBox>
              Tabel ini adalah proyeksi linier untuk memberi gambaran skala — bukan janji. Hasil nyata
              berfluktuasi: ada hari minus, ada pekan minus. Jangan pernah trading dengan uang kebutuhan
              hidup, dan baca dulu <Link href="/artikel/manajemen-modal-trading-binary-option" className="text-[#92400e] underline">manajemen modal</Link> sebelum menaikkan nominal.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Realita</SectionLabel>
          <H2>Kenapa &ldquo;Gaji Tetap dari Trading&rdquo; Itu Mitos</H2>
          <div className="space-y-4">
            <P>
              Gaji itu pasti; hasil trading itu distribusi probabilitas. Bahkan dengan win rate 60% yang
              stabil, urutan menang-kalah tetap acak — Anda bisa mengalami 7 kekalahan beruntun tanpa
              strategi Anda &ldquo;rusak&rdquo;. Yang membedakan trader bertahan dan yang bangkrut bukan
              prediksinya, melainkan <strong className="text-[#1a1612]">apakah modalnya selamat melewati
              deret buruk itu</strong>.
            </P>
            <P>
              Karena itu pendekatan yang kami sarankan selalu sama: mulai dari{" "}
              <Link href="/artikel/akun-demo-stockity" className="text-[#047857] underline">akun demo</Link>,
              catat performa minimal 6–12 bulan, perlakukan hasilnya sebagai penghasilan tambahan — dan
              batasi kerugian harian secara mekanis, bukan dengan niat.
            </P>
            <InfoBox icon="🤖" title="Di sinilah bot berperan">
              Penelitian perilaku menunjukkan kerugian ritel terbesar bukan dari strategi yang buruk,
              melainkan dari pelanggaran strategi: balas dendam setelah kalah, serakah setelah menang.{" "}
              <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">STC AutoTrade</Link>{" "}
              menghilangkan variabel itu — order dieksekusi sesuai aturan, berhenti otomatis di stop loss
              atau stop profit harian.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Penghasilan Trading</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
