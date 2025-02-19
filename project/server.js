const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');

// Set up middleware
// app.use(express.json()); // Middleware to parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Use the routes
app.use('/users', userRoutes);  // When the user goes to '/users', the userRoutes file is used

// Set handlebars as view engine
app.engine('handlebars', exphbs.engine({
  defaultLayout: false,  // Disable layouts for now
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Specify the views directory

// Define the port and start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
