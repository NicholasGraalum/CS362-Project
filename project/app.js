const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const Handlebars = require("handlebars");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealsRoutes');

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

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
  res.send('<h1>Welcome to My App</h1><p>This is the homepage.</p>');
});

// Routes
app.use('/users', userRoutes);
app.use('/meals', mealRoutes);
app.use(express.json())
app.use(express.static('static'))   // Static folder used for express-handlebars

// 404 Page
app.use((req, res) => {
  res.status(404).render('404');
});



module.exports = app; // Export the app for testing
