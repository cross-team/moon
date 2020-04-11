describe('Header works', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000/')
  })

  it('loads', () => {
    cy.findByText(/Skip to main content/i)
  })
})
