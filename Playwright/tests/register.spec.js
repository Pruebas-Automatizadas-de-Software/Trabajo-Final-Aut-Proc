//const{test, expect}=require('@playwright/test');
//const{register}=require('../testUtils')
// test.beforeEach(async ({page})=>{
//     await page.goto('http://localhost:2368/ghost/');
// });
//
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