const express = require('express');
const router = express.Router();

const ingredientsController = require("../controllers/ingredientsController");


router.get('/search', ingredientsController.getProducts);
router.post('/add', ingredientsController.addIngredientToList);
router.get('/meal/:mealId', ingredientsController.displayPage);
router.post('/meal/add', ingredientsController.addIngredientToMeal);
router.get('/meal/:mealId/search', ingredientsController.getProducts);
router.get('/', ingredientsController.displayPage);



module.exports = router;
