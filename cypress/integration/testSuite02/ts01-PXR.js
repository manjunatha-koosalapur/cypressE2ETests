/// <reference types="cypress" />

describe('PXR tech enabled law firm  - a lawtech company', function() {

    it('test01: PXR Home page', ()=> {
        cy.visit('https://pxr-legal.com/',{failOnStatusCode: false})  //failOnStatusCode is to Handle Service Unavailable and Uncaught Exception in Cypress
        cy.url().should('include','pxr-legal')
        cy.title().should('contains','PXR Legal')
        cy.contains('Privacy Policy').click()
        cy.contains('Imprint').click()
        cy.go(-2)           //cy.go('back')
        cy.wait(4000)
    })

    it('test02: PXR Expertise', ()=> {
        cy.visit('https://pxr-legal.com/')
        cy.get('.navicon > [aria-hidden="true"]').click()
        cy.get('.text-style-600 > :nth-child(2) > .color-link').click()
        cy.url().should('include','/en/expertise')
        cy.log('Our Focus')
        cy.contains('Entrepreneurs and Emerging Technology Companies').should('be.visible')
        cy.contains('Venture Capital and Growth Equity Investors').should('be.visible')
        cy.contains('Maturing and Public Technology Companies').should('be.visible')
        cy.log('Our Services')
        cy.contains('Corporate & Transactions Litigation Taxes IP/IT & Data Protection Employment & Executive Compensation Legal Tech').should('be.visible')
        cy.wait(4000)

    })

    it('test03: PXR team', ()=> {
        cy.visit('https://pxr-legal.com/')
        cy.get('.navicon > [aria-hidden="true"]').click()
        cy.get('.text-style-600 > :nth-child(3) > .color-link').click()
        cy.url().should('include','/en/team')
        cy.log('Who we are')
        cy.contains('A team of experts').should('be.visible')
        cy.contains('Simona').should('be.visible')
        cy.contains('Mohamed').should('be.visible')
        cy.contains('Janina').should('be.visible')
        cy.contains('Mirco').should('be.visible')
        cy.wait(4000)

    })

    it('test04: Insights', ()=> {
        cy.visit('https://pxr-legal.com/')
        cy.get('.navicon > [aria-hidden="true"]').click()
        cy.get(':nth-child(5) > .color-link').click()
        cy.url().should('include','/en/insights')
        cy.contains('PXR advises Cosuno on its $30 million Series B financing').should('be.visible')
        cy.get(':nth-child(1) > a.block > .text-style-700').click()
        cy.contains('PXR has advised the Berlin-based startup Cosuno')
        cy.wait(4000)

    })

    it('test05: PXR Contact', ()=> {
        cy.visit('https://pxr-legal.com/')
        cy.get('.navicon > [aria-hidden="true"]').click()
        cy.get(':nth-child(6) > .color-link').click()
        cy.url().should('include','/en/contact')
        cy.log('PXR Contact Number')
        cy.contains('+49 (0)30 629 3145 0').should('be.visible')
        cy.log('PXR contact emailID')
        cy.contains('info@pxr-legal.com')
        cy.wait(4000)
              
    })

    it('test06: PXR Social link - LinkedIn', ()=> {
        cy.visit('https://pxr-legal.com/')
        cy.get('.cluster > .block').click()
        // cy.wait(2000)

    })
})