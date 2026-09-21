import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';

/** Число «набегает» от нуля, когда попадает на экран. Нечисловые значения (например "ER") выводятся как есть. */
export function CountUp({ value }: { value: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);

  const match = value.match(/^(\D*)(\d+(?:[.,]\d+)?)(\D*)$/);
  const target = match ? parseFloat(match[2].replace(',', '.')) : 0;
  const fraction = match ? match[2].split(/[.,]/)[1] : undefined;
  const decimals = fraction ? fraction.length : 0;
  const separator = match && match[2].includes(',') ? ',' : '.';

  useEffect(() => {
    if (!match || !inView) return;
    if (reduced) {
      setCurrent(target);
      return;
    }
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setCurrent(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduced, target]);

  if (!match) return <span ref={ref}>{value}</span>;

  const shown = current.toFixed(decimals).replace('.', separator);
  return (
    <span ref={ref} aria-label={value} className="count">
      {match[1]}
      {shown}
      {match[3]}
    </span>
  );
}
