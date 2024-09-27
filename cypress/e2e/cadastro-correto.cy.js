// describe('Pagina de Cadastro', () => {
//   it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.get('[data-test="register-button"]').click();
//     cy.get('[data-test="input-name"]').type('Apolo Sol');
//     cy.get('[data-test="input-email"]').type('sol@email.com');
//     cy.get('[data-test="input-password"]').type('Senha123');
//     cy.get('[data-test="input-confirm-password"]').type('Senha123');
//     cy.get('[data-test="submit-button"]').click();
//   })
// })

// refatorando o codigo

describe('Página de cadastro', () => {
  beforeEach(() =>{
      cy.visit('https://adopet-frontend-iota.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  })   
      it('Deve preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
          cy.cadastrar('Apolo Sol','sol@email.com', 'Senha123')  
  })
})