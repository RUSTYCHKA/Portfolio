import { useEffect, useRef, type RefObject } from 'react';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const REDUCED = '(prefers-reduced-motion: reduce)';

/**
 * Следит за курсором над элементом и пишет в CSS-переменные:
 *   --mx, --my  — позиция курсора внутри элемента (для подсветки-«прожектора»)
 *   --rx, --ry  — угол наклона (если tilt = true)
 * Ничего не делает на тач-экранах и при prefers-reduced-motion.
 */
export function useCardFx<T extends HTMLElement>(tilt = false): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia(FINE_POINTER).matches || window.matchMedia(REDUCED).matches) return;

    let raf = 0;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
        if (tilt) {
          el.style.setProperty('--ry', `${(x / rect.width - 0.5) * 7}deg`);
          el.style.setProperty('--rx', `${-(y / rect.height - 0.5) * 7}deg`);
        }
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [tilt]);

  return ref;
}
