// models/userModel.js
const db = require('../database/db'); // Import the initialized database connection

function getAllUsers() {
  const stmt = db.prepare('SELECT * FROM user');
  return stmt.all(); // Executes query and returns all users
}

module.exports = { getAllUsers };
