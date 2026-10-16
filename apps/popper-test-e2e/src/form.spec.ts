import { expect, test } from '@playwright/test';
import { openDemo } from './support/popover';

test.describe('form help popovers', () => {
  test.beforeEach(async ({ page }) => {
    await openDemo(page);
    await page.getByTestId('home-form-link').click();
    await expect(page).toHaveURL(/#\/examples\/form$/);
    await expect(page.getByTestId('form-state')).toBeVisible();
  });

  test('help stays open while a field is focused and closes on blur', async ({
    page,
  }) => {
    const help = page.getByTestId('form-help');
    const firstName = page.getByTestId('form-first-name');

    await expect(help).toHaveCount(0);
    await firstName.focus();
    await expect(help).toHaveText('Your legal First Name.');

    // The demo closes help 400ms after blur. Focus must keep it open past that.
    await page.waitForTimeout(650);
    await expect(help).toHaveText('Your legal First Name.');
    await expect(firstName).toBeFocused();

    await firstName.blur();
    await expect(help).toHaveCount(0);
  });

  test('shared anchors swap help text and a new anchor replaces the previous popover', async ({
    page,
  }) => {
    const help = page.getByTestId('form-help');

    await page.getByTestId('form-first-name').focus();
    await expect(help).toHaveText('Your legal First Name.');

    await page.getByTestId('form-last-name').focus();
    await expect(help).toHaveText('Your legal Last Name.');
    await expect(help).toHaveCount(1);

    await page.getByTestId('form-address').focus();
    await expect(help).toHaveText('Your home address line 1.');
    await expect(help).toHaveCount(1);

    await page.getByTestId('form-address-2').focus();
    await expect(help).toHaveText('Your home address line 2.');

    await page.getByTestId('form-city').focus();
    await expect(help).toHaveText("What's your home City?");

    await page.getByTestId('form-postal-code').focus();
    await expect(help).toHaveText("What's your home Postal Code?");

    await page.getByTestId('form-postal-code').blur();
    await expect(help).toHaveCount(0);
  });

  test('State help text is spelled correctly and closes when the field blurs', async ({
    page,
  }) => {
    const state = page.getByTestId('form-state');
    const help = page.getByTestId('form-help');

    await state.focus();
    await expect(help).toHaveText("What's your home State?");
    await expect(state).toBeFocused();

    await page.waitForTimeout(650);
    await expect(help).toHaveText("What's your home State?");

    await state.blur();
    await expect(help).toHaveCount(0);
  });

  test('the disabled company field cannot take focus', async ({ page }) => {
    const company = page.getByTestId('form-company');
    await expect(company).toBeDisabled();
    await expect(company).toHaveValue('Google');
    await expect(page.getByTestId('form-help')).toHaveCount(0);
  });
});
