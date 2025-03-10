const express = require('express');
const router = express.Router();

const listController = require("../controllers/listController");

router.post('/delete', listController.deleteItem);
router.get('/', listController.displayPage);

module.exports = router;