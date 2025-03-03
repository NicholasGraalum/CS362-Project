const express = require('express');
const router = express.Router();

const addIngredientsController = require("../controllers/dbIngredientsController");

router.get('/', addIngredientsController.display);

module.exports = router;
