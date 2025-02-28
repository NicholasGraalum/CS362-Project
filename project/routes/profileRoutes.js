const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.displayPage);
router.get('/setStore', profileController.setStore);

module.exports = router;