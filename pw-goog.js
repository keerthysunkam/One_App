const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.google.com');

  await page.fill('textarea[name="q"]', 'linkedin');
  await page.keyboard.press('Enter');

  await page.waitForLoadState('networkidle');

  console.log('Search completed.');
  await browser.close();
})();