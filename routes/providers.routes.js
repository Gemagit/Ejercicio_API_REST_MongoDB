const express = require('express');
const router = express.Router();
const providersController = require('../controllers/providers.controllers');

router.get('/', providersController.getProvider);
router.post('/', providersController.createProvider);
router.get('/:id', providersController.getProvider);
router.put('/:companyName', providersController.updateProvider);
router.delete('/title',providersController.deleteProvider);

module.exports = router;