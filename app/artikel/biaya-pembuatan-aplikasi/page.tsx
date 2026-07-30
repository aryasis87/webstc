/**
 * app/artikel/biaya-pembuatan-aplikasi/page.tsx
 * Primary: biaya pembuatan aplikasi android · Secondary: harga jasa
 * pembuatan aplikasi, biaya bikin aplikasi, tarif developer aplikasi
 *
 * Artikel edukasi bersudut pandang penjual jujur: menjelaskan apa yang
 * sebenarnya menentukan biaya, termasuk biaya yang jarang disebut penyedia
 * jasa. Halaman jasa yang menjual ada di /artikel/jasa-pembuatan-aplikasi-trading.
 */

import Link from "next/link";
import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";
import { TELEGRAM, BlokOrder } from "../_components/TombolTelegram";

const seo: ArtikelSeoDef = {
  slug: "biaya-pembuatan-aplikasi",
  title: "Biaya Pembuatan Aplikasi Android 2026: Rincian Harga & Faktor Penentunya",
  description:
    "Kenapa penawaran pembuatan aplikasi bisa berbeda sepuluh kali lipat? Rincian kisaran harga per jenis aplikasi, faktor yang benar-benar menentukan biaya, biaya lanjutan yang jarang disebut, dan cara membaca penawaran.",
  keywords: [
    "biaya pembuatan aplikasi android",
    "harga jasa pembuatan aplikasi",
    "biaya bikin aplikasi",
    "tarif jasa developer aplikasi",
    "biaya maintenance aplikasi",
    "harga pembuatan software",
  ],
  breadcrumbName: "Biaya Pembuatan Aplikasi",
  datePublished: "2026-07-30",
  faq: [
    {
      q: "Berapa biaya pembuatan aplikasi Android pada umumnya?",
      a: "Sangat bergantung jenisnya. Aplikasi katalog atau profil perusahaan biasanya berada di kisaran belasan juta, aplikasi dengan akun pengguna dan pembayaran di kisaran puluhan juta, sedangkan aplikasi yang terhubung ke sistem luar secara realtime — seperti bot trading — berada di atasnya lagi. Yang menentukan bukan jumlah layar, melainkan jumlah hal yang bisa gagal.",
    },
    {
      q: "Kenapa dua penawaran untuk aplikasi yang sama bisa berbeda jauh?",
      a: "Biasanya karena keduanya tidak mengerjakan hal yang sama. Penawaran murah kerap tidak memasukkan pengujian, penanganan kegagalan, panel admin, dan masa pendampingan. Bandingkan lingkup tertulisnya baris per baris, bukan angka akhirnya.",
    },
    {
      q: "Apa saja biaya lanjutan setelah aplikasi jadi?",
      a: "Server atau hosting, akun Google Play (sekali bayar), perpanjangan domain, serta pemeliharaan saat sistem luar yang dipakai aplikasi berubah. Untuk aplikasi sederhana, biaya berjalannya bisa sangat kecil; untuk aplikasi yang bergantung pada layanan pihak ketiga, siapkan anggaran tahunan.",
    },
    {
      q: "Lebih murah mana: pesan aplikasi atau membangun sendiri?",
      a: "Membangun sendiri menghemat uang tetapi memakan waktu, dan waktu itu punya harga. Bila Anda sudah bisa memprogram dan tidak dikejar tenggat, membangun sendiri masuk akal. Bila tidak, biaya sebenarnya adalah berbulan-bulan yang habis untuk belajar hal yang tidak akan Anda pakai lagi.",
    },
    {
      q: "Apakah harga selalu dibayar di muka penuh?",
      a: "Tidak seharusnya. Praktik yang wajar adalah pembayaran bertahap — sebagian sebagai tanda jadi dan sisanya setelah aplikasi diserahkan dan Anda sudah mencobanya. Penyedia jasa yang meminta pelunasan penuh sebelum apa pun dikerjakan sebaiknya Anda pertanyakan.",
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
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        title={<>Biaya Pembuatan Aplikasi:<br className="hidden sm:block" /> Apa yang Sebenarnya Anda Bayar</>}
        lede={
          <>
            Dua penawaran untuk aplikasi yang terdengar sama bisa berbeda sepuluh kali
            lipat. Bukan karena salah satunya menipu — melainkan karena keduanya{" "}
            <strong className="font-semibold text-[#1a1612]">tidak mengerjakan hal yang sama</strong>.
            Ini penjelasannya dari sisi yang membuat.
          </>
        }
        stats={[
          { v: "5 faktor", l: "Penentu Biaya" },
          { v: "4 pos", l: "Biaya Lanjutan" },
          { v: "Bertahap", l: "Cara Bayar Wajar" },
          { v: "Terbuka", l: "Tanpa Basa-basi" },
        ]}
        related={[
          { href: "/artikel/jasa-pembuatan-aplikasi-trading", title: "Jasa Pembuatan Aplikasi", desc: "Harga, waktu, dan cara order langsung." },
          { href: "/artikel/cara-membuat-bot-trading-sendiri", title: "Membuat Sendiri", desc: "Kalau Anda ingin mengerjakannya sendiri." },
          { href: "/artikel/jasa-pembuatan-bot-telegram", title: "Jasa Bot Telegram", desc: "Layanan terpisah dengan biaya lebih ringan." },
        ]}
        ctaEyebrow="Konsultasi Gratis"
        ctaTitle="Ingin perkiraan untuk kebutuhan Anda?"
        ctaDesc="Ceritakan rencananya, kami bantu memetakan lingkup dan biayanya — tanpa biaya konsultasi."
        ctaHref={TELEGRAM}
        ctaLabel="Tanya via Telegram"
      >
        <section>
          <SectionLabel>01 · Salah Paham</SectionLabel>
          <H2>Harga Tidak Ditentukan oleh Jumlah Layar</H2>
          <div className="space-y-4">
            <P>
              Pertanyaan pertama yang hampir selalu muncul adalah &ldquo;aplikasinya
              berapa halaman?&rdquo; Padahal jumlah halaman nyaris tidak berpengaruh.
              Menambah satu layar tampilan mungkin pekerjaan setengah hari.
            </P>
            <P>
              Yang menentukan biaya adalah <strong>jumlah hal yang bisa gagal</strong>.
              Aplikasi yang hanya menampilkan daftar hampir tidak punya cara untuk rusak.
              Aplikasi yang mengirim order ke sistem lain punya puluhan: koneksi putus di
              tengah kirim, jawaban datang dua kali, jam perangkat berbeda dengan jam
              server, sistem tujuan mengubah format tanpa memberi tahu.
            </P>
            <P>
              Menangani semua itu adalah pekerjaan yang tidak terlihat di layar mana pun —
              dan justru di situlah sebagian besar biaya berada.
            </P>
            <InfoBox icon="🧭" title="Cara cepat menaksir">
              Hitung berapa banyak sistem lain yang harus diajak bicara oleh aplikasi Anda:
              server sendiri, pembayaran, peta, notifikasi, platform pihak ketiga. Semakin
              banyak titik sambungan, semakin tinggi biayanya — jauh lebih akurat daripada
              menghitung halaman.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Kisaran</SectionLabel>
          <H2>Kisaran Harga Menurut Jenis Aplikasi</H2>
          <div className="space-y-4">
            <P>
              Angka di bawah adalah kisaran umum di pasar Indonesia untuk pengerjaan yang
              layak — sudah termasuk pengujian dan masa pendampingan, bukan sekadar
              aplikasi yang &ldquo;bisa dibuka&rdquo;.
            </P>
            <DataTable
              head={["Jenis aplikasi", "Ciri utama", "Kisaran umum"]}
              rows={[
                ["Katalog / profil", "Menampilkan isi, tanpa akun pengguna", "Rp 5–15 juta"],
                ["Aplikasi berakun", "Daftar, masuk, data per pengguna", "Rp 15–40 juta"],
                ["Transaksi & pembayaran", "Pesanan, dompet, gerbang pembayaran", "Rp 40–120 juta"],
                ["Terhubung realtime", "Data hidup, eksekusi otomatis, panel admin", "Rp 60–250 juta"],
              ]}
            />
            <P>
              Perhatikan bahwa kisarannya melebar tajam ke bawah. Itu bukan kebetulan:
              semakin rumit sebuah sistem, semakin besar jarak antara penawaran yang
              memasukkan pengujian dan yang tidak.
            </P>
            <InfoBox icon="📌" title="Kenapa layanan kami di bawah kisaran itu">
              Aplikasi trading otomatis yang kami tawarkan berada di{" "}
              <Link href="/artikel/jasa-pembuatan-aplikasi-trading" className="underline">
                Rp 12–18 juta
              </Link>
              , jauh di bawah kisaran &ldquo;terhubung realtime&rdquo; di atas. Alasannya
              sederhana dan tidak istimewa: kami tidak membangunnya dari nol. Sistem yang
              sama sudah berjalan dan dipakai setiap hari, sehingga yang tersisa hanya
              penyesuaian. Untuk kebutuhan di luar itu, kami tetap tunduk pada kisaran yang
              wajar.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Faktor</SectionLabel>
          <H2>Lima Hal yang Benar-benar Menggerakkan Angka</H2>
          <CardGrid
            items={[
              {
                icon: "🔌",
                title: "Sambungan ke sistem luar",
                desc: "Tiap sambungan ke layanan pihak ketiga membawa aturan, batasan, dan kegagalannya sendiri. Ini penyumbang biaya terbesar yang paling sering diabaikan saat menaksir.",
              },
              {
                icon: "👤",
                title: "Pengelolaan pengguna",
                desc: "Daftar, masuk, lupa kata sandi, tingkatan akses, panel admin. Terdengar sepele, tetapi memakan waktu setara beberapa layar utama sekaligus.",
              },
              {
                icon: "🧪",
                title: "Kedalaman pengujian",
                desc: "Menguji jalur normal itu cepat. Menguji apa yang terjadi saat sinyal hilang di detik pengiriman — itu yang memakan waktu, dan itu pula yang membedakan aplikasi yang bertahan dipakai.",
              },
              {
                icon: "🎨",
                title: "Tingkat penyesuaian tampilan",
                desc: "Memakai komponen siap pakai jauh lebih murah daripada rancangan khusus dengan animasi dan identitas visual sendiri. Keduanya sah — asal Anda tahu sedang membayar yang mana.",
              },
              {
                icon: "⏱️",
                title: "Tenggat waktu",
                desc: "Meminta pekerjaan dua bulan selesai dalam dua pekan berarti menambah orang, dan menambah orang menambah biaya. Tenggat adalah variabel harga, bukan permintaan gratis.",
              },
              {
                icon: "📦",
                title: "Apakah ada fondasi yang bisa dipakai ulang",
                desc: "Membangun dari nol berbeda jauh dengan menyesuaikan sistem yang sudah berjalan. Bila penyedia jasa sudah punya fondasi serupa, biayanya bisa turun drastis — tanyakan ini sejak awal.",
              },
            ]}
          />
        </section>

        <section>
          <SectionLabel>04 · Biaya Lanjutan</SectionLabel>
          <H2>Yang Jarang Disebut di Penawaran</H2>
          <div className="space-y-4">
            <P>
              Biaya pembuatan bukan satu-satunya angka. Empat pos berikut muncul setelah
              aplikasi jadi, dan sering membuat pemilik aplikasi terkejut di bulan ketiga.
            </P>
            <Steps
              items={[
                {
                  title: "Server atau hosting — bulanan",
                  desc: "Aplikasi yang punya backend memerlukan server yang menyala terus. Besarnya bergantung jumlah pengguna; untuk skala awal biasanya kecil, tetapi tidak nol.",
                },
                {
                  title: "Akun Google Play — sekali bayar",
                  desc: "Diperlukan bila aplikasi akan diterbitkan di Play Store. Bila aplikasi dibagikan sebagai berkas APK langsung, pos ini tidak ada.",
                },
                {
                  title: "Domain & sertifikat — tahunan",
                  desc: "Untuk versi web dan alamat backend. Kecil, tetapi mudah terlupakan sampai layanannya mati karena lupa diperpanjang.",
                },
                {
                  title: "Pemeliharaan — saat sistem luar berubah",
                  desc: "Inilah pos yang paling sering diabaikan. Layanan pihak ketiga mengubah aturannya tanpa memberi tahu siapa pun. Ketika itu terjadi, aplikasi Anda berhenti bekerja sampai disesuaikan.",
                },
              ]}
            />
            <WarningBox>
              Penawaran yang tidak menyebut pemeliharaan sama sekali bukan berarti bebas
              biaya pemeliharaan — hanya berarti Anda belum diberi tahu. Tanyakan sejak awal
              siapa yang menangani bila sistem luar berubah, dan berapa biayanya.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · Membaca Penawaran</SectionLabel>
          <H2>Cara Membandingkan Dua Penawaran dengan Adil</H2>
          <div className="space-y-4">
            <P>
              Jangan membandingkan angka akhirnya. Bandingkan barisnya. Empat pertanyaan
              berikut biasanya cukup untuk membuat perbedaan harga menjadi masuk akal.
            </P>
            <DataTable
              head={["Pertanyaan", "Kenapa penting"]}
              rows={[
                ["Apa yang TIDAK termasuk?", "Jauh lebih mengungkap daripada daftar yang termasuk"],
                ["Siapa pemilik kodenya?", "Menentukan apakah Anda bisa pindah penyedia jasa nanti"],
                ["Berapa lama masa pendampingan?", "Tanpa ini, bug hari kedelapan menjadi urusan Anda"],
                ["Boleh lihat karya yang sedang berjalan?", "Tangkapan layar bisa dibuat siapa saja; sistem yang dipakai orang tidak"],
              ]}
            />
            <P>
              Pertanyaan terakhir adalah saringan paling tajam. Penyedia jasa yang punya
              produk berjalan akan senang menunjukkannya. Yang hanya punya portofolio
              gambar biasanya mengalihkan pembicaraan.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>06 · Penutup</SectionLabel>
          <H2>Kalau Anda Sedang Menaksir Anggaran</H2>
          <div className="space-y-5">
            <P>
              Ringkasnya: tentukan dulu sistem apa saja yang harus disambungkan, lalu
              tanyakan apakah penyedia jasa sudah pernah membangun hal serupa. Dua hal itu
              menjelaskan sebagian besar selisih harga yang Anda lihat di pasaran.
            </P>
            <P>
              Bila kebutuhan Anda kebetulan berupa aplikasi trading otomatis, rincian harga
              dan waktu pengerjaannya ada di{" "}
              <Link href="/artikel/jasa-pembuatan-aplikasi-trading" className="text-[#047857] underline">
                halaman jasa kami
              </Link>
              . Bila bukan, ceritakan saja — kami akan bilang terus terang bila itu di luar
              yang kami kuasai.
            </P>
            <BlokOrder
              eyebrow="Konsultasi Gratis"
              catatan="Kami akan menyebut angka kasarnya di percakapan pertama, bukan setelah tiga kali pertemuan."
            />
          </div>
        </section>

        <section>
          <SectionLabel>07 · FAQ</SectionLabel>
          <H2>Pertanyaan yang Sering Muncul</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
