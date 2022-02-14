/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('LEVY Health tests', function() {

    it('test01: LEVY Home page', ()=> {
        cy.visit('https://www.levy.health/en/',{failOnStatusCode: false})  //failOnStatusCode is to Handle Service Unavailable and Uncaught Exception in Cypress
        cy.url().should('include','levy.health/en')
        cy.title().should('contains','Levy Health')
        cy.get('#menu-main-menu-en-1 > .menu-item-564 > a').click()
        cy.url().should('include','levy.health/en/our-science/')
        cy.wait(4000)
        cy.go('back')
        cy.url().should('include','levy.health/en')
        cy.get('#menu-main-menu-en-1 > .menu-item-563 > a').click()
        cy.url().should('include','levy.health/en/team/')
        cy.go('back')
        cy.wait(4000)
        cy.url().should('include','levy.health/en')
        cy.wait(4000)
        cy.get('#menu-main-menu-en-1 > .menu-item-3391 > a').click()
        cy.url().should('include','levy.health/en/blog/')
        cy.get('#menu-main-menu-en-1 > .menu-item-565 > a').click()
        cy.url().should('include','levy.health/en/contact/')
        cy.go('back')
        cy.url().should('include','levy.health/en/blog/')
        cy.go('back')
        cy.url().should('include','levy.health/en')
        cy.get('#menu-main-menu-en-1 > .menu-item-type-custom > a').click()
        cy.url().should('include','your.levy.health/auth/register')
        cy.go('back')
        cy.go('back')
        cy.url().should('include','levy.health/en')
        cy.log('End of test')
    })

    it('test02: Browser Back & Forward', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.url().should('include','levy.health/en')
        cy.get('#menu-main-menu-en-1 > .menu-item-564 > a').click()
        cy.url().should('include','levy.health/en/our-science/')
        cy.get('#menu-main-menu-en-1 > .menu-item-563 > a').click()
        cy.url().should('include','levy.health/en/team/')
        cy.get('#menu-main-menu-en-1 > .menu-item-3391 > a').click()
        cy.url().should('include','levy.health/en/blog/')
        cy.get('#menu-main-menu-en-1 > .menu-item-565 > a').click()
        cy.url().should('include','levy.health/en/contact/')
        cy.go('back')
        cy.url().should('include','levy.health/en/blog/')
        // cy.go('back')
        cy.go(-1)
        cy.url().should('include','levy.health/en/team/')
        cy.go('back')
        cy.url().should('include','levy.health/en/our-science/')
        // cy.go('back')
        cy.go(-1)
        cy.url().should('include','levy.health/en')
        cy.go('forward')
        cy.url().should('include','levy.health/en/our-science/')
        // cy.go('forward')
        cy.go(1)
        cy.url().should('include','levy.health/en/team/')
        cy.go('forward')
        cy.url().should('include','levy.health/en/blog/')
        // cy.go('forward')
        cy.go(1)
        cy.url().should('include','levy.health/en/contact/')
        cy.log('End of test')
    })

    it.only('test03: Reload web page', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-563 > a').click()
        cy.wait(4000)
        cy.reload()
        cy.contains('Team').should('be.visible')
        cy.reload(true).contains('Team').should('be.visible')
        cy.log('End of test')
    })


    it('test04: login', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-type-custom > a').click()
        cy.url().should('include','your.levy.health/auth/register')
        cy.get('.picker > :nth-child(2)').click()
        cy.contains('Sign up to LEVY').should('be.visible')
        cy.contains('Already a member? Log in').should('be.visible')
        cy.contains('I agree to the Terms and Conditions and Data Privacy Policy').should('be.visible')
        cy.contains('Sign up to LEVY').should('be.visible')
        cy.wait(4000)
        cy.log('End of test')
    })

})  