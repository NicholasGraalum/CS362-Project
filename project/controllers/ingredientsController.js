// const recipeModel = require('../models/recipeModel');
// const ingredientModel = require('../models/ingredientModel');

// function getAllIngredients(req, res) {
//     try {
//         const ingredients = recipeModel.getAllRecipes();  // Fetch all recipes
//         res.render('mealsPage', { meals }); // Render mealsPage.handlebars
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// function getSingleIngredient(req, res) {
//     try {
//         const ingredientId = req.params.id;
//         const ingredient = ingredientModel.getIngredientById(ingredientId);

//         if (!meal) {
//             return res.status(404).render('404'); // If meal not found, show 404 page
//         }

//         res.render('singleMealPage', {
//             id: ingredient.id,
//             name: ingredient.name,
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// }

// module.exports = { getAllIngredients, getSingleIngredient };
