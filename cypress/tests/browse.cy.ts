describe("Testes de página: Browse", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("http://localhost:5173/browse");
  });

  it("Criar sprint", () => {
    const nextDay = new Date().getDate() + 1;

    // Verifica se o botão existe e vê se há um texto específico dentro.
    cy.getByData("create-sprint")
      .should("exist")
      .and("have.text", "Criar Sprint")
      .click();

    cy.getByData("create-sprint-name").type("Sprint 1 - Cypress Test");

    // Seleciona um periodo no datePicker
    cy.getByData("create-sprint-period")
      .click()
      .get(".rs-calendar-table-cell-is-today")
      .click();
    cy.get("span").contains(nextDay).click();
    cy.get("button").contains("OK").click();

    cy.getByData("create-sprint-submit").click();
  });

  it("Não deve permitir campo em branco no Criar Sprint", () => {
    cy.getByData("create-sprint")
      .should("exist")
      .and("have.text", "Criar Sprint")
      .click();

    cy.getByData("create-sprint-submit").click();
  });
});
