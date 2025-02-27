const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealsRoutes');

// Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set Handlebars as the view engine
app.engine('handlebars', exphbs.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Add a default home route so cypress test works for now
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My App</h1><p>This is the homepage.</p>');
});

// Routes
app.use('/users', userRoutes);
app.use('/meals', mealRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render('404');
});

module.exports = app; // Export the app for testing
