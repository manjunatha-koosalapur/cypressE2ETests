/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });

describe('sample E2E tests', function() {

    it.only('test01:  Ecommerce page', ()=> {
        cy.visit('http://automationpractice.com/index.php',{failOnStatusCode: false})
        cy.get('.sf-with-ul').first().click()
        //check the checkboxes and verify
        cy.get('.checkbox').check().parent().should('have.class','checked')
        //uncheck the checkboxes and verify
        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
        cy.get('#layered_id_feature_5').check({force:true})

        cy.log('End of test')
    })

    

}) 