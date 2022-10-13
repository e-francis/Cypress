/// <reference types= "cypress" />

//Describe block describes test project name
describe("Quales Course Management Test Suite", () => {
  const pasteImageUrl =
    "https://www.pexels.com/photo/close-up-photography-of-smartphone-icons-267350/";
  const pasteCourseUrl = "https://www.youtube.com/watch?v=_PoYJqG04Zc";
  // it block where both test case descriotion and test scripts are wrtten
  it("Validate that user with valid details can login to Quales Course Management App successfully", () => {
    //tells cypress to naviagte to the url
    cy.visit("http://tawdry-rule.surge.sh/");
    cy.viewport(1536, 960);

    //get this particular button and click
    cy.get(".css-48p1y4 > .MuiButton-root").click();
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get(".MuiButton-contained").click();

    //check if to see
    cy.contains("List of Courses").should("be.visible");
    cy.contains("Add Course").should("be.visible");
    cy.contains("Courses").should("be.visible");
    cy.contains("Home").should("be.visible");
    cy.contains("Core").should("be.visible");
    cy.contains("Breadcrumb").should("be.visible");
    // cy.contains("LOG OUT").should("be.visible");
    cy.get(".MuiGrid-root > .MuiButton-root").click();
    cy.contains("Add New Course").should("be.visible");
    cy.contains("Back").should("be.visible");
    cy.contains("Title*").should("be.visible");
    cy.contains("Title*").scrollIntoView();
    cy.wait(3000);
    cy.get('[data-testid="Title*"]').type("Native Android Dev Bootcamap");
    // cy.get('[data-testid="Title*"]').scrollIntoView();

    // cy.wait(30000);
    cy.contains("Description*").should("be.visible");
    cy.get('[data-testid="Description*"]').type(
      "Learn Native Android Development With Kotlin"
    );
    cy.contains("Category*").should("be.visible");
    cy.contains("Select Category").should("be.visible");
    cy.get("#demo-simple-select").click();
    // cy.get("#demo-simple-select").should("have.length", 3);
    // cy.get("#demo-simple-select").select("Software Development");
    // cy.get("#demo-simple-select").should("have.value", "Software Development");
    cy.contains("Software Development").should("be.visible");
    cy.wait(3000);
    cy.get('[data-value="3"]').click();
    cy.get('[data-testid="isPremium"]').click();
    cy.wait(3000);
    cy.get('[data-testid="ImageURL"]')
      .invoke("val", pasteImageUrl)
      .trigger("blur");
    cy.get('[data-testid="online"]').click();
    cy.wait(3000);
    cy.get('[data-testid="CourseURL*(mustbeyoutube)"]')
      .invoke("val", pasteCourseUrl)
      .trigger("blur");

    cy.get(".css-tzsjye > .MuiButton-root").click();
    cy.contains("Only premium user can create premium courses").should(
      "be.visible"
    );

    // cy.get("#demo-simple-select").scrollTo("bottom");
  });
});
