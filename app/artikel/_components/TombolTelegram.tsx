/**
 * app/artikel/_components/TombolTelegram.tsx
 *
 * Tombol kontak Telegram untuk halaman-halaman jasa. Dipisah agar nomor
 * admin hanya ditulis di satu tempat — kalau berganti, cukup ubah di sini.
 * Folder _components tidak menjadi route (konvensi App Router).
 */

export const TELEGRAM = "https://t.me/Szin_yui";
export const TELEGRAM_HANDLE = "@Szin_yui";

export function TombolTelegram({
  label = "Hubungi & Order via Telegram",
}: { label?: string }) {
  return (
    <a
      href={TELEGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#229ED9] text-white text-sm font-semibold no-underline shadow-lg shadow-[#229ED9]/25 hover:bg-[#1c86b8] hover:shadow-[#229ED9]/35 transition-all"
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.94 2.4a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2Zm4.46 6.57-1.49 7.03c-.11.5-.41.62-.83.39l-2.29-1.69-1.11 1.06c-.12.13-.23.23-.47.23l.17-2.37 4.32-3.9c.19-.17-.04-.26-.29-.09l-5.34 3.36-2.3-.72c-.5-.16-.51-.5.1-.74l8.99-3.47c.42-.15.78.1.64.73Z" />
      </svg>
      {label}
    </a>
  );
}

/** Blok ajakan berlatar gelap — penutup halaman jasa. */
export function BlokOrder({
  judul = TELEGRAM_HANDLE,
  eyebrow = "Admin STC AutoTrade",
  catatan = "Konsultasi tidak dipungut biaya, termasuk bila akhirnya Anda memutuskan tidak jadi.",
  label,
}: { judul?: string; eyebrow?: string; catatan?: string; label?: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#08130e] px-6 py-9 sm:px-10 text-center">
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[360px] h-[220px] bg-[#229ED9]/25 blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative">
        <p className="text-[11px] tracking-[0.14em] uppercase text-white/45 mb-2">{eyebrow}</p>
        <p className="font-[family-name:var(--font-dm-serif)] text-3xl text-white mb-6">{judul}</p>
        <div className="flex justify-center">
          <TombolTelegram label={label} />
        </div>
        <p className="text-[11.5px] text-white/45 mt-5 max-w-sm mx-auto leading-relaxed">{catatan}</p>
      </div>
    </div>
  );
}
