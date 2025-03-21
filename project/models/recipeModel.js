const { db: defaultDb } = require('../database/db'); 

/* 
Returns array of all recipes objects
*/
function getAllRecipes(db = defaultDb) {
  const stmt = db.prepare('SELECT * FROM Recipe');
  return stmt.all(); 
}

/*
Returns array of all tags objects of recipe with id
Return empty array if no tags
*/
function getRecipeTags(id, db = defaultDb) {
  const stmt = db.prepare('SELECT tag FROM Recipe_tags WHERE r_id = ?');
  return stmt.all(id);
}

/*
Returns array of all types objects of recipe with id
Return empty array if no tags
*/
function getRecipeTypes(id, db = defaultDb) {
  const stmt = db.prepare('SELECT meal_type FROM Recipe_meal_type WHERE r_id = ?');
  return stmt.all(id);
}

/* 
Return single recipe object with id
Returns null if no matching recipe
*/
function getRecipeById(id, db = defaultDb) {
    const stmt = db.prepare('SELECT * FROM Recipe WHERE id = ?');
    return stmt.get(id) || null; 
}

/*
Returns array of recipes objects with tag
Returns empty array if no matching recipes
*/
function getRecipesByTag(tag, db = defaultDb) {
  const stmt = db.prepare('SELECT r.* FROM Recipe r JOIN Recipe_tags rt ON r.id=rt.r_id WHERE rt.tag = ?');
  return stmt.all(tag); 
}

/* 
Returns array of recipes objects with type
Returns empty array if no matching recipes
*/
function getRecipesByType(type, db = defaultDb) {
  const stmt = db.prepare('SELECT r.* FROM Recipe r JOIN Recipe_meal_type rt ON r.id=rt.r_id WHERE rt.meal_type = ?');
  return stmt.all(type);
}

/* 
Returns array of recipes objects favorited by user with email
Returns empty array if no recipies favorited by user or no user with email
*/
function getFavoriteRecipes(email, db = defaultDb) {
  const stmt = db.prepare('SELECT r.* FROM Recipe r JOIN Favorites f ON r.id=f.r_id WHERE f.email = ?');
  return stmt.all(email); 
}

/* 
Returns true if a recipe is favorited by user, otherwise false
*/
function isFavorite(email, r_id, db = defaultDb) {
  const stmt = db.prepare('SELECT 1 FROM Favorites WHERE email = ? AND r_id = ? LIMIT 1');
  return !!stmt.get(email, r_id); // Returns true if a result exists, otherwise false
}

// create new recipe
function addRecipe(image_link = null, description = null, visibility, servings, creator_email, name, tags, types, db = defaultDb) {
  try {
      const stmt = db.prepare(`
          INSERT INTO Recipe (image_link, description, visibility, servings, creator_email, name)
          VALUES (?, ?, ?, ?, ?, ?)
      `);

      const result = stmt.run(image_link, description, visibility, servings, creator_email, name);
      const id = result.lastInsertRowid;

      // add all tags
      tags.forEach(tag => {
        addTagToRecipe(id, tag);
      });

      // add all types
      types.forEach(type => {
        addTypeToRecipe(id, type);
      });

      return id;

  } catch (err) {
      console.error('Error adding recipe:', err.message);
      throw err;  
  }
}

// add ingredient to recipe
function addIngredientToRecipe(r_id, i_name, amount, db = defaultDb) {
  console.log(r_id);
  console.log(i_name);
  console.log(amount);
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
function removeIngredientFromRecipe(r_id, i_name, db = defaultDb) {
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
function searchRecipesByName(searchTerm, db = defaultDb) {
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

/*
Search for recipe by name, tag, and type 
Return array of recipe objects matching search
Returns empty array if no matching recipes
*/
function searchRecipes(searchTerm, tags, types, db = defaultDb) {

  // Handle empty searchterm
  const searchPattern = (!searchTerm || searchTerm.length === 0) ? '%' : `%${searchTerm}%`;

  try {
      // Handle empty tag or type param lists
      let tagFilter = tags.length > 0 ? `AND LOWER(rt.tag) IN (${tags.map(() => 'LOWER(?)').join(',')})` : "";
      let typeFilter = types.length > 0 ? `AND LOWER(rmt.meal_type) IN (${types.map(() => 'LOWER(?)').join(',')})` : "";
      
      const stmt = db.prepare(`
          SELECT DISTINCT r.* 
          FROM Recipe r 
          JOIN Recipe_tags rt ON r.id = rt.r_id 
          JOIN Recipe_meal_type rmt ON r.id = rmt.r_id
          WHERE LOWER(r.name) LIKE LOWER(?) 
          ${tagFilter} 
          ${typeFilter}
      `);

      return stmt.all(searchPattern, ...tags, ...types);
        
  } catch (err) {
      console.error('Error searching for meals:', err.message);
      throw err;
  }
}

// add tag to recipe
function addTagToRecipe(r_id, tag, db = defaultDb) {
  try {
      const stmt = db.prepare(`
          INSERT INTO Recipe_tags (tag, r_id)
          VALUES (?, ?)
      `);

      return stmt.run(tag, r_id);
  } catch (err) {
      console.error('Error adding tag to recipe:', err.message);
      throw err;  
  }
}

// add type to recipe
function addTypeToRecipe(r_id, type, db = defaultDb) {
  try {
      const stmt = db.prepare(`
          INSERT INTO Recipe_meal_type (meal_type, r_id)
          VALUES (?, ?)
      `);

      return stmt.run(type, r_id);
  } catch (err) {
      console.error('Error adding type to recipe:', err.message);
      throw err;  
  }
}



module.exports = { 
                  getAllRecipes, getRecipeTags, getRecipeTypes, getRecipeById, getRecipesByTag, getRecipesByType, getFavoriteRecipes, 
                  addRecipe, addIngredientToRecipe, addTagToRecipe, addTypeToRecipe,
                  removeIngredientFromRecipe,
                  searchRecipesByName, searchRecipes,
                  isFavorite 
                };
