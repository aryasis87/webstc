"use client";

/**
 * components/FAQAccordion.tsx
 *
 * PENYEMPURNAAN:
 * - Animasi open/close halus via CSS max-height transition (tidak lagi hard show/hide)
 * - Ref per-item untuk mengukur scrollHeight sehingga animasi height akurat
 * - aria-controls + id terhubung benar antara button dan panel jawaban
 * - role="region" + aria-labelledby di <dd> untuk screen reader
 * - Variabel `isOpen` menghindari evaluasi ulang `open === i` berulang kali
 */

import { useState, useRef } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <dl className="divide-y divide-[rgba(26,22,18,0.07)] border border-[rgba(26,22,18,0.08)] rounded-2xl overflow-hidden bg-white">
      {items.map((item, i) => {
        const isOpen   = open === i;
        const btnId    = `faq-btn-${i}`;
        const panelId  = `faq-panel-${i}`;
        /* Tinggi aktual panel jawaban — fallback 600px jika ref belum terpasang */
        const maxH = isOpen
          ? `${panelRefs.current[i]?.scrollHeight ?? 600}px`
          : "0px";

        return (
          <div key={i}>
            <dt>
              <button
                id={btnId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#f9fafb] transition-colors cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="text-[14px] font-medium text-[#1a1612] leading-snug">
                  {item.q}
                </span>
                {/* Ikon + (45° saat open) */}
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full border border-[rgba(26,22,18,0.12)] flex items-center justify-center text-[#1a1612]/40 transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1v8M1 5h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </dt>

            {/*
              Panel jawaban — selalu di DOM (baik untuk SSR & aksesibilitas),
              visibility dikontrol via max-height + opacity transition.
              Ini juga berarti konten bisa diindeks Googlebot tanpa JS.
            */}
            <dd
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="overflow-hidden m-0 transition-[max-height,opacity] duration-300 ease-out"
              style={{ maxHeight: maxH, opacity: isOpen ? 1 : 0 }}
              ref={(el) => { panelRefs.current[i] = el; }}
            >
              <div className="px-6 pb-5 text-[13px] text-[#6b6058] leading-relaxed border-t border-[rgba(26,22,18,0.06)] pt-4">
                {item.a}
              </div>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}