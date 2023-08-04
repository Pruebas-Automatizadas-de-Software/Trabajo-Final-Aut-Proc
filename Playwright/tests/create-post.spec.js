const{test, expect}=require('@playwright/test');
const {signOut,signIn}=require('../testUtils');
test.beforeEach(async ({page})=>{
    await page.goto('http://localhost:2368/ghost/');
});


test.describe('Testing Ghost',()=>{

    test('Create a Post', async ({page})=>{
        await signIn(page, 'chinos@gmail.com', '0123456789')
        console.log('Create a post')
        console.log('-------------------------------------------')
        await page.getByRole('link', { name: 'Posts', exact: true }).click();
        await page.locator('.ember-view.gh-btn.gh-btn-primary[data-test-new-post-button]').click();
        await page.getByPlaceholder('Post title').fill('Post de prueba');
        await page.locator('.koenig-editor__editor').fill('Este es un post de prueba');
        await page.screenshot({path:'./screenshots/posts/form-post.png'})
        await page.getByPlaceholder('Post title').click();
        await page.getByRole('button', { name: 'Publish' }).click();
        await page.getByRole('button', { name: 'Continue, final review →' }).click();
        await page.screenshot({path:'./screenshots/posts/ready-to-post.png'})
        await page.evaluate(() => {
            const button = document.querySelector('.gh-btn.gh-btn-large.gh-btn-pulse[data-test-button="confirm-publish"]');
            if (button) {
                button.style.animation = 'none';
            }
        });
        await page.click('.gh-btn.gh-btn-large.gh-btn-pulse[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({path:'./screenshots/posts/success-post.png'})
        await page.click('[data-test-button="close-publish-flow"]');
        await page.click('[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({path:'./screenshots/posts/return-home.png'})

        await signOut(page)
    });

});