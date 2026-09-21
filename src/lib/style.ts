import type { CSSProperties } from 'react';

/** Задержка анимации: style={delay(300)} → --d: 300ms */
export const delay = (ms: number): CSSProperties => ({ '--d': `${ms}ms` } as CSSProperties);

/** Индекс элемента для ступенчатых анимаций: style={idx(2)} → --i: 2 */
export const idx = (i: number): CSSProperties => ({ '--i': i } as CSSProperties);
