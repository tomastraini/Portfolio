import { useEffect, useState } from 'react';
import type { SectionId } from '../types';

/**
 * Tracks which section is currently in view so the nav can mark it.
 * Uses IntersectionObserver rather than a scroll listener, so no layout
 * thrashing, and it survives the sticky-nav offset via rootMargin.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId {
  const [active, setActive] = useState<SectionId>(ids[0] ?? 'top');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The topmost intersecting section wins, so scrolling up and down
        // both settle on the section actually filling the viewport.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const first = visible[0];
        if (first) setActive(first.target.id as SectionId);
      },
      {
        rootMargin: '-80px 0px -55% 0px',
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
