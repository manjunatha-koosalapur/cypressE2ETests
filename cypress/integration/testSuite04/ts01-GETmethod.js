/// <reference types="cypress" />
//https://docs.cypress.io/api/commands/request
//https://docs.cypress.io/api/commands/request#Arguments

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })

describe('sample API tests', function() {

    it('test01:  GET method', ()=> {
    cy.request('GET','https://flask-rest-api-demo.herokuapp.com/users').then((response)=>{   //If no method is defined, Cypress uses the GET method by default
        expect(response.status).equal(200)
        expect(response.body.users[0]).has.property('username','test_1')
        expect(response.body.users[0]).has.property('id',1)
        expect(response.body.users).has.length(5)
        expect(response.body.users[0]).not.have.property('userID')
        
        
        cy.log('End of test')
        })
    })

    it('test02:  GET method', ()=> {
        cy.request('https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[1]).has.property('first_name','Lindsay')
            expect(response.body.data[0]).has.property('email','michael.lawson@reqres.in')
            expect(response.body.data).has.length(6)
            expect(response.body.data).not.have.property('userID')
                   
            cy.log('End of test')
            })
        })

})
