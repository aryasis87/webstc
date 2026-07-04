/**
 * app/ru/layout.tsx — subtree konten bahasa Rusia.
 * Pola sama dengan /en: html lang root tetap "id"; Google mendeteksi bahasa
 * dari konten + hreflang. Script kecil set lang="ru" di klien untuk a11y.
 */

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang='ru';` }} />
      {children}
    </>
  );
}
