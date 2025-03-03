// controllers/userController.js
const userModel = require('../models/userModel');

function getUsers(req, res) {
  const users = userModel.getAllUsers();
  // Render a view (HTML) with the user data
  res.render('users', { users: users });  // Render a 'users' template with the data
}

module.exports = { getUsers };
