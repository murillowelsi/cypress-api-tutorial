/// <reference types="cypress" />

describe("Given the users api", () => {
  context("When I send GET /usuarios", () => {
    it("Then it should return a list with all registered users", () => {
      cy.request({
        method: "GET",
        url: "/usuarios",
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.quantidade).to.eq(response.body.usuarios.length);

        Cypress._.each(response.body.usuarios, (usuario) => {
          expect(usuario.email).to.not.be.null;
          expect(usuario).to.have.all.keys(
            "nome",
            "email",
            "password",
            "administrador",
            "_id"
          );
        });
      });
    });
  });

  context("When I send GET /usuarios passing id query param", () => {
    it("Then it should return only the filtered user", () => {
      cy.request({
        method: "GET",
        url: "/usuarios",
        qs: {
          _id: "0uxuPY0cbmQhpEz1",
        },
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.usuarios[0].nome).to.eq("Fulano da Silva");
      });
    });
  });
});
