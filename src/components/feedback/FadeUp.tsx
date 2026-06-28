'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';
import { OBSERVER_OPTIONS } from '@/lib/animations';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

/**
 * Wraps children in a fade-up-on-scroll animation container.
 * Uses IntersectionObserver to add 'visible' class on first entry.
 * Respects prefers-reduced-motion automatically via CSS.
 */
export default function FadeUp({ children, className = '', delay, style }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, OBSERVER_OPTIONS);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const staggerClass = delay
    ? delay <= 120 ? 'stagger-1'
    : delay <= 240 ? 'stagger-2'
    : delay <= 360 ? 'stagger-3'
    : 'stagger-4'
    : '';

  return (
    <div ref={ref} className={`fade-up ${staggerClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
