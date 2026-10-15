import { expect, test } from '@playwright/test';
import {
  clickOutside,
  expectPopoverClosed,
  expectPopoverOpen,
  openDemo,
} from './support/popover';

test.describe('builder example', () => {
  test('opens the result popover from the builder route and closes it again', async ({
    page,
  }) => {
    await openDemo(page, 'examples/builder');
    await expect(page).toHaveURL(/#\/examples\/builder$/);
    await expect(page.getByTestId('builder-heading')).toHaveText(
      'Slider configuration'
    );

    const trigger = page.getByTestId('builder-trigger');
    await trigger.click();
    const panel = await expectPopoverOpen(page, 'builder-popover-content');
    await expect(panel).toContainText('Click popover, I will close.');

    await panel.getByText('Click popover, I will close.').click();
    await expectPopoverClosed(page, 'builder-popover-content');

    await trigger.click();
    await expectPopoverOpen(page, 'builder-popover-content');
    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, 'builder-popover-content');

    await trigger.click();
    await expectPopoverOpen(page, 'builder-popover-content');
    await clickOutside(page);
    await expectPopoverClosed(page, 'builder-popover-content');

    await page.getByTestId('builder-reset').click();
    await expect(page.getByTestId('builder-heading')).toBeVisible();
    await expectPopoverClosed(page, 'builder-popover-content');
  });

  test('the home page links to the builder', async ({ page }) => {
    await openDemo(page);
    await page.getByTestId('home-builder-link').click();
    await expect(page).toHaveURL(/#\/examples\/builder$/);
    await expect(page.getByTestId('builder-trigger')).toBeVisible();
  });
});
