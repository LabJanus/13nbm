'use client';
import { useState, useCallback, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light';

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('era-theme');
  return stored === 'light' ? 'light' : 'dark';
}

function getServerSnapshot(): Theme {
  return 'dark';
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot);
  const [, forceUpdate] = useState(0);

  const toggleTheme = useCallback(() => {
    const next: Theme = getThemeSnapshot() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('era-theme', next);
    document.documentElement.setAttribute('data-theme', next);
    forceUpdate(n => n + 1);
  }, []);

  // Sync DOM attribute
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  return { theme, toggleTheme, mounted: typeof window !== 'undefined' };
}
