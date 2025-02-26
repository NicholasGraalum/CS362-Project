// Meal search 
// JavaScript for opening and closing the modal. Eventually put in index.js
const openModalButton = document.getElementById("search-meals");
const closeModalButton = document.getElementById("close-search-modal");
const modal = document.getElementById("search-modal");
const searchForm = document.getElementById("search-form");

openModalButton.onclick = function() {
    modal.style.display = "block";
}

closeModalButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

searchForm.onsubmit = function(event) {
  event.preventDefault(); // Prevent default form submission

  // Add search logic

  console.log('Form submitted with values:', {
    mealName: document.getElementById("meal-name").value,
    mealTypes: [...document.querySelectorAll('input[name="meal-type"]:checked')].map(cb => cb.value),
    categoryTags: [...document.querySelectorAll('input[name="category-tags"]:checked')].map(cb => cb.value),
  });

  // Close the modal after submitting
  modal.style.display = "none";
}

// Create Meal
document.addEventListener("DOMContentLoaded", function () {
    const mealModal = document.getElementById("meal-modal");
    const openMealModalButton = document.getElementById("create-meal");
    const closeMealModal = document.getElementById("close-meal-modal");
    const addIngredientButton = document.getElementById("add-ingredient");
    const ingredientsList = document.getElementById("ingredients-list");

    // Function to open modal
    function openModal() {
        mealModal.style.display = "block";
    }

    // Function to close modal
    function closeModal() {
        mealModal.style.display = "none";
    }

    // Open modal when clicking the button
    openMealModalButton.addEventListener("click", openModal);

    // Close modal when clicking on the close button
    closeMealModal.addEventListener("click", closeModal);

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === mealModal) {
            closeModal();
        }
    });

    // Function to add a new ingredient input field
    addIngredientButton.addEventListener("click", function () {
        const ingredientItem = document.createElement("div");
        ingredientItem.classList.add("ingredient-item");
        ingredientItem.innerHTML = '<input type="text" name="ingredients[]" placeholder="Enter ingredient" required> <button type="button" class="remove-ingredient">&times;</button>';
        ingredientsList.appendChild(ingredientItem);
    });

    // Function to remove an ingredient input field
    ingredientsList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-ingredient")) {
            event.target.parentElement.remove();
        }
    });
});
