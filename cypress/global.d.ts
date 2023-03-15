/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByData(selector: string): Chainable<any>;
    login(): Chainable<any>;
  }
}
