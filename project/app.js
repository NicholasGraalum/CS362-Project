const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require("handlebars");
const session = require("express-session");
const cors = require('cors');

const app = express();
app.use(cors());

// session for tracking logged in user 
app.use(session({
  secret: "for_security_reasons_this_should_be_hidden_but_oh_well",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set true if using HTTPS
}));

// Import routes
const landingRoutes = require('./routes/landingRoutes')
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealsRoutes');
const loginRoutes = require('./routes/loginRoutes');
const ingredientsRoutes = require('./routes/ingredientsRoutes');
const dbIngredientsRoutes = require('./routes/dbIngredientsRoutes');
const profileRoutes = require('./routes/profileRoutes');
const listRoutes = require('./routes/listRoutes');
const createProfileRoutes = require('./routes/createProfileRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set handlebars as view engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Helper to set to proper case
Handlebars.registerHelper("properCase", function (str) {
    if (typeof str !== "string") return "";
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
});

// Add a default home route so cypress test works for now
app.get('/', (req, res) => {
  res.redirect('/landing');
});

// Routes
app.use('/landing', landingRoutes);
app.use('/users', userRoutes);
app.use('/meals', mealRoutes);
app.use('/login', loginRoutes);
app.use('/ingredients', ingredientsRoutes);
app.use('/db-ingredients', dbIngredientsRoutes);
app.use('/profile', profileRoutes);
app.use('/create-profile', createProfileRoutes);
app.use('/list', listRoutes);
app.use(express.static('static'))   // Static folder used for express-handlebars

// 404 Page
app.use((req, res) => {
  res.status(404).render('404');
});



module.exports = app; // Export the app for testing
