const userModel = require('../models/userModel');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

require('dotenv').config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

function displayPage(req, res) {
    if (!req.session || !req.session.userEmail) {
        return res.redirect('/login');
    }

    const user = userModel.getUserByEmail(req.session.userEmail);
    if (!user) {
        return res.status(404).send('User not found');
    }

    res.render('profilePage', {
        username: user.username,
        email: user.email,
        zipcode: user.zipcode,
        storeID: user.storeID
    }); 
}

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
async function setStore(req, res) {
    try {
        if (!req.session || !req.session.userEmail) {
            return res.status(401).json({ error: "User not logged in" });
        }
        const { zip } = req.query;
        if (!zip) {
            return res.status(400).json({ error: "Zip code is required" });
        }
        const token = await getToken();
        const response = await fetch(
            `https://api.kroger.com/v1/locations?filter.zipCode.near=${zip}&filter.limit=1`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );
        const data = await response.json();
        
        // Check if any store was returned
        if (!data.data || data.data.length === 0) {
            return res.status(404).json({ error: "No stores found for this zip code" });
        }
        
        // Extract the storeID from the first returned store
        // (Assuming storeID is available as locationId)
        const storeID = parseInt(data.data[0].locationId, 10);
        if (isNaN(storeID)) {
            return res.status(500).json({ error: "Invalid store ID received" });
        }
        
        // Update the user's storeID in the database using the userModel function
        userModel.updateStoreID(req.session.userEmail, storeID);
        console.log("Change successful. ID:", storeID)
        userModel.updateZipcode(req.session.userEmail, zip);
        console.log("Change successful. zip:", zip)    
            
        res.json({ message: "Store updated successfully", storeID });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//ALSO ADD SOMETHING TO REFRESH PAGE AFTER CHANGING SOMETHING 
//STILL NEED STUFF TO CHANGE USERNAME

module.exports = {displayPage, setStore};