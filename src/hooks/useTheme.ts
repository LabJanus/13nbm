'use client';
import { useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const stored = localStorage.getItem('era-theme');
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('era-theme', next);
  }, [theme]);

  return { theme, toggleTheme };
}
