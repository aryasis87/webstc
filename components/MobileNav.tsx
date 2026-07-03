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
        className="ml-1 flex items-center justify-center w-10 h-10 rounded-xl text-[#17140f]/70 hover:bg-[#17140f]/5 transition-colors cursor-pointer"
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
          <div className="fixed inset-0 z-40 bg-[#17140f]/25" onClick={close} aria-hidden="true" />
          <nav
            aria-label="Menu navigasi mobile"
            className="fixed top-[4.75rem] inset-x-3 z-50 rounded-2xl bg-white border border-[rgba(23,20,15,0.09)] shadow-xl shadow-[rgba(23,20,15,0.12)] overflow-hidden"
          >
            <div className="px-5 py-2 flex flex-col">
              {LINKS.map((l) =>
                l.href.startsWith("#") ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="py-3.5 text-[15px] font-medium text-[#17140f]/80 border-b border-[rgba(23,20,15,0.06)] no-underline"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    className="py-3.5 text-[15px] font-medium text-[#17140f]/80 border-b border-[rgba(23,20,15,0.06)] no-underline"
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
                className="py-3.5 text-[15px] font-medium text-[#17140f]/80 no-underline"
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
