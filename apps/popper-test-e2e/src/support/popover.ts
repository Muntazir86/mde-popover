import { expect, Locator, Page } from '@playwright/test';

export async function openDemo(page: Page, hash = ''): Promise<void> {
  const route = hash ? `/mde-popover/#/${hash}` : '/mde-popover/#/';
  await page.goto(route);
  await expect(page.getByTestId('nav-theme-trigger')).toBeVisible();
}

export function panelWith(page: Page, contentTestId: string): Locator {
  return page.locator('.mde-popover-panel').filter({
    has: page.getByTestId(contentTestId),
  });
}

export async function expectPopoverOpen(
  page: Page,
  contentTestId: string
): Promise<Locator> {
  const panel = panelWith(page, contentTestId);
  await expect(panel).toBeVisible();
  return panel;
}

export async function expectPopoverClosed(
  page: Page,
  contentTestId: string
): Promise<void> {
  await expect(page.getByTestId(contentTestId)).toHaveCount(0);
}

export async function clickOutside(page: Page): Promise<void> {
  const backdrop = page.locator('.cdk-overlay-transparent-backdrop');
  await expect(backdrop).toBeVisible();
  await backdrop.click({ position: { x: 8, y: 8 } });
}

/** Assert the panel sits on one side of the trigger, not merely that a CSS class is set. */
export async function expectPlaced(
  trigger: Locator,
  panel: Locator,
  side: 'above' | 'below' | 'before' | 'after'
): Promise<void> {
  const triggerBox = await trigger.boundingBox();
  const panelBox = await panel.boundingBox();
  expect(triggerBox, 'trigger is on screen').not.toBeNull();
  expect(panelBox, 'popover is on screen').not.toBeNull();
  if (!triggerBox || !panelBox) {
    return;
  }
  const panelMidX = panelBox.x + panelBox.width / 2;
  const panelMidY = panelBox.y + panelBox.height / 2;
  if (side === 'above') {
    expect(panelMidY).toBeLessThan(triggerBox.y);
  } else if (side === 'below') {
    expect(panelMidY).toBeGreaterThan(triggerBox.y + triggerBox.height);
  } else if (side === 'before') {
    expect(panelMidX).toBeLessThan(triggerBox.x);
  } else {
    expect(panelMidX).toBeGreaterThan(triggerBox.x + triggerBox.width);
  }
}

/** Overlapping popovers should stay next to the control that opened them. */
export async function expectNear(trigger: Locator, panel: Locator): Promise<void> {
  const triggerBox = await trigger.boundingBox();
  const panelBox = await panel.boundingBox();
  expect(triggerBox).not.toBeNull();
  expect(panelBox).not.toBeNull();
  if (!triggerBox || !panelBox) {
    return;
  }
  const margin = 160;
  const separated =
    panelBox.x + panelBox.width < triggerBox.x - margin ||
    triggerBox.x + triggerBox.width < panelBox.x - margin ||
    panelBox.y + panelBox.height < triggerBox.y - margin ||
    triggerBox.y + triggerBox.height < panelBox.y - margin;
  expect(separated).toBe(false);
}

/**
 * The arrow is a CSS border triangle. Corner placements (before/after combined
 * with above/below) zero that border, so `exposed` is only true when the
 * popover is aligned to the center of one axis.
 */
export async function expectArrow(
  panel: Locator,
  exposed: boolean
): Promise<void> {
  const arrow = panel.locator('.mde-popover-direction-arrow');
  if (!exposed) {
    await expect(arrow).toHaveCount(0);
    return;
  }
  await expect(arrow).toHaveCount(1);
  const border = await arrow.evaluate((el) => {
    const style = getComputedStyle(el);
    return (
      parseFloat(style.borderTopWidth) +
      parseFloat(style.borderRightWidth) +
      parseFloat(style.borderBottomWidth) +
      parseFloat(style.borderLeftWidth)
    );
  });
  expect(border).toBeGreaterThan(0);
}

export async function expectFocusInside(
  page: Page,
  panel: Locator
): Promise<void> {
  await expect
    .poll(() =>
      panel.evaluate((el) => {
        const active = document.activeElement;
        return !!active && (el === active || el.contains(active));
      })
    )
    .toBe(true);
  void page;
}

export async function naturalWidth(image: Locator): Promise<number> {
  await image.scrollIntoViewIfNeeded();
  return image.evaluate(
    (el: HTMLImageElement) =>
      new Promise<number>((resolve, reject) => {
        if (el.complete && el.naturalWidth > 0) {
          resolve(el.naturalWidth);
          return;
        }
        el.addEventListener('load', () => resolve(el.naturalWidth), {
          once: true,
        });
        el.addEventListener(
          'error',
          () => reject(new Error(`image failed to load: ${el.src}`)),
          { once: true }
        );
      })
  );
}
