describe("Visitor can visit site", () => {
  it("is expected to show name of site", () => {
    cy.visit("/");
    cy.get("[data-cy='siteName']").should("contain", "Dream Time News");
  });
});
