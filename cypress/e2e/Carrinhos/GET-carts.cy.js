/// <reference types="cypress" />

describe("Given the carts api", () => {
  context("When I send GET /carrinhos", () => {
    it("Then it should return a list with all registered products", () => {
      cy.api({
        method: "GET",
        url: "/carrinhos",
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.quantidade).to.eq(response.body.carrinhos.length);
      });
    });
  });
});
