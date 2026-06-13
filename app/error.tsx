"use client";

/**
 * error.tsx
 * App Router: ditampilkan otomatis jika terjadi runtime error di halaman ini.
 * Wajib "use client" karena menerima prop `reset` dari Next.js.
 */

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error ke service monitoring (mis. Sentry) di production
    if (process.env.NODE_ENV === "production") {
      // Ganti dengan: Sentry.captureException(error);
      console.error("[STC AutoTrade] Page Error:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        {/* Ikon peringatan */}
        <div className="w-16 h-16 rounded-2xl bg-[#fee2e2] flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 256 256"
            fill="#ef4444"
            aria-hidden="true"
          >
            <path d="M236.8,188.09,149.35,36.18a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-[#1a1612] mb-3 tracking-tight">
          Ada yang Tidak Beres
        </h1>

        {/* Pesan */}
        <p className="text-[#6b6058] text-[15px] leading-relaxed mb-2">
          Halaman STC AutoTrade mengalami kendala sementara.
          Coba muat ulang — biasanya langsung beres.
        </p>

        {/* Detail error (development only) */}
        {process.env.NODE_ENV !== "production" && error.message && (
          <pre className="mt-4 mb-6 text-left text-[11px] text-[#ef4444] bg-[#fef2f2] border border-[#fecaca] rounded-xl p-4 overflow-x-auto leading-relaxed">
            {error.message}
          </pre>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#1a1612] text-[#f0f9ff] text-sm font-semibold rounded-xl hover:bg-[#1a1612]/85 transition-all hover:-translate-y-px cursor-pointer"
          >
            {/* Reload icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L184,75.31A80,80,0,1,0,208,128a8,8,0,0,1,16,0A96,96,0,1,1,171.31,59.31L184,72V48a8,8,0,0,1,16,0Z" />
            </svg>
            Muat Ulang
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-[rgba(26,22,18,0.16)] text-[#1a1612]/60 text-sm font-medium rounded-xl hover:border-[rgba(26,22,18,0.28)] hover:text-[#1a1612] transition-all no-underline"
          >
            Ke Halaman Utama
          </a>
        </div>

        {/* Digest (Next.js error ID untuk debugging) */}
        {error.digest && (
          <p className="mt-6 text-[11px] text-[#1a1612]/20">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}