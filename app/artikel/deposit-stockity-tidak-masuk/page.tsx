/**
 * app/artikel/deposit-stockity-tidak-masuk/page.tsx
 * Primary: deposit stockity tidak masuk · Secondary: deposit stockity pending,
 * saldo stockity belum bertambah, deposit stockity gagal
 * Angle: troubleshooting — pelengkap cara-deposit-stockity (tata cara),
 * fokus penyelesaian masalah.
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "deposit-stockity-tidak-masuk",
  title: "Deposit Stockity Tidak Masuk? 6 Penyebab & Solusinya 2026",
  description:
    "Sudah transfer tapi saldo Stockity belum bertambah? Kenali 6 penyebab deposit pending — VA kedaluwarsa, nominal tidak sesuai, delay payment gateway — beserta langkah penyelesaian dan cara klaim ke support.",
  keywords: [
    "deposit stockity tidak masuk",
    "deposit stockity pending",
    "saldo stockity belum bertambah",
    "deposit stockity gagal",
    "berapa lama deposit stockity masuk",
    "deposit stockity error",
  ],
  breadcrumbName: "Deposit Tidak Masuk",
  datePublished: "2026-07-09",
  faq: [
    { q: "Berapa lama deposit Stockity normalnya masuk?", a: "Metode instan (e-wallet, VA, QRIS) umumnya masuk dalam hitungan detik sampai beberapa menit. Jika lewat 30–60 menit belum bertambah, baru layak dianggap bermasalah dan perlu ditelusuri." },
    { q: "Saya transfer ke VA tapi saldo tidak bertambah, kenapa?", a: "Penyebab tersering: nomor VA sudah kedaluwarsa (dibuat lama sebelum dibayar), atau nominal transfer tidak sama persis dengan tagihan. Buat ulang permintaan deposit untuk mendapatkan VA baru, dan bayar sesuai nominal persis sebelum batas waktunya." },
    { q: "Uang sudah terpotong dari rekening tapi deposit gagal, apakah hilang?", a: "Umumnya tidak. Jika pembayaran diterima gateway tapi gagal diteruskan, dana akan dikembalikan otomatis (refund) oleh penyedia pembayaran dalam beberapa hari kerja, atau deposit akan dikreditkan menyusul. Simpan bukti transfer sebagai dasar klaim." },
    { q: "Apa yang harus dikirim ke support saat klaim deposit?", a: "Tiga hal: bukti pembayaran (screenshot/struk yang memuat tanggal, jam, nominal, tujuan), ID akun Stockity Anda, dan metode pembayaran yang dipakai. Semakin lengkap, semakin cepat ditelusuri." },
    { q: "Apakah deposit di akhir pekan lebih lambat?", a: "Metode instan tetap berjalan 24/7, namun penanganan kendala oleh tim support bisa lebih lambat di akhir pekan. Untuk deposit pertama kali, lebih aman melakukannya di hari kerja." },
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
        badge="Troubleshooting"
        date="9 Juli 2026"
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        title={<>Deposit Stockity Tidak Masuk?<br className="hidden sm:block" /> 6 Penyebab &amp; Solusinya</>}
        lede={<>Sudah bayar tapi saldo belum bertambah? Tenang — <strong className="font-semibold text-[#1a1612]">hampir semua kasus bisa ditelusuri dan dananya kembali</strong>. Ikuti diagnosis berurutan ini sebelum menghubungi support.</>}
        stats={[
          { v: "< 5 mnt", l: "Normal Metode Instan" },
          { v: "6", l: "Penyebab Paling Umum" },
          { v: "Refund", l: "Dana Gagal Umumnya Kembali" },
          { v: "3 Bukti", l: "Bekal Klaim ke Support" },
        ]}
        related={[
          { href: "/artikel/cara-deposit-stockity", title: "Cara Deposit Stockity", desc: "Tata cara isi saldo yang benar dari awal" },
          { href: "/artikel/minimal-deposit-stockity", title: "Minimal Deposit Stockity", desc: "Nominal minimum & modal aman untuk mulai" },
          { href: "/artikel/stockity-tidak-bisa-login", title: "Stockity Tidak Bisa Login?", desc: "Troubleshooting akses akun" },
        ]}
        ctaEyebrow="Saldo Sudah Masuk?"
        ctaTitle="Jalankan STC AutoTrade dengan Manajemen Risiko Bawaan"
        ctaDesc="Mulai dari mode demo dulu — lalu trading otomatis dengan stop loss & stop profit harian."
      >
        <section>
          <SectionLabel>01 · Diagnosis</SectionLabel>
          <H2>6 Penyebab Deposit Pending — Cek Berurutan</H2>
          <DataTable
            head={["#", "Penyebab", "Cirinya & Solusi Singkat"]}
            rows={[
              ["1", "Delay payment gateway", "Pembayaran sukses tapi butuh waktu diteruskan — tunggu 30–60 menit sambil refresh riwayat deposit"],
              ["2", "VA kedaluwarsa", "Nomor Virtual Account dibayar melewati batas waktu — buat permintaan deposit baru, jangan pakai VA lama"],
              ["3", "Nominal tidak sesuai", "Transfer VA/QRIS harus sama persis dengan tagihan; selisih Rp 1 pun bisa membuat sistem tidak mencocokkan"],
              ["4", "Pembayaran e-wallet gagal di tengah", "Saldo e-wallet terpotong tapi status gagal — umumnya refund otomatis beberapa hari kerja"],
              ["5", "Salah tujuan / salah metode", "Membayar ke rekening lama dari riwayat transfer, bukan ke tagihan aktif — perlu klaim manual dengan bukti"],
              ["6", "Gangguan sistem/maintenance", "Ada pengumuman resmi di platform — deposit akan dikreditkan setelah normal"],
            ]}
          />
        </section>

        <section>
          <SectionLabel>02 · Solusi</SectionLabel>
          <H2>Langkah Penyelesaian</H2>
          <Steps
            items={[
              { title: "Cek riwayat deposit di platform", desc: "Lihat status permintaan deposit terakhir: menunggu pembayaran, diproses, sukses, atau gagal. Status ini menentukan langkah Anda." },
              { title: "Cocokkan bukti bayar dengan tagihan", desc: "Periksa nominal, tujuan, dan waktu pembayaran. Bayar VA lama atau nominal tidak persis adalah penyebab tersering." },
              { title: "Tunggu 30–60 menit untuk delay gateway", desc: "Jika pembayaran benar dan baru saja dilakukan, beri waktu sistem memproses — jangan buru-buru deposit ulang dobel." },
              { title: "Gagal total? Buat permintaan deposit baru", desc: "Untuk VA kedaluwarsa: buat ulang dan bayar sebelum batas waktu. Dana dari pembayaran gagal akan direfund terpisah." },
              { title: "Klaim ke support dengan bukti lengkap", desc: "Lewat 1 jam tanpa kejelasan: kirim bukti pembayaran + ID akun + metode yang dipakai ke live chat/support Stockity." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Pencegahan</SectionLabel>
          <H2>Tips Supaya Deposit Selalu Instan</H2>
          <div className="space-y-4">
            <P>
              Tiga kebiasaan sederhana:{" "}
              <strong className="text-[#1a1612]">bayar segera setelah tagihan dibuat</strong> (VA/QRIS
              punya masa berlaku), <strong className="text-[#1a1612]">salin nominal, jangan diketik
              manual</strong>, dan mulai dari nominal kecil dulu saat pertama kali mencoba metode
              pembayaran baru.
            </P>
            <InfoBox icon="💡" title="Deposit pertama = uji coba">
              Untuk deposit perdana, gunakan nominal di kisaran{" "}
              <Link href="/artikel/minimal-deposit-stockity" className="text-[#047857] underline">minimum yang disarankan</Link>{" "}
              dulu. Setelah alurnya terbukti lancar, baru top-up sesuai rencana modal Anda.
            </InfoBox>
            <WarningBox>
              Hanya deposit melalui halaman resmi platform. Jangan pernah transfer ke rekening pribadi
              yang mengaku &ldquo;admin deposit&rdquo; di grup atau DM — itu modus penipuan yang paling umum.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Deposit Bermasalah</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
