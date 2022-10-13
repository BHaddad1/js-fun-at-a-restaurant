function nameMenuItem(food) {
  return `Delicious ${food}`
};

function createMenuItem(name, price, type){
  return menuItem = {name, price, type}
};

function addIngredients(food1, ingredients){
  if (!ingredients.includes(food1)){
    ingredients.push(food1)
  }
};

function formatPrice(priceWithDollarSign){
  return `$${menuItem.price}`
}

function decreasePrice(priceToBeReduced){
  return priceToBeReduced - (priceToBeReduced * .1)
}

function createRecipe(){

}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
