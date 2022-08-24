function addIngredients() {
    let numberOfUnits = document.createElement("input");
    numberOfUnits.type = "text";
    numberOfUnits.id = "numberOfUnits";
    numberOfUnits.className = "col";
    numberOfUnits.placeholder = "Number of Units";

    let unit = document.createElement("input");
    unit.type = "select";
    unit.id = "unit";
    unit.className = "col";

    let ingredient = document.createElement("input");
    ingredient.type = "text";
    ingredient.id = "numberOfUnits";
    ingredient.className = "col"
    ingredient.placeholder = "Number of Units"

    let ingredientList = document.getElementsByClassName("ingredientClassList");

    ingredientList.appendChild(numberOfUnits)
} 

let addIngredientsButton = document.getElementsByClassName("addIngredient")

addIngredientsButton.addEventListener("click", addIngredients())
