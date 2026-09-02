import { useEffect, useRef, useState } from 'react';
import { galleryPhotos } from '../data/photos';
import type { Photo } from '../types';

function Frame({ photo, index }: { photo: Photo; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="frame" style={{ '--i': index } as React.CSSProperties}>
      <div className="frame__media">
        <img className="frame__lqip" src={photo.lqip} alt="" aria-hidden="true" />
        <img
          className={`frame__img${loaded ? ' is-loaded' : ''}`}
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="(min-width: 900px) 20vw, 60vw"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export function PhotoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  // Stagger the frames in the first time the strip comes into view, then stop
  // observing. Repeating the animation on every pass is a nuisance to read past.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -15% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`strip${seen ? ' is-in' : ''}`} ref={ref}>
      {galleryPhotos.map((p, i) => (
        <Frame photo={p} index={i} key={p.name} />
      ))}
    </div>
  );
}
