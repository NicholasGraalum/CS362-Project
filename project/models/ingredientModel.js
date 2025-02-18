const db = require('../database/db'); 

/*
Returns ingredient data given name
Returns null if no ingredient with name
*/
function getIngredient(name) {
    const stmt = db.prepare("SELECT * FROM Ingredient WHERE name = ?");
    return stmt.get(name) || null;
}

/* 
Returns array of ingredients in a recipe with id
Returns empty array if no recipe of id or no ingredients in recipe
*/
function getIngredientsInRecipe(id) {
  const stmt = db.prepare('SELECT i.* FROM Ingredient i JOIN Includes inc ON i.name=inc.i_name WHERE inc.r_id = ?');
  return stmt.all(id); 
}

module.exports = { getIngredient, getIngredientsInRecipe };