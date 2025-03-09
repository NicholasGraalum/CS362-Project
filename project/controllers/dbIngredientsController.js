const recipeModel = require('../models/recipeModel');
const ingredientModel = require('../models/ingredientModel');

function display(req, res) {
    const mealId = req.params.id;
    try {
        const ingredients = ingredientModel.getAllIngredients();  // Fetch all recipes
        res.render('dbIngredientsPage', { ingredients, mealId }); // Render ingredients page
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// Add Meal Ingredients to the Shopping List
function addIngredientToMeal(req, res) {
    try {
        const user_email = req.session.userEmail;
        const mealId = req.body.id;

        const meal = recipeModel.getRecipeById(mealId);

        // check if user logged in and created the meal
        if (user_email && user_email === meal.creator_email) {   // if so add


            const i_name = req.body.i_name;
            const amount = req.body.amount;

            recipeModel.addIngredientToRecipe(mealId, i_name, amount);

            res.status(200).json({ message: 'Ingredients added successfully!' });
        } else {    // if not logged in, redirect to login page
            console.log("not logged in");
            res.redirect(`/login`); 
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { display, addIngredientToMeal };
