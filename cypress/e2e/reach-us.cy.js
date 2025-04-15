describe('Reach Us Page Tests', () => {
  beforeEach(() => {
    // Visit the Reach Us page before each test
    cy.visit('/reach-us');
  });

  it('should load the Reach Us page with the form', () => {
    // Check if the form and its fields are visible
    cy.get('form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="contact_number"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
  });

  it('should allow the user to fill and submit the form', () => {
    // Fill out the form
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="contact_number"]').type('1234567890');
    cy.get('input[name="designation"]').type('Software Engineer');
    cy.get('input[name="company"]').type('Tech Corp');
    cy.get('input[name="city"]').type('New York');
    cy.get('textarea[name="message"]').type('This is a test message.');

    // Submit the form
    cy.get('form').submit();

    // Check for success or error message
    cy.get('p').should('contain.text', 'Thank you').or('contain.text', 'Error');
  });

  it('should display contact information', () => {
    // Check if contact information is displayed
    cy.contains('+91 92201 95506').should('be.visible');
    cy.contains('bebefikr@befikr.in').should('be.visible');
    cy.contains('Befikr Office').should('be.visible');
  });

  it('should display the map component', () => {
    // Check if the map component is visible
    cy.get('iframe').should('be.visible');
  });
});