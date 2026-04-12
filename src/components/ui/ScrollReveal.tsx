'use client';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export function ScrollReveal({ children, delay, className = '' }: Props) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  const delayClass = delay ? ` d${delay}` : '';

  return (
    <div
      ref={ref}
      className={`sr${isVisible ? ' on' : ''}${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
