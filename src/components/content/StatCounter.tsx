'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { OBSERVER_OPTIONS, DURATIONS } from '@/lib/animations';

interface StatCounterProps {
  target: number;
  label: string;
  description: string;
}

/**
 * StatCounter — Animated count-up impact number.
 * Matches Stitch proof screen: easeOutQuart easing, 2000ms duration,
 * fires once on first viewport entry, formats with Indian locale.
 */
export default function StatCounter({ target, label, description }: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasCounted, setHasCounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const formatFinal = useCallback((num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M+';
    if (num >= 1000) return Math.floor(num / 1000) + 'K+';
    return num.toLocaleString('en-IN');
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasCounted) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          observer.unobserve(entry.target);

          // Check for reduced motion
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplayValue(formatFinal(target));
            return;
          }

          let startTimestamp: number | null = null;
          const duration = DURATIONS.counterAnimation;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeProgress * target);
            setDisplayValue(current.toLocaleString('en-IN'));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(formatFinal(target));
            }
          };

          requestAnimationFrame(step);
        }
      });
    }, OBSERVER_OPTIONS);

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasCounted, formatFinal]);

  return (
    <div ref={ref} className="border-t pt-6" style={{ borderColor: 'var(--color-alabaster)' }}>
      <div
        className="text-impact-number"
        style={{ color: 'var(--color-primary)' }}
      >
        {displayValue}
      </div>
      <h3
        className="text-label-caps mt-2 tracking-widest"
        style={{ color: 'var(--color-stone)' }}
      >
        {label}
      </h3>
      <p
        className="mt-4 leading-relaxed text-body-md"
        style={{ fontSize: '12px', color: 'var(--color-outline)' }}
      >
        {description}
      </p>
    </div>
  );
}
