/// <reference types="cypress" />

describe('sample E2E tests', function() {

    before(()=>{
        cy.visit('http://automationpractice.com/')
        cy.login('softProgrammer6@outlook.com', 'Cypress@1234')
    })

    it('test01: Login to account', () => {
        cy.url().should('include','controller=my-account')
        cy.contains('Welcome to your account').should('be.visible')
        cy.get('.myaccount-link-list a').should('have.length', 5)
        cy.get('.account > span').should('contain.text','soft Pgm')
    })

    it('test02: Navigate to home page', ()=>{
        cy.get('.icon-chevron-left').last().click().url().should('include','index.php')
    })

    it('test03: Search products', ()=> {
        cy.search('Dress')
        cy.get('.lighter').should('contain.text','Dress')
    })
    
    it('test04: Add product and checkout', ()=> {
        cy.search('Dress')
        // cy.get('.lighter').should('contain.text','Dress')
        cy.contains('Faded Short Sleeve T-shirts').click()
        cy.get('#add_to_cart > .exclusive').click()
        cy.get('.cross').click()
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.contains('Check out').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.wait(4000)
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').check()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.contains('Your order on My Store is complete').should('be.visible')
        cy.get('.logout').click()
        cy.log('thank you, take care')
        cy.log('End of test')
    })

})
