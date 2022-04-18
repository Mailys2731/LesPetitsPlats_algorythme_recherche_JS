import { newAllRecipes } from "./nativeGeneralSearch.js";
import { displayRecipes } from "./index.js";
import { filter } from "./nativeGeneralSearch.js";
import { recipesJSON } from "../recipes.js";
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
const appliancesBox = document.querySelector(".appliancesBox");
let ingredients = [];
let ustensils = [];
let appliances = [];
let filters = [];
let filtersLinks = [];
let newAllRecipesTest = [];

/**
 * AddEventListeners booutons ouverture filtres ingrédients ||ustensiles || appareils
 */

btnOpenFilter1.addEventListener("click", function () {
    btnOpenFilter1.style.display = "none";
    containBtnOpen1.style.display = "flex";
    ingredientsBox.style.display = "grid";
    let ingredientFilter = "Ingredients";
    itemList(ingredients, ingredientFilter, ingredientsBox);
});

btnOpenFilter2.addEventListener("click", function () {
    btnOpenFilter2.style.display = "none";
    containBtnOpen2.style.display = "flex";
    ustensilsBox.style.display = "grid";
    let ustensilsFilter = "Ustensiles";
    itemList(ustensils, ustensilsFilter, ustensilsBox);
});

btnOpenFilter3.addEventListener("click", function () {
    btnOpenFilter3.style.display = "none";
    containBtnOpen3.style.display = "flex";
    appliancesBox.style.display = "grid";
    let applianceFilter = "Appareils";
    console.log(appliances)
    itemList(appliances, applianceFilter, appliancesBox);
});

/**
 * AddEnventListeners boutons croix pour fermer un filtre ingrédients ||ustensiles || appareils
 */

btnClosedFilter1.addEventListener("click", function () {
    btnOpenFilter1.style.display = "flex";
    containBtnOpen1.style.display = "none";
    ingredientsBox.style.display = "none";
    ingredients = [];
});
btnClosedFilter2.addEventListener("click", function () {
    btnOpenFilter2.style.display = "flex";
    containBtnOpen2.style.display = "none";
    ustensilsBox.style.display = "none";
    ustensils = [];
});
btnClosedFilter3.addEventListener("click", function () {
    btnOpenFilter3.style.display = "flex";
    containBtnOpen3.style.display = "none";
    appliancesBox.style.display = "none";
    appliances = [];
});

/**
 * AddEventListeners barres de recherche filtres ingrédients ||ustensiles || appareils
 */

inputIngredients.addEventListener("keyup", function () {
    // eslint-disable-next-line
    countStringsInput(inputIngredients);
    let ingredientFilter = document.querySelector(
        ".ingredientsFilterText"
    ).innerText;
    ingredients = [];
    itemList(ingredients, ingredientFilter, ingredientsBox);
    // eslint-disable-next-line
    if (nbStrings >= 2) {
        displayFilters(ingredientFilter, inputIngredients);
    }
});

inputUstensils.addEventListener("keyup", function () {
    // eslint-disable-next-line
    countStringsInput(inputUstensils);
    let ustensilsFilter = document.querySelector(
        ".ustensilsFilterText"
    ).innerText;
    ustensils = [];
    itemList(ustensils, ustensilsFilter, ustensilsBox);
    // eslint-disable-next-line
    if (nbStrings >= 2) {
        displayFilters(ustensilsFilter, inputUstensils);
    }
});

inputAppliance.addEventListener("keyup", function () {
    // eslint-disable-next-line
    countStringsInput(inputAppliance);
    let applianceFilter = document.querySelector(
        ".applianceFilterText"
    ).innerText;
    appliances = [];
    itemList(appliances, applianceFilter, appliancesBox);
    // eslint-disable-next-line
    if (nbStrings >= 2) {
        displayFilters(applianceFilter, inputAppliance);
    }
});


/**
 * Fonction qui génère la liste du filtre concerné et affiche les éléments
 * @param {Array} data Tableau des ingredients || ustensiles || appareils
 * @param {String} filter Nom du filtre
 * @param {HTMLElement} boxHtml - The selector html.
 * @returns {HTMLElement, Array}
 
 */

const itemList = (data, filter, boxHtml) => {
    boxHtml.innerHTML = "";
    data = []
    if (filter == "Ingredients") {
        // eslint-disable-next-line
        console.log(newAllRecipes)
        // eslint-disable-next-line
        if (newAllRecipes !== 0) {
            // eslint-disable-next-line
            newAllRecipes.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    data.push(ingredient.ingredient.toLowerCase());
                })
            })
            console.log(data)
        }
        else {
            // eslint-disable-next-line
            recipesJSON.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    data.push(ingredient.ingredient.toLowerCase());
                })
            })
        }

    } else if (filter == "Ustensiles") {
        // eslint-disable-next-line
        if (newAllRecipes !== 0) {
            // eslint-disable-next-line
            newAllRecipes.forEach((recipe) => {
                recipe.ustensils.forEach((ustensil) => {
                    data.push(ustensil.toLowerCase());
                })
            })
        }
        else {
            // eslint-disable-next-line
            allRecipes.recipes.forEach((recipe) => {
                recipe.ustensils.forEach((ustensil) => {
                    data.push(ustensil.toLowerCase());
                })
            })
        }
    } else if (filter == "Appareils") {
        // eslint-disable-next-line
        if (newAllRecipes !== 0) {
            // eslint-disable-next-line
            newAllRecipes.forEach((recipe) => {
                data.push(recipe.appliance.toLowerCase());
            });
        }
        else {
            // eslint-disable-next-line
            allRecipes.recipes.forEach((recipe) => {
                data.push(recipe.appliance.toLowerCase());
            });
        }
    }

    filters.forEach(filter => {
        let i = data.findIndex((element) => element.toLowerCase() === (filter.name).toLowerCase())
        console.log(i)
        data.splice(i, 1)
    })

    data = data.filter((ele, pos) => {
        return data.indexOf(ele.toLowerCase()) == pos;
    });
    console.log(data)
    data.forEach((element) => {
        element = element.charAt(0).toUpperCase() + element.slice(1);
        let elementText = document.createElement("a");
        elementText.setAttribute("class", "linkItem")
        elementText.textContent = element;
        elementText.style.height = "1.5 rem"
        elementText.style.width = "max-content"
        elementText.style.zIndex = "2000"
        boxHtml.appendChild(elementText);
    });
    filterByItem()
    if (filter == "Ingredients") {
        return ingredients = data
    }
    else if (filter == "Ustensiles") {
        return ustensils = data
    }
    else if (filter == "Appareils") {
        return appliances = data
    }

};

/**
 * Fonction qui tri les filtres en fonction de l'entrée dans la barre de recherche du filtre
 * @param {String} nameFilter 
 * @param {HTMLElement} input barre de recherche
 */

const displayFilters = (nameFilter, input) => {
    if (nameFilter === "Ingredients") {
        console.log(ingredients)
        ingredients = ingredients.filter((ingredient) => {
            let inputTest = ingredient.toLowerCase().indexOf(input.value) > -1;
            return inputTest == true;
        });
        itemList(ingredients, nameFilter, ingredientsBox);

    } else if (nameFilter === "Ustensiles") {
        ustensils = ustensils.filter((ustensil) => {
            let inputTest = ustensil.toLowerCase().indexOf(input.value) > -1;
            return inputTest == true;
        });
        itemList(ustensils, nameFilter, ustensilsBox);

    } else if (nameFilter === "Appareils") {
        appliances = appliances.filter((appliance) => {
            console.log(appliance)
            let inputTest = appliance.toLowerCase().indexOf(input.value) > -1;
            return inputTest == true;
        });
        itemList(appliances, nameFilter, appliancesBox);
    }
};

/**
 * Fonction de filtrage
 */


const filterByItem = () => {
    filtersLinks = document.querySelectorAll(".linkItem")
    filtersLinks.forEach(item => {
        item.addEventListener("click", function (e) {
            let typeFilter = item.parentNode
            console.log(typeFilter)
            let itemText = e.target.innerText
            console.log("item text :" + itemText)
            let isIngredient = typeFilter.classList.contains("ingredientsBox")
            let isUstensil = typeFilter.classList.contains("ustensilsBox")
            let isAppliance = typeFilter.classList.contains("appliancesBox")
            console.log(isIngredient)
            console.log(isUstensil)
            if (isIngredient === true) {
                console.log(ingredients)
                console.log(ingredients)
                itemList(ingredients, "Ingredients", ingredientsBox);
                console.log(ingredients)

                console.log("je filtre avec un ingrédient")
                console.log(filters)
                filters.push({ name: itemText, type: "ingredient" })
                console.log(filters)
                renderKeyWords()
                removeKeyWord("ingredient")
                btnOpenFilter1.style.display = "flex";
                containBtnOpen1.style.display = "none";
                ingredientsBox.style.display = "none";

            } else if (isUstensil === true) {
                itemList(ustensils, "Ustensiles", ustensilsBox);
                console.log(ustensils)
                console.log("je filtre avec un ustensile")
                filters.push({ name: itemText, type: "ustensil" })
                console.log(filters)
                renderKeyWords()
                removeKeyWord("ustensil")
                btnOpenFilter2.style.display = "flex";
                containBtnOpen2.style.display = "none";
                ustensilsBox.style.display = "none";

            } else if (isAppliance === true) {

                itemList(appliances, "Appareils", appliancesBox);
                console.log(ustensils)
                console.log("je filtre avec un appareil")
                filters.push({ name: itemText, type: "appliance" })
                console.log(filters)
                renderKeyWords()
                removeKeyWord("appliance")
                btnOpenFilter3.style.display = "flex";
                containBtnOpen3.style.display = "none";
                appliancesBox.style.display = "none";
            }
            // eslint-disable-next-line
            filter()
            filterRecipes()
        })
    })
}

/**
 * Fonction qui parcours les éléments de filtrage activés pour afficher les mots clés
 */

const renderKeyWords = () => {
    document.getElementById("boxKeyWord").innerHTML = ""
    console.log(filters)
    filters.forEach(filter => {
        renderKeyWord(filter.name, filter.type)
    })
}

/**
 * Fonction qui génère un mot clé
 * @param {String} title 
 * @param {String} type 
 */

const renderKeyWord = (title, type) => {
    let color
    console.log(type)

    if (type == "ingredient") {
        color = "ingredientsColor"
    } else if (type == "ustensil") {
        color = "ustensilsColor"
    } else if (type == "appliance") {
        color = "appliancesColor"
    }

    const boxKeyWord = document.getElementById("boxKeyWord")
    boxKeyWord.innerHTML += `
    <div class="keyWord d-flex ${color}">
        <p>${title}</p>
        <a class="keyWord__link">
            <i class="fas fa-circle-xmark"></i>
        </a>
    </div>
   `
}

/**
 * Fonction de suppression d'un filtre grâce à la croix sur le mot clé
 * @param {String} type 
 */
const removeKeyWord = (type) => {
    let removeKeyWordLinks = document.querySelectorAll(".keyWord__link")
    removeKeyWordLinks.forEach(keyWordLink => {
        let itemToRemove = keyWordLink.parentNode.firstElementChild.innerText
        console.log(keyWordLink)
        keyWordLink.addEventListener("click", function () {
            console.log(keyWordLink.parentNode.firstElementChild.innerText)
            console.log(JSON.stringify(itemToRemove))

            const indexFilter = filters.findIndex((element) => element.name === itemToRemove);
            filters.splice(indexFilter, 1)

            keyWordLink.parentNode.remove()
            console.log(filters)
            console.log(type)

            if (type === "ingredient") {
                console.log(itemToRemove)
                ingredients.push(itemToRemove.toLowerCase())
                btnOpenFilter1.style.display = "flex";
                containBtnOpen1.style.display = "none";
                ingredientsBox.style.display = "none";
                console.log(ingredients)
            }
            if (type === "ustensil") {
                console.log(itemToRemove)
                ustensils.push(itemToRemove.toLowerCase())
                btnOpenFilter2.style.display = "flex";
                containBtnOpen2.style.display = "none";
                ustensilsBox.style.display = "none";
                console.log(ustensils)
            }
            if (type === "appliance") {
                console.log(itemToRemove)
                appliances.push(itemToRemove.toLowerCase())
                btnOpenFilter3.style.display = "flex";
                containBtnOpen3.style.display = "none";
                appliancesBox.style.display = "none";
                console.log(appliances)
            }
            // eslint-disable-next-line
            filter()
            filterRecipes()
        })
    })
}

/**
 * Fonction qui filtres la liste des recettes en fonction des éléments de filtrage activés
 */

export const filterRecipes = () => {
    // eslint-disable-next-line
    filters.forEach(filter => {
        if (filter.type == "ingredient") {
            // eslint-disable-next-line
            newAllRecipesTest = newAllRecipes.filter(recipe => {
                let inputTest
                inputTest = JSON.stringify(recipe.ingredients).indexOf(filter.name) > -1
                return inputTest == true
            })
        }
        else if (filter.type == "ustensil") {
            // eslint-disable-next-line
            newAllRecipesTest = newAllRecipes.filter(recipe => {
                let inputTest
                inputTest = JSON.stringify(recipe.ustensils).toLocaleLowerCase().indexOf(filter.name.toLocaleLowerCase()) > -1
                console.log(inputTest)
                return inputTest == true
            })
        }
        else if (filter.type == "appliance") {
            // eslint-disable-next-line
            newAllRecipesTest = newAllRecipes.filter(recipe => {
                let inputTest
                inputTest = JSON.stringify(recipe.appliance).toLocaleLowerCase().indexOf(filter.name.toLocaleLowerCase()) > -1
                return inputTest == true
            })
        }    
    })
    // eslint-disable-next-line
    if(newAllRecipes.length === 0){
        document.querySelector(".noMatchRecipeBox").style.display = "flex"
    }
    else{
        document.querySelector(".noMatchRecipeBox").style.display = "none"

    }
    // eslint-disable-next-line
    displayRecipes(newAllRecipesTest)
}


