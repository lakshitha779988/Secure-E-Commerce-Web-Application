const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cart.controller');

router.post('/', CartController.addItem.bind(CartController));
router.get('/', CartController.getAllItems.bind(CartController));
router.delete('/removeItem', CartController.removeItem.bind(CartController));

module.exports = router;
