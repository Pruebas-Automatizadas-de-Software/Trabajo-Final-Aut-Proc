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
        console.log(`Clicked "Sign-In". URL is now ${page.url()}`)
        await page.screenshot({path:'./sign-in/success-sign-in.png'})

        //hacer un post
        await page.getByRole('link', { name: 'Posts', exact: true }).click();
        await page.locator('.ember-view.gh-btn.gh-btn-primary[data-test-new-post-button]').click();
        await page.getByPlaceholder('Post title').fill('Post de prueba');
        await page.locator('.koenig-editor__editor').fill('Este es un post de prueba');
        await page.screenshot({path:'./posts/form-post.png'})
        await page.getByPlaceholder('Post title').click();
        await page.getByRole('button', { name: 'Publish' }).click();
        await page.getByRole('button', { name: 'Continue, final review →' }).click();
        await page.screenshot({path:'./posts/ready-to-post.png'})
        await page.evaluate(() => {
            const button = document.querySelector('.gh-btn.gh-btn-large.gh-btn-pulse[data-test-button="confirm-publish"]');
            if (button) {
                button.style.animation = 'none';
            }
        });
        await page.click('.gh-btn.gh-btn-large.gh-btn-pulse[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({path:'./posts/success-post.png'})
        await page.click('[data-test-button="close-publish-flow"]');
        await page.click('[data-test-link="posts"]');
        await page.screenshot({path:'./posts/return-home.png'})
        //sign out
        await page.click('[role="button"][aria-expanded="false"]');
        await page.getByRole('link', { name: 'Sign out' }).click();
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({path:'./sign-out/success-sign-out.png'})
        console.log(`Sing-out"`)

        //Finalizar la prueba
        await browser.close();
    }
    return;
})();//Llamado propio de la función