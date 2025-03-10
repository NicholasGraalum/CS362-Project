const chai = require('chai');
const expect = chai.expect;
const Database = require('better-sqlite3');   // Used for in-memory database

// Import model functions
const {
  getIngredient,
  getAllIngredients,
  getIngredientsInRecipe,
  addIngredient,
  updateIngredientStoreId,
  searchIngredientsByName
} = require('../../models/ingredientModel.js');

describe('Ingredient Model', function() {
  let db;

  // Create an in-memory database and set up the schema before each test
  beforeEach(function() {
    db = new Database(':memory:');

    // Create the Ingredient table
    db.exec(`
      CREATE TABLE Ingredient (
        name TEXT PRIMARY KEY,
        store_api_id TEXT
      );
    `);

    // Create the Includes table (used for recipes)
    db.exec(`
      CREATE TABLE Includes (
        r_id INTEGER,
        i_name TEXT,
        amount INTEGER,
        PRIMARY KEY (r_id, i_name)
      );
    `);
  });

  // Close the database after each test
  afterEach(function() {
    db.close();
  });

  describe('getIngredient', function() {
    it('should return null if ingredient does not exist', function() {
      const ingredient = getIngredient('Nonexistent', db);
      expect(ingredient).to.be.null;
    });

    it('should return ingredient data when it exists', function() {
      // Insert an ingredient directly into the database
      const stmt = db.prepare(`INSERT INTO Ingredient (name, store_api_id) VALUES (?, ?)`);
      stmt.run('Tomato', '1111111');
      const ingredient = getIngredient('Tomato', db);
      expect(ingredient).to.be.an('object');
      expect(ingredient).to.include({ name: 'Tomato', store_api_id: '1111111' });
    });
  });

  describe('getAllIngredients', function() {
    it('should return an empty array when no ingredients exist', function() {
      const ingredients = getAllIngredients(db);
      expect(ingredients).to.be.an('array').that.is.empty;
    });

    it('should return all ingredients in the database', function() {
      const stmt = db.prepare(`INSERT INTO Ingredient (name, store_api_id) VALUES (?, ?)`);
      stmt.run('Tomato', '1111111');
      stmt.run('Lettuce', '2222222');

      const ingredients = getAllIngredients(db);
      expect(ingredients).to.be.an('array').with.lengthOf(2);
      const names = ingredients.map(ing => ing.name);
      expect(names).to.include('Tomato');
      expect(names).to.include('Lettuce');
    });
  });

  describe('getIngredientsInRecipe', function() {
    it('should return an empty array if no ingredients are associated with the recipe', function() {
      const ingredients = getIngredientsInRecipe(1, db);
      expect(ingredients).to.be.an('array').that.is.empty;
    });

    it('should return ingredients with their amounts for a given recipe', function() {
      // Insert ingredients into the Ingredient table
      const insertIngredient = db.prepare(`INSERT INTO Ingredient (name, store_api_id) VALUES (?, ?)`);
      insertIngredient.run('Tomato', '1111111');
      insertIngredient.run('Lettuce', '2222222');

      // Insert entries into the Includes table for recipe id 1
      const insertInclude = db.prepare(`INSERT INTO Includes (r_id, i_name, amount) VALUES (?, ?, ?)`);
      insertInclude.run(1, 'Tomato', 1);
      insertInclude.run(1, 'Lettuce', 2);

      const ingredients = getIngredientsInRecipe(1, db);
      expect(ingredients).to.be.an('array').with.lengthOf(2);

      const tomato = ingredients.find(ing => ing.name === 'Tomato');
      expect(tomato).to.include({ name: 'Tomato', store_api_id: '1111111', amount: 1 });
      
      const lettuce = ingredients.find(ing => ing.name === 'Lettuce');
      expect(lettuce).to.include({ name: 'Lettuce', store_api_id: '2222222', amount: 2 });
    });
  });

  describe('addIngredient', function() {
    it('should add a new ingredient to the database', function() {
      const result = addIngredient('Cucumber', '3333333', db);
      // The run() result should indicate one change
      expect(result.changes).to.equal(1);

      const ingredient = getIngredient('Cucumber', db);
      expect(ingredient).to.include({ name: 'Cucumber', store_api_id: '3333333' });
    });
  });

  describe('updateIngredientStoreId', function() {
    it('should update the store_api_id of an existing ingredient', function() {
      // First, add an ingredient
      addIngredient('Carrot', '4444444', db);
      // Update the store_api_id for the ingredient
      const result = updateIngredientStoreId('Carrot', '4444441', db);
      expect(result.changes).to.equal(1);

      const ingredient = getIngredient('Carrot', db);
      expect(ingredient).to.include({ name: 'Carrot', store_api_id: '4444441' });
    });
  });

  describe('searchIngredientsByName', function() {
    it('should return an empty array if no ingredients match the search term', function() {
      addIngredient('Apple', '1111111', db);
      const results = searchIngredientsByName('Banana', db);
      expect(results).to.be.an('array').that.is.empty;
    });

    it('should return matching ingredients by name', function() {
      addIngredient('Apple', '2222222', db);
      addIngredient('Pineapple', '3333333', db);
      addIngredient('Banana', '4444444', db);

      // Searching for "apple" should return both 'Apple' and 'Pineapple'
      const results = searchIngredientsByName('apple', db);
      expect(results).to.be.an('array').with.lengthOf(2);
      const names = results.map(r => r.name);
      expect(names).to.include('Apple');
      expect(names).to.include('Pineapple');
    });
  });
});
