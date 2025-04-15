describe('About The Founders Page', () => {
    beforeEach(() => {
      cy.visit('/'); // Update the path if the route is different
    });
  
    it('renders Navbar and Footer', () => {
      cy.get('nav').should('exist');
      cy.get('footer').should('exist');
    });
  
    it('renders the heading "About The Founders."', () => {
      cy.contains('About The Founders').should('be.visible');
      cy.contains('.').should('have.class', 'text-companyBlue');
    });
  
    it('displays founder Sumit Srivastava section', () => {
      cy.contains('Sumit Srivastava').should('have.class', 'text-companyBlue');
      cy.contains('Sumit Srivastava is a passionate fintech entrepreneur').should('exist');
      cy.contains('NDIM-Alumni').should('exist');
      cy.contains('Born at Dhanbad').should('exist');
    });
  
    it('displays founder Chirajay Sharma section', () => {
      cy.contains('Chirajay Sharma').should('have.class', 'text-companyBlue');
      cy.contains('Chirajay Sharma is a passionate marketing entrepreneur').should('exist');
      cy.contains('IIM Kolkata Alumni').should('exist');
      cy.contains('Born at Jodhpur').should('exist');
    });
  
    it('checks that horizontal divider exists between founder bios', () => {
      cy.get('div.bg-companyBlue').should('exist');
    });
  
    it('has consistent background and font styles', () => {
      cy.get('div').first().should('have.css', 'background-color', 'rgb(245, 245, 245)');
      cy.get('body').should('have.class', 'font-generalSansMedium');
    });
  
    it('validates max width constraints on content', () => {
      cy.get('.max-w-4xl').should('exist');
      cy.get('.max-w-2xl').should('exist');
    });
  
    it('checks that both founder sections have at least one image placeholder', () => {
      cy.get('img').should('have.length.at.least', 2);
    });
  });
  