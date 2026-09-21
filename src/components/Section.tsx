import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container section__inner">
        <Reveal className="section__title">
          <h2 id={`${id}-title`}>{title}</h2>
        </Reveal>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}
