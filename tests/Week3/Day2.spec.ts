import{expect,test} from "@playwright/test"

test("Assertion",async({page})=>{
    await page.goto("https://leafground.com/input.xhtml");
    
    //to be disabled
    await expect(page.getByPlaceholder('Disabled')).toBeDisabled();
    //await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled();

    //to be editable
    await expect(page.locator('(//input[@role="textbox"])[1]')).toBeEditable();

    //soft assert
    await expect.soft(page.locator('(//input[@role="textbox"])[1]')).toBeDisabled();

    //Clear and enter text
    await page.locator("(//h5[contains(text(),'Retrieve the typed text.')]/following::input)[1]").fill("Playwright Learning");

    



}

)