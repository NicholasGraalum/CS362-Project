const recipeModel = require('../models/recipeModel');
const ingredientModel = require('../models/ingredientModel');

function display(req, res) {
    try {
        const ingredients = ingredientModel.getAllIngredients();  // Fetch all recipes
        res.render('dbIngredientsPage', { ingredients }); // Render ingredients page
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { display };