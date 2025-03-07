const express = require('express');
const router = express.Router();

const ingredientsController = require("../controllers/ingredientsController");

router.get('/', ingredientsController.displayPage);
router.get('/search', ingredientsController.getProducts);


module.exports = router;
