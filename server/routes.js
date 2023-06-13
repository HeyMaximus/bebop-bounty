const router = require('express').Router();

const bountyController = require('./controllers/bounty.controller');
const userController = require('./controllers/user.controller');
const offerController = require('./controllers/offer.controller');
const transactionController = require('./controllers/transaction.controller');

// Connect controller methods to corresponding routes
router.post('/users', userController.createUser);
router.get('/users/:user_id', userController.getUser);
router.get('/bounties', bountyController.getBounties);
router.post('/bounties', bountyController.createBounty);
router.get('/offers', offerController.getOffers);
router.post('/offers', offerController.createOffer);
router.get('/transactions', transactionController.getUserTransactions);
router.post('/transactions', transactionController.createTransaction);
router.patch('/transactions/:transaction_id', transactionController.updateTransaction);

module.exports = router;
