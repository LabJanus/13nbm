'use client';

import { useState, useCallback, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

const LEGAL_ROUTES = new Set([
  '/gizlilik-politikasi',
  '/cerez-politikasi',
  '/kvkk-aydinlatma',
]);

const STORAGE_KEY = 'era-topbar-dismissed';

function getTopBarSnapshot() {
  if (typeof window === 'undefined') return false;
  return !sessionStorage.getItem(STORAGE_KEY);
}

function getTopBarServerSnapshot() {
  return false;
}

function subscribeTopBar(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLegalRoute = LEGAL_ROUTES.has(pathname);
  const topBarVisible = useSyncExternalStore(subscribeTopBar, getTopBarSnapshot, getTopBarServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  const dismissTopBar = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  }, []);

  const showTopBar = topBarVisible && !dismissed;

  return (
    <div data-topbar={showTopBar ? 'visible' : 'hidden'}>
      {!isLegalRoute && (
        <>
          {showTopBar && <TopBar onDismiss={dismissTopBar} />}
          <Nav />
        </>
      )}

      {children}

      {!isLegalRoute && <Footer />}
    </div>
  );
}
