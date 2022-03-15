const btnOpenFilter1 = document.querySelector(".openBtn1");
const btnOpenFilter2 = document.querySelector(".openBtn2");
const btnOpenFilter3 = document.querySelector(".openBtn3");
const btnClosedFilter1 = document.querySelector(".closeBtn1");
const btnClosedFilter2 = document.querySelector(".closeBtn2");
const btnClosedFilter3 = document.querySelector(".closeBtn3");
const containBtnOpen1 = document.querySelector(".filterBox__btnIsOpen1");
const containBtnOpen2 = document.querySelector(".filterBox__btnIsOpen2");
const containBtnOpen3 = document.querySelector(".filterBox__btnIsOpen3");
const inputIngredients = document.querySelector(".inputFilter1");
const inputUstensils = document.querySelector(".inputFilter2");
const inputAppliance = document.querySelector(".inputFilter3");
const ingredientsBox = document.querySelector(".ingredientsBox");
const ustensilsBox = document.querySelector(".ustensilsBox");
const applianceBox = document.querySelector(".applianceBox");
let ingredients = [];
let ustensils = [];
let appliances = [];

btnOpenFilter1.addEventListener("click", function() {
    btnOpenFilter1.style.display = "none";
    containBtnOpen1.style.display = "flex";
    ingredientsBox.style.display = "grid";
    ingredientFilter = "Ingredients";
    itemList(ingredients, ingredientFilter, ingredientsBox);
});

btnOpenFilter2.addEventListener("click", function() {
    btnOpenFilter2.style.display = "none";
    containBtnOpen2.style.display = "flex";
    ustensilsBox.style.display = "grid";
    ustensilsFilter = "Ustensiles";
    itemList(ustensils, ustensilsFilter, ustensilsBox);
});

btnOpenFilter3.addEventListener("click", function() {
    btnOpenFilter3.style.display = "none";
    containBtnOpen3.style.display = "flex";
    applianceBox.style.display = "grid";
    applianceFilter = "Appareils";
    itemList(appliances, applianceFilter, applianceBox);
});

btnClosedFilter1.addEventListener("click", function() {
    btnOpenFilter1.style.display = "flex";
    containBtnOpen1.style.display = "none";
    ingredientsBox.style.display = "none";
    ingredients = [];
});
btnClosedFilter2.addEventListener("click", function() {
    btnOpenFilter2.style.display = "flex";
    containBtnOpen2.style.display = "none";
    ustensilsBox.style.display = "none";
    ustensils = [];
});
btnClosedFilter3.addEventListener("click", function() {
    btnOpenFilter3.style.display = "flex";
    containBtnOpen3.style.display = "none";
    applianceBox.style.display = "none";
    appliances = [];
});

inputIngredients.addEventListener("keyup", function() {
    countStringsInput(inputIngredients);
    if (nbStrings >= 2) {
        console.log("je filtre inputIngredient");
        let ingredientFilter = document.querySelector(
            ".ingredientsFilterText"
        ).innerText;
        filterTexts(ingredientFilter, inputIngredients);
    } else {
        console.log("je ne filterIngredient pas");
        ingredients = [];
        itemList(ingredients, ingredientFilter, ingredientsBox);
    }
});

inputUstensils.addEventListener("keyup", function() {
    countStringsInput(inputUstensils);
    if (nbStrings >= 2) {
        console.log("je filtre inputUstensils");
        let ustensilsFilter = document.querySelector(
            ".ustensilsFilterText"
        ).innerText;
        filterTexts(ustensilsFilter, inputUstensils);
    } else {
        console.log("je ne filterUstensiles pas");
        ustensils = [];
        itemList(ustensils, ustensilsFilter, ustensilsBox);
    }
});

inputAppliance.addEventListener("keyup", function() {
    countStringsInput(inputAppliance);
    if (nbStrings >= 2) {
        console.log("je filtre inputAppliance");
        let applianceFilter = document.querySelector(
            ".applianceFilterText"
        ).innerText;
        filterTexts(applianceFilter, inputAppliance);
    } else {
        console.log("je ne filterAppliance pas");
        appliances = [];
        itemList(appliances, applianceFilter, applianceBox);
    }
});

const itemList = (data, filter, boxHtml) => {
    console.log("itemList");
    boxHtml.innerHTML = "";
    console.log(data)
    if (data.length == 0 && filter == "Ingredients") {
        allRecipes.recipes.forEach((recipe) => {
            recipe.ingredients.forEach((ingredient) => {
                data.push(ingredient.ingredient.toLowerCase());
            })
        })

    } else if (data.length == 0 && filter == "Ustensiles") {
        allRecipes.recipes.forEach((recipe) => {
            recipe.ustensils.forEach((ustensil) => {
                data.push(ustensil.toLowerCase());
            })
        })
    } else if (data.length == 0 && filter == "Appareils") {
        console.log("appliance")
        allRecipes.recipes.forEach((recipe) => {
            data.push(recipe.appliance.toLowerCase());
        });
    }

    data = data.filter((ele, pos) => {
        return data.indexOf(ele.toLowerCase()) == pos;
    });


    data.forEach((element) => {
        element = element.charAt(0).toUpperCase() + element.slice(1);
        let elementText = document.createElement("a");
        elementText.textContent = element;
        elementText.style.height = "1.5 rem"
        elementText.style.width = "max-content"
        boxHtml.appendChild(elementText);
    });
};

const filterTexts = (nameFilter, input) => {
    console.log(nameFilter);
    if (nameFilter === "Ingredients") {

        ingredients = ingredients.filter((ingredient) => {
            let inputTest = ingredient.toLowerCase().indexOf(input.value) > -1;
            return inputTest == true;
        });

        console.log(ingredients);
        itemList(ingredients, nameFilter, ingredientsBox);
    } else if (nameFilter === "Ustensiles") {
        ustensils = ustensils.filter((ustensil) => {
            let inputTest = ustensil.toLowerCase().indexOf(input.value) > -1;
            return inputTest == true;
        });

        console.log(ustensils);
        itemList(ustensils, nameFilter, ustensilsBox);
    } else if (nameFilter === "Appareils") {
        appliances = appliances.filter((appliance) => {
            console.log(appliance)
            let inputTest = appliance.toLowerCase().indexOf(input.value) > -1;
            return inputTest == true;
        });

        console.log(appliances);
        itemList(appliances, nameFilter, applianceBox);
    }
    console.log(nameFilter);
};