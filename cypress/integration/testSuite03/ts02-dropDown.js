/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('sample E2E tests', function() {

    it('test01: OrangeHRM Registration page', ()=> {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/',{failOnStatusCode: false})
        cy.get('#Form_submitForm_Country').select('India').should('have.value','India')
        cy.get('#Form_submitForm_State').select('Karnataka').should('have.value','Karnataka')
        cy.wait(2000)
        cy.log('End of test')
    })

    it.skip('test02: Google search', ()=> {
        cy.visit('https://www.google.com/',{failOnStatusCode: false})
        cy.get('[name="q"]').type('cypress.io')
        cy.get('.G43f7e').find('li span').contains('cypress.io').click()
        cy.wait(2000)
        cy.log('End of test')
    })

    it.only('test03:  Ecommerce page', ()=> {
        cy.visit('http://automationpractice.com/index.php',{failOnStatusCode: false})
        cy.get('#search_query_top').type('Dresses')
        cy.wait(4000)
        cy.get('.ac_results').find('li').contains('Printed Dress').click()
        cy.log('End of test')
    })

}) 