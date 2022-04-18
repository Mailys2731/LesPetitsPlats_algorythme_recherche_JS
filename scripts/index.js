let allRecipes

async function getRecipes() {
    return fetch(window.location.href.replace("/index.html", "") + "/recipes.json")

    .then(function(httpBodyResponse) {
        return httpBodyResponse.json()
    })

    .then(function(response) {
        allRecipes = response
        return allRecipes
    })

    .catch(function(error) {
        console.log(error)
        return []
    })
}

function displayRecipes() {
    let datas = ""
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
}

async function init() {
    await getRecipes()
    displayRecipes()
}

init()