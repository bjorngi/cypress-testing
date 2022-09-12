describe("skatteetaten.no home page", () => {
  it("should change language", () => {
    cy.visit("https://www.skatteetaten.no");
    cy.get(
      "html body.skatt.startpage.skatteetaten.is-desktop main div#main-content.skatt-body div.content div.container div.startpage-row div.row.row0 div.block.highfocusblock.col-lg-12.col-md-12.col-sm-12.col-xs-12 div div.focus-block.has-fill.has-image.image-left.image-medium.background-blue.mb-6 div.text h2.mb-5"
    ).should("have.text", "Skatteoppgjør");
    cy.get("#dropdownMenuLanguage").click();
    cy.get("#lang-en").click();
    cy.get(
      "html body.skatt.startpage.skatteetaten.is-desktop main div#main-content.skatt-body div.content div.container div.startpage-row div.row.row0 div.block.highfocusblock.col-lg-12.col-md-12.col-sm-12.col-xs-12 div div.focus-block.has-fill.has-image.image-left.image-medium.background-blue.mb-6 div.text h2.mb-5"
    ).should("have.text", "Tax assessment");
  });

  // Lag test her
  // 1. Gå til siden "Ledige jobber"
  // 2. Fyll inn "skattejurist" i søkefelt
  // 3. Se at listen inneholder 3 elementer
  it("should have 3 positions for skattejurist", () => {
    throw new Error("denne er visst ikke implementert")
  });
});
