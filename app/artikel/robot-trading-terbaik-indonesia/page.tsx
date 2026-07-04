/**
 * app/artikel/robot-trading-terbaik-indonesia/page.tsx
 * Primary: robot trading terbaik · Secondary: robot trading binary option
 * terbaik, cara memilih robot trading, robot trading gratis indonesia
 *
 * CATATAN POSISI: artikel ini menarget intent GENERIK "cara memilih robot
 * trading yang baik" (kriteria + red flags) — berbeda dari pillar
 * robot-trading-stockity yang membahas panduan penggunaan spesifik Stockity.
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, CardGrid } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "robot-trading-terbaik-indonesia",
  title: "Cara Memilih Robot Trading Terbaik: 7 Kriteria & Red Flags 2026",
  description:
    "Panduan memilih robot trading binary option yang layak dipercaya: 7 kriteria wajib (mode demo, manajemen risiko, transparansi), daftar red flags penipuan, dan checklist evaluasi 14 hari.",
  keywords: [
    "robot trading terbaik",
    "robot trading binary option terbaik",
    "cara memilih robot trading",
    "robot trading gratis indonesia",
    "robot trading aman",
    "ciri robot trading penipu",
    "bot trading terbaik 2026",
  ],
  breadcrumbName: "Memilih Robot Trading",
  datePublished: "2026-07-04",
  faq: [
    { q: "Apa kriteria terpenting saat memilih robot trading?", a: "Dukungan mode demo penuh. Robot yang layak dipercaya selalu bisa diuji tanpa risiko lebih dulu — Anda bisa memverifikasi klaimnya dengan data sendiri. Robot yang hanya bisa 'langsung real' memaksa Anda percaya buta, dan itu red flag terbesar." },
    { q: "Apakah robot trading gratis bisa dipercaya?", a: "Gratis atau berbayar bukan penentu kualitas — model bisnisnya yang perlu dipahami. Bot gratis untuk member (seperti STC AutoTrade) wajar karena nilai tumbuh bersama komunitas penggunanya. Yang patut dicurigai justru bot berbayar mahal dengan janji profit pasti." },
    { q: "Bagaimana cara menguji robot sebelum pakai uang asli?", a: "Jalankan di akun demo minimal 7–14 hari mencakup kondisi pasar berbeda (trending & sideways). Catat win rate, drawdown terdalam, dan perilaku saat losing streak. Baru setelah statistik terbentuk, mulai real dengan nominal terkecil." },
    { q: "Apa ciri-ciri robot trading penipu?", a: "Janji profit tetap per hari ('pasti 10%/hari'), tidak ada mode demo, meminta transfer dana ke rekening pribadi (bukan deposit platform), testimoni tak terverifikasi, skema keanggotaan berjenjang ala money game, dan menghindar saat ditanya cara kerjanya." },
    { q: "Robot apa yang mendukung Stockity?", a: "STC AutoTrade adalah bot yang dibangun khusus untuk Stockity — 6 mode strategi, martingale terkelola, stop loss/profit otomatis, berjalan di server 24 jam, tersedia versi Android dan web, gratis untuk member terdaftar." },
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
        badge="Review"
        date="4 Juli 2026"
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        title={<>Memilih Robot Trading:<br className="hidden sm:block" /> 7 Kriteria &amp; Red Flags</>}
        lede={<>Pasar robot trading Indonesia penuh dua ekstrem: alat yang benar-benar membantu, dan kedok penipuan berkedok "profit pasti". Artikel ini memberi Anda <strong className="font-semibold text-[#1a1612]">kerangka menilai robot apapun</strong> — termasuk milik kami sendiri — dengan standar yang sama kerasnya.</>}
        stats={[
          { v: "7", l: "Kriteria Wajib" },
          { v: "6", l: "Red Flags Penipuan" },
          { v: "14 hari", l: "Uji Demo Minimal" },
          { v: "0", l: "Robot dengan Profit Pasti" },
        ]}
        related={[
          { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade di Stockity" },
          { href: "/artikel/stc-autotrade-vs-trading-manual", title: "Bot vs Trading Manual", desc: "Perbandingan jujur otomasi vs manual" },
          { href: "/artikel/auto-trade-stockity-gratis", title: "Auto Trade Gratis", desc: "Download robot Stockity tanpa biaya" },
        ]}
        ctaEyebrow="Ukur Kami dengan Standar yang Sama"
        ctaTitle="STC AutoTrade Lolos Ketujuh Kriteria — Buktikan di Mode Demo"
        ctaDesc="Demo penuh, stop loss otomatis, cara kerja terbuka, gratis untuk member. Uji 14 hari sebelum percaya."
      >
        <section>
          <SectionLabel>01 · Kriteria</SectionLabel>
          <H2>7 Kriteria Robot Trading yang Layak Dipercaya</H2>
          <DataTable
            head={["#", "Kriteria", "Kenapa Penting"]}
            rows={[
              ["1", "Mode demo penuh", "Anda bisa memverifikasi klaim dengan data sendiri sebelum sepeser pun dipertaruhkan"],
              ["2", "Manajemen risiko bawaan", "Stop loss/profit harian & batas martingale — tanpa ini, bot = mesin penguras saldo saat pasar buruk"],
              ["3", "Transparansi cara kerja", "Mode/strategi dijelaskan terbuka (indikator apa, logika apa) — bukan 'algoritma rahasia'"],
              ["4", "Klaim yang realistis", "Bicara probabilitas & manajemen risiko — bukan 'profit pasti X% per hari'"],
              ["5", "Riwayat trading lengkap", "Semua order tercatat, menang maupun kalah — bisa diaudit sendiri"],
              ["6", "Berjalan di server", "Tidak bergantung HP menyala; sesi tidak putus karena baterai atau sinyal"],
              ["7", "Kendali di tangan Anda", "Nominal, batas, jadwal, stop — semuanya bisa diatur & dihentikan kapan saja"],
            ]}
          />
          <div className="mt-4">
            <P>
              Gunakan tabel ini sebagai checklist saat mengevaluasi robot apapun — termasuk{" "}
              <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">STC AutoTrade</Link>.
              Robot yang gagal di kriteria 1 atau 4 tidak perlu dilanjutkan ke kriteria berikutnya.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Red Flags</SectionLabel>
          <H2>6 Tanda Bahaya: Robot atau Kedok Penipuan?</H2>
          <div className="space-y-4">
            <CardGrid
              items={[
                { icon: "🚩", title: "“Profit pasti” dengan angka tetap", desc: "'10% per hari dijamin' secara matematis mustahil dipertahankan. Ini kalimat pembuka skema ponzi, bukan deskripsi alat trading." },
                { icon: "🚩", title: "Setor dana ke rekening pribadi", desc: "Robot yang benar terhubung ke AKUN ANDA di platform resmi. Begitu diminta transfer 'dana kelolaan' ke rekening orang — itu bukan robot, itu penggalangan dana ilegal." },
                { icon: "🚩", title: "Tanpa demo, langsung bayar", desc: "'Slot terbatas, bayar sekarang' + tidak ada cara menguji = kombinasi klasik. Urgensi palsu adalah alat penjualan penipu paling tua." },
                { icon: "🚩", title: "Skema keanggotaan berjenjang", desc: "Penghasilan utama dari merekrut member baru, bukan dari trading — money game yang meminjam kosakata robot trading." },
                { icon: "🚩", title: "Testimoni tak terverifikasi", desc: "Screenshot profit mudah dipalsukan. Yang tidak bisa dipalsukan: statistik dari akun demo ANDA sendiri." },
                { icon: "🚩", title: "Cara kerja dirahasiakan total", desc: "'Pokoknya AI canggih' tanpa penjelasan mode/logika apapun. Kerahasiaan bukan kecanggihan — di produk yang jujur, cara kerja justru dijelaskan." },
              ]}
            />
            <WarningBox>
              Kerugian terbesar warga Indonesia dari "robot trading" beberapa tahun terakhir bukan berasal
              dari robot yang kalah trading — melainkan dari skema titip dana berkedok robot. Pegang satu
              aturan: dana Anda hanya boleh berada di akun trading atas nama Anda sendiri.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Evaluasi</SectionLabel>
          <H2>Protokol Uji 14 Hari Sebelum Percaya</H2>
          <div className="space-y-4">
            <P>
              Setelah sebuah robot lolos kriteria dan bebas red flags, tetap jangan langsung percaya —
              buktikan. Protokol sederhana yang bisa diterapkan pada robot apapun:
            </P>
            <DataTable
              head={["Fase", "Durasi", "Yang Dilakukan & Diukur"]}
              rows={[
                ["Demo bebas", "Hari 1–3", "Kenali antarmuka, jalankan mode default, pastikan semua fitur risiko berfungsi"],
                ["Demo terukur", "Hari 4–14", "Satu mode, parameter tetap: catat win rate, drawdown terdalam, perilaku saat losing streak"],
                ["Real minimal", "Minggu 3+", "Nominal terkecil, stop loss harian aktif; bandingkan hasil real vs demo"],
                ["Skala bertahap", "Bulan 2+", "Naikkan nominal hanya jika statistik konsisten — sesuai aturan manajemen modal"],
              ]}
            />
            <InfoBox icon="📐" title="Satu variabel dalam satu waktu">
              Selama pengujian, jangan ganti-ganti mode dan parameter tiap hari — statistik jadi tidak
              terbaca. Pilih satu konfigurasi, beri waktu, baru evaluasi. Kerangka lengkapnya ada di{" "}
              <Link href="/artikel/manajemen-modal-trading-binary-option" className="text-[#047857] underline">artikel manajemen modal</Link>.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Posisi Kami</SectionLabel>
          <H2>Di Mana STC AutoTrade dalam Kerangka Ini</H2>
          <div className="space-y-4">
            <P>
              Transparansi penuh: situs ini milik pengembang STC AutoTrade — maka nilai artikel ini justru
              pada kerangkanya, bukan kesimpulannya. Terapkan ketujuh kriteria dan protokol 14 hari di atas
              pada STC AutoTrade seketat Anda menerapkannya pada robot lain: mode demo tersedia penuh,{" "}
              <Link href="/artikel/cara-setting-robot-stockity" className="text-[#047857] underline">cara kerja
              6 modenya didokumentasikan terbuka</Link>, batas risiko di tangan Anda, dan tidak pernah ada
              janji profit pasti.
            </P>
            <P>
              Jika hasil uji demo Anda bagus — lanjutkan. Jika tidak cocok dengan gaya Anda — jangan pakai.
              Itu standar yang sama yang kami sarankan untuk semua robot, termasuk milik kami.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Memilih Robot Trading</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
