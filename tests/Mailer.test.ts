import { test, chromium } from '@playwright/test';

import axios from 'axios';

test('BVTs Testing', async () => {

    test.setTimeout(600000);

    const browser = await chromium.launchPersistentContext('', {

        headless: false,

        channel: 'msedge'

    })

    const page = await browser.newPage();

    await page.goto("file:///C:/Users/v-ywaskel/OneDrive%20-%20MAQ%20Software/Documents/Playwright-test/playwright-report/index.html");

    await page.waitForTimeout(500);

    await page.locator('a:has-text("Evidence publishing")').click();

    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    var data = JSON.stringify({

        "html": "Test Fail",

        "subject": "Test Fail",

        "images": "screenshot.png"

    })
    await page.waitForTimeout(5000);

    var config = {

        method: 'post',

        url: 'https://prod-124.westus.logic.azure.com:443/workflows/6fbea757b0b34979af9e811760f9575d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZdDA-fYvG0QuHSfwNE2foB6Bu4AQZZRoE8Xxggqa3Hc',

        headers: {

            'Content-Type': 'application/json'

        },

        data: data

    }



    await axios(config).then(function (response) {

        console.log(JSON.stringify(response.data))

    }).catch(function (error) {

        console.log(error)

    });

    await page.waitForTimeout(1000);

});