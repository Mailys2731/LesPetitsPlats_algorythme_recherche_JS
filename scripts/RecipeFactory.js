class Recipe {
    constructor(data) {
        this._id = data.id
        this._name = data.name
        this._servings = data.servings
        this._ingredients = data.ingredients
        this._time = data.time
        this._description = data.description
        this._appliance = data.appliance
        this._ustencils = data.ustencils
    }

    renderCardRecipe() {
        document.getElementById("recipes").innerHTML += `
        <article>
            <div class="card recipe">
                <div class="recipe__img">
                </div>
                <div class="card-body recipe__body">
                    <div class="d-flex justify-content-between">
                        <h2 class="card-title">${this._name}</h2>
                        <div class="row w-25 recipe__time">
                            <i class="fas fa-clock"></i>
                            <p>${this._time} min</p>
                        </div>
                    </div>
                    <div class="recipe__bottomBox d-flex">
                        <div id=${"ingredients" + this._id} class="recipe__ingredients">
                        </div>
                        <p class="recipe__description">${this._description}</p>
                    </div>
            </div>

        </article>
        `
        this.ingredientsRender()
    }

    ingredientsRender() {
        let ingredientsBox = document.getElementById("ingredients" + this._id)
        this._ingredients.forEach(ingredient => {
            if(ingredient.unit && (ingredient.quantite || ingredient.quantity)){
            ingredientsBox.innerHTML += `
            <p><span>${ingredient.ingredient} </span> : ${ingredient.quantity|| ingredient.quantite} ${ingredient.unit}</p>
            `
            }
            else if(!ingredient.unit && (ingredient.quantite || ingredient.quantity)){
                ingredientsBox.innerHTML += `
                <p><span>${ingredient.ingredient} </span> : ${ingredient.quantity || ingredient.quantite}</p>
                `
            }
            else if(!ingredient.quantite && !ingredient.quantity && !ingredient.unit){
                ingredientsBox.innerHTML += `
                <p><span>${ingredient.ingredient} </span></p>
                `
            }
        });
        return ingredientsBox
    }
}