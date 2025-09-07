const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');

router.post('/', OrderController.createOrder.bind(OrderController));
router.get('/', OrderController.getUserOrders.bind(OrderController));

module.exports = router;
