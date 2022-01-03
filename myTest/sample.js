describe('This is the first test',()=>{

it('verify that it is true or false',()=>{


   cy.visit("https://www.facebook.com/")
   cy.get('[data-testid=royal_email]').type("9140001895")
   cy.wait(4000)
   cy.get('[data-testid=royal_pass]').type("nikhil@12345")
   cy.wait(4000)
   cy.get('button[name="login"]').click()
   cy.wait(4000)
    
})





})