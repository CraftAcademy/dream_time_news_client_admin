/* eslint-disable no-undef */
describe("Journalist can create articles", () => {
  before(() => {
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
      response: { message: "Your article was successfully created!" },
    });
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("journalist@mail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='submit-btn']").contains("Submit").click();
    });
    cy.get('[data-cy="create-article-form"]').within(() => {
      cy.get('[data-cy="input-title"]').type("Covid vaccine is found");
      cy.get('[data-cy="input-sub-title"]').type(
        "Each person should receive two doses of vaccine"
      );
      cy.get('[data-cy="input-content"]').type(
        "Russia has distributed vaccines months ago"
      );
      cy.get('[data-cy="create-article-button"]').click();
    });
    cy.get('[data-cy="response-message"]').should(
      "contain",
      "Your article was successfully created!"
    );
  });

  it("unauthorized", () => {
    cy.visit("/");
    cy.get('[data-cy="create-article-form"]').should("not.be.visible");
  });
});
