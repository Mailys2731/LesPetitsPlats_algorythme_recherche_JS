let allRecipes

async function getRecipes() {
    return fetch("./recipes.json")

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



function displayRecipes() {
    let datas = ""
    console.log(newAllRecipes)
    if (newAllRecipes !== 0) {
        datas = newAllRecipes
    } else { datas = allRecipes.recipes }
    document.getElementById("recipes").innerHTML = ""
    datas.forEach(data => {
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