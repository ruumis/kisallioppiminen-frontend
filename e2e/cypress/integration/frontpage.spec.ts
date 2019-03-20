
beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Frontpage tests', () => {
  it('Username displayed on frontpage', () => {
    cy.contains('Hei, Jorma')
  })

  it('Changes to course page when clicking on course header', () => {
    cy.get('.course-title').first().click()
    cy.url().should('include', '/courses')
  })
})
