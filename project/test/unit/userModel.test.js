// verify data access model functions work on the filler data
const { initializeDatabase } = require('../../database/db');
const chai = require('chai');
const fs = require('fs');
const path = require('path');

const { expect } = chai;

const { getAllUsers } = require('../../models/userModel');

describe('Database Model - Unit Test with Temporary Database', () => {
  let db;
  const tempDbPath = path.join(__dirname, 'test-temp.db');

  beforeEach(() => {
    db = initializeDatabase(tempDbPath); // Create test database
  });

  afterEach(() => {
    db.close(); // Close test database
    if (fs.existsSync(tempDbPath)) {
      fs.unlinkSync(tempDbPath); // Delete test database file
    }
  });

  it('GetAllUsers should retrieve all users from the test database', () => {
    // Fetch all users
    const users = getAllUsers();

    // Assertions
    expect(users).to.be.an('array');
    expect(users).to.have.lengthOf(3);
    expect(users.map(u => u.username)).to.include('alice123');
    expect(users.map(u => u.username)).to.include('bobcook');
    expect(users.map(u => u.username)).to.include('charliechef');
  });
});
