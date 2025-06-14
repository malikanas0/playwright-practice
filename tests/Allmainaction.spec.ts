import { test, expect } from '@playwright/test';

test.describe('Practice all concept of playwright', () => {
    test('Try to upload file', async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form')
       // await page.getByTestId('[id="uploadPicture"]').click()
    })
})