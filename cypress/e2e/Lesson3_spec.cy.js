describe('Test Case', () => {
    it('Valid Login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]')//type('standard_user')
        cy.get('[data-test="password"]')//type('secret_sauce')
        cy.get('[data-test="login-button"]')//submit('[data-test="login-button"]')//get('.app_logo')
   })
   it('Verify Clicking Menu Shows Menu', () => {
         cy.visit('https://www.saucedemo.com/')
         cy.get('[data-test="username"]')//type('standard_user')
         cy.get('[data-test="password"]')//type('secret_sauce')
         cy.get('[data-test="login-button"]')//submit('[data-test="login-button"]')//get('.app_logo')//click('[data-test="inventory-item-sauce-labs-backpack-img"]')
     })
     it('Product Gets Added to Cart', () => {
         cy.visit('https://www.saucedemo.com/')
         cy.get('[data-test="username"]')//type('standard_user')
         cy.get('[data-test="password"]')//type('secret_sauce')
         cy.get('[data-test="login-button"]')//submit('[data-test="login-button"]')//get('.app_logo')//click('[data-test="add-to-cart-sauce-labs-backpack"]')//get('[data-test="shopping-cart-link"]')
     })
     it('Cancelling Checkout', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]')//type('standard_user')
        cy.get('[data-test="password"]')//type('secret_sauce')
        cy.get('[data-test="login-button"]')//submit('[data-test="login-button"]')//get('.app_logo')//click('[data-test="add-to-cart-sauce-labs-backpack"]')//get('[data-test="shopping-cart-link"]')//click('[data-test="shopping-cart-link"]')//get('[data-test="checkout"]')//click('[data-test="checkout"]')//get('[data-test="cancel"]')//click('[data-test="cancel"]')
    })
    it('Successfull Navigation to Product Page', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]')//type('standard_user')
        cy.get('[data-test="password"]')//type('secret_sauce')
        cy.get('[data-test="login-button"]')//submit('[data-test="login-button"]')//get('.app_logo')//get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]')//click('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]')//get('[data-test="inventory-container"]')


    })
})