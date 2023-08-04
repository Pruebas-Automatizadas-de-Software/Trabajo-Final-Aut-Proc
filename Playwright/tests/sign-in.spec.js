const{test, expect}=require('@playwright/test');
test.beforeEach(async ({page})=>{
   await page.goto('http://localhost:2368/ghost/');
});

async function signIn(page, email, password){
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./screenshots/sign-in/page.png'})
    await page.locator('id=identification').click();
    await page.locator('id=identification').fill(email);
    await page.locator('id=password').click();
    await page.locator('id=password').fill(password);
    await page.locator('id=ember5').click();

}
async function signOut(page){
    console.log('Cerrar sesion')
    console.log('-------------------------------------------')
    await page.click('[role="button"][aria-expanded="false"]');
    await page.getByRole('link', { name: 'Sign out' }).click();
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path:'./screenshots/sign-out/success-sign-out.png'})
    console.log(`Sign-out"`)
}

test.describe('Testing Ghost',()=>{

    test('Sign In with invalid credentials', async ({page})=>{
        console.log('Sign In with invalid email')
        await signIn(page, 'error@gmail.com', '0123456789')
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({path:'./screenshots/sign-in-errors/form-error-email.png'})
        console.log('-------------------------------------------')

        console.log('Sign In with invalid password')
        await signIn(page, 'chinos@gmail.com', '123')
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({path:'./screenshots/sign-in-errors/form-error-password.png'})
        console.log('-------------------------------------------')

    });
    test('Successful Sign In', async ({page})=>{
        console.log('Inicio de sesion con credenciales validas')
        await signIn(page, 'chinos@gmail.com', '0123456789')
        await page.screenshot({path:'./screenshots/sign-in/form-completed.png'})
        await new Promise(r => setTimeout(r, 2000));
        console.log(`Clicked "Sign-In". URL is now ${page.url()}`)
        await page.screenshot({path:'./screenshots/sign-in/success-sign-in.png'})
        console.log('-------------------------------------------')
    });
    test('SignOut', async ({page})=>{
        await signIn(page, 'chinos@gmail.com', '0123456789')
        await signOut(page)
    });
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
        await page.screenshot({path:'.screenshots/posts/ready-to-post.png'})
        await page.evaluate(() => {
            const button = document.querySelector('.gh-btn.gh-btn-large.gh-btn-pulse[data-test-button="confirm-publish"]');
            if (button) {
                button.style.animation = 'none';
            }
        });
        await page.click('.gh-btn.gh-btn-large.gh-btn-pulse[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({path:'./screenshots/posts/success-post.png'})
        await page.click('[data-test-button="close-publish-flow"]');
        await page.click('[data-test-link="posts"]');
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({path:'./screenshots/posts/return-home.png'})

        await signOut(page)
    });

});