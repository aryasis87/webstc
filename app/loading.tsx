/**
 * loading.tsx
 * App Router: ditampilkan otomatis selama halaman / data sedang dimuat.
 * Menggunakan skeleton yang mencerminkan layout halaman utama.
 */

export default function Loading() {
  return (
    <div
      className="min-h-screen bg-[#f9fafb] animate-pulse"
      aria-busy="true"
      aria-label="Memuat halaman STC AutoTrade…"
    >
      {/* ── Nav skeleton ──────────────────────────────────── */}
      <div className="fixed top-0 inset-x-0 z-50 h-14 bg-white border-b border-[rgba(26,22,18,0.08)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-[6px] bg-[#e5e7eb]" />
            <div className="w-24 h-4 rounded-full bg-[#e5e7eb]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block w-16 h-8 rounded-lg bg-[#e5e7eb]" />
            <div className="hidden sm:block w-20 h-8 rounded-lg bg-[#e5e7eb]" />
            <div className="w-28 h-8 rounded-lg bg-[#1a1612]/10" />
          </div>
        </div>
      </div>

      {/* ── Hero skeleton ─────────────────────────────────── */}
      <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Teks */}
            <div className="space-y-5">
              <div className="w-56 h-6 rounded-full bg-[#dbeafe]" />
              <div className="space-y-3">
                <div className="w-full h-12 rounded-xl bg-[#e5e7eb]" />
                <div className="w-4/5 h-12 rounded-xl bg-[#e5e7eb]" />
                <div className="w-3/4 h-12 rounded-xl bg-[#e5e7eb]" />
              </div>
              <div className="space-y-2">
                <div className="w-full h-4 rounded bg-[#f3f4f6]" />
                <div className="w-5/6 h-4 rounded bg-[#f3f4f6]" />
                <div className="w-4/6 h-4 rounded bg-[#f3f4f6]" />
              </div>
              <div className="flex gap-3 pt-2">
                <div className="w-44 h-11 rounded-xl bg-[#1a1612]/10" />
                <div className="w-36 h-11 rounded-xl bg-[#dbeafe]" />
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-[280px] h-[570px] rounded-[46px] bg-[#e5e7eb]" />
            </div>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-[rgba(26,22,18,0.09)] rounded-2xl overflow-hidden mt-14 max-w-2xl">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="py-5 px-4 bg-white">
                <div className="w-10 h-8 rounded bg-[#dbeafe] mx-auto mb-2" />
                <div className="w-20 h-3 rounded bg-[#e5e7eb] mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section placeholder ────────────────────────────── */}
      <div className="py-16 bg-[#f0f7ff] border-y border-[rgba(26,22,18,0.07)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap justify-center gap-2.5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-white border border-[#dbeafe] w-28 h-8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}