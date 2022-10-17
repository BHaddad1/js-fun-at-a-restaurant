class Chef {
  constructor(name, restaurant) {
    this.name = name
    this.restaurant = restaurant
  }
  greetCustomer(customerName,isMorning){
    if(isMorning === true){
      return `Good morning, ${customerName}!`
    }
    return `Hello, ${customerName}!`
  }
  checkForFood(food){
    for (var i = 0; i < this.restaurant.menus.breakfast.length; i++){
    if (this.restaurant.menus.breakfast[i].name === food.name){
      return `Yes, we're serving ${food.name} today!`
      }
    }
    return `Sorry, we aren't serving ${food.name} today.`
  }
}


module.exports = Chef;
