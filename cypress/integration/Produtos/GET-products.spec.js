/// <reference types="cypress" />

describe("Given the products api", () => {
  context("When I send GET /produtos", () => {
    it("Then it should return a list with all registered products", () => {
      cy.request({
        method: "GET",
        url: "/produtos",
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.quantidade).to.eq(response.body.produtos.length);

        Cypress._.each(response.body.produtos, (produto) => {
          expect(produto.email).to.not.be.null;
          expect(produto).to.contain.keys(
            "nome",
            "preco",
            "descricao",
            "quantidade",
            "_id"
          );
        });
      });
    });
  });
});
