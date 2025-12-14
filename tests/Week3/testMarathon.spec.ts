import {expect, test} from "@playwright/test"

type supportedBrowsers = "Edge"|"Chrome"|"Firefox"|"Safari"

test("Marathon",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole("button",{name:"Log In"}).click()

    //page.waitForTimeout()
    //page.waitForURL("https://testleaf.lightning.force.com/lightning/page/home")
await page.waitForTimeout(6000);

    //Verify whether login to salesforce CRM
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");
    await expect(page).toHaveTitle("Home | Salesforce");

    //app launcher
    await page.getByRole("button",{name:"App Launcher"}).click()

    const appLauncherOptions = await page.locator("//one-app-launcher-menu-item[@class='slds-dropdown__item']").count();
    //await page.waitForTimeout(6000);
    //await expect(appLauncherOptions.first()).toBeVisible();
    await expect(appLauncherOptions).toBeGreaterThanOrEqual(7);
})