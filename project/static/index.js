document.addEventListener("DOMContentLoaded", function () {
    // Meal search modal
    const openModalButton = document.getElementById("search-meals");
    const closeModalButton = document.getElementById("close-search-modal");
    const modal = document.getElementById("search-modal");
    const searchForm = document.getElementById("search-form");

    if (openModalButton && closeModalButton && modal && searchForm) {
        openModalButton.onclick = function () {
            modal.style.display = "block";
        };

        closeModalButton.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };

        searchForm.onsubmit = function (event) {
            event.preventDefault();
            console.log('Form submitted with values:', {
                mealName: document.getElementById("meal-name")?.value,
                mealTypes: [...document.querySelectorAll('input[name=\"meal-type\"]:checked')].map(cb => cb.value),
                categoryTags: [...document.querySelectorAll('input[name=\"category-tags\"]:checked')].map(cb => cb.value),
            });

            modal.style.display = "none";
        };
    } else {
        console.log("Search modal elements not found on this page. Skipping search modal setup.");
    }

    // Create Meal Modal
    const mealModal = document.getElementById("meal-modal");
    const openMealModalButton = document.getElementById("create-meal");
    const closeMealModal = document.getElementById("close-meal-modal");
    const addIngredientButton = document.getElementById("add-ingredient");
    const ingredientsList = document.getElementById("ingredients-list");

    if (mealModal && openMealModalButton && closeMealModal && addIngredientButton && ingredientsList) {
        function openMealModal() {
            mealModal.style.display = "block";
        }

        function closeMealModalFunction() {
            mealModal.style.display = "none";
        }

        openMealModalButton.addEventListener("click", openMealModal);
        closeMealModal.addEventListener("click", closeMealModalFunction);

        window.addEventListener("click", function (event) {
            if (event.target === mealModal) {
                closeMealModalFunction();
            }
        });

        addIngredientButton.addEventListener("click", function () {
            const ingredientItem = document.createElement("div");
            ingredientItem.classList.add("ingredient-item");
            ingredientItem.innerHTML = '<input type="text" name="ingredients[]" placeholder="Enter ingredient" required> <button type="button" class="remove-ingredient">&times;</button>';
            ingredientsList.appendChild(ingredientItem);
        });

        ingredientsList.addEventListener("click", function (event) {
            if (event.target.classList.contains("remove-ingredient")) {
                event.target.parentElement.remove();
            }
        });
    } else {
        console.log("Create meal modal elements not found on this page. Skipping create meal modal setup.");
    }
});
