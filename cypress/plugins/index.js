/// <reference types="cypress" />

const faker = require('faker');

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  on("task", {
    freshUser() {
      user = {
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: "true"
      };
      return user;
    }
  })
  return config
}
