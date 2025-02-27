document.addEventListener("DOMContentLoaded", function () {   // Waits until HTML is loaded

  // Get all add meal ingredients button 
  document.querySelectorAll(".add-ingredients-button").forEach(button => {
    button.addEventListener("click", function () {

      // On click, search for the closest meal div
      const mealDiv = this.closest(".meal");

      if (mealDiv) {      // Ensure there is a meal div and get id
        const id = mealDiv.getAttribute("data-id");

        console.log(id)
      }
    })
  })

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

      // DEBUG: use this values for filtering
      console.log('Form submitted with values:', {
        mealName: document.getElementById("meal-name")?.value,
        mealTypes: [...document.querySelectorAll('input[name=\"meal-type\"]:checked')].map(cb => cb.value),
        categoryTags: [...document.querySelectorAll('input[name=\"category-tags\"]:checked')].map(cb => cb.value),
        });

        modal.style.display = "none";   // Hide modal after submitting
    };
  } else {
      console.log("Search modal elements not found on this page. Skipping search modal setup.");
  }

    // Create Meal Modal, get each element
    const mealModal = document.getElementById("meal-modal");
    const openMealModalButton = document.getElementById("create-meal");
    const closeMealModal = document.getElementById("close-meal-modal");
    const addIngredientButton = document.getElementById("add-ingredient");
    const ingredientsList = document.getElementById("ingredients-list");

  // Check if the current page has these ID's (if not, don't create interaction functions)
  if (mealModal && openMealModalButton && closeMealModal && addIngredientButton && ingredientsList) {

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
    addIngredientButton.addEventListener("click", function () {
        const ingredientItem = document.createElement("div");
        ingredientItem.classList.add("ingredient-item");
        ingredientItem.innerHTML = '<input type="text" name="ingredients[]" placeholder="Enter ingredient" required> <button type="button" class="remove-ingredient">&times;</button>';
        ingredientsList.appendChild(ingredientItem);
    });

    // Remove ingredient input field when button is clicked (used ChatGPT to help)
    ingredientsList.addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-ingredient")) {
        event.target.parentElement.remove();
      }
    });
  } else {
    console.log("Create meal modal elements not found on this page. Skipping create meal modal setup.");
  }
});
