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
    console.log("LOOK AT ME", Chef.restaurant)
    if (food === Chef.restaurant){
      return `Yes, we're serving ${food.name} today!`
    }
  }
}

module.exports = Chef;
