const userModel = require('../models/userModel');

function displayPage(req, res)
{
    const user = userModel.getUserByEmail(req.session.userEmail);
    if (!user) {
        res.render('landingPage');
    }
    else{
        res.render('landingPage', {
            username: user.username,
            email: user.email,
            zipcode: user.zipcode,
            storeID: user.storeID
        });
    }
}

module.exports = {
    displayPage
};