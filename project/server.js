const app = require('./app'); // Import the app
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
