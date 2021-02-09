describe("IndexPage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders all sections", () => {
    cy.get("#hero").should("exist")
    cy.get("#about").should("exist")
    cy.get("#contact").should("exist")
  })

