const router = require('express').Router();

const itemController = require('./controllers/item.controller');

// Connect controller methods to corresponding routes
router.get('/item', itemController.getAll);

module.exports = router;
