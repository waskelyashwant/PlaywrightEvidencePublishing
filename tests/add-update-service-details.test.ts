import {test, chromium, BrowserContext, Page} from '@playwright/test';
// import { evidencePublishing } from './add-update-service-details.test';


test.describe('testing', () => { 
    let browser: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launchPersistentContext("", {
        headless: false,
        channel: "msedge",
        });
        page = await browser.newPage();
        // page.pause();
    });

    test('DGI record creation', async () => {
    const browser = await chromium.launchPersistentContext('', {
        headless: false,
        channel: 'msedge'
    })

    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

        
        await page.goto("https://mashtest.crm.dynamics.com/main.aspx?appid=22414b3c-651a-ea11-a811-000d3a5ac196&pagetype=entityrecord&etn=incident&id=af30a6d6-0259-ed11-9562-000d3a5bc73b");
        await page.waitForTimeout(10000);

        await page.locator('span:has-text("Assign")').first().click();
        // await page.locator('span:has-text("Assign")').click();
        await page.waitForTimeout(2000); 
        // await page.locator('span:has-text("Assign")').click();
        // console.log("Assigned");

        // await page.locator('span:has-text("Approve")').first().click();
        // await page.waitForTimeout(2000);
        // await page.locator('[data-id="confirmButton"]').click();

});




    test.afterAll(async () => {
    const nodemailer = require("nodemailer");

    console.log("globalTeardown Called and started....");
    // var htmlData = "";
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secureConnection: true, // true for 465, false for other ports
        auth: {
        user: "MaSHTestt@gmail.com", // generated ethereal user
        pass: "Kimisenp@i33", // generated ethereal password
        },
    });
    console.log(transporter);
    // fs.readFile('./Test-Report/index.html', 'utf8', function(err, data){

    //     // Display the file content
    //     htmlData = data;
    // });

    var mailOptions = {
        from: "MaSHTestt@gmail.com", // sender address
        to: "waskel.1@iitj.ac.in", // list of receivers
        subject: "Mail testing 1", // Subject line
        text: "Hello Team, \nThe BVT was performed and the results are...", // plain text body
        // html: htmlData, // html body
    };
    // send mail with defined transport object

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
        return console.log(error);
        }
        console.log("Message Sent " + info.response);
    });
    console.log("Seeennnnttt");

    await page.close();
    await browser.close();
    });
})