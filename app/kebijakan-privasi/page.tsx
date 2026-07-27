/**
 * app/kebijakan-privasi/page.tsx
 *
 * Halaman Kebijakan Privasi — Server Component.
 * Sinyal trust/E-E-A-T untuk situs YMYL. Isi disusun konsisten dengan
 * klaim keamanan yang sudah dipublikasikan di FAQ (password tidak pernah
 * disimpan; hanya token autentikasi terenkripsi di perangkat).
 * Schema: WebPage + BreadcrumbList.
 */

import type { Metadata } from "next";
import Link from "next/link";
import {
  InfoPageShell,
  InfoSection,
  InfoP,
  InfoList,
} from "@/components/InfoPageShell";

const BASE_URL = "https://stcautotrade.id";
const PAGE_URL = `${BASE_URL}/kebijakan-privasi`;
const UPDATED_ISO = "2026-07-09";
const UPDATED_LABEL = "9 Juli 2026";

export const metadata: Metadata = {
  title: "Kebijakan Privasi STC AutoTrade",
  description:
    "Kebijakan privasi STC AutoTrade — data apa yang kami kumpulkan dan gunakan, bagaimana keamanannya dijaga, serta hak Anda atas data tersebut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kebijakan Privasi STC AutoTrade",
    description:
      "Data apa yang kami kumpulkan dan gunakan, bagaimana keamanannya dijaga, serta hak Anda atas data tersebut.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Kebijakan Privasi STC AutoTrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kebijakan Privasi STC AutoTrade",
    description:
      "Data apa yang kami kumpulkan, bagaimana keamanannya dijaga, dan hak Anda atas data tersebut.",
    images: [`${BASE_URL}/og-image.webp`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Kebijakan Privasi", item: PAGE_URL },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: "Kebijakan Privasi STC AutoTrade",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  dateModified: UPDATED_ISO,
};

export default function KebijakanPrivasiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <InfoPageShell
        breadcrumbName="Kebijakan Privasi"
        eyebrow="Legal"
        title="Kebijakan Privasi"
        intro="Kebijakan ini menjelaskan data apa yang dikumpulkan saat Anda menggunakan situs stcautotrade.id dan layanan STC AutoTrade, bagaimana data itu digunakan, dan hak Anda atasnya."
        updated={UPDATED_LABEL}
      >
        <InfoSection title="Ruang lingkup">
          <InfoP>
            Kebijakan ini berlaku untuk situs informasi stcautotrade.id serta layanan
            STC AutoTrade (aplikasi APK Android dan aplikasi di stcautotradepro.id).
            Platform trading Stockity.id dimiliki dan dioperasikan pihak lain dan
            memiliki kebijakan privasinya sendiri.
          </InfoP>
        </InfoSection>

        <InfoSection title="Data yang kami kumpulkan">
          <InfoList
            items={[
              <><strong>Data pendaftaran member</strong> — informasi yang Anda berikan saat mendaftar, seperti alamat email dan identitas akun Stockity.id yang dihubungkan ke bot.</>,
              <><strong>Data operasional bot</strong> — pengaturan strategi (mode, nominal, stop loss/profit) dan riwayat order yang diperlukan agar bot dapat berjalan di server kami dan Anda dapat memantau hasilnya.</>,
              <><strong>Data teknis dasar</strong> — log server standar (alamat IP, waktu akses) yang dihasilkan otomatis oleh infrastruktur hosting untuk keperluan keamanan dan pemecahan masalah.</>,
            ]}
          />
          <InfoP>
            <strong>Yang tidak kami kumpulkan:</strong> password akun Stockity.id Anda
            tidak pernah dikirim ke atau disimpan di server kami. Autentikasi menggunakan
            token yang tersimpan terenkripsi di perangkat Anda.
          </InfoP>
        </InfoSection>

        <InfoSection title="Bagaimana data digunakan">
          <InfoList
            items={[
              "Menjalankan layanan inti: mengeksekusi strategi trading yang Anda atur dan menampilkan riwayatnya.",
              "Mengelola akses member (sistem whitelist) dan memberikan dukungan saat Anda menghubungi kami.",
              "Menjaga keamanan layanan dan mencegah penyalahgunaan.",
            ]}
          />
          <InfoP>
            Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak mana pun.
          </InfoP>
        </InfoSection>

        <InfoSection title="Cookie & pelacakan di situs ini">
          <InfoP>
            Situs stcautotrade.id tidak memasang layanan analitik pihak ketiga dan tidak
            menggunakan cookie pelacakan iklan. Font dan seluruh aset disajikan dari
            domain kami sendiri, sehingga kunjungan Anda ke situs ini tidak dibagikan ke
            jaringan periklanan mana pun.
          </InfoP>
        </InfoSection>

        <InfoSection title="Berbagi data dengan pihak ketiga">
          <InfoP>
            Data operasional bot dipertukarkan dengan platform Stockity.id sebatas yang
            diperlukan untuk mengeksekusi order atas instruksi Anda. Selain itu, data
            hanya dibuka jika diwajibkan oleh hukum yang berlaku.
          </InfoP>
        </InfoSection>

        <InfoSection title="Penyimpanan & keamanan">
          <InfoP>
            Data disimpan di infrastruktur cloud dengan akses terbatas dan komunikasi
            terenkripsi (HTTPS). Kami menyimpan data selama akun member aktif; setelah
            itu data dapat dihapus atau dianonimkan.
          </InfoP>
        </InfoSection>

        <InfoSection title="Hak Anda">
          <InfoP>
            Anda berhak meminta salinan, koreksi, atau penghapusan data pribadi Anda.
            Kirim permintaan ke{" "}
            <a href="mailto:supportstockity@gmail.com" className="text-[#047857] hover:underline">
              supportstockity@gmail.com
            </a>{" "}
            dan kami akan menindaklanjutinya dalam waktu wajar. Detail saluran kontak ada
            di <Link href="/kontak" className="text-[#047857] hover:underline">halaman kontak</Link>.
          </InfoP>
        </InfoSection>

        <InfoSection title="Perubahan kebijakan">
          <InfoP>
            Kebijakan ini dapat diperbarui sewaktu-waktu. Versi terbaru selalu tersedia
            di halaman ini beserta tanggal pembaruannya. Perubahan signifikan akan kami
            umumkan melalui situs.
          </InfoP>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
