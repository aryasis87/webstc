/**
 * app/artikel/psikologi-trading-binary-option/page.tsx
 * Primary: psikologi trading · Secondary: emosi trading, overtrading,
 * revenge trading, fomo trading, disiplin trading
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, CardGrid } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "psikologi-trading-binary-option",
  title: "Psikologi Trading Binary Option: 5 Jebakan Emosi & Cara Melawannya",
  description:
    "Kenapa trader dengan strategi bagus tetap rugi? Bahas 5 jebakan psikologis — revenge trading, FOMO, overtrading, overconfidence, loss aversion — plus cara praktis melawannya termasuk otomasi.",
  keywords: [
    "psikologi trading",
    "psikologi trading binary option",
    "emosi dalam trading",
    "revenge trading",
    "overtrading",
    "fomo trading",
    "disiplin trading",
    "cara mengendalikan emosi trading",
  ],
  breadcrumbName: "Psikologi Trading",
  datePublished: "2026-07-04",
  faq: [
    { q: "Apa jebakan psikologis paling berbahaya dalam trading?", a: "Revenge trading — memperbesar order setelah kalah untuk 'balas dendam'. Ia berbahaya karena terasa logis di saat terjadi ('tinggal satu kemenangan untuk balik modal') padahal secara statistik justru mempercepat kehancuran akun." },
    { q: "Bagaimana cara berhenti overtrading?", a: "Tetapkan kuota sebelum sesi: maksimal jumlah order per hari dan batas loss harian, lalu berhenti saat salah satu tersentuh — apapun yang terjadi. Menuliskan aturan sebelum sesi (saat objektif) jauh lebih efektif daripada mengandalkan tekad di tengah sesi." },
    { q: "Apakah trading pakai robot menghilangkan masalah psikologi?", a: "Menghilangkan sebagian besar — bot tidak kenal takut, serakah, atau balas dendam, dan mematuhi batas yang diset. Namun psikologi berpindah level: godaan mematikan bot saat drawdown normal, atau menaikkan batas risiko setelah profit, tetap keputusan manusia. Disiplin tetap dibutuhkan, hanya lebih jarang diuji." },
    { q: "Kenapa saya selalu menutup posisi menang terlalu cepat tapi membiarkan yang kalah?", a: "Itu loss aversion — rasa sakit kerugian secara psikologis ±2× lebih kuat dari senangnya keuntungan setara, membuat kita 'mengunci' kemenangan cepat-cepat tapi menunda mengakui kekalahan. Penawarnya: aturan keluar yang ditetapkan sebelum masuk posisi, bukan saat di dalamnya." },
    { q: "Apakah jurnal trading benar-benar membantu?", a: "Ya — bukan karena mencatat angkanya, tapi karena memaksa Anda melihat pola perilaku sendiri: jam berapa Anda paling sering melanggar aturan, setelah kejadian apa, di kondisi pasar apa. Pola yang terlihat bisa dilawan; yang tak terlihat mengendalikan Anda." },
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
        badge="Edukasi"
        date="4 Juli 2026"
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        title={<>Psikologi Trading: 5 Jebakan<br className="hidden sm:block" /> Emosi &amp; Cara Melawannya</>}
        lede={<>Sebagian besar akun tidak hancur karena strategi yang buruk, melainkan karena <strong className="font-semibold text-[#1a1612]">keputusan bagus yang ditinggalkan di saat emosi</strong>. Artikel ini membedah 5 jebakan psikologis paling mahal dalam binary option — dan penawar praktisnya.</>}
        stats={[
          { v: "5", l: "Jebakan Utama" },
          { v: "±2×", l: "Sakitnya Loss vs Senangnya Win" },
          { v: "Sebelum", l: "Aturan Dibuat Pra-Sesi" },
          { v: "0", l: "Emosi pada Eksekusi Bot" },
        ]}
        related={[
          { href: "/artikel/manajemen-modal-trading-binary-option", title: "Manajemen Modal Trading", desc: "Aturan 1–5% & position sizing praktis" },
          { href: "/artikel/cara-menghindari-loss-stockity", title: "Cara Menghindari Loss", desc: "Fitur SL, TP & manajemen risiko di Stockity" },
          { href: "/artikel/ai-trading-stockity", title: "AI Trading Stockity", desc: "Eksekusi tanpa emosi dengan sinyal AI" },
        ]}
        ctaEyebrow="Lelah Melawan Diri Sendiri?"
        ctaTitle="Pindahkan Eksekusi ke STC AutoTrade — Aturan Anda, Tanpa Emosi"
        ctaDesc="Bot mematuhi nominal, batas martingale, dan stop loss yang Anda set — di order pertama maupun ke-100. Gratis untuk member."
      >
        <section>
          <SectionLabel>01 · Akar Masalah</SectionLabel>
          <H2>Kenapa Otak Kita Buruk dalam Trading</H2>
          <div className="space-y-4">
            <P>
              Otak manusia dirancang untuk bertahan hidup, bukan untuk probabilitas. Penelitian psikologi
              perilaku menunjukkan rasa sakit kehilangan terasa kira-kira{" "}
              <strong className="text-[#1a1612]">dua kali lebih kuat</strong> daripada senangnya keuntungan
              setara (loss aversion, Kahneman &amp; Tversky). Dalam binary option — di mana keputusan
              berulang cepat dan hasil langsung terlihat — bias-bias ini dipicu puluhan kali per sesi.
            </P>
            <P>
              Kabar baiknya: jebakan-jebakan ini terdokumentasi, bisa dikenali, dan bisa dilawan dengan
              struktur. Berikut lima yang paling sering menguras akun.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Lima Jebakan</SectionLabel>
          <H2>5 Jebakan Emosi Paling Mahal</H2>
          <div className="space-y-4">
            <DataTable
              head={["Jebakan", "Suara di Kepala", "Akibat Khasnya"]}
              rows={[
                ["Revenge trading", "“Sekali menang lagi, balik modal”", "Order membesar di luar rencana setelah kalah — kerugian menggulung"],
                ["Overtrading", "“Masih ada peluang, sekali lagi”", "Kualitas keputusan menurun; komisi waktu & fokus terkuras"],
                ["FOMO", "“Semua orang profit, aku ketinggalan”", "Masuk tanpa setup, di harga terburuk, di waktu terburuk"],
                ["Overconfidence", "“Aku sudah pegang polanya”", "Setelah win streak: nominal naik, aturan dilonggarkan — tepat sebelum streak berakhir"],
                ["Loss aversion", "“Belum rugi kalau belum berhenti”", "Menolak menutup sesi merah; batas harian dilanggar 'sekali ini saja'"],
              ]}
            />
            <WarningBox>
              Kelima jebakan punya satu kesamaan: semuanya terasa rasional pada momen terjadinya. Anda tidak
              akan pernah merasa sedang revenge trading — Anda hanya merasa "kali ini beda". Karena itu
              pertahanannya tidak boleh mengandalkan perasaan.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Penawar</SectionLabel>
          <H2>Penawar Praktis: Struktur Mengalahkan Tekad</H2>
          <CardGrid
            items={[
              { icon: "📝", title: "Aturan tertulis pra-sesi", desc: "Sebelum order pertama: nominal, maksimal order hari ini, batas loss, target profit. Ditulis — bukan diingat. Melanggar aturan tertulis terasa jauh lebih 'mahal' secara psikologis." },
              { icon: "🛑", title: "Batas harian yang tak bisa dinego", desc: "Stop loss & stop profit harian adalah pemutus arus emosi. Tersentuh = selesai. Besok pasar masih buka — kalimat itu menyelamatkan lebih banyak akun daripada indikator manapun." },
              { icon: "📓", title: "Jurnal perilaku, bukan cuma angka", desc: "Catat juga KONDISI Anda tiap melanggar aturan: jam, mood, kejadian sebelumnya. Dalam 2 minggu polanya terlihat — dan pola yang terlihat bisa diantisipasi." },
              { icon: "⏸️", title: "Jeda paksa setelah loss beruntun", desc: "Aturan sederhana: 3 loss beruntun = jeda minimal 1 jam, apapun alasannya. Jeda memutus lingkaran emosi sebelum ia sempat mengambil alih keputusan." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>04 · Otomasi</SectionLabel>
          <H2>Otomasi: Memindahkan Eksekusi ke Sistem yang Tak Punya Emosi</H2>
          <div className="space-y-4">
            <P>
              Semua penawar di atas punya kelemahan yang sama: yang menjalankannya tetap manusia yang sedang
              emosi. Cara paling struktural memutus rantai itu adalah memisahkan{" "}
              <strong className="text-[#1a1612]">pembuat aturan</strong> (Anda, saat objektif) dari{" "}
              <strong className="text-[#1a1612]">pelaksana aturan</strong> (sistem yang tidak bisa emosi).
            </P>
            <P>
              Itulah peran <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">robot
              trading</Link>: Anda menetapkan nominal,{" "}
              <Link href="/artikel/strategi-martingale-stockity" className="text-[#047857] underline">batas martingale</Link>,
              stop loss dan stop profit di kepala dingin — bot mengeksekusinya identik di order pertama
              maupun ke-100, tidak peduli baru menang lima kali atau kalah lima kali.
            </P>
            <InfoBox icon="🧠" title="Psikologi tidak hilang — pindah level">
              Dengan bot, ujian emosinya berubah: bukan lagi "jangan revenge trading", melainkan "jangan
              matikan bot saat drawdown normal" dan "jangan naikkan batas setelah minggu yang bagus".
              Lebih jarang diuji, tapi tetap perlu dijaga.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Psikologi Trading</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
