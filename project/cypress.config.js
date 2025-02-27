const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "test/e2e/**/*.cy.js", // Point to new test location
    baseUrl: "http://localhost:3000",  // Default server URL,
    supportFile: false,
  },
});
