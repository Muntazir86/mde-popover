import { expect, test } from '@playwright/test';
import {
  clickOutside,
  expectArrow,
  expectFocusInside,
  expectNear,
  expectPlaced,
  expectPopoverClosed,
  expectPopoverOpen,
  openDemo,
} from './support/popover';

test.describe('home page popovers', () => {
  test.beforeEach(async ({ page }) => {
    await openDemo(page);
  });

  test('hover popover opens, stays open over its content, and closes on leave or click', async ({
    page,
  }) => {
    const trigger = page.getByTestId('home-hover-close');
    await trigger.hover();
    const panel = await expectPopoverOpen(page, 'home-hover-close-content');
    await expect(panel).toContainText('Click popover, I will close.');
    await expectArrow(panel, false);
    await expectNear(trigger, panel);

    await panel.hover();
    await expect(panel).toBeVisible();

    await panel.getByText('Click popover, I will close.').click();
    await expectPopoverClosed(page, 'home-hover-close-content');

    await trigger.hover();
    await expectPopoverOpen(page, 'home-hover-close-content');
    await page.mouse.move(8, 520);
    await expectPopoverClosed(page, 'home-hover-close-content');
  });

  test('centered click popover opens above the trigger with an arrow and closes on outside click and Esc', async ({
    page,
  }) => {
    const trigger = page.getByTestId('home-click-center');
    await trigger.click();
    const panel = await expectPopoverOpen(page, 'home-click-center-content');
    await expect(panel).toContainText('Click popover, I will close.');
    await expectPlaced(trigger, panel, 'above');
    await expectArrow(panel, true);
    await expectFocusInside(page, panel);

    await clickOutside(page);
    await expectPopoverClosed(page, 'home-click-center-content');

    await trigger.focus();
    await page.keyboard.press('Enter');
    const reopened = await expectPopoverOpen(page, 'home-click-center-content');
    await expectFocusInside(page, reopened);
    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, 'home-click-center-content');
    await expect(trigger).toBeFocused();
  });

  test('click popover that ignores content clicks stays open until outside click or Esc', async ({
    page,
  }) => {
    const trigger = page.getByTestId('home-click-persist');
    await trigger.click();
    const panel = await expectPopoverOpen(page, 'home-click-persist-content');
    await expect(panel).toContainText('Click popover, I will stay open.');
    await expectPlaced(trigger, panel, 'below');
    await expectArrow(panel, true);

    await panel.getByText('Click popover, I will stay open.').click();
    await expect(panel).toBeVisible();

    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, 'home-click-persist-content');

    await trigger.click();
    await expectPopoverOpen(page, 'home-click-persist-content');
    await clickOutside(page);
    await expectPopoverClosed(page, 'home-click-persist-content');
  });

  test('hover popover with content clicks disabled closes when the pointer leaves', async ({
    page,
  }) => {
    const trigger = page.getByTestId('home-hover-persist');
    await trigger.hover();
    const panel = await expectPopoverOpen(page, 'home-hover-persist-content');
    await expect(panel).toContainText('Click popover, I will stay open.');
    await expectPlaced(trigger, panel, 'before');
    await expectArrow(panel, false);

    await panel.getByText('Click popover, I will stay open.').click();
    await expect(panel).toBeVisible();

    await page.mouse.move(8, 520);
    await expectPopoverClosed(page, 'home-hover-persist-content');
  });

  test('disabled hover trigger stays closed until it is enabled again', async ({
    page,
  }) => {
    const trigger = page.getByTestId('home-hover-disable');

    // Toggle the flag without a pointer enter. A real click enters first and
    // would race the 200ms hover delay against the disable bit.
    await trigger.dispatchEvent('click');
    await trigger.hover();
    await page.waitForTimeout(700);
    await expectPopoverClosed(page, 'home-hover-disable-content');

    await page.mouse.move(8, 520);
    await trigger.dispatchEvent('click');
    await trigger.hover();
    const panel = await expectPopoverOpen(page, 'home-hover-disable-content');
    await expect(panel).toContainText('Click popover, I will close.');
    await expectPlaced(trigger, panel, 'after');
    await expectArrow(panel, true);

    await panel.getByText('Click popover, I will close.').click();
    await expectPopoverClosed(page, 'home-hover-disable-content');
  });
});
