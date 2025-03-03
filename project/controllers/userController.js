// controllers/userController.js
const userModel = require('../models/userModel');

function getUsers(req, res) {
  const users = userModel.getAllUsers();
  // Render a view (HTML) with the user data
  res.render('users', { users: users });  // Render a 'users' template with the data
}

function createUser(req, res) {
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
    // Call the user model to create a new user
    userModel.addUser(email, password, username, zipcode);
    
    // Redirect to login page with success message
    res.redirect('/login?success=Profile created successfully! Please log in.');
  } catch (error) {
    // Handle errors (e.g., duplicate email)
    res.render('createProfile', { 
      error: error.message || 'An error occurred during profile creation',
      formData: { email, username, zipcode } // Return the data to repopulate the form
    });
  }
}

module.exports = { getUsers, createUser };