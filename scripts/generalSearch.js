let inputSearch = document.querySelector(".formSearch__input")
let newAllRecipes = 0
let nbStrings = Number

/**
 *Fonction qui récupère le nombre de caractères entrés dans l'input
 * @param {HTMLElement} input input barre de recherche principale
 */
const countStringsInput = (input) => {
    let inputValue = input.value
    nbStrings = inputValue.length
}

function strNoAccent(a) {
    var b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ",
        c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY",
        d="";
    for(var i = 0, j = a.length; i < j; i++) {
      var e = a.substr(i, 1);
      d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
    }
    return d;
  }

/**
 * AddEventListener de la barre de recherche principale
 */

inputSearch.addEventListener("keyup", function() {
    countStringsInput(inputSearch)
  
    if (nbStrings >= 3) {
        var t0 = performance.now();
        filter()
        var t1 = performance.now();
        console.log("L'appel de doSomething a demandé " + (t1 - t0) + " millisecondes.")
        
        //fonction qui concerne les filtres par mots clés
        // eslint-disable-next-line
        filterRecipes()
    } else {
        // eslint-disable-next-line
        newAllRecipes = allRecipes.recipes
        // eslint-disable-next-line
        filterRecipes()
    }
})

/**
 * 
 * @returns {Array} tableau des recettes filtré en fonction de l'entrée dfans la barre de recherche
 */

const filter = () => {
    // eslint-disable-next-line
    let = inputSearchNoAccent = strNoAccent(inputSearch.value)
    newAllRecipes = allRecipes.recipes.filter(recipe => {
        let stringRecipe = JSON.stringify(recipe)
        let stringRecipeLowerCase = stringRecipe.toLowerCase()
        let stringRecipeNoAccent = strNoAccent(stringRecipeLowerCase)
        let inputTest = stringRecipeNoAccent.indexOf(inputSearchNoAccent.toLowerCase()) > -1
        return inputTest == true
    });
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
