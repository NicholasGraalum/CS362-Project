const express = require('express');
const router = express.Router();

const mealsController = require("../controllers/mealsController");


// Route to display all meals
router.get('/', mealsController.getAllMeals);

// Route to display a single meal page by ID
router.get('/:id', mealsController.getSingleMeal);

// Route to search meals by name or category
router.get('/search', mealsController.searchMeals);

// Route to create a new meal (POST request)
router.post('/create', mealsController.createMeal);

// Route to add a meal’s ingredients to the shopping list
router.post('/:id/add-to-list', mealsController.addMealToList);

module.exports = router;
