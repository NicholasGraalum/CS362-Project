### Abstract
Consider the choices of meal preparation, costs of meals and where to shop for groceries. With this we have decided to go ahead with developing a Smart Grocery List Generator. An app that creates grocery lists based on meal plans and dynamically adjusts based on user preferences and budget constraints. Users will be able to search for meals or get recommendations of meals from a database of meals entered by other users. This app is perfect for those who need extra help organizing and planning their week ahead. 
### Goal
Our team goal is to develop a Smart Grocery List Generator that will help with creating grocery lists based on meal plans. Our web based application will generate the list based on the users preferences and budget. 
### Structure
```
documentation/ : contains all term project documents  
    reports/ : contains weekly team progress reports  
    LIVINGDOC  

project/ : contains all term project code
    controllers : contains controllers to handle incoming requests and send responses
    database     : contains database files (schema, filler, setup)
    models       : contains functions to access data in the database
    test         : contains all tests
        e2e         : contains end to end tests using cypress
        integration : contains tests for testing that routes succeed
        unit        : contains unit tests for functions
        validation  : contains tests validating usecase requirements
    routes       : defines the paths to map to the correct URL
    static       : contains static files (html mockups and style.css)
    views        : contains handlebar templates for webpages
        partials    : contains partial handlebar templates
    package.json : contains dependencies
    app.js       : contains code for server configuration
    server.js    : contains code to run server
```

### Building and Testing the System
- Clone this repository to your local machine ```git clone https://github.com/NicholasGraalum/CS362-Project.git```
- Navigate to the project/ directory inside the local repository ```cd CS362-Project/project/```
- Ensure you have node.js installed: ```https://nodejs.org/en/download```
- Install dependencies ```npm i```
- Run tests ```npm t```

### Running the System
- After building and testing, run ```npm start```
- Paste ```http://localhost:3000``` into your web browser
- Refer to documentation/userDocumentation.md for information on how to use the website

### Operational Use Cases
- "Meals," "List," and "Profile" buttons on the top navigation bar redirect to corresponding pages
- Profile Page:
  + Redirects to login page if the user is not logged in
  + Displays user information
- Login Page:
  + Text boxes for email and password to login (To test, Email: alice@example.com, Password: hashedpassword1)
  + (Create Profile not operational)
- Meals Page:
  + Current meals in database will display in a grid
  + "Search Meals" button displays modal to filter meals
  + "Create Meal" button creates new meal and adds it to the data base (must be logged in)
  + "Add to List" button adds all ingredients in a meal to the shopping list (must be logged in)
  + Clicking on a meal card will redirect to a new page displaying more information about the meal
- Single Meal Page:
  + Displays name, picture, description, servings, calories, meal types, ingredients, and tags
  + Clicking "Add to List" adds all ingredients to shopping list
- List Page:
  + Displays all ingredients added to shopping list with the total price

### Trello
https://trello.com/invite/b/67858decd34bc68d48374ae3/ATTI51f3c84a6dd8d589092d403e5d5221d5AF41F0BE/cs-362-grocery-list
