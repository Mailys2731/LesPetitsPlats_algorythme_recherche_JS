let allRecipes= []
let datas = ""


async function getRecipes() {
    return fetch("../recipes.json")

        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })

        .then(function (response) {
            allRecipes = response
            return response
        })
        .catch(function (error) {
            console.log(error)
            return []
        })
}



function displayRecipes() {
    console.log(allRecipes.recipes)

    // eslint-disable-next-line
    if (newAllRecipes !== 0) {
        // eslint-disable-next-line
        datas = newAllRecipes
    } else { datas = allRecipes.recipes }
    document.getElementById("recipes").innerHTML = ""
    datas.forEach(data => {
        // eslint-disable-next-line
        const recipeCard = new Recipe(data)
        recipeCard.renderCardRecipe()

    });
    console.log("recettes actualisées")
}

async function init() {
    await getRecipes()
    displayRecipes()
}

init()