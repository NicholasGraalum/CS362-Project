// test/model.test.js

const chai = require('chai');
const expect = chai.expect;
const Database = require('better-sqlite3');   // Used for in-memory database

// Import the functions to test
const { getUserList, addToList, removeFromList } = require('../../models/listModel.js');

describe('Shopping List Model', function() {
  let db;

  // Create an in-memory database and initialize the table before each test
  beforeEach(function() {
    db = new Database(':memory:');
    db.exec(`
      CREATE TABLE On_list (
        email TEXT,
        i_name TEXT,
        amount INTEGER,
        store_api_id TEXT,
        PRIMARY KEY (email, i_name)
      );
    `);
  });

  // Close the database after each test
  afterEach(function() {
    db.close();
  });

  // Initial test: empty list
  describe('getUserList', function() {
    it('should return an empty array if the user has no ingredients', function() {
      const result = getUserList('test@example.com', db);
      expect(result).to.be.an('array').that.is.empty;
    });
  });

  // Add ingredient to list test
  describe('addToList', function() {
    it('should add a new ingredient to the list', function() {
      const email = 'test@example.com';
      const ingredient = 'Tomato';
      const amount = 2;
      const storeApiId = 'store123';

      // Add ingredient to list
      const runResult = addToList(email, ingredient, amount, storeApiId, db);
      
      // Check that the ingredient was inserted
      const list = getUserList(email, db);
      expect(list).to.be.an('array').with.lengthOf(1);
      expect(list[0]).to.include({
        i_name: ingredient,
        amount: amount,
        store_api_id: storeApiId
      });
    });

    // If the ingredient is already in the list, it should increase the amount
    it('should update the amount if the ingredient already exists', function() {
      const email = 'test@example.com';
      const ingredient = 'Tomato';
      const storeApiId = 'store123';

      // Add the ingredient twice; second call should update (add to) the amount
      addToList(email, ingredient, 2, storeApiId, db);
      addToList(email, ingredient, 3, storeApiId, db);

      const list = getUserList(email, db);
      expect(list).to.be.an('array').with.lengthOf(1);
      // The amount should now be 2 + 3 = 5
      expect(list[0]).to.include({
        i_name: ingredient,
        amount: 5,
        store_api_id: storeApiId
      });
    });
  });

  // Removing the ingredient should remove it from the list
  describe('removeFromList', function() {
    it('should remove an ingredient from the list', function() {
      const email = 'test@example.com';
      const ingredient = 'Tomato';
      const amount = 2;
      const storeApiId = 'store123';

      // First, add an ingredient
      addToList(email, ingredient, amount, storeApiId, db);
      let list = getUserList(email, db);
      expect(list).to.have.lengthOf(1);

      // Remove the ingredient
      removeFromList(email, ingredient, db);
      list = getUserList(email, db);
      expect(list).to.be.an('array').that.is.empty;
    });
  });
});
