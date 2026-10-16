import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';
import { join } from 'node:path';

const outputRoot = join(
  workspaceRoot,
  'dist/.playwright/apps/popper-test-e2e'
);

/**
 * The demo resolves `@muntazir/material-extended` from dist, so the web server
 * builds that library before `nx serve`. Hash routes live under /mde-popover/.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  fullyParallel: false,
  retries: 0,
  workers: 1,
  timeout: 60_000,
  expect: { timeout: 10_000 },
  outputDir: join(outputRoot, 'test-output'),
  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: join(outputRoot, 'playwright-report'),
        open: 'never',
      },
    ],
  ],
  use: {
    baseURL: 'http://127.0.0.1:4200',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    ...devices['Desktop Chrome'],
  },
  webServer: {
    command:
      'npx nx build @muntazir/material-extended --configuration=production && npx nx serve popper-test --configuration=development --host=127.0.0.1 --port=4200',
    url: 'http://127.0.0.1:4200/mde-popover/',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    cwd: workspaceRoot,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
