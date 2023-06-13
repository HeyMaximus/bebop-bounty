const router = require('express').Router();

const bountyController = require('./controllers/bounty.controller');
const userController = require('./controllers/user.controller');
const offerController = require('./controllers/offer.controller');
const transactionController = require('./controllers/transaction.controller');

// Connect controller methods to corresponding routes
router.post('/users', userController.createUser);
router.get('/users/:user_id', userController.getUser);
router.get('/bounties', bountyController.getAllBounties);
router.get('/bounties/:user_id', bountyController.getUserBounties);
router.post('/bounties', bountyController.createBounty);
router.get('/offers/:bounty_id', offerController.getBountyOffers);
router.post('/offers', offerController.createOffer);
router.patch('/offers/:offer_id', offerController.completeOffer);
router.get('/offers/:user_id', offerController.getUserOffers);
router.get('/transactions/:user_id', transactionController.getUserTransactions);
router.patch('/transactions/:transaction_id', transactionController.updateTransaction);

module.exports = router;
