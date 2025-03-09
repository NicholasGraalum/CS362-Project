const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

router.get('/', profileController.displayPage);
router.get('/setStore', profileController.setStore);
// router.get('/create-profile', (req, res) => {
//     res.render('createProfile');  
// });

// router.post('/create-profile', profileController.createProfile);

module.exports = router;