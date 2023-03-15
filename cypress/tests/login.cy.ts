describe("Testes de página: Login", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Deve renderizar um botão e um texto dentro da tag <p/>", () => {
    cy.getByData("login-button").get("p").contains("Entrar com o Google");
  });

  it("Executar login com google", () => {
    cy.getByData("login-button").click();
  });
});

// describe("Testes na página de login", () => {
//   beforeEach(() => cy.visit("http://localhost:3000/login"));

//   it.only("Deve executar o login", () => {
//     cy.getByData("login-input-email").type(Cypress.env("email"));
//     cy.getByData("login-input-password").type(Cypress.env("password"));
//     cy.getByData("login-button-submit").click();
//   });

//   it("Deve retornar um erro caso o email seja inválido ou vazio", () => {
//     cy.getByData("login-button-submit").click();
//     cy.get("form > :nth-child(1) > small:last-child")
//       .should("exist")
//       .and("have.text", "Campo obrigatório");

//     cy.getByData("login-input-email").type("backofficefull@trademaster");
//     cy.get("form > :nth-child(1) > small:last-child")
//       .should("exist")
//       .and("have.text", "Insira um e-mail válido");
//   });

//   it("Deve retornar um erro caso a senha esteja vazia", () => {
//     cy.getByData("login-input-email").type(Cypress.env("email"));
//     cy.getByData("login-input-password").click();
//     cy.getByData("login-input-email").click();

//     cy.get("form > :nth-child(2) > small:last-child")
//       .should("exist")
//       .and("have.text", "Campo obrigatório");
//   });
// });
