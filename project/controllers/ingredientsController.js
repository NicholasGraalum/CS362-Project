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

const userModel = require('../models/userModel');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

async function getToken() {
    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const response = await fetch('https://api.kroger.com/v1/connect/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${credentials}`
        },
        body: new URLSearchParams({ 
            grant_type: 'client_credentials',
            scope: 'product.compact' 
        })
    });
    const data = await response.json();
    // console.log('Token response:', data);
    if (!data.access_token) {
        throw new Error(`Failed to get token: ${JSON.stringify(data)}`);
    }
    return data.access_token;
}

// Function to handle fetching products by store and ingredient
async function getProducts(req, res) {
    try {
        const { storeId, ingredient } = req.query;
        const token = await getToken();
        const response = await fetch(
            `https://api.kroger.com/v1/products?filter.term=${ingredient}&filter.locationId=${storeId}&filter.limit=50`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        const data = await response.json();
        // console.log('Full product response:', data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Export the functions so they can be used in your routes file
module.exports = {getProducts};