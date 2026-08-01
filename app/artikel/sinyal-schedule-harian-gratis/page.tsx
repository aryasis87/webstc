/**
 * app/artikel/sinyal-schedule-harian-gratis/page.tsx
 * Primary: sinyal trading harian gratis · Secondary: jadwal sinyal stockity,
 * signal schedule gratis, sinyal stockity hari ini, sinyal mode signal
 *
 * Sudut berbeda dari /artikel/sinyal-trading-stockity-gratis (yang membahas
 * mode CTC/AI di aplikasi). Ini soal jadwal "HH:MM B/S" harian gratis yang
 * dibagikan lewat bot Telegram, untuk ditempel ke mode Signal.
 */

import Link from "next/link";
import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import {
  ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox,
  Steps, DataTable, FaqList, CardGrid,
} from "../_components/ArtikelShell";

const BOT_URL = "https://t.me/STCAUTOTRADEPRO_BOT";

/** Blok sinyal contoh — monospace, bisa scroll horizontal di layar sempit. */
const CONTOH = `06:00 S
06:03 B
06:06 B
06:09 S
06:12 B
06:15 S
06:18 S
06:21 B
06:24 B
06:27 B
06:30 S
06:33 S`;

const seo: ArtikelSeoDef = {
  slug: "sinyal-schedule-harian-gratis",
  title: "Sinyal Trading Harian Gratis untuk Stockity: Jadwal Signal Diperbarui Tiap Hari",
  description:
    "Jadwal sinyal 'HH:MM B/S' gratis yang diperbarui setiap hari, siap ditempel ke mode Signal STC AutoTrade. Dua interval (3 & 5 menit), diambil langsung dari bot Telegram. Plus penjelasan jujur soal cara pakai dan risikonya.",
  keywords: [
    "sinyal trading harian gratis",
    "jadwal sinyal stockity",
    "signal schedule gratis",
    "sinyal stockity hari ini",
    "sinyal mode signal stockity",
    "sinyal binary option gratis",
  ],
  breadcrumbName: "Sinyal Harian Gratis",
  datePublished: "2026-08-01",
  faq: [
    {
      q: "Apa itu sinyal schedule harian?",
      a: "Sebuah jadwal berisi baris 'jam arah', misalnya '12:14 S' dan '12:17 B'. B berarti naik (call), S berarti turun (put). Jadwal ini ditempel ke mode Signal di aplikasi STC AutoTrade, lalu bot mengeksekusi order tepat pada jam yang tertulis.",
    },
    {
      q: "Berapa biaya sinyalnya?",
      a: "Gratis. Sinyal harian dibagikan lewat bot Telegram tanpa biaya apa pun. Yang Anda perlukan hanya aplikasi STC AutoTrade dan akun Stockity Anda sendiri.",
    },
    {
      q: "Apa beda interval 3 menit dan 5 menit?",
      a: "Hanya jarak antar order. Interval 3 menit menghasilkan lebih banyak order dalam sehari (order tiap 3 menit), sedangkan 5 menit lebih renggang. Pilih sesuai durasi order yang Anda pakai dan seberapa sering Anda ingin bot masuk.",
    },
    {
      q: "Apakah sinyal ini menjamin profit?",
      a: "Tidak. Arah B/S dibuat acak dan berubah tiap hari — ia tidak membaca pasar. Sinyal ini menghemat Anda dari mengetik jadwal manual, bukan alat prediksi. Apa pun sumber sinyalnya, gunakan Stop Loss, mulai dari akun demo, dan hanya pakai dana yang siap hilang.",
    },
    {
      q: "Kenapa sinyalnya sama untuk semua orang tapi ganti tiap hari?",
      a: "Jadwal dibuat dari tanggal hari itu, jadi semua orang yang mengambil di hari yang sama mendapat jadwal identik, dan jadwalnya otomatis berbeda keesokan harinya. Ini membuat sinyal konsisten untuk dibahas bersama, sekaligus selalu baru.",
    },
    {
      q: "Bagaimana cara memakainya di aplikasi?",
      a: "Salin teks jadwal dari bot, buka aplikasi STC AutoTrade, pilih mode Signal, tekan Masukkan Sinyal, lalu tempel. Aplikasi otomatis mengenali format jam dan arahnya. Setelah itu atur nominal, Stop Loss, lalu Start.",
    },
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
        date="1 Agustus 2026"
        readMins={6}
        breadcrumbName={seo.breadcrumbName}
        title={<>Sinyal Trading Harian Gratis<br className="hidden sm:block" /> untuk Stockity</>}
        lede={
          <>
            Jadwal sinyal <strong className="font-semibold text-[#1a1612]">&ldquo;jam arah&rdquo;</strong>{" "}
            yang diperbarui setiap hari dan siap ditempel ke mode Signal STC AutoTrade —
            gratis, dua pilihan interval, diambil langsung dari bot Telegram.
          </>
        }
        stats={[
          { v: "Gratis", l: "Tanpa Biaya" },
          { v: "Tiap Hari", l: "Diperbarui" },
          { v: "3 & 5 mnt", l: "Dua Interval" },
          { v: "Tempel", l: "Langsung Pakai" },
        ]}
        related={[
          { href: "/artikel/sinyal-trading-stockity-gratis", title: "Mode Sinyal Bawaan", desc: "CTC, AI Signal & bot di aplikasi." },
          { href: "/artikel/cara-setting-robot-stockity", title: "Setting Robot", desc: "Konfigurasi bot sebelum jalan." },
          { href: "/download", title: "Unduh Aplikasi", desc: "Pasang STC AutoTrade dulu." },
        ]}
        ctaEyebrow="Ambil Sekarang"
        ctaTitle="Sinyal hari ini ada di bot Telegram"
        ctaDesc="Buka bot, pilih interval, salin jadwalnya. Diperbarui otomatis setiap hari."
        ctaHref={BOT_URL}
        ctaLabel="Buka Bot Telegram"
      >
        <section>
          <SectionLabel>01 · Pengertian</SectionLabel>
          <H2>Apa Itu Sinyal Schedule</H2>
          <div className="space-y-4">
            <P>
              Sinyal schedule adalah daftar sederhana: satu baris berisi <strong>jam</strong>{" "}
              dan <strong>arah</strong>. Contohnya seperti ini:
            </P>
            <div className="bg-[#08130e] rounded-xl overflow-x-auto">
              <pre className="text-[13px] leading-relaxed text-emerald-300 font-mono px-5 py-4 m-0">{CONTOH}</pre>
            </div>
            <P>
              <strong className="text-[#1a1612]">B</strong> berarti naik (call),{" "}
              <strong className="text-[#1a1612]">S</strong> berarti turun (put). Anda tempel
              daftar ini ke aplikasi STC AutoTrade pada mode Signal, dan bot akan mengeksekusi
              order tepat pada jam yang tertulis — Anda tidak perlu memelototi layar.
            </P>
            <InfoBox icon="🆓" title="Sepenuhnya gratis">
              Jadwal ini dibagikan lewat bot Telegram tanpa biaya. Anda hanya butuh aplikasi
              STC AutoTrade dan akun Stockity sendiri — tidak ada langganan, tidak ada dana
              yang disetor ke pihak mana pun.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Cara Ambil</SectionLabel>
          <H2>Mengambil Sinyal Hari Ini</H2>
          <div className="space-y-4">
            <Steps
              items={[
                {
                  title: "Buka bot Telegram",
                  desc: "Tekan tombol di halaman ini atau cari @STCAUTOTRADEPRO_BOT di Telegram, lalu tekan Start.",
                },
                {
                  title: "Pilih menu Sinyal Gratis Hari Ini",
                  desc: "Bot menampilkan dua pilihan interval: 3 menit dan 5 menit.",
                },
                {
                  title: "Pilih interval, salin jadwalnya",
                  desc: "Bot menampilkan jadwal lengkap hari ini. Tekan-tahan pada teksnya untuk menyalin seluruh blok sekaligus.",
                },
              ]}
            />
            <InfoBox icon="🔄" title="Baru setiap hari">
              Jadwal dibuat dari tanggal hari itu — sama untuk semua orang di hari yang sama,
              dan otomatis berbeda keesokan harinya. Jadi ambil yang baru setiap kali Anda
              hendak menjalankan sesi.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Cara Pakai</SectionLabel>
          <H2>Menempel ke Mode Signal</H2>
          <div className="space-y-4">
            <Steps
              items={[
                {
                  title: "Buka aplikasi → mode Signal",
                  desc: "Pada pemilih mode di dashboard, pilih Signal Mode.",
                },
                {
                  title: "Tekan Masukkan Sinyal, lalu tempel",
                  desc: "Aplikasi otomatis mengenali format jam dan arahnya — baik ':' maupun '.', huruf besar maupun kecil, B/S maupun call/put semuanya diterima.",
                },
                {
                  title: "Atur nominal & Stop Loss",
                  desc: "Tentukan nominal per order dan pasang Stop Loss sebelum mulai. Ini pengaman utama Anda, apa pun sumber sinyalnya.",
                },
                {
                  title: "Mulai dari akun demo dulu",
                  desc: "Jalankan di akun demo satu-dua sesi untuk memahami perilakunya sebelum menyentuh dana nyata.",
                },
              ]}
            />
            <P>
              Belum punya aplikasinya?{" "}
              <Link href="/download" className="text-[#047857] underline">Unduh STC AutoTrade</Link>{" "}
              lebih dulu, lalu ikuti{" "}
              <Link href="/artikel/cara-setting-robot-stockity" className="text-[#047857] underline">
                panduan setting bot
              </Link>
              .
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Pilih Interval</SectionLabel>
          <H2>3 Menit atau 5 Menit?</H2>
          <div className="space-y-4">
            <DataTable
              head={["", "Interval 3 Menit", "Interval 5 Menit"]}
              rows={[
                ["Jarak antar order", "Setiap 3 menit", "Setiap 5 menit"],
                ["Jumlah order sehari", "Lebih banyak", "Lebih sedikit"],
                ["Cocok untuk", "Order durasi pendek, sesi aktif", "Order lebih santai, lebih renggang"],
                ["Beban modal", "Lebih cepat terpakai", "Lebih perlahan"],
              ]}
            />
            <P>
              Tidak ada yang &ldquo;lebih akurat&rdquo; di antara keduanya — bedanya hanya
              kerapatan order. Pilih yang sesuai durasi order dan seberapa sering Anda ingin
              bot masuk. Bila ragu, mulai dari 5 menit karena lebih hemat modal.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>05 · Kejujuran</SectionLabel>
          <H2>Yang Perlu Anda Pahami Sebelum Memakai</H2>
          <div className="space-y-4">
            <P>
              Kami tidak ingin Anda salah paham soal apa yang sinyal ini lakukan. Arah B/S
              pada jadwal ini <strong>dibuat acak</strong> dan berubah tiap hari — ia{" "}
              <strong>tidak membaca pasar</strong> dan tidak menganalisis apa pun.
            </P>
            <WarningBox>
              Sinyal acak, dari sumber mana pun, memiliki peluang menang sekitar setengah —
              dan karena payout binary option di bawah 100%, menyerahkan keputusan sepenuhnya
              pada arah acak dalam jangka panjang cenderung merugikan. Gunakan jadwal ini
              sebagai alat bantu eksekusi, bukan sebagai ramalan.
            </WarningBox>
            <P>
              Lalu apa gunanya? Ia menghemat Anda dari mengetik puluhan baris jadwal manual,
              dan memberi kerangka yang konsisten untuk menguji pengaturan Anda — nominal,
              martingale, Stop Loss — di akun demo. Nilai sebenarnya ada pada{" "}
              <strong>manajemen risiko Anda</strong>, bukan pada arahnya. Perhitungan jujurnya
              ada di{" "}
              <Link href="/artikel/berapa-penghasilan-trading-binary-option" className="text-[#047857] underline">
                artikel penghasilan trading
              </Link>
              .
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>06 · FAQ</SectionLabel>
          <H2>Pertanyaan yang Sering Muncul</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
