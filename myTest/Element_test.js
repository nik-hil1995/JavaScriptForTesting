describe('This is a test to check the eleemnt', function(){

it('Verify that element is present or not', function(){
     cy.visit('https://members-staging.teamrwb.org/login')
     cy.get(':nth-child(2) > .TextInput_textInput__1ZPI7')
     cy.get(':nth-child(2) > .TextInput_textInput__1ZPI7').type('retrorwbtest+4@gmail.com')
     cy.get(':nth-child(3) > .TextInput_textInput__1ZPI7').type('retronyms@123')
     cy.get(':nth-child(5) > .RWBButton_button__aRkSC').click()
})
})