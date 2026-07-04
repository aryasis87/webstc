/**
 * app/artikel/kalender-ekonomi-binary-option/page.tsx
 * Primary: kalender ekonomi trading · Secondary: news trading binary
 * option, berita berdampak tinggi, jam berita forex, NFP
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "kalender-ekonomi-binary-option",
  title: "Kalender Ekonomi untuk Binary Option: Kapan Trading, Kapan Menghindar",
  description:
    "Cara membaca kalender ekonomi untuk binary option: berita berdampak tinggi (NFP, suku bunga, CPI), jam rilisnya dalam WIB, efeknya ke pergerakan harga, dan aturan praktis jeda sebelum-sesudah rilis.",
  keywords: [
    "kalender ekonomi trading",
    "news trading binary option",
    "berita berdampak tinggi forex",
    "jam rilis berita forex wib",
    "nfp trading",
    "trading saat rilis berita",
    "kalender ekonomi stockity",
  ],
  breadcrumbName: "Kalender Ekonomi",
  datePublished: "2026-07-04",
  faq: [
    { q: "Apa itu kalender ekonomi dan kenapa penting untuk binary option?", a: "Kalender ekonomi adalah jadwal rilis data ekonomi (suku bunga, inflasi, tenaga kerja) beserta perkiraan dampaknya. Penting karena rilis berdampak tinggi bisa menggerakkan harga sangat cepat dan liar dalam hitungan detik — kondisi yang mengubah probabilitas semua strategi teknikal." },
    { q: "Berita apa saja yang berdampak paling besar?", a: "Keputusan suku bunga bank sentral (terutama The Fed/FOMC), NFP (Non-Farm Payrolls AS, Jumat pertama tiap bulan), data inflasi CPI, dan GDP. Untuk pasangan USD, rilis-rilis AS ini yang paling menggerakkan pasar." },
    { q: "Apakah sebaiknya trading saat rilis berita besar?", a: "Untuk kebanyakan trader binary option — tidak. Spike liar dua arah membuat analisis teknikal kehilangan pijakan dan hasil order mendekati lempar koin. Aturan praktis yang umum: hindari entry 15–30 menit sebelum sampai 15–30 menit sesudah rilis berdampak tinggi." },
    { q: "Jam berapa (WIB) berita besar biasanya rilis?", a: "Data AS umumnya rilis malam WIB: sekitar 19.30–20.30 WIB (musim panas/dingin berbeda 1 jam), FOMC dini hari sekitar 01.00–02.00 WIB. Data Eropa sore WIB, data Asia/Jepang pagi WIB. Selalu cek kalender karena jam berubah mengikuti daylight saving." },
    { q: "Apakah robot trading perlu dimatikan saat berita besar?", a: "Praktik konservatif yang masuk akal: hindari sesi bot pada jam rilis berdampak sangat tinggi (FOMC, NFP), atau pastikan stop loss harian aktif sehingga skenario terburuk tetap terbatas. Volatilitas ekstrem memengaruhi strategi teknikal apapun — manual maupun otomatis." },
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
        badge="Strategi"
        date="4 Juli 2026"
        readMins={7}
        breadcrumbName={seo.breadcrumbName}
        title={<>Kalender Ekonomi:<br className="hidden sm:block" /> Kapan Trading, Kapan Menghindar</>}
        lede={<>Anda sudah tahu <Link href="/artikel/jam-trading-terbaik-stockity" className="text-[#047857] underline">jam terbaik untuk trading</Link> — artikel ini kebalikannya yang sama pentingnya: <strong className="font-semibold text-[#1a1612]">jam-jam ketika pasar menjadi liar dan strategi teknikal kehilangan pijakan</strong>, dan bagaimana menghindarinya dengan kalender ekonomi.</>}
        stats={[
          { v: "±30 mnt", l: "Jeda Aman Pra/Pasca Rilis" },
          { v: "19.30", l: "WIB — Jam Rawan Data AS" },
          { v: "3", l: "Tingkat Dampak Berita" },
          { v: "Gratis", l: "Kalender Tersedia Bebas" },
        ]}
        related={[
          { href: "/artikel/jam-trading-terbaik-stockity", title: "Jam Trading Terbaik", desc: "Waktu paling kondusif untuk strategi teknikal" },
          { href: "/artikel/cara-menghindari-loss-stockity", title: "Cara Menghindari Loss", desc: "Stop loss & manajemen risiko harian" },
          { href: "/artikel/aset-terbaik-trading-stockity", title: "Aset Terbaik Trading", desc: "Karakter tiap aset & kepekaannya pada berita" },
        ]}
        ctaEyebrow="Trading di Jam yang Tepat"
        ctaTitle="Jadwalkan Sesi Bot STC AutoTrade di Jam Pasar Terkondusif"
        ctaDesc="Mode Schedule mengeksekusi sinyal pada jam yang Anda tentukan — lengkap dengan stop loss otomatis. Gratis untuk member."
      >
        <section>
          <SectionLabel>01 · Konsep</SectionLabel>
          <H2>Apa yang Terjadi pada Harga Saat Berita Besar Rilis</H2>
          <div className="space-y-4">
            <P>
              Dalam detik-detik setelah rilis data penting, ribuan algoritma institusi bereaksi serentak.
              Hasilnya: <strong className="text-[#1a1612]">spike</strong> — lonjakan harga tajam, sering dua
              arah bergantian (whipsaw), dengan spread melebar. Pola candlestick, level support-resistance,
              dan indikator yang sebelumnya rapi mendadak tidak relevan selama beberapa menit.
            </P>
            <P>
              Untuk binary option yang hasilnya ditentukan arah dalam menit, kondisi ini menurunkan
              probabilitas strategi teknikal menjadi mendekati acak. Trader berpengalaman tidak mencoba
              "menebak berita" — mereka cukup tahu kapan berita datang, lalu minggir.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Tingkat Dampak</SectionLabel>
          <H2>Berita Mana yang Perlu Diwaspadai (dan Jam WIB-nya)</H2>
          <div className="space-y-4">
            <DataTable
              head={["Dampak", "Contoh Rilis", "Perkiraan Jam WIB*"]}
              rows={[
                ["Sangat tinggi", "Suku bunga The Fed (FOMC), NFP, CPI AS", "FOMC ±01.00–02.00 · NFP/CPI ±19.30–20.30"],
                ["Tinggi", "Suku bunga ECB/BoE, GDP AS, pidato ketua bank sentral", "Sore–malam WIB (bervariasi)"],
                ["Menengah", "Data manufaktur (PMI), retail sales, klaim pengangguran", "Sore–malam WIB"],
                ["Rendah", "Data minor, indikator sekunder", "Umumnya bisa diabaikan"],
              ]}
            />
            <p className="text-[12px] text-[#6b6058]">*Jam bergeser ±1 jam mengikuti daylight saving AS/Eropa — selalu rujuk kalender pada minggu berjalan.</p>
            <P>
              Kalender ekonomi gratis tersedia luas (Forex Factory, Investing.com, dan sejenisnya) dengan
              filter dampak dan zona waktu. Biasakan mengeceknya sekali di awal hari — 60 detik yang
              menyelamatkan sesi Anda dari kejutan terjadwal.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Aturan Praktis</SectionLabel>
          <H2>Rutinitas 60 Detik Sebelum Mulai Sesi</H2>
          <Steps
            items={[
              { title: "Buka kalender, filter dampak tinggi", desc: "Set zona waktu ke WIB (GMT+7) dan tampilkan hanya berita dampak tinggi/sangat tinggi untuk mata uang aset yang Anda tradingkan." },
              { title: "Catat jam rilis hari ini", desc: "Tulis jam-jam rawan di tempat yang terlihat. Perhatikan khusus Jumat pertama bulan (NFP) dan pekan FOMC." },
              { title: "Terapkan zona larangan ±15–30 menit", desc: "Tidak ada entry baru dalam jendela sebelum-sesudah rilis. Spike bisa datang beberapa menit lebih awal dari jadwal — beri margin." },
              { title: "Sesuaikan jadwal sesi bot", desc: <>Pengguna mode Schedule di <Link href="/artikel/cara-setting-robot-stockity" className="text-[#047857] underline">STC AutoTrade</Link>: susun jadwal sinyal di luar jendela rawan, atau pastikan stop loss harian aktif sebagai jaring pengaman.</> },
              { title: "Setelah rilis: tunggu pasar 'memilih arah'", desc: "Beberapa menit pasca rilis, whipsaw mereda dan tren pasca-berita sering lebih jelas. Itu waktu yang jauh lebih ramah untuk kembali masuk." },
            ]}
          />
          <div className="mt-4">
            <WarningBox>
              Godaan terbesar: "payout tetap sama, kenapa tidak coba tebak arah berita?" Karena Anda tidak
              sedang menebak arah data — Anda menebak reaksi pasar terhadap data versus ekspektasinya, yang
              sering berlawanan dengan logika awam. Data bagus bisa membuat harga turun. Ini permainan yang
              berbeda, dan bukan permainan yang ramah untuk binary option ritel.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Konteks</SectionLabel>
          <H2>Menggabungkan Kalender dengan Jam Trading Terbaik</H2>
          <div className="space-y-4">
            <P>
              Kalender ekonomi adalah lapisan penyaring di atas{" "}
              <Link href="/artikel/jam-trading-terbaik-stockity" className="text-[#047857] underline">jam trading
              terbaik</Link>: sesi Eropa dan overlap Eropa–AS memang paling likuid, tetapi justru di sanalah
              sebagian besar rilis besar terjadi. Rumus praktisnya:{" "}
              <strong className="text-[#1a1612]">jam bagus + tidak ada berita besar = kondisi ideal</strong>;
              jam bagus + FOMC = tetap minggir.
            </P>
            <InfoBox icon="📅" title="Untuk pengguna bot">
              Bot mengeksekusi strategi teknikal — dan seperti semua strategi teknikal, performanya paling
              stabil di pasar yang bergerak normal. Menjauhkan sesi bot dari jendela berita ekstrem adalah
              salah satu penyetelan termurah dengan dampak terbesar.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Kalender Ekonomi</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
