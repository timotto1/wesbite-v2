// Capture hero region only (above-the-fold) for close-up review.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3030";
const OUT = path.resolve(process.cwd(), "screenshots");

const ROUTES = [
  { slug: "hero-landing", url: "/" },
  { slug: "hero-listings", url: "/products/listings" },
  { slug: "hero-resident-portal", url: "/products/resident-portal" },
  { slug: "hero-comms", url: "/products/comms" },
  { slug: "hero-compliance", url: "/products/compliance" },
  { slug: "hero-finance", url: "/products/finance" },
  { slug: "hero-aftersales", url: "/products/aftersales" },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  for (const route of ROUTES) {
    const url = `${BASE}${route.url}`;
    const file = path.join(OUT, `${route.slug}.png`);
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: file,
        clip: { x: 0, y: 0, width: 1440, height: 900 },
        animations: "disabled",
      });
      console.log(`✓ ${route.slug}`);
    } catch (err) {
      console.error(`✗ ${route.slug}: ${err.message}`);
    }
  }
  await context.close();
} finally {
  await browser.close();
}
