import { test, expect } from '@playwright/test';

test.describe('Зооконсьерж — основной тест', () => {
  const BASE_URL = 'http://127.0.0.1:5174';

  test('Главная страница загружается', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('h1')).toContainText('Зооконсьерж');
    await expect(page.locator('.header .brand')).toContainText('ЗОО');
  });

  test('Хедер содержит навигацию', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('.nav-link')).toHaveCount(5);
    await expect(page.locator('.nav-link').first()).toContainText('Главная');
    await expect(page.locator('.nav-link').nth(1)).toContainText('Выгул');
  });

  test('Футер содержит ссылки', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('.footer')).toBeVisible();
    await expect(page.locator('.footer .brand')).toContainText('ЗОО');
  });

  test('Страница Выгул загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/walk`);
    await expect(page.locator('h1')).toContainText('Выгул');
    await expect(page.locator('.back-btn')).toBeVisible();
  });

  test('Страница Зооняня загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/nanny`);
    await expect(page.locator('h1')).toContainText('Зооняня');
  });

  test('Страница Передержка загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/boarding`);
    await expect(page.locator('h1')).toContainText('Передержка');
  });

  test('Страница Зоотакси загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/taxi`);
    await expect(page.locator('h1')).toContainText('Зоотакси');
  });

  test('Страница Чат загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/chat`);
    await expect(page.locator('h1')).toContainText('Чат');
  });

  test('Страница Кабинет загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/cabinet`);
    await expect(page.locator('h1')).toContainText('Личный кабинет');
  });

  test('Страница О нас загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/about`);
    await expect(page.locator('.page-title')).toBeVisible();
  });

  test('Страница Контакты загружается', async ({ page }) => {
    await page.goto(`${BASE_URL}/contacts`);
    await expect(page.locator('h1')).toContainText('Контакты');
  });

  test('Все ссылки в хедере работают', async ({ page }) => {
    await page.goto(BASE_URL);
    const links = page.locator('.nav-link');
    for (let i = 0; i < await links.count(); i++) {
      const link = links.nth(i);
      const href = await link.getAttribute('href');
      await expect(href).toBeTruthy();
    }
  });

  test('Мобильное меню открывается', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    await page.locator('.mobile-menu-btn').click();
    await expect(page.locator('.nav')).toHaveClass(/nav-open/);
  });

  test('Все страницы имеют Header и Footer', async ({ page }) => {
    const pages = ['/', '/walk', '/nanny', '/boarding', '/taxi', '/chat', '/cabinet', '/about', '/contacts'];
    for (const path of pages) {
      await page.goto(BASE_URL + path);
      await expect(page.locator('.header')).toBeVisible();
      await expect(page.locator('.footer')).toBeVisible();
    }
  });
});
