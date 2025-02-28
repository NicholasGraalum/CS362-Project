const express = require('express');
const router = express.Router();

const loginController = require("../controllers/loginController");


// Route to login
router.get('/', loginController.displayPage);

router.post('/', loginController.loginUser);

module.exports = router;
