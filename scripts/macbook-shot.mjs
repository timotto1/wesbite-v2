import { chromium } from "playwright";
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1600, height: 1500 }, deviceScaleFactor: 2 });
const page = await context.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(3500);
await page.screenshot({ path: "/tmp/macbook-shot.png", clip: { x: 100, y: 580, width: 1400, height: 850 }, animations: "disabled" });
await browser.close();
console.log("done");
