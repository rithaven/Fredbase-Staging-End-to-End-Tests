describe('Login Test', () => {
      beforeEach(() => {
        cy.visit('https://staging.fredbase.com/'); 
      });
    
      it('should display login page', () => {
    
        cy.contains('Log in');
        cy.get('input[name="user[email]"]').should('be.visible');
        cy.get('input[name="user[password]"]').should('be.visible');
        cy.get('input[type="checkbox"]').should('be.visible')
        cy.get('input[type="submit"]').should('be.visible');
      });
    });

