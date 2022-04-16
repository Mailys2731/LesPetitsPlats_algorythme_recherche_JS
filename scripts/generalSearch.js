const inputSearch = document.querySelector(".formSearch__input")
let newAllRecipes = 0
let nbStrings = Number

//Récupère le nombre de caractères entrés dans l'input
const countStringsInput = (input) => {
    let inputValue = input.value
    nbStrings = inputValue.length
    console.log(nbStrings)
}

inputSearch.addEventListener("keyup", function() {
    countStringsInput(inputSearch)
    if (nbStrings >= 3) {
        console.log("je filtre")
        var t0 = performance.now();
        filter()
        var t1 = performance.now();
        console.log("L'appel de doSomething a demandé " + (t1 - t0) + " millisecondes.")
      
        // eslint-disable-next-line
        filterRecipes()
    } else {
        console.log("je ne fais rien")
        // eslint-disable-next-line
        newAllRecipes = allRecipes.recipes
        // eslint-disable-next-line
        filterRecipes()
    }
})

const filter = () => {
    // eslint-disable-next-line
    newAllRecipes = allRecipes.recipes.filter(recipe => {
        let stringRecipe = JSON.stringify(recipe)
        let stringRecipeLowerCase = stringRecipe.toLowerCase()
        let inputTest = stringRecipeLowerCase.indexOf(inputSearch.value) > -1
        return inputTest == true
    });
    console.log(newAllRecipes)
    console.log("fonction")
    // eslint-disable-next-line
    displayRecipes()
    return newAllRecipes
}
