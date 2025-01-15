# **Smart Grocery List Generator**
### Team Info and Roles
Nicholas Graalum - Team Lead - Software Developer - graalumn@oregonstate.edu
Matthew Sasten - Software Developer - sastenm@oregonstate.edu
Andrew Chan - Software Developer - chanand@oregonstate.edu
Kylan Jagels - Software Developer - jagelsky@oregonstate.edu
Ryan Messenger - Software Developer - messengr@oregonstate.edu
Aaryan Raghuvanshi - Software Developer - raghuvaa@oregonstate.edu
### Communication
[Discord](https://discord.gg/zDAX2vdA)
[GitHub](https://github.com/NicholasGraalum/CS362-Project)

Guidelines: Try to respond to discord messages within 3 hours, or at most by the end of the day
### Abstract
Consider the choices of meal preparation, costs of meals and where to shop for groceries. With this we have decided to go ahead with developing a Smart Grocery List Generator. An app that creates grocery lists based on meal plans and dynamically adjusts based on user preferences and budget constraints.
### Goal
Our team has decided to start development on a Smart Grocery List Generator that will help with creating grocery lists for meal plans. This application will generate the list based on the users preferences and budget. 
### Current Practice
Apps and websites that are currently in use primarily calculate the cost to feed certain amounts of people. Ours will solve this issue of helping maintain a meal plan based on a budget.
### Novelty
This website will put meal planning and shopping lists all in one. The user will be able to pick meals for the week from their favorite meals or from new meals suggested to them. Then the ingredients from the selected meals will be added directly to their shopping list. For other groceries, the user will be able to set recurring items so that these necessities never run out. Before going shopping, the user will be able to see a price estimate for their shopping list, so they know ahead of time if it is within the budget. With this app shopping will be a breeze and no grocery will be forgotten again. 
### Effect
Overall the user base is aimed towards consumers of large grocery based companies. As well as people who struggle or need a way to help budget their spendings on food while keeping a meal plan.


### Use Cases
- A user goes to the website and inputs dishes they want to make throughout the week by selecting from the database of recipes and the site generates a corresponding grocery list with prices from local stores. 
- After adding recipes a user checks calories and macronutrients intake of dishes and based on recommended daily value give suggestions to balance out meals. 
Additional: pie chart showing the macronutrients for each meal
- At the start of the week, a user doesn’t know what to make and scrolls through and adds meals from a database based on dietary restrictions and other preferences / past meal choices.
- A user can sort through meal plans by meal type (breakfast, lunch, dinner, snack) and title (possibly more options)
- After selecting a meal plan/ grocery list the user is able to compare the prices at the same store or at different stores.
- A user can go through their profile to see the meals and lists they had stored and or created.  

### External Requirements
Base requirements:
Run on a server with a public URL that others can access 
Document the process for setting up the server
Technical Approach
Stack:
HTML/CSS, JavaScript
Server:
Node, express, handlebars
Database:
TBD (maybe mysql)
APIs:
Food nutrition (macros): https://fdc.nal.usda.gov/api-guide 
Can search for food by name
Fredmeyer: https://developer.kroger.com/api-products/api/product-api-public 
Can search for items available at a given location
Can also get the location of the item in the store if we wanted to make a fancy shopping map or something  
Other stores (possibly)

### Major features:
1. Users can create profiles and add meals to a Database of recipes. 
Searches or adds to database of recipes
Get recommendation of recipes based on user’s dietary restrictions and likes
Recipes can be added to a list of favorite recipes. 
2. Can create a shopping list based on meals in the following week in addition to other groceries.
Users can list what meals they plan to eat each day. Then ingredients for each meal are automatically added to the shopping list. 
Can set frequently bought items to have them automatically added to the shopping list based on how frequently they are purchased. 
3. Give the total cost of a meal or the total cost of a shopping list
Uses the store api to calculate costs
4. Calorie and macro calculator 
Calculates the total macros of a meal using nutrition api

### Non functional Requirements:
1. Reliability: Able to perform the functions based around the users profile, shopping lists, and mel plans
2. Quality: Easy to use and provides accurate information.
3. Scalability: Can handle multiple API requests without a performance decrease. Uses an sql database to store data so it can easily be scaled up.
4. Usability: Has a responsive, clear design that gives users feedback on actions.
5. Privacy: Secure storage of users’ profiles, especially dietary information and personal info.

### Stretch goals:
1. Map/route for shopping at your local store
Uses kroger api to get location of items in store
Maps most efficient route
Question: can we get the layout of the store?

2. Add additional store options (more than just Kroger)
Requires us finding more public store api or web scraping 
Risks
We plan to use multiple api’s that we have never used before. We could struggle with retrieving the data from the api or the api could not have the data we expected/required, making the website defunct. To mitigate this we will look into the api’s early on, learn how to use them, and make sure they will work for what we need. 
### Timeline
3 week sprints:
1. Basic UI and functionality, including user friendly UI and setting up a database for profiles. 
2. Using the API’s to create meal plans and grocery lists based on budget and diet. 
3. Comparing plans and lists and implementing AI for meal suggestions and maybe more.

### OTHER STUFF 
Project Idea Starter: “Smart Grocery List Generator: An app that creates grocery lists based on meal plans and dynamically adjusts based on user preferences and budget constraints." 
Add on ideas:
a version of this sounds interesting if there is a way to estimate price based on current deals or prices at fred meyers or something
Ai suggestions or categorizing?
Meal Planner Integration: A user can input their weekly meal plans, and the app generates a corresponding grocery list. 
Calorie calculator: calculates the calorie/protein/other of your meals and total daily intake
Meal suggestions: recommends meals based on your target calorie/protein and your preferences / past meal choices
