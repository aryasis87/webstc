/**
 * app/artikel/jasa-pembuatan-aplikasi-trading/page.tsx
 * Primary: jasa pembuatan aplikasi trading · Secondary: jasa bikin bot
 * trading, sewa aplikasi trading, harga jasa pembuatan aplikasi, developer
 * bot binary option
 *
 * Halaman jasa: menawarkan pembuatan dan penyewaan aplikasi sejenis
 * STC AutoTrade, ditulis dari pengalaman membangunnya sendiri.
 * Harga dipasang terbuka — menyaring penanya sejak awal.
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";
import Link from "next/link";

const TELEGRAM = "https://t.me/Szin_yui";

/** Tombol order — dipakai beberapa kali di sepanjang halaman. */
function TombolOrder({ label = "Order via Telegram" }: { label?: string }) {
  return (
    <a
      href={TELEGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#229ED9] text-white text-sm font-semibold no-underline hover:bg-[#1c86b8] transition-colors"
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.94 2.4a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2Zm4.46 6.57-1.49 7.03c-.11.5-.41.62-.83.39l-2.29-1.69-1.11 1.06c-.12.13-.23.23-.47.23l.17-2.37 4.32-3.9c.19-.17-.04-.26-.29-.09l-5.34 3.36-2.3-.72c-.5-.16-.51-.5.1-.74l8.99-3.47c.42-.15.78.1.64.73Z" />
      </svg>
      {label}
    </a>
  );
}

const seo: ArtikelSeoDef = {
  slug: "jasa-pembuatan-aplikasi-trading",
  title: "Jasa Pembuatan Aplikasi Trading Otomatis — Rp 12–18 Juta, Selesai 1–3 Hari",
  description:
    "Menerima pembuatan aplikasi bot trading otomatis seperti STC AutoTrade: Android, web, panel admin, dan bot Telegram. Rp 12–18 juta beli putus atau sewa Rp 1,8 juta per bulan. Pengerjaan 1–3 hari.",
  keywords: [
    "jasa pembuatan aplikasi trading",
    "harga jasa pembuatan aplikasi",
    "jasa bikin bot trading",
    "sewa aplikasi trading",
    "jasa pembuatan software",
    "developer bot binary option",
    "white label bot trading",
  ],
  breadcrumbName: "Jasa Pembuatan Aplikasi",
  datePublished: "2026-07-30",
  dateModified: "2026-07-30",
  faq: [
    {
      q: "Berapa biaya pembuatan aplikasi trading otomatis?",
      a: "Rp 12.000.000 sampai Rp 18.000.000 untuk beli putus. Selisihnya ditentukan banyaknya penyesuaian: jumlah mode strategi, ada tidaknya panel admin dan bot Telegram, serta apakah perlu versi web selain aplikasi Android. Angka pastinya disepakati setelah lingkupnya jelas, dan tidak berubah di tengah pengerjaan.",
    },
    {
      q: "Berapa biaya sewa per bulan?",
      a: "Rp 1.800.000 per bulan, sudah termasuk server, pembaruan, dan perbaikan bila platform berubah. Tanpa biaya pembuatan di awal. Cocok bila Anda ingin mulai cepat atau menguji pasar dulu sebelum memutuskan membeli putus.",
    },
    {
      q: "Kenapa pengerjaannya hanya 1–3 hari?",
      a: "Karena dikerjakan tim divisi developer sekaligus, bukan perorangan yang menggarap semuanya bergantian. Bagian aplikasi, backend, panel admin, dan pengujian berjalan berbarengan. Selain itu fondasinya sudah matang — STC AutoTrade yang berjalan setiap hari menjadi dasarnya, sehingga pekerjaan tersisa hanya penyesuaian, bukan membangun ulang dari nol.",
    },
    {
      q: "Apa bedanya beli putus dan sewa?",
      a: "Beli putus berarti aplikasi dan seluruh sistem menjadi milik Anda, dibayar sekali di muka. Sewa berarti Anda membayar bulanan dan kami yang menanggung server, pembaruan, serta perbaikan. Beli putus lebih murah bila dipakai lebih dari sepuluh bulan; sewa lebih ringan bila Anda ingin mulai tanpa modal besar.",
    },
    {
      q: "Metode pembayaran apa saja yang diterima?",
      a: "Transfer bank (BCA, BRI, Mandiri, BNI), dompet digital DANA, OVO, GoPay, dan ShopeePay, serta QRIS. Untuk beli putus, pembayaran dapat dibagi dua tahap: sebagian di awal dan sisanya setelah aplikasi diserahkan.",
    },
    {
      q: "Apakah bisa untuk platform selain Stockity?",
      a: "Bisa, selama platform tersebut memiliki antarmuka yang dapat diakses program. Bagian tersulit biasanya bukan menulis strateginya, melainkan memahami cara platform mengirim data harga dan menerima order — dan itu berbeda di tiap platform. Sampaikan platform tujuan Anda saat konsultasi agar bisa kami periksa lebih dulu.",
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

/** Schema layanan + harga — melengkapi Article/Breadcrumb/FAQ dari helper. */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Pembuatan & Sewa Aplikasi Trading Otomatis",
  serviceType: "Pengembangan aplikasi trading otomatis",
  provider: { "@type": "Organization", name: "STC AutoTrade", url: "https://stcautotrade.id" },
  areaServed: { "@type": "Country", name: "Indonesia" },
  offers: [
    {
      "@type": "Offer",
      name: "Beli putus",
      priceCurrency: "IDR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: 12000000,
        maxPrice: 18000000,
        priceCurrency: "IDR",
      },
      availability: "https://schema.org/InStock",
      url: "https://stcautotrade.id/artikel/jasa-pembuatan-aplikasi-trading",
    },
    {
      "@type": "Offer",
      name: "Sewa bulanan",
      priceCurrency: "IDR",
      price: 1800000,
      availability: "https://schema.org/InStock",
      url: "https://stcautotrade.id/artikel/jasa-pembuatan-aplikasi-trading",
    },
  ],
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
        readMins={7}
        breadcrumbName={seo.breadcrumbName}
        title={<>Jasa Pembuatan &amp; Sewa<br className="hidden sm:block" /> Aplikasi Trading Otomatis</>}
        lede={
          <>
            Kami membangun STC AutoTrade dari nol — aplikasi Android, versi web, panel
            admin, hingga bot Telegram. Sistem yang sama bisa dibuatkan untuk Anda mulai{" "}
            <strong className="font-semibold text-[#1a1612]">Rp 12 juta</strong>, atau
            disewa <strong className="font-semibold text-[#1a1612]">Rp 1,8 juta per bulan</strong>{" "}
            tanpa biaya pembuatan.
          </>
        }
        stats={[
          { v: "Rp 12–18 jt", l: "Beli Putus" },
          { v: "Rp 1,8 jt", l: "Sewa / Bulan" },
          { v: "1–3 hari", l: "Pengerjaan" },
          { v: "Tim", l: "Divisi Developer" },
        ]}
        related={[
          { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Contoh nyata sistem yang kami bangun." },
          { href: "/download", title: "Coba Produknya", desc: "Unduh STC AutoTrade untuk melihat hasilnya." },
          { href: "/kontak", title: "Hubungi Kami", desc: "Diskusikan kebutuhan Anda." },
        ]}
        ctaEyebrow="Konsultasi Gratis"
        ctaTitle="Ceritakan kebutuhan Anda"
        ctaDesc="Kami bantu memetakan lingkup dan memastikan biayanya sebelum Anda memutuskan."
      >
        {/* ── Harga ─────────────────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Harga</SectionLabel>
            <H2>Dua Pilihan, Angkanya Terbuka</H2>
            <P>
              Kami memasang harga di halaman ini supaya Anda bisa menilai sejak awal tanpa
              perlu bertanya lebih dulu. Tidak ada biaya tersembunyi dan tidak ada tambahan
              di tengah pengerjaan selama lingkupnya tidak berubah.
            </P>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white border-2 border-[#10b981] rounded-2xl p-6">
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#047857] mb-2">Beli Putus</p>
                <p className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1a1612] leading-none mb-1">
                  Rp 12–18 jt
                </p>
                <p className="text-[12px] text-[#6b6058] mb-4">bayar sekali, aplikasi jadi milik Anda</p>
                <ul className="space-y-1.5 text-[12px] text-[#6b6058] list-none p-0 m-0">
                  <li>✓ Aplikasi Android siap pasang</li>
                  <li>✓ Versi web bila diperlukan</li>
                  <li>✓ Panel admin &amp; pengelolaan pengguna</li>
                  <li>✓ Kode sumber &amp; dokumentasi diserahkan</li>
                  <li>✓ Pendampingan setelah serah terima</li>
                </ul>
              </div>

              <div className="bg-white border border-[rgba(26,22,18,0.12)] rounded-2xl p-6">
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-2">Sewa Bulanan</p>
                <p className="font-[family-name:var(--font-dm-serif)] text-3xl text-[#1a1612] leading-none mb-1">
                  Rp 1,8 jt<span className="text-base text-[#6b6058]">/bulan</span>
                </p>
                <p className="text-[12px] text-[#6b6058] mb-4">tanpa biaya pembuatan di awal</p>
                <ul className="space-y-1.5 text-[12px] text-[#6b6058] list-none p-0 m-0">
                  <li>✓ Sistem yang sama, siap pakai</li>
                  <li>✓ Server ditanggung kami</li>
                  <li>✓ Pembaruan &amp; perbaikan termasuk</li>
                  <li>✓ Berhenti kapan saja</li>
                  <li>✓ Bisa dialihkan ke beli putus</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <InfoBox icon="🧮" title="Mana yang lebih hemat">
                Sewa lebih ringan bila Anda ingin mulai cepat atau masih menguji pasar. Beli
                putus jadi lebih murah setelah kira-kira sepuluh bulan pemakaian — dan
                setelah itu tidak ada biaya bulanan sama sekali. Biaya sewa yang sudah
                berjalan dapat diperhitungkan bila Anda memutuskan beralih.
              </InfoBox>
            </div>

            <div className="mt-7">
              <TombolOrder />
            </div>
          </div>
        </section>

        {/* ── Kecepatan ─────────────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f6f4ef]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Waktu Pengerjaan</SectionLabel>
            <H2>Selesai 1–3 Hari — Ini Alasannya</H2>
            <P>
              Angka itu sering membuat orang curiga, jadi kami jelaskan apa adanya. Ada dua
              hal yang membuatnya mungkin, dan keduanya tidak berkaitan dengan memotong
              kualitas.
            </P>
            <div className="mt-5">
              <CardGrid
                items={[
                  {
                    icon: "👥",
                    title: "Dikerjakan tim divisi developer",
                    desc: "Bukan perorangan yang menggarap semuanya bergantian. Tim divisi developer kami membagi pekerjaan berbarengan — aplikasi, backend, panel admin, dan pengujian berjalan pada waktu yang sama, bukan antre.",
                  },
                  {
                    icon: "🧱",
                    title: "Fondasinya sudah matang",
                    desc: "Kami tidak membangun dari nol. STC AutoTrade sudah berjalan setiap hari dan dipakai ratusan orang. Yang tersisa hanya penyesuaian sesuai kebutuhan Anda — bagian tersulitnya sudah selesai bertahun-tahun lalu.",
                  },
                ]}
              />
            </div>
            <div className="mt-5">
              <P>
                Yang perlu jujur disampaikan: 1–3 hari berlaku bila kebutuhan Anda masih
                dalam lingkup yang kami kuasai. Bila Anda meminta platform yang belum pernah
                kami tangani, kami sampaikan estimasi berbeda sejak awal — bukan setelah
                Anda membayar.
              </P>
            </div>
          </div>
        </section>

        {/* ── Kenapa kami ───────────────────────────────────── */}
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
            <WarningBox>
              Yang patut Anda curigai dari penyedia jasa mana pun adalah ketiadaan produk
              yang bisa dicoba. Bila calon pembuat aplikasi Anda hanya menunjukkan tangkapan
              layar dan tidak punya satu pun sistem yang benar-benar berjalan dan dipakai
              orang, mintalah bukti sebelum mengirim uang.
            </WarningBox>
          </div>
        </section>

        {/* ── Layanan ───────────────────────────────────────── */}
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

        {/* ── Beli vs sewa ──────────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Perbandingan</SectionLabel>
            <H2>Beli Putus atau Sewa</H2>
            <P>
              Dua jalur dengan pertimbangan berbeda. Yang tepat bergantung pada seberapa
              cepat Anda ingin mulai dan seberapa besar kendali yang Anda inginkan.
            </P>
            <DataTable
              head={["", "Beli Putus", "Sewa Bulanan"]}
              rows={[
                ["Biaya", "Rp 12–18 juta sekali bayar", "Rp 1,8 juta per bulan"],
                ["Biaya awal", "Dibayar di muka", "Tanpa biaya pembuatan"],
                ["Kepemilikan kode", "Menjadi milik Anda", "Tetap pada kami"],
                ["Server & pemeliharaan", "Anda yang menanggung", "Sudah termasuk"],
                ["Pembaruan platform", "Opsional, berbayar", "Sudah termasuk"],
                ["Cocok untuk", "Yang ingin kendali penuh", "Yang ingin mulai cepat"],
              ]}
            />
            <InfoBox icon="💡" title="Yang sering dilupakan">
              Platform trading berubah tanpa pemberitahuan — format data, alamat antarmuka,
              maupun aturan pemakaiannya. Sistem yang dibeli putus tetap membutuhkan
              penyesuaian berkala. Karena itu paket beli putus selalu kami sertai pilihan
              pemeliharaan, dan paket sewa sudah memasukkannya di dalam harga.
            </InfoBox>
          </div>
        </section>

        {/* ── Alur kerja ────────────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f6f4ef]">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Alur Kerja</SectionLabel>
            <H2>Dari Obrolan Awal sampai Berjalan</H2>
            <Steps
              items={[
                {
                  title: "Konsultasi lewat Telegram — gratis",
                  desc: "Ceritakan kebutuhan Anda. Kami bantu memetakan mana yang benar-benar perlu dan mana yang bisa ditunda, agar biayanya tidak membengkak tanpa alasan.",
                },
                {
                  title: "Penawaran & lingkup tertulis",
                  desc: "Anda menerima rincian apa saja yang dikerjakan beserta angka pastinya di dalam rentang Rp 12–18 juta. Yang tidak tertulis tidak dihitung sebagai bagian pekerjaan.",
                },
                {
                  title: "Pembayaran & pengerjaan dimulai",
                  desc: "Untuk beli putus, pembayaran dapat dibagi dua tahap: sebagian di awal, sisanya setelah aplikasi diserahkan. Pengerjaan dimulai hari itu juga.",
                },
                {
                  title: "Pengerjaan paralel — 1 sampai 3 hari",
                  desc: "Divisi developer mengerjakan bagian aplikasi, backend, dan panel admin secara berbarengan. Anda menerima kabar perkembangannya, bukan didiamkan sampai selesai.",
                },
                {
                  title: "Uji coba & serah terima",
                  desc: "Sistem diuji pada keadaan sungguhan sebelum dipakai pengguna. Untuk bot trading, pengujian selalu dimulai dari akun demo. Setelah Anda setuju, semuanya diserahkan.",
                },
                {
                  title: "Pendampingan setelah rilis",
                  desc: "Masa pendampingan disertakan. Sesudahnya, tersedia pemeliharaan berkala bila Anda membutuhkan — atau otomatis termasuk bila Anda memilih paket sewa.",
                },
              ]}
            />
          </div>
        </section>

        {/* ── Pembayaran ────────────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Pembayaran</SectionLabel>
            <H2>Bayar dengan Cara yang Anda Biasa Pakai</H2>
            <P>
              Kami menerima hampir semua metode pembayaran yang umum di Indonesia, jadi
              Anda tidak perlu membuka rekening atau dompet digital baru hanya untuk ini.
            </P>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
              {[
                { i: "🏦", t: "Transfer Bank", d: "BCA · BRI · Mandiri · BNI" },
                { i: "🔵", t: "DANA", d: "Dompet digital" },
                { i: "🟣", t: "OVO", d: "Dompet digital" },
                { i: "🟢", t: "GoPay", d: "Dompet digital" },
                { i: "🟠", t: "ShopeePay", d: "Dompet digital" },
                { i: "📷", t: "QRIS", d: "Pindai dari aplikasi apa pun" },
              ].map((m) => (
                <div key={m.t} className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl px-4 py-4">
                  <div className="text-lg mb-1.5">{m.i}</div>
                  <p className="text-[13px] font-semibold text-[#1a1612] mb-0.5">{m.t}</p>
                  <p className="text-[11px] text-[#6b6058] leading-snug">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <InfoBox icon="🧾" title="Bisa dibayar dua tahap">
                Untuk paket beli putus, pembayaran dapat dibagi: sebagian sebagai tanda jadi
                di awal, sisanya setelah aplikasi selesai dan Anda sudah mencobanya sendiri.
                Rinciannya disepakati saat konsultasi.
              </InfoBox>
            </div>
          </div>
        </section>

        {/* ── Kejujuran ─────────────────────────────────────── */}
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
          </div>
        </section>

        {/* ── Order ─────────────────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <SectionLabel>Cara Order</SectionLabel>
            <H2>Langsung Hubungi Kami di Telegram</H2>
            <P>
              Pemesanan dan konsultasi dilakukan lewat Telegram. Sampaikan kebutuhan Anda —
              platform tujuan, mode strategi yang diinginkan, dan apakah perlu panel admin —
              lalu Anda akan menerima penawaran beserta angka pastinya.
            </P>
            <div className="mt-6 bg-[#f6f4ef] border border-[rgba(26,22,18,0.09)] rounded-2xl px-6 py-7 text-center">
              <p className="text-[12px] text-[#6b6058] mb-1">Admin STC AutoTrade</p>
              <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[#1a1612] mb-5">
                @Szin_yui
              </p>
              <TombolOrder label="Order Sekarang via Telegram" />
              <p className="text-[11px] text-[#1a1612]/55 mt-4">
                Konsultasi tidak dipungut biaya, termasuk bila akhirnya Anda memutuskan
                tidak jadi.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="py-8 border-b border-[rgba(26,22,18,0.06)] bg-[#f6f4ef]">
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
