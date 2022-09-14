
const administrator = require('../../fixtures/users/role--administrator.json');

context('Login Form', () => {

  it('Login Directly', () => {

    // 1. Set up the application state.
    cy.visit('user/login')

    // 2. Take an action.
    cy.get('#edit-name').type(administrator.username)
    cy.get('#edit-pass').type(administrator.password)
    cy.get('#edit-submit').click()

    // 3. Make an assertion about the resulting application state.
    cy.get('h1').should('contain', administrator.username)
  })

});
