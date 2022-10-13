
module.exports = {
   takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}

function takeOrder(order, deliveryOrders, takeoutOrders){
  deliveryOrders.push(order);
  takeoutOrders.push(order);
  return deliveryOrders
};
