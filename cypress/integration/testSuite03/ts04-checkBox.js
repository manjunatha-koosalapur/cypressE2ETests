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

    it.only('test02: Ecommerce page', () => {
        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop')
        cy.contains('Search').click()
        
        //check the checkboxes and verify
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .check({force: true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .should('have.checked', 'checked')

        //uncheck the checkboxes and verify
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .uncheck({force: true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .should('not.have.checked', 'checked')
        
        cy.log('End of test')
        
    })
    

}) 