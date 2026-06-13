/**
 * not-found.tsx
 * App Router: halaman 404 kustom.
 * Server Component — tidak perlu "use client".
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan | STC AutoTrade",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        {/* Angka 404 */}
        <div
          className="font-[family-name:var(--font-dm-serif)] text-[120px] sm:text-[160px] leading-none text-[#1a1612]/[0.06] select-none"
          aria-hidden="true"
        >
          404
        </div>

        <h1 className="text-2xl font-semibold text-[#1a1612] mb-3 -mt-4 tracking-tight">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-[#6b6058] text-[15px] leading-relaxed mb-8">
          URL yang Anda kunjungi tidak tersedia. Mungkin sudah dipindahkan atau
          ada kesalahan ketik.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all hover:-translate-y-px no-underline shadow-sm"
        >
          Kembali ke Beranda
        </Link>

        <p className="mt-8 text-[12px] text-[#1a1612]/25">
          STC AutoTrade · stcautotrade.id
        </p>
      </div>
    </div>
  );
}