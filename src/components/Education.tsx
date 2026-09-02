import { education, languages } from '../data/content';

export function Education() {
  return (
    <div className="two-col">
      <div>
        {education.map((study) => (
          <article className="study" key={study.institution}>
            <h3 className="study__award">
              {study.award}
              {study.inProgress ? (
                <span className="status status--planned">In progress</span>
              ) : null}
            </h3>
            <p className="study__institution">{study.institution}</p>
            <p className="study__period">{study.period}</p>
            <p className="study__detail">{study.detail}</p>
          </article>
        ))}
      </div>

      <div>
        <h3
          style={{
            fontSize: 'var(--step--1)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            marginBottom: 'var(--space-4)',
          }}
        >
          Languages
        </h3>
        <ul className="langs">
          {languages.map((lang) => (
            <li className="lang" key={lang.name}>
              <span>{lang.name}</span>
              <span className="lang__level">
                {lang.level}
                {lang.note ? (
                  <span className="lang__note"> · {lang.note}</span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
