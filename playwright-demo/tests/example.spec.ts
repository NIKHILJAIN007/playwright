import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect title to contain "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Click on "Get started"
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expect URL to contain intro
  await expect(page).toHaveURL(/.*intro/);
});