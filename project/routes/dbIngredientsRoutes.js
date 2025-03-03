const express = require('express');
const router = express.Router();

const addIngredientsController = require("../controllers/dbIngredientsController");

router.get('/:id', addIngredientsController.display);
router.post('/add-to-meal', addIngredientsController.addIngredientToMeal);

module.exports = router;
