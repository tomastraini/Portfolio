import type { ReactNode } from 'react';
import type { SectionId } from '../types';

interface SectionProps {
  id: SectionId;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

export function Section({ id, index, title, lede, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section__head">
        <span className="section__index" aria-hidden="true">
          {index}
        </span>
        <h2 className="section__title" id={`${id}-title`}>
          {title}
        </h2>
        {lede ? <p className="section__lede">{lede}</p> : null}
      </div>
      {children}
    </section>
  );
}
