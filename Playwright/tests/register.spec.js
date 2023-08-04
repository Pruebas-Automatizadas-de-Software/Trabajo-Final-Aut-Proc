// const{test, expect}=require('@playwright/test');
// test.beforeEach(async ({page})=>{
//     await page.goto('http://localhost:2368/ghost/');
// });
//
// async function register(page, blogTitle, name, email, password){
//     await new Promise(r => setTimeout(r, 1000));
//     await page.screenshot({path:'./screenshots/register/form.png'})
//     await page.locator('id=blog-title').click();
//     await page.locator('id=blog-title').fill(blogTitle);
//     await page.locator('id=name').click();
//     await page.locator('id=name').fill(name);
//     await page.locator('id=email').click();
//     await page.locator('id=email').fill(email);
//     console.log("email invalido inyectado")
//     await page.locator('id=password').click();
//     await page.locator('id=password').fill(password);
//     await page.locator('id=ember4').click();
//     await new Promise(r => setTimeout(r, 1000));
//
// }
//
// test.describe('Testing Ghost',()=>{
//     test('Register with invalid credentials', async ({page})=>{
//         console.log('Register with invalid email')
//         await register(page, 'Chinos Automatizados', 'Chinos Automatizados', 'asdkajshd','0123456789')
//         await page.screenshot({path:'./screenshots/register/error-register-email.png'})
//         console.log('-------------------------------------------')
//
//         console.log('Register with invalid password')
//         await register(page, 'Chinos Automatizados', 'Chinos Automatizados', 'chinos@gmail.com','123')
//         await page.screenshot({path:'./screenshots/register/error-register-password.png'})
//         console.log('-------------------------------------------')
//     });
//
//     test('Successful Register', async ({page})=>{
//         console.log('Register with invalid email')
//         await register(page, 'Chinos Automatizados', 'Chinos Automatizados', 'chinos@gmail.com','0123456789')
//         await page.screenshot({path:'./screenshots/register/register-successful.png'})
//         console.log('-------------------------------------------')
//
//
//     });
//
//
// });