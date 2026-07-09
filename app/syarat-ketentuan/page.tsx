/**
 * app/syarat-ketentuan/page.tsx
 *
 * Halaman Syarat & Ketentuan — Server Component.
 * Sinyal trust/E-E-A-T untuk situs YMYL; bagian terpenting adalah
 * peringatan risiko trading yang eksplisit (konsisten dengan disclaimer
 * footer & artikel). Schema: WebPage + BreadcrumbList.
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
const PAGE_URL = `${BASE_URL}/syarat-ketentuan`;
const UPDATED_ISO = "2026-07-09";
const UPDATED_LABEL = "9 Juli 2026";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan STC AutoTrade",
  description:
    "Syarat dan ketentuan penggunaan STC AutoTrade — ketentuan layanan, peringatan risiko trading, batasan tanggung jawab, dan kewajiban pengguna.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Syarat & Ketentuan STC AutoTrade",
    description:
      "Ketentuan layanan, peringatan risiko trading, batasan tanggung jawab, dan kewajiban pengguna STC AutoTrade.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Syarat & Ketentuan STC AutoTrade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syarat & Ketentuan STC AutoTrade",
    description:
      "Ketentuan layanan, peringatan risiko trading, dan kewajiban pengguna STC AutoTrade.",
    images: [`${BASE_URL}/og-image.webp`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "STC AutoTrade", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Syarat & Ketentuan", item: PAGE_URL },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: "Syarat & Ketentuan STC AutoTrade",
  inLanguage: "id-ID",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  dateModified: UPDATED_ISO,
};

export default function SyaratKetentuanPage() {
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
        breadcrumbName="Syarat & Ketentuan"
        eyebrow="Legal"
        title="Syarat & Ketentuan"
        intro="Dengan menggunakan situs stcautotrade.id atau layanan STC AutoTrade (APK Android maupun versi web), Anda menyetujui ketentuan di bawah ini. Bacalah terutama bagian peringatan risiko."
        updated={UPDATED_LABEL}
      >
        <InfoWarning>
          <strong>Peringatan risiko.</strong> Trading binary option adalah aktivitas
          berisiko sangat tinggi — Anda dapat kehilangan sebagian atau seluruh modal.
          STC AutoTrade adalah alat bantu otomasi, bukan jaminan profit. Hasil di masa
          lalu tidak menjamin hasil di masa depan. Jangan pernah menggunakan dana yang
          tidak siap Anda relakan.
        </InfoWarning>

        <InfoSection title="1. Tentang layanan">
          <InfoP>
            STC AutoTrade (TechnoAutoTrade) adalah perangkat lunak bot trading otomatis
            untuk platform Stockity.id, tersedia sebagai aplikasi APK Android dan versi
            web di stcautotradepro.id. Layanan ini gratis untuk member terdaftar melalui
            sistem whitelist. Kami bukan lembaga keuangan, bukan broker, bukan penasihat
            investasi, dan tidak berafiliasi resmi dengan Stockity.id.
          </InfoP>
        </InfoSection>

        <InfoSection title="2. Kelayakan pengguna">
          <InfoList
            items={[
              "Berusia minimal 18 tahun atau usia dewasa menurut hukum di wilayah Anda.",
              "Bertanggung jawab memastikan bahwa penggunaan layanan trading semacam ini legal di yurisdiksi tempat Anda berada.",
              "Memiliki akun Stockity.id yang sah atas nama sendiri.",
            ]}
          />
        </InfoSection>

        <InfoSection title="3. Akun & keamanan">
          <InfoP>
            Anda bertanggung jawab menjaga kerahasiaan kredensial akun Anda sendiri.
            Kami tidak pernah meminta password atau kode OTP melalui saluran mana pun —
            permintaan semacam itu dipastikan penipuan. Segala aktivitas yang terjadi
            melalui akun Anda menjadi tanggung jawab Anda.
          </InfoP>
        </InfoSection>

        <InfoSection title="4. Bukan nasihat keuangan">
          <InfoP>
            Seluruh konten situs ini — artikel, panduan, kamus istilah, dan FAQ —
            bersifat edukatif dan informatif. Tidak ada bagian dari layanan kami yang
            merupakan nasihat keuangan, rekomendasi investasi, atau ajakan untuk
            bertransaksi. Setiap keputusan trading, termasuk pengaturan strategi bot
            (nominal, martingale, stop loss/profit), sepenuhnya merupakan keputusan dan
            tanggung jawab Anda.
          </InfoP>
        </InfoSection>

        <InfoSection title="5. Batasan tanggung jawab">
          <InfoP>
            Layanan disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan apa pun.
            Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian trading,
            kehilangan keuntungan, atau kerugian tidak langsung lainnya yang timbul dari
            penggunaan atau ketidaktersediaan layanan — termasuk yang disebabkan gangguan
            koneksi, perubahan pada platform Stockity.id, atau keadaan di luar kendali
            kami.
          </InfoP>
        </InfoSection>

        <InfoSection title="6. Penggunaan yang dilarang">
          <InfoList
            items={[
              "Menggunakan layanan untuk aktivitas yang melanggar hukum atau melanggar ketentuan platform Stockity.id.",
              "Membongkar, memodifikasi, atau mendistribusikan ulang aplikasi tanpa izin tertulis dari kami.",
              "Menyalahgunakan nama STC AutoTrade untuk menipu pihak lain (misalnya menjual akses yang aslinya gratis).",
            ]}
          />
        </InfoSection>

        <InfoSection title="7. Hak kekayaan intelektual">
          <InfoP>
            Nama STC AutoTrade, logo, aplikasi, dan seluruh konten situs ini adalah milik
            kami. Anda boleh mengutip konten secukupnya dengan mencantumkan tautan sumber
            ke stcautotrade.id.
          </InfoP>
        </InfoSection>

        <InfoSection title="8. Perubahan layanan & ketentuan">
          <InfoP>
            Kami dapat mengubah, menangguhkan, atau menghentikan sebagian layanan serta
            memperbarui ketentuan ini sewaktu-waktu. Versi terbaru selalu dipublikasikan
            di halaman ini beserta tanggal pembaruan. Dengan tetap menggunakan layanan
            setelah perubahan berlaku, Anda dianggap menyetujuinya.
          </InfoP>
        </InfoSection>

        <InfoSection title="9. Hukum yang berlaku & kontak">
          <InfoP>
            Ketentuan ini diatur oleh hukum Republik Indonesia. Pertanyaan tentang
            ketentuan ini dapat diajukan melalui{" "}
            <Link href="/kontak" className="text-[#047857] hover:underline">halaman kontak</Link>{" "}
            atau email{" "}
            <a href="mailto:daftar@stcautotrade.id" className="text-[#047857] hover:underline">
              daftar@stcautotrade.id
            </a>
            . Lihat juga{" "}
            <Link href="/kebijakan-privasi" className="text-[#047857] hover:underline">
              Kebijakan Privasi
            </Link>{" "}
            kami.
          </InfoP>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
