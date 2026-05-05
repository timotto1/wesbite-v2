import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3030";
const OUT = path.resolve(process.cwd(), "screenshots");

const ROUTES = [
  { slug: "landing", url: "/" },
  { slug: "products-listings", url: "/products/listings" },
  { slug: "products-resident-portal", url: "/products/resident-portal" },
  { slug: "products-comms", url: "/products/comms" },
  { slug: "products-compliance", url: "/products/compliance" },
  { slug: "products-finance", url: "/products/finance" },
  { slug: "products-aftersales", url: "/products/aftersales" },
  { slug: "blog", url: "/blog" },
  { slug: "blog-post", url: "/blog/why-staircasing-is-broken" },
  { slug: "demo", url: "/demo" },
  { slug: "styleguide", url: "/styleguide" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 1024, height: 800 },
  { name: "mobile", width: 390, height: 844 },
];

const argSlugs = process.argv.slice(2);
const filteredRoutes = argSlugs.length
  ? ROUTES.filter((r) => argSlugs.includes(r.slug))
  : ROUTES;

const argVps = (process.env.VIEWPORTS ?? "").split(",").filter(Boolean);
const filteredVps = argVps.length
  ? VIEWPORTS.filter((v) => argVps.includes(v.name))
  : VIEWPORTS;

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
try {
  for (const vp of filteredVps) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      reducedMotion: "no-preference",
    });
    const page = await context.newPage();
    for (const route of filteredRoutes) {
      const url = `${BASE}${route.url}`;
      const file = path.join(OUT, `${route.slug}.${vp.name}.png`);
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
        // Scroll through the page so every IntersectionObserver-driven
        // Reveal fires before we capture. Reveals are once-only, so the
        // states stay applied as we return to the top.
        await page.evaluate(async () => {
          const total = document.documentElement.scrollHeight;
          const step = Math.max(window.innerHeight * 0.7, 400);
          for (let y = 0; y < total; y += step) {
            window.scrollTo({ top: y, behavior: "instant" });
            await new Promise((r) => setTimeout(r, 80));
          }
          window.scrollTo({ top: total, behavior: "instant" });
          await new Promise((r) => setTimeout(r, 200));
          window.scrollTo({ top: 0, behavior: "instant" });
          await new Promise((r) => setTimeout(r, 200));
        });
        // Let transitions complete before capture.
        await page.waitForTimeout(900);
        await page.screenshot({ path: file, fullPage: true, animations: "disabled" });
        console.log(`✓ ${route.slug} @ ${vp.name}`);
      } catch (err) {
        console.error(`✗ ${route.slug} @ ${vp.name}: ${err.message}`);
      }
    }
    await context.close();
  }
} finally {
  await browser.close();
}
