const router = require('express').Router();

const bountyController = require('./controllers/bounty.controller');

// Connect controller methods to corresponding routes
router.get('/bounties', bountyController.getAll);

module.exports = router;
