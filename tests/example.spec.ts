import {test, chromium } from '@playwright/test';


test('DGI record creation', async () => {
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
  await page.frameLocator('#AppLandingPage').locator('text=Service Module').click();
  // await page.locator('id=app-search-input').fill("Digital Inventory");
  await page.locator('span:has-text("Marketing Project")').click();

  await page.waitForURL("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entitylist&etn=mash_project&viewid=b4a454ec-e918-e911-a97a-000d3a30dc0a&viewType=1039");

  await page.locator('button:has-text("New")').click();

  console.log("1");
  await page.waitForURL('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=mash_project');
  console.log("2");

  await page.locator('[aria-label="Marketing Project Name"]').fill("Automation project 3");
  console.log("3");
  // await page.pause();

  await page.waitForURL('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=mash_project');

  await page.locator('[aria-label="Business Owner, Lookup"]').click();
  await page.locator('[aria-label="Business Owner, Lookup"]').fill("Yashwant");
  await page.locator('[aria-label="Yashwant\\ Waskel\\,\\ mashtest"] >> text=Yashwant Waskel').click();

  await page.locator('[aria-label="Owning Area, Lookup"]').click();
  await page.locator('[aria-label="Owning Area, Lookup"]').fill("UK");
  await page.locator('[aria-label="UK"] >> text=UK').click();

  await page.locator('[aria-label="Owning Subsidiary, Lookup"]').click();
  await page.locator('[aria-label="Owning Subsidiary, Lookup"]').fill("United Kingdom");
  await page.locator('[aria-label="United\\ Kingdom"] >> text=United Kingdom').click();

  await page.locator('[aria-label="Audience, Lookup"]').click();
  await page.locator('[aria-label="Audience, Lookup"]').fill("Commercial");
  await page.locator('[aria-label="Commercial"] >> text=Commercial').click();

  await page.locator('[aria-label="Program, Lookup"]').click();
  await page.locator('[aria-label="Program, Lookup"]').fill("Field Marketing");
  await page.locator('[aria-label="Field\\ Marketing"] >> text=Field Marketing').click();

  await page.waitForTimeout(4000);
  await page.locator('button:has-text("Save")').click();
  console.log("4");
  

  // await page.locator('[aria-label="Automation project 2"]').click();
  // // await page.pause();

  // await page.locator('[aria-label="Add Services to Your Project"]').click();
  // await page.waitForTimeout(4000);

  // await page.locator('button:has-text("OK")').click();

  

  // console.log(7);
  // await page.frameLocator("#WebResource_ServiceRequest").locator("text='Digital Marketing'").click();
  // console.log(8);


  // await page.waitForTimeout(2000);
  // const rows = await page.frameLocator("#WebResource_ServiceRequest").locator('text="+ Select"').nth(1).click();
  // // console.log(Object.keys(rows));
  // // console.log(rows._selector);
  // console.log("9");

  await page.pause();
});