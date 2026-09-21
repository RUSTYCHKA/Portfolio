import { useEffect, useRef, useState, type RefObject } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
}

/** Срабатывает один раз, когда элемент впервые появляется на экране */
export function useInView<T extends HTMLElement>(options: Options = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
