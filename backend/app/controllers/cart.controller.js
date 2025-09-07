const cartService = require('../services/cart.service');


class CartController {

     async create(req, res) {
        try {
          const cart = await cartService.createCart(req.body);
          res.status(201).json(category);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      }

      async addItem(req, res) {
        try {
          const cart = await cartService.addProduct(req.user,req.body);
          res.status(201).json(cart);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      }

      async removeItem(req, res) {
        try {
          const cart = await cartService.removeItem(req.user,req.body);
          res.status(201).json(cart);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      }

      async getAllItems(req, res) {
        try {
          const cart = await cartService.getProductInCart(req.user);
          res.status(201).json(cart);
        } catch (err) {
          res.status(400).json({ message: err.message });
        }
      }






}


module.exports = new CartController();