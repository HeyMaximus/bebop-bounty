const transactionModel = require('../models/transaction.model');

module.exports.getUserTransactions = (req, res) => {
  const id = req.params.user_id;
  transactionModel
    .getUserTransactions(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};

module.exports.updateTransaction = (req, res) => {
  const transactionID = req.params.transaction_id;
  const { body } = req;
  transactionModel
    .updateTransaction(transactionID, body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
};
