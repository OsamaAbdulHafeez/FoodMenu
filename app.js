let AllData;
async function getMenu(value) {
    // const search = document.getElementById('search').value
    try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${value}`).then((data) => {
            return data
        })
        const MenuData = await response.json()
        // allMenu = MenuData.data.recipes
        AllData = MenuData.data.recipes
        return AllData
    }
    catch (err) {

    }
}
async function searchHandler() {
    const search = document.getElementById('search').value
    const findItems = await getMenu(search)
    // console.log(findItems)
    if (findItems.length > 0) {
        const ul = document.querySelector('ul')
        findItems.forEach(element => {
            ul.innerHTML += `<li>
                                <div id="list" onclick=detailsHandler('${element.id}')>
                                    <div id="itmImg">
                                        <img src="${element.image_url}" alt="">
                                    </div>
                                    <div id="itmDes">
                                        <h5>${element.title}</h5>
                                        <p id="${element.id}">${element.publisher}</p>
                                    </div>
                                </div>
                            </li>`
        });
    }
    else {
        alert("Data Not Found")
    }
    
}
async function getRecipeDetails() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`)
    const recipeData = await response.json()
    console.log(recipeData.data.recipe)
}

async function recipeClickHandler(event) {
    // event.preventDefault();
    // if (event.target.id == 'list') {
    //     // const recipeId = event.target.getAttribute('href').substring(1); // Extract recipe ID from href
    //     // const recipeDetails = await getRecipeDetails(recipeId);
    //     // console.log(recipeId); // Do something with the recipe details (e.g., display in a modal)
    //     // You can display the recipe details in a modal, update the UI, or perform other actions here
    //     console.log("Osama")
    // }
    console.log("Osama")
}
// document.querySelector('li').addEventListener('click', getRecipeDetails)
const recipes = document.getElementById('fullrecipe')
async function detailsHandler(id){
    recipes.innerHTML = ""
    let reqData = AllData.find((e)=>{
        return e.id == id
    })
    
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${reqData.id}`).then((data)=>{
        return data
    })
    const recipe = await response.json()

    // console.log(recipe.data.recipe.ingredients)
    const findrecipe = recipe.data.recipe


    
    recipes.innerHTML += `<div id="recipe">
    <div id="recipeimage">
        <img src="${findrecipe.image_url}" alt="">
        <h1><span>${findrecipe.title}</span></h1>
    </div>
    <div id="recipeTiming">
        <div><i class="fa-regular fa-clock"></i><p><span>75</span>MINUTES</p></div>
        <div><i class="fa-solid fa-circle-user"></i><p><span>4</span>SERVINGS</p></div>
    </div>
    <div class="recipesItems">
        <h1>RECIPE INGREDIENTS</h1>
        <ul>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
            <li><span>1</span><p>cup mozzarella shredded</p></li>
        </ul>
    </div>
</div>`
}

