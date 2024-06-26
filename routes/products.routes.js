const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controllers');

router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProduct);
router.put('/', productsController.updateProduct);
router.delete('/title', productsController.deleteProduct);

module.exports = router;