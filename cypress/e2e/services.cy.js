describe('ServicePage Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/services');
    });

    it('loads the homepage successfully', () => {
        cy.title().should('not.be.empty');
    });

    it('renders the navbar', () => {
        cy.get('nav').should('exist');
    });

    it('renders the search section', () => {
        cy.contains('Search').should('exist');
        cy.get('main').contains('Filters').should('exist');
    });

    it('renders the services grid', () => {
        cy.contains('Electrical').scrollIntoView().should('exist');
    });

    it('renders the animated pop up modal', () => {
        cy.click('Read More').should('exist');
        cy.get('.modal').should('exist');
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
