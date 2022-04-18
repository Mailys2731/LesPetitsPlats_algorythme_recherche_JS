import { recipesJSON } from "../recipes.js"
import { newAllRecipes } from "./nativeGeneralSearch.js"
import { Recipe } from "./RecipeFactory.js"

async function getRecipes() {
    return fetch(window.location.href.replace("/index.html", "") + "/recipes.js")

    .then(function(httpBodyResponse) {
        return httpBodyResponse.json()
    })

    .then(function(response) {
        allRecipes = response
        console.log(allRecipes)
        return allRecipes
    })

    .catch(function(error) {
        console.log(error)
        return []
    })
}

export function displayRecipes(newAllRecipes) {
    let datas = ""
    // eslint-disable-next-line
    if (newAllRecipes !== 0) {
            // eslint-disable-next-line
        datas = newAllRecipes
    } else { datas = recipesJSON }
    document.getElementById("recipes").innerHTML = ""
    datas.forEach(data => {
        // eslint-disable-next-line
        const recipeCard = new Recipe(data)
        recipeCard.renderCardRecipe()

    });
}

async function init() {
    //await getRecipes()
    displayRecipes(newAllRecipes)
}

init()