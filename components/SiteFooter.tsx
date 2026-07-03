import Image from "next/image";
import Link from "next/link";

const APK_PATH = "/StcAutoTrade.apk";

const PAGES = [
  { href: "/download", label: "Download" },
  { href: "/cara-kerja", label: "Cara Kerja" },
  { href: "/faq", label: "FAQ" },
  { href: "/artikel", label: "Artikel" },
];

/** Footer terpadu untuk semua halaman utama — brand, navigasi, platform, disclaimer. */
export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-8">
        <div className="grid gap-10 sm:grid-cols-[1.6fr_1fr_1fr] mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3 no-underline w-fit">
              <Image src="/logo.webp" alt="Logo STC AutoTrade" width={26} height={26} className="rounded-md" />
              <span className="text-sm font-semibold text-zinc-900">STC AutoTrade</span>
            </Link>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-xs">
              Robot trading otomatis untuk Stockity.id — 6 mode strategi, stop loss &amp; stop
              profit otomatis. Gratis untuk member terdaftar.
            </p>
          </div>

          {/* Halaman */}
          <nav aria-label="Halaman situs">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-3.5">Halaman</p>
            <ul className="flex flex-col gap-2.5">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors no-underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Platform */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-3.5">Platform</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={APK_PATH} download className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors no-underline">
                  Download APK Android
                </a>
              </li>
              <li>
                <a
                  href="https://stcautotradepro.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors no-underline"
                >
                  Versi Web ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-zinc-500">© 2026 STC AutoTrade (StockAutoTrade) · stcautotrade.id</p>
          <p className="text-[12px] text-zinc-500 max-w-sm sm:text-right leading-relaxed">
            Trading mengandung risiko kerugian finansial. STC AutoTrade adalah alat bantu, bukan
            jaminan selalu profit.
          </p>
        </div>
      </div>
    </footer>
  );
}
