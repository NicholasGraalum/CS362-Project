const userModel = require('../models/userModel');

function displayPage(req, res) {
  res.render('loginPage'); 
}

function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        // Ensure email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required." });
        }

        // Verify user credentials
        const isValidUser = userModel.verifyUser(email, password);

        if (isValidUser) {
            req.session.userEmail = email; // Store email in session
            res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ error: "Invalid email or password." });
        }

    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ error: "Internal server error." });
    }
};


module.exports = { displayPage, loginUser };