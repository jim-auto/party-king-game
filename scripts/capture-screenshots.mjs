import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const baseUrl = process.env.SCREENSHOT_URL ?? 'http://localhost:5173/';
const outDir = new URL('../docs/screenshots/', import.meta.url);

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});

async function shoot(name, path, setup) {
  await page.goto(new URL(path, baseUrl).toString(), { waitUntil: 'networkidle' });
  if (setup) await setup();
  await page.waitForTimeout(900);
  await page.screenshot({ path: fileURLToPath(new URL(`${name}.png`, outDir)), fullPage: true });
}

await shoot('home', './?card=night-chaos');
await shoot('setup', './', async () => {
  await page.locator('button[aria-label="プレイヤー設定"]').tap();
});
await shoot('ssr', './?card=thrill-secret');

await browser.close();
