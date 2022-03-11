let allRecipes

async function getRecipes() {
    return fetch("../recipes.json")

    .then(function (httpBodyResponse) {
        return httpBodyResponse.json()
    })

    .then(function (recipes) {
        allRecipes = recipes
        console.log(allRecipes)
    })

    .catch(function (error) {
        console.log(error)
        return []
    })
}



function displayRecipes() {
    let datas =""
    if(newAllRecipes !== ""){
        datas = newAllRecipes
    }
    else{datas = allRecipes.recipes}
    document.getElementById("recipes").innerHTML =""
    datas.forEach(data => {
        const recipeCard = new Recipe(data)
        const displayRecipes = recipeCard.renderCardRecipe()
        
    });
    console.log("recettes actualisées")
}

async function init() {
    await getRecipes()
    displayRecipes()
}

init()

