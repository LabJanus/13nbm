import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import Script from 'next/script';
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
  description:
    'Perakendede çok kanallı dönem bitti, bütünleşik dönem başladı. Nebim ERA ile fiziksel mağaza, e-ticaret ve pazaryeri süreçlerinizi tek platformdan yönetin.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const ERA_THEME_BOOTSTRAP = `
(() => {
  const themeKey = 'nebim-era-theme';
  const bgKey = 'nebim-era-bg-index';
  const sharedBackgroundRoutes = new Set([
    '/',
    '/features',
    '/paas',
    '/paas-sss',
    '/certified',
    '/paket-1',
    '/paket-2',
    '/paket-3',
    '/paket-custom',
    '/gizlilik-politikasi',
    '/kvkk-aydinlatma',
    '/cerez-politikasi'
  ]);
  const backgrounds = [
    '/assets/hero-bg-5-4y-ulTK6.jpg',
    '/assets/hero-bg-4-C8D05Lrt.jpg',
    '/assets/hero-bg-6-aYEJ3kJ3.jpg',
    '/assets/hero-bg-7-VK1-adSZ.jpg',
    '/assets/hero-bg-8-COkiJGCV.jpg',
    '/assets/hero-bg-9-CpY9ERRj.jpg',
    '/assets/hero-bg-10-BEjcwZQ5.jpg',
    '/assets/hero-bg-11-BsKdDTyG.jpg',
    '/assets/hero-bg-3-DY7nlTUD.jpg'
  ];
  const root = document.documentElement;

  const storedTheme = (() => {
    try {
      return localStorage.getItem(themeKey);
    } catch {
      return null;
    }
  })();

  const storedBg = (() => {
    try {
      return localStorage.getItem(bgKey);
    } catch {
      return null;
    }
  })();

  const theme = storedTheme === 'light' ? 'light' : 'dark';
  const rawIndex = Number.parseInt(storedBg ?? '0', 10);
  const index = Number.isFinite(rawIndex) && rawIndex >= 0 ? rawIndex % backgrounds.length : 0;
  const pathname = window.location.pathname.replace(/\\/+$/, '') || '/';
  const backgroundScope = pathname === '/'
    ? 'hero'
    : sharedBackgroundRoutes.has(pathname)
      ? 'header-stage'
      : 'none';

  window.__eraTheme = theme;
  window.__eraBgIndex = index;
  window.__eraBackgrounds = backgrounds;
  root.setAttribute('data-theme', theme);
  root.setAttribute('data-era-bg-index', String(index));
  root.setAttribute('data-era-bg-scope', backgroundScope);
  root.style.setProperty('--era-site-bg', "url('" + backgrounds[index] + "')");

  if (sharedBackgroundRoutes.has(pathname)) {
    root.classList.add('era-shared-background');
  } else {
    root.classList.remove('era-shared-background');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-theme="dark"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Script id="era-theme-bootstrap" strategy="beforeInteractive">
          {ERA_THEME_BOOTSTRAP}
        </Script>
        {children}
      </body>
    </html>
  );
}
