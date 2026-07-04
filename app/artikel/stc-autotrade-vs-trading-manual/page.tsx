/**
 * app/artikel/stc-autotrade-vs-trading-manual/page.tsx
 * Primary: bot trading vs manual · Secondary: robot trading vs trading
 * manual, kelebihan kekurangan robot trading, trading otomatis vs manual
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, CardGrid } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "stc-autotrade-vs-trading-manual",
  title: "Bot Trading vs Trading Manual: Perbandingan Jujur untuk Trader Stockity",
  description:
    "Kapan bot trading lebih baik dari manual — dan kapan sebaliknya? Perbandingan jujur kecepatan, konsistensi, fleksibilitas, kurva belajar, dan model hybrid yang dipakai banyak trader berpengalaman.",
  keywords: [
    "bot trading vs manual",
    "robot trading vs trading manual",
    "kelebihan kekurangan robot trading",
    "trading otomatis vs manual",
    "apakah robot trading lebih baik",
    "stc autotrade vs manual",
  ],
  breadcrumbName: "Bot vs Trading Manual",
  datePublished: "2026-07-04",
  faq: [
    { q: "Apakah bot trading pasti lebih profit daripada manual?", a: "Tidak ada yang 'pasti' di trading. Bot unggul dalam konsistensi eksekusi, disiplin batas risiko, dan jam operasional — tetapi hasil akhirnya tetap bergantung kualitas strategi dan kondisi pasar. Bot memperbaiki eksekusi; ia tidak mengubah probabilitas pasar." },
    { q: "Untuk pemula, mulai dari manual atau bot?", a: "Jalur yang sehat: pahami dasar-dasarnya dulu (candlestick, manajemen risiko) sambil menjalankan bot di akun demo. Bot menghilangkan kesalahan eksekusi pemula, sementara Anda tetap belajar membaca pasar — keduanya berjalan paralel tanpa mempertaruhkan dana." },
    { q: "Apa kelemahan terbesar bot trading?", a: "Bot mengeksekusi strategi teknikal secara kaku — ia tidak 'tahu' ada rilis berita besar atau perubahan rezim pasar kecuali dibatasi (mis. lewat jadwal sesi). Karena itu bot terbaik tetap butuh pemilik yang mengatur kapan dan dengan batas apa ia berjalan." },
    { q: "Apakah trading manual sudah tidak relevan?", a: "Tetap relevan — terutama untuk membaca konteks besar, momen berita, dan situasi tak berpola. Banyak trader berpengalaman memakai model hybrid: bot untuk eksekusi rutin harian, manual untuk situasi khusus yang mereka pahami betul." },
    { q: "Berapa biaya memakai STC AutoTrade?", a: "STC AutoTrade gratis untuk member terdaftar — tersedia sebagai APK Android dan versi web (stcautotradepro.id), dengan 6 mode strategi, martingale terkelola, serta stop loss dan stop profit otomatis." },
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
        readMins={7}
        breadcrumbName={seo.breadcrumbName}
        title={<>Bot vs Trading Manual:<br className="hidden sm:block" /> Perbandingan yang Jujur</>}
        lede={<>Artikel ini bukan untuk meyakinkan Anda bahwa bot selalu menang — <strong className="font-semibold text-[#1a1612]">karena memang tidak</strong>. Ini peta jujur tentang di mana otomasi unggul, di mana manusia unggul, dan model hybrid yang dipakai banyak trader berpengalaman.</>}
        stats={[
          { v: "24/7", l: "Bot: Jam Operasional" },
          { v: "0", l: "Bot: Emosi per Order" },
          { v: "Konteks", l: "Manusia: Keunggulan Utama" },
          { v: "Hybrid", l: "Model Trader Berpengalaman" },
        ]}
        related={[
          { href: "/artikel/robot-trading-stockity", title: "Robot Trading Stockity", desc: "Panduan lengkap auto trade Stockity 2026" },
          { href: "/artikel/psikologi-trading-binary-option", title: "Psikologi Trading", desc: "5 jebakan emosi yang dihilangkan otomasi" },
          { href: "/artikel/cara-setting-robot-stockity", title: "Cara Setting Robot", desc: "Konfigurasi mode, martingale & batas risiko" },
        ]}
        ctaEyebrow="Coba Sisi Otomatisnya"
        ctaTitle="Buktikan Sendiri di Akun Demo — STC AutoTrade Gratis untuk Member"
        ctaDesc="6 mode strategi, stop loss otomatis, berjalan di server 24 jam. Bandingkan dengan hasil manual Anda."
      >
        <section>
          <SectionLabel>01 · Peta</SectionLabel>
          <H2>Perbandingan Langsung: 8 Aspek yang Menentukan</H2>
          <DataTable
            head={["Aspek", "Trading Manual", "Bot (STC AutoTrade)"]}
            rows={[
              ["Kecepatan eksekusi", "Detik — tergantung refleks & fokus", "Milidetik, konsisten"],
              ["Disiplin aturan", "Rentan dilanggar saat emosi", "Batas yang diset selalu dipatuhi"],
              ["Jam operasional", "Terbatas energi & waktu luang", "24 jam di server, HP boleh mati"],
              ["Membaca konteks/berita", "Unggul — bisa menilai situasi unik", "Terbatas — perlu diarahkan (jadwal, batas)"],
              ["Kurva belajar", "Berbulan-bulan sampai konsisten", "Hari — atur risiko, pilih mode, jalan"],
              ["Beban psikologis", "Berat, diuji tiap order", "Ringan — diuji hanya pada keputusan besar"],
              ["Adaptasi rezim pasar", "Cepat jika trader jeli", "Mengikuti mode/parameter yang dipilih"],
              ["Biaya kesalahan pemula", "Mahal (salah klik, telat entry, FOMO)", "Kesalahan eksekusi praktis hilang"],
            ]}
          />
        </section>

        <section>
          <SectionLabel>02 · Keunggulan Bot</SectionLabel>
          <H2>Di Mana Otomasi Menang Telak</H2>
          <CardGrid
            items={[
              { icon: "🛡️", title: "Disiplin yang tidak bisa dinego", desc: <>Stop loss, stop profit, dan batas martingale dijalankan persis seperti diset. Jebakan <Link href="/artikel/psikologi-trading-binary-option" className="text-[#047857] underline">revenge trading & overtrading</Link> — penyebab utama akun hangus — praktis tereliminasi.</> },
              { icon: "⏰", title: "Kehadiran penuh waktu", desc: "Sinyal jam 3 pagi tetap dieksekusi. Trader manual melewatkan sebagian besar peluang bukan karena analisis buruk, tapi karena sedang tidur, kerja, atau lelah." },
              { icon: "🎯", title: "Eksekusi presisi", desc: "Entry pada momen sinyal tanpa jeda keraguan. Di binary option yang hasilnya ditentukan menit-menit pendek, jeda 5 detik keraguan bisa mengubah hasil." },
              { icon: "📊", title: "Statistik yang jujur", desc: "Riwayat bot bersih dari 'lupa mencatat trade yang kalah'. Evaluasi mingguan Anda berdiri di atas data lengkap, bukan ingatan selektif." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Keunggulan Manual</SectionLabel>
          <H2>Di Mana Manusia Tetap Tak Tergantikan</H2>
          <div className="space-y-4">
            <CardGrid
              items={[
                { icon: "📰", title: "Konteks & berita", desc: <>Manusia tahu FOMC malam ini dan memilih tidak trading. Bot tidak membaca <Link href="/artikel/kalender-ekonomi-binary-option" className="text-[#047857] underline">kalender ekonomi</Link> — pemiliknya yang harus mengarahkan jadwal sesinya.</> },
                { icon: "🔄", title: "Deteksi perubahan rezim", desc: "Saat karakter pasar berubah total (tren panjang jadi choppy), trader jeli menyesuaikan lebih cepat daripada parameter yang diset statis." },
                { icon: "🧩", title: "Situasi tak berpola", desc: "Kondisi anomali — gap besar, event luar biasa — dinilai lebih baik oleh penilaian manusia berpengalaman daripada aturan teknikal." },
                { icon: "🎓", title: "Pemahaman yang terbangun", desc: "Trading manual membangun intuisi pasar yang membuat Anda pengguna bot yang lebih cerdas: tahu mode apa yang cocok untuk kondisi apa." },
              ]}
            />
            <WarningBox>
              Hati-hati dengan dua ekstrem pemasaran: "bot pasti profit tanpa perlu paham apapun" sama
              menyesatkannya dengan "bot itu scam, manual satu-satunya jalan". Keduanya menjual cerita,
              bukan peta yang jujur.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Hybrid</SectionLabel>
          <H2>Model Hybrid: Cara Trader Berpengalaman Memakai Keduanya</H2>
          <div className="space-y-4">
            <P>
              Dalam praktiknya, pertanyaan "bot atau manual" jarang dijawab dengan memilih salah satu.
              Pola yang paling sering berhasil:{" "}
              <strong className="text-[#1a1612]">bot menangani eksekusi rutin dengan batas ketat, manusia
              menangani keputusan tingkat tinggi</strong> — kapan sesi berjalan, mode apa yang aktif,
              berapa batas risikonya, dan evaluasi mingguan atas hasilnya.
            </P>
            <P>
              Dengan <Link href="/artikel/cara-setting-robot-stockity" className="text-[#047857] underline">STC
              AutoTrade</Link>, pembagian itu terstruktur natural: Anda memilih salah satu dari 6 mode
              (AI Signal, Copy Trading, Indikator, Candlestick/Momentum, Fastrade, Schedule), menetapkan
              nominal + martingale + stop loss/profit — lalu bot bekerja di server sementara Anda menjalani
              hidup. Peran Anda bergeser dari eksekutor menjadi manajer risiko.
            </P>
            <InfoBox icon="⚖️" title="Uji berdampingan, biarkan data yang bicara">
              Cara paling adil menjawab "mana yang lebih baik untuk SAYA": jalankan keduanya di akun demo
              selama 2 minggu — manual di sesi Anda, bot di mode pilihan — lalu bandingkan statistiknya.
              Jawabannya personal, dan data demo Anda lebih jujur dari artikel manapun.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Bot vs Manual</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
