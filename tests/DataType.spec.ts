import {test, chromium} from "@playwright/test"

test('launch a browser', async({page})=>{

   const browser = chromium.launch();
   const context = (await browser).newContext();
   const newPage = (await context).newPage();
   

 await (await newPage).goto('https://platform.testleaf.com/');

})