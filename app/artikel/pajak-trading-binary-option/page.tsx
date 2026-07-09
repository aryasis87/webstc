/**
 * app/artikel/pajak-trading-binary-option/page.tsx
 * Primary: pajak trading binary option · Secondary: pajak trading online,
 * lapor SPT penghasilan trading, pajak penghasilan trader
 * Angle: topik yang hampir tidak ditulis kompetitor — membangun trust YMYL.
 */

import { buildMetadata, buildSchemas, type ArtikelSeoDef } from "../_lib/artikelSeo";
import { ArtikelShell, SectionLabel, H2, P, InfoBox, WarningBox, DataTable, FaqList, Steps } from "../_components/ArtikelShell";
import Link from "next/link";

const seo: ArtikelSeoDef = {
  slug: "pajak-trading-binary-option",
  title: "Pajak Trading Binary Option di Indonesia: Panduan Lapor SPT 2026",
  description:
    "Apakah profit trading binary option kena pajak? Panduan praktis: status penghasilan trading di mata pajak, tarif PPh progresif, cara mencatat profit-loss, dan langkah melaporkannya di SPT Tahunan.",
  keywords: [
    "pajak trading binary option",
    "pajak trading online indonesia",
    "lapor spt penghasilan trading",
    "pajak penghasilan trader",
    "pajak profit trading",
    "spt tahunan trader online",
    "pajak stockity",
  ],
  breadcrumbName: "Pajak Trading Binary Option",
  datePublished: "2026-07-09",
  faq: [
    { q: "Apakah profit trading binary option kena pajak di Indonesia?", a: "Ya. Sistem pajak Indonesia menganut prinsip penghasilan dalam arti luas: setiap tambahan kemampuan ekonomis — dari mana pun asalnya — pada dasarnya adalah objek Pajak Penghasilan (PPh), termasuk profit trading online. Profit trading umumnya dilaporkan sebagai penghasilan lain-lain di SPT Tahunan." },
    { q: "Berapa tarif pajaknya?", a: "Mengikuti tarif PPh Orang Pribadi progresif: 5% untuk lapisan penghasilan kena pajak sampai Rp 60 juta/tahun, lalu bertingkat 15%, 25%, 30%, hingga 35% untuk lapisan di atas Rp 5 miliar. Penghasilan kena pajak dihitung setelah dikurangi PTKP (Rp 54 juta/tahun untuk lajang tanpa tanggungan)." },
    { q: "Bagaimana jika total profit saya masih kecil?", a: "Jika seluruh penghasilan Anda setahun (termasuk profit trading) masih di bawah PTKP Rp 54 juta, penghasilan kena pajak Anda nihil — tidak ada PPh terutang. Namun jika sudah punya NPWP, kewajiban lapor SPT Tahunan tetap berlaku." },
    { q: "Apakah loss trading bisa jadi pengurang pajak?", a: "Untuk trader orang pribadi yang melaporkan profit sebagai penghasilan lain-lain, praktik umumnya adalah melaporkan hasil bersih tahunan. Karena perlakuan rinci bisa berbeda antar kasus, gunakan catatan transaksi yang rapi dan konsultasikan dengan konsultan pajak untuk posisi yang paling tepat." },
    { q: "Platform luar negeri, apakah tetap wajib lapor?", a: "Ya. Wajib pajak dalam negeri dikenai pajak atas penghasilan dari mana pun (worldwide income) — termasuk dari platform yang berbasis di luar negeri. Saldo akun dan aset terkait juga dilaporkan di bagian harta SPT." },
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
        date="9 Juli 2026"
        readMins={8}
        breadcrumbName={seo.breadcrumbName}
        title={<>Pajak Trading Binary Option:<br className="hidden sm:block" /> Panduan Lapor yang Benar</>}
        lede={<>Topik yang jarang dibahas tapi penting: profit trading adalah <strong className="font-semibold text-[#1a1612]">objek pajak penghasilan</strong>. Artikel ini merangkum status pajaknya, tarif yang berlaku, cara mencatat, dan langkah melaporkannya — dengan bahasa sederhana.</>}
        stats={[
          { v: "PPh OP", l: "Jenis Pajak yang Berlaku" },
          { v: "5–35%", l: "Tarif Progresif Tahunan" },
          { v: "54 Juta", l: "PTKP Setahun (Lajang)" },
          { v: "31 Mar", l: "Batas Lapor SPT Tahunan" },
        ]}
        related={[
          { href: "/artikel/berapa-penghasilan-trading-binary-option", title: "Berapa Penghasilan Trading?", desc: "Hitungan realistis profit binary option" },
          { href: "/artikel/cara-withdraw-stockity", title: "Cara Withdraw Stockity", desc: "Panduan tarik dana ke rekening" },
          { href: "/artikel/manajemen-modal-trading-binary-option", title: "Manajemen Modal", desc: "Atur modal & catat performa dengan disiplin" },
        ]}
        ctaEyebrow="Catatan Rapi Otomatis"
        ctaTitle="Riwayat Trading Lengkap per Order di STC AutoTrade"
        ctaDesc="History page bot mencatat setiap order — modal awal untuk rekap profit-loss tahunan Anda."
      >
        <section>
          <SectionLabel>01 · Status</SectionLabel>
          <H2>Apakah Profit Trading Kena Pajak? Ya — Ini Dasarnya</H2>
          <div className="space-y-4">
            <P>
              Undang-undang PPh Indonesia memakai definisi penghasilan yang sangat luas:{" "}
              <strong className="text-[#1a1612]">setiap tambahan kemampuan ekonomis yang diterima,
              dari Indonesia maupun luar negeri, yang dipakai untuk konsumsi atau menambah kekayaan</strong>.
              Profit trading binary option jelas masuk definisi ini — sama seperti keuntungan usaha,
              honor freelance, atau hadiah.
            </P>
            <P>
              Tidak adanya potongan pajak otomatis oleh platform bukan berarti bebas pajak. Untuk
              penghasilan yang tidak dipotong pihak lain, mekanismenya adalah{" "}
              <strong className="text-[#1a1612]">self-assessment</strong>: Anda sendiri yang menghitung,
              membayar (jika ada yang terutang), dan melaporkannya di SPT Tahunan.
            </P>
            <InfoBox icon="⚖️" title="Kenapa repot-repot lapor?">
              Dana withdraw masuk ke rekening bank atas nama Anda. Profil transaksi rekening yang tidak
              cocok dengan SPT adalah salah satu pemicu klasik pemeriksaan pajak. Melaporkan dengan benar
              jauh lebih murah daripada sanksinya.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>02 · Tarif</SectionLabel>
          <H2>Tarif PPh Orang Pribadi yang Berlaku</H2>
          <div className="space-y-4">
            <P>
              Profit trading orang pribadi umumnya dilaporkan sebagai{" "}
              <strong className="text-[#1a1612]">penghasilan lain-lain</strong> dan digabung dengan
              penghasilan Anda yang lain (gaji, usaha), lalu dikenai tarif progresif atas penghasilan
              kena pajak — yaitu total penghasilan neto setahun dikurangi PTKP:
            </P>
            <DataTable
              head={["Lapisan Penghasilan Kena Pajak / Tahun", "Tarif"]}
              rows={[
                ["Sampai Rp 60 juta", "5%"],
                ["Di atas Rp 60 juta – Rp 250 juta", "15%"],
                ["Di atas Rp 250 juta – Rp 500 juta", "25%"],
                ["Di atas Rp 500 juta – Rp 5 miliar", "30%"],
                ["Di atas Rp 5 miliar", "35%"],
              ]}
            />
            <P>
              PTKP (Penghasilan Tidak Kena Pajak) untuk lajang tanpa tanggungan adalah{" "}
              <strong className="text-[#1a1612]">Rp 54 juta per tahun</strong> — bertambah jika menikah
              dan punya tanggungan. Artinya: jika total penghasilan Anda setahun masih di bawah angka
              itu, tidak ada PPh yang terutang.
            </P>
          </div>
        </section>

        <section>
          <SectionLabel>03 · Contoh</SectionLabel>
          <H2>Contoh Hitungan Sederhana</H2>
          <div className="space-y-4">
            <P>
              Misalkan seorang trader lajang berprofit bersih <strong className="text-[#1a1612]">Rp 90
              juta setahun</strong> dan tidak punya penghasilan lain. Penghasilan kena pajak = Rp 90 juta
              − PTKP Rp 54 juta = Rp 36 juta. Karena masih di lapisan pertama, PPh terutang = 5% × Rp 36
              juta = <strong className="text-[#1a1612]">Rp 1,8 juta setahun</strong>.
            </P>
            <P>
              Punya gaji juga? Gabungkan: gaji neto + profit trading − PTKP, lalu terapkan tarif
              progresif per lapisan. PPh yang sudah dipotong kantor (bukti potong) menjadi kredit
              pengurang di SPT.
            </P>
            <WarningBox>
              Angka di atas adalah ilustrasi penyederhanaan, bukan nasihat pajak. Kasus nyata bisa
              berbeda (status PTKP, penghasilan campuran, posisi loss). Untuk nominal besar,
              berkonsultasilah dengan konsultan pajak terdaftar.
            </WarningBox>
          </div>
        </section>

        <section>
          <SectionLabel>04 · Pencatatan</SectionLabel>
          <H2>Catat Dulu, Lapor Kemudian: Data yang Perlu Disimpan</H2>
          <div className="space-y-4">
            <P>
              Pelaporan yang benar dimulai dari pencatatan yang rapi. Minimal, simpan empat hal ini
              sepanjang tahun:
            </P>
            <DataTable
              head={["Data", "Sumber", "Untuk Apa"]}
              rows={[
                ["Rekap profit/loss per bulan", "History platform / bot", "Dasar angka penghasilan neto tahunan"],
                ["Riwayat deposit & withdraw", "Riwayat transaksi + mutasi bank", "Membuktikan arus dana masuk-keluar"],
                ["Saldo akun akhir tahun (31 Des)", "Dashboard akun", "Dilaporkan di bagian harta SPT"],
                ["Bukti potong PPh lain (jika ada)", "Pemberi kerja", "Kredit pajak pengurang di SPT"],
              ]}
            />
            <InfoBox icon="🧾" title="Manfaatkan riwayat otomatis">
              Pengguna <Link href="/artikel/robot-trading-stockity" className="text-[#047857] underline">STC AutoTrade</Link> bisa
              memakai History page yang mencatat setiap order — tinggal direkap per bulan, tidak perlu
              mencatat manual satu per satu.
            </InfoBox>
          </div>
        </section>

        <section>
          <SectionLabel>05 · Cara Lapor</SectionLabel>
          <H2>Langkah Melaporkan di SPT Tahunan</H2>
          <Steps
            items={[
              { title: "Pastikan punya NPWP / NIK terintegrasi", desc: "Pendaftaran bisa dilakukan online. NIK KTP kini berfungsi sebagai NPWP bagi orang pribadi setelah divalidasi." },
              { title: "Rekap penghasilan neto trading setahun", desc: "Jumlahkan hasil bersih Januari–Desember dari catatan Anda. Simpan rincian per bulan sebagai arsip pendukung." },
              { title: "Hitung PPh terutang", desc: "Gabungkan seluruh penghasilan neto, kurangi PTKP, terapkan tarif progresif. Kurangkan kredit pajak (bukti potong) jika ada." },
              { title: "Setor kekurangan pajak (jika ada)", desc: "Buat kode billing dan bayar sebelum lapor. Simpan bukti setornya." },
              { title: "Lapor SPT Tahunan sebelum 31 Maret", desc: "Isi e-filing di situs pajak: penghasilan lain-lain untuk profit trading, dan cantumkan saldo akun trading di daftar harta." },
            ]}
          />
        </section>

        <section>
          <SectionLabel>06 · FAQ</SectionLabel>
          <H2>Pertanyaan Umum Pajak Trader</H2>
          <FaqList items={seo.faq} />
        </section>
      </ArtikelShell>
    </>
  );
}
