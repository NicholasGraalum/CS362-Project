// end to end system testing using cypress 
describe("Meal Page", () => {
    beforeEach(() => {
      // Visit the meals page
      cy.visit("http://localhost:3000/meals");
    });
  
    it("should redirect to the correct meal detail page when clicking on a meal", () => {
      // Assuming the meal data is available in the page and has a link with the structure `/meals/:id`
      
      // Find a meal link (assuming there's at least one meal on the page)
      cy.get('.meal a').first().as('mealLink'); // Target the first meal's link
  
      // Get the meal ID from the link href attribute
      cy.get('@mealLink')
        .invoke('attr', 'href')  // Get the href attribute (should be something like "/meals/123")
        .then((href) => {
          // Verify the link is correct (i.e., it starts with /meals/)
          expect(href).to.match(/^\/meals\/\d+/);
          
          // Click the meal link to navigate
          cy.get('@mealLink').click();
  
          // Verify the URL is now the expected meal detail page URL
          cy.url().should('include', href);  // It should match the href
  
          // Optionally, verify content on the meal detail page (e.g., check for meal name or id)
          cy.contains('Ingredients');
        });
    });
  });
  