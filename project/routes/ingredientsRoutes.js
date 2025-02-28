const express = require('express');
const router = express.Router();

const ingredientsController = require("../controllers/ingredientsController");


// Route to display all meals
router.get('/', ingredientsController.getAllMeals);

// Route to display a single meal page by ID
router.get('/:id', ingredientsController.getSingleMeal);

module.exports = router;
