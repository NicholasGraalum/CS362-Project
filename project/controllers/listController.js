const listModel = require('../models/listModel');
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
// async function getPrice(req) {
//     const list = listModel.getUserList(req.session.userEmail);
//     console.log(list);
//     // if (!list || list.length === 0) {
//     //     return 0;
//     // }
    
//     // Retrieve the user's store ID.
//     const user = userModel.getUserByEmail(req.session.userEmail);

//     // if (!user || !user.storeID) {
//     //     // If there is no store ID, you may choose to return 0 or handle this case differently.
//     //     return 0;
//     // }
//     const storeId = user.storeID;

//     // For each ingredient, call the Products API using the ingredient's ID.
//     const pricePromises = list.map(async (item) => {

//         // // Assume item.ingredient_id contains the Kroger product id (13-digit string).
//         // if (!item.ingredient_id) {
//         //     return 0;
//         // }

//         const token = await getToken();
//         const response = await fetch(
//             `https://api.kroger.com/v1/products?filter.productId=${item.store_api_id}&filter.locationId=${storeId}`,
//             { 
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 }
//             }
//         );
//         const data = await response.json();
//         console.log(data);
//         // If no product is found, assume price 0 for that ingredient.
//         // if (!data.data || data.data.length === 0) {
//         //     return 0;
//         // }

//         const product = data.data[0];

//         const priceObj = product.items[0].price.regular
//         console.log(priceObj);
//         return priceObj //* item.amount;
//     });

    
//     // Wait for all prices to resolve and sum them.
//     const prices = await Promise.all(pricePromises);
//     const total = prices.reduce((acc, curr) => acc + curr, 0);
//     return total.toFixed(2); // Returns a string with two decimals, e.g., "12.34"
// }


// async function displayPage(req, res) {
//     if (!req.session || !req.session.userEmail) {
//         return res.redirect('/login');
//     }

//     const list = listModel.getUserList(req.session.userEmail);
//     const totalPrice = await getPrice(req);
//     // if (!list) {
//     //     return res.status(404).send('There are no ');
//     // }

//     res.render('listPage', {list: list, totalPrice: totalPrice}); 
// }

async function displayPage(req, res) {
    if (!req.session || !req.session.userEmail) {
      return res.redirect('/login');
    }
  
    // Get the user's shopping list
    let list = listModel.getUserList(req.session.userEmail);
    
    // Retrieve the user's storeID from the profile
    const user = userModel.getUserByEmail(req.session.userEmail);
    const storeId = user.storeID;
  
    // Process each list item: fetch its product data, extract price, and attach an extra note if needed.
    list = await Promise.all(
      list.map(async (item) => {
        const token = await getToken();
        const url = `https://api.kroger.com/v1/products?filter.productId=${encodeURIComponent(item.store_api_id)}&filter.locationId=${storeId}`;
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
  
        let unitPrice = "N/A";
        if (data.data && data.data.length > 0) {
          const product = data.data[0];
          if (product.items && product.items.length > 0 && product.items[0].price) {
            unitPrice = product.items[0].price.regular;
          }
        }
        
        // If the unitPrice is "N/A", we want to display a note, and for calculation purposes, treat it as 0.
        let extraNote = "";
        if (unitPrice === "N/A") {
          extraNote = "Not calculated in final price";
          unitPrice = 0;
        }
        
        // Attach the computed price and note to the item
        item.price = unitPrice;
        item.extraNote = extraNote;
        return item;
      })
    );
  
    // Calculate the total price by summing each item's price (multiplied by amount if needed)
    const totalPrice = list.reduce((acc, item) => acc + Number(item.price), 0).toFixed(2);
  
    // Render the Handlebars template with the updated list and total price.
    res.render('listPage', { list, totalPrice });
  }

async function deleteItem(req,res) {
    const i_name = req.query.ingredient;
    if (!i_name) {
        return res.status(400).send('Ingredient name is required for deletion.');
    }

    try {
        // Remove the ingredient from the list using the model function
        // This function should remove the entire record from the On_list table for this user and ingredient.
        listModel.removeFromList(req.session.userEmail, i_name);
        // After successful deletion, redirect back to the list page.
        res.redirect('/list');
    } catch (error) {
        console.error('Error removing ingredient from list:', error);
        res.status(500).send('Error removing ingredient from list');
    }
}

module.exports = {displayPage, deleteItem};