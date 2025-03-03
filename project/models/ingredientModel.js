const { db } = require('../database/db'); 

/*
Returns ingredient data given name
Returns null if no ingredient with name
*/
function getIngredient(name) {
    const stmt = db.prepare("SELECT * FROM Ingredient WHERE name = ?");
    return stmt.get(name) || null;
}

/* 
Returns array of ingredient objects in a database
Returns empty array if no ingredients in database
*/
function getAllIngredients() {
    const stmt = db.prepare("SELECT * FROM Ingredient");
    return stmt.all();
}

/* 
Returns array of ingredient objects in a recipe with id
Returns empty array if no recipe of id or no ingredients in recipe
*/
function getIngredientsInRecipe(id) {
  const stmt = db.prepare('SELECT i.*, inc.amount FROM Ingredient i JOIN Includes inc ON i.name=inc.i_name WHERE inc.r_id = ?');
  return stmt.all(id); 
}

// add ingredient
function addIngredient(name, store_api_id = null, nutrition_api_id = null) {
  try {
      const stmt = db.prepare(`
          INSERT INTO Ingredient (name, store_api_id, nutrition_api_id)
          VALUES (?, ?, ?)
      `);

      return stmt.run(name, store_api_id, nutrition_api_id);

  } catch (err) {
      console.error('Error adding ingredient:', err.message);
      throw err;  
  }
}

// update store api id
function updateIngredientStoreId(name, newStoreApiId) {
  try {
      const stmt = db.prepare(`
          UPDATE Ingredient
          SET store_api_id = ?
          WHERE name = ?
      `);

      return stmt.run(newStoreApiId, name);

  } catch (err) {
      console.error('Error updating store API ID:', err.message);
      throw err; 
  }
}

// update nutrition api id
function updateIngredientNutId(name, newNutritionApiId) {
  try {
      const stmt = db.prepare(`
          UPDATE Ingredient
          SET nutrition_api_id = ?
          WHERE name = ?
      `);

      return stmt.run(newNutritionApiId, name);

  } catch (err) {
      console.error('Error updating nutrition API ID:', err.message);
      throw err;  
  }
}

/*
Search for ingredient by name 
Return list of matching ingredient name objects
Return empty list if no matching
*/
function searchIngredientsByName(searchTerm) {
    try {
        const stmt = db.prepare(`
            SELECT name FROM Ingredient
            WHERE name LIKE ?
        `);
        return stmt.all(`%${searchTerm}%`);
        
    } catch (err) {
        console.error('Error searching for ingredients:', err.message);
        throw err;
    }
  }


module.exports = { getIngredient, getAllIngredients, getIngredientsInRecipe, addIngredient, updateIngredientStoreId, updateIngredientNutId, searchIngredientsByName };