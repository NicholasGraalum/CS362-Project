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

### Using the website:
When using the website there are 4 main pages:
- '/meals': this can be accessed by clicking the **meals** button on the top nav bar of the webpage
- '/ingredients':  this can be accessed by clicking the **ingredients** button on the top nav bar of the webpage
- '/list': this can be accessed by clicking the **list** button on the top nav bar of the webpage
- '/profile': this can be accessed by clicking the circle with the word **profile** in it

### Meals page:
In the meals page you will find containers holding different types of meals with an image as well as a name associated with it. In these containers also is a **add ingredients** button which will add the ingredients of the current meal to your list. When you click the name of the chosen meal you will be redirected to the page containing the meal chosen. On this page it will show the ingredients in the meal as well as the meal type and the number of servings. There will also be a small description of the meal. If you click the plus (+) icon by the ingredients button, it will add the ingredients to your list. 

Back in the main meals page, you will see two more buttons, **search meals** and **create meal**. In the search meals button you will find a pop up that gives you a primary search bar to search by name. As well as two sections, the meal type and the category tag. Meal type is of the selection: Breackfast, Lunch, Dinner and Snack. Category type is of the selection: Vegan, Vegetarian, High Protein, Low Calorie and Gluten free. When you select the respective options and or give a specific name it will display the valid options. Inside of the create meal pop up there will be a **Meal name** section for you to include the name of the meal you wish to add, a **Description** section to include what the meal is, an **Image link** section for a link to the image you wish to display, a **Meal Type** section to inlcude the previousaly mentioned meal types, a **Servings** section to include the amount of servings in the meal, a **Calories per serving** section to include the calories contained in each serving, a **Category tags** section for the previously mentioned categories it can be and finally an add ingredients button to include the ingredients in the meal. 

### Ingredients page:
N/A

### List page:
N/A

### Profile page:
To access the profile page you have to click the **Profile** button in the top right of the navbar. In order to enter the profile page you must enter or create an account. When creating account you will enter a username, email address, a password as well as a zipcode. When you enter the profile page you will find your username as well as a **change username** button, there is also an email section that shows your email address that is connected to your account, there is also a zipcode section that you can change to your current zipcode to show the prices of the current kroger store. 

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
