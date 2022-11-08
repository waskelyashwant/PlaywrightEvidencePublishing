import {test, chromium } from '@playwright/test';

test('BVT testing', async () => {
  const browser = await chromium.launchPersistentContext('', {
    headless: false,
    channel: 'msedge'
  })

  function sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  const page = await browser.newPage();


  await page.goto('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&forceUCI=1&pagetype=dashboard&id=fc838e56-513e-e911-a97c-000d3a30dc0a&type=system&_canOverride=true');
  await page.waitForURL('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&forceUCI=1&pagetype=dashboard&id=fc838e56-513e-e911-a97c-000d3a30dc0a&type=system&_canOverride=true');
  
  await page.locator('a:has-text("Service Module")').click();
  await page.frameLocator('#AppLandingPage').locator('text=Digital Inventory').click();

  await page.waitForURL("https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&pagetype=dashboard&id=69b5ce2c-6cac-ea11-a812-000d3a321938&type=system&_canOverride=true");

  await page.locator('[data-id="cell-0-3"]').click();

  await page.waitForURL("https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&pagetype=entityrecord&etn=mash_digitalinventory&id=c7a81ede-8c4f-ed11-9562-000d3a5bc05a");

  await page.waitForTimeout(4000);

  const status = await page.locator('[data-id="mash_sitestatusoptionset.fieldControl-option-set-select"]').getAttribute('title');

  console.log(status);

//   await page.pause();

  await page.locator('[data-id="tablist-Contacts and Connections"]').click();

  const msc = await page.locator('[id="id-f244429a-d08f-4f0c-89b9-c7afe5a10631-45-mash_mscmanagedb0c6723a-8503-4fd7-bb28-c8a06ac933c2-mash_mscmanaged.fieldControl-checkbox-toggle"]').getAttribute('title');

  console.log(msc);
  await page.pause();




})