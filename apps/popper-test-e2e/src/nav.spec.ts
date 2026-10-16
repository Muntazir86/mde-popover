import { expect, test } from '@playwright/test';
import {
  clickOutside,
  expectArrow,
  expectFocusInside,
  expectNear,
  expectPlaced,
  expectPopoverClosed,
  expectPopoverOpen,
  naturalWidth,
  openDemo,
} from './support/popover';

test.describe('top nav and support popovers', () => {
  test.beforeEach(async ({ page }) => {
    await openDemo(page);
  });

  test('toolbar click popover shows its content, traps focus, and closes on content click or Esc', async ({
    page,
  }) => {
    const trigger = page.getByTestId('nav-menu-trigger');
    await trigger.click();
    const panel = await expectPopoverOpen(page, 'nav-menu-content');
    await expect(panel).toContainText('Shiba Inu');
    await expectArrow(panel, false);
    await expectNear(trigger, panel);
    await expectFocusInside(page, panel);

    await panel.getByRole('button', { name: 'LIKE' }).click();
    await expectPopoverClosed(page, 'nav-menu-content');

    await trigger.focus();
    await page.keyboard.press('Enter');
    const reopened = await expectPopoverOpen(page, 'nav-menu-content');
    await expectFocusInside(page, reopened);
    await page.keyboard.press('Escape');
    await expectPopoverClosed(page, 'nav-menu-content');
    await expect(trigger).toBeFocused();
  });

  test('theme picker opens, applies a theme, and closes on Esc and outside click', async ({
    page,
  }) => {
    const trigger = page.getByTestId('nav-theme-trigger');
    await trigger.click();
    await expect(page.getByTestId('nav-theme-content')).toBeVisible();
    await expect(page.getByTestId('theme-indigo-pink-theme')).toBeVisible();
    await expect(page.locator('body')).toHaveClass(/indigo-pink-theme/);

    await page.getByTestId('theme-cyan-orange-theme').click();
    await expect(page.locator('body')).toHaveClass(/cyan-orange-theme/);
    await expect(page.getByTestId('nav-theme-content')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.getByTestId('nav-theme-content')).toHaveCount(0);
    await expect(page.locator('body')).toHaveClass(/cyan-orange-theme/);

    await trigger.click();
    await expect(page.getByTestId('nav-theme-content')).toBeVisible();
    await clickOutside(page);
    await expect(page.getByTestId('nav-theme-content')).toHaveCount(0);
  });

  test('notifications popover keeps its tabs open until outside click or Esc', async ({
    page,
  }) => {
    const trigger = page.getByTestId('nav-notifications-trigger');
    await trigger.click();
    const card = page.getByTestId('notifications-card');
    await expect(card).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'System Alerts' })
    ).toBeVisible();

    await page.getByRole('tab', { name: 'Updates' }).click();
    await expect(
      page.getByRole('heading', { name: 'Recent Updates' })
    ).toBeVisible();
    await card.click();
    await expect(
      page.getByRole('heading', { name: 'Recent Updates' })
    ).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(card).toHaveCount(0);

    await trigger.click();
    await expect(page.getByTestId('notifications-card')).toBeVisible();
    await clickOutside(page);
    await expect(page.getByTestId('notifications-card')).toHaveCount(0);
  });

  test('github hover popover shows repo links and closes when the pointer leaves', async ({
    page,
  }) => {
    const trigger = page.getByTestId('nav-github-trigger');
    const icon = trigger.locator('img');
    expect(await icon.getAttribute('src')).toBe(
      'assets/images/github-circle-white-transparent.svg'
    );
    expect(await naturalWidth(icon)).toBeGreaterThan(0);

    await trigger.hover();
    await expect(page.getByTestId('github-repo-link')).toBeVisible();
    await expect(page.getByTestId('github-issues-link')).toBeVisible();
    const panel = page.locator('.mde-popover-panel').filter({
      has: page.getByTestId('nav-github-content'),
    });
    await expect(panel).toBeVisible();
    await expectNear(page.locator('mat-toolbar'), panel);

    await page.mouse.move(8, 520);
    await expect(page.getByTestId('github-repo-link')).toHaveCount(0);
  });

  test('support chat loads local avatars, traps focus, and nests a user popover', async ({
    page,
  }) => {
    const trigger = page.getByTestId('nav-support-trigger');
    await trigger.click();

    const chat = page.getByTestId('support-chat');
    const panel = page.locator('.mde-popover-panel').filter({ has: chat });
    await expect(panel).toBeVisible();
    await expect(chat.getByText('Lounge')).toBeVisible();
    await expectPlaced(trigger, panel, 'above');
    await expect(page.getByTestId('support-message')).toBeFocused();

    const avatars = page.getByTestId('support-avatar');
    await expect(avatars).toHaveCount(6);
    const sources = await avatars.evaluateAll((images) =>
      images.map((image) => (image as HTMLImageElement).getAttribute('src'))
    );
    expect(sources).toEqual([
      'assets/images/avatar-indigo.svg',
      'assets/images/avatar-red.svg',
      'assets/images/avatar-indigo.svg',
      'assets/images/avatar-red.svg',
      'assets/images/avatar-red.svg',
      'assets/images/avatar-indigo.svg',
    ]);
    for (let index = 0; index < 6; index += 1) {
      expect(await naturalWidth(avatars.nth(index))).toBeGreaterThan(0);
    }

    await page.keyboard.press('Tab');
    await expectFocusInside(page, panel);
    await page.keyboard.press('Shift+Tab');
    await expectFocusInside(page, panel);
    await expect(page.getByTestId('support-message')).toBeFocused();

    await avatars.nth(0).hover();
    const userCard = page.getByTestId('support-user-card');
    await expect(userCard).toBeVisible();
    await expect(userCard).toContainText('Joe Blogs');
    const userAvatar = page.getByTestId('support-user-avatar');
    expect(await userAvatar.getAttribute('src')).toBe(
      'assets/images/avatar-indigo.svg'
    );
    expect(await naturalWidth(userAvatar)).toBeGreaterThan(0);

    await userCard.getByText('Joe Blogs').click();
    await expect(userCard).toHaveCount(0);
    await expect(chat).toBeVisible();

    const clickAvatar = avatars.nth(3);
    await clickAvatar.click();
    await expect(page.getByTestId('support-user-card')).toBeVisible();
    await page.getByTestId('support-user-card').click();
    await expect(page.getByTestId('support-user-card')).toHaveCount(0);

    await page.getByTestId('support-message').focus();
    await page.keyboard.press('Escape');
    await expect(chat).toHaveCount(0);

    await trigger.click();
    await expect(page.getByTestId('support-chat')).toBeVisible();
    await clickOutside(page);
    await expect(page.getByTestId('support-chat')).toHaveCount(0);
  });
});
