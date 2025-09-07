const orderService = require('../services/order.service');


class OrderController {
 

    async createOrder(req, res) {
    try {
      const user = req.user; // injected by your auth middleware
      const orderData = req.body;

      const order = await orderService.createOrder(user, orderData);
      return res.status(201).json(order);
    } catch (err) {
      console.error("Error creating order:", err);
      return res.status(500).json({ error: "Failed to create order" });
    }
  }

     async getUserOrders(req, res) {
    try {
      const user = req.user;

      const orders = await orderService.getOrdersByUser(user);
      return res.status(200).json(orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
      return res.status(500).json({ error: "Failed to fetch orders" });
    }
  }






}


module.exports = new OrderController();