/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('LEVY Health tests', function() {

    it('test01: LEVY home page', ()=> {
        cy.visit('https://www.levy.health/en/',{failOnStatusCode: false})  //failOnStatusCode is to Handle Service Unavailable and Uncaught Exception in Cypress
        cy.url().should('include','levy.health/en')
        cy.title().should('contains','Levy Health')
        cy.get('#menu-item-wpml-ls-15-de > a > .wpml-ls-native').click()
        cy.url().should('include','levy.health')
        cy.wait(4000)
    })

    it('test02: our science', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-564 > a').click()
        cy.url().should('include','levy.health/en/our-science/')
        cy.contains('LEVY Fertility Code').should('be.visible')
        cy.contains('The algorithm creates your personal risk profile').click()
        cy.contains('Individualized blood diagnostics').click()
        cy.contains('You receive your results and discuss them with our reproductive physicians').should('be.visible')
        cy.contains('We accompany you holistically').click()
        cy.wait(4000)

    })

    it('test03: team', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-563 > a').click()
        cy.url().should('include','levy.health/en/team/')
        cy.contains('THE FOUNDERS').should('be.visible')
        cy.contains('CAROLINE MITTERDORFER').should('be.visible')
        cy.contains('SILVIA HECHER').should('be.visible')
        cy.contains('THERESA VILSMAIER').should('be.visible')
        cy.contains('SCOTT ENGLAND')
        cy.wait(4000)

    })

    it('test04: blog', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-3391 > a').click()
        cy.url().should('include','levy.health/en/blog/')
        cy.contains('LEVY Blog').should('be.visible')
        cy.wait(4000)
        
    })

    it('test05: contact', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-565 > a').click()
        cy.url().should('include','levy.health/en/contact/')
        cy.contains('Contact Us').should('be.visible')
        cy.contains('hello@levy.health').should('be.visible')
        cy.wait(4000)
        
    })

    it('test06: login', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-type-custom > a').click()
        cy.url().should('include','your.levy.health/auth/register')
        cy.get('.picker > :nth-child(2)').click()
        cy.contains('Sign up to LEVY').should('be.visible')
        cy.contains('Already a member? Log in').should('be.visible')
        cy.contains('I agree to the Terms and Conditions and Data Privacy Policy').should('be.visible')
        cy.contains('Sign up to LEVY').should('be.visible')
        cy.wait(4000)
        
    })


})  