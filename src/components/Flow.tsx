import type { CSSProperties } from 'react';
import { useInView } from '../hooks/useInView';
import { idx } from '../lib/style';

interface FlowProps {
  nodes: string[];
  /** row — горизонтальная цепочка на широких экранах; stack — всегда вертикальная */
  variant?: 'row' | 'stack';
  /** Появление при загрузке страницы (для hero). Иначе — появление при прокрутке */
  animate?: boolean;
  /** Бесконечная «пульсация»: по цепочке бежит импульс (рассчитано на 6 шагов) */
  loop?: boolean;
  /** Задержка старта для animate, мс */
  baseDelay?: number;
  label?: string;
}

export function Flow({
  nodes,
  variant = 'stack',
  animate = false,
  loop = false,
  baseDelay = 200,
  label,
}: FlowProps) {
  const [ref, inView] = useInView<HTMLOListElement>({ threshold: 0.25 });

  const className = [
    'flow',
    `flow--${variant}`,
    animate ? 'flow--animate' : 'flow--reveal',
    loop ? 'flow--loop' : '',
    inView ? 'is-in' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ol
      ref={ref}
      className={className}
      aria-label={label}
      style={{ '--n': nodes.length, '--base': `${baseDelay}ms` } as CSSProperties}
    >
      {nodes.map((node, i) => (
        <li key={`${node}-${i}`} style={idx(i)}>
          {node}
        </li>
      ))}
    </ol>
  );
}
