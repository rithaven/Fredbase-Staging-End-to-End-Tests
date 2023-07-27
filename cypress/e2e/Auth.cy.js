const testData = require('../credential.json');

describe('Login Page', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err) => {
      return false;
    });
  });

  it('should login successfully with valid credentials', () => {
    cy.visit('https://staging.fredbase.com/en');

    const {userEmail, userPassword} = testData.user1;

    cy.get('input[placeholder="Email address"]').invoke('val', userEmail);
    cy.get('input[placeholder="Password"]').invoke('val', userPassword);

    cy.get('input[type="checkbox"]').check();

    cy.wait(500);
    cy.get('input[type="submit"]').click();
  });
});