/* eslint-disable no-undef */
describe("Journalist can create articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:journalist_can_login.json",
      headers: {
        uid: "journalist@mail.com",
      },
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/articles",
      response: {},
      headers: {
        uid: "journalist@mail.com",
      },
    });
    cy.visit("/");

    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("journalist@mail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='submit-btn']").contains("Submit").click();
    });
  });

  it("successfully", () => {
    cy.get('[data-cy="create-article-form"]').within(() => {
      cy.get('[data-cy="input-title"]').type("Covid vaccine is found");
      cy.get('[data-cy="input-sub-title"]').type(
        "Each person should receive two doses of vaccine"
      );
      cy.get('[data-cy="input-author"]').type("William Super");
      cy.get('[data-cy="input-content"]').type(
        "Russia has distributed vaccines months ago"
      );
      cy.get('[data-cy="create-article-button"]').click();
    });
    cy.get('[data-cy="response-message"]').should("contain", "Your article was created");
  });
});
