import type { CaseStudy, ProjectStatus } from '../types';

const statusLabel: Record<ProjectStatus, string> = {
  pilot: 'In pilot',
  shipped: 'Shipped',
  planned: 'Planned',
  stopped: 'Stopped',
};

interface CaseStudyCardProps {
  study: CaseStudy;
  flagship?: boolean;
}

export function CaseStudyCard({ study, flagship = false }: CaseStudyCardProps) {
  return (
    <article
      className={flagship ? 'case case--flagship' : 'case'}
      aria-labelledby={`${study.slug}-name`}
    >
      <div className="case__head">
        <div className="case__titles">
          <div>
            <h3 className="case__name" id={`${study.slug}-name`}>
              {study.name}
            </h3>
            <p className="case__org">{study.org}</p>
          </div>
          <span
            className={`status status--${study.status}`}
            title={study.statusNote}
          >
            {statusLabel[study.status]}
          </span>
        </div>

        <p className="case__tagline">{study.tagline}</p>
        <p className="case__org">{study.statusNote}</p>

        <ul className="chips" aria-label={`${study.name} stack`}>
          {study.stack.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="case__body">
        {study.sections.map((section) => (
          <div className="case__section" key={section.heading}>
            <h4>{section.heading}</h4>
            <p>{section.body}</p>
          </div>
        ))}
      </div>

      <div className="case__limits">
        <h4>What this does not claim</h4>
        <ul>
          {study.notClaimed.map((limit) => (
            <li key={limit.slice(0, 40)}>{limit}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
