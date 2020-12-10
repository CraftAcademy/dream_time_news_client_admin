/* eslint-disable no-undef */
describe("Journalist can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:journalist_can_login.json",
      header: {
        uid: "journalist@mail.com",
        access_token: "blabla",
        client: "1337",
        token_type: "Bearer",
        expiry: 169999,
      },
    });
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("[data-cy='login-btn']").click();
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("journalist@mail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='submit-btn']").contains("Submit").click();
    });
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
    cy.get("[data-cy='login-btn']").click();
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("journalist@mail.com");
      cy.get("[data-cy='password']").type("wrongpassword");
      cy.get("button").contains("Submit").click();
    });
    cy.get("[data-cy='error-message']").contains(
      "Login failed, please try again"
    );
  });
});
