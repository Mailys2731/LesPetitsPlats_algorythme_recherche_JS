const inputSearch = document.querySelector(".formSearch__input")
let inputString = String
let nb_characters = Number
let newAllRecipes = 0

//Récupère le nombre de caractères entrés dans l'input
countStringsInput = (input) => {
    let inputValue = input.value
    nbStrings = inputValue.length
    console.log(nbStrings)
}

inputSearch.addEventListener("keyup", function() {
    countStringsInput(inputSearch)
    if (nbStrings >= 3) {
        console.log("je filtre")
        filter()
    } else {
        console.log("je ne fais rien")
        newAllRecipes = allRecipes.recipes
        displayRecipes()
    }
})

filter = () => {
    newAllRecipes = allRecipes.recipes.filter(recipe => {
        let stringRecipe = JSON.stringify(recipe)
        let stringRecipeLowerCase = stringRecipe.toLowerCase()
        let inputTest = stringRecipeLowerCase.indexOf(inputSearch.value) > -1
        return inputTest == true
    });
    console.log(newAllRecipes)

    displayRecipes()
    return newAllRecipes
}