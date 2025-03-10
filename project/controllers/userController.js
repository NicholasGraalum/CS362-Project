// controllers/userController.js
const e = require('cors');
const userModel = require('../models/userModel');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Function to get a token from Kroger
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

// Function to handle fetching stores by ZIP code
async function updateUserStore(zip, userEmail) {
    const token = await getToken();
    const response = await fetch(
        `https://api.kroger.com/v1/locations?filter.zipCode.near=${zip}&filter.limit=1`,
        { headers: { 'Authorization': `Bearer ${token}` } }
    );
    const data = await response.json();
    
    // Check if any store was returned
    if (!data.data || data.data.length === 0) {
      throw new Error("No stores found for this zip code");
    }
    
    // Extract the storeID from the first returned store
    // (Assuming storeID is available as locationId)
    const storeID = parseInt(data.data[0].locationId, 10);
    if (isNaN(storeID)) {
      throw new Error("Invalid store ID received");
    }
    
    // Update the user's storeID in the database using the userModel function
    // userModel.updateStoreID(req.session.userEmail, storeID);
    // console.log("Change successful. ID:", storeID)
    // userModel.updateZipcode(req.session.userEmail, zip);
    // console.log("Change successful. zip:", zip)    
    
    return storeID;
    
}


function getUsers(req, res) {
  const users = userModel.getAllUsers();
  // Render a view (HTML) with the user data
  res.render('users', { users: users });  // Render a 'users' template with the data
}

async function createUser(req, res) {
  // Extract form data from the request body
  const { email, password, username, zipcode } = req.body;
  
  // Validate form data (basic validation)
  if (!email || !password || !username) {
    return res.render('createProfile', { 
      error: 'Email, password, and username are required',
      formData: { email, username, zipcode } // Return the data to repopulate the form
    });
  }
  
  try {

    const storeID = await updateUserStore(zipcode, email);
    // Call the user model to create a new user
    userModel.addUser(email, password, username, zipcode, storeID);
    //alert("Account successfully created");

    // Redirect to login page with success message
    res.redirect('/login?accountCreated=1');
  } catch (error) {
    // Handle errors (e.g., duplicate email)
    res.render('createProfile', { 
      error: error.message || 'An error occurred during profile creation',
      formData: { email, username, zipcode } // Return the data to repopulate the form
    });
  }
}

module.exports = { getUsers, createUser };