describe('Prueba de crear una pagina nueva y eliminarla posteriormente', () =>{
    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin')
    });

    it('Debe realizar la creacion de una pagina nueva', ()=>{
        cy.get('input[id="identification"]').type('chinos@gmail.com');
        cy.wait(1000);
        cy.get('input[id="password"]').type('0123456789');
        cy.wait(1000);
        cy.get('button[id="ember5"]').click();
        cy.wait(3000);
        cy.get('a[href="#/pages/"]').click();
        cy.wait(2000);
        cy.get('a[href="#/editor/page/"]').click();
        cy.wait(2000);
        cy.get('[data-test-editor-title-input]').type('Page Test');
        cy.wait(2000);
        cy.get('div[data-kg="editor"]').type('Page text test');
        cy.wait(2000);
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.wait(2000);
        cy.get('button[data-test-button="continue"]').click();
        cy.wait(2000);
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(2000);
        cy.get('a[data-test-complete-bookmark=""]').click();
        cy.wait(2000);
    });
});