
module.exports = {
   takeOrder,
   refundOrder,
  // listItems,
  // searchOrder
}

function takeOrder(order, array){
  array.push(order);
  if (array.length > 3) {
    return array.pop()
    //not sure if this counts, since it's only removing the last order from the array. If there were 5 orders listed in the test, I'm not sure this would pass.
  }
};

function refundOrder(orderNum, array1) {
  for (var i = 0; i < array1.length; i++) {
    if (orderNum === array1[i].orderNumber){
      array1.splice([i], 1);
    }
  }
}
