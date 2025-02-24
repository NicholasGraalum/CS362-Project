const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');

// Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);
app.use('/meals', mealRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render('404');
});

// Set handlebars as view engine
app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app; // Export the app for testing
