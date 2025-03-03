const express = require('express');
const router = express.Router();

// Import the controller
const userController = require('../controllers/userController');

// Define the route for getting all users
router.get('/', userController.getUsers); // GET /users will call userController.getUsers()

// Define any other user-related routes here, e.g., for creating a user:
// router.post('/', userController.createUser);

module.exports = router;
