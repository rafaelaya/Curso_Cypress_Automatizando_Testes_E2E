describe('2 - Visite a página de principal do AdoPet e teste os botões header.', () => {
    it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click()  
    })
});