beforeEach(() => {
  cy.visit('/')
  cy.wait(2000)
})

describe('Frontpage tests', () => {
  it('Username displayed on frontpage', () => {
    cy.contains('Hei, Jorma')
  })
})
