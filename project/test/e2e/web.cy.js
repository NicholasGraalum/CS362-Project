describe("Meal Page", () => {
  beforeEach(() => {
    // Visit the meals page
    cy.visit("http://localhost:3000/meals");
  });

  it("should allow a user to log in and add a meal's ingredients to the list", () => {
    // Click on the first meal to go to its detail page
    cy.get('.meal a').first().as('mealLink');
    cy.get('@mealLink')
      .invoke('attr', 'href')
      .then((href) => {
        expect(href).to.match(/^\/meals\/\d+/);
        cy.get('@mealLink').click();
        cy.url().should('include', href);
        
        // Click on 'Add to List' button
        cy.get('button.add-ingredients-button').click();
        
        // Should redirect to login page
        cy.url().should('include', '/login');

        // Enter login credentials
        cy.get('#submit-email').type("alice@example.com");
        cy.get('#submit-password').type("hashedpassword1");
        
        // Click login button
        cy.get('#submit-login').click();

        // Handle the alert by stubbing the alert and confirming it
        cy.on('window:alert', (txt) => {
          return true;
        });

        // After dismissing the alert, wait for the redirection by checking for an element on the meals page
        cy.get('.meal').should('be.visible'); // Wait for a meal element to appear, ensuring the page has loaded
        
        // Now that the meals page is loaded, we can safely check the URL
        cy.url().should('include', '/meals');

        // Click on 'Add to List' button again for the first meal
        cy.get('.meal .add-ingredients-button').first().click();

        // Click on hamburger menu
        cy.get('#hamburger-menu').click();

        // Click on List button and verify redirection
        cy.contains("List").click();
        cy.url().should('include', '/list');
      });
  });
});
