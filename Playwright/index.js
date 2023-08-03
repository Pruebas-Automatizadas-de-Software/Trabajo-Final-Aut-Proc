//Importar Playwright
const playwright = require('playwright');

const url = 'http://localhost:2368/ghost/';

//Función flecha asíncrona
(async () => {
    //Definir los navegadores en los que se quiere hacer la prueba
    for (const browserType of ['chromium']) {
        //Contenido de la prueba
        console.log(browserType+'-------------------------------------------')

        //Creación del objeto browser, el contexto del mismo y el objeto page para manejar la página
        const browser = await playwright[browserType].launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        /*
        //test register
        await page.goto(url);
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({path:'./register/pagina.png'})
        await page.locator('id=blog-title').click();
        await page.locator('id=blog-title').fill('Chinos Automatizados');
        await page.locator('id=name').click();
        await page.locator('id=name').fill('Chinos Automatizados');
        await page.locator('id=email').click();
        await page.locator('id=email').fill('chinos@gmail.com');
        await page.locator('id=password').click();
        await page.locator('id=password').fill('0123456789');
        await page.screenshot({path:'./register/login-form-completed.png'})
        //actualizar el id debido a que cambia en cada instalación
        await page.locator('id=ember4').click();
        await new Promise(r => setTimeout(r, 7000));
        console.log(`Clicked "register". URL is now ${page.url()}`)
        await page.screenshot({path:'./register/success-login.png'})
        console.log('Project loaded')
        */

        //sign in
        await page.goto(url);
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({path:'./sign-in/page.png'})
        await page.locator('id=identification').click();
        await page.locator('id=identification').fill('chinos@gmail.com');
        await page.locator('id=password').click();
        await page.locator('id=password').fill('0123456789');
        await page.locator('id=ember5').click();
        await page.screenshot({path:'./sign-in/form-completed.png'})
        await new Promise(r => setTimeout(r, 7000));
        console.log(`Clicked "register". URL is now ${page.url()}`)
        await page.screenshot({path:'./sign-in/success-sign-in.png'})

        //sign out
        await page.locator('id=ember34').click();
        await page.getByRole('link', { name: 'Sign out' }).click();
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({path:'./sign-out/success-sign-out.png'})
        console.log(`Sing-out"`)

        //Finalizar la prueba
        await browser.close();
    }
    return;
})();//Llamado propio de la función