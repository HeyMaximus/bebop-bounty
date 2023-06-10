const router = require('express').Router();

const bountyController = require('./controllers/bounty.controller');
const userController = require('./controllers/user.controller');
const offerController = require('./controllers/offer.controller');
const orderController = require('./controllers/order.controller');

// Connect controller methods to corresponding routes
router.post('/users', userController.createUser);
router.get('/users/:user_id', userController.getUser);
router.get('/bounties', bountyController.getAllBounties);
router.get('/bounties/:user_id', bountyController.getUserBounties);
router.post('/bounties', bountyController.createBounty);
router.get('/offers/:bounty_id', offerController.getBountyOffers);
router.post('/offers', offerController.createOffer);
router.patch('/offers/:offer_id', offerController.completeOffer);
router.get('/order/:user_id', orderController.getUserOrders);

module.exports = router;
