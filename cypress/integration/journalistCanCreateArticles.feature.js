/* eslint-disable no-undef */
describe('Journalist can create articles', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth/sign_in',
      response: 'fixture:journalist_can_login.json',
      headers: {
        uid: 'journalist@mail.com',
      },
    });
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/auth/validate_token**',
      response: 'fixture:journalist_can_login.json',
    });
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/articles',
      response: { message: 'Your article was successfully created!' },
    });
    cy.visit('/');
  });

  it('successfully', () => {
    const title = 'Covid vaccine is found';
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type('journalist@mail.com');
      cy.get("[data-cy='password']").type('password');
      cy.get("[data-cy='submit-btn']").contains('Submit').click();
    });
    cy.get('[data-cy="create-article-form"]').within(() => {
      cy.get('[data-cy="input-title"]').type(title);
      cy.get('[data-cy="input-sub-title"]').type(
        'Each person should receive two doses of vaccine'
      );
      cy.get('[data-cy="input-content"]').type(
        'Russia has distributed vaccines months ago'
      );
      cy.get('[data-cy="file-input"]').attachFile('image.png');
      cy.get('[data-cy="create-article-button"]').click();
    });
    cy.get('[data-cy="response-message"]').should(
      'contain',
      'Your article was successfully created!'
    );
  });

  describe('unsuccessfully when input field is not filled in', () => {
    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/articles',
        response: { message: 'Something went wrong!' },
        status: 422,
      });
      cy.get("[data-cy='login-form']").within(() => {
        cy.get("[data-cy='email']").type('journalist@mail.com');
        cy.get("[data-cy='password']").type('password');
        cy.get("[data-cy='submit-btn']").contains('Submit').click();
      });
    });
    it('when there is no title', () => {
      cy.get('[data-cy="input-sub-title"]').type(
        'Each person should receive two doses of vaccine'
      );
      cy.get('[data-cy="input-content"]').type(
        'Russia has distributed vaccines months ago'
      );
      cy.get('[data-cy="create-article-button"]').click();
      cy.get('[data-cy="response-message"]').should(
        'contain',
        'Something went wrong!'
      );
    });
    it('when there is no content', () => {
      cy.get('[data-cy="input-title"]').type('Covid vaccine is found');
      cy.get('[data-cy="input-sub-title"]').type(
        'Each person should receive two doses of vaccine'
      );
      cy.get('[data-cy="create-article-button"]').click();
      cy.get('[data-cy="response-message"]').should(
        'contain',
        'Something went wrong!'
      );
    });
  });

  describe('unsuccessfully when an unauthorized user tries to create an article', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('should not display create article form', () => {
      cy.get('[data-cy="create-article-form"]').should('not.be.visible');
    });
  });
});
