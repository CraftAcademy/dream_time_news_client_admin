/* eslint-disable no-undef */
describe("Journalist can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:journalist_can_login.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/auth/validate_token",
      response: "fixture:journalist_can_login.json",
    });
    cy.visit("/");
  });

  it("successfully", () => {
    // cy.get("[data-cy='login-btn']").click();
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("journalist@mail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='submit-btn']").contains("Submit").click();
    });
    cy.get("[data-cy='header-user-email']").should(
      "contain",
      "Logged in as journalist@mail.com"
    );
    cy.get("[data-cy='flash-message']").should(
      "contain",
      "You are logged in"
    );
  });

  it("sad path: unsuccessfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      status: "401",
      response: {
        errors: ["Login failed, please try again"],
        success: false,
      },
    });
    // cy.get("[data-cy='login-btn']").click();
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("journalist@mail.com");
      cy.get("[data-cy='password']").type("wrongpassword");
      cy.get("[data-cy='submit-btn']").contains("Submit").click();
    });
    cy.get("[data-cy='header-user-email']").contains(
      "You're not logged in."
    );
  });
});
