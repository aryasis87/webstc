/**
 * app/artikel/trading-gold-stockity/page.tsx
 * Primary: trading gold stockity · Secondary: trading emas binary option,
 * strategi trading gold, XAU/USD stockity
 * Angle: deep-dive strategi satu aset — pelengkap aset-terbaik-trading-stockity
 * (yang membandingkan antar aset), fokus karakter & jam & setting khusus gold.
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "trading-gold-stockity",
  title: "Trading Gold (XAU/USD) di Stockity: Karakter, Jam & Strategi 2026",
  description:
    "Panduan khusus trading Gold di Stockity: karakter pergerakan XAU/USD, jam paling aktif dalam WIB, berita yang menggerakkannya, strategi support-resistance, dan setting mode STC AutoTrade yang cocok untuk emas.",
  keywords: [
    "trading gold stockity",
    "trading emas binary option",
    "xau usd stockity",
    "strategi trading gold",
    "jam trading gold wib",
    "trading emas online",
    "gold binary option",
  ],
  breadcrumbName: "Trading Gold Stockity",
  datePublished: "2026-07-09",
  faq: [
    { q: "Kapan jam terbaik trading Gold dalam WIB?", a: "Gold paling aktif saat sesi London (mulai ± 14.00 WIB) dan memuncak pada overlap London–New York sekitar 19.00–23.00 WIB. Di luar jam itu pergerakannya cenderung sempit dan sinyal teknikal lebih sering gagal." },
    { q: "Apa yang membuat harga Gold bergerak tajam?", a: "Gold sangat sensitif terhadap data ekonomi AS (inflasi/CPI, suku bunga The Fed, data tenaga kerja NFP) dan sentimen risiko global — ketegangan geopolitik biasanya mendorong gold naik sebagai aset safe haven." },
    { q: "Apakah Gold cocok untuk pemula?", a: "Cocok dengan syarat: hindari jam rilis berita besar. Di kondisi normal, gold menghormati level support-resistance dengan cukup rapi — bagus untuk belajar. Saat berita besar, pergerakannya bisa sangat liar dan menembus level apa pun." },
    { q: "Mode STC AutoTrade apa yang cocok untuk Gold?", a: "Mode Indicator (SMA/EMA/RSI) bekerja baik di sesi aktif yang trending, sedangkan AI Signal adaptif di berbagai kondisi. Jadwalkan bot lewat mode Schedule agar hanya aktif di jam likuid (misalnya 19.00–23.00 WIB) dan berhenti saat pasar sepi." },
    { q: "Apakah Gold tersedia di akhir pekan?", a: "Pasar gold riil tutup di akhir pekan. Yang tersedia Sabtu–Minggu adalah aset OTC dengan mekanisme harga berbeda — baca panduan trading OTC kami sebelum mencobanya." },
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
        date="9 Juli 2026"
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        title={<>Trading Gold di Stockity:<br className="hidden sm:block" /> Karakter, Jam &amp; Strategi</>}
        lede={<>Gold (XAU/USD) adalah salah satu aset favorit trader binary option: likuid, teknikalnya rapi, tapi <strong className="font-semibold text-[#1a1612]">punya temperamen sendiri</strong>. Panduan ini membahas cara membacanya — dan cara mengotomasikannya.</>}
        stats={[
          { v: "19–23", l: "Jam Emas WIB (Overlap NY)" },
          { v: "Safe Haven", l: "Naik Saat Pasar Cemas" },
          { v: "S&R", l: "Menghormati Level Teknikal" },
          { v: "CPI/Fed", l: "Berita Penggerak Utama" },
        ]}
        related={[
          { href: "/artikel/aset-terbaik-trading-stockity", title: "Aset Terbaik Trading Stockity", desc: "Perbandingan Forex vs Gold vs Crypto per mode bot" },
          { href: "/artikel/support-resistance-binary-option", title: "Support & Resistance", desc: "Level teknikal — senjata utama di Gold" },
          { href: "/artikel/kalender-ekonomi-binary-option", title: "Kalender Ekonomi", desc: "Jadwal berita yang menggerakkan Gold" },
        ]}
        ctaEyebrow="Otomasikan Jam Emasnya"
        ctaTitle="Jadwalkan STC AutoTrade di Sesi 19.00–23.00 WIB"
        ctaDesc="Mode Schedule + Indicator menjalankan strategi Gold Anda di jam paling likuid — lalu berhenti otomatis."
      >
        <section>
          <SectionLabel>01 · Karakter</SectionLabel>
          <H2>Memahami Temperamen Gold Sebelum Menyentuhnya</H2>
          <div className="space-y-4">
            <P>
              Dibanding pasangan forex utama, gold bergerak dengan <strong className="text-[#1a1612]">rentang
              harian yang lebih lebar</strong> — peluangnya lebih besar, hukumannya juga. Ada dua wajah
              gold yang perlu Anda kenali: di kondisi normal ia <em>trending dan teknikal</em> (menghormati
              support-resistance dengan rapi), tetapi saat berita besar ia menjadi <em>berita murni</em> —
              level teknikal ditembus begitu saja.
            </P>
            <P>
              Sebagai aset safe haven, gold cenderung menguat saat pasar global cemas (konflik, inflasi
              tinggi, ketidakpastian suku bunga) dan melemah saat selera risiko membaik dan dolar AS
              menguat. Korelasi negatif dengan dolar ini membuat kalender ekonomi AS wajib dipantau.
            </P>
            <InfoBox icon="🥇" title="Kenapa trader teknikal menyukai gold">
              Partisipannya sangat ramai dan levelnya diamati jutaan trader — membuat support-resistance
              menjadi semacam ramalan yang memenuhi dirinya sendiri. Di jam likuid, pantulan dari level
              kuat adalah setup paling bisa diandalkan di aset ini.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Jam</SectionLabel>
          <H2>Jam Trading Gold dalam WIB</H2>
          <div className="space-y-4">
            <DataTable
              head={["Waktu (WIB)", "Sesi", "Karakter Gold"]}
              rows={[
                ["08.00–14.00", "Asia", "Sepi & sempit — sinyal teknikal sering gagal, hindari"],
                ["14.00–19.00", "London", "Mulai aktif — tren awal terbentuk, volume masuk"],
                ["19.00–23.00", "Overlap London–New York", "Paling likuid & paling teknikal — jam utama trading gold"],
                ["23.00–04.00", "New York akhir", "Masih bergerak, mulai mengendur — hati-hati pembalikan tipis"],
              ]}
            />
            <P>
              Satu jam yang harus diperlakukan berbeda: <strong className="text-[#1a1612]">jam rilis data
              AS</strong> (umumnya 19.30 atau 20.30 WIB, dan pengumuman Fed dini hari). Lihat jadwalnya di{" "}
              <Link href="/artikel/kalender-ekonomi-binary-option" className="text-[#047857] underline">kalender ekonomi</Link>{" "}
              — jeda trading 15–30 menit sebelum dan sesudahnya.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Strategi</SectionLabel>
          <H2>Strategi Gold yang Terbukti Masuk Akal</H2>
          <Steps
            items={[
              { title: "Petakan level di timeframe besar dulu", desc: "Tandai support-resistance dari chart 1 jam/4 jam — level gold di timeframe besar jauh lebih dihormati daripada level timeframe menit." },
              { title: "Trading hanya di jam likuid", desc: "Batasi eksekusi di 19.00–23.00 WIB (atau 14.00+ jika sesi London jelas trending). Di luar itu, biarkan chart bergerak tanpa Anda." },
              { title: "Pantulan level + konfirmasi candle", desc: "Setup utama: harga menyentuh level kuat → tunggu candle penolakan (pin bar/engulfing) → order searah pantulan. Tanpa konfirmasi, jangan entry." },
              { title: "Hindari 30 menit di sekitar berita besar", desc: "CPI, NFP, dan keputusan suku bunga membuat spread melebar dan arah acak — kondisi terburuk untuk binary option." },
              { title: "Disiplinkan dengan batas harian", desc: "Tetapkan stop loss & stop profit harian sebelum mulai. Gold yang bergerak lebar mempercepat dua arah: profit — dan kerugian." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>04 · Otomasi</SectionLabel>
          <H2>Setting STC AutoTrade untuk Gold</H2>
          <div className="space-y-4">
            <DataTable
              head={["Pengaturan", "Rekomendasi", "Alasan"]}
              rows={[
                ["Aset", "Gold", "Pilih dari dropdown aset di dashboard bot"],
                ["Mode", "Indicator (SMA/EMA/RSI) atau AI Signal", "Gold trending & teknikal di jam likuid — indikator bekerja optimal"],
                ["Jadwal (mode Schedule)", "19.00–23.00 WIB", "Batasi bot hanya di jam paling likuid"],
                ["Martingale", "Konservatif: max 2–3 step", "Rentang gold lebar — deret kalah bisa mahal, jaga stepnya pendek"],
                ["Stop loss / profit harian", "Wajib diisi", "Rem mekanis saat gold sedang bertingkah karena berita"],
              ]}
            />
            <WarningBox>
              Jangan jalankan bot pada gold saat ada rilis berita besar terjadwal — mode apa pun. Matikan
              atau jadwalkan bot untuk melewati jam tersebut; pergerakan berita bukan kondisi yang bisa
              dibaca indikator. Pelajari juga <Link href="/artikel/cara-setting-robot-stockity" className="text-[#92400e] underline">panduan setting bot</Link> sebelum mengaktifkannya di akun real.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Trading Gold</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
