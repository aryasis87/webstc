/**
 * app/artikel/bonus-deposit-stockity/page.tsx
 * Primary: bonus deposit stockity · Secondary: kode promo stockity,
 * bonus stockity hari ini, syarat bonus stockity
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "bonus-deposit-stockity",
  title: "Bonus Deposit Stockity: Cara Klaim, Syarat & Jebakannya 2026",
  description:
    "Panduan bonus deposit & kode promo Stockity: jenis bonus yang tersedia, cara klaim saat deposit, syarat turnover sebelum withdraw, dan kapan sebaiknya bonus TIDAK diambil.",
  keywords: [
    "bonus deposit stockity",
    "kode promo stockity",
    "bonus stockity",
    "bonus stockity hari ini",
    "syarat bonus stockity",
    "cara pakai kode promo stockity",
    "promo stockity",
  ],
  breadcrumbName: "Bonus Deposit Stockity",
  datePublished: "2026-07-04",
  faq: [
    { q: "Bagaimana cara memakai kode promo di Stockity?", a: "Saat mengisi form deposit, cari kolom kode promo/bonus, masukkan kodenya sebelum menyelesaikan pembayaran, dan pastikan bonus tercantum sebelum konfirmasi. Bonus umumnya tidak bisa ditambahkan setelah deposit selesai." },
    { q: "Apakah bonus Stockity bisa langsung ditarik?", a: "Tidak. Dana bonus umumnya terikat syarat trading (turnover) — Anda harus mencapai volume trading tertentu sebelum bonus dan profit yang terkait bisa ditarik. Selalu baca syarat di halaman promosi sebelum klaim." },
    { q: "Dari mana mendapat kode promo Stockity yang valid?", a: "Sumber paling aman: halaman promosi resmi di platform Stockity, email/notifikasi resmi, dan event seperti turnamen. Hati-hati dengan kode dari situs pihak ketiga yang meminta Anda mendaftar lewat tautan mencurigakan." },
    { q: "Apakah sebaiknya selalu mengambil bonus deposit?", a: "Tidak selalu. Jika Anda berencana withdraw cepat atau modal kecil, syarat turnover bisa lebih merepotkan daripada nilai bonusnya. Bonus paling masuk akal bagi trader aktif yang volume tradingnya memang tinggi secara natural." },
    { q: "Apakah bonus memengaruhi robot trading?", a: "Tidak — bot seperti STC AutoTrade membaca saldo akun seperti biasa. Namun ingat: volume trading dari bot tetap dihitung untuk turnover, jadi bot justru bisa membantu memenuhi syarat bonus lebih cepat — dengan manajemen risiko yang tetap ketat." },
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
        title={<>Bonus Deposit Stockity:<br className="hidden sm:block" /> Cara Klaim &amp; Jebakannya</>}
        lede={<>Bonus deposit bisa menambah modal trading secara signifikan — <strong className="font-semibold text-[#1a1612]">tapi hanya jika Anda paham syaratnya</strong>. Artikel ini membahas jenis bonus Stockity, cara klaim yang benar, syarat turnover, dan kapan bonus justru sebaiknya dilewati.</>}
        stats={[
          { v: "Turnover", l: "Syarat Utama Bonus" },
          { v: "Sebelum", l: "Klaim Saat Deposit" },
          { v: "Resmi", l: "Hanya dari Platform" },
          { v: "Opsional", l: "Tidak Wajib Diambil" },
        ]}
        related={[
          { href: "/artikel/cara-deposit-stockity", title: "Cara Deposit Stockity", desc: "Panduan isi saldo via bank & e-wallet" },
          { href: "/artikel/turnamen-stockity", title: "Turnamen Stockity", desc: "Kompetisi trading berhadiah, termasuk yang gratis" },
          { href: "/artikel/minimal-deposit-stockity", title: "Minimal Deposit Stockity", desc: "Modal minimum & strategi modal aman" },
        ]}
        ctaEyebrow="Modal Sudah Siap?"
        ctaTitle="Maksimalkan Modal Anda dengan Trading Otomatis STC AutoTrade"
        ctaDesc="6 mode strategi dengan stop loss otomatis — volume trading terkelola, risiko terjaga. Gratis untuk member."
      >
        <section>
          <SectionLabel>01 · Jenis</SectionLabel>
          <H2>Jenis Bonus yang Umum Tersedia di Stockity</H2>
          <DataTable
            head={["Jenis", "Bentuk", "Catatan Penting"]}
            rows={[
              ["Bonus deposit (%)", "Tambahan saldo sekian % dari nominal deposit", "Paling umum; makin besar deposit, makin besar bonus"],
              ["Kode promo", "Kode yang dimasukkan saat deposit", "Dari halaman promosi resmi, email, atau event"],
              ["Bonus event/musiman", "Promo tanggal tertentu (hari besar, ulang tahun platform)", "Muncul di banner aplikasi — durasinya pendek"],
              ["Hadiah turnamen", "Saldo real dari kompetisi trading", "Bukan bonus deposit — lihat artikel turnamen"],
            ]}
          />
          <div className="mt-4">
            <P>
              Detail persentase dan ketersediaan bonus berubah dari waktu ke waktu — selalu rujuk halaman
              promosi resmi di dalam platform sebagai sumber kebenaran, bukan tangkapan layar lama yang
              beredar di media sosial.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Cara Klaim</SectionLabel>
          <H2>Cara Klaim Bonus Saat Deposit</H2>
          <Steps
            items={[
              { title: "Buka menu deposit seperti biasa", desc: <>Ikuti alur <Link href="/artikel/cara-deposit-stockity" className="text-[#047857] underline">deposit normal</Link> — pilih metode pembayaran dan nominal.</> },
              { title: "Periksa banner promo & kolom kode", desc: "Bonus aktif biasanya tampil otomatis di halaman deposit. Jika Anda punya kode promo, masukkan di kolom yang tersedia SEBELUM melanjutkan pembayaran." },
              { title: "Baca syaratnya — jangan dilewati", desc: "Klik detail promo dan catat: berapa turnover yang disyaratkan, berlaku untuk akun apa, dan sampai kapan. Ini 30 detik yang menyelamatkan Anda dari kebingungan saat withdraw." },
              { title: "Konfirmasi bahwa bonus tercantum", desc: "Pastikan ringkasan deposit menampilkan bonus sebelum Anda membayar. Bonus umumnya tidak bisa diklaim mundur setelah transaksi selesai." },
              { title: "Cek saldo setelah pembayaran", desc: "Saldo utama + bonus akan tampil setelah deposit terkonfirmasi. Jika bonus tidak masuk padahal syarat terpenuhi, hubungi support resmi dengan bukti transaksi." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Syarat Turnover</SectionLabel>
          <H2>Memahami Turnover: Alasan Bonus "Tidak Bisa Ditarik"</H2>
          <div className="space-y-4">
            <P>
              Keluhan paling umum seputar bonus — "kok tidak bisa withdraw?" — hampir selalu berakar pada
              syarat <strong className="text-[#1a1612]">turnover</strong>: total volume trading yang harus
              dicapai sebelum dana bonus (dan kadang profit terkait) boleh ditarik. Contoh ilustrasi: bonus
              Rp100.000 dengan syarat turnover 30× berarti Anda perlu mengakumulasi volume order
              Rp3.000.000 lebih dulu.
            </P>
            <P>
              Karena itu bonus paling cocok untuk trader yang memang aktif. Volume dari{" "}
              <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">trading
              otomatis</Link> juga dihitung — bot yang berjalan konsisten bisa memenuhi turnover lebih
              cepat, selama batas risiko harian (
              <Link href="/artikel/cara-menghindari-loss-stockity" className="text-[#047857] underline">stop loss &amp;
              stop profit</Link>) tetap aktif.
            </P>
            <WarningBox>
              Jangan pernah memperbesar nominal order di luar rencana hanya demi mengejar turnover — itu
              cara tercepat kehilangan modal yang bahkan lebih besar dari nilai bonusnya. Kalau syaratnya
              tidak masuk akal untuk gaya trading Anda, lewati bonusnya.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Keputusan</SectionLabel>
          <H2>Kapan Bonus Layak Diambil — dan Kapan Tidak</H2>
          <DataTable
            head={["Situasi Anda", "Rekomendasi"]}
            rows={[
              ["Trader aktif / bot berjalan rutin, volume tinggi natural", "Ambil — turnover akan tercapai dengan sendirinya"],
              ["Berencana deposit besar untuk jangka panjang", "Ambil — nilai bonus signifikan, waktu memenuhi syarat longgar"],
              ["Ingin bisa withdraw kapan saja tanpa syarat", "Lewati — kebebasan penuh atas saldo lebih berharga"],
              ["Modal kecil, masih tahap belajar di akun real", "Lewati dulu — fokus ke konsistensi, bukan mengejar volume"],
              ["Baru pertama deposit & belum baca syarat promo", "Tunda klaim — baca syarat dulu, bonus akan ada lagi"],
            ]}
          />
          <div className="mt-4">
            <InfoBox icon="🎯" title="Bonus adalah alat, bukan tujuan">
              Trader yang profit konsisten memperlakukan bonus sebagai tambahan kecil di atas sistem yang
              sudah berjalan — bukan alasan mengubah manajemen risiko. Sistemnya dulu, bonusnya belakangan.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Seputar Bonus Stockity</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
