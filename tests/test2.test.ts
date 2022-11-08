import {test, chromium} from '@playwright/test';

test('DGI record creation', async () => {
    const browser = await chromium.launchPersistentContext('', {
      headless: false,
      channel: 'msedge'
    })
  
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&cmdbar=true&navbar=off&pagetype=entityrecord&etn=mash_sst_websitepublishing&id=e8da1ad6-f854-ed11-9561-000d3a5bcbf9");
    await page.locator('[id="mash_platformmultiselect_ledit"]').fill("SiteMuse");
    await page.locator('[title="Sitemuse"]').click();
    // await page.waitForTimeout(3000);
    await page.locator('[aria-label="I confirm that I updated the Sub URLs of the DGI record with the most up to date information.: Required: No"]').click();
    await page.waitForTimeout(3000);
    // await page.pause();
    await page.locator('[aria-label="I confirm that I updated the Sub URLs of the DGI record with the most up to date information.: Required: No"]').dblclick();
    await page.pause();
})  