const db = require('../database/db'); 
// const bcrypt = require('bcrypt'); // use later for secure password hashing

/* 
Returns array of all users
*/
function getAllUsers() {
  const stmt = db.prepare('SELECT * FROM User');
  return stmt.all(); 
}

/* 
Returns user object with matching email
Returns null if no matching user
*/
function getUserByEmail(email) {
  const stmt = db.prepare('SELECT * FROM User WHERE email = ?');
  return stmt.get(email) || null; 
}


/* 
Returns true if user exists with matching email and password
Returns false otherwise
*/
function verifyUser(email, password) {
    const stmt = db.prepare('SELECT * FROM User WHERE email = ? AND password = ?'); 
    const user = stmt.get(email, password); 
    return !!user;  // Return truthy or falsy value
}


module.exports = { getAllUsers, getUserByEmail, verifyUser };
