const express = require('express');
const router = express.Router();

const provider = require('../controllers/provider.controller');

router.get('/', provider.getProviders);
router.post('/', provider.createProvider);
router.get('/:id',provider.getProvider);
router.put('/:id',provider.editProvider);
router.delete('/:id',provider.deleteProvider);

module.exports = router;
