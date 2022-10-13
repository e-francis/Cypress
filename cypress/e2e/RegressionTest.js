/// <reference types= "cypress" />

//Describe block describes test project name
describe("Quales Course Management Test Suite", () => {
  // it block where both test case descriotion and test scripts are wrtten
  it("Validate that user with valid details can login to Quales Course Management App successfully", () => {
    //tells cypress to naviagte to the url
    cy.visit("http://tawdry-rule.surge.sh");
    cy.get(".css-48p1y4 > .MuiButton-root").click();
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get(".MuiButton-contained").click();
    cy.get(".MuiGrid-root > .MuiButton-root").click();
  });
});
