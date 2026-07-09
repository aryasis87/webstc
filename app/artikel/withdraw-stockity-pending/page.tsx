/**
 * app/artikel/withdraw-stockity-pending/page.tsx
 * Primary: withdraw stockity pending · Secondary: withdraw stockity lama,
 * penarikan stockity ditolak, withdraw stockity gagal
 * Angle: troubleshooting (intent tinggi) — pelengkap cara-withdraw-stockity,
 * fokus pada masalah, bukan tata cara (hindari kanibalisasi).
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "withdraw-stockity-pending",
  title: "Withdraw Stockity Pending? 7 Penyebab & Cara Mengatasinya 2026",
  description:
    "Penarikan dana Stockity lama diproses atau ditolak? Kenali 7 penyebab paling umum — KYC belum selesai, turnover bonus, beda nama rekening — plus langkah penyelesaiannya dan kapan harus hubungi support.",
  keywords: [
    "withdraw stockity pending",
    "withdraw stockity lama",
    "penarikan stockity ditolak",
    "withdraw stockity gagal",
    "withdraw stockity tidak masuk",
    "berapa lama withdraw stockity",
    "penarikan dana stockity",
  ],
  breadcrumbName: "Withdraw Pending",
  datePublished: "2026-07-09",
  faq: [
    { q: "Berapa lama withdraw Stockity normalnya diproses?", a: "Umumnya dalam hitungan jam sampai 1×24 jam pada hari kerja. Pengajuan di akhir pekan atau hari libur biasanya baru diproses pada hari kerja berikutnya — ini bukan pending yang bermasalah." },
    { q: "Kenapa withdraw saya ditolak padahal saldo cukup?", a: "Penyebab tersering: verifikasi akun (KYC) belum selesai, nama pemilik rekening/e-wallet tidak sama dengan nama akun Stockity, atau ada syarat turnover bonus deposit yang belum terpenuhi. Periksa ketiganya lebih dulu sebelum menghubungi support." },
    { q: "Apakah ada minimum penarikan?", a: "Ya, sekitar Rp 50.000. Pengajuan di bawah minimum otomatis tidak bisa diproses. Perhatikan juga sisa saldo setelah penarikan bila Anda masih ingin melanjutkan trading." },
    { q: "Bonus deposit membuat withdraw terkunci, benarkah?", a: "Bonus umumnya disertai syarat turnover — volume trading tertentu sebelum dana bisa ditarik. Jika Anda mengklaim bonus lalu langsung withdraw, pengajuan bisa tertahan sampai syarat terpenuhi. Baca ketentuan bonus sebelum klaim." },
    { q: "Kapan saya harus menghubungi support?", a: "Jika status pending melewati 1×24 jam hari kerja, semua syarat sudah Anda pastikan terpenuhi, dan tidak ada pengumuman maintenance — hubungi live chat/support Stockity dengan menyertakan ID transaksi penarikan Anda." },
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
        readMins={7}
        breadcrumbName={seo.breadcrumbName}
        title={<>Withdraw Stockity Pending?<br className="hidden sm:block" /> Ini Penyebab &amp; Solusinya</>}
        lede={<>Sebagian besar kasus withdraw pending <strong className="font-semibold text-[#1a1612]">bukan berarti dana hilang</strong> — melainkan ada syarat yang belum terpenuhi atau sekadar jadwal pemrosesan. Cek 7 penyebab ini berurutan sebelum panik.</>}
        stats={[
          { v: "1×24 jam", l: "Estimasi Normal (Hari Kerja)" },
          { v: "Rp 50 rb", l: "Minimum Penarikan" },
          { v: "KYC", l: "Syarat Wajib Withdraw" },
          { v: "7", l: "Penyebab Paling Umum" },
        ]}
        related={[
          { href: "/artikel/cara-withdraw-stockity", title: "Cara Withdraw Stockity", desc: "Tata cara penarikan yang benar dari awal" },
          { href: "/artikel/cara-verifikasi-akun-stockity", title: "Verifikasi Akun (KYC)", desc: "Penyebab #1 withdraw tertahan — selesaikan ini" },
          { href: "/artikel/bonus-deposit-stockity", title: "Bonus Deposit Stockity", desc: "Pahami syarat turnover sebelum klaim bonus" },
        ]}
        ctaEyebrow="Profit Dulu, Withdraw Kemudian"
        ctaTitle="Konsisten Dulu dengan STC AutoTrade"
        ctaDesc="Stop loss & stop profit otomatis menjaga saldo Anda tumbuh terukur — supaya ada yang layak ditarik."
      >
        <section>
          <SectionLabel>01 · Diagnosis</SectionLabel>
          <H2>7 Penyebab Withdraw Pending — Urut dari yang Paling Sering</H2>
          <DataTable
            head={["#", "Penyebab", "Cirinya"]}
            rows={[
              ["1", "Verifikasi akun (KYC) belum selesai", "Withdraw ditolak/tertahan dengan permintaan verifikasi; akun belum pernah upload dokumen"],
              ["2", "Nama rekening tujuan ≠ nama akun", "Penarikan ke rekening/e-wallet milik orang lain hampir pasti ditolak"],
              ["3", "Turnover bonus belum terpenuhi", "Anda pernah klaim bonus deposit; sisa turnover masih berjalan"],
              ["4", "Diajukan di luar jam kerja", "Pengajuan Jumat malam–Minggu baru diproses hari kerja berikutnya"],
              ["5", "Nominal di bawah minimum", "Pengajuan di bawah ± Rp 50.000 tidak dapat diproses"],
              ["6", "Gangguan/maintenance metode pembayaran", "Bank atau e-wallet tujuan sedang gangguan; biasanya ada pengumuman"],
              ["7", "Pemeriksaan keamanan tambahan", "Aktivitas tidak wajar (login baru, penarikan besar pertama) memicu review manual"],
            ]}
          />
        </section>

        <section>
          <SectionLabel>02 · Solusi</SectionLabel>
          <H2>Langkah Penyelesaian Berurutan</H2>
          <Steps
            items={[
              { title: "Cek status & alasan di riwayat penarikan", desc: "Buka riwayat transaksi — status ditolak biasanya disertai alasan singkat. Ini menentukan langkah selanjutnya." },
              { title: "Pastikan KYC sudah berstatus terverifikasi", desc: "Belum? Selesaikan dulu — lihat panduan verifikasi akun kami. Ini penyebab nomor satu penarikan tertahan." },
              { title: "Samakan nama tujuan dengan nama akun", desc: "Rekening bank atau e-wallet tujuan wajib atas nama Anda sendiri, sama dengan data akun Stockity." },
              { title: "Periksa sisa turnover bonus", desc: "Jika pernah klaim bonus, cek apakah volume trading yang disyaratkan sudah terpenuhi. Belum? Selesaikan atau hubungi support soal opsi pembatalan bonus." },
              { title: "Tunggu 1×24 jam hari kerja", desc: "Pengajuan akhir pekan wajar baru cair Senin. Jangan ajukan ulang berkali-kali — antrian ganda justru memperlambat." },
              { title: "Hubungi support dengan ID transaksi", desc: "Lewat dari 1×24 jam hari kerja dan semua syarat aman? Kirim ID transaksi + tangkapan layar status ke live chat/support." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Pencegahan</SectionLabel>
          <H2>Supaya Withdraw Berikutnya Selalu Lancar</H2>
          <div className="space-y-4">
            <P>
              Hampir semua penyebab di atas bisa dicegah dari awal:{" "}
              <strong className="text-[#1a1612]">verifikasi akun segera setelah daftar</strong> (jangan
              menunggu mau menarik dana), daftarkan metode pembayaran atas nama sendiri, dan pikir dua
              kali sebelum mengklaim bonus jika Anda ingin fleksibilitas menarik dana kapan saja.
            </P>
            <InfoBox icon="✅" title="Pola withdraw yang sehat">
              Tarik profit secara berkala dengan nominal wajar — misalnya tiap mencapai target{" "}
              <Link href="/artikel/cara-profit-trading-stockity" className="text-[#047857] underline">stop profit</Link> mingguan.
              Penarikan pertama yang sangat besar setelah akun lama pasif lebih berpeluang kena review manual.
            </InfoBox>
            <WarningBox>
              Waspada &ldquo;jasa percepat withdraw&rdquo; yang meminta password atau kode OTP — itu
              penipuan. Tidak ada pihak resmi yang meminta kredensial akun Anda; proses penarikan hanya
              lewat platform.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Withdraw Pending</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
