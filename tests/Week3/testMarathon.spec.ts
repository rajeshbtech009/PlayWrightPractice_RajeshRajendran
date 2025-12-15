import {expect, test} from "@playwright/test"
import { TIMEOUT } from "dns"

type supportedBrowsers = "Edge"|"Chrome"|"Firefox"|"Safari"

test("Marathon",async({context,page})=>{
await context.grantPermissions(['notifications'], {
    origin: 'https://salesforce.com/',
  });

    
    await page.goto("https://login.salesforce.com/")
    await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole("button",{name:"Log In"}).click()


    //Verify whether login to salesforce CRM
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home", {timeout:28000});
    await expect(page).toHaveTitle("Home | Salesforce");

    //app launcher
    await page.getByRole("button",{name:"App Launcher"}).click()

    //Verify app laucher has options (7)
    const options =  page.locator("//one-app-launcher-menu-item[@class='slds-dropdown__item']")
    await expect(options).toHaveCount(7);

    //Click View All option
    await page.getByRole("button",{name:"View All Applications"}).click()
    //Verify the app laucher popup window
    await expect(page.getByRole("heading",{name:"App Launcher"})).toBeVisible({timeout:15000});
    
    //Type ‘Service’ in the search box and click on the Service link.
    await page.getByRole("combobox",{name:"Search apps or items..."}).fill("Service")
    await page.locator("//div[@data-name='Service']").click()

    //Navigate to the Service dashboard and verify it is visible
    await expect(page.locator("//h1/span[text()='Service']")).toBeVisible()

    //navigate to cases tab
    await page.locator("//a/span[text()='Cases']").click();

    //User should see a list of existing leads (if any) and options to create a new case
    const rows = await page.locator('//tbody/tr');
    await expect(rows.first()).toBeVisible({ timeout: 15000 });
    const count = await rows.count();
    expect(count).toBeGreaterThanOrEqual(1);
    await expect(page.locator("//a/div[text()='New']")).toBeVisible();

    //Click on the New button to create a new case.
    await page.locator("//a/div[text()='New']").click()
    //A form to input details for the new case should appear
    await expect(page.locator('//div[@class="actionBody"]')).toBeVisible({timeout:18000})

    //Click on the Search Contacts input field in Contact Name
    await page.getByPlaceholder('Search Contacts...').click()
    //A list menu with New Contact link should be displayed.
    // Click on the New Contact link\
    const listoptions = page.getByPlaceholder('Search Contacts...')
    await expect(listoptions).toBeVisible();
    await expect(listoptions).toBeEnabled();
    await listoptions.fill("new")
    //await page.waitForTimeout(38000);
    await page.locator("(//div[@part='dropdown overlay']/lightning-base-combobox-item)[2]").click();
    

    //Fill in all the mandatory fields (Salutation, First Name, Last Name) with a valid data.
    await page.getByRole("combobox",{name:"Salutation"}).click()
    await page.locator("(//div/lightning-base-combobox-item)[2]").click()
    await page.locator('//input[@name="firstName"]').fill("Rajesh")
    await page.locator('//input[@name="lastname"]').fill("Rajendran")

    await page.getByPlaceholder("Search Accounts...").click();
    await page.locator("(//ul[@aria-label='Recent Accounts']/li)[2]").click();
    

    await page.getByRole("button",{name:"Save"}).click()




})
