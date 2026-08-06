/**
 * app/artikel/kode-promo-autotrade100/page.tsx
 * Primary: kode promo autotrade100 · Secondary: kode promo stc autotrade,
 * promo pengguna baru, kode promo trading stockity
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, Steps, FaqList } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "kode-promo-autotrade100",
  title: "Kode Promo Pengguna Baru: AUTOTRADE100 (STC AutoTrade 2026)",
  description:
    "Kode promo pengguna baru STC AutoTrade: AUTOTRADE100. Berlaku khusus untuk pengguna yang baru mendaftar. Simak cara memakainya saat pendaftaran dan ketentuannya.",
  keywords: [
    "kode promo autotrade100",
    "kode promo stc autotrade",
    "promo pengguna baru",
    "kode promo trading stockity",
    "promo daftar stockity",
    "AUTOTRADE100",
    "kode promo robot trading",
  ],
  breadcrumbName: "Kode Promo AUTOTRADE100",
  datePublished: "2026-08-06",
  faq: [
    { q: "Apa kode promo pengguna baru STC AutoTrade?", a: "Kodenya AUTOTRADE100. Gunakan kode ini saat mendaftar akun baru melalui STC AutoTrade. Kode berlaku khusus untuk pengguna baru yang mendaftar." },
    { q: "Siapa yang bisa memakai kode AUTOTRADE100?", a: "Hanya pengguna baru yang baru mendaftar. Kode ini tidak berlaku untuk akun yang sudah terdaftar sebelumnya." },
    { q: "Di mana memasukkan kode promonya?", a: "Masukkan kode saat proses pendaftaran akun baru lewat aplikasi STC AutoTrade. Setelah terdaftar, Anda bisa memakai aplikasi maupun versi webnya." },
    { q: "Apakah kode ini gratis?", a: "Ya. STC AutoTrade gratis untuk member terdaftar, dan kode promo pengguna baru ini juga tanpa biaya. Ikuti ketentuan promo yang berlaku saat pendaftaran." },
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
        date="6 Agustus 2026"
        readMins={4}
        breadcrumbName={seo.breadcrumbName}
        title={<>Kode Promo Pengguna Baru:<br className="hidden sm:block" /> AUTOTRADE100</>}
        lede={<><strong className="font-semibold text-[#1a1612]">STC AutoTrade</strong> punya kode promo khusus untuk pengguna baru. Simpan kodenya, lalu pakai saat mendaftar akun baru — cepat dan gratis untuk member.</>}
        stats={[
          { v: "AUTOTRADE100", l: "Kode Promo" },
          { v: "Baru", l: "Khusus Pengguna" },
          { v: "Saat Daftar", l: "Waktu Pakai" },
          { v: "Gratis", l: "Untuk Member" },
        ]}
        related={[
          { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Langkah membuat akun baru dari nol" },
          { href: "/artikel/bonus-deposit-stockity", title: "Bonus Deposit Stockity", desc: "Cara klaim bonus & syarat turnover" },
          { href: "/artikel/auto-trade-stockity-gratis", title: "Auto Trade Gratis", desc: "Semua fitur, tanpa biaya untuk member" },
        ]}
        ctaEyebrow="Pengguna Baru"
        ctaTitle="Daftar & Pakai Kode AUTOTRADE100"
        ctaDesc="Cepat, gratis untuk member — langsung jalankan STC AutoTrade setelah terdaftar."
      >
        <section>
          <SectionLabel>01 · Kode Promo</SectionLabel>
          <H2>Kodenya: AUTOTRADE100</H2>
          <div className="space-y-4">
            <P>STC AutoTrade menyediakan kode promo khusus bagi Anda yang <strong className="text-[#1a1612]">baru mendaftar</strong>. Kodenya sederhana untuk diingat:</P>
            <div className="rounded-2xl border border-[#047857]/25 bg-[rgba(4,120,87,0.06)] px-6 py-6 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#047857]/70">Kode Promo Pengguna Baru</p>
              <p className="mt-2 font-mono text-[30px] font-bold tracking-[0.14em] text-[#047857] sm:text-[38px]">AUTOTRADE100</p>
            </div>
            <InfoBox icon="🎁" title="Untuk siapa">
              Kode ini berlaku khusus untuk pengguna baru yang baru mendaftar. Akun yang sudah ada sebelumnya tidak termasuk.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Cara Pakai</SectionLabel>
          <H2>Cara Memakai Kodenya</H2>
          <Steps
            items={[
              { title: "Buka pendaftaran STC AutoTrade", desc: <>Mulai proses <Link href="/artikel/cara-daftar-stockity" className="text-[#047857] underline">daftar akun baru</Link> lewat aplikasi STC AutoTrade. Belum punya aplikasinya? Unduh dulu dari halaman resmi.</> },
              { title: "Masukkan kode AUTOTRADE100", desc: "Saat mendaftar, masukkan kode promo AUTOTRADE100 pada kolom yang tersedia." },
              { title: "Selesaikan pendaftaran", desc: "Ikuti langkah pendaftaran hingga selesai. Kode berlaku sesuai ketentuan promo yang berlaku saat itu." },
              { title: "Mulai pakai — app atau web", desc: "Setelah terdaftar, jalankan STC AutoTrade di aplikasi Android atau langsung di browser lewat versi webnya." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Ketentuan</SectionLabel>
          <H2>Yang Perlu Diperhatikan</H2>
          <div className="space-y-4">
            <P>Agar tidak salah paham, ingat poin-poin berikut sebelum memakai kodenya.</P>
            <WarningBox>
              Kode <strong className="text-[#1a1612]">AUTOTRADE100</strong> hanya berlaku untuk <strong className="text-[#1a1612]">pengguna baru yang mendaftar</strong> dan digunakan <strong className="text-[#1a1612]">saat pendaftaran</strong>. Rincian keuntungan mengikuti ketentuan promo yang berlaku. Gunakan hanya melalui saluran resmi STC AutoTrade — waspadai pihak yang mengatasnamakan promo ini di luar saluran resmi.
            </WarningBox>
            <P>Ingin tahu soal bonus di sisi platform trading? Baca <Link href="/artikel/bonus-deposit-stockity" className="text-[#047857] underline">bonus deposit Stockity</Link> — itu topik terpisah dari kode promo pendaftaran ini.</P>
          </div>
        </section>

        <section>
          <SectionLabel>04 · FAQ</SectionLabel>
          <H2>Pertanyaan yang Sering Muncul</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
