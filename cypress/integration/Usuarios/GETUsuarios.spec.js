/// <reference types="cypress" />

describe('Given the Users api', () => {
  context('When I send GET /usuarios', () => {
    it('Then it should return a list with all registered users', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios'
      })
        .should((response) => {
          Cypress._.each(response.body.usuarios, (usuario) => {
            expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
            expect(usuario.email).to.not.be.null
          })
          expect(response.status).to.eq(200)
          expect(response.body.usuarios.length).to.be.eq(2)
          expect(response.body.quantidade).to.eq(response.body.usuarios.length)
        });
    });
  });

  context('When I send GET /usuarios passing id query param', () => {
    it('Then it should return only the filtered user', () => {
      // place your tests here 
    });
  });
});