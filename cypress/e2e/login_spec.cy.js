describe('Test Case', () => {
    it('Launches Application', () => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('Valid Username', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]')//type('standard_user')
   })
   it('Valid Password', () => {
         cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="password"]')//type('secret_sauce')
    })
    it('Click the Login Button', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="login-button"]')//click('[data-test="login-button"]')
    })
    it('CVerify successful Login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]')//type('standard_user')
        cy.get('[data-test="password"]')//type('secret_sauce')
        cy.get('[data-test="login-button"]')//click('[data-test="login-button"]')//get('.app_logo')
    })
})