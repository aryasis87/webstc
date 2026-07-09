/**
 * app/kalkulator-compounding/page.tsx
 *
 * Tool interaktif: kalkulator compounding & profit trading + break-even
 * win rate. Target keyword "kalkulator compounding trading" dkk; linkable
 * asset. Schema: WebPage + BreadcrumbList + FAQPage.
 */

import type { Metadata } from "next";
import Link from "next/link";
import CompoundCalculator from "@/components/calculators/CompoundCalculator";
import { InfoPageShell, InfoSection, InfoP, InfoWarning } from "@/components/InfoPageShell";

const BASE_URL = "https://stcautotrade.id";
const PAGE_URL = `${BASE_URL}/kalkulator-compounding`;

const FAQ = [
  { q: "Apa itu compounding dalam trading?", a: "Compounding (bunga berbunga) berarti profit ikut diputar: nominal order dinaikkan seiring bertambahnya saldo, sehingga pertumbuhan bersifat eksponensial. Lawannya adalah nominal tetap — profit diambil, nominal order tidak berubah, pertumbuhannya linier." },
  { q: "Target harian berapa persen yang realistis?", a: "Untuk trader disiplin, 1–3% dari modal per hari sudah tergolong sehat. Angka jauh di atas itu biasanya berarti mengambil risiko yang tidak berkelanjutan — proyeksinya indah di kalkulator, tetapi satu deret kalah menghapusnya." },
  { q: "Kenapa hasil compound jauh lebih besar dari nominal tetap?", a: "Karena basis perhitungannya ikut tumbuh. Pada 2% per hari selama 20 hari: nominal tetap menghasilkan +40%, sedangkan compound menghasilkan sekitar +48,6% — dan selisihnya melebar drastis pada periode lebih panjang." },
  { q: "Apakah proyeksi ini jaminan hasil?", a: "Bukan. Ini proyeksi matematis dengan asumsi target tercapai konsisten setiap hari — kenyataannya hasil trading berfluktuasi, ada hari minus dan pekan minus. Gunakan sebagai alat perencanaan skala, bukan janji penghasilan." },
  { q: "Apa itu break-even win rate?", a: "Persentase kemenangan minimum agar tidak rugi, dihitung dari payout: 100 ÷ (100 + payout). Dengan payout 80%, angkanya 55,6% — menang separuh dari seluruh order masih berarti rugi." },
];

export const metadata: Metadata = {
  title: "Kalkulator Compounding Trading — Proyeksi Profit & Break-Even",
  description:
    "Kalkulator compounding gratis: proyeksikan pertumbuhan saldo dari modal awal, target harian (%), dan jumlah hari — bandingkan compound vs nominal tetap, plus hitung break-even win rate dari payout.",
  keywords: [
    "kalkulator compounding trading",
    "kalkulator compound profit",
    "kalkulator profit trading",
    "compounding binary option",
    "kalkulator break even win rate",
    "proyeksi profit trading",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kalkulator Compounding Trading — Proyeksi Profit & Break-Even",
    description:
      "Proyeksikan pertumbuhan saldo: compound vs nominal tetap, plus break-even win rate dari payout. Gratis & interaktif.",
    url: PAGE_URL,
    type: "website",
    images: [{ url: `${BASE_URL}/og?t=${encodeURIComponent("Kalkulator Compounding Trading — Proyeksi Profit & Break-Even")}&l=id`, width: 1200, height: 630, alt: "Kalkulator Compounding — STC AutoTrade" }],
  },
  twitter: { card: "summary_large_image" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "Kalkulator Compounding Trading",
    description: "Kalkulator interaktif proyeksi pertumbuhan saldo trading: compound vs nominal tetap + break-even win rate.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${BASE_URL}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Kalkulator Compounding", item: PAGE_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <InfoPageShell
        breadcrumbName="Kalkulator Compounding"
        eyebrow="Tool Gratis"
        title={<>Kalkulator Compounding<br />&amp; Profit Trading</>}
        intro="Proyeksikan pertumbuhan saldo dari modal awal, target harian, dan jumlah hari trading — bandingkan mode compound dengan nominal tetap, dan cek break-even win rate dari payout."
      >
        <section>
          <CompoundCalculator />
        </section>

        <InfoSection title="Cara memakai proyeksinya dengan benar">
          <InfoP>
            Kalkulator ini menjawab pertanyaan skala: <em>kalau target harian saya X% dan konsisten,
            jadi berapa dalam sebulan?</em> Gunakan target yang realistis — panduan{" "}
            <Link href="/artikel/berapa-penghasilan-trading-binary-option" className="text-[#047857] hover:underline">
              hitungan penghasilan trading
            </Link>{" "}
            kami memakai 1–3% per hari sebagai rentang sehat. Masukkan 10% per hari dan kalkulator
            akan patuh menghitungnya — tetapi pasar tidak akan sepatuh itu.
          </InfoP>
          <InfoP>
            Mode <strong>compound</strong> mengasumsikan nominal order ikut dinaikkan seiring saldo
            tumbuh; mode <strong>nominal tetap</strong> mengasumsikan profit disisihkan. Compound
            tumbuh lebih cepat — sekaligus berarti kerugian di hari-hari akhir bernilai rupiah lebih
            besar. Banyak trader memakai jalan tengah: compound sampai target tertentu, lalu tarik
            profit rutin.
          </InfoP>
        </InfoSection>

        <InfoWarning>
          Proyeksi adalah matematika, bukan jaminan — asumsinya target tercapai setiap hari,
          kenyataannya hasil berfluktuasi. Jangan menaikkan target harian demi mengejar angka
          proyeksi; itu kebalikan dari{" "}
          <Link href="/artikel/manajemen-modal-trading-binary-option" className="underline">
            manajemen modal
          </Link>{" "}
          yang sehat.
        </InfoWarning>

        <InfoSection title="Pertanyaan umum">
          <div className="space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4">
                <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1.5">{f.q}</h3>
                <p className="text-[13px] text-[#6b6058] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </InfoSection>

        <InfoSection title="Dari proyeksi ke eksekusi">
          <InfoP>
            Konsistensi harian adalah bagian tersulit — dan itu yang diotomasi{" "}
            <Link href="/artikel/robot-trading-stockity" className="text-[#047857] hover:underline">
              STC AutoTrade
            </Link>: stop profit harian mengunci target sebelum keserakahan masuk, stop loss harian
            membatasi hari buruk. Hitung juga kebutuhan modal strategi Anda di{" "}
            <Link href="/kalkulator-martingale" className="text-[#047857] hover:underline">
              kalkulator martingale
            </Link>.
          </InfoP>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
