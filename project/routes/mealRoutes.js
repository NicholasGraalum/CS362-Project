const express = require('express');
const router = express.Router();
const recipeModel = require('../models/recipeModel');
const ingredientModel = require('../models/ingredientModel');

// Route to display all meals
router.get('/', async (req, res) => {
  try {
    const meals = recipeModel.getAllRecipes();  // Fetch all recipes
    res.render('mealsPage', { meals }); // Render mealsPage.handlebars
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to display a single meal page by ID
router.get('/:id', async (req, res) => {
  try {
    const mealId = req.params.id;
    const meal = recipeModel.getRecipeById(mealId);  // Fetch meal by ID
    const ingredients = ingredientModel.getIngredientsInRecipe(mealId); // Fetch ingredients

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
      categoryTags: ["Vegan", "Gluten Free"], // Placeholder
      mealType: ["Lunch"], // Placeholder
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
