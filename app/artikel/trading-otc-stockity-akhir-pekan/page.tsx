/**
 * app/artikel/trading-otc-stockity-akhir-pekan/page.tsx
 * Primary: trading otc stockity · Secondary: aset otc, trading akhir
 * pekan, trading sabtu minggu, otc binary option
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, CardGrid } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "trading-otc-stockity-akhir-pekan",
  title: "Trading OTC Stockity di Akhir Pekan: Cara Kerja, Risiko & Tips 2026",
  description:
    "Apa itu aset OTC di Stockity dan bolehkah trading Sabtu-Minggu? Perbedaan OTC vs pasar reguler, karakter pergerakannya, strategi yang cocok, dan risiko yang wajib dipahami sebelum weekend trading.",
  keywords: [
    "trading otc stockity",
    "aset otc stockity",
    "trading akhir pekan",
    "trading sabtu minggu",
    "otc binary option",
    "weekend trading stockity",
    "apa itu otc trading",
  ],
  breadcrumbName: "Trading OTC Akhir Pekan",
  datePublished: "2026-07-04",
  faq: [
    { q: "Apa itu aset OTC di Stockity?", a: "OTC (over-the-counter) adalah aset dengan harga yang disediakan platform/penyedia likuiditasnya sendiri, bukan dari bursa terbuka. Karena itu OTC tetap tersedia saat pasar global tutup — termasuk Sabtu dan Minggu." },
    { q: "Apakah bisa trading di Stockity hari Sabtu dan Minggu?", a: "Bisa — melalui aset OTC yang tersedia di akhir pekan, plus aset crypto yang memang berjalan 24/7. Pasar forex reguler baru buka kembali Senin pagi (dini hari WIB)." },
    { q: "Apa bedanya pergerakan OTC dengan pasar reguler?", a: "Harga OTC tidak mengikuti bursa global (yang sedang tutup), volumenya lebih tipis, dan pergerakannya kadang lebih 'patuh pola' namun bisa juga tiba-tiba berubah karakter. Strategi yang bekerja di pasar reguler tidak otomatis bekerja sama baiknya di OTC — uji terpisah." },
    { q: "Apakah OTC lebih mudah atau lebih sulit?", a: "Keduanya bisa benar. Sebagian trader merasa pola OTC lebih teratur di kondisi tertentu; sebagian lain kesulitan karena pergerakannya tidak didukung fundamental pasar nyata. Yang pasti: perlakukan OTC sebagai 'pasar berbeda' dengan pengujian demo tersendiri." },
    { q: "Bisakah robot trading jalan di aset OTC akhir pekan?", a: "Bisa — bot mengeksekusi strategi pada aset apapun yang tersedia, termasuk OTC. Praktik bijak: jalankan mode demo dulu khusus di akhir pekan untuk melihat performa strategi di karakter OTC, sebelum memakai saldo real." },
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
        date="4 Juli 2026"
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        title={<>Trading OTC di Akhir Pekan:<br className="hidden sm:block" /> Cara Kerja &amp; Risikonya</>}
        lede={<>Pasar forex tutup Sabtu-Minggu — tapi platform tetap ramai. Jawabannya: <strong className="font-semibold text-[#1a1612]">aset OTC</strong>. Artikel ini menjelaskan dari mana harganya berasal, bedanya dengan pasar reguler, dan cara menyikapinya dengan cerdas.</>}
        stats={[
          { v: "24/7", l: "OTC + Crypto Tersedia" },
          { v: "Platform", l: "Sumber Harga OTC" },
          { v: "Beda", l: "Karakter vs Pasar Reguler" },
          { v: "Demo", l: "Uji Terpisah Dulu" },
        ]}
        related={[
          { href: "/artikel/aset-terbaik-trading-stockity", title: "Aset Terbaik Trading", desc: "Forex, gold, crypto — karakter tiap aset" },
          { href: "/artikel/jam-trading-terbaik-stockity", title: "Jam Trading Terbaik", desc: "Waktu paling kondusif di hari kerja" },
          { href: "/artikel/akun-demo-stockity", title: "Akun Demo Stockity", desc: "Tempat menguji strategi OTC tanpa risiko" },
        ]}
        ctaEyebrow="Weekend Tetap Produktif"
        ctaTitle="Uji Strategi Akhir Pekan Anda dengan STC AutoTrade di Mode Demo"
        ctaDesc="Jalankan bot di aset OTC akun demo — lihat sendiri performa strateginya sebelum menyentuh saldo real."
      >
        <section>
          <SectionLabel>01 · Konsep</SectionLabel>
          <H2>Dari Mana Harga OTC Berasal?</H2>
          <div className="space-y-4">
            <P>
              Pada hari kerja, harga EUR/USD di platform mengikuti pasar antarbank global. Sabtu-Minggu
              pasar itu tutup — maka pada aset berlabel <strong className="text-[#1a1612]">OTC</strong>,
              harga disediakan oleh platform/penyedia likuiditasnya sendiri. Grafiknya nyata dan bisa
              diperdagangkan, tetapi ia <strong className="text-[#1a1612]">tidak merefleksikan transaksi
              bursa global</strong> yang sedang libur.
            </P>
            <P>
              Pengecualian penting: <Link href="/artikel/aset-terbaik-trading-stockity" className="text-[#047857] underline">aset
              crypto</Link> (BTC, ETH, dst.) diperdagangkan 24/7 di pasar nyata — akhir pekan pun harga
              crypto tetap harga pasar sungguhan, bukan OTC.
            </P>
            <InfoBox icon="🏷️" title="Kenali labelnya">
              Aset akhir pekan biasanya diberi penanda "OTC" pada namanya. Jika Anda trading Sabtu-Minggu
              di aset forex/komoditas, hampir pasti Anda sedang di OTC — sadari itu sebelum menerapkan
              strategi andalan Anda.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Perbandingan</SectionLabel>
          <H2>OTC vs Pasar Reguler: Apa Bedanya di Layar?</H2>
          <DataTable
            head={["Aspek", "Pasar Reguler (Senin–Jumat)", "OTC (Akhir Pekan)"]}
            rows={[
              ["Sumber harga", "Bursa/antarbank global", "Penyedia likuiditas platform"],
              ["Penggerak harga", "Berita, fundamental, volume riil", "Algoritma penyedia harga; tanpa berita fundamental"],
              ["Volume & partisipan", "Besar, jutaan pelaku", "Tipis, terbatas"],
              ["Karakter pergerakan", "Tren & pola dipengaruhi sesi global", "Sering lebih 'berpola', tapi bisa berubah tanpa sinyal fundamental"],
              ["Kalender ekonomi", "Sangat relevan", "Tidak relevan (tidak ada rilis di akhir pekan)"],
              ["Validitas backtest reguler", "Ya", "Tidak otomatis — perlu pengujian terpisah"],
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Strategi</SectionLabel>
          <H2>Cara Menyikapi OTC dengan Cerdas</H2>
          <CardGrid
            items={[
              { icon: "🧪", title: "Perlakukan sebagai pasar terpisah", desc: "Statistik strategi Anda di hari kerja tidak otomatis berlaku di OTC. Kumpulkan data demo khusus akhir pekan minimal 2–3 weekend sebelum menilai." },
              { icon: "📏", title: "Perkecil ukuran & ekspektasi", desc: "Karena karakternya berbeda dan datanya lebih sedikit, gunakan nominal lebih kecil dari biasanya — atau tetap di demo sampai statistik pribadi Anda terbentuk." },
              { icon: "🕯️", title: "Price action tetap jadi bahasa utama", desc: "Tanpa berita fundamental, pergerakan OTC murni teknikal. Pola candlestick dan level S&R tetap alat baca yang paling relevan." },
              { icon: "₿", title: "Pertimbangkan crypto untuk weekend", desc: "Jika ingin pasar 'nyata' di akhir pekan, crypto adalah alternatifnya — volume riil 24/7, meski volatilitasnya juga lebih tinggi." },
            ]}
          />
          <div className="mt-4">
            <WarningBox>
              Waspadai narasi "OTC gampang ditebak, pasti profit" yang beredar di media sosial — biasanya
              berakhir pada ajakan membeli "sinyal OTC" atau "bot khusus OTC" dari pihak tak jelas. Tidak
              ada pasar yang pasti; yang berubah hanya karakternya.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Otomasi</SectionLabel>
          <H2>Menjalankan Bot di Akhir Pekan</H2>
          <div className="space-y-4">
            <P>
              <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">STC AutoTrade</Link>{" "}
              dapat berjalan pada aset apapun yang tersedia — termasuk OTC di akhir pekan. Pendekatan yang
              disarankan: gunakan akhir pekan sebagai <strong className="text-[#1a1612]">laboratorium
              demo</strong> — jalankan mode strategi pilihan Anda di aset OTC pada akun demo, kumpulkan
              statistik win rate khusus weekend, lalu putuskan berdasarkan data milik Anda sendiri.
            </P>
            <P>
              Apapun keputusannya, prinsip di{" "}
              <Link href="/artikel/manajemen-modal-trading-binary-option" className="text-[#047857] underline">manajemen
              modal</Link> tidak berubah: stop loss harian aktif, nominal terukur, dan tidak ada sesi
              "balas dendam" — di hari kerja maupun akhir pekan.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Trading OTC</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
