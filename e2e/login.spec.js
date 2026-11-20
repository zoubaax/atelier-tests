const { test, expect } = require('@playwright/test');

test('connexion réussie', async ({ page }) => {
  await page.goto('/login.html');
  await page.fill('#email', 'a@test.fr');
  await page.fill('#password', 'secret');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL('/dashboard.html');
});

test('connexion échouée', async ({ page }) => {
  await page.goto('/login.html');
  await page.fill('#email', 'a@test.fr');
  await page.fill('#password', 'mauvais');
  await page.click('button[type=submit]');
  await expect(page.locator('#erreur')).toHaveText('Identifiants invalides');
  await expect(page).toHaveURL('/login.html');
});