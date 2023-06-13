const offerModel = require('../models/offer.model');

module.exports.getBountyOffers = (req, res) => {
  const bountyID = req.params.bounty_id;
  offerModel
    .getBountyOffers(bountyID)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

module.exports.createOffer = (req, res) => {
  const offer = req.body;
  offerModel
    .createOffer(offer)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

module.exports.getUserOffers = (req, res) => {
  const userID = req.params.user_id;
  offerModel
    .getUserOffers(userID)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
