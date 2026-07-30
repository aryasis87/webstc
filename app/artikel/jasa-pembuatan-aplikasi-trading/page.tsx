/**
 * app/artikel/jasa-pembuatan-aplikasi-trading/page.tsx
 * Primary: jasa pembuatan aplikasi trading · Secondary: jasa bikin bot
 * trading, sewa aplikasi trading, jasa pembuatan software, developer bot
 * binary option
 *
 * Halaman jasa: menawarkan pembuatan dan penyewaan aplikasi sejenis
 * STC AutoTrade, ditulis dari pengalaman membangunnya sendiri.
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";
import Link from "next/link";

const KONTAK = "mailto:supportstockity@gmail.com";

const seo: ArtikelSeoDef = {
  slug: "jasa-pembuatan-aplikasi-trading",
  title: "Jasa Pembuatan & Sewa Aplikasi Trading Otomatis — Dibangun dari Pengalaman Nyata",
  description:
    "Menerima pembuatan aplikasi bot trading otomatis seperti STC AutoTrade — Android, web, panel admin, hingga bot Telegram. Tersedia juga opsi sewa bulanan tanpa biaya pembuatan.",
  keywords: [
    "jasa pembuatan aplikasi trading",
    "jasa bikin bot trading",
    "sewa aplikasi trading",
    "jasa pembuatan software",
    "developer bot binary option",
    "jasa pembuatan aplikasi android",
    "white label bot trading",
  ],
  breadcrumbName: "Jasa Pembuatan Aplikasi",
  datePublished: "2026-07-30",
  faq: [
    {
      q: "Berapa biaya pembuatan aplikasi trading otomatis?",
      a: "Bergantung lingkupnya. Bot sederhana dengan satu strategi berada di kisaran belasan juta, sementara sistem selengkap STC AutoTrade — aplikasi Android, versi web, panel admin, dan bot Telegram — berada di kisaran puluhan hingga ratusan juta. Lingkup ditentukan bersama sebelum angka final disepakati.",
    },
    {
      q: "Apa bedanya beli putus dan sewa?",
      a: "Beli putus berarti kode dan seluruh sistem menjadi milik Anda, dengan biaya awal lebih besar dan biaya pemeliharaan tahunan. Sewa berarti Anda membayar bulanan dan kami yang menanggung server, pembaruan, serta perbaikan — cocok bila ingin mulai cepat tanpa modal besar di awal.",
    },
    {
      q: "Berapa lama pengerjaannya?",
      a: "Bot sederhana umumnya dua sampai empat pekan. Sistem lengkap dengan aplikasi Android, panel admin, dan pengelolaan pengguna biasanya dua sampai empat bulan, tergantung seberapa banyak penyesuaian yang diminta.",
    },
    {
      q: "Apakah bisa untuk platform selain Stockity?",
      a: "Bisa, selama platform tersebut memiliki antarmuka yang dapat diakses program. Bagian tersulit biasanya bukan menulis strateginya, melainkan memahami cara platform mengirim data harga dan menerima order — dan itu berbeda di tiap platform.",
    },
    {
      q: "Apakah ada jaminan keuntungan?",
      a: "Tidak, dan siapa pun yang menjanjikannya sebaiknya Anda hindari. Yang kami buat adalah alat yang menjalankan aturan Anda secara konsisten. Apakah aturan itu menguntungkan, ditentukan oleh strateginya — bukan oleh perangkat lunaknya.",
    },
    {
      q: "Apakah kode sumbernya diserahkan?",
      a: "Pada paket beli putus, ya — beserta dokumentasi dan panduan penerapannya. Pada paket sewa, kode tetap kami pegang karena sistemnya berjalan di infrastruktur kami.",
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
        badge="Panduan"
        date="30 Juli 2026"
        readMins={7}
        breadcrumbName={seo.breadcrumbName}
        title={<>Jasa Pembuatan &amp; Sewa<br className="hidden sm:block" /> Aplikasi Trading Otomatis</>}
        lede={
          <>
            Kami membangun STC AutoTrade dari nol — aplikasi Android, versi web, panel
            admin, hingga bot Telegram. Sistem yang sama{" "}
            <strong className="font-semibold text-[#1a1612]">bisa dibuatkan untuk Anda</strong>,
            atau disewa bila ingin mulai tanpa biaya pembuatan.
          </>
        }
        stats={[
          { v: "2–4 bln", l: "Sistem Lengkap" },
          { v: "2–4 pekan", l: "Bot Sederhana" },
          { v: "Beli / Sewa", l: "Dua Pilihan" },
          { v: "Nyata", l: "Sudah Berjalan" },
        ]}
        related={[
          { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Contoh nyata sistem yang kami bangun." },
          { href: "/download", title: "Coba Produknya", desc: "Unduh STC AutoTrade untuk melihat hasilnya." },
          { href: "/kontak", title: "Hubungi Kami", desc: "Diskusikan kebutuhan Anda." },
        ]}
        ctaEyebrow="Konsultasi Gratis"
        ctaTitle="Ceritakan kebutuhan Anda"
        ctaDesc="Kami bantu memetakan lingkup dan memperkirakan biayanya tanpa biaya konsultasi."
      >
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Kenapa Kami</SectionLabel>
            <H2>Dibangun dari Pengalaman, Bukan dari Teori</H2>
            <P>
              STC AutoTrade bukan contoh yang dibuat untuk portofolio. Ia berjalan setiap
              hari, dipakai ratusan pengguna, dan sudah melewati hal-hal yang hanya muncul
              ketika perangkat lunak benar-benar dipakai orang.
            </P>
            <P>
              Kami pernah menangani koneksi realtime yang terputus di tengah order, hasil
              trading yang tidak cocok karena satu penanda berbeda format, perpindahan
              database, sampai memindahkan seluruh eksekusi dari server ke perangkat
              pengguna. Pengalaman semacam itu tidak didapat dari membaca dokumentasi.
            </P>
            <InfoBox icon="🔍" title="Silakan periksa sendiri">
              Sebelum memutuskan, unduh dan pakai STC AutoTrade. Itu cara paling jujur
              menilai kualitas kerja kami — Anda melihat produknya langsung, bukan janji.
            </InfoBox>
          </div>
        </section>

        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f6f4ef]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Layanan</SectionLabel>
            <H2>Yang Bisa Kami Kerjakan</H2>
            <CardGrid
              items={[
                {
                  icon: "🤖",
                  title: "Bot trading otomatis",
                  desc: "Eksekusi order otomatis mengikuti aturan Anda — jadwal, indikator teknikal, pola candle, atau strategi khusus yang Anda tentukan sendiri.",
                },
                {
                  icon: "📱",
                  title: "Aplikasi Android",
                  desc: "Aplikasi yang dipasang di perangkat pengguna, lengkap dengan koneksi realtime, notifikasi, dan penyimpanan sesi.",
                },
                {
                  icon: "🖥️",
                  title: "Versi web & backend",
                  desc: "Dashboard berbasis peramban dengan server yang menjalankan eksekusi, sehingga bisa dipakai dari komputer maupun ponsel.",
                },
                {
                  icon: "🛡️",
                  title: "Panel admin & whitelist",
                  desc: "Pengelolaan pengguna, pembatasan akses, statistik pemakaian, dan tingkatan admin.",
                },
                {
                  icon: "💬",
                  title: "Bot Telegram",
                  desc: "Notifikasi otomatis, asisten untuk pengguna, atau panel admin lewat Telegram.",
                },
                {
                  icon: "🌐",
                  title: "Situs & SEO",
                  desc: "Halaman produk yang cepat, terstruktur rapi, dan disiapkan agar mudah ditemukan mesin pencari.",
                },
              ]}
            />
          </div>
        </section>

        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Pilihan</SectionLabel>
            <H2>Beli Putus atau Sewa</H2>
            <P>
              Dua jalur dengan pertimbangan berbeda. Yang tepat bergantung pada seberapa
              cepat Anda ingin mulai dan seberapa besar kendali yang Anda inginkan.
            </P>
            <DataTable
              head={["", "Beli Putus", "Sewa Bulanan"]}
              rows={[
                ["Biaya awal", "Lebih besar", "Kecil atau tanpa biaya awal"],
                ["Kepemilikan kode", "Menjadi milik Anda", "Tetap pada kami"],
                ["Server & pemeliharaan", "Anda yang menanggung", "Sudah termasuk"],
                ["Pembaruan platform", "Biaya pemeliharaan tahunan", "Sudah termasuk"],
                ["Cocok untuk", "Yang ingin kendali penuh", "Yang ingin mulai cepat"],
              ]}
            />
            <InfoBox icon="💡" title="Yang sering dilupakan">
              Platform trading berubah tanpa pemberitahuan — format data, alamat antarmuka,
              maupun aturan pemakaiannya. Sistem yang dibeli putus tetap membutuhkan
              penyesuaian berkala. Karena itu paket beli putus selalu kami sertai pilihan
              pemeliharaan tahunan.
            </InfoBox>
          </div>
        </section>

        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f6f4ef]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Paket</SectionLabel>
            <H2>Tiga Tingkat Lingkup</H2>
            <DataTable
              head={["Paket", "Isi", "Perkiraan Waktu"]}
              rows={[
                ["Dasar", "Bot satu platform, satu sampai dua strategi, tanpa panel admin", "2–4 pekan"],
                ["Menengah", "Beberapa mode strategi, panel admin, pengelolaan pengguna", "1–2 bulan"],
                ["Lengkap", "Aplikasi Android, versi web, backend, panel admin, bot Telegram", "2–4 bulan"],
              ]}
            />
            <P>
              Biaya ditentukan setelah lingkupnya jelas. Kami tidak memasang angka mati di
              halaman ini karena kebutuhan tiap klien berbeda jauh — dan angka yang
              dipasang sembarangan biasanya berakhir merugikan salah satu pihak.
            </P>
            <WarningBox>
              Waspadai penyedia jasa yang menjanjikan aplikasi trading lengkap dengan harga
              sangat murah dan waktu sangat singkat. Bagian tersulit bukan membuat
              tampilannya, melainkan menangani hal-hal yang muncul saat sistem benar-benar
              dipakai: koneksi terputus, order ganda, dan hasil yang tidak cocok.
            </WarningBox>
          </div>
        </section>

        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Alur Kerja</SectionLabel>
            <H2>Dari Obrolan Awal sampai Berjalan</H2>
            <Steps
              items={[
                {
                  title: "Konsultasi — gratis",
                  desc: "Ceritakan kebutuhan Anda. Kami bantu memetakan mana yang benar-benar perlu dan mana yang bisa ditunda, agar biayanya tidak membengkak tanpa alasan.",
                },
                {
                  title: "Penawaran & lingkup tertulis",
                  desc: "Anda menerima rincian apa saja yang dikerjakan, perkiraan waktu, dan biayanya. Yang tidak tertulis tidak dihitung sebagai bagian pekerjaan.",
                },
                {
                  title: "Pengerjaan bertahap",
                  desc: "Dikerjakan per bagian, bukan sekali jadi di akhir. Anda bisa mencoba tiap bagian begitu selesai, sehingga penyesuaian dilakukan sedini mungkin.",
                },
                {
                  title: "Uji coba dan penerapan",
                  desc: "Sistem diuji pada keadaan sungguhan sebelum dipakai pengguna. Untuk bot trading, pengujian selalu dimulai dari akun demo.",
                },
                {
                  title: "Pendampingan setelah rilis",
                  desc: "Masa pendampingan disertakan pada tiap paket. Sesudahnya, tersedia pemeliharaan berkala bila Anda membutuhkan.",
                },
              ]}
            />
          </div>
        </section>

        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f6f4ef]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Kejujuran</SectionLabel>
            <H2>Yang Tidak Kami Janjikan</H2>
            <P>
              Kami membuat perangkat lunak, bukan mesin uang. Bot menjalankan aturan Anda
              lebih cepat dan lebih konsisten — tetapi ia tidak memperbaiki aturan yang
              keliru. Aturan yang salah akan diulang dengan rapi.
            </P>
            <P>
              Kami juga tidak menjanjikan keuntungan, tidak menjual strategi ajaib, dan
              tidak menyarankan Anda memakai dana yang tidak siap Anda kehilangan.
              Perhitungan jujur mengenai risikonya ada di{" "}
              <Link href="/artikel/berapa-penghasilan-trading-binary-option" className="text-[#047857] underline">
                artikel penghasilan trading
              </Link>
              .
            </P>
            <P>
              Bila yang Anda cari adalah penyedia jasa yang mengiyakan semua permintaan,
              kami bukan pilihan yang tepat. Kami akan mengatakan bila sebuah permintaan
              tidak masuk akal secara teknis — sejak awal, bukan setelah dibayar.
            </P>
            <div className="mt-7">
              <a
                href={KONTAK}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1a1612] text-[#f6f4ef] text-sm font-semibold no-underline hover:bg-[#1a1612]/85 transition-colors"
              >
                Konsultasikan Kebutuhan Anda
              </a>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>FAQ</SectionLabel>
            <H2>Pertanyaan yang Sering Muncul</H2>
            <FaqList items={seo.faq} />
          </div>
        </section>
      </ArtikelShell>
    </>
  );
}
