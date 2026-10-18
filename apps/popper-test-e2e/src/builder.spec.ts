import { expect, test } from '@playwright/test';
import {
  expectArrow,
  clickOutside,
  expectPlaced,
  expectPopoverClosed,
  expectPopoverOpen,
  openDemo,
} from './support/popover';

const CONTENT = 'builder-popover-content';

async function choose(page: import('@playwright/test').Page, testId: string, option: string) {
  await page.getByTestId(testId).click();
  await page.getByRole('option', { name: option, exact: true }).click();
}

test.describe('builder playground', () => {
  test('opens and closes with the default click config', async ({ page }) => {
    await openDemo(page, 'examples/builder');
    await expect(page).toHaveURL(/#\/examples\/builder$/);
    await expect(page.getByTestId('builder-heading')).toHaveText('Popover playground');

    const trigger = page.getByTestId('builder-trigger');
    await expect(trigger).toHaveText('Click me');
    await trigger.click();
    const panel = await expectPopoverOpen(page, CONTENT);
    await expectPlaced(trigger, panel, 'below');

    await panel.getByText('Hello from mde-popover').click();
    await expectPopoverClosed(page, CONTENT);

    await trigger.click();
    await expectPopoverOpen(page, CONTENT);
    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, CONTENT);

    await trigger.click();
    await expectPopoverOpen(page, CONTENT);
    await clickOutside(page);
    await expectPopoverClosed(page, CONTENT);
  });

  test('controls change real behavior and the snippet', async ({ page }) => {
    await openDemo(page, 'examples/builder');
    const trigger = page.getByTestId('builder-trigger');
    const snippet = page.getByTestId('builder-snippet');

    // positionY above
    await choose(page, 'builder-position-y', 'above');
    await expect(snippet).toContainText('mdePopoverPositionY="above"');
    await trigger.click();
    const panel = await expectPopoverOpen(page, CONTENT);
    await expectPlaced(trigger, panel, 'above');
    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, CONTENT);

    // closeOnClick off keeps it open on content click
    await page.getByTestId('builder-close-on-click').getByRole('switch').click();
    await expect(snippet).toContainText('[mdePopoverCloseOnClick]="false"');
    await trigger.click();
    const sticky = await expectPopoverOpen(page, CONTENT);
    await sticky.getByText('Hello from mde-popover').click();
    await expect(sticky).toBeVisible();
    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, CONTENT);

    // hover mode
    await choose(page, 'builder-trigger-on', 'hover');
    await expect(trigger).toHaveText('Hover me');
    await trigger.hover();
    await expectPopoverOpen(page, CONTENT);
    await page.mouse.move(2, 2);
    await expectPopoverClosed(page, CONTENT);

    // disabled trigger
    await page.getByTestId('builder-disable-trigger').getByRole('switch').click();
    await expect(trigger).toHaveText('Disabled');

    await page.getByTestId('builder-reset').click();
    await expect(trigger).toHaveText('Click me');
    await expect(snippet).not.toContainText('mdePopoverPositionY');
  });

  test('overlap removes the arrow and its padding at a center position', async ({ page }) => {
    await openDemo(page, 'examples/builder');
    const trigger = page.getByTestId('builder-trigger');
    const measure = async (arrow: boolean) => {
      await trigger.click();
      const panel = await expectPopoverOpen(page, CONTENT);
      await expectArrow(panel, arrow);
      // The panel scales in; measure it once the enter animation has finished.
      await expect
        .poll(() => panel.evaluate((el) => el.getAnimations({ subtree: true }).length))
        .toBe(0);
      const box = await panel.boundingBox();
      await page.getByTestId('builder-popover-close').click();
      await expectPopoverClosed(page, CONTENT);
      return box!;
    };
    // Default playground position: center / below. Both panels open right below the trigger;
    // without overlap the arrow adds its width as padding on every side.
    const apart = await measure(true);
    await page.getByTestId('builder-overlap').getByRole('switch').click();
    await expect(page.getByTestId('builder-snippet')).not.toContainText('mdePopoverOverlapTrigger');
    const overlapped = await measure(false);
    const below = (await trigger.boundingBox())!;
    expect(Math.round(apart.y)).toBe(Math.round(below.y + below.height));
    expect(Math.round(overlapped.y)).toBe(Math.round(below.y + below.height));
    expect(Math.round(apart.height - overlapped.height)).toBe(16);
    expect(Math.round(apart.width - overlapped.width)).toBe(16);
  });

  test('keeps the requested side after the trigger is re-created', async ({ page }) => {
    await openDemo(page, 'examples/builder');
    const trigger = page.getByTestId('builder-trigger');
    // Default playground position: center / below. Each control change re-creates the trigger,
    // which builds a new overlay for the same popover.
    for (const offsetY of ['0', '20', '0']) {
      await page.getByTestId('builder-offset-y').fill(offsetY);
      await trigger.click();
      const panel = await expectPopoverOpen(page, CONTENT);
      await expectPlaced(trigger, panel, 'below');
      // Poll so the enter animation can finish before measuring the gap.
      await expect
        .poll(async () => {
          const t = (await trigger.boundingBox())!;
          const p = (await panel.boundingBox())!;
          return Math.round(p.y - (t.y + t.height));
        })
        .toBe(Number(offsetY));
      await page.getByTestId('builder-popover-close').click();
      await expectPopoverClosed(page, CONTENT);
    }
  });

  test('arrow is visible and follows width and color at a center position', async ({ page }) => {
    await openDemo(page, 'examples/builder');
    const trigger = page.getByTestId('builder-trigger');
    const arrow = page.locator('.mde-popover-direction-arrow');
    await expect(page.getByTestId('builder-arrow-width')).toBeEnabled();
    await trigger.click();
    await expectPopoverOpen(page, CONTENT);
    await expect(arrow).toHaveCSS('border-bottom-width', '8px');
    await page.getByTestId('builder-popover-close').click();
    await expectPopoverClosed(page, CONTENT);

    await page.getByTestId('builder-arrow-width').fill('14');
    await page.getByTestId('builder-arrow-color').fill('rgb(255, 0, 0)');
    await expect(page.getByTestId('builder-snippet')).toContainText('[mdePopoverArrowWidth]="14"');
    await trigger.click();
    await expectPopoverOpen(page, CONTENT);
    await expect(arrow).toHaveCSS('border-bottom-width', '14px');
    await expect(arrow).toHaveCSS('border-bottom-color', 'rgb(255, 0, 0)');
    await page.getByTestId('builder-popover-close').click();

    await choose(page, 'builder-position-x', 'after');
    await expect(page.getByTestId('builder-arrow-width')).toBeDisabled();
    await expect(page.getByTestId('builder-arrow-hint')).toContainText('Arrow hidden');
  });

  test('closeOnClickTrigger works in click mode and is gated elsewhere', async ({ page }) => {
    await openDemo(page, 'examples/builder');
    const trigger = page.getByTestId('builder-trigger');
    const toggle = page.getByTestId('builder-close-on-click-trigger').getByRole('switch');
    const clickTrigger = async () => {
      const b = (await trigger.boundingBox())!;
      await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
    };

    await clickTrigger();
    await expectPopoverOpen(page, CONTENT);
    await clickTrigger();
    await expectPopoverClosed(page, CONTENT);

    await toggle.click();
    await expect(page.getByTestId('builder-snippet')).toContainText('[mdePopoverCloseOnClickTrigger]="false"');
    await clickTrigger();
    const panel = await expectPopoverOpen(page, CONTENT);
    await clickTrigger();
    await page.waitForTimeout(300);
    await expect(panel).toBeVisible();
    await clickOutside(page);
    await expectPopoverClosed(page, CONTENT);

    await page.getByTestId('builder-backdrop-close').getByRole('switch').click();
    await expect(toggle).toBeDisabled();
    await page.getByTestId('builder-backdrop-close').getByRole('switch').click();
    await choose(page, 'builder-trigger-on', 'hover');
    await expect(toggle).toBeDisabled();
    await expect(page.getByTestId('builder-close-on-click-trigger-hint')).toHaveText('Only used with click mode.');
  });

  test('a popover that ignores clicks can always be closed', async ({ page }) => {
    await openDemo(page, 'examples/builder');
    const trigger = page.getByTestId('builder-trigger');
    await page.getByTestId('builder-backdrop-close').getByRole('switch').click();
    await page.getByTestId('builder-close-on-click').getByRole('switch').click();

    await trigger.click();
    const panel = await expectPopoverOpen(page, CONTENT);
    await panel.getByText('Hello from mde-popover').click();
    await page.mouse.click(5, 5);
    await expect(panel).toBeVisible();

    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, CONTENT);

    await trigger.click();
    await expectPopoverOpen(page, CONTENT);
    await page.getByTestId('builder-popover-close').click();
    await expectPopoverClosed(page, CONTENT);
    await expect(page.getByTestId('builder-close-note')).toContainText('only while focus is inside the panel');
  });

  test('the floating support button stays clickable above the playground', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    await openDemo(page, 'examples/builder');
    const fab = page.getByTestId('nav-support-trigger');
    // The template card used to cover the fixed button at this size.
    await fab.click({ timeout: 5000 });
    await expect(page.getByTestId('support-chat')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('support-chat')).toHaveCount(0);
  });

  test('the home page links to the builder', async ({ page }) => {
    await openDemo(page);
    await page.getByTestId('home-builder-link').click();
    await expect(page).toHaveURL(/#\/examples\/builder$/);
    await expect(page.getByTestId('builder-trigger')).toBeVisible();
  });
});
