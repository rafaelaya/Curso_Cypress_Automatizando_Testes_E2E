describe('5 - Visite a página de /home do AdoPet e clique no botão “Falar com o responsável"', () => {
    it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click()  
    })
    });
