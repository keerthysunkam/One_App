const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    timezoneId: 'America/New_York',
    permissions: ['geolocation']
  });

  const page = await context.newPage();

  console.log('Browser started');
  await page.goto('https://www.google.com');

  // your search code here
  await page.fill('textarea[name="q"]', 'linkedin');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(3000);
  await browser.close();
})();