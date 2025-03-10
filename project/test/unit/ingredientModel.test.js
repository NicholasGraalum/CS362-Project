// Verify data access model functions work on the filler data
const { initializeDatabase } = require('../../database/db');
const chai = require('chai');
const fs = require('fs');
const path = require('path');

const { expect } = chai;

// Import ingredient model functions
const {
  getIngredient,
  getAllIngredients,
  getIngredientsInRecipe,
  addIngredient,
  updateIngredientStoreId,
  searchIngredientsByName,
} = require('../../models/ingredientModel');

describe('Ingredient Model Unit Tests', () => {
  const tempDbPath = path.join(__dirname, 'ingredient-test-temp.db');
  const testDb = initializeDatabase(tempDbPath); // initialize test database with filler data

  // Cleanup after all tests run
  after(() => {
    if (testDb) {
      testDb.close();
    }
    if (fs.existsSync(tempDbPath)) {
      fs.unlinkSync(tempDbPath);
    }
  });

  // Test getIngredient for existing ingredient
  it('getIngredient should return correct ingredient data for a valid ingredient', () => {
    // Using filler data, 'Tomato' should exist
    const ingredient = getIngredient('Tomato', testDb);
    expect(ingredient).to.not.be.null;
    expect(ingredient.name).to.equal('Tomato');
    expect(ingredient.store_api_id).to.equal('0000000004799');
  });

  // Test getIngredient for non-existing ingredient
  it('getIngredient should return null for a non-existent ingredient', () => {
    const ingredient = getIngredient('Fake Ingredient', testDb);
    expect(ingredient).to.be.null;
  });

  // Test getAllIngredients (initial_filler has 42 ingredients)
  it('getAllIngredients should retrieve all ingredients from the test database', () => {
    const ingredients = getAllIngredients(testDb);
    expect(ingredients).to.be.an('array');
    expect(ingredients).to.have.lengthOf(42);
    const names = ingredients.map(i => i.name);
    expect(names).to.include('Garlic');
    expect(names).to.include('Chicken Breast');
    expect(names).to.include('Eggs');
  });

  // Test searchIngredientsByName
  it('searchIngredientsByName should return matching ingredients', () => {
    // Searching for 'Tom' should match 'Tomato'
    const results = searchIngredientsByName('Tom', testDb);
    expect(results).to.be.an('array');
    const names = results.map(r => r.name);
    expect(names).to.include('Tomato');
  });

  // Test updateIngredientStoreId
  it('updateIngredientStoreId should update the store_api_id of an ingredient', () => {
    // Update Garlic's store_api_id 
    updateIngredientStoreId('Garlic', 'testStoreID', testDb);
    const ingredient = getIngredient('Garlic', testDb);
    expect(ingredient.store_api_id).to.equal('testStoreID');
  });

  // Test addIngredient
  it('addIngredient should add a new ingredient', () => {
    // Add a new ingredient 'Basil'
    addIngredient('Basil', 'testID123', testDb);
    const ingredient = getIngredient('Basil', testDb);
    expect(ingredient).to.not.be.null;
    expect(ingredient.name).to.equal('Basil');
    expect(ingredient.store_api_id).to.equal('testID123');
  });

  // test getIngredientsInRecipe
  it('getIngredientsInRecipe should return ingredients with amounts for a given recipe', () => {
    // Recipe with id 1 is "Spaghetti Bolognese"
    // Its includes should list 7 ingredients
    const ingredients = getIngredientsInRecipe(1, testDb);
    expect(ingredients).to.be.an('array');
    expect(ingredients).to.have.lengthOf(7);

    // Verify one of the ingredients (Tomato, amount 300)
    const tomatoEntry = ingredients.find(i => i.name === 'Tomato');
    expect(tomatoEntry).to.exist;
    expect(tomatoEntry.amount).to.equal(300);
  });
});
