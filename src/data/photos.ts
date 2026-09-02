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

export const galleryPhotos: Photo[] = [
  photo(
    'tower-night',
    [1200, 700],
    'A tall communications tower lit red and blue against a deep blue evening sky',
    'Tower at dusk',
  ),
  photo(
    'polaroid-bridge',
    [1200, 700],
    'An instant photograph of a river, a stone bridge and a boat, warm pink in tone',
    'Instant film, river crossing',
  ),
  photo(
    'old-street',
    [1200, 700],
    'A narrow cobbled street between old buildings, people walking away from the camera',
    'Cobbles, late afternoon',
  ),
  photo(
    'boulevard',
    [1200, 700],
    'A wide city boulevard under a bright sky, traffic light in the foreground',
    'Wide street, bright sky',
  ),
  photo(
    'church-square',
    [1200, 700],
    'An ornate iron street lamp in front of a church and a cypress tree',
    'Lamp and church',
  ),
];
