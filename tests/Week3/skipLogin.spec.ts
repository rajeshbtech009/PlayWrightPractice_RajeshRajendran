import {test} from "@playwright/test"

test.use({storageState:'Data/Login_LTY.json'})


test("Skip Login",async({page})=>{
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home");
    console.log(await page.title())
})