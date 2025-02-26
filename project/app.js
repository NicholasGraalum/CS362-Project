const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
var Handlebars = require("handlebars")

const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');

// Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Set handlebars as view engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/users', userRoutes);
app.use('/meals', mealRoutes);
app.use(express.json())
app.use(express.static('static'))

// 404 Page
app.use((req, res) => {
  res.status(404).render('404');
});



// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app; // Export the app for testing
