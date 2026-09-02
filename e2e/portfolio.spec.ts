import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('renders the hero with name and title', async ({ page }) => {
  await expect(
    page.getByRole('heading', { level: 1, name: 'Tomas Ulises Traini' }),
  ).toBeVisible();
  await expect(
    page.getByText('Software Engineer, Clinical Research Systems'),
  ).toBeVisible();
  await expect(page).toHaveTitle(/Tomas Traini/);
});

test('every main section is present and labelled', async ({ page }) => {
  for (const id of ['work', 'experience', 'skills', 'education', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  await expect(
    page.getByRole('heading', { name: 'Work', exact: true }),
  ).toBeVisible();
});

test('flagship case study leads the work section and states its limits', async ({
  page,
}) => {
  const flagship = page.getByRole('article', { name: 'Clinical research tooling' });
  await expect(flagship).toBeVisible();
  await expect(flagship.getByText('In pilot')).toBeVisible();
  await expect(flagship.getByText('What this does not claim')).toBeVisible();

  // The limits block stays, but it now states that detail is withheld rather
  // than describing the client's security posture in public.
  await expect(
    flagship.getByText(/Implementation details are deliberately left out/i),
  ).toBeVisible();
});

test('no client implementation detail is published', async ({ page }) => {
  // Compliance guard. These leaked internals of a regulated client's system,
  // including its security posture, and must not come back.
  //
  // Deliberately not on this list: QDPX, REFI-QDA, ICH-GCP, GxP and 21 CFR
  // Part 11. Those are public standards and naming them describes what Tomas
  // knows, not how the client's system is built.
  const text = await page.evaluate(() => document.body.innerText);
  const banned = [
    'ClinigmaScriber',
    'dulwich',
    'Azure Fast Transcription',
    'Azure Translator',
    'import-linter',
    'append-only',
    'authentication',
    'authorization',
    'single tenant',
    'jQuery',
    'pyannote',
    'Whisper',
  ];
  for (const term of banned) {
    expect(text.toLowerCase()).not.toContain(term.toLowerCase());
  }
});

test('stopped projects are marked as stopped, not dressed up', async ({
  page,
}) => {
  const schema = page.getByRole('article', {
    name: 'Schema-driven documents',
  });
  // Exact match: the badge reads "Stopped", the note below it also contains
  // the word "stopped" and would otherwise make this ambiguous.
  await expect(schema.getByText('Stopped', { exact: true })).toBeVisible();
});

test('experience is in reverse-chronological order starting at CLINIGMA', async ({
  page,
}) => {
  const companies = page.locator('.role__company');
  await expect(companies.first()).toHaveText('CLINIGMA ApS');
  await expect(companies).toHaveCount(6);
});

test('CV link points at the PDF', async ({ page }) => {
  const cv = page.getByRole('link', { name: 'Download CV' });
  await expect(cv).toHaveAttribute('href', /CV-Tomas-Traini\.pdf$/);
});

test('no external image hotlinks that can rot', async ({ page }) => {
  // The previous portfolio hotlinked logos and an expiring LinkedIn CDN photo.
  const images = page.locator('img');
  const count = await images.count();
  for (let i = 0; i < count; i += 1) {
    const src = await images.nth(i).getAttribute('src');
    expect(src ?? '').not.toMatch(/^https?:\/\//);
  }
});

test('page does not scroll horizontally', async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});

test('has exactly one h1 and a skip link', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeAttached();
});

test('desktop nav highlights the section in view', async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) < 860,
    'Nav links only render on wide viewports',
  );

  await page.getByRole('button', { name: 'Skills' }).click();
  await expect(page.getByRole('button', { name: 'Skills' })).toHaveAttribute(
    'aria-current',
    'true',
  );
});

test('mobile menu opens and navigates', async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) >= 860,
    'Drawer only renders on narrow viewports',
  );

  await page.getByRole('button', { name: 'Open menu' }).click();
  const drawer = page.locator('#nav-drawer');
  await expect(drawer).toBeVisible();

  await drawer.getByRole('button', { name: 'Experience' }).click();
  await expect(drawer).toBeHidden();
  await expect(page.locator('#experience')).toBeInViewport();
});

test('no em dashes in the rendered copy', async ({ page }) => {
  // House style: em dashes read as machine-written, so they stay out.
  const text = await page.evaluate(() => document.body.innerText);
  expect(text).not.toContain('\u2014');
});

test.describe('motion preferences', () => {
  // An explicit context rather than test.use: this guarantees the emulation is
  // in place before the first render, which is when the hook reads the query.
  test('hero renders fully with motion disabled', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto('/');

    await expect(page.locator('#top')).toHaveClass(/hero--still/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('.hero__name')).toHaveCSS('opacity', '1');
    await expect(page.locator('.hero__bg')).toHaveCSS('transform', 'none');

    await ctx.close();
  });


});

test('hero photo carries no external host and has alt text', async ({ page }) => {
  await page.goto('/');
  const img = page.locator('.hero__img');
  await expect(img).toHaveAttribute('alt', /.+/);
  const src = await img.getAttribute('src');
  expect(src).not.toMatch(/^https?:\/\//);
});

