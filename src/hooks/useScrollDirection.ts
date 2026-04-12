'use client';
import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const accum = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;

      setIsScrolled(y > 10);
      setIsAtTop(y <= 10);

      if (delta > 0) {
        accum.current += delta;
        if (accum.current > 75) setIsHidden(true);
      } else {
        accum.current = 0;
        setIsHidden(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { isHidden, isScrolled, isAtTop };
}
