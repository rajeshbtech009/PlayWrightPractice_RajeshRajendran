import { test, expect } from '@playwright/test';

test('Alert and frames', async ({ page }) => {

    //Navigate to w3schools javascript page
    await page.goto("http://w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    // Handle alert/confirm dialog
    page.on('dialog', async (alert) => {
    console.log(`The message inside the alert says: ${alert.message()}`);
    console.log(`The alert type is: ${alert.type()}`);
    await alert.accept(); // accept confirm/alert
  });

    // Locate iframe
    const frame = page.frameLocator('iframe[id="iframeResult"]');

// Click "Try it" button inside iframe
  await frame.locator("//button[text()='Try it']").click();

  // Validate success text after accepting alert
  await expect(frame.locator('text=You pressed OK!')).toBeVisible();

  // Just for demo (not recommended in real tests)
  await page.waitForTimeout(2000);
});