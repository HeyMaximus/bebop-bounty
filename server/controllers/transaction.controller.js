const transactionModel = require('../models/transaction.model');
const offerModel = require('../models/offer.model');

module.exports.getUserTransactions = (req, res) => {
  const userID = req.params.user_id;
  transactionModel
    .getUserTransactions(userID)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

module.exports.createTransaction = async (req, res) => {
  const { offerID } = req.body;
  try {
    const offers = await offerModel.getOffer(offerID);
    await transactionModel.createTransaction(offers[0]);
    await offerModel.completeOffer(offerID);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

module.exports.updateTransaction = (req, res) => {
  const transactionID = req.params.transaction_id;
  const transaction = req.body;
  transactionModel
    .updateTransaction(transactionID, transaction)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
