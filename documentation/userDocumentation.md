#### User Documenation:
### Description:
Smart Cart is grocery list based webpage. It will allow you to create meals with specific ingredients as well as add individual ingredients to your list. This includes a system to show you a kroger based store in your area based on your zipcode, which will allow you to view the prices of the given products in your list.

### Accessing the website:
Currently in order to access the website you must connect to localhost:

http://localhost:3000

This will take you to the landing page. 

### Using the website:
When using the website there are 4 main pages:
- '/meals': this can be accessed by clicking the *meals* button on the top nav bar of the webpage
- '/ingredients':  this can be accessed by clicking the *ingredients* button on the top nav bar of the webpage
- '/list': this can be accessed by clicking the *list* button on the top nav bar of the webpage
- '/profile': this can be accessed by clicking the circle with the word *profile* in it

Meals page:
In the meals page you will find containers holding different types of meals with an image as well as a name associated with it. In these containers also is a *add ingredients* button which will add the ingredients of the current meal to your list. When you click the name of the chosen meal you will be redirected to the page containing the meal chosen. On this page it will show the ingredients in the meal as well as the meal type and the number of servings. There will also be a small description of the meal. If you click the plus (+) icon by the ingredients button, it will add the ingredients to your list. 

Back in the main meals page, you will see two more buttons, *search meals* and *create meal*. In the search meals button you will find a pop up that gives you a primary search bar to search by name. As well as two sections, the meal type and the category tag. Meal type is of the selection: Breackfast, Lunch, Dinner and Snack. Category type is of the selection: Vegan, Vegetarian, High Protein, Low Calorie and Gluten free. When you select the respective options and or give a specific name it will display the valid options. Inside of the create meal pop up there will be a *Meal name* section for you to include the name of the meal you wish to add, a *Description* section to include what the meal is, an *Image link* section for a link to the image you wish to display, a *Meal Type* section to inlcude the previousaly mentioned meal types, a *Servings* section to include the amount of servings in the meal, a *Calories per serving* section to include the calories contained in each serving, a *Category tags* section for the previously mentioned categories it can be and finally an add ingredients button to include the ingredients in the meal. 

Ingredients page:
N\A


### Accessing the Website
- Clone the repository ```git clone https://github.com/NicholasGraalum/CS362-Project.git```
- Navigate to the project/ directory inside the local repository ```cd CS362-Project/project/``
- Install dependencies ```npm i```
- After building and testing, run ```npm start```
- Paste ```http://localhost:3000``` into your web browser

### Operational Use Cases
- "Meals" and "Profile" buttons on the top navigation bar redirect to corresponding pages
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

