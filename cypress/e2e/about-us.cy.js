describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('/'); // Adjust the path if your route is different
    });
  
    it('renders the Navbar', () => {
      cy.get('nav').should('exist');
    });
  
    it('renders the NavbarSub', () => {
      cy.get('main').find('nav').should('exist');
    });
  
    it('displays the hero image', () => {
      cy.get('img[src="/images/IMG1.jpg"]').should('exist');
    });
  
    it('displays the "Who We Are" heading', () => {
      cy.contains('Who We Are').should('be.visible');
      cy.contains('?').should('have.class', 'text-companyBlue');
    });
  
    it('renders all major paragraphs with company info', () => {
      cy.contains('befikr is a strategic & execution partner').should('exist');
      cy.contains('We work with businesses to exhibit').should('exist');
      cy.contains('Our Environment (E) IMPACT services').should('exist');
      cy.contains('Our Social (S) IMPACT services').should('exist');
      cy.contains('We carry a credible track record').should('exist');
      cy.contains('Established in 2016').should('exist');
      cy.contains('Our unique propositions for businesses').should('exist');
      cy.contains('Today, befikr is successfully addressing businesses').should('exist');
      cy.contains('The brand “befikr” is owned and operated').should('exist');
    });
  
    it('checks if the final image is displayed', () => {
      cy.get('img[src="/images/IMG-20250220-WA0004.jpg"]').should('exist');
    });
  
    it('renders the Footer', () => {
      cy.get('footer').should('exist');
    });
  
    it('page should have correct background color and font', () => {
      cy.get('body').should('have.class', 'font-generalSansMedium');
      cy.get('div').first().should('have.css', 'background-color', 'rgb(245, 245, 245)');
    });
  });
  