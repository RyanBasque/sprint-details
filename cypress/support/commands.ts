Cypress.Commands.add("getByData", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("login", () => {
  cy.visit("http://localhost:5173/");
});
