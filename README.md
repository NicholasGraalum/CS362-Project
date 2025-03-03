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
    database     : contains database for the website
    models       : contains models for the structure of data in the database
    routes       : defines the paths to map to the correct URL
    static       : contains static files (html mockups and style.css)
    views        : contains handlebar templates for webpages
        partials    : contains partial handlebar templates
    package.json : contains dependencies
    server.js    : contains code for server
```

### Building and Testing the System
- Clone this repository to your local machine ```git clone https://github.com/NicholasGraalum/CS362-Project.git```
- Navigate to the project/ directory inside the local repository ```cd CS362-Project/project/```
- Install dependencies ```npm i```
- Run tests ```npm t```

### Running the System
- After building and testing, run ```npm start```
- Paste ```http://localhost:3000``` into your web browser

### Trello
https://trello.com/invite/b/67858decd34bc68d48374ae3/ATTI51f3c84a6dd8d589092d403e5d5221d5AF41F0BE/cs-362-grocery-list
