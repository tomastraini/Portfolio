import { useEffect, useRef, useState } from 'react';
import { FiArrowDown, FiFileText } from 'react-icons/fi';
import { profile } from '../data/content';
import { heroPhoto } from '../data/photos';
import { useReducedMotion } from '../hooks/useReducedMotion';

const nameWords = profile.name.split(' ');

export function Hero() {
  const reduced = useReducedMotion();
  const bgRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Parallax on the background layer only. One rAF-scheduled write per frame,
  // reading scrollY rather than measuring layout, so nothing thrashes.
  useEffect(() => {
    if (reduced) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = bgRef.current;
        if (!el) return;
        const y = window.scrollY;
        // Stop doing work once the hero is well off screen.
        if (y > window.innerHeight * 1.2) return;
        el.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.08)`;
        el.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <section
      id="top"
      className={`hero${reduced ? ' hero--still' : ''}`}
      aria-labelledby="hero-name"
    >
      <div className="hero__bg" ref={bgRef}>
        <img
          className="hero__lqip"
          src={heroPhoto.lqip}
          alt=""
          aria-hidden="true"
        />
        <img
          className={`hero__img${loaded ? ' is-loaded' : ''}`}
          src={heroPhoto.src}
          srcSet={heroPhoto.srcSet}
          sizes="100vw"
          width={heroPhoto.width}
          height={heroPhoto.height}
          alt={heroPhoto.alt}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner page">
        <p className="hero__eyebrow reveal" style={{ '--i': 0 } as React.CSSProperties}>
          <span className="hero__dot" aria-hidden="true" />
          Open to remote work and relocation inside the EU
        </p>

        <h1 className="hero__name" id="hero-name">
          {nameWords.map((word, i) => (
            <span
              className="hero__word reveal"
              key={word}
              style={{ '--i': i + 1 } as React.CSSProperties}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="hero__title reveal"
          style={{ '--i': nameWords.length + 1 } as React.CSSProperties}
        >
          {profile.title}
        </p>

        <div
          className="hero__summary reveal"
          style={{ '--i': nameWords.length + 2 } as React.CSSProperties}
        >
          {profile.summary.map((line) => (
            <p key={line.slice(0, 40)}>{line}</p>
          ))}
        </div>

        <div
          className="hero__actions reveal"
          style={{ '--i': nameWords.length + 3 } as React.CSSProperties}
        >
          <a
            className="btn btn--primary"
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
          >
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

        <dl
          className="hero__meta reveal"
          style={{ '--i': nameWords.length + 4 } as React.CSSProperties}
        >
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Citizenship</dt>
            <dd>{profile.citizenship}</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>Spanish native, English C2, German B1</dd>
          </div>
        </dl>
      </div>

      <p className="hero__caption" aria-hidden="true">
        {heroPhoto.caption}
      </p>
    </section>
  );
}
