/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('sample E2E tests', function() {

    it('test01: OrangeHRM Registration page', ()=> {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/',{failOnStatusCode: false})
        cy.get('.optanon-alert-box-button-middle > .optanon-allow-all').click()
        cy.contains('Platform').trigger('mouseover')
        cy.contains('Onboarding').click({force: true})
        cy.contains('Resources').trigger('mouseover')
        cy.contains('OrangeHRM API').click({force: true})
        cy.contains('here').click()
        cy.log('End of test')
    })

    it.only('test02:  Ecommerce page', ()=> {
        cy.visit('http://automationpractice.com/index.php',{failOnStatusCode: false})
        cy.get('#search_query_top').type('Dresses')
        cy.wait(4000)
        cy.get('.ac_results').find('li').contains('Printed Dress').click()
        cy.get('.exclusive > span').click()
        cy.get('.cross').click()
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.log('End of test')
    })

    

}) 