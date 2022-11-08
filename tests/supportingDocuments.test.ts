import {test, chromium } from '@playwright/test';

test('BVT testing', async () => {
  const browser = await chromium.launchPersistentContext('', {
    headless: false,
    channel: 'msedge'
  })


  const page = await browser.newPage();


  await page.goto('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&forceUCI=1&pagetype=dashboard&id=fc838e56-513e-e911-a97c-000d3a30dc0a&type=system&_canOverride=true');
  await page.waitForURL('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&forceUCI=1&pagetype=dashboard&id=fc838e56-513e-e911-a97c-000d3a30dc0a&type=system&_canOverride=true');
  
  await page.locator('a:has-text("Service Module")').click();
  await page.frameLocator('#AppLandingPage').locator('text=Digital Inventory').click();

  await page.waitForURL("https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&pagetype=dashboard&id=69b5ce2c-6cac-ea11-a812-000d3a321938&type=system&_canOverride=true");

  await page.locator('[data-id="cell-0-3"]').click();

//   await page.waitForURL("https://mashtest.crm.dynamics.com/main.aspx?appid=d1808e68-48ad-ea11-a812-000d3a5ac89a&pagetype=entityrecord&etn=mash_digitalinventory&id=c7a81ede-8c4f-ed11-9562-000d3a5bc05a");

//   await page.waitForTimeout(4000);


  console.log('1');

  await page.locator('[data-id="tablist-Supporting Documents"]').click();

  console.log('2');

  await page.waitForTimeout(10000);

  console.log('3');

  const fileFrame = await page.frameLocator('#WebResource_SupportingDocuments')
  fileFrame.locator('[id="attachmentFile"]').setInputFiles('C:/Users/v-ywaskel/Downloads/sampledoc.csv');

  console.log('5');

  fileFrame.locator('[id="cr01d_fieldispii"]').selectOption({label: "Yes"});
  console.log('6');

  fileFrame.locator('[id="azureAttachmentManagerUpload"]').click();
  console.log('7');

//   await page.frameLocator('#WebResource_SupportingDocuments').locator('[id="attachmentTitle"]').fill("document");

  await page.pause();

})