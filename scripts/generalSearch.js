const inputSearch = document.querySelector(".formSearch__input")
let inputString = String
let nb_characters = Number
let newAllRecipes = ""


getSearchString = () => {
    inputValue = inputSearch.value
    inputString = inputValue
    nb_characters = inputValue.length
    console.log(inputValue.length)
}

inputSearch.addEventListener("keyup", function () {
    getSearchString()
    if (nb_characters >= 3) {
        console.log("je filtre")
        filter()
    }
    else {
        console.log("je ne fais rien")
        displayRecipes()
    }
})


filter = () => {
    newAllRecipes = allRecipes.recipes.filter(recipe => {
        let stringRecipe = JSON.stringify(recipe)
        let stringRecipeLowerCase = stringRecipe.toLowerCase()
        inputTest = stringRecipeLowerCase.indexOf(inputString) > -1
        return inputTest == true
    });
    displayRecipes()
    console.log(newAllRecipes)
    newAllRecipes = ""
}