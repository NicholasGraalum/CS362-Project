// Event listener for main handlebar buttons
document.addEventListener("DOMContentLoaded", function () {

  // Hamburger menu handling
  document.getElementById("hamburger-menu").addEventListener("click", function () {
    this.classList.toggle("change");
    document.getElementById("mobile-nav").classList.toggle("active");
  })
  
  // Reditect when the meals button is clicked
  document.getElementById("meals-viewer").addEventListener("click", function () {
    window.location.href = "/meals"
  })

  // Redirect when the ingredients button is clicked
  document.getElementById("ingredients-viewer").addEventListener("click", function () {
    window.location.href = "/ingredients"
  })

  // Redirect when profile button is clicked
  document.getElementById("profile-viewer").addEventListener("click", function () {
    window.location.href = "/profile"
  })

  // Redirect when list button is clicked
  document.getElementById("list-viewer").addEventListener("click", function () {
    window.location.href = "/list"
  })
  
});

// Event listener for the meals page and the meal modal
document.addEventListener("DOMContentLoaded", function () {

  // FETCH request for add ingredients
  // Trigger: add-ingredients-button click
  // Endpoint: /meals/add-ingredients
  // Req body: id of meal to add to shopping list

  // Select all meal divs/cards
  const meals = document.querySelectorAll('.meal');

  // Add event listener to each meal
  meals.forEach(function(meal) {
    meal.addEventListener('click', function(event) {

      // Check if the clicked element is the add ingredients button
      if (event.target.closest('.add-ingredients-button')) {

        // Prevent the redirect if the button is clicked
        event.stopPropagation();
        return;
      }
      // Redirect to singleMeal page
      const mealId = meal.getAttribute('data-id');
      window.location.href = `/meals/${mealId}`;
    });
    
  });

  // Select all buttons with the class "add-ingredients-button"
  document.querySelectorAll(".add-ingredients-button").forEach(button => {
    // Add a click event listener to each button
    button.addEventListener("click", function () {
      // Find the closest "meal" div
      const mealDiv = this.closest(".meal") || this.closest(".full-meal");

      if (mealDiv) {
        // Retrieve the meal ID from 'data-id' attribute
        const mealId = mealDiv.getAttribute("data-id");

        // Ensure that a valid meal ID exists before sending the request
        if (!mealId) {
          console.error("Meal ID is missing.");
          return;
        }

        // Send an HTTP POST request to the backend to add ingredients
        fetch("/meals/add-ingredients", {   // The endpoint where the request is sent
          method: "POST",   // POST request
          headers: {
            "Content-Type": "application/json", // Request body contains JSON data
          },
            body: JSON.stringify({ id: mealId }), // Convert the meal ID into a JSON-formatted string
        })

        .then(response => {
          // check if redirected for not logged in 
          if (response.status === 302 || response.redirected) {
            // If redirected, manually redirect to the login page
            window.location.href = '/login';  // This redirects the browser to the login page
            return;  // Exit from the promise chain since the redirect is handled
          }

          // Check if the response status is OK
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          } else {
            alert("Ingredients added successfully!");
          }
        })
        .then(data => {
          // Log the successful response data to the console for debugging
          console.log("Server response:", data);

        })
        .catch(error => {
          // Catch and log any errors that occur during the fetch request
          console.error("Error sending request:", error);
        });
      }
    });
  });



  // Meal search modal, get each element
  const openModalButton = document.getElementById("search-meals");
  const closeModalButton = document.getElementById("close-search-modal");
  const modal = document.getElementById("search-modal");
  const searchForm = document.getElementById("search-form");

  // Check if the current page has these ID's (if not, don't create interaction functions)
  if (openModalButton && closeModalButton && modal && searchForm) {
    // Show modal when search meals button is clicked
    openModalButton.onclick = function () {
      modal.style.display = "block";
    };

    // Hide modal when close button is clicked
    closeModalButton.onclick = function () {
      modal.style.display = "none";
    };

    // Hide modal when clicking outside modal content
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    // When the form is submitted (add more logic here to filter meals)
    searchForm.onsubmit = function (event) {
      event.preventDefault();

      // Capture form input values
      const mealName = document.getElementById("meal-name")?.value;
      const mealTypes = [...document.querySelectorAll('input[name="meal-type"]:checked')].map(cb => cb.value);
      const categoryTags = [...document.querySelectorAll('input[name="category-tags"]:checked')].map(cb => cb.value);

      // DEBUG: Log to verify captured values 
      console.log('Form submitted with values:', { mealName, mealTypes, categoryTags });

      
      // Potential fetch for search
      // Send data via fetch 
      const params = new URLSearchParams({
        mealName,
        mealTypes,
        categoryTags
      }).toString();
      
      // Send the GET request with query parameters
      fetch(`/meals/search?${params}`, {
        method: "GET", // No need for the body in a GET request
        headers: { "Content-Type": "application/json" } // Optional, just in case you need it
      })
        .then(response => response.text()) // Expect full HTML in the response
        .then(html => {
          // Replace the entire document with the new HTML response
          document.open();
          document.write(html);
          document.close();
        })
        .catch(error => {
          console.error("Error:", error);
        });
      
      
      

      
      modal.style.display = "none";   // Hide modal after submitting
    };
  } else {
    console.log("Search modal elements not found on this page. Skipping search modal setup.");
  }

    // Create Meal Modal, get each element
    const mealModal = document.getElementById("meal-modal");
    const mealModalForm = document.getElementById("meal-form");
    const openMealModalButton = document.getElementById("create-meal");
    const closeMealModal = document.getElementById("close-meal-modal");
    // const addIngredientButton = document.getElementById("add-ingredient");
    // const ingredientsList = document.getElementById("ingredients-list");

  // Check if the current page has these ID's (if not, don't create interaction functions)
  if (mealModal && openMealModalButton && closeMealModal) {

    // Function to open meal modal
    function openMealModal() {
      mealModal.style.display = "block";
    }

    // Function to close meal modal
    function closeMealModalFunction() {
      mealModal.style.display = "none";
    }

    // Event listeners for open and close buttons
    openMealModalButton.addEventListener("click", openMealModal);
    closeMealModal.addEventListener("click", closeMealModalFunction);

    // Hide modal when clicking outside modal content
    window.addEventListener("click", function (event) {
      if (event.target === mealModal) {
        closeMealModalFunction();
      }
    });

    // Add new ingredient input field when button is clicked (used ChatGPT to help)
    // addIngredientButton.addEventListener("click", function () {
    //     const ingredientItem = document.createElement("div");
    //     ingredientItem.classList.add("ingredient-item");
    //     ingredientItem.innerHTML = '<input type="text" name="ingredients[]" placeholder="Enter ingredient" required> <button type="button" class="remove-ingredient">&times;</button>';
    //     ingredientsList.appendChild(ingredientItem);
    // });

    // Remove ingredient input field when button is clicked (used ChatGPT to help)
    // ingredientsList.addEventListener("click", function (event) {
    //   if (event.target.classList.contains("remove-ingredient")) {
    //     event.target.parentElement.remove();
    //   }
    // });


    
    // Potential fetch request for create meal
    // On submit, send a fetch request with all meal data
    // IMPORTANT: fetch request for creating a meal
    mealModalForm.onsubmit = function (event) {
      event.preventDefault(); // Stop default submission

      const formData = new FormData(this); // Get all form inputs

      const bodyData = {
        name: formData.get("meal-name"),
        description: formData.get("meal-description"),
        image_link: formData.get("meal-image"),
        mealTypes: formData.getAll("meal-type"), // Array of selected meal types
        visibility: "public",
        servings: parseInt(formData.get("servings"), 10),
        categoryTags: formData.getAll("category-tags") // Array of selected tags
      };

      const json_data = JSON.stringify(bodyData);
      console.log(json_data);

      fetch("/meals/create", {  // Endpoint, can change if needed
        method: "POST", // POST request
        headers: {
          "Content-Type": "application/json"  // Set the Content-Type to application/json
        },
        body: json_data // Send form data without appending to URL
      })
      .then(response => {
        if (response.status === 302 || response.redirected) {
          // If redirected, manually redirect to the login page
          window.location.href = '/login';  // This redirects the browser to the login page
          return;  

        }
        
        return response.json()
      })
      .then(data => {
        if (data && data.id) {  // Check if the id is present in the response
          console.log("Meal created with ID:", data.id);
      
          // Redirect to /meals/{id} using the ID returned from the server
          window.location.href = `/meals/${data.id}`;
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
    
  } else {
    console.log("Create meal modal elements not found on this page. Skipping create meal modal setup.");
  }

  // Handle Events with login page
  const loginButton = document.getElementById("submit-login");
  const createProfileLink = document.getElementById("create-profile");
  const submitEmail = document.getElementById("submit-email");
  const submitPassword = document.getElementById("submit-password");

  if (loginButton && createProfileLink && submitEmail && submitPassword) {

  }
});

// Event listener for the login page
document.addEventListener("DOMContentLoaded", function () {   
  
  // Handle Events with login page
  const loginButton = document.getElementById("submit-login");
  const createProfileButton = document.getElementById("create-profile");
  const submitEmail = document.getElementById("submit-email");
  const submitPassword = document.getElementById("submit-password");

  if (loginButton && createProfileButton && submitEmail && submitPassword) {

    // Login function
    loginButton.addEventListener("click", function () {
      const email = submitEmail.value.trim();
      const password = submitPassword.value.trim();

      // Validate input fields
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // Send login request
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Login failed. Please check your credentials.");
        }
        return response.json();
      })
      .then(data => {
        alert("Login successful!");
        window.location.href = "/meals"; // Redirect after login
      })
      .catch(error => {
        console.error("Error:", error);
        alert(error.message);
      });
    });

    // Redirect to profile creation page
    createProfileButton.addEventListener("click", function () {
      window.location.href = "/createProfile";
    });

  }

});

// Event listener for the create profile page
// document.addEventListener("DOMContentLoaded", function () {   

//   /*** PROFILE CREATION PAGE EVENTS ***/
//   const createProfileButton = document.querySelector("[aria-label='create-login']");
//   const usernameInput = document.querySelector("[aria-label='enter-username']");
//   const passwordInput = document.querySelector("[aria-label='enter-password']");
//   const emailInput = document.querySelector("[aria-label='enter-email']");
//   const zipcodeInput = document.querySelector("[aria-label='enter-zipcode']");

//   if (createProfileButton && usernameInput && passwordInput && emailInput && zipcodeInput) {
//     console.log("Profile creation page detected. Setting up event listeners.");

//     // Create Profile Function
//     createProfileButton.addEventListener("click", function () {
//       const username = usernameInput.value.trim();
//       const password = passwordInput.value.trim();
//       const email = emailInput.value.trim();
//       const zipcode = zipcodeInput.value.trim();

//       // Validate input fields
//       if (!username || !password || !email || !zipcode) {
//         alert("All fields are required.");
//         return;
//       }

//       // Send create profile request
//       fetch("/users/create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password, email, zipcode }),
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Profile creation failed. Please try again.");
//         }
//         return response.json();
//       })
//       .then(data => {
//         alert("Profile created successfully!");
//         window.location.href = "/login"; // Redirect after creation
//       })
//       .catch(error => {
//         console.error("Error:", error);
//         alert(error.message);
//       });
//     });

//   } else {
//     console.log("Profile creation elements not found. Skipping setup.");
//   }

// });

document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout-viewer");

  if (logoutButton) {
      logoutButton.addEventListener("click", function () {
          fetch("/users/logout", { method: "POST" })
              .then(response => {
                  if (response.ok) {
                      window.location.href = "/login"; // Redirect to login page
                  } else {
                      alert("Logout failed. Please try again.");
                  }
              })
              .catch(error => console.error("Error logging out:", error));
      });
  }
});


// Event listener for the profile page
document.addEventListener("DOMContentLoaded", function () {   

  /*** PROFILE PAGE EVENTS ***/
  const profileDiv = document.querySelector(".Profile");

  if (profileDiv) {
    console.log("Profile page detected. Setting up event listeners.");

    const editUsernameButton = document.querySelector("[aria-label='edit-username']");
    const editZipcodeButton = document.querySelector("[aria-label='edit-zipcode']");
    
    // Fetch current profile data from dataset attributes
    let currentUsername = profileDiv.dataset.name;
    let currentEmail = profileDiv.dataset.email;
    let currentZipcode = profileDiv.dataset.zip;

    /*** Function to Edit Username ***/
    function editUsername() {
      const newUsername = prompt("Enter a new username:", currentUsername);
      
      if (newUsername && newUsername.trim() !== currentUsername) {
        updateProfile({ username: newUsername.trim() });
      }
    }

    /*** Function to Edit Zipcode ***/
    function editZipcode() {
      const newZipcode = prompt("Enter a new zipcode:", currentZipcode);

      if (newZipcode && /^\d{5}$/.test(newZipcode.trim())) { // Ensure valid 5-digit zipcode
        updateProfile({ zipcode: newZipcode.trim() });
      } else {
        alert("Please enter a valid 5-digit Zipcode.");
      }
    }

    /*** Function to Update Profile Data ***/
    function updateProfile(updatedData) {
      fetch("/profile/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Update failed. Please try again.");
        }
        return response.json();
      })
      .then(data => {
        alert("Profile updated successfully!");
        location.reload(); // Reload page to reflect changes
      })
      .catch(error => {
        console.error("Error:", error);
        alert(error.message);
      });
    }

    // Event Listeners
    if (editUsernameButton) {
      editUsernameButton.addEventListener("click", editUsername);
    }
    if (editZipcodeButton) {
      editZipcodeButton.addEventListener("click", editZipcode);
    }

  } else {
    console.log("Profile page elements not found. Skipping setup.");
  }

});

// document.getElementById('change-zipcode').addEventListener('click', async () => {
//   const zip = document.getElementById('type-zipcode').value;
//   if (!zip) {
//     console.error("Zip code is required");
//     return;
//   }
  
//   try {
//     const response = await fetch(`/profile/setStore?zip=${zip}`);
//     const data = await response.json();
//     console.log('Store update response:', data);
    
//   } catch (error) {
//     console.error('Error updating store:', error);
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const zipInput = document.getElementById('type-zipcode');

  if (zipInput) { // Ensure elements exist
    document.getElementById('change-zipcode').addEventListener('click', async () => {
      const zip = document.getElementById('type-zipcode').value;
      if (!zip) {
        console.error("Zip code is required");
        return;
      }
      
      try {
        const response = await fetch(`/profile/setStore?zip=${zip}`);
        const data = await response.json();
        console.log('Store update response:', data);

        if (!response.ok) {
          throw new Error("Changing store failed. Please check your zipcode.");
        }

        alert("Zipcode successfully changed");
        window.location.href = "/profile";
        
      } catch (error) {
        console.error('Error updating store:', error);
        alert("Changing store failed. Please check your zipcode.");
      }
    });
    //   try {
    //     const response = await fetch(`/setStore?zip=${zip}`, { method: 'GET' });
    //     const data = await response.json();

    //     if (response.ok) {
    //       alert(`Store updated successfully! Store ID: ${data.storeID}`);
    //     } else {
    //       alert(`Error: ${data.error}`);
    //     }
    //   } catch (error) {
    //     console.error("Error updating store:", error);
    //   }
    // });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all add-to-list buttons on the ingredients page.
  document.querySelectorAll('.add-ingredient-button').forEach(button => {
    button.addEventListener('click', async () => {
      // Get the product id from the button's data-id attribute.
      const store_api_id = button.getAttribute('data-id');
      
      // Find the parent ingredient box to extract name and price.
      const box = button.closest('.ingredient-box');
      if (!box) {
        console.error('Ingredient box not found.');
        return;
      }
      
      // Assume the first <p> is the name and the second <p> contains the price.
      const nameElem = box.querySelector('p:nth-of-type(1)');
      const priceElem = box.querySelector('p:nth-of-type(2)');
      
      // Extract the product name.
      const i_name = nameElem ? nameElem.textContent.trim() : '';
      console.log(i_name);
      
      // Extract and clean the price value.
      let price = priceElem ? priceElem.textContent.trim() : '';
      // Remove the "Price: $" part
      price = price.replace(/^Price:\s*\$/, '');
      console.log(price);
      
      // For this functionality, we'll set amount to 1.
      const amount = 1;
      
      try {
        const response = await fetch('/ingredients/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ i_name, store_api_id, price, amount })
        });
        const data = await response.json();
        console.log('Add to list response:', data);
        alert("Item added successfully");
        // // Reload the page to refresh the list display.
        // window.location.reload();
      } catch (error) {
        console.error('Error adding ingredient to list:', error);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all add-to-list buttons on the ingredients page.
  document.querySelectorAll('.add-to-meal-button').forEach(button => {
    button.addEventListener('click', async () => {
      // Get the product id from the button's data-id attribute.
      const store_api_id = button.getAttribute('data-id');
      
      // Find the parent ingredient box to extract name and price.
      const box = button.closest('.ingredient-box');
      if (!box) {
        console.error('Ingredient box not found.');
        return;
      }
      
      // Assume the first <p> is the name and the second <p> contains the price.
      const nameElem = box.querySelector('p:nth-of-type(1)');
      const priceElem = box.querySelector('p:nth-of-type(2)');
      
      // Extract the product name.
      const i_name = nameElem ? nameElem.textContent.trim() : '';
      console.log(i_name);
      
      // Extract and clean the price value.
      let price = priceElem ? priceElem.textContent.trim() : '';
      // Remove the "Price: $" part
      price = price.replace(/^Price:\s*\$/, '');
      console.log(price);
      
      // get grams amount
      const amount = box.querySelector(".quantity-input").value.trim();

      if (!amount || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid quantity in grams.");
        return; // Stop the fetch request
      }

      // get meal id 
      const page = document.getElementById("page");
      const mealId = page.getAttribute("data-mealID");

      fetch('/ingredients/meal/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ i_name, store_api_id, price, amount, mealId })
        })

      .then(response => {
        // check if redirected for not logged in 
        if (response.status === 302 || response.redirected) {
          // If redirected, manually redirect to the login page
          window.location.href = '/login';  // This redirects the browser to the login page
          return;  // Exit from the promise chain since the redirect is handled
        }

        // Check if the response status is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          window.location.href = `/meals/${mealId}`;
        }
      })
      .then(data => {
        // Log the successful response data to the console for debugging
        console.log("Server response:", data);

      })
      .catch(error => {
        // Catch and log any errors that occur during the fetch request
        console.error("Error sending request:", error);
      });
    })
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const starButtons = document.querySelectorAll('.star-button');

  starButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the closest parent element with the full-meal class
      const fullMeal = button.closest('.full-meal');
      if (fullMeal && fullMeal.dataset.id) {
        const id = fullMeal.dataset.id;
        // Redirect to /favorites/{{id}}
        window.location.href = `/favorites/${id}`;
      } 
    });
  });
});
