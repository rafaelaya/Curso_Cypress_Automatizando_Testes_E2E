// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.contains('a', 'Ver pets disponíveis para adoção').click();
//     cy.get('.header__home').click();
//     cy.visit('https://adopet-frontend-cypress.vercel.app/login');
//     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//     cy.get('.header__message').click();  
//   })
// })

describe('1 - Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”.', () => {
    it('deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click()     
    })
});
//melhorar para juntar esses dois
describe('Página inicial', () => {
    beforeEach(() => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
        })
        it('Verifica texto no botão que redireciona para home', () => {
              cy.contains('a', 'Ver pets disponíveis para adoção').should('be.visible')
           });
        });