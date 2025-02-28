const express = require('express');
const router = express.Router();

const ingredientsController = require("../controllers/ingredientsController");

router.get('/stores', ingredientsController.getProducts);

module.exports = router;
