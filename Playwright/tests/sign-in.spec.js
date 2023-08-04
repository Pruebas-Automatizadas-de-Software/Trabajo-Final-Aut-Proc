const{test, expect}=require('@playwright/test');
const {signOut,signIn}=require('../testUtils');
test.beforeEach(async ({page})=>{
   await page.goto('http://localhost:2368/ghost/');
});


test.describe('Testing Ghost',()=>{

    test('Sign In with invalid credentials', async ({page})=>{
        console.log('Sign In with invalid email')
        await signIn(page, 'error@gmail.com', '0123456789')
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({path:'./screenshots/sign-in-errors/form-error-email.png'})
        console.log('-------------------------------------------')

        console.log('Sign In with invalid password')
        await signIn(page, 'chinos@gmail.com', '123')
        await new Promise(r => setTimeout(r, 3000));
        await page.screenshot({path:'./screenshots/sign-in-errors/form-error-password.png'})
        console.log('-------------------------------------------')

    });
    test('Successful Sign In', async ({page})=>{
        console.log('Inicio de sesion con credenciales validas')
        await signIn(page, 'chinos@gmail.com', '0123456789')
        await page.screenshot({path:'./screenshots/sign-in/form-completed.png'})
        await new Promise(r => setTimeout(r, 3000));
        console.log(`Clicked "Sign-In". URL is now ${page.url()}`)
        await page.screenshot({path:'./screenshots/sign-in/success-sign-in.png'})
        console.log('-------------------------------------------')
    });
    test('SignOut', async ({page})=>{
        await signIn(page, 'chinos@gmail.com', '0123456789')
        await signOut(page)
    });


});