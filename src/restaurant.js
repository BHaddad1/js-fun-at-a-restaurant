

module.exports = {
   createRestaurant,
   addMenuItem,
   removeMenuItem
}

function createRestaurant(restaurantName){
  var newRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
}
  return newRestaurant
}

function addMenuItem(restaurantType, foodObject) {
  if (foodObject.type === "lunch"){
    if (!restaurantType.menus.lunch.includes(foodObject)){
    return restaurantType.menus.lunch.push(foodObject)}
 } else if (foodObject.type === "breakfast"){
    if (!restaurantType.menus.breakfast.includes(foodObject)){
    return restaurantType.menus.breakfast.push(foodObject);
      }
    }
   else {
              restaurantType.menus.dinner.push(foodObject)
  }
  }

function removeMenuItem(fromRestaurant, item, typeOfMeal){
  for (var i = 0; i < fromRestaurant.menus[typeOfMeal].length; i++){
    if (fromRestaurant.menus[typeOfMeal][i].name === item){
    fromRestaurant.menus[typeOfMeal].splice([i], 1);
    return `No one is eating our ${item} - it has been removed from the ${typeOfMeal} menu!`
  }
}
return `Sorry, we don't sell ${item}, try adding a new recipe!`
}
