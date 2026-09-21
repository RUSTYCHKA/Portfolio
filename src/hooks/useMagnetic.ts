import { useEffect, useRef, type RefObject } from 'react';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const REDUCED = '(prefers-reduced-motion: reduce)';

/** «Магнитная» кнопка: слегка тянется за курсором */
export function useMagnetic<T extends HTMLElement>(strength = 0.3): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia(FINE_POINTER).matches || window.matchMedia(REDUCED).matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [strength]);

  return ref;
}
