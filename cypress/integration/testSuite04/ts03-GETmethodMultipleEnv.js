/// <reference types="cypress" />
//https://docs.cypress.io/api/commands/request
//https://docs.cypress.io/api/commands/request#Arguments
//https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
// npx cypress run --config-file production-config.json
//npx cypress run --spec cypress\integration\testSuite04\ts03-GETmethodMultipleEnv.js --config-file test-config.json
//npx cypress run --spec cypress\integration\testSuite04\ts03-GETmethodMultipleEnv.js --config-file uat-config.json
//npx cypress run --spec cypress\integration\testSuite04\ts03-GETmethodMultipleEnv.js --config-file production-config.json
//npx cypress run --spec cypress\integration\testSuite04\ts03-GETmethodMultipleEnv.js --config-file uat-config.json --browser chrome --headed
describe('sample API tests with alias', function() {


        it('test01:  GET method', ()=> {
            let url = Cypress.config().baseUrl
            cy.request(url).then((response)=>{
                expect(response.status).equal(200)
                expect(response.body.users[0]).has.property('username','test_1')
                expect(response.body.users[0]).has.property('id',1)
                expect(response.body.users).has.length(5)
                expect(response.body.users[0]).not.have.property('userID')
                       
                cy.log('End of test')
    
                })

            })
        

})
