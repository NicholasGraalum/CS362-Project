const db = require('../database/db'); 

/* 
Returns array of all recipes
*/
function getAllRecipes() {
  const stmt = db.prepare('SELECT * FROM Recipe');
  return stmt.all(); 
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

module.exports = { getAllRecipes, getRecipeById, getRecipesByTag, getRecipesByType, getFavoriteRecipes };