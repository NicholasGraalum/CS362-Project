const express = require('express');
const router = express.Router();

const mealsController = require("../controllers/mealsController");

// Route to search meals by name or category
router.get('/search', mealsController.searchMeals);

// Route to create a new meal (POST request)
router.post('/create', mealsController.createMeal);

// Route to display all meals
router.get('/', mealsController.getAllMeals);

// Route to display favorite meals
router.get('/favorites', mealsController.getFavoriteMeals);

// Route to display a single meal page by ID
router.get('/:id', mealsController.getSingleMeal);

// Route to favorite or unfavorite a single meal by ID
router.get('/favorite/:id', mealsController.toggleFavorite);

// Route to add a meal’s ingredients to the shopping list
router.post('/add-ingredients', mealsController.addMealToList);

module.exports = router;
