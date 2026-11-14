import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  testMatch: '**/playwright.test.ts',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  use: {
    baseURL: 'http://127.0.0.1:4174',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4174 --strictPort',
    url: 'http://127.0.0.1:4174',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: 'list',
});
