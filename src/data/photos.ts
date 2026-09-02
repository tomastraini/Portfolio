import manifest from './photo-manifest.json';
import type { Photo } from '../types';

/**
 * Photographs from a trip through Europe in July 2026, used as texture rather
 * than as subject matter. Originals were 13 MB phone files; these are re-encoded
 * to WebP through a canvas, which also drops the EXIF block and with it the GPS
 * coordinates the phone wrote into every frame.
 *
 * Captions are deliberately non-specific. Replace them with real place names
 * once confirmed rather than guessing from the architecture.
 */

type ManifestEntry = { name: string; w: number; h: number; lqip: string };
const byName = new Map<string, ManifestEntry>(
  (manifest as ManifestEntry[]).map((m) => [m.name, m]),
);

function photo(
  name: string,
  widths: number[],
  alt: string,
  caption: string,
): Photo {
  const m = byName.get(name);
  if (!m) throw new Error(`No manifest entry for photo "${name}"`);
  const base = import.meta.env.BASE_URL;
  return {
    name,
    alt,
    caption,
    width: m.w,
    height: m.h,
    lqip: m.lqip,
    src: `${base}img/${name}-${widths[0]}.webp`,
    srcSet: widths
      .map((w) => `${base}img/${name}-${w}.webp ${w}w`)
      .join(', '),
  };
}

export const heroPhoto = photo(
  'hero-city-lights',
  [1920, 1280, 800],
  'City lights spread out far below, seen from a plane at night',
  'Somewhere over Europe, after dark',
);

