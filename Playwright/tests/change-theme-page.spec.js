const{test, expect}=require('@playwright/test');
const {signOut,signIn}=require('../testUtils');
test.beforeEach(async ({page})=>{
    await page.goto('http://localhost:2368/ghost/');
});


test.describe('Testing Ghost',()=>{

    test('Change Theme of Page', async ({page})=>{
        await signIn(page, 'chinos@gmail.com', '0123456789')
        console.log('Change Theme of Page')
        console.log('-------------------------------------------')
        await page.locator('.ember-view.gh-nav-bottom-tabicon[data-test-nav="settings"]').click();
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({path:'./screenshots/theme-site/configuration-page.png'})
        await page.locator('.ember-view.gh-setting-group[data-test-nav="design"]').click();
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({path:'./screenshots/theme-site/configuration-design.png'})
        await page.locator('.gh-nav-design-tab[data-test-nav-toggle="general"]').click();
        await new Promise(r => setTimeout(r, 1000));
        await page.locator('id=accent-color').click();
        await page.locator('id=accent-color').click();
        await page.locator('id=accent-color').fill('167e72');
        await page.locator('.gh-setting-action-largeimg-delete[data-test-delete-image="coverImage"]').click();
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({path:'./screenshots/theme-site/configuration-design-final.png'})
    });

});