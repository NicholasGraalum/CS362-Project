const express = require('express');
const router = express.Router();
const createProfileController = require('../controllers/createProfileController');

// Route to display the create profile page
router.get('/', createProfileController.displayPage);

module.exports = router;