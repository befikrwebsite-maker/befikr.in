describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); 
  });

  it('loads the homepage successfully', () => {
    cy.title().should('not.be.empty');
  });

  it('renders the navbar', () => {
    cy.get('nav').should('exist');
  });

  it('renders the hero section', () => {
    cy.contains('Befikr').should('exist');
    cy.get('main').find('h2').contains('Befikr: ESG Compliance Partner');
  });

  it('renders the service section', () => {
    cy.contains('Our Impact').scrollIntoView().should('exist');
  });

  it('renders the career section', () => {
    cy.contains('About Us').scrollIntoView().should('exist');
  });

  it('renders the partner carousel', () => {
    cy.contains('Our Partners').scrollIntoView().should('exist');
  });

  it('renders testimonials', () => {
    cy.contains('Our Team').scrollIntoView().should('exist');
  });

  it('renders media coverage section', () => {
    cy.contains('Interviews & Articles').scrollIntoView().should('exist');
  });

  it('renders the footer', () => {
    cy.get('footer').should('exist');
  });
});
