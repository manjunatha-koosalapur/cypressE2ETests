/// <reference types="cypress" />
// --* reference *--//
// https://docs.cypress.io/api/commands/viewport


describe('view ports: size & orientation of the PXR web pages', function() {
    before( () =>{
        console.log('running my tests')
    })

    beforeEach( ()=>{
        cy.visit('https://pxr-legal.com/')
    })

    it('test01: run tests in macbook-16', ()=> {
        cy.viewport('macbook-16')
        cy.screenshot()
        cy.wait(2000)
    })

    it('test02: run tests in 1024px x 768px', ()=> {
        cy.viewport(1024,768)
        cy.wait(2000)
    })

    it('test03: run tests in samsung-s10', ()=> {
        cy.viewport('samsung-note9')
        cy.wait(2000)
    })

    it('test04: run tests in iphone-8', ()=> {
        cy.viewport('iphone-8')
        cy.get('.text-style-600 > :nth-child(3) > .color-link').click({force: true})
        cy.url().should('include','/en/team')
        cy.log('Who we are')
        cy.contains('A team of experts').should('be.visible')
        cy.contains('Simona').should('be.visible')
        cy.contains('Mohamed').should('be.visible')
        cy.contains('Janina').should('be.visible')
        cy.contains('Mirco').should('be.visible')
        cy.wait(4000)
        cy.log('End of test')
    })



})