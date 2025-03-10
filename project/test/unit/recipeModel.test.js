// verify data access model functions work on the filler data
const { initializeDatabase } = require('../../database/db');
const chai = require('chai');
const fs = require('fs');
const path = require('path');

const { expect } = chai;

const { getAllRecipes, getRecipeTags, getRecipeTypes } = require('../../models/recipeModel');

describe('Recipe Model Getter Unit Tests', () => {
    const tempDbPath = path.join(__dirname, 'recipe-test-temp.db');
    let testDb = initializeDatabase(tempDbPath);  // initialize test database  

  //Cleanup after all tests run
  after(() => {
    if (testDb) {
      testDb.close();
    }
    if (fs.existsSync(tempDbPath)) {
      fs.unlinkSync(tempDbPath);
    }
  });

  it('GetAllRecipes should retrieve all recipes from the test database', () => {
    // Fetch all recipes
    const recipes = getAllRecipes(testDb);

    // Assertions
    expect(recipes).to.be.an('array');
    expect(recipes).to.have.lengthOf(16);
    expect(recipes.map(u => u.name)).to.include('Spaghetti Bolognese');
    expect(recipes.map(u => u.name)).to.include('Chicken Curry');
    expect(recipes.map(u => u.name)).to.include('Chicken Salad');
  });
   
  it('GetRecipeTags should retrieve all tags from the test recipe', () => {
    // Fetch all recipes
    const tags = getRecipeTags(1, testDb);

    // Assertions
    expect(tags).to.be.an('array');
    expect(tags).to.have.lengthOf(2);
    expect(tags.map(u => u.tag)).to.include('High Protein');
    expect(tags.map(u => u.tag)).to.include('Comfort Food');
  });

  it('GetRecipeTypes should retrieve all types from the test recipe', () => {
    // Fetch all recipes
    const types = getRecipeTypes(1, testDb);

    // Assertions
    expect(types).to.be.an('array');
    expect(types).to.have.lengthOf(2);
    expect(types.map(u => u.meal_type)).to.include('Dinner');
    expect(types.map(u => u.meal_type)).to.include('Lunch');
  });
});
