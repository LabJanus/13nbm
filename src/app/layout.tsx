import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { LayoutShell } from '@/components/layout/LayoutShell';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nebim ERA — Bütünleşik Perakende Ticaretinin Geleceği',
  description: 'Perakendede çok kanallı dönem bitti, bütünleşik dönem başladı. Nebim ERA ile fiziksel mağaza, e-ticaret ve pazaryeri süreçlerinizi tek platformdan yönetin.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-theme="dark" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
