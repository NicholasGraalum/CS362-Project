# Developer Documentation

### Building the software:
  + Clone the repository to your local machine
  ```
  git clone https://github.com/NicholasGraalum/CS362-Project.git
  ```
  + Navigate into the internal /project dir
  ```
  cd CS362-Project/project/
  ```

  + Continue at step 2 in [SETUP.md](SETUP.md), skipping step 1

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

### Coding Guidlines
#### General Formatting:
- Use two spaces for each indentation level  
- Add line breaks after opening and closing tags for better readability
- Avoid leaving trailing spaces at the end of lines
- Use UTF-8 character encoding
- Use camel case
- Write clear comments
#### HTML(Handlebars):
- Use lowercase for all HTML element names
- Enclose attribute values in double quotes
- Do not include a value for boolean attributes
- Use semantic elements when appropriate
#### CSS:
- Prioritize more specific CSS selectors
- Use lowercase for all CSS property names
- Use shorthand properties where possible
- Use hex color codes for consistency
#### JavaScript:
- Organize code into logical modules and functions, avoid deep nesting.
- Implement error handling to prevent crashing
- Aim to write code that uses minimal resources and is efficient
- Use meaningful variable, function and class names.

### Testing
#### Running tests
From /project run tests with 'npm test'
```
npm test
```
#### Adding tests
Any tests added under /project/test will run automatically.

Use Chai for all assertions.  
Use Supertest to simulate express requests.   
Use Cypress for end to end testing.  
For any tests requiring the database, use a temp better-sqlite3 database (See existing model unit tests)  

Reference existing tests for formatting.  

**LATEST TEST RESULTS** can be found at https://github.com/NicholasGraalum/CS362-Project/actions/workflows/test.yml 

