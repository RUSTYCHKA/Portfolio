import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
import { delay } from '../lib/style';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Задержка появления, мс */
  delayMs?: number;
  /** true — анимируется сам блок; false — только помечает контейнер (внутри работают .stagger) */
  self?: boolean;
}

/** Плавное появление блока при прокрутке до него */
export function Reveal({ children, className = '', delayMs = 0, self = true }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const classes = ['io', self ? 'reveal' : '', inView ? 'is-in' : '', className].filter(Boolean).join(' ');
  return (
    <div ref={ref} className={classes} style={delayMs ? delay(delayMs) : undefined}>
      {children}
    </div>
  );
}
