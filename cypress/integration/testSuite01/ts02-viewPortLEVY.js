/// <reference types="cypress" />
// --* reference *--//
// https://docs.cypress.io/api/commands/viewport

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('view ports: size & orientation of the LEVY web pages', function() {
    before( () =>{
        console.log('running my tests')
    })

    beforeEach( ()=>{
        cy.visit('https://www.levy.health/en/')
    })

    it('test01: run tests in macbook-16', ()=> {
        cy.viewport('macbook-16')
        cy.screenshot()
        cy.wait(2000)
    })

    it('test02: run tests in ipad-2', ()=> {
        cy.viewport('ipad-2')
        cy.wait(2000)
    })

    it('test03: run tests in iphone-8', ()=> {
        cy.viewport('iphone-8')
        cy.wait(2000)
    })

    it('test04: run tests in 1024px x 768px', ()=> {
        cy.viewport(1024,768)
        cy.wait(2000)
    })

    it('test05: run tests in samsung-s10', ()=> {
        cy.viewport('samsung-note9')
        cy.wait(2000)
        cy.get('.bar-img').click()
        cy.get('#menu-item-563 > a').click()
        cy.url().should('include','levy.health/en/team/')
        cy.contains('THE FOUNDERS').should('be.visible')
        cy.contains('CAROLINE MITTERDORFER').should('be.visible')
        cy.contains('SILVIA HECHER').should('be.visible')
        cy.contains('THERESA VILSMAIER').should('be.visible')
        cy.contains('SCOTT ENGLAND')
        cy.wait(4000)
        cy.log('End of test')
    })

    it('test06: LEVY Health Social link - LinkedIn', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get(':nth-child(3) > a > img').click()
        cy.url().should('include','linkedin.com/company/')
        cy.log('End of test')        
    })

})