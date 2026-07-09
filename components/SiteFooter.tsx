import Image from "next/image";
import Link from "next/link";

const APK_PATH = "/StcAutoTrade.apk";

const PAGES = [
  { href: "/download", label: "Download" },
  { href: "/cara-kerja", label: "Cara Kerja" },
  { href: "/faq", label: "FAQ" },
  { href: "/artikel", label: "Artikel" },
  { href: "/kamus-trading", label: "Kamus Trading" },
];

// Halaman trust/E-E-A-T — tautan footer memastikan Google meng-crawl-nya
const COMPANY = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
  { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
  { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
];

/** Footer terpadu untuk semua halaman utama — brand, navigasi, platform, disclaimer. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(23,20,15,0.1)] bg-[#f6f4ef]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 no-underline w-fit">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={28} height={28} className="rounded-lg" />
              <span className="font-[family-name:var(--font-dm-serif)] text-xl text-[#17140f] leading-none">
                STC AutoTrade
              </span>
            </Link>
            <p className="text-[13px] text-[#6b6459] leading-relaxed max-w-xs">
              Robot trading otomatis untuk Stockity.id — 6 mode strategi, stop loss &amp; stop
              profit otomatis. Gratis untuk member terdaftar.
            </p>
          </div>

          {/* Halaman */}
          <nav aria-label="Halaman situs">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6b6459] mb-4">Halaman</p>
            <ul className="flex flex-col gap-2.5">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-[13px] text-[#6b6459] hover:text-[#17140f] transition-colors no-underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Platform */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6b6459] mb-4">Platform</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={APK_PATH} download className="text-[13px] text-[#6b6459] hover:text-[#17140f] transition-colors no-underline">
                  Download APK Android
                </a>
              </li>
              <li>
                <a
                  href="https://stcautotradepro.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#6b6459] hover:text-[#17140f] transition-colors no-underline"
                >
                  Versi Web ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Smart_autocklick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#6b6459] hover:text-[#17140f] transition-colors no-underline"
                >
                  YouTube ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@stc_autotradeofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#6b6459] hover:text-[#17140f] transition-colors no-underline"
                >
                  TikTok ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <nav aria-label="Perusahaan & legal">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6b6459] mb-4">Perusahaan</p>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-[13px] text-[#6b6459] hover:text-[#17140f] transition-colors no-underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-[rgba(23,20,15,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-[12px] text-[#6b6459]">© 2026 STC AutoTrade (TechnoAutoTrade) · stcautotrade.id</p>
            {/* Link bahasa — jalur crawl dari sisi ID ke versi EN/RU */}
            <p className="text-[12px] text-[#6b6459] mt-1.5">
              <span className="font-medium">Bahasa:</span>{" "}
              <span className="text-[#17140f]">Indonesia</span>
              {" · "}
              <Link href="/en" className="hover:text-[#17140f] transition-colors underline decoration-[rgba(23,20,15,0.2)] underline-offset-2">English</Link>
              {" · "}
              <Link href="/ru" className="hover:text-[#17140f] transition-colors underline decoration-[rgba(23,20,15,0.2)] underline-offset-2">Русский</Link>
            </p>
          </div>
          <p className="text-[12px] text-[#6b6459] max-w-sm sm:text-right leading-relaxed">
            Trading mengandung risiko kerugian finansial. STC AutoTrade adalah alat bantu, bukan
            jaminan selalu profit.
          </p>
        </div>
      </div>
    </footer>
  );
}
