describe('Jobs Page Tests', () => {
    beforeEach(() => {
      // Visit the jobs page before each test
      cy.visit('/careers/jobs');
    });
  
    it('should render the Navbar and Footer', () => {
      // Check if Navbar is visible
      cy.get('nav').should('be.visible');
  
      // Check if Footer is visible
      cy.get('footer').should('be.visible');
    });
  
    it('should display job cards', () => {
      // Check if job cards are rendered
      cy.get('.grid > div').should('have.length.greaterThan', 0);
    });
  
    it('should filter jobs by search keywords', () => {
      // Type a keyword into the search bar
      cy.get('input[placeholder="Search Keywords"]').type('auditor');
  
      // Verify that only relevant job cards are displayed
      cy.get('.grid > div').each(($el) => {
        cy.wrap($el).should('contain.text', 'auditor');
      });
    });
  
    it('should filter jobs by team, position, and location', () => {
      // Open the Team dropdown and select a team
      cy.contains('Team').click();
      cy.contains('Electrical and Energy Audits').click();
  
      // Open the Position dropdown and select a position
      cy.contains('Position').click();
      cy.contains('Electrical Safety Auditor').click();
  
      // Open the Location dropdown and select a location
      cy.contains('Location').click();
      cy.contains('Delhi NCR').click();
  
      // Verify that filtered job cards match the selected filters
      cy.get('.grid > div').each(($el) => {
        cy.wrap($el).should('contain.text', 'Electrical Safety Auditor');
        cy.wrap($el).should('contain.text', 'Electrical and Energy Audits');
        cy.wrap($el).should('contain.text', 'Delhi NCR');
      });
    });
  
    it('should clear all filters', () => {
      // Apply some filters
      cy.contains('Team').click();
      cy.contains('Electrical and Energy Audits').click();
      cy.contains('Position').click();
      cy.contains('Electrical Safety Auditor').click();
  
      // Click "Clear All Filters"
      cy.contains('Clear All Filters').click();
  
      // Verify that all job cards are displayed
      cy.get('.grid > div').should('have.length.greaterThan', 0);
    });
  
    it('should open and close the job details modal', () => {
      // Click on a job card to open the modal
      cy.get('.grid > div').first().click();
  
      // Verify that the modal is visible
      cy.get('.fixed.inset-0').should('be.visible');
  
      // Close the modal
      cy.get('button[aria-label="Close modal"]').click();
  
      // Verify that the modal is no longer visible
      cy.get('.fixed.inset-0').should('not.exist');
    });
  
    it('should display the "Apply Now" form when clicked', () => {
      // Click on a job card to open the modal
      cy.get('.grid > div').first().click();
  
      // Click the "Apply Now" button
      cy.contains('Apply Now').click();
  
      // Verify that the form is visible
      cy.get('form').should('be.visible');
    });
  
    it('should update the URL when a job is selected', () => {
      // Click on a job card to open the modal
      cy.get('.grid > div').first().click();
  
      // Verify that the URL contains the jobId
      cy.url().should('include', '?jobId=');
  
      // Close the modal
      cy.get('button[aria-label="Close modal"]').click();
  
      // Verify that the URL no longer contains the jobId
      cy.url().should('not.include', '?jobId=');
    });
  });