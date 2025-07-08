describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('https://app.100xdevs.com')
  })

  it('is able to log in', () => {
    cy.contains('Login').should('exist')
    cy.contains('Login').click()
    cy.contains('Log in to access paid content').should('exist', { timeout: 10000 })
    cy.get('#email').type('mohit@gmail.com', { force: true });

    // // Fill in the password field
    cy.get('#password').type('252525', { force: true });

    cy.get('button').eq(5).click()

    cy.contains('View Content').should("exist", {timeout: 10000})
  })

})
