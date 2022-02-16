//https://www.npmjs.com/package/cypress-file-upload 
//Installation
// The package is distributed via npm and should be installed as one of your project's devDependencies:
// npm install --save-dev cypress-file-upload

describe('file upload use cases', () => {
    
    it('test01: simple file upload', ()=> {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const yourFixturePath = 'image.jpeg';
        cy.get('#fileUpload').attachFile(yourFixturePath)
        cy.log('End of test')
    })

    it('test02: drag and drop file upload', ()=> {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        const yourFixturePath = 'image.jpeg';
        cy.get('#file').attachFile(yourFixturePath);
        cy.get('.box__success').should('contain.text','Done! Upload more?')
        cy.log('End of test')
    })

    it('test03: multiple files upload', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath1 = 'image.jpeg';
        const yourFixturePath2 = 'testFile.pdf';
        const yourFixturePath3 = 'runTest.txt';
        const yourFixturePath4 = 'zoom.jpg';

        cy.get('#filesToUpload')
        .attachFile(yourFixturePath1)
        .attachFile(yourFixturePath2)
        .attachFile(yourFixturePath3)
        .attachFile(yourFixturePath4)
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
        cy.log('End of test')
    })

    it('test04: change file name while uploading', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'customerDetails.json';
        cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath, fileName: 'user.json' })
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
        cy.log('End of test')
    })




})