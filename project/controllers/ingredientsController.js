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
const listModel = require('../models/listModel');
const ingredientModel = require('../models/ingredientModel');
const recipeModel = require('../models/recipeModel');

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
    // if (!req.session || !req.session.userEmail) {
    //     return res.redirect('/login');
    // }

    try {
        const user = userModel.getUserByEmail(req.session.userEmail);
        const ingredient = req.query.ingredient;
        const mealId = req.params.mealId;
        if (!ingredient && !user) {
            return res.render('ingredientsPage', { 
                products: [], 
                error: "Please enter an ingredient."  
            });
        }
        else if(!ingredient) {
            return res.render('ingredientsPage', {
                products: [],
                error: "Please enter an ingredient",
                username: user.username,
                email: user.email,
                zipcode: user.zipcode,
                storeID: user.storeID
            });
        }

        const storeId = user.storeID;

        const token = await getToken();
        const response = await fetch(
            `https://api.kroger.com/v1/products?filter.term=${ingredient}&filter.locationId=${storeId}&filter.limit=20`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        const data = await response.json();


        const products = (data.data || []).map(product => {
            let image_link = 'defaultImage.png';
            if (product.images && product.images.length > 0 && product.images[0].sizes && product.images[0].sizes.length > 0) {
              image_link = product.images[0].sizes[0].url;
            }
            
            let price = "N/A";
            if (product.items && product.items.length > 0 && product.items[0].price) {
              price = product.items[0].price.promo || product.items[0].price.regular;
            }
          
            return {
              id: product.productId,
              name: product.description,
              price: price,
              image_link: image_link
            };
          });


        if(!user) {
            res.render('ingredientsPage', {
                //products: data.data,
                products,
                mealId,
                //searchTerm: ingredient,
                username: user.username,
                email: user.email,
                zipcode: user.zipcode,
                storeID: user.storeID
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function displayPage(req, res) {
    const user = userModel.getUserByEmail(req.session.userEmail);
    if (!req.session || !req.session.userEmail) {
        return res.redirect('/login');
    }

    const mealId = req.params.mealId;
    console.log("Meal ID: ",
        mealId);

    res.render('ingredientsPage', {
        mealId,
        username: user.username,
        email: user.email,
        zipcode: user.zipcode,
        storeID: user.storeID
    }); 
}

async function addIngredientToList(req, res) {
    try {
        const { i_name, store_api_id } = req.body;
        if (!i_name || !store_api_id) {
            return res.status(400).json({ error: 'Missing ingredient data.' });
        }

        const amount = 1;

        // Check if the ingredient exists
        const existingIngredient = ingredientModel.getIngredient(i_name);
        if (!existingIngredient) {
            // If ingredient does not exist, add it
            ingredientModel.addIngredient(i_name, store_api_id);
        }

        // Add to the user's ingredient list
        listModel.addToList(req.session.userEmail, i_name, amount, store_api_id);

        res.status(200).json({ message: 'Ingredient added successfully!' });
    } catch (error) {
        console.error('Error adding ingredient to list:', error.message);
        res.status(500).json({ error: error.message });
    }
}

async function addIngredientToMeal(req, res) {
    try {
        const { i_name, store_api_id, mealId, amount } = req.body;
        if (!i_name || !store_api_id || !mealId) {
            return res.status(400).json({ error: 'Missing ingredient data.' });
        }

        const user_email = req.session.userEmail;
        const meal = recipeModel.getRecipeById(mealId);
    
        // check if user logged in and created the meal
        if (user_email && user_email === meal.creator_email) {   // if so add
            // Check if the ingredient exists
            const existingIngredient = ingredientModel.getIngredient(i_name);
            if (!existingIngredient) {
                // If ingredient does not exist, add it
                ingredientModel.addIngredient(i_name, store_api_id);
            }

            recipeModel.addIngredientToRecipe(mealId, i_name, amount);
            res.status(200).json({ message: 'Ingredient added successfully!' });

        } else {    // if not logged in, redirect to login page
            console.log("not logged in");
            res.redirect(`/login`); 
        }
    } catch (error) {
        console.error('Error adding ingredient to meal:', error.message);
        res.status(500).json({ error: error.message });
    }
}

// Export the functions so they can be used in your routes file
module.exports = {displayPage, getProducts, addIngredientToList, addIngredientToMeal};