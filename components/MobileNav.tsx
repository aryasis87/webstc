"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Panduan" },
  { href: "/artikel", label: "Artikel" },
  { href: "/faq", label: "FAQ" },
];

/** Menu navigasi mobile (hamburger) — hanya tampil di bawah breakpoint sm. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
        className="ml-1 flex items-center justify-center w-10 h-10 rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors cursor-pointer"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2.5 5h13M2.5 9h13M2.5 13h13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <>
          {/* Overlay penutup saat tap di luar menu */}
          <div className="fixed inset-0 top-14 z-40 bg-zinc-950/20" onClick={close} aria-hidden="true" />
          <nav
            aria-label="Menu navigasi mobile"
            className="fixed top-14 inset-x-0 z-50 bg-white border-b border-zinc-100 shadow-lg shadow-black/[0.06]"
          >
            <div className="px-5 py-3 flex flex-col">
              {LINKS.map((l) =>
                l.href.startsWith("#") ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="py-3 text-[15px] font-medium text-zinc-700 border-b border-zinc-50 last:border-0 no-underline"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="py-3 text-[15px] font-medium text-zinc-700 border-b border-zinc-50 last:border-0 no-underline"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <a
                href="https://stcautotradepro.id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="py-3 text-[15px] font-medium text-zinc-700 no-underline"
              >
                Versi Web ↗
              </a>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
