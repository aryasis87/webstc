/**
 * app/kontak/page.tsx
 *
 * Halaman Kontak — Server Component.
 * Sinyal E-E-A-T: cara nyata menghubungi pemilik situs (wajib untuk situs
 * YMYL/finansial). Schema: ContactPage (mainEntity → #organization) +
 * BreadcrumbList.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  InfoPageShell,
  InfoSection,
  InfoP,
} from "@/components/InfoPageShell";

const BASE_URL = "https://stcautotrade.id";
const PAGE_URL = `${BASE_URL}/kontak`;
const EMAIL = "supportstockity@gmail.com";

export const metadata: Metadata = {
  title: "Kontak — Hubungi Tim STC AutoTrade",
  description:
    "Hubungi tim STC AutoTrade untuk pertanyaan pendaftaran, kendala teknis aplikasi, atau masukan konten — email supportstockity@gmail.com, balasan 1–2 hari kerja.",
  keywords: [
    "kontak stc autotrade",
    "email stc autotrade",
    "hubungi stc autotrade",
    "bantuan robot stockity",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kontak — Hubungi Tim STC AutoTrade",
    description:
      "Pertanyaan pendaftaran, kendala teknis, atau masukan konten — hubungi kami via email.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Kontak STC AutoTrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak — Hubungi Tim STC AutoTrade",
    description: "Hubungi tim STC AutoTrade via email — balasan 1–2 hari kerja.",
    images: [`${BASE_URL}/og-image.webp`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Kontak", item: PAGE_URL },
  ],
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: "Kontak — Hubungi Tim STC AutoTrade",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  mainEntity: { "@id": `${BASE_URL}/#organization` },
};

/* Topik + saluran yang tepat, dirender sebagai kartu */
const TOPICS = [
  {
    title: "Pendaftaran & akses member",
    desc: "Cara mendapatkan akses STC AutoTrade, kendala whitelist, atau pertanyaan seputar akun baru Stockity.id.",
  },
  {
    title: "Kendala teknis aplikasi",
    desc: "Masalah instalasi APK, login, atau bot yang tidak berjalan sesuai pengaturan. Sertakan tangkapan layar bila memungkinkan.",
  },
  {
    title: "Masukan konten & media",
    desc: "Koreksi artikel, usulan topik panduan baru, atau keperluan kerja sama dan pers.",
  },
] as const;

export default function KontakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <InfoPageShell
        breadcrumbName="Kontak"
        eyebrow="Kontak"
        title={<>Hubungi Tim<br />STC AutoTrade</>}
        intro="Satu saluran resmi, dibaca langsung oleh tim: email. Kami membalas dalam 1–2 hari kerja."
      >
        {/* Kartu email utama */}
        <section className="max-w-2xl">
          <div className="bg-white border border-[rgba(26,22,18,0.09)] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a1612]/65 mb-1.5">
                Email resmi
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="font-[family-name:var(--font-dm-serif)] text-xl sm:text-2xl text-[#1a1612] hover:text-[#047857] transition-colors no-underline"
              >
                {EMAIL}
              </a>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1a1612] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all no-underline flex-shrink-0"
            >
              Kirim Email
            </a>
          </div>
          <p className="text-[12px] text-[#1a1612]/65 mt-3">
            Waspadai penipuan: kami tidak pernah menghubungi lebih dulu untuk meminta
            password, kode OTP, atau transfer dana. Satu-satunya alamat email resmi kami adalah
            supportstockity@gmail.com — alamat lain yang mengatasnamakan kami adalah palsu.
          </p>
        </section>

        <InfoSection title="Topik yang bisa kami bantu">
          <div className="space-y-3">
            {TOPICS.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-[rgba(26,22,18,0.07)] rounded-xl px-5 py-4"
              >
                <h3 className="text-[13px] font-semibold text-[#1a1612] mb-1">{t.title}</h3>
                <p className="text-[12px] text-[#6b6058] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </InfoSection>

        <InfoSection title="Sebelum mengirim email">
          <InfoP>
            Banyak pertanyaan umum sudah terjawab di{" "}
            <Link href="/faq" className="text-[#047857] hover:underline">halaman FAQ</Link>{" "}
            (instalasi, keamanan akun, modal minimum, martingale) dan panduan langkah demi
            langkah tersedia di{" "}
            <Link href="/artikel" className="text-[#047857] hover:underline">kumpulan artikel</Link>.
            Mengeceknya lebih dulu biasanya lebih cepat daripada menunggu balasan email.
          </InfoP>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
