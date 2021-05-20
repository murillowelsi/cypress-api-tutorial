/// <reference types="cypress" />

describe('Given the Users api', () => {
  context('When I send POST /usuarios', () => {
    it('Then it should create a new user', () => {
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
          nome: "Aaq da Silva",
          email: "beltranaaq@qa.com.br",
          password: "teste",
          administrador: "true"
        }
      })
        .should((response) => {
          expect(response.body.message).eq("Cadastro realizado com sucesso")
        });
    });
  });
});