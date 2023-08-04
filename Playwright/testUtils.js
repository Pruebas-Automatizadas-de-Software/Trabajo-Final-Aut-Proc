async function register(page, blogTitle, name, email, password){
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'./screenshots/register/form.png'})
    await page.locator('id=blog-title').click();
    await page.locator('id=blog-title').fill(blogTitle);
    await page.locator('id=name').click();
    await page.locator('id=name').fill(name);
    await page.locator('id=email').click();
    await page.locator('id=email').fill(email);
    console.log("email invalido inyectado")
    await page.locator('id=password').click();
    await page.locator('id=password').fill(password);
    await page.locator('id=ember4').click();
    await new Promise(r => setTimeout(r, 3000));
}
async function signIn(page, email, password){
    await new Promise(r => setTimeout(r, 3000));
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
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({path:'./screenshots/sign-out/success-sign-out.png'})
    console.log(`Sign-out"`)
}
module.exports = {
    register,
    signIn,
    signOut

};