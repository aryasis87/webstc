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

import Image from "next/image";
import Link from "next/link";
import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";

const TELEGRAM = "https://t.me/Szin_yui";

/* ── Bagian visual khusus halaman ini ───────────────────────────── */

/** Tombol order — dipakai beberapa kali di sepanjang halaman. */
function TombolOrder({
  label = "Hubungi & Order via Telegram",
  block = false,
}: { label?: string; block?: boolean }) {
  return (
    <a
      href={TELEGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className={`${block ? "flex w-full" : "inline-flex"} items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#229ED9] text-white text-sm font-semibold no-underline shadow-lg shadow-[#229ED9]/25 hover:bg-[#1c86b8] hover:shadow-[#229ED9]/35 transition-all`}
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.94 2.4a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2Zm4.46 6.57-1.49 7.03c-.11.5-.41.62-.83.39l-2.29-1.69-1.11 1.06c-.12.13-.23.23-.47.23l.17-2.37 4.32-3.9c.19-.17-.04-.26-.29-.09l-5.34 3.36-2.3-.72c-.5-.16-.51-.5.1-.74l8.99-3.47c.42-.15.78.1.64.73Z" />
      </svg>
      {label}
    </a>
  );
}

/** Satu tangkapan layar dalam bingkai ponsel — dipakai di panggung gelap. */
function Tangkapan({
  src, alt, judul, ket, priority = false,
}: { src: string; alt: string; judul: string; ket: string; priority?: boolean }) {
  return (
    <figure className="m-0 w-full flex flex-col items-center">
      {/* Lebar fluid: tiga ponsel berdampingan tetap muat di layar tablet. */}
      <div className="relative w-full max-w-[228px] aspect-[228/480]">
        <div className="absolute inset-6 rounded-[30px] bg-emerald-400/25 blur-2xl" aria-hidden="true" />
        <div className="relative h-full rounded-[32px] border-[6px] border-white/[0.12] bg-zinc-950 overflow-hidden shadow-2xl shadow-black/50">
          <div className="absolute top-2.5 inset-x-0 z-10 flex justify-center pointer-events-none">
            <div className="w-[32%] h-[3.5%] bg-zinc-950 rounded-full" />
          </div>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 640px) 25vw, 228px"
            priority={priority}
            className="object-cover object-top"
          />
          <div className="absolute bottom-1.5 inset-x-0 z-10 flex justify-center pointer-events-none">
            <div className="w-16 h-[3px] bg-white/25 rounded-full" />
          </div>
        </div>
      </div>
      <figcaption className="mt-5 text-center max-w-[228px]">
        <p className="text-[12.5px] font-semibold text-white mb-1">{judul}</p>
        <p className="text-[11.5px] text-white/55 leading-snug">{ket}</p>
      </figcaption>
    </figure>
  );
}

/**
 * Ubin logo metode pembayaran.
 *
 * Berkas SVG disimpan lokal di /public/bayar — CSP situs hanya mengizinkan
 * img-src 'self', jadi menaut langsung ke sumber luar akan diblokir. Seluruh
 * berkas berlisensi Public Domain/CC0 dari Wikimedia Commons; merek dagangnya
 * tetap milik masing-masing penyedia dan hanya dipakai sebagai penanda
 * metode pembayaran yang diterima.
 *
 * unoptimized: SVG sengaja tidak melewati pengoptimal gambar Next (yang
 * menolak SVG kecuali dangerouslyAllowSVG dinyalakan) — berkasnya sudah kecil.
 */
function LogoBayar({ src, nama }: { src: string; nama: string }) {
  return (
    <div className="bg-white border border-[rgba(26,22,18,0.08)] rounded-xl py-3.5 px-2 flex flex-col items-center gap-2.5 hover:border-[#10b981]/30 transition-colors">
      <span className="h-[26px] flex items-center justify-center">
        <Image
          src={src}
          alt={`Logo ${nama}`}
          width={104}
          height={26}
          unoptimized
          className="max-h-[26px] w-auto max-w-[104px] object-contain"
        />
      </span>
      <span className="text-[10.5px] font-medium text-[#6b6058] text-center leading-tight">{nama}</span>
    </div>
  );
}

const BANK = [
  { src: "/bayar/bca.svg", nama: "BCA" },
  { src: "/bayar/bri.svg", nama: "BRI" },
  { src: "/bayar/mandiri.svg", nama: "Mandiri" },
  { src: "/bayar/bni.svg", nama: "BNI" },
];

const DOMPET = [
  { src: "/bayar/dana.svg", nama: "DANA" },
  { src: "/bayar/ovo.svg", nama: "OVO" },
  { src: "/bayar/gopay.svg", nama: "GoPay" },
  { src: "/bayar/shopeepay.svg", nama: "ShopeePay" },
  { src: "/bayar/qris.svg", nama: "QRIS" },
];

/** Kartu harga. */
function KartuHarga({
  eyebrow, harga, satuan, catatan, isi, utama = false,
}: {
  eyebrow: string; harga: string; satuan?: string; catatan: string;
  isi: string[]; utama?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col ${
        utama
          ? "bg-white border-2 border-[#10b981] shadow-lg shadow-emerald-600/[0.08]"
          : "bg-white border border-[rgba(26,22,18,0.12)]"
      }`}
    >
      {utama && (
        <span className="absolute -top-2.5 left-6 inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#10b981] text-white text-[10px] font-bold tracking-wide">
          SEKALI BAYAR
        </span>
      )}
      <p className={`text-[11px] font-semibold tracking-[0.12em] uppercase mb-2 ${utama ? "text-[#047857]" : "text-[#1a1612]/65"}`}>
        {eyebrow}
      </p>
      <p className="font-[family-name:var(--font-dm-serif)] text-[34px] text-[#1a1612] leading-none mb-1.5">
        {harga}
        {satuan && <span className="text-base text-[#6b6058]">{satuan}</span>}
      </p>
      <p className="text-[12px] text-[#6b6058] mb-5">{catatan}</p>
      <ul className="space-y-2 text-[12.5px] text-[#6b6058] list-none p-0 m-0">
        {isi.map((t) => (
          <li key={t} className="flex gap-2.5">
            <span className="text-[#10b981] font-bold flex-shrink-0" aria-hidden="true">✓</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── SEO ────────────────────────────────────────────────────────── */

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

/* ── Halaman ────────────────────────────────────────────────────── */

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
        {/* ── 01 · Bukti ─────────────────────────────────────── */}
        <section>
          <SectionLabel>01 · Hasil Kerja</SectionLabel>
          <H2>Inilah yang Sudah Kami Bangun</H2>
          <div className="space-y-6">
            <P>
              Tiga tangkapan layar di bawah bukan mockup atau rancangan. Ini aplikasi STC
              AutoTrade yang berjalan setiap hari di perangkat ratusan pengguna. Aplikasi
              yang kami buatkan untuk Anda berdiri di atas fondasi yang sama.
            </P>

            <div className="relative rounded-3xl bg-[#08130e] overflow-hidden px-4 py-11 sm:px-6 lg:px-10">
              <div
                className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -top-28 left-1/2 -translate-x-1/2 w-[440px] h-[260px] bg-emerald-400/20 blur-[90px] rounded-full pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-emerald-300/80 text-center mb-8">
                  Aplikasi Android · Berjalan Nyata
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-4 lg:gap-6 justify-items-center">
                  <Tangkapan
                    src="/gambar1.webp"
                    alt="Dashboard aplikasi trading otomatis: profit harian, jam server, grafik harga realtime, pemilih mode, dan tombol start"
                    judul="Dashboard utama"
                    ket="Profit harian, grafik realtime, pemilih mode, dan kendali start/stop dalam satu layar."
                    priority
                  />
                  <Tangkapan
                    src="/gambar2.webp"
                    alt="Panel pengaturan trading: pilihan akun demo, durasi order, nominal per trade, martingale, stop loss, dan target profit"
                    judul="Pengaturan & manajemen risiko"
                    ket="Nominal per order, martingale bertingkat, stop loss dan target profit otomatis."
                  />
                  <Tangkapan
                    src="/gambar3.webp"
                    alt="Riwayat order aplikasi trading otomatis menampilkan arah buy/sell, nominal, status profit atau loss, dan penanda martingale"
                    judul="Riwayat order"
                    ket="Setiap order tercatat — arah, nominal, hasil, dan langkah martingale-nya."
                  />
                </div>
              </div>
            </div>

            <InfoBox icon="🔍" title="Silakan periksa sendiri sebelum memutuskan">
              Aplikasinya bisa Anda{" "}
              <Link href="/download" className="underline">unduh dan pakai langsung</Link>{" "}
              hari ini juga, gratis, termasuk mode demo. Itu cara paling jujur menilai
              kualitas kerja kami — Anda melihat produknya bekerja, bukan membaca janji.
            </InfoBox>
          </div>
        </section>

        {/* ── 02 · Harga ─────────────────────────────────────── */}
        <section>
          <SectionLabel>02 · Harga</SectionLabel>
          <H2>Dua Pilihan, Angkanya Terbuka</H2>
          <div className="space-y-6">
            <P>
              Kami memasang harga di halaman ini supaya Anda bisa menilai sejak awal tanpa
              perlu bertanya lebih dulu. Tidak ada biaya tersembunyi dan tidak ada tambahan
              di tengah pengerjaan selama lingkupnya tidak berubah.
            </P>

            <div className="grid sm:grid-cols-2 gap-4 pt-1.5">
              <KartuHarga
                utama
                eyebrow="Beli Putus"
                harga="Rp 12–18 jt"
                catatan="bayar sekali, aplikasi jadi milik Anda"
                isi={[
                  "Aplikasi Android siap pasang",
                  "Versi web bila diperlukan",
                  "Panel admin & pengelolaan pengguna",
                  "Kode sumber & dokumentasi diserahkan",
                  "Pendampingan setelah serah terima",
                ]}
              />
              <KartuHarga
                eyebrow="Sewa Bulanan"
                harga="Rp 1,8 jt"
                satuan="/bulan"
                catatan="tanpa biaya pembuatan di awal"
                isi={[
                  "Sistem yang sama, siap pakai",
                  "Server ditanggung kami",
                  "Pembaruan & perbaikan termasuk",
                  "Berhenti kapan saja",
                  "Bisa dialihkan ke beli putus",
                ]}
              />
            </div>

            <InfoBox icon="🧮" title="Mana yang lebih hemat">
              Sewa lebih ringan bila Anda ingin mulai cepat atau masih menguji pasar. Beli
              putus jadi lebih murah setelah kira-kira sepuluh bulan pemakaian — dan setelah
              itu tidak ada biaya bulanan sama sekali. Biaya sewa yang sudah berjalan dapat
              diperhitungkan bila Anda memutuskan beralih.
            </InfoBox>

            <div className="pt-1">
              <TombolOrder />
            </div>
          </div>
        </section>

        {/* ── 03 · Waktu pengerjaan ──────────────────────────── */}
        <section>
          <SectionLabel>03 · Waktu Pengerjaan</SectionLabel>
          <H2>Selesai 1–3 Hari — Ini Alasannya</H2>
          <div className="space-y-4">
            <P>
              Angka itu sering membuat orang curiga, jadi kami jelaskan apa adanya. Ada dua
              hal yang membuatnya mungkin, dan keduanya tidak berkaitan dengan memotong
              kualitas.
            </P>
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
            <P>
              Yang perlu jujur disampaikan: 1–3 hari berlaku bila kebutuhan Anda masih dalam
              lingkup yang kami kuasai. Bila Anda meminta platform yang belum pernah kami
              tangani, kami sampaikan estimasi berbeda sejak awal — bukan setelah Anda
              membayar.
            </P>
          </div>
        </section>

        {/* ── 04 · Layanan ───────────────────────────────────── */}
        <section>
          <SectionLabel>04 · Layanan</SectionLabel>
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
        </section>

        {/* ── 05 · Kenapa kami ───────────────────────────────── */}
        <section>
          <SectionLabel>05 · Kenapa Kami</SectionLabel>
          <H2>Dibangun dari Pengalaman, Bukan dari Teori</H2>
          <div className="space-y-4">
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
            <WarningBox>
              Yang patut Anda curigai dari penyedia jasa mana pun adalah ketiadaan produk
              yang bisa dicoba. Bila calon pembuat aplikasi Anda hanya menunjukkan tangkapan
              layar dan tidak punya satu pun sistem yang benar-benar berjalan dan dipakai
              orang, mintalah bukti sebelum mengirim uang.
            </WarningBox>
          </div>
        </section>

        {/* ── 06 · Beli vs sewa ──────────────────────────────── */}
        <section>
          <SectionLabel>06 · Perbandingan</SectionLabel>
          <H2>Beli Putus atau Sewa</H2>
          <div className="space-y-4">
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

        {/* ── 07 · Alur kerja ────────────────────────────────── */}
        <section>
          <SectionLabel>07 · Alur Kerja</SectionLabel>
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
                desc: "Tim divisi developer mengerjakan bagian aplikasi, backend, dan panel admin secara berbarengan. Anda menerima kabar perkembangannya, bukan didiamkan sampai selesai.",
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
        </section>

        {/* ── 08 · Pembayaran ────────────────────────────────── */}
        <section>
          <SectionLabel>08 · Pembayaran</SectionLabel>
          <H2>Bayar dengan Cara yang Anda Biasa Pakai</H2>
          <div className="space-y-4">
            <P>
              Kami menerima hampir semua metode pembayaran yang umum di Indonesia, jadi Anda
              tidak perlu membuka rekening atau dompet digital baru hanya untuk ini.
            </P>
            <div className="space-y-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/50 mb-2.5">
                  Transfer Bank
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {BANK.map((m) => <LogoBayar key={m.nama} {...m} />)}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#1a1612]/50 mb-2.5">
                  Dompet Digital &amp; QRIS
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {DOMPET.map((m) => <LogoBayar key={m.nama} {...m} />)}
                </div>
              </div>

              <p className="text-[11px] text-[#1a1612]/45 leading-relaxed">
                Logo di atas adalah merek dagang milik masing-masing penyedia layanan,
                ditampilkan semata sebagai penanda metode pembayaran yang kami terima.
              </p>
            </div>
            <InfoBox icon="🧾" title="Bisa dibayar dua tahap">
              Untuk paket beli putus, pembayaran dapat dibagi: sebagian sebagai tanda jadi di
              awal, sisanya setelah aplikasi selesai dan Anda sudah mencobanya sendiri.
              Rinciannya disepakati saat konsultasi.
            </InfoBox>
          </div>
        </section>

        {/* ── 09 · Kejujuran ─────────────────────────────────── */}
        <section>
          <SectionLabel>09 · Kejujuran</SectionLabel>
          <H2>Yang Tidak Kami Janjikan</H2>
          <div className="space-y-4">
            <P>
              Kami membuat perangkat lunak, bukan mesin uang. Bot menjalankan aturan Anda
              lebih cepat dan lebih konsisten — tetapi ia tidak memperbaiki aturan yang
              keliru. Aturan yang salah akan diulang dengan rapi.
            </P>
            <P>
              Kami juga tidak menjanjikan keuntungan, tidak menjual strategi ajaib, dan tidak
              menyarankan Anda memakai dana yang tidak siap Anda kehilangan. Perhitungan
              jujur mengenai risikonya ada di{" "}
              <Link href="/artikel/berapa-penghasilan-trading-binary-option" className="text-[#047857] underline">
                artikel penghasilan trading
              </Link>
              .
            </P>
            <P>
              Bila yang Anda cari adalah penyedia jasa yang mengiyakan semua permintaan, kami
              bukan pilihan yang tepat. Kami akan mengatakan bila sebuah permintaan tidak
              masuk akal secara teknis — sejak awal, bukan setelah dibayar.
            </P>
          </div>
        </section>

        {/* ── 10 · Order ─────────────────────────────────────── */}
        <section>
          <SectionLabel>10 · Cara Order</SectionLabel>
          <H2>Langsung Hubungi Kami di Telegram</H2>
          <div className="space-y-5">
            <P>
              Pemesanan dan konsultasi dilakukan lewat Telegram. Sampaikan kebutuhan Anda —
              platform tujuan, mode strategi yang diinginkan, dan apakah perlu panel admin —
              lalu Anda akan menerima penawaran beserta angka pastinya.
            </P>
            <div className="relative rounded-2xl overflow-hidden bg-[#08130e] px-6 py-9 sm:px-10 text-center">
              <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-[360px] h-[220px] bg-[#229ED9]/25 blur-[80px] rounded-full pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-[11px] tracking-[0.14em] uppercase text-white/45 mb-2">Admin STC AutoTrade</p>
                <p className="font-[family-name:var(--font-dm-serif)] text-3xl text-white mb-6">@Szin_yui</p>
                <div className="flex justify-center">
                  <TombolOrder />
                </div>
                <p className="text-[11.5px] text-white/45 mt-5 max-w-sm mx-auto leading-relaxed">
                  Konsultasi tidak dipungut biaya, termasuk bila akhirnya Anda memutuskan
                  tidak jadi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11 · FAQ ───────────────────────────────────────── */}
        <section>
          <SectionLabel>11 · FAQ</SectionLabel>
          <H2>Pertanyaan yang Sering Muncul</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
