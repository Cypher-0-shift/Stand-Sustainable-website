import { useMemo } from 'react';

interface StatCounterProps {
  target: number;
  label: string;
  description: string;
}

/**
 * StatCounter — Animated count-up impact number using pure CSS.
 * Removes all client-side JS for the animation.
 */
export default function StatCounter({ target, label, description }: StatCounterProps) {
  const { suffix, baseTarget } = useMemo(() => {
    if (target >= 1000000) {
      return { suffix: "M+", baseTarget: target / 1000000 };
    }
    if (target >= 1000) {
      return { suffix: "K+", baseTarget: Math.floor(target / 1000) };
    }
    return { suffix: "", baseTarget: target };
  }, [target]);

  return (
    <div className="border-t pt-6" style={{ borderColor: 'var(--color-alabaster)' }}>
      <div
        className="text-impact-number animate-counter"
        style={{ color: 'var(--color-primary)', '--target-num': baseTarget, '--suffix': `"${suffix}"` } as React.CSSProperties}
      >
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
