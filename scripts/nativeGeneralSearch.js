const inputSearch = document.querySelector(".formSearch__input")
let inputString = String
let nb_characters = Number
let newAllRecipes = 0


const getSearchString = () => {
    let inputValue = inputSearch.value
    inputString = inputValue
    nb_characters = inputValue.length
    console.log(inputValue.length)
}

inputSearch.addEventListener("keyup", function() {
    getSearchString()
    if (nb_characters >= 3) {
        console.log("je filtre")
        var t0 = performance.now();
        filter()
        var t1 = performance.now();
        console.log("L'appel de filter a demandé " + (t1 - t0) + " millisecondes.")
    } else {
         // eslint-disable-next-line
         newAllRecipes = allRecipes.recipes
         // eslint-disable-next-line
         filterRecipes()
    }
    
})

const filter = () => {
    newAllRecipes = []
    // eslint-disable-next-line
    for (recipe of allRecipes.recipes) {
        let stringRecipe = JSON.stringify(recipe)
        let stringRecipeLowerCase = stringRecipe.toLowerCase()
        let inputTest = stringRecipeLowerCase.indexOf(inputString) > -1
        if (inputTest == true) {
            newAllRecipes.push(recipe)
        }
    }
    console.log(newAllRecipes)
    // eslint-disable-next-line
    displayRecipes()
    console.log(newAllRecipes)
}