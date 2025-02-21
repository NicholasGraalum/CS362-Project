# **Smart Cart**
### Team Info
Nicholas Graalum - Team Lead - Front/back Software Developer- graalumn@oregonstate.edu  
Matthew Sasten - Frontend Software Developer, Backend Tester - sastenm@oregonstate.edu  
Andrew Chan - Software Developer, Backend Tester - chanand@oregonstate.edu  
Kylan Jagels - Software Developer, Frontend tester- jagelsky@oregonstate.edu  
Ryan Messenger - Frontend Software Developer, Backend Tester - messengr@oregonstate.edu  
Aaryan Raghuvanshi - Backend Software Developer, Frontend test- raghuvaa@oregonstate.edu  
### Communication
Discord  
Guidelines: Try to respond to discord messages within 3 hours, or at most by the end of the day

GitHub: https://github.com/NicholasGraalum/CS362-Project

### Abstract
Consider the choices of meal preparation, costs of meals and where to shop for groceries. With this we have decided to go ahead with developing a Smart Grocery List Generator. An app that creates grocery lists based on meal plans and dynamically adjusts based on user preferences and budget constraints. Users will be able to search for meals or get recommendations of meals from a database of meals entered by other users. This app is perfect for those who need extra help organizing and planning their week ahead. 
### Goal
Our team goal is to develop a Smart Grocery List Generator that will help with creating grocery lists based on meal plans. Our web based application will generate the list based on the users preferences and budget. 
### Current Practice
Apps and websites that are currently in use primarily calculate the cost to feed certain amounts of people. Ours will solve this issue of helping maintain a meal plan based on a budget.
### Novelty
This website will put meal planning and shopping lists all in one. The user will be able to pick meals for the week from their favorite meals or from new meals suggested to them. Then the ingredients from the selected meals will be added directly to their shopping list. For other groceries, the user will be able to set recurring items so that these necessities never run out. Before going shopping, the user will be able to see a price estimate for their shopping list, so they know ahead of time if it is within the budget. With this app shopping will be a breeze and no grocery will be forgotten again. 
### Effect
Overall the user base is aimed towards consumers of large grocery based companies. As well as people who struggle or need a way to help budget their spendings on food while keeping a meal plan.


### Use Cases
User can create a profile and login to save their data (Kylan) (database)
- **Actors**: The user
- **Triggers**: Clicks “Login / Sign-Up” button
- **Preconditions**: The user must have a unique email address and username
- **Postconditions**: The user creates and logs in to a unique profile
- **List of steps**: User navigates to login/sign-up, provides credentials, the system creates an account, then the user has access to their profile.
- **Extensions**: User updates profile/username after logging in
- **Exceptions**: Invalid login details, already existing email, a bug or system failure occurs

User can view ingredients, number of servings, and macronutrients for each meal plan (Ryan)
- **Actors**: The user
- **Triggers**: Clicking on a meal
- **Preconditions**: Must be on the page showing the meals and the user wants to see how many calories and macronutrients are in each meal prep per serving
- **Postconditions**: Redirects to a new page showing the ingredients, number of meals, calories, and macronutrients
- **List of steps**: Add a listener to each meal that redirects to a meal template, the meal template takes information from the meal database, the page is rendered
- **Extensions**: Add a pie chart showing the percentages of each macronutrient, add a hidden dropdown showing the micronutrients and percentage of daily values
- **Exceptions**: The meal requested may not have all the needed information (shouldn’t happen if we have input verification)

User can add meals to a database of recipes (Andrew)
- **Actors**: The user
- **Triggers**: The user clicks on “Add a recipe” button 
- **Preconditions**: The user must have an account with our site
- **Postconditions**: The user adds a recipe to our pre-existing database of recipes
- **List of steps**: User logs on and adds a recipe which the user can click on and add to their shopping list the next time they use our site.
- **Extensions**: User adds a small info paragraph about possible substitutions
- **Exceptions**: User has a missing input such as, a list of ingredients or the name of the recipe

User can create a shopping list based on meals in the DB (Nicholas Graalum)
- **Actors**: The user
- **Triggers**: The user clicks add to the shopping list on the meal they want/ searched for.
- **Preconditions**: The user must have an account, there must be meals in the DB
- **Postconditions**: The ingredients of the meal added will appear in the shopping list.
- **List of steps**: In the meal page the user selects a meal of interest and clicks the “add to shopping list” button.
- **Extensions**: The user searches for  meals in the meal page via the search bar and adds it. The user adds a meal via the recommendations page. 
- **Exceptions**: The user adds incorrect meals to the shopping list. They search for a meal that doesn’t exist in the DB.

User can search for specific types of meals (Matthew Sasten)
- **Actors**: The user
- **Triggers**: Clicking the ‘Apply Filter’ button
- **Preconditions**: All meals are shown on the page, the user wants to search by certain specifications (meal type, name, categories)
- **Postconditions**: The page is updated to only show the meals that satisfy the given filter suggestions
- **List of steps**: Add listener to ‘Apply Filter’ button, created algorithm to add or remove meals from DOM based on filter conditions
- **Extensions**: User updates or clears the filter conditions then correct meals are shown based on the new conditions
- **Exceptions**: If there are no meals in the database that match the filters, no meals will be shown

Users can set frequently bought items to have them automatically added to the shopping list based on how frequently they are purchased. (Aaryan)
- **Actors**: The user
- **Triggers**: User turning on the enable feature for the auto-add.
- **Preconditions**: User has added items to their list previously
- **Postconditions**: Frequently bought items are automatically included in the list.
- **List of steps**: User enables an auto-add feature, system tracks frequency of item, then adds frequent items automatically when the user generates a list.
- **Extensions**: User can manually adjust auto-added items, system suggests frequency settings based on patterns (biweekly/monthly)
- **Exceptions**: No past data, incorrect frequency calculation

Ask for meal recommendations (Updated to be tentative stretch goal per ta rec)
- **Actors**: The user
- **Triggers**: The user clicks the meal recommendation button
- **Preconditions**: The user has entered a meal recommendation request prompt describing what type of meal they want
- **Postconditions**: A generated response is displayed including a few meal suggestions from the database and information about those meals.
- **List of steps**: User goes to the meal request page. User enters an appropriate meal request and clicks the request button. Gpt api generates a list of suggested meals. 
- **Extensions**: The user leaves the page before clicking the request button: entered request is not saved.
- **Exceptions**: The request prompt is not understood by the gpt ai: a default response is given with instructions for a correct prompt
### Functional Requirements:
1. System provides a way for users to create an account or log in with their credentials
2. System allows adding meals while storing all meals added
3. System filters meals based on user preferences 
4. System provides an accurate price of the shopping list
### Non functional Requirements:
**Reliability**: Consistently able to perform the functions based around the users profile, shopping lists, and meal plans.  
**Quality**: Easy to use and provides accurate information.  
**Scalability**: Can handle multiple API requests without a performance decrease. Uses an sql database to store data so it can easily be scaled up.  
**Usability**: Has a responsive, clear design that gives users feedback on actions.  
**Security**: Stores user data in a secure manner
### External Requirements
**Error handling**: Invalid user inputs and actions are handled gracefully.  
**Access**: Run on a server with a public URL that others can access  
**Documentation**: Document the process for setting up the server so new servers can be created.  
**Scope**: The scope of our project extends to a reasonable use case for each member to implement. 
### Technical Approach / Toolset
#### Toolset
*Stack*:
- For the stack of our software, we will be using HTML, CSS and javascript. These are the industry standard for developing a stack and web based applications. Furthermore these three tools are what the team is most comfortable with.

Server:
- When it comes to the server position of our software we will be using Node, express and handlebars. Again these are the industry standard for developing a server for web based applications. This also offers a lot of flexibility for our application.

Database:
- Our database for the software will most likely be mysql, as that is the only resource that we know of at the moment. Another thing is that this is the database toolset that we have used the most. 

APIs:
- We will be using two APIs for our software, the food nutrition info under the usda, as well as the Fredmeyer  API giving us the ability to show the prices and items at the specific store. This is a part of the general basis of our software. If we are able to we would like to add some more store APIs that are public domain to give more offering of price and items.
### Team roles
Team lead:
- Nick: This role is needed due to the increase in need of organization and coherence within the team. Nick fills this role due to his monitoring and use of organizational programs, as well as his communication with the team.

Frontend developer / backend tester:
- Importance: To create a well designed front end of the webpage and to make a UI that is easy to use and comprehend. As well as help test and improve the backend functionality of the webpage.  
- Matthew: Has experience with web development for front end
- Ryan:  Has experience with web development for front end

Backend developer / frontend tester:
- Importance: Make a fast and well integrated API and database usage for the web page. Furthermore help test and improve the frontend design and functionality of the website.
- Kylan: Has experience with backend development and using APIs. 
- Andrew: Has experience with web development for back end and using APIs
- Aaryan: Has experience with web development for back end and using APIs

Schedule under roles:

|Role|Week 4|Week 5|Week 6|Week 7|Week 8|Week 9|Week 10|
|--------|--------|--------|--------|--------|--------|--------|--------|
|Front end developer A|Finish HTML| |EH HTML| |Finish F-JS|EH F-JS|Final adjust|
|Front end developer B| |Finish CSS| |EH CSS|Finish F-JS| |Final adjust|
|Back end developer A|Food API| |Food Handles| |EH Meal| |Final adjust|
|Back end developer B|Meal API| |Meal Handles| |EH Food| |Final adjust|
|Back end developer C|Profile API| |Profile Handles| |EH Profile| |Final adjust|
|Front end tester||Test HTML|Test CSS| | |Test F-JS| |
|Back end tester||Test Profile API|Test Meal API|Test Food API||||


### External feedback
Feedback will be most useful for testing our UI to make sure it is user friendly and intuitive. We will get this feedback by finding potential users and performing user tests.  
### Risks
1. APIs: 
- Risk: We plan to use multiple api’s that we have never used before. We could struggle with retrieving the data from the api or the api could not have the data we expected/required.
- Mitigation: We will look into the api’s early on, learn how to use them, and make sure they will work for what we need. 
2. Server setup:
- Risk: We plan to have our website hosted on a server which comes with uncertainties such as uptime and teammates familiarity with developing on live servers.
- Mitigation: We will research the best way to host the server ahead of time and make sure all teammates know how to push and test code on the server.  
3. Item code Integration issues:
- Risk: We will have different team members working with different apis that use different codes to refer to items. This could cause issues matching items when we try to connect all of our features with one database.
- Mitigation: We will come up with a system to match item codes across apis and within our own database before getting too far into development. 
### Major features:
1: Users can create profiles and add meals to a Database of recipes. 
- Searches or adds to database of recipes
- Get recommendation of recipes based on user’s dietary restrictions and likes
- Recipes can be added to a list of favorite recipes. 
2: Can create a shopping list based on meals in the following week in addition to other groceries.
- Users can list what meals they plan to eat each day. Then ingredients for each meal are automatically added to the shopping list. 
- Can set frequently bought items to have them automatically added to the shopping list based on how frequently they are purchased. 
3: Give the total cost of a meal or the total cost of a shopping list
- Uses the store api to calculate costs
4: Calorie and macro calculator 
- Calculates the total macros of a meal using nutrition api
### Stretch goals:
1: Map/route for shopping at your local store
- Uses kroger api to get location of items in store
- Maps most efficient route
- Question: can we get the layout of the store?

2: Add additional store options (more than just Kroger)
- Requires us finding more public store api or web scraping 
### Overall Timeline
By week
- 1 and 2: project proposal and requirements elicitation 
- 3: begin architecture and design specifications 
- 4: finish specifications and set up groundwork for implementation. 
- 5: begin initial implementation
- 6: finish initial implementation 
- 7: Testing and fixes
- 8: beta release and final improvements
- 9 and 10: project finalization and final release/demo

2 week sprints:
1. Basic UI and functionality, including user friendly UI and setting up a database for profiles. 
2. Using the API’s to create meal plans and grocery lists based on budget and diet. 
3. Comparing plans and lists and implementing AI for meal suggestions and maybe more.

## Software Architecture
### Architecture Pattern:
**Layered architecture pattern (or model/view/controller)**   
<sub>we basically described model/view/controller architecture. It might make more sense to just call it that</sub> 
- **Presentation layer: (view)** web interface hosted on website     
  - Communicates to the business layer through http requests.   
- **Business layer: (controller)** backend server handling https request routing, executes necessary computations or API calls, renders on server side replies with html page.  
  - Communicates to Application layer by importing and calling database access functions
  - Alternative: REST API and client side rendering.  
    - Client side rendering is better for dynamic interfaces and reduces server load
    - We chose server side rendering because we are more familiar with it, it is simpler, and our interfaces will not require many dynamic aspects.   
- **Application layer: (models)** Data access layer (DAL) implements all necessary functions to access data so there are not SQL calls throughout program  
  - Communicates to data layers through MySQL ip by sending sql queries.  
- **Data layer:** MySQL database   
  - Alternative: NoSQL database like mongoDB  
    - NoSQL databases are more flexible   
    - We chose SQL database because it is better for structured data and queries and we are more familiar with using SQL databases.   

**Assumptions:**
- The server side is a monolith including business layer and application layer: routing functions, computation functions, and data access functions divided into files and imported where needed. 
- SQL injection security is implemented through data access layer
- Logged in users are handled by session variables. 
- Handlebars server side rendering is sufficient for our interface. 


### Components:

#### Web Pages (presentation layer)
1. **Main interface**: Displays the header, sidebar, and base layout. 
a. ‘Meals’ button will redirect to a page with all of the meals  
b. ‘Ingredients’ button will redirect to a page with individual ingredients to add to the shopping list  
c. ‘Shopping List’ button will redirect to a page with all items added to the shopping list and total cost.  
d. Additional buttons: login/logout, profile (TBD)  
2. **All meals page**: Displays all available meals on individual cards with a picture and name. 
a. Each photocard will direct to an individual meal page displaying information about the meal. A ‘+’ button on the card will add all ingredients to the shopping list.  
b. Filter feature: Pop-up modal that shows filter conditions to search by (name, meal type, category tags, meal type).  
c. ‘Create Meal’ button: Pop-up modal with input fields to create a new meal and add it to the database. Must validate input.   
3. **Single meal page**: Displays information about the meal (name, description, image, number of servings, meal type, category tags, macronutrients, ingredients) and a ‘+’ button.  
4. **Ingredients page**: Displays all available ingredients on individual cards with a picture, name, and ‘+’ button.
a. ‘+’ button: Adds all ingredients to shopping list.  
b. Filter bar to search for specific ingredients.  
5. **Shopping list page**: Displays all ingredients added to cart and the estimated total cost.  
a. ‘-’ button on each ingredient: allows the user to remove ingredients from the shopping list.  
b. ‘+’ button on each ingredient: allows the user to increase the amount of the ingredient.  
6. **Meal recommendation page**
a. Simple text input field to enter meal request prompt  
b. “View meal” appears after entering meal request that will take user to the meal page  
7. Profile page (tentative)
8. Login/logout

#### Express routing (business layer)
- Local hosted server that takes http requests.
- Each page listed in the web pages component will have a corresponding http request function 
- The one exception is that the login page and landing page will be the same page, routed differently depending on if logged in.

#### computation functions (business layer)
- Meal macro calculator function: calls fdc nutrition api to calculate total macros for ingredients in meal.
- Grocery list price calculator function: calls Kroger api to calculate total price for all items on list. 

#### DAL (data access layer)
- Functions to pull data for a specific entry in users, meals, or ingredients. 
- Function for pulling meals with specific meal tags.
- Function for pulling ingredients in a meal. 
- Function for pulling meals favorited by user. 


#### Data Base (data layer):

ER Diagram:
![Database ERD](images/database_ERD.png)

Attribute specifications:
- Recipe aka Meal plan  
-- Name (varchar(20))  
-- Image (link)  
-- Number of servings (float)  
-- Meal type (multivalued: breakfast, lunch, dinner) (varchar(20))  
-- Category tags: (multivalued: vegan, vegetarian, gluten free, etc.) (varchar(20))  
-- Macronutrients (Tentative. Will be derived for now. Might add to database later to save api calls)  
-- Ingredients (relation)  
-- Visibility (public or private)  
-- Description (varchar(200))  
- User  
-- Email (varchar(100))  
-- Password (varchar(100))  
-- Profile info (Tentative. Might add profile info later)  
- Ingredients   
-- Name (varchar(100))  
-- Store_api_id (item id in kroger api) (int)  
-- Nutrition_api_id (item id in usda fdc api) (int)  

  
### Software Design

#### webpages (presentation layer)

Handlebars (technically on server): main handlebar template will include the header, sidebar, and base layout for every page. Partial templates will be used to render the subpages using data from the database.  

#### Server (business layer)

Express routing to serve html pages rendered from handlebars to client. Routing functions are responsible for handling calling other necessary functions for computing, calling DAL functions or FDC nutrition API and Kroger API to collect necessary data, and rendering html page with data and handlebars. 

#### Data access layer

We will use the mysql2 library to send sql queries to access the data from MySQL. We will start by implementing functions to return data for each table and add additional functions as necessary. This will allow anyone working on the program to easily access data, even if they aren't familiar with the database.

#### Database specifications (data layer)
DataBase service:  
MySQL: This will be used to make the database for the meals and ingredients. We are most comfortable with this service.
Responsibilities: respond with data when receiving SQL query requests.

### Coding Guidelines
All of these guidelines were taken from the google AI overview, slightly modified to stay inline with how our group operates. These all best fit our group as web development requires a lot of cross referencing with variable names and attributes. We can keep a consistent naming convention and system to all our code to better communicate and avoid common errors. Furthermore having language specific guidelines for functionality can help the team avoid loading times and keep a consistent mindset for the product.

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
#### JavaScript(Express):
- Organize code into logical modules and functions, avoid deep nesting.
- Implement error handling to prevent crashing
- Aim to write code that uses minimal resources and is efficient
- Use meaningful variable, function and class names.



### Process Description
#### Risk Assessment:

| Risk                     | Likelihood | Impact | Evidence                                                | Mitigation                                        | Detection                                             | Plan                                                                 |
|--------------------------|------------|--------|--------------------------------------------------------|--------------------------------------------------|-----------------------------------------------------|----------------------------------------------------------------------|
| API Integration Issues   | High       | High   | Limited experience with Kroger APIs                    | Early exploration of the API with testing        | API testing                                         | Fallback to a static data set if the API fails                       |
| Team Communication Issues | Low        | High   | Reliance on online communication                      | Set response expectations and standup meetings regularly | Track responses and activity from each member     | Team lead will reach out individually if there are any problems      |
| User Scalability         | Low        | High   | API calls have a certain daily and monthly limit      | Upgrade API plan to be able to handle more calls | Track our user count and our growth                | Once we reach a certain number of users that approach API limits, upgrade the plan |
| DB Issues               | Low        | High   | Anticipated rapid growth in the recipe data           | Optimize queries, with indexes                   | Monitor performance and scale                       | Implement scalable database infrastructure                            |
| Document Organization    | Medium     | Medium | Between seven members and lots of files, keeping consistent code and variable tracking can be messy | Proper documentation and frequent communication | Code starts to get messy to read, duplicate function or variable declaration | Draw out our design plan, designate roles with no conflicts         |








Our risks are now more specific to our project, with more issues related to both team and software potential shortcomings.


#### Project Schedule

| Milestone                                      | Tasks                                               | Effort         | Dependencies               |
|------------------------------------------------|-----------------------------------------------------|---------------|----------------------------|
| **Week 4: Finish Architecture**               | Finalize architecture and design                   | 2 person-weeks | None                       |
| **Week 5: Initial Implementation**            | Implement basic UI and backend                     | 2 person-weeks | Architecture complete      |
| **Week 6: API Integration**                   | Integrate needed APIs                              | 2 person-weeks | Backend setup complete     |
| **Week 7: Testing and Improvements**          | Unit and integration testing                       | 1 person-week  | Initial implementation complete |
| **Week 8: Implement Needed Changes & Stretch Goals** | Deploy testing results and work on outstanding features/goals | 1 person-week  | Testing complete           |
| **Week 9-10: Final**                          | Address feedback and finalize project/presentation | 2 person-weeks | Testing complete           |




#### Team Structure
**Team Lead:** Nicholas Graalum (oversees progress, coordinates tasks).  
**Frontend Developers:** Matthew Sasten, and Ryan Messenger (UI design and implementation)  
**Backend Developers:** Andrew Chan, Aaryan Raghuvanshi, and Kylan Jagles (API integration, DB management).  
**Testers:** All members cross-testing  
Any available member is available to help and test wherever needed along the way as well.  


#### Test Plan and Bugs
Track all bugs on **GitHub Issues**
**Functional Requirements:**
  - **Unit Testing:** Verify meal macronutrient calculation functions. Verify shopping list price calculation functions
  - **Integration Testing:** Test interactions between components (Verify all HHTP requests and API calls)  
  - **Usability Testing:** Conduct user studies to evaluate the ease of use of our UI/UX
  - **Black Box Testing:** Create a variety of personas to verify all functional requirements by testing as they would use the website
  - **White Box Testing:** Verify that all of our backend functions are working by targeting potential bugs and edge cases
  - **Bug Tracking:** Use GitHub Issues to log and resolve bugs.
**Non-Functional Requirents:**
  - **Responsiveness:** Measure server response time, especially for actions requiring API calls
  - **Scalability:** Measure our SQL query response time on large datasets


#### Documentation plan
Developer living documentation and guides for future development. This will include code structure and architecture. Implemented as we develop new features
User guide documentation. This will go over all the UI and different features and how to use them. Implemented at the end of development and as new features are implemented
In-app information symbols and explanations. This will explain in the app how to do different things and use different features. Implemented during development and from user feedback.

#### Test-Automation and CI 
We are using GitHub Actions for continuious integration. Every time a pull request is made or a change has been commited, The GitHub action event will be called, before getting the code from the repo, downloading dependencies, and running the mocha tests cases. This happenes through the /.github/workflows folder with the YAML script. 

**Pros of GitHub Actions**
- Built directly into GitHub, making setup and maintenance easier. No need for an extra service.
- Pre-made workflow templates for a variety of products.
**Cons of GitHub Actions**
- Less detailed log output for debugging
- Longer start time compared to other dedicated CI services
