import { expect, test } from '@playwright/test';
import {
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

  test('the home page links to the builder', async ({ page }) => {
    await openDemo(page);
    await page.getByTestId('home-builder-link').click();
    await expect(page).toHaveURL(/#\/examples\/builder$/);
    await expect(page.getByTestId('builder-trigger')).toBeVisible();
  });
});
