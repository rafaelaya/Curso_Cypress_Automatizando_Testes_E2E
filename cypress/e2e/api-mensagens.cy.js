describe('Api Adopet', () => {
    // const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Mjc2M2ZkYS0wMGIyLTQ1ZDAtYmIzMi1iMjBmNzA2YjUwNzkiLCJhZG9wdGVyTmFtZSI6IkFwb2xvIFNvbCIsImlhdCI6MTcyNzMwMTUxNCwiZXhwIjoxNzI3NTYwNzE0fQ.awDNq0-rQlvvu1uy2P-BXmsGFWKV0mX3lAS5M0qgDY4`
    // const tempoEsperado = Math.random() * 1000
    it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/82763fda-00b2-45d0-bb32-b20f706b5079',
         headers: Cypress.env()
        //  headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            // expect(res.duration).to.be.lte(tempoEsperado) 
        })
 })
})