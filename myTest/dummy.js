describe('Test Load', function(){

    it('Verify that website is loading or not', function(){

          cy.visit('https://members-staging.teamrwb.org/login')
          cy.get('input.TextInput_textInput__1ZPI7 formInput').type('retrorwbtest+1@gmail.com')
          cy.get('input.TextInput_textInput__1ZPI7 formInput').type('retronyms@123')

          
    })
})