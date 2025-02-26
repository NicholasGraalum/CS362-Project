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