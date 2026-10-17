import { expect, Locator, Page, test } from '@playwright/test';
import { openDemo } from './support/popover';

/**
 * Every row of the list page opens ONE shared hover popover (center, no overlap). These tests guard
 * against the popover flipping to the other side of its trigger when another row, or a re-created
 * row, builds a new overlay for it, and check that a gap (mdePopoverOffsetY) stays a gap, also on a
 * fallback.
 */

type Side = 'below' | 'above';
type Block = 'start' | 'center' | 'end';

/** Default mdePopoverArrowWidth. */
const ARROW = 8;

function row(page: Page, id: number): Locator {
  return page.getByTestId(`list-item-${id}`);
}

async function visibleIds(page: Page): Promise<number[]> {
  const ids = await page
    .locator('[data-testid^="list-item-"]')
    .evaluateAll((rows) => rows.map((r) => Number(r.getAttribute('data-testid')?.split('-').pop())));
  return ids;
}

/**
 * Hover the row near its left edge, the way a pointer moving down the list would: the open panel
 * is centered under the previous row and covers the middle of the next rows. With a `block`, the
 * pointer first leaves (closing any popover) and the row is scrolled to that edge of the viewport.
 */
async function hoverRow(page: Page, id: number, block: Block | null): Promise<Locator> {
  const target = row(page, id);
  if (block) {
    await leave(page);
    await target.evaluate((el, b) => el.scrollIntoView({ block: b, behavior: 'instant' }), block);
  }
  const box = (await target.boundingBox())!;
  await page.mouse.move(box.x + 24, box.y + box.height / 2, { steps: 4 });
  return target;
}

/**
 * Hover a row and assert the shared popover shows that row's product exactly `gap` pixels from the
 * row, centered, never overlapping it. It must be on the requested `side` whenever that side has
 * room for the panel; only without room may it flip to the other side. Returns the side it used.
 */
async function expectDetails(
  page: Page,
  id: number,
  side: Side,
  gap: number,
  block: Block | null = 'center'
): Promise<Side> {
  const target = await hoverRow(page, id, block);
  const name = (await target.locator('.name strong').innerText()).trim();
  const panel = page.locator('.mde-popover-panel').filter({
    has: page.getByTestId('list-popover-name').getByText(name, { exact: true }),
  });
  await expect(panel, `popover for "${name}"`).toBeVisible();
  await expect(panel.getByTestId('list-popover-price')).toHaveText(
    (await target.locator('.price').innerText()).trim()
  );

  const viewport = page.viewportSize()!;
  const other: Side = side === 'below' ? 'above' : 'below';
  let used: Side = side;
  // Poll so the enter animation and any pending close of the previous row can finish.
  await expect
    .poll(
      async () => {
        const r = (await target.boundingBox())!;
        // Measure only once the scale-in animation has finished.
        const animating = await panel
          .evaluate((el) => el.getAnimations({ subtree: true }).length > 0)
          .catch(() => true);
        const p = await panel.boundingBox();
        if (!p || animating) {
          return 'no panel yet';
        }
        const content = await panel.locator('.mde-popover-content').boundingBox();
        if (!content) {
          return 'no content';
        }
        // Without overlap the arrow sits inside the panel: on the side facing the trigger when the
        // panel is below it, tucked under the content (16px shorter panel) when it is above.
        const height = side === 'below' ? content.height : content.height - ARROW * 2;
        const room = { below: viewport.height - (r.y + r.height), above: r.y };
        const expected = room[side] >= height + gap ? side : other;
        const below = Math.round(p.y - (r.y + r.height));
        const above = Math.round(r.y - (p.y + p.height));
        const centered = Math.abs(p.x + p.width / 2 - (r.x + r.width / 2)) <= 1;
        const actual = below >= 0 ? `below gap=${below}` : above >= 0 ? `above gap=${above}` : `overlaps the row (${below}/${above})`;
        used = below >= 0 ? 'below' : 'above';
        return `${actual} centered=${centered}; expected ${expected} gap=${gap}`;
      },
      { message: `"${name}" (row ${id}, ${block ? `scrolled to ${block}` : 'moved to directly'})`, timeout: 4000 }
    )
    .toMatch(/^(below|above) gap=(\d+) centered=true; expected \1 gap=\2$/);
  await expect(page.locator('.mde-popover-panel'), 'only one popover is open').toHaveCount(1);
  return used;
}

async function setGap(page: Page, gap: number): Promise<void> {
  await page.getByTestId('list-gap').fill(String(gap));
  await page.getByTestId('list-gap').blur();
}

async function leave(page: Page): Promise<void> {
  await page.mouse.move(2, 2);
  await expect(page.locator('.mde-popover-panel')).toHaveCount(0);
}

test.describe('list page with one shared hover popover', () => {
  test.beforeEach(async ({ page }) => {
    await openDemo(page);
    await page.getByTestId('home-list-link').click();
    await expect(page).toHaveURL(/#\/examples\/list$/);
    await expect(page.getByTestId('list-heading')).toHaveText('Product list');
    await expect(page.locator('[data-testid^="list-item-"]')).toHaveCount(20);
  });

  test('every row opens its details below with the gap, in sequence and repeatedly', async ({
    page,
  }) => {
    const ids = await visibleIds(page);
    for (let pass = 0; pass < 2; pass++) {
      const sides: Side[] = [];
      for (const id of ids) {
        sides.push(await expectDetails(page, id, 'below', 8));
      }
      // Only the last rows, which cannot scroll up to the middle, lack room below.
      expect(sides.slice(0, 15)).toEqual(Array(15).fill('below'));
    }
    await leave(page);
  });

  test('moving straight from row to row hands the shared popover over', async ({ page }) => {
    // Put row 1 at the top so rows 1-4 are on screen with room below each of them, then go down
    // and back up without leaving the list.
    await row(page, 1).evaluate((el) => el.scrollIntoView({ block: 'start', behavior: 'instant' }));
    for (const id of [1, 2, 3, 4, 3, 2, 1, 2, 3]) {
      await expectDetails(page, id, 'below', 8, null);
    }
    await leave(page);
  });

  test('re-created rows keep the side after filtering and shuffling', async ({ page }) => {
    await expectDetails(page, 1, 'below', 8);
    await expectDetails(page, 2, 'below', 8);
    await leave(page);

    for (const category of ['Home', 'Audio', 'Office', 'All', 'Wearables', 'All']) {
      await page.getByTestId(`list-filter-${category}`).click();
      const ids = await visibleIds(page);
      expect(ids.length).toBeGreaterThan(0);
      await expect(page.getByTestId('list-count')).toHaveText(`${ids.length} of 20 products`);
      for (const id of ids.slice(0, 6)) {
        await expectDetails(page, id, 'below', 8);
      }
      await leave(page);
    }

    for (let round = 0; round < 3; round++) {
      const before = await visibleIds(page);
      await page.getByTestId('list-shuffle').click();
      const after = await visibleIds(page);
      expect(after).not.toEqual(before);
      for (const id of after.slice(0, 5)) {
        await expectDetails(page, id, 'below', 8);
      }
      await leave(page);
    }
  });

  test('position and gap changes re-create every trigger and are honoured', async ({ page }) => {
    for (const gap of [0, 16, 24]) {
      await setGap(page, gap);
      await expect(page.getByTestId('list-binding')).toContainText(`[mdePopoverOffsetY]="${gap}"`);
      for (const id of [1, 2, 7, 15, 20]) {
        await expectDetails(page, id, 'below', gap);
      }
      await leave(page);
    }

    await page.getByTestId('list-position-above').click();
    await setGap(page, 12);
    await expect(page.getByTestId('list-binding')).toContainText('[mdePopoverOffsetY]="-12"');
    for (const id of [1, 2, 5, 12, 19, 20, 2, 1]) {
      await expectDetails(page, id, 'above', 12);
    }
    await leave(page);

    await page.getByTestId('list-reset').click();
    await expectDetails(page, 1, 'below', 8);
    await expectDetails(page, 2, 'below', 8);
    await leave(page);
  });

  test('measures the panel for the requested side, also right after a flip', async ({ page }) => {
    // Opened below, the panel is ARROW * 2 taller than above (the arrow sits on top of the
    // content). Leave room below for the short panel but not the tall one: the overlay must
    // measure the tall one (below) and flip, instead of measuring the size it last had above.
    await expectDetails(page, 10, 'below', 8);
    const tall = (await page.locator('.mde-popover-panel').boundingBox())!.height;
    await leave(page);
    expect(await expectDetails(page, 10, 'below', 8, 'end')).toBe('above');
    await leave(page);

    const viewport = page.viewportSize()!;
    const target = row(page, 10);
    await target.evaluate((el) => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
    const r = (await target.boundingBox())!;
    const room = tall + 8 - ARROW; // fits tall - 2 * ARROW + 8, not tall + 8
    await page.evaluate((dy) => window.scrollBy({ top: dy, behavior: 'instant' }), r.y + r.height - (viewport.height - room));
    const placed = (await target.boundingBox())!;
    expect(viewport.height - (placed.y + placed.height)).toBeCloseTo(room, 0);
    expect(await expectDetails(page, 10, 'below', 8, null)).toBe('above');
    const p = (await page.locator('.mde-popover-panel').boundingBox())!;
    expect(p.y).toBeGreaterThanOrEqual(0);
    expect(p.y + p.height).toBeLessThanOrEqual(viewport.height);
    await leave(page);
  });

  test('falls back to the other side only when the requested side has no room', async ({
    page,
  }) => {
    await setGap(page, 10);
    // At the bottom edge of the viewport there is no room below: flip above, gap mirrored.
    for (const id of [6, 12, 15]) {
      expect(await expectDetails(page, id, 'below', 10, 'end')).toBe('above');
      // With room again, the same row opens below.
      expect(await expectDetails(page, id, 'below', 10, 'center')).toBe('below');
    }
    await leave(page);

    await page.getByTestId('list-position-above').click();
    // At the top edge there is no room above: flip below, gap mirrored.
    for (const id of [3, 6, 9]) {
      expect(await expectDetails(page, id, 'above', 10, 'start')).toBe('below');
      expect(await expectDetails(page, id, 'above', 10, 'center')).toBe('above');
    }
    await leave(page);
  });
});
