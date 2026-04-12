'use client';

import { usePathname } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

const LEGAL_ROUTES = new Set([
  '/gizlilik-politikasi',
  '/cerez-politikasi',
  '/kvkk-aydinlatma',
]);

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLegalRoute = LEGAL_ROUTES.has(pathname);

  return (
    <>
      {!isLegalRoute && (
        <>
          <TopBar />
          <Nav />
        </>
      )}

      {children}

      {!isLegalRoute && <Footer />}
    </>
  );
}
