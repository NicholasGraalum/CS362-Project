const { db } = require('../database/db'); 
// const bcrypt = require('bcrypt'); // use later for secure password hashing

/* 
Returns array with an object for each user
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

// create new user
function addUser(email, password, username, zipcode, storeID = null) {
  try {
      const stmt = db.prepare(`
          INSERT INTO User (email, password, username, zipcode, storeID)
          VALUES (?, ?, ?, ?, ?)
      `);

      return stmt.run(email, password, username, zipcode, storeID);

  } catch (err) {
      console.error('Error adding user:', err.message);
      throw err;  
  }
}

// favorite a recipe
function addFavoriteRecipe(email, r_id) {
  try {
      const stmt = db.prepare(`
          INSERT INTO Favorites (email, r_id)
          VALUES (?, ?)
      `);

      return stmt.run(email, r_id);

  } catch (err) {
      console.error('Error favoriting the meal:', err.message);
      throw err; 
  }
}

function removeFavoriteRecipe(email, r_id) {
  try {
      const stmt = db.prepare(`
          DELETE FROM Favorites
          WHERE email = ? AND r_id = ?
      `);

      return stmt.run(email, r_id);

  } catch (err) {
      console.error('Error removing favorite meal:', err.message);
      throw err;  
  }
}

function updateZipcode(email, newZipcode) {
  try {
      // Ensure zipcode is an integer
    //   if (!Number.isInteger(newZipcode)) {
    //       throw new Error("Zipcode must be an integer");
    //   }

      const stmt = db.prepare(`
          UPDATE User 
          SET zipcode = ?
          WHERE email = ?
      `);

      return stmt.run(newZipcode, email);

  } catch (err) {
      console.error('Error updating zipcode:', err.message);
      throw err;
  }
}

function updateStoreID(email, storeID) {
  try {
      // Ensure storeID is an integer
      if (!Number.isInteger(storeID)) {
          throw new Error("StoreID invalid");
      }
  
      const stmt = db.prepare(`
          UPDATE User 
          SET storeID = ?
          WHERE email = ?
      `);
  
      return stmt.run(storeID, email);
  
  } catch (err) {
      console.error('Error updating storeID:', err.message);
      throw err;
  }
}


module.exports = { getAllUsers, getUserByEmail, verifyUser, addUser, addFavoriteRecipe, removeFavoriteRecipe, updateZipcode, updateStoreID };
