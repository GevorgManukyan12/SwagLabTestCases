import {test} from '@playwright/test';
test.only ('Basic NAvigation', async ({page})=>{
   
    await page.goto('https://www.saucedemo.com/');
    await page.fill('//input[@id="user-name"]', 'standard_user');
    await page.waitForTimeout(1000);
    await page.fill('//input[@id="password"]', 'xxx');
    await page.waitForTimeout(1000);
    await page.click('//input[@data-test="login-button"]');
    await page.waitForTimeout(3000);
})