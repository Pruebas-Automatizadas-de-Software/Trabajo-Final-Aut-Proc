import {faker} from '@faker-js/faker'

describe('Prueba de agregar un post', () =>{
  beforeEach(()=>{
      cy.visit('http://localhost:2368/ghost/#/dashboard')
  });

  it('Crear un post', ()=>{

      cy.get('input[id="identification"]').type('chinos@gmail.com');
      cy.get('input[id="password"]').type('0123456789');

      cy.get('button[id="ember5"]').click();
      cy.wait(5000);

      cy.url().should('include', 'http://localhost:2368/ghost/#/dashboard' );

      cy.get('a[data-test-nav="posts"]').click();

      cy.url().should('include','http://localhost:2368/ghost/#/post');

      cy.get('a[data-test-new-post-button]').click();

      cy.url().should('include','http://localhost:2368/ghost/#/editor/post');

      cy.wait(2000);

      const tituloFalso = faker.lorem.words(10); // Generará una frase de 10 palabras

      cy.get('textarea[data-test-editor-title-input]').type(tituloFalso);
      cy.get('textarea[data-test-editor-title-input]').should('have.value', tituloFalso);

      // Generar un contenido falso utilizando Faker para el post
      const contenidoFalso = faker.lorem.paragraphs(3); // Genera 3 párrafos de contenido falso

      cy.get('div[data-kg="editor"]').type(contenidoFalso);

      cy.wait(1000);

      cy.get('button[data-test-button="publish-flow"]').click();

      cy.wait(1000);

      cy.get('button[data-test-button="continue"]').click();

      cy.wait(1000);

      cy.get('button[data-test-button="confirm-publish"]').click();

      cy.wait(1000);

      cy.get('a[data-test-complete-bookmark]').click();
  });
});