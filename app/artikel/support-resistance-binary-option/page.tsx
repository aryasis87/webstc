/**
 * app/artikel/support-resistance-binary-option/page.tsx
 * Primary: support resistance binary option · Secondary: cara menentukan
 * support resistance, level psikologis, bounce breakout
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps, CardGrid } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "support-resistance-binary-option",
  title: "Support & Resistance Binary Option: Cara Menentukan & Trading di Level",
  description:
    "Panduan support & resistance untuk binary option: cara menandai level yang valid, strategi bounce vs breakout, kombinasi dengan candlestick & indikator, plus kesalahan pemula yang paling umum.",
  keywords: [
    "support resistance binary option",
    "cara menentukan support resistance",
    "support dan resistance",
    "strategi bounce trading",
    "breakout binary option",
    "level psikologis trading",
    "support resistance stockity",
  ],
  breadcrumbName: "Support & Resistance",
  datePublished: "2026-07-04",
  faq: [
    { q: "Apa itu support dan resistance secara sederhana?", a: "Support = area harga di mana tekanan beli cenderung menahan penurunan (lantai). Resistance = area di mana tekanan jual cenderung menahan kenaikan (langit-langit). Keduanya area — bukan garis setipis satu pip — tempat harga secara historis sering berbalik." },
    { q: "Bagaimana cara menandai level yang valid?", a: "Cari harga yang MINIMAL dua-tiga kali memantulkan harga di masa lalu, di timeframe yang lebih besar dari timeframe eksekusi Anda. Semakin sering dipantulkan dan semakin baru pantulannya, semakin relevan levelnya. Angka bulat (level psikologis) juga sering berfungsi." },
    { q: "Lebih baik trading bounce atau breakout?", a: "Untuk pemula, bounce (pantulan dari level) umumnya lebih mudah: setup-nya jelas — harga menyentuh level + konfirmasi candle pembalikan. Breakout membutuhkan konfirmasi lebih hati-hati karena false breakout sangat sering terjadi di binary option timeframe pendek." },
    { q: "Timeframe apa yang cocok untuk menandai S&R di binary option?", a: "Tandai level di timeframe lebih besar (M15–H1) lalu eksekusi di timeframe kecil (M1–M5). Level dari timeframe besar jauh lebih dihormati pasar daripada level yang digambar di chart 1 menit." },
    { q: "Apakah robot trading memakai konsep support resistance?", a: "Beberapa pendekatan otomatis menggunakannya secara implisit — misalnya mode Momentum STC AutoTrade mendeteksi pola pembalikan (yang sering terjadi di area S&R) dan breakout Bollinger Band. Anda mendapat logika serupa tanpa menggambar garis manual." },
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
        title={<>Support &amp; Resistance:<br className="hidden sm:block" /> Membaca "Lantai &amp; Langit-Langit" Harga</>}
        lede={<>Hampir semua strategi price action berdiri di atas satu fondasi: <strong className="font-semibold text-[#1a1612]">di mana pasar sebelumnya berbalik arah</strong>. Panduan ini mengajarkan cara menandai level yang benar-benar valid dan dua cara memperdagangkannya di binary option.</>}
        stats={[
          { v: "2–3×", l: "Pantulan Minimal = Valid" },
          { v: "Area", l: "Bukan Garis Tipis" },
          { v: "M15+", l: "Tandai di TF Besar" },
          { v: "2", l: "Strategi: Bounce & Breakout" },
        ]}
        related={[
          { href: "/artikel/cara-baca-candlestick-binary-option", title: "Cara Baca Candlestick", desc: "Pola candle untuk konfirmasi di level S&R" },
          { href: "/artikel/indikator-trading-binary-option", title: "Indikator Trading", desc: "SMA, EMA, RSI sebagai pelengkap level" },
          { href: "/artikel/timeframe-trading-binary-option", title: "Timeframe Trading", desc: "Memilih timeframe analisis vs eksekusi" },
        ]}
        ctaEyebrow="Malas Menggambar Garis?"
        ctaTitle="Mode Momentum STC AutoTrade Mendeteksi Pembalikan & Breakout Otomatis"
        ctaDesc="Pola Hammer, Doji, dan breakout Bollinger+PSAR dikenali dan dieksekusi bot 24 jam. Gratis untuk member."
      >
        <section>
          <SectionLabel>01 · Konsep</SectionLabel>
          <H2>Kenapa Level Ini Terbentuk (dan Terus Berulang)</H2>
          <div className="space-y-4">
            <P>
              Support dan resistance bukan sihir garis — keduanya jejak <strong className="text-[#1a1612]">memori
              kolektif pelaku pasar</strong>. Di harga tempat banyak orang pernah membeli, muncul kembali minat
              beli saat harga kembali ke sana (support). Di harga tempat banyak orang terjebak membeli terlalu
              tinggi, muncul tekanan jual saat harga kembali (resistance). Semakin banyak transaksi terjadi di
              suatu area, semakin kuat memorinya.
            </P>
            <P>
              Dua sifat penting yang sering dilupakan pemula: pertama, level adalah <strong className="text-[#1a1612]">area/zona</strong>,
              bukan garis presisi — beri toleransi beberapa pip. Kedua, peran bisa bertukar: support yang
              tembus sering berubah jadi resistance, dan sebaliknya (role reversal).
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Menandai</SectionLabel>
          <H2>Cara Menandai Level yang Valid</H2>
          <Steps
            items={[
              { title: "Mundur ke timeframe lebih besar", desc: <>Buka M15–H1 (bukan chart eksekusi M1). Level dari timeframe besar dihormati jauh lebih konsisten. Panduan memilih timeframe ada di <Link href="/artikel/timeframe-trading-binary-option" className="text-[#047857] underline">artikel timeframe</Link>.</> },
              { title: "Cari titik pantul yang berulang", desc: "Tandai harga di mana arah berbalik minimal 2–3 kali. Satu pantulan = kebetulan; dua-tiga pantulan = level yang diperhatikan pasar." },
              { title: "Prioritaskan yang paling baru & paling sering", desc: "Level yang dipantulkan minggu ini lebih relevan daripada level tiga bulan lalu. Kombinasi 'sering + baru' adalah level kelas satu." },
              { title: "Tambahkan level psikologis", desc: "Angka bulat (misal 1.1000 di EUR/USD, kelipatan besar di crypto) sering berfungsi sebagai S&R alami karena banyak order dipasang tepat di sana." },
              { title: "Maksimal 3–4 level di layar", desc: "Terlalu banyak garis = tidak ada garis. Simpan hanya level yang benar-benar teruji; hapus sisanya agar keputusan tetap jernih." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>03 · Strategi</SectionLabel>
          <H2>Dua Cara Memperdagangkan Level: Bounce vs Breakout</H2>
          <div className="space-y-4">
            <DataTable
              head={["Aspek", "Bounce (Pantulan)", "Breakout (Penembusan)"]}
              rows={[
                ["Ide dasar", "Harga menyentuh level → berbalik", "Harga menembus level → melanjut searah tembusan"],
                ["Entry binary option", "DOWN di resistance / UP di support, setelah konfirmasi", "Searah tembusan, setelah candle penutupan melewati level"],
                ["Konfirmasi terbaik", "Pola candle pembalikan (pin bar, engulfing) tepat di level", "Candle penuh menutup di luar level + momentum kuat"],
                ["Risiko khas", "Level jebol saat tren kuat", "False breakout — tembus sebentar lalu balik"],
                ["Cocok untuk", "Pasar sideways/ranging", "Pasar mulai bertren / rilis momentum"],
              ]}
            />
            <P>
              Aturan emasnya: <strong className="text-[#1a1612]">level memberi lokasi, candle memberi
              izin</strong>. Jangan entry hanya karena harga menyentuh garis — tunggu konfirmasi pola dari{" "}
              <Link href="/artikel/cara-baca-candlestick-binary-option" className="text-[#047857] underline">candlestick</Link>{" "}
              di area tersebut.
            </P>
            <WarningBox>
              False breakout adalah pembunuh nomor satu strategi ini di timeframe pendek. Jika ragu antara
              bounce dan breakout di satu level: tidak entry juga adalah posisi. Peluang berikutnya selalu
              datang.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Kombinasi</SectionLabel>
          <H2>Memperkuat Level dengan Alat Lain</H2>
          <CardGrid
            items={[
              { icon: "🕯️", title: "S&R + candlestick", desc: "Pin bar / engulfing tepat di level teruji = salah satu setup probabilitas terbaik dalam price action. Level tanpa candle konfirmasi hanyalah harapan." },
              { icon: "📈", title: "S&R + moving average", desc: "Saat EMA/SMA periode besar berimpit dengan level horizontal, area itu jadi 'confluence' — dua alasan berbeda bagi pasar untuk bereaksi di tempat yang sama." },
              { icon: "💪", title: "S&R + RSI", desc: "Harga di resistance + RSI overbought (atau support + oversold) memperkuat kasus pembalikan. Detailnya di artikel indikator." },
              { icon: "🤖", title: "S&R + otomasi", desc: "Mode Momentum STC AutoTrade mengenali pola pembalikan dan breakout Bollinger+PSAR secara otomatis — logika serupa berjalan 24 jam tanpa menggambar garis manual." },
            ]}
          />
          <div className="mt-4">
            <InfoBox icon="🎯" title="Satu setup, dikuasai tuntas">
              Trader konsisten jarang menguasai sepuluh strategi — mereka menguasai satu-dua setup (misalnya
              bounce di level + pin bar) sampai hafal segala variasinya. Kedalaman mengalahkan keluasan.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Support &amp; Resistance</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
