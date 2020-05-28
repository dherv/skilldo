describe("first test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("http://localhost:3000");

    cy.get("button");
  });
});
