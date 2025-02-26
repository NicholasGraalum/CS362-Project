const db = require('../database/db'); 

/* 
Returns array of all recipes
*/
function getAllRecipes() {
  const stmt = db.prepare('SELECT * FROM Recipe');
  return stmt.all(); 
}

/*
Returns array of all tags of recipe with id
Return empty array if no tags
*/
function getRecipeTags(id) {
  const stmt = db.prepare('SELECT tag FROM Recipe_tags WHERE r_id = ?');
  return stmt.all(id);
}

/*
Returns array of all types of recipe with id
Return empty array if no tags
*/
function getRecipeTypes(id) {
  const stmt = db.prepare('SELECT meal_type FROM Recipe_meal_type WHERE r_id = ?');
  return stmt.all(id);
}

/* 
Return single recipe with id
Returns null if no matching recipe
*/
function getRecipeById(id) {
    const stmt = db.prepare('SELECT * FROM Recipe WHERE id = ?');
    return stmt.get(id) || null; 
}

/* 
Returns array of recipes with tag
Returns empty array if no matching recipes
*/
function getRecipesByTag(tag) {
  const stmt = db.prepare('SELECT r.* FROM Recipe r JOIN Recipe_tags rt ON r.id=rt.r_id WHERE rt.tag = ?');
  return stmt.all(tag); 
}

/* 
Returns array of recipes with type
Returns empty array if no matching recipes
*/
function getRecipesByType(type) {
  const stmt = db.prepare('SELECT r.* FROM Recipe r JOIN Recipe_meal_type rt ON r.id=rt.r_id WHERE rt.meal_type = ?');
  return stmt.all(type); 
}

/* 
Returns array of recipes favorited by user with email
Returns empty array if no recipies favorited by user or no user with email
*/
function getFavoriteRecipes(email) {
  const stmt = db.prepare('SELECT r.* FROM Recipe r JOIN Favorites f ON r.id=f.r_id WHERE f.email = ?');
  return stmt.all(email); 
}


// create new recipe
function addRecipe(id, image_link = null, description = null, visibility, servings, creator_email, name) {
  try {
      const stmt = db.prepare(`
          INSERT INTO Recipe (id, image_link, description, visibility, servings, creator_email, name)
          VALUES (?, ?, ?, ?, ?, ?, ?)
      `);

      return stmt.run(id, image_link, description, visibility, servings, creator_email, name);
  } catch (err) {
      console.error('Error adding recipe:', err.message);
      throw err;  
  }
}

// add ingredient to recipe
function addIngredientToRecipe(r_id, i_name, amount) {
  try {
      const stmt = db.prepare(`
          INSERT INTO Includes (amount, r_id, i_name)
          VALUES (?, ?, ?)
      `);

      return stmt.run(amount, r_id, i_name);
  } catch (err) {
      console.error('Error adding ingredient to recipe:', err.message);
      throw err;  
  }
}

// remove ingredient from recipe
function removeIngredientFromRecipe(r_id, i_name) {
  try {
      const stmt = db.prepare(`
          DELETE FROM Includes
          WHERE r_id = ? AND i_name = ?
      `);

      return stmt.run(r_id, i_name);

  } catch (err) {
      console.error('Error removing ingredient from recipe:', err.message);
      throw err;  
  }
}

/*
Search for recipe by name 
*/
function searchRecipesByName(searchTerm) {
  try {
      const stmt = db.prepare(`
          SELECT * FROM Recipe
          WHERE name LIKE ?
      `);
      return stmt.all(`%${searchTerm}%`);
      
  } catch (err) {
      console.error('Error searching for meals:', err.message);
      throw err;
  }
}




module.exports = { 
                  getAllRecipes, getRecipeTags, getRecipeTypes, getRecipeById, getRecipesByTag, getRecipesByType, getFavoriteRecipes, 
                  addRecipe, addIngredientToRecipe, 
                  removeIngredientFromRecipe,
                  searchRecipesByName 
                };