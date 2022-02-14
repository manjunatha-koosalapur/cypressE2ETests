/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('sample E2E tests', function() {

    it.only('test01:  Ecommerce page', ()=> {
    cy.visit('URL',{failOnStatusCode: false})
    cy.url().should('include','/about')



    })

})
