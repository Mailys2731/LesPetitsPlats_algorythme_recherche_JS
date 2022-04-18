const inputSearch = document.querySelector(".formSearch__input")
let nbStrings = Number
let newAllRecipes = 0


const countStringsInput = (input) => {
    let inputValue = input.value
    nbStrings = inputValue.length
}

inputSearch.addEventListener("keyup", function() {
    countStringsInput(inputSearch)

    if (nbStrings >= 3) {
        var t0 = performance.now();
        filter()
        var t1 = performance.now();
        console.log("L'appel de filter a demandé " + (t1 - t0) + " millisecondes.")
        // eslint-disable-next-line
        filterRecipes()
    } else {
         // eslint-disable-next-line
         newAllRecipes = allRecipes.recipes
         // eslint-disable-next-line
         filterRecipes()
    }
    
})

const filter = () => {
    newAllRecipes = []
    if(inputSearch.value === ""){
        // eslint-disable-next-line
        newAllRecipes = allRecipes.recipes
    }
    else{
        // eslint-disable-next-line
        for (let recipe of allRecipes.recipes) {
            let stringRecipe = JSON.stringify(recipe)
            let stringRecipeLowerCase = stringRecipe.toLowerCase()
            
            let inputTest = stringRecipeLowerCase.indexOf(inputSearch.value) > -1
            if (inputTest == true) {
                newAllRecipes.push(recipe)
            }
        
        }
    }
    if(newAllRecipes.length === 0){
        document.querySelector(".noMatchRecipeBox").style.display = "flex"
    }
    else{
        document.querySelector(".noMatchRecipeBox").style.display = "none"

    }
    
    // eslint-disable-next-line
    displayRecipes()
    return newAllRecipes
}