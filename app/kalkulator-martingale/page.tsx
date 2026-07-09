/**
 * app/kalkulator-martingale/page.tsx
 *
 * Tool interaktif: kalkulator martingale binary option — Server Component
 * membungkus kalkulator klien. Target keyword kelas baru ("kalkulator
 * martingale") + linkable asset untuk backlink natural.
 * Schema: WebPage + BreadcrumbList + FAQPage (BUKAN SoftwareApplication —
 * konvensi situs: node SoftwareApplication hanya untuk #app).
 */

import type { Metadata } from "next";
import Link from "next/link";
import MartingaleCalculator from "@/components/calculators/MartingaleCalculator";
import { InfoPageShell, InfoSection, InfoP, InfoWarning } from "@/components/InfoPageShell";

const BASE_URL = "https://stcautotrade.id";
const PAGE_URL = `${BASE_URL}/kalkulator-martingale`;

const FAQ = [
  { q: "Bagaimana cara kerja kalkulator martingale ini?", a: "Masukkan nominal order awal, multiplier (kelipatan kenaikan setelah kalah), jumlah step maksimum, dan payout platform. Kalkulator menghitung nominal tiap step, total modal yang dipertaruhkan dalam satu siklus penuh, dan profit bersih jika kemenangan terjadi di step tertentu." },
  { q: "Berapa setting martingale yang aman?", a: "Tidak ada yang benar-benar 'aman', tetapi multiplier 2–2,5× dengan maksimum 3 step dianggap konservatif — total risikonya masih masuk akal dan setiap kemenangan menutup kerugian sebelumnya. Semakin banyak step, kebutuhan modal naik secara eksponensial." },
  { q: "Kenapa profit bersih bisa negatif padahal menang?", a: "Jika multiplier terlalu kecil dibanding payout, nominal kemenangan tidak cukup menutup akumulasi kerugian step sebelumnya. Kalkulator menandai kondisi ini otomatis — naikkan multiplier sampai semua step bernilai positif." },
  { q: "Berapa modal yang harus disiapkan?", a: "Minimal 2× total modal satu siklus penuh (angka 'saran saldo minimum' di kalkulator) — supaya satu siklus gagal tidak langsung menghabiskan akun. Deret kalah lebih panjang dari perkiraan adalah kejadian normal, bukan pengecualian." },
  { q: "Apakah STC AutoTrade menjalankan martingale otomatis?", a: "Ya — bot memiliki sistem martingale terkelola: Anda menentukan MAX STEP dan MULTIPLIER sendiri, bot mengeksekusinya dengan disiplin dan berhenti pada stop loss harian yang Anda tetapkan." },
];

export const metadata: Metadata = {
  title: "Kalkulator Martingale Binary Option — Hitung Modal per Step",
  description:
    "Kalkulator martingale gratis: hitung nominal order tiap step, total modal yang dipertaruhkan, dan profit bersih per kemenangan — dari nominal awal, multiplier, max step, dan payout. Interaktif, tanpa daftar.",
  keywords: [
    "kalkulator martingale",
    "kalkulator martingale binary option",
    "hitung modal martingale",
    "martingale calculator",
    "kalkulator compound martingale",
    "rumus martingale trading",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kalkulator Martingale Binary Option — Hitung Modal per Step",
    description:
      "Hitung nominal tiap step, total modal satu siklus, dan profit bersih per kemenangan. Gratis & interaktif.",
    url: PAGE_URL,
    type: "website",
    images: [{ url: `${BASE_URL}/og?t=${encodeURIComponent("Kalkulator Martingale Binary Option — Hitung Modal per Step")}&l=id`, width: 1200, height: 630, alt: "Kalkulator Martingale — STC AutoTrade" }],
  },
  twitter: { card: "summary_large_image" },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "Kalkulator Martingale Binary Option",
    description: "Kalkulator interaktif untuk menghitung kebutuhan modal strategi martingale per step.",
    inLanguage: "id-ID",
    isPartOf: { "@id": `${BASE_URL}/#website` },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Kalkulator Martingale", item: PAGE_URL },
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
        breadcrumbName="Kalkulator Martingale"
        eyebrow="Tool Gratis"
        title={<>Kalkulator Martingale<br />Binary Option</>}
        intro="Hitung nominal order tiap step, total modal yang dipertaruhkan dalam satu siklus, dan profit bersih per kemenangan — sebelum Anda mempertaruhkan satu rupiah pun."
      >
        <section>
          <MartingaleCalculator />
        </section>

        <InfoSection title="Cara membaca hasilnya">
          <InfoP>
            <strong>Total modal dipertaruhkan</strong> adalah jumlah seluruh nominal dari step 1
            sampai step terakhir — angka yang hangus seluruhnya jika Anda kalah beruntun satu siklus
            penuh. Kolom <strong>profit bersih</strong> menunjukkan hasil akhir jika kemenangan
            terjadi di step tersebut: nominal step × payout, dikurangi seluruh kerugian step
            sebelumnya. Setting yang sehat membuat semua barisnya positif.
          </InfoP>
          <InfoP>
            Sebagai titik awal konservatif, kami memakai default dari panduan{" "}
            <Link href="/artikel/strategi-martingale-stockity" className="text-[#047857] hover:underline">
              strategi martingale Stockity
            </Link>: nominal minimum Rp 14.000, multiplier 2,5×, maksimum 3 step — total risiko
            satu siklus masih terkendali dan setiap kemenangan menutup kerugian sebelumnya.
          </InfoP>
        </InfoSection>

        <InfoWarning>
          Martingale mengubah banyak kekalahan kecil menjadi sedikit kekalahan besar — bukan
          menghilangkan risiko. Deret kalah panjang pasti terjadi cepat atau lambat; pastikan total
          risiko satu siklus adalah nominal yang siap Anda relakan, dan selalu pasang stop loss
          harian. Baca juga{" "}
          <Link href="/artikel/manajemen-modal-trading-binary-option" className="underline">
            manajemen modal
          </Link>{" "}
          sebelum memakai strategi ini.
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

        <InfoSection title="Jalankan otomatis dengan batas aman">
          <InfoP>
            <Link href="/artikel/robot-trading-stockity" className="text-[#047857] hover:underline">
              STC AutoTrade
            </Link>{" "}
            mengeksekusi martingale terkelola sesuai MAX STEP dan MULTIPLIER yang Anda tentukan —
            plus stop loss dan stop profit harian otomatis. Coba dulu perhitungannya di sini, lalu
            uji setting-nya di{" "}
            <Link href="/artikel/akun-demo-stockity" className="text-[#047857] hover:underline">
              akun demo
            </Link>. Lihat juga{" "}
            <Link href="/kalkulator-compounding" className="text-[#047857] hover:underline">
              kalkulator compounding
            </Link>{" "}
            untuk proyeksi pertumbuhan saldo.
          </InfoP>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
