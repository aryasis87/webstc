/**
 * app/artikel/cara-membuat-bot-trading-sendiri/page.tsx
 * Primary: cara membuat bot trading sendiri · Secondary: cara bikin robot
 * trading, belajar membuat bot trading, bahasa pemrograman bot trading
 *
 * Panduan jujur untuk yang ingin mengerjakan sendiri. Ditulis benar-benar
 * berguna — bukan umpan yang setengah jalan menyuruh membeli. Ajakan menutup
 * halaman ditaruh di akhir dan tidak memaksa.
 */

import Link from "next/link";
import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";
import { TELEGRAM, BlokOrder } from "../_components/TombolTelegram";

const seo: ArtikelSeoDef = {
  slug: "cara-membuat-bot-trading-sendiri",
  title: "Cara Membuat Bot Trading Sendiri: Langkah, Bagian Tersulit & Waktu Nyatanya",
  description:
    "Panduan jujur membuat bot trading sendiri: bekal yang dibutuhkan, langkah besarnya, lima bagian yang selalu diremehkan pemula, perkiraan waktu realistis, dan kapan memesan justru lebih murah.",
  keywords: [
    "cara membuat bot trading sendiri",
    "cara bikin robot trading",
    "belajar membuat bot trading",
    "bahasa pemrograman bot trading",
    "membuat bot trading python",
    "api platform trading",
  ],
  breadcrumbName: "Membuat Bot Sendiri",
  datePublished: "2026-07-30",
  faq: [
    {
      q: "Bahasa pemrograman apa yang paling cocok untuk bot trading?",
      a: "Python paling ramah untuk memulai karena pustakanya banyak dan kodenya ringkas. JavaScript atau TypeScript masuk akal bila Anda juga ingin membuat tampilannya. Untuk bot yang harus bereaksi dalam hitungan milidetik, bahasa yang lebih dekat ke mesin lebih tepat — tetapi hampir semua orang tidak membutuhkan itu.",
    },
    {
      q: "Berapa lama membuat bot trading sendiri dari nol?",
      a: "Bila Anda sudah bisa memprogram, bot sederhana yang bisa mengirim order bisa jadi dalam satu sampai dua pekan. Yang memakan waktu adalah setelahnya: menangani koneksi putus, order ganda, dan perbedaan jam. Sampai benar-benar layak dipakai dengan uang sungguhan, hitungannya bulan, bukan pekan.",
    },
    {
      q: "Apakah harus punya server sendiri?",
      a: "Tergantung rancangannya. Bot yang berjalan di komputer Anda cukup selama komputer menyala dan koneksi stabil. Begitu Anda ingin bot berjalan tanpa mengawasi, server kecil menjadi wajib. Alternatifnya, jalankan eksekusi di dalam aplikasi ponsel — itu yang kami pilih agar tidak bergantung server sama sekali.",
    },
    {
      q: "Apa kesalahan paling umum pemula?",
      a: "Menguji hanya pada keadaan normal. Bot terlihat sempurna selama koneksi bagus dan jawaban selalu datang. Masalah baru muncul ketika jaringan tersendat tepat saat order dikirim, dan tanpa penanganan itu bot bisa mengirim order yang sama dua kali.",
    },
    {
      q: "Lebih baik membuat sendiri atau memesan?",
      a: "Bila tujuan Anda belajar, buat sendiri — pengalamannya berharga dan tidak tergantikan. Bila tujuan Anda punya sistem yang berjalan secepatnya, hitung berapa bulan waktu Anda yang akan terpakai lalu bandingkan dengan biaya memesan. Sering kali jawabannya menjadi jelas dengan sendirinya.",
    },
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
        date="30 Juli 2026"
        readMins={9}
        breadcrumbName={seo.breadcrumbName}
        title={<>Cara Membuat Bot<br className="hidden sm:block" /> Trading Sendiri</>}
        lede={
          <>
            Ditulis oleh orang yang sudah membangunnya — termasuk bagian yang{" "}
            <strong className="font-semibold text-[#1a1612]">tidak pernah muncul di tutorial</strong>.
            Kalau setelah membaca ini Anda tetap ingin mengerjakannya sendiri, bagus:
            berarti Anda tahu apa yang Anda hadapi.
          </>
        }
        stats={[
          { v: "5 bagian", l: "Tersulit" },
          { v: "Bulan", l: "Bukan Pekan" },
          { v: "Jujur", l: "Termasuk Risikonya" },
          { v: "Gratis", l: "Panduan Ini" },
        ]}
        related={[
          { href: "/artikel/jasa-pembuatan-aplikasi-trading", title: "Pesan Saja", desc: "Bila waktu Anda lebih mahal dari biayanya." },
          { href: "/artikel/biaya-pembuatan-aplikasi", title: "Biaya Pembuatan Aplikasi", desc: "Perbandingan untuk menaksir anggaran." },
          { href: "/artikel/robot-trading-terbaik-indonesia", title: "Memilih Robot Trading", desc: "7 kriteria & tanda bahaya." },
        ]}
        ctaEyebrow="Kalau Berubah Pikiran"
        ctaTitle="Tidak ada salahnya bertanya dulu"
        ctaDesc="Kami akan bilang terus terang bila kebutuhan Anda sebenarnya bisa dikerjakan sendiri."
        ctaHref={TELEGRAM}
        ctaLabel="Tanya via Telegram"
      >
        <section>
          <SectionLabel>01 · Bekal</SectionLabel>
          <H2>Yang Perlu Anda Punya Sebelum Mulai</H2>
          <div className="space-y-4">
            <P>
              Tidak perlu gelar apa pun, tetapi ada tiga bekal yang sulit dilewati. Kalau
              salah satunya belum ada, sebaiknya diselesaikan dulu daripada memaksa jalan
              dan berhenti di tengah.
            </P>
            <CardGrid
              items={[
                {
                  icon: "💻",
                  title: "Dasar pemrograman",
                  desc: "Cukup satu bahasa. Python paling ramah untuk memulai. Yang penting Anda paham perulangan, kondisi, dan cara membaca pesan galat — bukan hafal sintaks.",
                },
                {
                  icon: "🔑",
                  title: "Akses ke platform",
                  desc: "Bot perlu cara untuk membaca harga dan mengirim order. Sebagian platform menyediakannya secara resmi, sebagian tidak. Pastikan hal ini SEBELUM menulis satu baris kode.",
                },
                {
                  icon: "📉",
                  title: "Strategi yang sudah jelas",
                  desc: "Bot hanya menjalankan aturan. Bila aturannya belum jelas di kepala Anda, tidak ada kode yang bisa memperbaikinya — ia hanya akan mengulang kekeliruan dengan lebih rapi.",
                },
              ]}
            />
            <WarningBox>
              Periksa juga aturan pemakaian platform yang Anda tuju. Sebagian mengizinkan
              akses program, sebagian membatasinya, dan sebagian melarangnya. Mengetahui ini
              di awal jauh lebih murah daripada mengetahuinya setelah akun Anda dibekukan.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Langkah</SectionLabel>
          <H2>Urutan Pengerjaan yang Masuk Akal</H2>
          <div className="space-y-4">
            <P>
              Godaan terbesar pemula adalah langsung menulis strategi. Jangan. Urutan di
              bawah membuat Anda menemukan hambatan besar sedini mungkin, bukan setelah
              sebulan pekerjaan terlanjur menumpuk.
            </P>
            <Steps
              items={[
                {
                  title: "Baca harga dulu, jangan kirim apa pun",
                  desc: "Buat program yang hanya mengambil data harga lalu menampilkannya. Sederhana, tetapi di sinilah Anda menemukan bentuk datanya, satuan waktunya, dan seberapa sering ia diperbarui.",
                },
                {
                  title: "Kirim satu order di akun demo",
                  desc: "Satu order saja, ditulis manual, tanpa strategi apa pun. Tujuannya memastikan Anda benar-benar bisa mengirim dan menerima jawabannya. Banyak proyek mati di langkah ini — lebih baik tahu sekarang.",
                },
                {
                  title: "Baru tulis logika strateginya",
                  desc: "Setelah membaca dan mengirim terbukti bekerja. Pisahkan bagian ini dari bagian pengiriman, supaya strategi bisa diganti tanpa menyentuh apa pun yang lain.",
                },
                {
                  title: "Tambahkan pengaman sebelum akun nyata",
                  desc: "Batas kerugian harian, batas jumlah order, dan tombol berhenti. Kerjakan ini SEBELUM menyentuh akun sungguhan, bukan setelah kejadian pertama yang merugikan.",
                },
                {
                  title: "Jalankan berdampingan selama dua pekan",
                  desc: "Biarkan bot berjalan di akun demo sementara Anda mengamati. Bandingkan yang dilakukannya dengan yang Anda harapkan. Selisihnya hampir selalu ada, dan di situlah bug sebenarnya bersembunyi.",
                },
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>03 · Bagian Tersulit</SectionLabel>
          <H2>Lima Hal yang Selalu Diremehkan</H2>
          <div className="space-y-4">
            <P>
              Bagian ini yang membuat perkiraan &ldquo;dua pekan&rdquo; berubah menjadi
              beberapa bulan. Kelimanya kami alami sendiri, dan tidak satu pun ada di
              tutorial yang pernah kami baca.
            </P>
            <DataTable
              head={["Persoalan", "Kenapa menyakitkan"]}
              rows={[
                ["Koneksi putus saat mengirim", "Order mungkin sudah masuk, mungkin belum. Tanpa penanganan, bot mengirim ulang dan Anda punya dua order"],
                ["Jam yang tidak sama", "Jam perangkat, jam server, dan jam platform bisa berselisih. Selisih beberapa detik cukup membuat order masuk di menit yang keliru"],
                ["Bentuk data berubah", "Satu penanda waktu berubah dari angka menjadi teks, dan seluruh perhitungan diam-diam menjadi salah tanpa satu pun pesan galat"],
                ["Aset yang tutup", "Sebagian aset tidak buka setiap saat. Order ditolak dengan alasan yang tidak menjelaskan apa-apa, dan Anda menduga bot yang rusak"],
                ["Riwayat yang tidak cocok", "Catatan bot dan catatan platform berbeda. Menentukan mana yang benar jauh lebih rumit daripada kelihatannya"],
              ]}
            />
            <InfoBox icon="🔬" title="Contoh nyata dari sistem kami">
              Salah satu mode di aplikasi kami dulu tidak pernah masuk order sama sekali.
              Penyebabnya ternyata satu baris: penanda waktu datang sebagai teks, sementara
              kode hanya menerima angka, sehingga setiap data dibuang diam-diam. Tidak ada
              pesan galat, tidak ada aplikasi yang berhenti — bot hanya menunggu selamanya.
              Persoalan semacam ini yang membedakan &ldquo;jalan di layar saya&rdquo; dengan
              &ldquo;layak dipakai orang lain&rdquo;.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Waktu</SectionLabel>
          <H2>Perkiraan Waktu yang Jujur</H2>
          <div className="space-y-4">
            <DataTable
              head={["Tahap", "Sudah bisa memprogram", "Belajar sambil jalan"]}
              rows={[
                ["Membaca harga", "1–3 hari", "1–2 pekan"],
                ["Mengirim order pertama", "2–5 hari", "1–3 pekan"],
                ["Logika strategi", "3–7 hari", "2–4 pekan"],
                ["Pengaman & penanganan galat", "1–2 pekan", "3–6 pekan"],
                ["Layak dipakai dengan uang nyata", "1–2 bulan", "4–8 bulan"],
              ]}
            />
            <P>
              Kolom terakhir bukan untuk menakut-nakuti. Itu perkiraan wajar bila Anda
              mengerjakannya di sela pekerjaan lain, yang memang keadaan hampir semua orang.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>05 · Perbandingan</SectionLabel>
          <H2>Kapan Membuat Sendiri, Kapan Memesan</H2>
          <div className="space-y-5">
            <P>
              Kami menjual jasa pembuatan aplikasi, jadi Anda berhak curiga pada bagian ini.
              Karena itu kami tulis apa adanya, termasuk alasan untuk tidak memesan.
            </P>
            <DataTable
              head={["Keadaan Anda", "Saran kami"]}
              rows={[
                ["Ingin belajar, waktu longgar", "Buat sendiri — pengalamannya tidak tergantikan"],
                ["Sudah bisa memprogram, kebutuhan sederhana", "Buat sendiri, kemungkinan besar cukup sepekan"],
                ["Butuh jalan bulan ini", "Pesan — waktu Anda lebih mahal daripada selisih biayanya"],
                ["Akan dipakai orang lain, bukan sendiri", "Pesan — beban pemeliharaannya bagian tersulit, bukan pembuatannya"],
                ["Tidak bisa memprogram sama sekali", "Pesan, atau sewa dulu untuk menguji apakah rencananya jalan"],
              ]}
            />
            <P>
              Bila baris ketiga atau keempat yang paling menggambarkan keadaan Anda,{" "}
              <Link href="/artikel/jasa-pembuatan-aplikasi-trading" className="text-[#047857] underline">
                harga dan waktu pengerjaan kami
              </Link>{" "}
              terbuka di halaman jasa. Bila baris pertama atau kedua — kerjakan sendiri, dan
              semoga panduan ini menghemat beberapa pekan Anda.
            </P>
            <BlokOrder
              eyebrow="Bertanya Dulu Boleh"
              catatan="Kami akan bilang terus terang bila kebutuhan Anda sebenarnya bisa dikerjakan sendiri dalam sepekan."
            />
          </div>
        </section>

        <section>
          <SectionLabel>06 · FAQ</SectionLabel>
          <H2>Pertanyaan yang Sering Muncul</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
