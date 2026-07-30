/**
 * app/artikel/jasa-pembuatan-bot-telegram/page.tsx
 * Primary: jasa pembuatan bot telegram · Secondary: jasa bikin bot telegram,
 * developer bot telegram indonesia, bot telegram notifikasi otomatis
 *
 * Lini jasa terpisah dengan harga jauh lebih ringan daripada aplikasi penuh.
 * Kluster kata kuncinya berbeda, jadi tidak berebut dengan halaman jasa utama.
 */

import Link from "next/link";
import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";
import { TELEGRAM, TombolTelegram, BlokOrder } from "../_components/TombolTelegram";

const seo: ArtikelSeoDef = {
  slug: "jasa-pembuatan-bot-telegram",
  title: "Jasa Pembuatan Bot Telegram: Notifikasi, Panel Admin & Otomasi 2026",
  description:
    "Menerima pembuatan bot Telegram untuk usaha: notifikasi otomatis, panel admin, asisten pelanggan, dan pencatatan data. Mulai Rp 1,5 juta, selesai dalam hitungan hari.",
  keywords: [
    "jasa pembuatan bot telegram",
    "jasa bikin bot telegram",
    "developer bot telegram indonesia",
    "bot telegram notifikasi otomatis",
    "bot telegram untuk bisnis",
    "harga jasa bot telegram",
  ],
  breadcrumbName: "Jasa Bot Telegram",
  datePublished: "2026-07-30",
  faq: [
    {
      q: "Berapa biaya pembuatan bot Telegram?",
      a: "Mulai Rp 1.500.000 untuk bot notifikasi satu arah, Rp 3.000.000 sampai Rp 6.000.000 untuk bot dengan menu dan basis data, dan mulai Rp 8.000.000 untuk bot panel admin yang bisa mengubah data sistem. Angka pastinya ditentukan setelah alurnya jelas.",
    },
    {
      q: "Berapa lama pengerjaannya?",
      a: "Bot notifikasi umumnya selesai dalam satu hari. Bot bermenu dengan basis data satu sampai tiga hari. Bot panel admin yang tersambung ke sistem berjalan biasanya tiga sampai lima hari, karena bagian terlamanya adalah menguji agar tidak ada perintah yang merusak data.",
    },
    {
      q: "Apakah bot Telegram perlu server sendiri?",
      a: "Perlu, karena bot harus selalu menyala untuk menerima pesan. Biayanya kecil — server paling sederhana sudah cukup untuk bot dengan ribuan pengguna. Kami bisa menyiapkannya, atau memasangnya di server yang sudah Anda miliki.",
    },
    {
      q: "Apakah bot bisa terhubung ke sistem yang sudah saya punya?",
      a: "Bisa, selama sistem Anda menyediakan cara untuk diakses program — misalnya basis data, API, atau webhook. Bila belum ada, bagian itu perlu dibuat lebih dulu dan akan kami sampaikan sebagai pekerjaan terpisah.",
    },
    {
      q: "Apakah token bot saya aman?",
      a: "Token disimpan di berkas konfigurasi server dengan izin akses terbatas, tidak pernah ditulis di dalam kode maupun dikirim ke pihak lain. Bila Anda ingin menggantinya sendiri kapan saja, itu bisa dilakukan lewat BotFather tanpa menyentuh kode.",
    },
    {
      q: "Bisakah satu kode menjalankan beberapa bot sekaligus?",
      a: "Bisa, dan sering kami sarankan bila tujuan Anda memperluas jangkauan pencarian di Telegram. Beberapa nama bot berbeda dapat berbagi isi yang sama persis, sehingga menambah bot baru cukup menambahkan tokennya tanpa menyentuh kode.",
    },
  ],
};

export const metadata = buildMetadata(seo);
const schemas = buildSchemas(seo);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Pembuatan Bot Telegram",
  serviceType: "Pengembangan bot Telegram untuk usaha",
  provider: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  areaServed: { "@type": "Country", name: "Indonesia" },
  offers: {
    "@type": "Offer",
    priceCurrency: "IDR",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 1500000,
      priceCurrency: "IDR",
    },
    availability: "https://schema.org/InStock",
    url: "https://stcautotrade.id/artikel/jasa-pembuatan-bot-telegram",
  },
};

export default function Page() {
  return (
    <>
      {[...schemas, serviceSchema].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ArtikelShell
        badge="Panduan"
        date="30 Juli 2026"
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        title={<>Jasa Pembuatan<br className="hidden sm:block" /> Bot Telegram</>}
        lede={
          <>
            Notifikasi otomatis, panel admin, asisten pelanggan, pencatatan data — semuanya
            bisa berjalan di dalam Telegram tanpa aplikasi terpisah. Mulai{" "}
            <strong className="font-semibold text-[#1a1612]">Rp 1,5 juta</strong>, selesai
            dalam hitungan hari.
          </>
        }
        stats={[
          { v: "Rp 1,5 jt", l: "Mulai Dari" },
          { v: "1–5 hari", l: "Pengerjaan" },
          { v: "3 jenis", l: "Tingkat Bot" },
          { v: "Berjalan", l: "Kami Pakai Sendiri" },
        ]}
        related={[
          { href: "/artikel/jasa-pembuatan-aplikasi-trading", title: "Jasa Aplikasi Trading", desc: "Sistem penuh: Android, web, panel admin." },
          { href: "/artikel/biaya-pembuatan-aplikasi", title: "Biaya Pembuatan Aplikasi", desc: "Apa yang sebenarnya menentukan harga." },
          { href: "/artikel/sewa-aplikasi-trading", title: "Sewa Aplikasi", desc: "Mulai tanpa biaya pembuatan." },
        ]}
        ctaEyebrow="Konsultasi Gratis"
        ctaTitle="Ceritakan alur bot yang Anda butuhkan"
        ctaDesc="Sebutkan apa yang harus dikerjakan bot, kami sampaikan perkiraan biaya dan waktunya."
        ctaHref={TELEGRAM}
        ctaLabel="Tanya via Telegram"
      >
        <section>
          <SectionLabel>01 · Kegunaan</SectionLabel>
          <H2>Yang Bisa Dikerjakan Bot Telegram untuk Usaha Anda</H2>
          <div className="space-y-4">
            <P>
              Telegram sering dianggap sekadar tempat mengobrol. Padahal ia salah satu cara
              termurah untuk menjalankan otomasi: pengguna Anda sudah memasangnya, tidak
              perlu mengunduh apa pun, dan notifikasinya sampai seketika.
            </P>
            <CardGrid
              items={[
                {
                  icon: "🔔",
                  title: "Notifikasi otomatis",
                  desc: "Pesanan masuk, pembayaran diterima, stok menipis, server bermasalah — dikirim ke pengurus yang tepat begitu kejadiannya terjadi, bukan saat seseorang teringat memeriksa.",
                },
                {
                  icon: "🛠️",
                  title: "Panel admin dalam obrolan",
                  desc: "Menambah pengguna, memperpanjang masa aktif, melihat statistik — dilakukan dari ponsel tanpa membuka dasbor mana pun. Cocok untuk pengurus yang sering di jalan.",
                },
                {
                  icon: "💬",
                  title: "Asisten pelanggan",
                  desc: "Menjawab pertanyaan yang berulang, memandu pendaftaran, dan menyalurkan yang benar-benar perlu ditangani manusia ke admin. Mengurangi pesan masuk yang isinya sama terus.",
                },
                {
                  icon: "📝",
                  title: "Pencatatan & laporan",
                  desc: "Mencatat pemasukan, absensi, atau pesanan lewat percakapan, lalu merangkumnya menjadi laporan harian yang dikirim otomatis.",
                },
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>02 · Bukti</SectionLabel>
          <H2>Kami Memakainya Sendiri Setiap Hari</H2>
          <div className="space-y-4">
            <P>
              Ini bukan lini jasa yang kami tambahkan karena sedang ramai dicari. Bot
              Telegram sudah menjadi bagian dari sistem kami sendiri sejak lama, dan setiap
              persoalan yang kami sebut di halaman ini pernah kami hadapi langsung.
            </P>
            <Steps
              items={[
                {
                  title: "Bot pengurus dengan gerbang kata sandi",
                  desc: "Mengelola daftar pengguna dan masa aktifnya. Dilengkapi pembatas akses, karena panel admin yang bisa dibuka siapa saja adalah bencana yang menunggu waktu.",
                },
                {
                  title: "Bot notifikasi setoran",
                  desc: "Memantau ratusan akun sekaligus dan memberi tahu begitu ada perubahan saldo. Pernah kami perbaiki dari siklus 97 detik menjadi 13 detik dengan membatasi permintaan serentak dan menyimpan sementara hasil yang masih berlaku.",
                },
                {
                  title: "Beberapa bot asisten dari satu kode",
                  desc: "Beberapa nama bot berbeda menjalankan isi yang sama persis untuk memperluas jangkauan pencarian di dalam Telegram. Menambah bot baru cukup menambahkan tokennya — tanpa menyentuh kode sama sekali.",
                },
              ]}
            />
            <InfoBox icon="🔍" title="Bisa Anda coba sendiri">
              Bot asisten kami terbuka untuk umum. Kalau Anda ingin melihat bagaimana alur
              menu, pesan, dan tombolnya terasa dipakai sebelum memesan, tinggal bilang —
              nanti kami kirimkan tautannya lewat Telegram.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Harga</SectionLabel>
          <H2>Tiga Tingkat, Angkanya Terbuka</H2>
          <div className="space-y-4">
            <DataTable
              head={["Tingkat", "Isi", "Mulai dari", "Waktu"]}
              rows={[
                ["Notifikasi", "Kirim pesan otomatis dari sistem Anda, satu arah", "Rp 1,5 juta", "1 hari"],
                ["Bermenu", "Tombol, alur percakapan, basis data, riwayat", "Rp 3 juta", "1–3 hari"],
                ["Panel admin", "Mengubah data sistem, pembatas akses, tingkatan admin", "Rp 8 juta", "3–5 hari"],
              ]}
            />
            <P>
              Biaya server tidak termasuk karena besarnya bergantung pemakaian, tetapi untuk
              hampir semua bot ukurannya kecil. Bila Anda sudah punya server, bot bisa
              dipasang di sana tanpa tambahan biaya apa pun.
            </P>
            <WarningBox>
              Tingkat panel admin sengaja berjarak jauh dari dua tingkat lainnya. Bot yang
              hanya mengirim pesan tidak bisa merusak apa pun; bot yang bisa mengubah data
              sistem bisa. Sebagian besar waktunya habis untuk memastikan tidak ada perintah
              yang menghapus sesuatu yang tidak dimaksudkan — dan itu memang perlu waktu.
            </WarningBox>
            <div className="pt-1">
              <TombolTelegram label="Tanya Harga via Telegram" />
            </div>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Persiapan</SectionLabel>
          <H2>Yang Perlu Anda Siapkan</H2>
          <div className="space-y-4">
            <P>
              Persiapannya ringan. Tiga hal berikut sudah cukup untuk memulai, dan kami
              bantu bila ada yang belum ada.
            </P>
            <Steps
              items={[
                {
                  title: "Nama bot dan tokennya",
                  desc: "Dibuat lewat @BotFather di Telegram, gratis dan hanya butuh beberapa menit. Bila Anda belum pernah, kami pandu langkahnya.",
                },
                {
                  title: "Alur yang Anda inginkan",
                  desc: "Cukup ditulis dengan bahasa sehari-hari: pengguna menekan apa, bot menjawab apa. Tidak perlu rapi — justru lebih baik apa adanya agar kami tahu maksud sebenarnya.",
                },
                {
                  title: "Akses ke sistem yang akan disambungkan",
                  desc: "Bila bot harus membaca data yang sudah Anda punya. Bila belum ada jalannya, kami sampaikan sebagai pekerjaan terpisah sejak awal — bukan setelah disepakati.",
                },
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>05 · Penutup</SectionLabel>
          <H2>Mulai dari yang Kecil</H2>
          <div className="space-y-5">
            <P>
              Saran kami: mulailah dengan bot notifikasi. Biayanya paling ringan, hasilnya
              paling cepat terasa, dan setelah dipakai seminggu Anda biasanya sudah tahu
              persis fitur berikutnya yang benar-benar dibutuhkan — bukan yang sekadar
              terdengar bagus di awal.
            </P>
            <P>
              Bila kebutuhan Anda lebih besar dari sebuah bot, lihat{" "}
              <Link href="/artikel/jasa-pembuatan-aplikasi-trading" className="text-[#047857] underline">
                jasa pembuatan aplikasi
              </Link>{" "}
              — bot Telegram bisa disertakan di dalamnya tanpa biaya terpisah.
            </P>
            <BlokOrder
              eyebrow="Pemesanan & Konsultasi"
              catatan="Sebutkan apa yang harus dikerjakan bot Anda; perkiraan biayanya kami sampaikan di percakapan pertama."
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
