const Order = require("../models/order.model");
const Cart = require("../models/cart.model");
const cartService = require("./cart.service");

class OrderService {
  async createOrder(user, data) {
    // 1. Fetch cart
    let cart = await Cart.findOne({ user: user?.id }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      throw new Error("Cart is empty. Cannot create order.");
    }

    // 2. Map cart items into order items (snapshot)
    const orderItems = cart.items.map((item) => ({
      product: item.product._id,
      name: item.product.name, // snapshot product name
      price: item.price,       // price at purchase time
      quantity: item.quantity,
      total: item.price * item.quantity,
    }));

    // 3. Calculate totals
    const subtotal = orderItems.reduce((sum, i) => sum + i.total, 0);
    const shippingCost = data.shippingCost || 0;
    const totalAmount = subtotal + shippingCost;

    // 4. Create new order
    const order = new Order({
      user: user.id,
      items: orderItems,
      subtotal,
      shippingCost,
      totalAmount,
      shippingAddress: data.shippingAddress,
      paymentMethod: data.paymentMethod,
      paymentStatus: data.paymentStatus || "pending",
      paymentId: data.paymentId || null,
      notes: data.notes || "",
    });

    // 5. Save order
    await order.save();

    // 6. Clear the cart
    await cartService.clearCart(user);

    return order;
  }

  async getOrdersByUser(user){
        return await Order.find({ user: user?.id }).populate('items.product');
    
  }
}

module.exports = new OrderService();
