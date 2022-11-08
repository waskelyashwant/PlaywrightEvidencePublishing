import {test, chromium} from '@playwright/test';
import axios from 'axios';

test.describe('Evidence publishing', () => {
  test('DGI4 record creation', async () => {

    const browser = await chromium.launchPersistentContext('', {
      headless: false,
      channel: 'msedge'
    })
    
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });


    await page.goto('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&forceUCI=1&pagetype=dashboard&id=fc838e56-513e-e911-a97c-000d3a30dc0a&type=system&_canOverride=true');
    await page.waitForURL('https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&forceUCI=1&pagetype=dashboard&id=fc838e56-513e-e911-a97c-000d3a30dc0a&type=system&_canOverride=true');
    
    await page.locator('a:has-text("Service Module")').click();
    await page.frameLocator('#AppLandingPage').locator('text=Service Module').click();
    // await page.locator('id=app-search-input').fill("Digital Inventory");
    await page.locator('span:has-text("Marketing Project")').click();

    await page.waitForURL("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entitylist&etn=mash_project&viewid=b4a454ec-e918-e911-a97a-000d3a30dc0a&viewType=1039");
  
    await page.locator('[id="id__0"]').click();

    await page.locator('span:has-text("All Projects")').click();

    await page.locator('[aria-label="DGI BVT"]').click();
    await page.waitForTimeout(3000);

    await page.locator('[aria-label="Add Services to Your Project"]').click();
    // await page.waitForTimeout(4000);

    // await page.locator('button:has-text("OK")').click();
    // await page.pause();

    
    const frame1 = page.frameLocator("#WebResource_ServiceRequest");

    console.log(7);
    await frame1.locator("text='Content Marketing'").click();
    console.log(8);


    await page.waitForTimeout(2000);
    await frame1.locator('text="+ Select"').nth(4).click();

    await frame1.locator('[data-action="addToProject"]').click();

    // await page.pause();
  
    
    // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=mash_project&id=17253c59-0551-ed11-9561-000d3a5bcb2d");

    await page.locator('[aria-label="Add Details to Your Service Requests"]').click();
    // await page.pause();
    // await page.waitForTimeout(7000);

    await page.locator('[data-id="incident|NoRelationship|SubGridStandard|Mscrm.SubGrid.incident.RefreshButton"]').click();

    await page.waitForTimeout(10000);
    // await page.pause();
    await page.locator('span:has-text("SREVP")').first().click();

    // await page.waitForTimeout(10000);


    // // Draft Stage
    // // Add details to your services

    //await page.locator('button:has-text("Add/Update Service Details")').click();

    // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&navbar=entity&newWindow=true&pagetype=entityrecord&etn=mash_customerevidencepublishing&id=d3c415c2-b855-ed11-9561-000d3a5bc05a");
                    
    await page.waitForTimeout(15000);

    console.log("2");

    const [, page1] = await Promise.all([
      page.locator("text=Add/Update Service Details").click(),
      page.waitForEvent("popup"),
    ]);
    await page1.waitForLoadState();
    await page1.setViewportSize({ width: 1920, height: 1080 });

    await page1.locator('[aria-label="Do you have legal approval from the customer to publish this story?: Required: No"]').click();

    // Supporting documents
    await page1.locator('[aria-label="Supporting Documents"]').click();

    console.log('2');

    await page1.waitForTimeout(7000);

    const fileFrame = await page1.frameLocator('#WebResource_SupportingDocuments')
    fileFrame.locator('[id="attachmentFile"]').setInputFiles('C:/Users/v-ywaskel/Downloads/sampledoc.csv');

    console.log('5');

    fileFrame.locator('[id="cr01d_fieldispii"]').selectOption({label: "Yes"});
    console.log('6');

    fileFrame.locator('[id="azureAttachmentManagerUpload"]').click();
    console.log('7');
    

    console.log('3');
    await page1.waitForTimeout(10000);

    console.log('2');

    await page1.locator('span:has-text("Save & Close")').last().click();

    await page.waitForTimeout(5000);

    const sr = await page.locator('[aria-label="Service Request Title"]').getAttribute("title");
    await page.locator('span:has-text("Submit")').first().click();

    // await page1.pause();

    // console.log('3');

    // const fileFrame1 = await page.frameLocator('#WebResource_SupportingDocuments')
    // fileFrame.locator('[id="attachmentFile"]').setInputFiles('C:/Users/v-ywaskel/Downloads/sampledoc.csv');

    // console.log('5');

    // fileFrame.locator('[id="cr01d_fieldispii"]').selectOption({label: "Yes"});
    // console.log('6');

    // fileFrame.locator('[id="azureAttachmentManagerUpload"]').click();
    // console.log('7');
    

    // console.log('3');
    // await page.waitForTimeout(10000);

    // console.log('2');

    // await page.locator('span:has-text("Save & Close")').last().click();

    // console.log("1");

    // await page.locator('span:has-text("Submit")').first().click();
    // Reached to Pre-triage stage



    
    // //Pre-triage stage
    await page.locator('span:has-text('+'"'+ sr +'"'+ ')').click();

    await page.waitForTimeout(10000);
    console.log('5');

    
    const [, page2] = await Promise.all([
      page.locator("text=Add/Update Service Details").click(),
      page.waitForEvent("popup"),
    ]);
    await page2.waitForLoadState();
    await page2.setViewportSize({ width: 1920, height: 1080 });
    // // Pre-triage checklist

    //await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&navbar=entity&newWindow=true&pagetype=entityrecord&etn=mash_customerevidencepublishing&id=d3c415c2-b855-ed11-9561-000d3a5bc05a");
                    
    // await page.waitForTimeout(15000);

    // await page.locator('').click();

    await page2.waitForTimeout(5000);

    await page2.locator('[aria-label="Pre-Triage Checklist"]').click();

    await page2.locator('[aria-label="I have followed the checklist: No"]').click();

    await page2.locator('span:has-text("Save & Close")').last().click();

    await page.waitForTimeout(5000);


    // // Add time entry

    await page.locator('[data-id="title.fieldControl-text-box-text"]').click();
    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageDown');

    await page.locator('button:has-text("New Time Entry")').click();

    console.log('6');
    await page.waitForTimeout(30000);

    await page.locator('[aria-label="Efforts (minutes)"]').click();

    await page.locator('[id="id-6addf4af-5f81-45cc-9960-b0fddce77e8f-5-mash_effortsc6d124ca-7eda-4a60-aea9-7fb8d318b68f-mash_efforts.fieldControl-whole-number-text-input"]').fill('1');
    // await page.pause();
    console.log('7');
    await page.locator('span:has-text("Save and Close")').nth(3).click();
    console.log('8');

    await page.locator('span:has-text("Assign")').first().click();
    await page.locator('[id="dialogButtonText_id-b7c5f6a8-514c-4810-b93e-e78ec3a2c6bd-5"]').click();

    await page.locator('span:has-text("Approve")').first().click();
    await page.waitForTimeout(5000);
    await page.locator('[data-id="confirmButton"]').click();

    // // Pre-triage stage completed and pushed to triage
    console.log("Pushed to triage stage");


    // // Triage
    await page.locator('span:has-text('+'"'+ sr +'"'+ ')').click();

    // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=cfc415c2-b855-ed11-9561-000d3a5bc05a&formid=1f43cc93-2815-4a0b-bc8a-a9d3cef7ba3c");

    await page.waitForTimeout(10000);

    // await page.mouse.move(200,200);
    // const x = await page.locator('[data-id="tabpanel-general"]')
    console.log('1');

    //await page.waitForURL("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=cfc415c2-b855-ed11-9561-000d3a5bc05a&formid=1f43cc93-2815-4a0b-bc8a-a9d3cef7ba3c");

    //await page.locator('[id="id-1f43cc93-2815-4a0b-bc8a-a9d3cef7ba3c-203-mash_idautopopulated4273edbd-ac1d-40d3-9fb2-095c621b552d-mash_idautopopulated.fieldControl-text-box-text"]').click();
    
    await page.locator('[data-id="title.fieldControl-text-box-text"]').click();
    await page.keyboard.press('PageDown');
    await page.keyboard.press('PageDown');
    console.log("wheel1");

    // await page.pause();

    // Add new service task

    // await page.locator('button:has-text("New Service Task")').click();

    // await page.locator('[aria-label="New\\ Service\\ Task"]').click();
    //   await page.waitForTimeout(15000);

      // Creating service task
      await page.locator('[aria-label="New\\ Service\\ Task\\.\\ Add\\ New\\ Service\\ Task"]').click();
      console.log("Task created successfully");

      await page.waitForTimeout(10000);
      console.log("PPPPPP");

      await page.keyboard.press('PageDown');

      await page.selectOption('[aria-label="Priority"]', { index: 3 });
      //await page.waitForTimeout(4000);
      await page.selectOption('[aria-label="Complexity"]', { index: 3 });
      //await page.waitForTimeout(5000);
      await page.selectOption('[aria-label="Workflow Type"]', { index: 1 });
      //await page.waitForTimeout(2000);
      await page.locator('[data-id="mash_taskduedate.fieldControl-date-time-input"]').click();
      await page.waitForTimeout(2000);
      await page.locator('[data-id="mash_taskduedate.fieldControl-date-time-input"]').fill("11-30-2022");

      await page.locator('[aria-label="Service Task Type, Lookup"]').click();
      await page.locator('[aria-label="Service Task Type, Lookup"]').fill("Publish Website");
      await page.locator('[aria-label="Publish\\ Website"] >> text=Publish Website').click();
      // await page.pause();

      // const fileFrame = await page.frameLocator('#WebResource_SupportingDocuments')
      // fileFrame.locator('[id="attachmentFile"]').setInputFiles('C:/Users/v-ywaskel/Downloads/sampledoc.csv');

      // console.log('5');

      // fileFrame.locator('[id="cr01d_fieldispii"]').selectOption({label: "Yes"});
      // console.log('6');

      // fileFrame.locator('[id="azureAttachmentManagerUpload"]').click();
      // console.log('7');
      

      // console.log('3');
      // await page.waitForTimeout(10000);

      await page.locator('span:has-text("Save")').first().click();
      console.log('Save');
      await page.waitForTimeout(15000);

      console.log('1');

      const taskName = await page.locator('[aria-label="Task Name"]').getAttribute('title');

      console.log(taskName);

      await page.locator('span:has-text("Submit")').first().click();
      console.log(3);

      await page.waitForTimeout(10000);

      await page.locator('[data-id="title.fieldControl-text-box-text"]').click();
      await page.keyboard.press('PageDown');
      await page.keyboard.press('PageDown');

      // await page.pause();

      // await page.locator();

      console.log("Build checklist started");
      await page.locator('span:has-text('+'"'+ taskName +'"'+ ')').click();

      await page.waitForTimeout(5000);
      
      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=mash_servicetask&id=1b818416-3183-4a78-9a8b-94b4a1b19788");
      // await page.waitForTimeout(10000);

      await page.locator('[aria-label="Build Resource, Lookup"]').click();
      await page.locator('[aria-label="Build Resource, Lookup"]').fill("Ujjwal Saxena");
      await page.locator('[aria-label="Ujjwal\\ Saxena\\,\\ mashtest"] >> text=Ujjwal Saxena').click();

      //Build Checklist
      await page.locator('[aria-label="Build Checklist"]').click();
      await page.waitForTimeout(3000);
      await page.locator('[aria-label="I have followed the build checklist.: Required: No"]').dblclick();
      await page.waitForTimeout(5000);
      console.log('checked');
      
      await page.locator("text=Time EntriesTime Entries").click();
      await page.locator('[aria-label="New\\ Time\\ Entry\\.\\ Add\\ New\\ Time\\ Entry"]').click();
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').click();
      await page.waitForTimeout(3000);
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').fill("2");
      await page.locator('[aria-label="Save\\ and\\ Close"]').click();
      await page.waitForTimeout(1500);
      await page.locator('[aria-label="Save\\ \\(CTRL\\+S\\)"]').click();
      await page.locator('[aria-label="Submit"]').click();
      await page.waitForTimeout(1000);
      await page.locator('[aria-label="Yes"]').click();
      console.log("Build checklist completed");

      await page.waitForTimeout(10000);

      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=cfc415c2-b855-ed11-9561-000d3a5bc05a&formid=1f43cc93-2815-4a0b-bc8a-a9d3cef7ba3c");

      await page.locator('[data-id="title.fieldControl-text-box-text"]').click();
      await page.keyboard.press('PageDown');
      await page.keyboard.press('PageDown');


      await page.locator('span:has-text('+'"'+ taskName +'"'+ ')').click();
      await page.waitForTimeout(10000);
      console.log("Peer review started");

      // Peer review
      await page.locator('[aria-label="Peer Review Resource, Lookup"]').click();
      await page.locator('[aria-label="Peer Review Resource, Lookup"]').fill("Ujjwal Saxena");
      await page.locator('[aria-label="Ujjwal\\ Saxena\\,\\ mashtest"] >> text=Ujjwal Saxena').click();

      await page.locator("text=Peer Review ChecklistPeer Review Checklist").click();
      await page.locator('[aria-label="I\\ have\\ followed\\ the\\ peer\\ review\\ checklist\\.\\:\\ No"]').click();
      await page.waitForTimeout(3000);
      await page.locator("text=Time EntriesTime Entries").click();
      await page.locator('[aria-label="New\\ Time\\ Entry\\.\\ Add\\ New\\ Time\\ Entry"]').click();
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').click();
      await page.waitForTimeout(3000);
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').fill("2");
      await page.locator('[aria-label="Save\\ and\\ Close"]').click();
      await page.waitForTimeout(1500);
      await page.locator("text=Service TaskService Task").click();
      
      await page.locator('[aria-label="Save\\ \\(CTRL\\+S\\)"]').click();
      await page.locator('[aria-label="Approve"]').click();
      await page.locator('[aria-label="Yes"]').click();

      console.log("Peer review completed");

      await page.waitForTimeout(10000);


      await page.locator('[data-id="title.fieldControl-text-box-text"]').click();
      await page.keyboard.press('PageDown');
      await page.keyboard.press('PageDown');
      await page.locator('span:has-text('+'"'+ taskName +'"'+ ')').click();

      // Owner approval stage
      //await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=mash_servicetask&id=ccd03311-a279-4452-b1cc-6f596a5af3b0");


      // await page.pause();
      await page.locator("text=Time EntriesTime Entries").click();
      await page.locator('[aria-label="New\\ Time\\ Entry\\.\\ Add\\ New\\ Time\\ Entry"]').click();
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').click();
      await page.waitForTimeout(2000);
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').fill("1");
      await page.waitForTimeout(5000);
      await page.locator('[aria-label="Save\\ and\\ Close"]').click();
      await page.waitForTimeout(4000);
      await page.locator('[aria-label="Save\\ \\(CTRL\\+S\\)"]').click();
      await page.locator('[aria-label="Approve"]').click();
      await page.waitForTimeout(1000);
      await page.locator('[data-id="mash_deliverydateandtime.fieldControl-date-time-input"]').click();
      await page.waitForTimeout(3000);
      await page.locator('[data-id="mash_deliverydateandtime.fieldControl-date-time-input"]').fill("11-30-2022");
      await page.waitForTimeout(3000);
      await page.selectOption('[aria-label="How\\ would\\ you\\ describe\\ your\\ experience\\ with\\ us\\?"]',{ index: 1 });
      console.log("Waiting for approve");
      await page.waitForTimeout(1000);
      await page.frameLocator("#WebResource_ServiceTaskResource").locator('[id="rejectbuttonid"]').click();
      console.log("Clicked");

      await page.waitForTimeout(20000);
      // await page.frameLocator("#WebResource_ServiceTaskResource").locator("text=Approve").dblclick();
      // await page.waitForTimeout(5000);
      // await page.locator('[id="rejectbuttonid"]').click(); 

      // await page.pause();

      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=cfc415c2-b855-ed11-9561-000d3a5bc05a&formid=1f43cc93-2815-4a0b-bc8a-a9d3cef7ba3c");
      // await page.waitForTimeout(20000);
      // await page.pause();

      await page.locator('[data-id="title.fieldControl-text-box-text"]').click();
      await page.keyboard.press('PageDown');
      await page.keyboard.press('PageDown');
      await page.locator('span:has-text('+'"'+ taskName +'"'+ ')').click();



      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=mash_servicetask&id=0d0fbd0d-1927-4e6d-a64b-cc007970c153");
      // Publish
      await page.locator('[aria-label="Search\\ records\\ for\\ Publish\\ Resource\\,\\ Lookup\\ field"]').click();
      await page.locator('[placeholder="Look\\ for\\ Publish\\ Resource"]').fill("Ujjwal Saxena");
      await page.locator('[aria-label="Ujjwal\\ Saxena,\\ mashtest"] >> text=Ujjwal Saxena').click();

      await page.locator('[aria-label="Add Existing Publish Delay Comment"]').click();
      await page.locator('[aria-label="Search records for Select record, Multiple Selection Lookup field"]').click();
      await page.locator('[data-id="MscrmControls.FieldControls.SimpleLookupControl-LookupResultsPopup_falseBoundLookup_resultsContainer"]').nth(0).click();
      await page.waitForTimeout(2000);
      await page.locator('[aria-label="Add"]').click();

      await page.locator("text=Publish ChecklistPublish Checklist").click();
      await page.locator('[aria-label="I\\ have\\ followed\\ the\\ publish\\ checklist\\.\\:\\ No"]').click();
      await page.waitForTimeout(3000);
      // await page.pause();
      await page.locator("text=Time EntriesTime Entries").click();
      await page.locator('[aria-label="New\\ Time\\ Entry\\.\\ Add\\ New\\ Time\\ Entry"]').click();
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').click();
      await page.locator('[aria-label="Efforts\\ \\(minutes\\)"]').fill("4");
      await page.waitForTimeout(2000);
      await page.locator('[aria-label="Save\\ and\\ Close"]').click();
      await page.waitForTimeout(1500);

      console.log("Published");


      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=mash_servicetask&id=e7686fd2-e23e-43b3-9cdd-b8569fb90610");
      
      // await page.locator('[aria-label="Save\\ and\\ Close"]').click();
      // await page.waitForTimeout(2000);
      await page.locator('span:has-text("Save")').first().click();
      await page.waitForTimeout(2000);
      // await page.pause();
      await page.locator('[aria-label="Complete"]').click();
      await page.waitForTimeout(1000);
      await page.locator('[aria-label="Yes"]').click();
      // await page.pause();

      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=88f7d365-d759-ed11-9562-000d3a5bc73b");
      await page.waitForTimeout(10000);
      console.log("sdf");
      const [, page3] = await Promise.all([
        page.locator("text=Add/Update Service Details").click(),
        page.waitForEvent("popup"),
      ]);
      await page3.waitForLoadState();
      await page3.setViewportSize({ width: 1920, height: 1080 });
      console.log("Done");
      // // Pre-triage checklist
             
      // await page.waitForTimeout(15000);
  
      // await page.locator('').click();
  
      // await page3.waitForTimeout(5000);
  
      await page3.locator('[aria-label="Triage Checklist"]').click();
  
      await page3.locator('[aria-label="I have followed the checklist: No"]').click();
  
      await page3.locator('span:has-text("Save & Close")').last().click();
      
      console.log("Assigned to factory is going on");

      // Assigned to factory

      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=af30a6d6-0259-ed11-9562-000d3a5bc73b");
      await page.waitForTimeout(5000);

      await page.locator('[data-id="title.fieldControl-text-box-text"]').click();
      await page.keyboard.press('PageDown');
      await page.keyboard.press('PageDown');

      await page.locator('button:has-text("New Time Entry")').click();

      console.log('6');
      await page.waitForTimeout(3000);

      await page.locator('[aria-label="Efforts (minutes)"]').click();

      await page.locator('[id="id-6addf4af-5f81-45cc-9960-b0fddce77e8f-5-mash_effortsc6d124ca-7eda-4a60-aea9-7fb8d318b68f-mash_efforts.fieldControl-whole-number-text-input"]').fill('1');
      // await page.pause();
      console.log('7');
      await page.locator('span:has-text("Save and Close")').nth(3).click();
      console.log('8');


      // await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=af30a6d6-0259-ed11-9562-000d3a5bc73b");
      // await page.waitForTimeout(5000);

      await page.locator('span:has-text("Assign")').first().click();
      // await page.locator('span:has-text("Assign")').click();
      // console.log("Fsafs");
      await page.waitForTimeout(3000);
      await page.locator('[data-id="ok_id"]').click();
      // await page.waitForTimeout(5000);
      // await page.pause();
      console.log("Assigned");

      await page.locator('span:has-text("Approve")').first().click();
      await page.waitForTimeout(2000);
      await page.locator('[data-id="confirmButton"]').click();

  })

  // function delay(ms: number) {
  //   return new Promise( resolve => setTimeout(resolve, ms) );
  // }
  
})