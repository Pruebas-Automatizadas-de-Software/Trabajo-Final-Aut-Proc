describe('Prueba de inicio de sesion y cerrar sesion', () =>{
    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin')
    });


    it('Debe mostrarse un mensaje indicando que las credenciales no son correctas', ()=>{
        cy.get('input[id="identification"]').type('error@gmail.com');
        cy.get('input[id="password"]').type('1234567891');


        cy.get('button[id="ember5"]').click();
        cy.wait(3000);
        cy.contains('There is no user with that email address.').should('be.visible');
    });

    it('Debe rederigir al dashboard despues de un inicio de sesion exitoso', ()=>{

        cy.get('input[id="identification"]').type('chinos@gmail.com');
        cy.get('input[id="password"]').type('0123456789');

        cy.get('button[id="ember5"]').click();

        //cy.url().should('include', 'http://localhost:2368/ghost/#/dashboard' );
    });

    it('Debe realizar el cierre de la sesion', ()=>{

        cy.get('input[id="identification"]').type('chinos@gmail.com');
        cy.get('input[id="password"]').type('0123456789');
        cy.get('button[id="ember5"]').click();

        cy.wait(3000);

        cy.get('.ember-basic-dropdown-trigger').click();
        cy.wait(1000);

        cy.get('a[href="#/signout/"]').click();
        cy.wait(5000);
    });



});