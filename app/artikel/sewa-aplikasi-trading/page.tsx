/**
 * app/artikel/sewa-aplikasi-trading/page.tsx
 * Primary: sewa aplikasi trading · Secondary: sewa bot trading, rental bot
 * trading, sewa software trading bulanan
 *
 * Memperdalam sisi sewa yang di halaman jasa utama hanya disebut sekilas:
 * hitungan balik modal, cocok untuk siapa, dan siapa yang justru sebaiknya
 * membeli putus. Sudut pandangnya berbeda supaya tidak berebut kata kunci.
 */

import Link from "next/link";
import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";
import { TELEGRAM, BlokOrder } from "../_components/TombolTelegram";

const seo: ArtikelSeoDef = {
  slug: "sewa-aplikasi-trading",
  title: "Sewa Aplikasi Trading Otomatis: Rp 1,8 Juta/Bulan Tanpa Biaya Pembuatan",
  description:
    "Pakai aplikasi trading otomatis lengkap tanpa membayar biaya pembuatan. Rp 1,8 juta per bulan sudah termasuk server, pembaruan, dan perbaikan. Hitungan balik modal dibanding beli putus, dan siapa yang justru sebaiknya membeli.",
  keywords: [
    "sewa aplikasi trading",
    "sewa bot trading",
    "rental bot trading",
    "sewa software trading bulanan",
    "sewa aplikasi android",
    "langganan bot trading",
  ],
  breadcrumbName: "Sewa Aplikasi Trading",
  datePublished: "2026-07-30",
  faq: [
    {
      q: "Berapa biaya sewa aplikasi trading per bulan?",
      a: "Rp 1.800.000 per bulan, sudah termasuk server, pembaruan, dan perbaikan bila platform yang dipakai berubah. Tidak ada biaya pembuatan di awal.",
    },
    {
      q: "Apakah ada kontrak minimum?",
      a: "Tidak ada. Sewa berjalan bulanan dan dapat dihentikan kapan saja. Bila Anda berhenti, kami hanya meminta pemberitahuan agar server bisa dimatikan tepat waktu dan tidak ada tagihan yang berjalan sia-sia.",
    },
    {
      q: "Setelah berapa lama beli putus jadi lebih murah?",
      a: "Sekitar sepuluh bulan. Beli putus Rp 12–18 juta dibagi Rp 1,8 juta per bulan menghasilkan titik impas di bulan ketujuh sampai kesepuluh, tergantung lingkup yang Anda ambil. Setelah titik itu, sewa menjadi lebih mahal.",
    },
    {
      q: "Bisakah pindah dari sewa ke beli putus?",
      a: "Bisa, dan biaya sewa yang sudah berjalan dapat diperhitungkan sebagai pengurang. Banyak yang memakai jalur ini: menyewa dulu untuk menguji pasar, lalu membeli putus setelah yakin.",
    },
    {
      q: "Siapa pemilik data pengguna saya selama menyewa?",
      a: "Data tetap milik Anda dan dapat diminta salinannya kapan saja. Yang tidak diserahkan pada paket sewa hanyalah kode sumbernya, karena sistemnya berjalan di infrastruktur kami.",
    },
    {
      q: "Apa yang terjadi bila platform trading mengubah sistemnya?",
      a: "Kami yang menyesuaikan, tanpa biaya tambahan. Inilah keunggulan utama sewa dibanding beli putus — pada paket beli putus, penyesuaian semacam ini menjadi pekerjaan terpisah yang berbayar.",
    },
  ],
};

export const metadata = buildMetadata(seo);
const schemas = buildSchemas(seo);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sewa Aplikasi Trading Otomatis",
  serviceType: "Penyewaan aplikasi trading otomatis",
  provider: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  areaServed: { "@type": "Country", name: "Indonesia" },
  offers: {
    "@type": "Offer",
    priceCurrency: "IDR",
    price: 1800000,
    availability: "https://schema.org/InStock",
    url: "https://stcautotrade.id/artikel/sewa-aplikasi-trading",
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
        title={<>Sewa Aplikasi Trading<br className="hidden sm:block" /> Otomatis</>}
        lede={
          <>
            Aplikasi yang sama, tanpa biaya pembuatan di awal.{" "}
            <strong className="font-semibold text-[#1a1612]">Rp 1,8 juta per bulan</strong>{" "}
            sudah termasuk server, pembaruan, dan perbaikan — berhenti kapan saja tanpa
            kontrak minimum.
          </>
        }
        stats={[
          { v: "Rp 1,8 jt", l: "Per Bulan" },
          { v: "Rp 0", l: "Biaya Pembuatan" },
          { v: "~10 bulan", l: "Titik Impas" },
          { v: "Bebas", l: "Berhenti Kapan Saja" },
        ]}
        related={[
          { href: "/artikel/jasa-pembuatan-aplikasi-trading", title: "Beli Putus", desc: "Rp 12–18 juta, kode jadi milik Anda." },
          { href: "/artikel/biaya-pembuatan-aplikasi", title: "Biaya Pembuatan Aplikasi", desc: "Apa yang sebenarnya menentukan harga." },
          { href: "/artikel/white-label-aplikasi-trading", title: "White Label", desc: "Aplikasi dengan nama dan logo Anda." },
        ]}
        ctaEyebrow="Mulai Menyewa"
        ctaTitle="Bisa jalan minggu ini"
        ctaDesc="Tanpa biaya pembuatan. Sampaikan kebutuhan Anda, sisanya kami siapkan."
        ctaHref={TELEGRAM}
        ctaLabel="Tanya via Telegram"
      >
        <section>
          <SectionLabel>01 · Alasan</SectionLabel>
          <H2>Kenapa Menyewa Masuk Akal</H2>
          <div className="space-y-4">
            <P>
              Hambatan terbesar orang memulai bukan bulanannya, melainkan angka besar di
              awal. Mengeluarkan belasan juta untuk sesuatu yang belum terbukti cocok dengan
              rencana Anda adalah keputusan yang berat — dan seringnya membuat rencana itu
              tidak pernah jalan sama sekali.
            </P>
            <P>
              Menyewa memindahkan risiko itu ke kami. Bila setelah dua bulan Anda menyimpulkan
              arahnya tidak sesuai, kerugian Anda dua bulan sewa, bukan seluruh biaya
              pembuatan.
            </P>
            <CardGrid
              items={[
                {
                  icon: "🚀",
                  title: "Jalan minggu ini",
                  desc: "Tidak menunggu pengerjaan selesai. Sistemnya sudah ada, yang diperlukan hanya penyesuaian nama, tampilan, dan pengaturan akun Anda.",
                },
                {
                  icon: "🛠️",
                  title: "Pemeliharaan bukan urusan Anda",
                  desc: "Ketika platform mengubah aturannya — dan itu pasti terjadi — kami yang menyesuaikan. Pada beli putus, itu pekerjaan terpisah yang berbayar.",
                },
                {
                  icon: "🖥️",
                  title: "Tanpa mengurus server",
                  desc: "Tidak perlu menyewa server, memasang apa pun, atau memikirkan apa yang terjadi bila layanan mati tengah malam.",
                },
                {
                  icon: "🔄",
                  title: "Bisa berubah pikiran",
                  desc: "Berhenti kapan saja tanpa penalti, atau beralih ke beli putus dengan biaya sewa yang sudah berjalan diperhitungkan sebagai pengurang.",
                },
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>02 · Hitungan</SectionLabel>
          <H2>Kapan Beli Putus Menjadi Lebih Murah</H2>
          <div className="space-y-4">
            <P>
              Kami sampaikan hitungannya terbuka, termasuk bagian yang merugikan kami.
              Sewa tidak selamanya lebih hemat — ada titik ketika membeli putus jelas lebih
              masuk akal.
            </P>
            <DataTable
              head={["Lama pemakaian", "Total sewa", "Beli putus (Rp 15 jt)", "Lebih hemat"]}
              rows={[
                ["3 bulan", "Rp 5,4 juta", "Rp 15 juta", "Sewa"],
                ["6 bulan", "Rp 10,8 juta", "Rp 15 juta", "Sewa"],
                ["9 bulan", "Rp 16,2 juta", "Rp 15 juta", "Beli putus"],
                ["12 bulan", "Rp 21,6 juta", "Rp 15 juta", "Beli putus"],
                ["24 bulan", "Rp 43,2 juta", "Rp 15 juta", "Beli putus"],
              ]}
            />
            <P>
              Titik impasnya jatuh di sekitar bulan kedelapan sampai kesepuluh. Tetapi angka
              itu belum memperhitungkan satu hal: pada beli putus, biaya server dan
              pemeliharaan menjadi tanggungan Anda. Bila kedua pos itu dimasukkan, titik
              impasnya bergeser beberapa bulan lebih jauh.
            </P>
            <InfoBox icon="🧮" title="Aturan praktis">
              Bila Anda cukup yakin akan memakainya lebih dari setahun,{" "}
              <Link href="/artikel/jasa-pembuatan-aplikasi-trading" className="underline">
                beli putus
              </Link>{" "}
              lebih murah. Bila masih menguji pasar, atau ingin mulai bulan ini tanpa
              mengeluarkan belasan juta, sewa jelas pilihan yang lebih waras.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Isi Paket</SectionLabel>
          <H2>Yang Termasuk dan yang Tidak</H2>
          <div className="space-y-4">
            <DataTable
              head={["", "Termasuk sewa"]}
              rows={[
                ["Aplikasi Android siap pakai", "Ya"],
                ["Versi web", "Ya"],
                ["Panel admin & pengelolaan pengguna", "Ya"],
                ["Server & biaya jalannya", "Ya"],
                ["Pembaruan saat platform berubah", "Ya"],
                ["Perbaikan bila ada kerusakan", "Ya"],
                ["Nama & logo Anda sendiri", "Ya"],
                ["Kode sumber", "Tidak — hanya pada beli putus"],
                ["Modal trading pengguna", "Tidak — di akun masing-masing"],
              ]}
            />
            <WarningBox>
              Satu hal yang perlu ditegaskan: kami menyewakan perangkat lunak, bukan
              mengelola dana siapa pun. Modal tetap berada di akun trading atas nama
              pengguna masing-masing. Bila ada penyedia jasa yang menawarkan menerima titipan
              dana untuk dikelola bot, itu urusan yang sama sekali berbeda dan sebaiknya Anda
              hindari.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Kecocokan</SectionLabel>
          <H2>Cocok untuk Siapa — dan untuk Siapa Tidak</H2>
          <div className="space-y-4">
            <CardGrid
              items={[
                {
                  icon: "✅",
                  title: "Cocok bila Anda baru mulai",
                  desc: "Belum tahu apakah pasarnya jalan, ingin menguji dulu sebelum menaruh modal besar. Dua bulan sewa cukup untuk mendapat jawaban jujur.",
                },
                {
                  icon: "✅",
                  title: "Cocok bila tak ingin mengurus teknis",
                  desc: "Anda ingin fokus mencari pengguna, bukan memikirkan server, pembaruan, dan apa yang harus dilakukan saat sistem tiba-tiba berhenti.",
                },
                {
                  icon: "❌",
                  title: "Kurang cocok bila butuh kendali penuh",
                  desc: "Bila Anda ingin memegang kodenya, mengubahnya sendiri, atau memindahkannya ke tim Anda kemudian hari — beli putus sejak awal lebih tepat.",
                },
                {
                  icon: "❌",
                  title: "Kurang cocok untuk jangka sangat panjang",
                  desc: "Bila rencananya memang dipakai bertahun-tahun, sewa akan lebih mahal. Kami akan mengatakannya sejak konsultasi, bukan setelah bulan kedua belas.",
                },
              ]}
            />
          </div>
        </section>

        <section>
          <SectionLabel>05 · Memulai</SectionLabel>
          <H2>Empat Langkah sampai Berjalan</H2>
          <div className="space-y-5">
            <Steps
              items={[
                {
                  title: "Sampaikan kebutuhan lewat Telegram",
                  desc: "Nama yang ingin dipakai, platform tujuan, dan mode strategi yang Anda inginkan. Tidak perlu rinci — kami bantu memetakannya.",
                },
                {
                  title: "Penyesuaian nama & tampilan",
                  desc: "Aplikasi disesuaikan dengan identitas Anda: nama, logo, warna. Bagian ini biasanya selesai dalam satu sampai dua hari.",
                },
                {
                  title: "Pembayaran bulan pertama",
                  desc: "Rp 1,8 juta lewat transfer bank atau dompet digital. Tidak ada biaya pendaftaran maupun biaya pemasangan.",
                },
                {
                  title: "Serah terima & pendampingan",
                  desc: "Anda menerima aplikasi beserta akses panel admin, lalu didampingi sampai benar-benar terbiasa memakainya.",
                },
              ]}
            />
            <BlokOrder
              eyebrow="Mulai Menyewa"
              catatan="Tanpa biaya pembuatan, tanpa kontrak minimum. Konsultasi tidak dipungut biaya."
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
