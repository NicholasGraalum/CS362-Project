# User Documenation:
## Description:
Smart Cart is grocery list based webpage. It will allow you to create meals with specific ingredients as well as add individual ingredients to your list. This includes a system to show you a kroger based store in your area based on your zipcode, which will allow you to view the prices of the given products in your list.

## Accessing the website:
In order to start the webpage, you must install the correct dependices as well as the server basis, this includes the following:
1) clone the github repo with your perfereed method into your computer
2) cd into the **./project** folder in the repo
3) run **npm install** in your command console to install the the npm dependincies and modules
4) run **npm start** to start the npm modules
5) access the wepage via **http://localhost:3000**

For more information, visit https://github.com/NicholasGraalum/CS362-Project/blob/main/documentation/SETUP.md

## Using the website:
When using the website there are 4 main pages:
- '/meals': this can be accessed by clicking the **meals** button after clicking the dropdown menu on the top right
- '/ingredients':  this can be accessed by clicking the **ingredients** button after clicking the dropdown menu on the top right
- '/list': this can be accessed by clicking the **list** button after clicking the dropdown menu on the top right
- '/profile': this can be accessed by clicking the circle with the three people on the top right

### Meals page:
In the meals page you will find containers holding different types of meals with an image as well as a name associated with it. In these containers also is a **add ingredients** button which will add the ingredients of the current meal to your list. When you click the name of the chosen meal you will be redirected to the page containing the meal chosen. On this page it will show the ingredients in the meal as well as the meal type and the number of servings. There will also be a small description of the meal. If you click the add to list button, it will add all the ingredients to your list. 

Back in the main meals page, you will see three more buttons, **Search Meals**, **Create Meal**, and **Favorites**. In the search meals button you will find a pop up that gives you a primary search bar to search by name. As well as two sections, the meal type and the category tag. Meal type is of the selection: Breackfast, Lunch, Dinner and Snack. Category type is of the selection: Vegan, Vegetarian, High Protein, and more. When you select the respective options and or give a specific name it will display the valid options. Inside of the create meal pop up there will be a **Meal name** section for you to include the name of the meal you wish to add, a **Description** section to include what the meal is, an **Image link** section for a link to the image you wish to display, a **Meal Type** section to inlcude the previousaly mentioned meal types, a **Servings** section to include the amount of servings in the meal, and a **Category tags** section for the previously mentioned categories it can be. In order to add ingredients to your meals, click create meal after filling the categories find your newly created meal in the meals section. Upon clicking the meal and being brought to that meal's page, there will be a button (+) for you to add ingredients (more information down below). On a specific meal's page, there is a star next by the meal's name. Clicking the star will favorite the meal and you can quickly access your favorite meals by clicking on **Favorites**. 

### Store page:
On the store page, which can be accessed through clicking **store** on the dropdown menu or by adding an ingredient to a meal you created, you can search for ingredients to add. First, type and enter in any term in the search bar and products with your term in it's name will appear below. Depending on how you accessed this page, clicking add to list or add to recipies will add the product above it to its respective place. 

### List page:
On the list page, items you added through the store page or ingredients you added from different meals, will appear in a list with a estimated price on the bottom. This price is calculated based on prices from your nearest store and all items in your list go by their unit price (usually per pound or per item). For items in your list that we have failed to calculate a price on, you will see a red message by that item notifying you that the item is not included in the final price. All items can be deleted from your list by clicking the (x) button to the left of any item and the price will adjust accordingly.

### Profile page:
To access the profile page click the circle with three people. In order to enter the profile page you must enter or create an account first. When creating account you must enter a username, email address, a password as well as a zipcode. When you enter the profile page you will see the username, email address, and zipcode that is connected to your account. To change your zipcode, type in the text box your new zip code, and the nearest kroger store will automatically be updated and saved.

## Reporting bugs:
For reporting a bug please use the github issues section of the products page:
**https://github.com/NicholasGraalum/CS362-Project/issues**

When you enter this section please navigate to the **new issue** button and click it. After this add a title for the bug in the format of, **Date : Webpage**, date being the current date the issue was found and webpage being the page that the issue was located in. 

After the title please provide the following information about the bug and the circumstance of the bug:
- Whether or not the bug can be reproduced
    - If the bug can be reproduced give steps on how the bug can be reproduced
    - What were the actual results from the steps of reproducing the bug and what is the expected result.
- The type of bug:
    - Page not found: If the page trying to be accessed cannot be accessed
    - Database error: If there is no given information and the webpage console throws a database error
    - Formatting error: There was an error in the formatting of data, this could include the meal page or ingredients page data.
    - Interface error: There is an error with the interface in sending to a specific page, or there are certain buttons that do not work in the interface. 
    - Other: If none of the listed categories above pretain to the current bug.
- A summary of what happed, what type of issue occured because of the bug, what is it interfering with. 
- Which version of the webpage did this occur on. This can be located in the top navbar by the title of the webpage.
