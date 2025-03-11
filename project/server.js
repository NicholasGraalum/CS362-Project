const app = require('./app'); // Import the app
const port = process.env.PORT || 3000; // Use the PORT from environment variables

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
