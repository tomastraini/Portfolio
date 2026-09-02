import { FiArrowDown, FiFileText } from 'react-icons/fi';
import { profile } from '../data/content';

export function Hero() {
  return (
    <section id="top" className="hero rise" aria-labelledby="hero-name">
      <p className="hero__eyebrow">
        <span className="hero__dot" aria-hidden="true" />
        Open to remote and EU relocation
      </p>

      <h1 className="hero__name" id="hero-name">
        {profile.name}
      </h1>
      <p className="hero__title">{profile.title}</p>

      <div className="hero__summary">
        {profile.summary.map((line) => (
          <p key={line.slice(0, 40)}>{line}</p>
        ))}
      </div>

      <div className="hero__actions">
        <a className="btn btn--primary" href={profile.cv} target="_blank" rel="noreferrer">
          <FiFileText aria-hidden="true" />
          Download CV
        </a>
        <a
          className="btn"
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('work')?.scrollIntoView({ block: 'start' });
          }}
        >
          <FiArrowDown aria-hidden="true" />
          See the work
        </a>
      </div>

      <dl className="hero__meta">
        <div>
          <dt style={{ display: 'inline' }}>Based in </dt>
          <dd style={{ display: 'inline', margin: 0 }}>
            <strong>{profile.location}</strong>
          </dd>
        </div>
        <div>
          <dt style={{ display: 'inline' }}>Citizenship </dt>
          <dd style={{ display: 'inline', margin: 0 }}>
            <strong>{profile.citizenship}</strong>
          </dd>
        </div>
        <div>
          <dt style={{ display: 'inline' }}>Languages </dt>
          <dd style={{ display: 'inline', margin: 0 }}>
            <strong>Spanish native · English C2 · German B1</strong>
          </dd>
        </div>
      </dl>
    </section>
  );
}
