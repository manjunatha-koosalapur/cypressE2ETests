export class Utility {
    getBaseUrl() {
        let envirnoment = Cypress.env('ENV'); //Get the value of evnironment variable i.e ENV
        if (envirnoment == 'production') //Check the value
            return "https://www.proudction-website.com"; //return desired url
        else if (envirnoment == 'uat')
            return "https://flask-rest-api-demo.herokuapp.com/users";
        else if (envirnoment == 'qa')
            return "https://reqres.in/api/users?page=2";
    }
}