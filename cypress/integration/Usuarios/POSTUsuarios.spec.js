/// <reference types="cypress" />

let fakeUser;

describe("Given the Users api", () => {
  beforeEach(() => {
    cy.task("freshUser").then((user) => {
      fakeUser = user;
      cy.log(JSON.stringify(fakeUser));
    });
  });

  context("When I send POST /usuarios", () => {
    it("Then it should create a new user", () => {
      cy.request({
        method: "POST",
        url: "/usuarios",
        body: fakeUser,
      }).should((response) => {
        expect(response.status).eq(201);
        expect(response.body.message).eq("Cadastro realizado com sucesso");
      });
    });
  });
});
