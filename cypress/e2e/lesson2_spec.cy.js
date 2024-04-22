describe('test cases', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io/')
        cy.get('.banner')
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')//click('#query-btn')
        cy.get('.home-list > :nth-child(3) > :nth-child(1)')//('.action-email').type('fake@email.com')
    })
})