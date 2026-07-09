/**
 * app/tentang/page.tsx
 *
 * Halaman Tentang Kami — Server Component.
 * Sinyal E-E-A-T untuk Google (situs YMYL/finansial wajib punya identitas
 * yang jelas): siapa kami, apa yang kami buat, prinsip kerja, dan cara
 * menghubungi. Schema: AboutPage (mainEntity → #organization) + BreadcrumbList.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  InfoPageShell,
  InfoSection,
  InfoP,
  InfoList,
  InfoWarning,
} from "@/components/InfoPageShell";

const BASE_URL = "https://stcautotrade.id";
const PAGE_URL = `${BASE_URL}/tentang`;

export const metadata: Metadata = {
  title: "Tentang Kami — Tim di Balik STC AutoTrade",
  description:
    "Kenali STC AutoTrade (TechnoAutoTrade) — tim pengembang robot trading otomatis untuk Stockity.id sejak 2025. Misi, prinsip kerja, dan cara menghubungi kami.",
  keywords: [
    "tentang stc autotrade",
    "siapa stc autotrade",
    "pengembang robot stockity",
    "technoautotrade tentang",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tentang Kami — Tim di Balik STC AutoTrade",
    description:
      "Tim pengembang robot trading otomatis untuk Stockity.id sejak 2025 — misi, prinsip kerja, dan cara menghubungi kami.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Tentang STC AutoTrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami — Tim di Balik STC AutoTrade",
    description:
      "Tim pengembang robot trading otomatis untuk Stockity.id sejak 2025.",
    images: [`${BASE_URL}/og-image.webp`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tentang Kami", item: PAGE_URL },
  ],
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: "Tentang Kami — Tim di Balik STC AutoTrade",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  mainEntity: { "@id": `${BASE_URL}/#organization` },
};

export default function TentangPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <InfoPageShell
        breadcrumbName="Tentang Kami"
        eyebrow="Tentang Kami"
        title={<>Tim di Balik<br />STC AutoTrade</>}
        intro="STC AutoTrade (juga dikenal sebagai TechnoAutoTrade) adalah tim pengembang independen yang membangun alat bantu trading otomatis untuk platform Stockity.id sejak 2025."
      >
        <InfoSection title="Apa yang kami buat">
          <InfoP>
            Produk utama kami adalah <strong>STC AutoTrade</strong> — bot trading otomatis
            untuk Stockity.id yang tersedia dalam dua bentuk: aplikasi APK Android dan
            versi web di stcautotradepro.id yang bisa diakses dari browser apa pun tanpa
            instalasi. Bot ini menyediakan 6 mode strategi (AI Signal, Copy Trading,
            Indikator Teknikal, Candlestick, Fastrade, dan Schedule) dengan manajemen
            risiko bawaan berupa stop loss dan stop profit otomatis.
          </InfoP>
          <InfoP>
            Situs yang sedang Anda baca — stcautotrade.id — adalah pusat informasi dan
            edukasi kami: panduan penggunaan, <Link href="/artikel" className="text-[#047857] hover:underline">artikel strategi trading</Link>,{" "}
            <Link href="/kamus-trading" className="text-[#047857] hover:underline">kamus istilah</Link>, dan{" "}
            <Link href="/faq" className="text-[#047857] hover:underline">FAQ</Link>.
          </InfoP>
        </InfoSection>

        <InfoSection title="Prinsip kerja kami">
          <InfoList
            items={[
              <><strong>Jujur soal risiko.</strong> Trading binary option berisiko tinggi. Kami tidak pernah menjanjikan profit pasti — bot adalah alat bantu disiplin dan otomasi, bukan mesin uang. Setiap artikel dan halaman kami menyertakan peringatan risiko.</>,
              <><strong>Keamanan akun pengguna.</strong> Password akun Stockity.id tidak pernah dikirim ke atau disimpan di server kami. Hanya token autentikasi yang digunakan, terenkripsi di perangkat pengguna.</>,
              <><strong>Edukasi dulu, trading kemudian.</strong> Kami selalu menyarankan pengguna baru berlatih di mode demo minimal 7 hari sebelum memakai dana nyata, dan menulis panduan manajemen modal secara terbuka.</>,
              <><strong>Gratis untuk member.</strong> STC AutoTrade tidak memungut biaya lisensi dari member terdaftar.</>,
            ]}
          />
        </InfoSection>

        <InfoSection title="Bagaimana konten situs ini ditulis">
          <InfoP>
            Seluruh artikel di situs ini ditulis oleh tim STC AutoTrade berdasarkan
            pengalaman langsung mengembangkan dan menggunakan bot di platform
            Stockity.id — bukan konten tempelan. Panduan langkah demi langkah kami uji
            sendiri pada aplikasi versi terbaru sebelum dipublikasikan, dan kami perbarui
            saat ada perubahan pada platform.
          </InfoP>
        </InfoSection>

        <InfoWarning>
          STC AutoTrade bukan lembaga keuangan, bukan penasihat investasi, dan tidak
          berafiliasi resmi dengan Stockity.id. Seluruh konten situs ini bersifat
          edukatif — bukan nasihat keuangan. Keputusan trading sepenuhnya tanggung
          jawab masing-masing pengguna.
        </InfoWarning>

        <InfoSection title="Hubungi kami">
          <InfoP>
            Pertanyaan seputar pendaftaran, kendala teknis, atau masukan untuk konten
            situs bisa dikirim ke email{" "}
            <a href="mailto:daftar@stcautotrade.id" className="text-[#047857] hover:underline">
              daftar@stcautotrade.id
            </a>{" "}
            — atau lihat detail lengkapnya di{" "}
            <Link href="/kontak" className="text-[#047857] hover:underline">halaman kontak</Link>.
          </InfoP>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
