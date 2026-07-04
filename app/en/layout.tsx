/**
 * app/en/layout.tsx
 *
 * Layout subtree /en — konten berbahasa Inggris.
 * <html lang> di-set "id" oleh root layout; Google mendeteksi bahasa dari
 * KONTEN (bukan atribut lang), dan hreflang per halaman yang memetakan
 * pasangan ID↔EN. Script kecil di bawah menyetel lang="en" di sisi klien
 * untuk aksesibilitas (screen reader, translate prompt browser).
 */

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='en';` }}
      />
      {children}
    </>
  );
}
