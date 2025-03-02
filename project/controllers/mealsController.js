const recipeModel = require('../models/recipeModel');
const ingredientModel = require('../models/ingredientModel');
const listModel = require('../models/listModel');

function getAllMeals(req, res) {
    try {
        console.log('current logged in user is %s', req.session.userEmail);
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

// Search Meals (by name or category)
function searchMeals(req, res) {
    console.log("searched route");
    try {
        let { mealName, mealTypes, categoryTags } = req.query; // Get query parameters

        // turn param strings into param lists
        mealTypes = mealTypes.length === 0 ? [] : mealTypes.split(',');
        categoryTags = categoryTags.length === 0 ? [] : categoryTags.split(',');

        const meals = recipeModel.searchRecipes(mealName, categoryTags, mealTypes);
     
        res.render('mealsPage', { meals });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// Create a New Meal (Ignoring Ingredients)
function createMeal(req, res) {
    try {
        console.log(req.body);
        const { name, description, image_link, visibility, servings } = req.body;

        if (!name || !visibility || !servings || !creator_email) {
            return res.status(400).send("Missing required fields.");
        }

        recipeModel.addRecipe(image_link, description, visibility, servings, req.session.userEmail, name);
        res.redirect('/meals'); // Redirect to meals page after adding
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// Add Meal Ingredients to the Shopping List
function addMealToList(req, res) {
    try {
        const user_email = req.session.userEmail;

        // check if user logged in 
        if (user_email) {   // if so add
            const mealId = req.body.id;

            const ingredients = ingredientModel.getIngredientsInRecipe(mealId);
            if (!ingredients.length) {
                return res.status(404).send("No ingredients found for this meal.");
            }

            ingredients.forEach(ingredient => {
                listModel.addToList(user_email, ingredient.name, ingredient.amount); // Add each ingredient to the list
            });
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

module.exports = { 
    getAllMeals, 
    getSingleMeal, 
    searchMeals, 
    createMeal, 
    addMealToList 
};
