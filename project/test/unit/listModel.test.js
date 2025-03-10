// Verify data access model functions work on the filler data
const { initializeDatabase } = require('../../database/db');
const chai = require('chai');
const fs = require('fs');
const path = require('path');
const { expect } = chai;

// Import list model functions
const { getUserList, addToList, removeFromList } = require('../../models/listModel');

describe('List Model Unit Tests', function () {
  const tempDbPath = path.join(__dirname, 'list-test-temp.db');
  const testDb = initializeDatabase(tempDbPath);  // initialize test database with filler data

  // Cleanup after all tests run
  after(function () {
    if (testDb) {
      testDb.close();
    }
    if (fs.existsSync(tempDbPath)) {
      fs.unlinkSync(tempDbPath);
    }
  });

  // Test getUserList
  it('getUserList should retrieve the correct list for a user', function () {
    // alice@example.com has 7 ingredients on her list.
    const aliceList = getUserList('alice@example.com', testDb);
    expect(aliceList).to.be.an('array');
    expect(aliceList).to.have.lengthOf(7);

    // Verify expected items (Spaghetti Bolognese ingredients)
    const itemNames = aliceList.map(item => item.i_name);
    expect(itemNames).to.include('Tomato');
    expect(itemNames).to.include('Garlic');
    expect(itemNames).to.include('Spaghetti');
  });

  // Test addToList
  it('addToList should add a new ingredient to a user list if not already present', function () {
    // bob@example.com initially has one item: 'Chicken Breast'
    addToList('bob@example.com', 'Olive Oil', 20, '0007321000011', testDb);
    const bobList = getUserList('bob@example.com', testDb);
    // Now bob should have 2 items.
    expect(bobList).to.be.an('array').with.lengthOf(2);
    const oliveOilItem = bobList.find(item => item.i_name === 'Olive Oil');
    expect(oliveOilItem).to.exist;
    expect(oliveOilItem.amount).to.equal(20);
  });

  // Test addToList for existing ingredient
  it('addToList should update the amount if the ingredient is already in the user list', function () {
    // alice@example.com has 300 of Tomato
    // Adding an extra 50 should update the amount to 350.
    addToList('alice@example.com', 'Tomato', 50, '0000000004799', testDb);
    const aliceList = getUserList('alice@example.com', testDb);
    const tomatoItem = aliceList.find(item => item.i_name === 'Tomato');
    expect(tomatoItem).to.exist;
    expect(tomatoItem.amount).to.equal(350); 
  });

  // Test removeFromList, Alice has Garlic in her list
  it('removeFromList should remove an ingredient from the user list', function () {
    // For alice@example.com, remove 'Garlic' from her list.
    removeFromList('alice@example.com', 'Garlic', testDb);
    const aliceList = getUserList('alice@example.com', testDb);
    const garlicItem = aliceList.find(item => item.i_name === 'Garlic');
    expect(garlicItem).to.be.undefined;
    // The list should now have 6 items instead of 7.
    expect(aliceList).to.have.lengthOf(6);
  });
});