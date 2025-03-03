const express = require('express');
const router = express.Router();
// Import the controller
const userController = require('../controllers/userController');

// Define the route for getting all users
router.get('/', userController.getUsers); // GET /users will call userController.getUsers()

// Route for handling the profile creation form submission
// router.post('/create', userController.createUser);

module.exports = router;