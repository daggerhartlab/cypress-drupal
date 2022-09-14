
const administrator = require('../../fixtures/users/role--administrator.json');

context('Login with custom command & Create Page', () => {

  it('Login & Create Page', () => {
    // 1. Set up the application state.
    cy.login(administrator)
    cy.visit('/node/add/page')

    const title = 'Great test node!';
    const summary = 'This is a great summary of the content below. Actual content TBD...';
    const content = "<p>This content got injected whole cloth because I'm not sure a better way. Maybe changing the input format?</p>";
    const alias = '/my-great-content-alias';

    // 2. Take an action.
    cy.get('[data-drupal-selector="edit-title-0-value"]').type(title)
    cy.type_ckeditor("edit-body-0-value", content);

    cy.get('label[for="edit-body-0-value"]').click()
    cy.get('[data-drupal-selector="edit-body-0-summary"]').type(summary)

    cy.get('[data-drupal-selector="edit-path-0"]').click()
    cy.get('[data-drupal-selector="edit-path-0-alias"]').type(alias + '-' + Math.floor(Date.now()/1000));

    cy.get('[data-drupal-selector="edit-submit"]:first').click();

    // 3. Make an assertion about the resulting application state.
    cy.get('h1').should('contain', title)
    console.log(cy.get('.node__content'));
    cy.get('.node__content').should('contain.html', content);
    cy.url().should('include', alias)
  })

});
