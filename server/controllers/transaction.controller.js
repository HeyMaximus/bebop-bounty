const transactionModel = require('../models/transaction.model');
const offerModel = require('../models/offer.model');

module.exports.getUserTransactions = async (req, res) => {
  const { userID } = req.query;
  try {
    const data = await transactionModel.getUserTransactions(userID);
    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(400);
  }
};

module.exports.createTransaction = async (req, res) => {
  const { offerID } = req.body;
  try {
    const offerCompletedRes = await offerModel.checkOfferCompleted(offerID);
    if (offerCompletedRes.completed) {
      res.status(400).send('Create transaction failed: offer already completed');
    } else {
      const offers = await offerModel.getOffer(offerID);
      await transactionModel.createTransaction(offers[0]);
      await offerModel.completeOffer(offerID);
      res.status(200).send('Transaction created');
    }
  } catch (err) {
    console.error(err.message);
    res.sendStatus(400);
  }
};

module.exports.updateTransaction = async (req, res) => {
  const transactionID = req.params.transaction_id;
  const transaction = req.body;
  try {
    await transactionModel.updateTransaction(transactionID, transaction);
    res.status(200).send('Transaction updated');
  } catch (err) {
    console.error(err.message);
    res.sendStatus(400);
  }
};
