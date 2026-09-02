# Portfolio

Personal site for Tomas Ulises Traini — software engineer working on clinical
research systems. Live at <https://tomastraini.github.io/Portfolio/>.

React 19 + TypeScript on Vite. No UI framework: the design system is about
120 lines of CSS custom properties in `src/styles/global.css`, and every
component composes from those tokens.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173/Portfolio/
```

If `npm install` reports blocked install scripts, approve esbuild's — Vite
needs its platform binary:

```bash
npm install-scripts approve esbuild
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server on the `/Portfolio/` base path |
| `npm run build` | Typecheck, then build into `docs/` for GitHub Pages |
| `npm run preview` | Serve the built output locally |
| `npm run typecheck` | `tsc -b` across app, config and e2e |
| `npm run test:e2e` | Playwright suite (desktop + mobile projects) |
| `npm run test:e2e:ui` | Playwright in watch/UI mode |

First Playwright run needs browsers: `npx playwright install chromium`.

## Layout

```
src/
  data/content.ts     # all site content, typed — the only file to edit for copy changes
  types.ts            # content model
  components/         # presentational, one concern each
  hooks/              # useActiveSection (IntersectionObserver nav highlighting)
  styles/global.css   # design tokens + component styles
e2e/                  # Playwright specs
docs/                 # build output, committed — GitHub Pages source
```

**Content and presentation are separate on purpose.** Updating a job, a project
or a skill means editing `src/data/content.ts` only; no component changes, and
the types stop half-finished edits at compile time.

## Deploying

GitHub Pages serves the `docs/` folder on the default branch.

```bash
npm run build
git add docs && git commit -m "Rebuild site"
git push
```

## Notes

- `ProjectStatus` (`pilot` / `shipped` / `planned` / `stopped`) and each case
  study's `notClaimed` list are load-bearing. Work that has not shipped is
  labelled as such, and the limits are stated rather than omitted.
- No hotlinked external images. The previous version pulled logos from third
  parties and a LinkedIn CDN photo with an expiring token; a Playwright test now
  fails if any `img src` points at an external host.
- `IA_BackEnd/` is a separate FastAPI experiment kept in this repo. It is not
  part of the site build.
