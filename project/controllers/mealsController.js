const recipeModel = require('../models/recipeModel');
const ingredientModel = require('../models/ingredientModel');

function getAllMeals(req, res) {
    try {
        const meals = recipeModel.getAllRecipes();  // Fetch all recipes
        res.render('mealsPage', { meals }); // Render mealsPage.handlebars
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

function getSingleMeal(req, res) {
    try {
        const mealId = req.params.id;
        const meal = recipeModel.getRecipeById(mealId);  // Fetch meal by ID
        const ingredients = ingredientModel.getIngredientsInRecipe(mealId); // Fetch ingredients
        const tags = recipeModel.getRecipeTags(mealId);
        const types = recipeModel.getRecipeTypes(mealId);

        if (!meal) {
            return res.status(404).render('404'); // If meal not found, show 404 page
        }

        res.render('singleMealPage', {
            id: meal.id,
            name: meal.name,
            servings: meal.servings,
            description: meal.description,
            image: meal.image_link,
            calories: meal.calories || 'N/A', // Assuming calories field exists
            ingredients: ingredients.map(i => i.name), // Pass only ingredient names
            categoryTags: tags.map(i => i.tag),     // turn to list
            mealType: types.map(i => i.meal_type)
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getAllMeals, getSingleMeal };
