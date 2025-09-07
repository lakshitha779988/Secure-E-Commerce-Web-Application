const Cart = require("../models/cart.model");

class CartService {
  async createCart(user) {
    const cart = new Cart({user:user?.id});
    return await cart.save();
  }

  async addProduct(user, data) {
    let cart = await Cart.findOne({ user: user?.id });
    if(!cart){
      cart = new Cart({user:user?.id});
    }
    
    return await cart.addItem(data?.productId, data?.quantity, data?.price);
  }

  async removeItem(user, data) {
    const cart = await Cart.findOne({ user: user?.id });
   
    return await cart.removeItem(data?.productId);
  }

  async clearCart(user) {
    const cart = await Cart.findOne({ user: user?.id });
    
    return await cart.clearCart();
  }

  async getProductInCart(user) {
    return await Cart.findOne({ user: user?.id }).populate('items.product');;
  }
}

module.exports = new CartService();
