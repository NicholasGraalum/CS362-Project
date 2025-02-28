const express = require('express');
const router = express.Router();

const mealsController = require("../controllers/mealsController");


// Route to display all meals
router.get('/', mealsController.getAllMeals);

// Route to display a single meal page by ID
router.get('/:id', mealsController.getSingleMeal);

module.exports = router;
