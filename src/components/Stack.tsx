import type { Metric } from '../types';
import { useLang } from '../i18n';
import { idx } from '../lib/style';
import { CountUp } from './CountUp';

export function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack">
      {items.map((item, i) => (
        <li key={item} style={idx(i)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Metrics({ items }: { items: Metric[] }) {
  const { t } = useLang();
  if (items.length === 0) return null;
  return (
    <ul className="metrics">
      {items.map((m) => (
        <li key={m.value + m.label.en} className="metric">
          <span className="metric__value">
            <CountUp value={m.value} />
          </span>
          <span className="metric__label">{t(m.label)}</span>
        </li>
      ))}
    </ul>
  );
}
