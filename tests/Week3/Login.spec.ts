import{test} from "@playwright/test"

test("Login functionality",async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.getByRole("textbox",{name:"Username"}).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole("button",{name:"Log In"}).click()

    await page.context().storageState({path:"Data/Login_LTY"})
})