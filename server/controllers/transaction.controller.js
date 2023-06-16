const transactionModel = require('../models/transaction.model');
const offerModel = require('../models/offer.model');

module.exports.getTransactions = async (req, res) => {
  const { userID } = req.query;
  try {
    const data = await transactionModel.getTransactions(userID);
    res.status(200).json(data);
  } catch (err) {
    console.error('Query failed: get transactions', err.message);
    res.sendStatus(400);
  }
};

module.exports.createTransaction = async (req, res) => {
  const { offerID } = req.body;
  try {
    const offer = await offerModel.getOffer(offerID);
    if (offer.completed) {
      res.status(400).send('Create transaction failed: offer already completed');
    } else {
      await transactionModel.createTransaction(offer);
      await offerModel.completeOffer(offerID);
      res.status(200).send('Transaction created');
    }
  } catch (err) {
    console.error('Query failed: create transaction', err.message);
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
    console.error('Query failed: update transaction review', err.message);
    res.sendStatus(400);
  }
};
