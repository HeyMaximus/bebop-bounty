const offerModel = require('../models/offer.model');

module.exports.getOffers = async (req, res) => {
  const { bountyID, sellerID } = req.query;
  try {
    let data;
    if (bountyID) {
      data = await offerModel.getBountyOffers(bountyID);
    } else {
      data = await offerModel.getUserOffers(sellerID);
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(400);
  }
};

module.exports.createOffer = async (req, res) => {
  const offer = req.body;
  // console.log('IN CONTROLLER', offer);
  try {
    await offerModel.createOffer(offer);
    res.status(200).send('Offer created');
  } catch (err) {
    console.error('CONTROLLER ERROR', err.message);
    res.sendStatus(400);
  }
};
