const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/', productController.create.bind(productController));
router.get('/', productController.getAll.bind(productController));
router.get('/top', productController.getTopSellingProduct.bind(productController));
router.get('/:id', productController.getById.bind(productController));
router.put('/:id', productController.update.bind(productController));
router.delete('/:id', productController.delete.bind(productController));

module.exports = router;
