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
  title: "Kode Promo Pengguna Baru STC AutoTrade — Segera Hadir 17 Agustus 2026",
  description:
    "Promo kode pengguna baru STC AutoTrade dibuka 17 Agustus 2026. Kodenya diumumkan saat promo dibuka — siapkan akun Anda dari sekarang.",
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
    { q: "Kapan promo kode pengguna baru STC AutoTrade dibuka?", a: "Promo dibuka pada 17 Agustus 2026. Kodenya diumumkan tepat saat promo dibuka, baik di halaman ini maupun di dalam aplikasi STC AutoTrade." },
    { q: "Siapa yang bisa memakai kode promonya?", a: "Hanya pengguna baru yang mendaftar. Kode tidak berlaku untuk akun yang sudah terdaftar sebelumnya." },
    { q: "Di mana kodenya nanti dimasukkan?", a: "Pada kolom kode saat proses pendaftaran akun baru lewat aplikasi STC AutoTrade. Setelah terdaftar, Anda bisa memakai aplikasi maupun versi webnya." },
    { q: "Apakah promo ini gratis?", a: "Ya. STC AutoTrade gratis untuk member terdaftar, dan promo pengguna baru ini juga tanpa biaya. Ketentuan lengkap mengikuti aturan promo saat dibuka." },
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
        title={<>Promo Kode Pengguna Baru:<br className="hidden sm:block" /> Segera Hadir</>}
        lede={<><strong className="font-semibold text-[#1a1612]">STC AutoTrade</strong> menyiapkan promo kode khusus pengguna baru yang dibuka <strong className="font-semibold text-[#1a1612]">17 Agustus 2026</strong>. Kodenya diumumkan tepat saat promo dibuka — siapkan akun Anda dari sekarang.</>}
        stats={[
          { v: "17 Agt", l: "Promo Dibuka" },
          { v: "Baru", l: "Khusus Pengguna" },
          { v: "Segera", l: "Kode Diumumkan" },
          { v: "Gratis", l: "Untuk Member" },
        ]}
        related={[
          { href: "/artikel/cara-daftar-stockity", title: "Cara Daftar Stockity", desc: "Langkah membuat akun baru dari nol" },
          { href: "/artikel/bonus-deposit-stockity", title: "Bonus Deposit Stockity", desc: "Cara klaim bonus & syarat turnover" },
          { href: "/artikel/auto-trade-stockity-gratis", title: "Auto Trade Gratis", desc: "Semua fitur, tanpa biaya untuk member" },
        ]}
        ctaEyebrow="Pengguna Baru"
        ctaTitle="Siapkan Akun Sebelum Promo Dibuka"
        ctaDesc="Cepat, gratis untuk member — langsung jalankan STC AutoTrade setelah terdaftar."
      >
        <section>
          <SectionLabel>01 · Jadwal</SectionLabel>
          <H2>Dibuka 17 Agustus 2026</H2>
          <div className="space-y-4">
            <P>Promo kode untuk Anda yang <strong className="text-[#1a1612]">baru mendaftar</strong> akan dibuka pada <strong className="text-[#1a1612]">17 Agustus 2026</strong>. Kodenya belum diumumkan:</P>
            <div className="rounded-2xl border border-[#047857]/25 bg-[rgba(4,120,87,0.06)] px-6 py-6 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#047857]/70">Promo Pengguna Baru</p>
              <p className="mt-2 font-mono text-[30px] font-bold tracking-[0.14em] text-[#047857] sm:text-[38px]">SEGERA HADIR</p>
            </div>
            <InfoBox icon="🎁" title="Untuk siapa">
              Promo ini khusus pengguna baru yang mendaftar. Akun yang sudah ada sebelumnya tidak termasuk.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Persiapan</SectionLabel>
          <H2>Cara Bersiap Sekarang</H2>
          <Steps
            items={[
              { title: "Buka pendaftaran STC AutoTrade", desc: <>Mulai proses <Link href="/artikel/cara-daftar-stockity" className="text-[#047857] underline">daftar akun baru</Link> lewat aplikasi STC AutoTrade. Belum punya aplikasinya? Unduh dulu dari halaman resmi.</> },
              { title: "Tunggu kode diumumkan", desc: "Kode promo diumumkan pada 17 Agustus 2026 di halaman ini dan di dalam aplikasi." },
              { title: "Selesaikan pendaftaran", desc: "Ikuti langkah pendaftaran hingga selesai. Akun yang sudah siap memudahkan Anda saat promo dibuka." },
              { title: "Mulai pakai — app atau web", desc: "Setelah terdaftar, jalankan STC AutoTrade di aplikasi Android atau langsung di browser lewat versi webnya." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Ketentuan</SectionLabel>
          <H2>Yang Perlu Diperhatikan</H2>
          <div className="space-y-4">
            <P>Agar tidak salah paham, ingat poin-poin berikut sebelum promo dibuka.</P>
            <WarningBox>
              Promo ini <strong className="text-[#1a1612]">belum dibuka</strong> — kodenya diumumkan pada <strong className="text-[#1a1612]">17 Agustus 2026</strong> dan hanya berlaku untuk <strong className="text-[#1a1612]">pengguna baru yang mendaftar</strong>. Rincian keuntungan mengikuti ketentuan promo saat dibuka. Ikuti hanya saluran resmi STC AutoTrade — waspadai pihak yang membagikan kode mengatasnamakan kami sebelum tanggal tersebut.
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
