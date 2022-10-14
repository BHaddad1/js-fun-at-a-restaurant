

module.exports = {
   createRestaurant,
   addMenuItem,
  // removeMenuItem
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
  if(foodObject.type === "lunch"){
    restaurantType.menus.lunch.push(foodObject);
  } else if(foodObject.type === "breakfast"){
  restaurantType.menus.breakfast.push(foodObject);
   }
};
