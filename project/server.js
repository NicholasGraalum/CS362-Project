const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');

// Set up middleware
// app.use(express.json()); // Middleware to parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Use the routes
app.use('/users', userRoutes);  // When the user goes to '/users', the userRoutes file is used
app.use('/meals', mealRoutes);  // Meal routes

// 404 Page
app.use((req, res) => {
  res.status(404).render('404');
});

// Set handlebars as view engine
app.engine('handlebars', exphbs.engine({
  defaultLayout: false,  // Disable layouts for now
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Specify the views directory

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define the port and start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
