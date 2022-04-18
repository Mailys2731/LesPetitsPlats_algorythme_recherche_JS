import { recipesJSON } from "../recipes.js"
import { newAllRecipes } from "./nativeGeneralSearch.js"
import { Recipe } from "./RecipeFactory.js"


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
    displayRecipes(newAllRecipes)
}

init()