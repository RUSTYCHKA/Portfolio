import { skillGroups } from '../data/content';

const ROW_A = [...skillGroups[0].items, ...skillGroups[1].items, ...skillGroups[2].items];
const ROW_B = [...skillGroups[4].items, ...skillGroups[3].items];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className={reverse ? 'marquee marquee--rev' : 'marquee'}>
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee__group">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/** Декоративная бегущая строка со стеком (список навыков ниже дублирует её для читалок экрана) */
export function Marquee() {
  return (
    <div className="marquees" aria-hidden="true">
      <Row items={ROW_A} />
      <Row items={ROW_B} reverse />
    </div>
  );
}
