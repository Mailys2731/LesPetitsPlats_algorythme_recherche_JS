let btnIngredient = document.querySelector(".btnIngredient")
let ingredientIsOpen = 0

btnIngredient.addEventListener(("click"), function () {
    let btnBox = document.querySelector(".filterBoxIngredient")        

    if (ingredientIsOpen == 0) {
        ingredientIsOpen = 1
        document.querySelector(".angleIngredient").classList.add("turnAngleIcon")
        document.getElementById("btnIngredient__text").style.display = "none"
        document.getElementById("btnIngredient__input").style.display = "flex"

        btnBox.style.display="block"

        let ingredients = []
        const filter = () => {
            ingredients.filter(function (ele, pos) {
                return ingredients.indexOf(ele) == pos;
            })
        }
        allRecipes.recipes.forEach(recipe => {

            recipe.ingredients.forEach(ingredient => {
                ingredients.push(ingredient.ingredient)
            })
        });
        filter()

        ingredients.forEach(ingredient => {
            let ingredientElement = document.createElement("p")
            ingredientElement.textContent = ingredient
            btnBox.appendChild(ingredientElement)

        })

        console.log(ingredients)

        console.log(btnBox)
    }
    else {
        ingredientIsOpen = 0

        document.getElementById("btnIngredient__text").style.display = "flex"
        document.getElementById("btnIngredient__input").style.display = "none"
        document.querySelector(".angleIngredient").classList.remove("turnAngleIcon")
        btnBox.style.display="none"



    }

})