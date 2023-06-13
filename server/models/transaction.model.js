const { pool } = require('../db');

module.exports.getTransactions = (userID) => {
  const queryStr =
    'SELECT * FROM transaction WHERE seller_id=$1 OR buyer_id=$1 ORDER BY transaction_date DESC';
  return pool
    .query(queryStr, [userID])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: get user transactions', err.message);
    });
};

module.exports.updateTransaction = (transactionID, transaction) => {
  const updatedCols = [];
  const updatedValues = [];
  if ('ratingToBuyer' in transaction) {
    updatedCols.push('rating_to_buyer');
    updatedValues.push(transaction.ratingToBuyer);
  }
  if ('ratingToSeller' in transaction) {
    updatedCols.push('rating_to_seller');
    updatedValues.push(transaction.ratingToSeller);
  }
  if ('feedbackToBuyer' in transaction) {
    updatedCols.push('feedback_to_buyer');
    updatedValues.push(transaction.feedbackToBuyer);
  }
  if ('feedbackToSeller' in transaction) {
    updatedCols.push('feedback_to_seller');
    updatedValues.push(transaction.feedbackToSeller);
  }

  if (!updatedCols.length) {
    return Promise.resolve([]);
  }
  const querySegment = updatedCols.map((col, index) => `${col}=$${index + 1}`).join(',');
  const queryStr = `UPDATE transaction SET ${querySegment} WHERE id=${transactionID}`;
  return pool
    .query(queryStr, [...updatedValues])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: update transaction review', err.message);
    });
};

module.exports.createTransaction = (offer) => {
  const {
    id: offerID,
    bounty_id: bountyID,
    seller_id: sellerID,
    offer_amount: offerAmount,
  } = offer;
  const queryStr =
    'INSERT INTO transaction (offer_id, bounty_id, seller_id, sale_amount, buyer_id) VALUES ($1, $2, $3, $4, (SELECT buyer_id FROM bounty JOIN offer ON bounty.id = offer.bounty_id AND offer.seller_id=$3 AND bounty.id = $2))';
  return pool
    .query(queryStr, [offerID, bountyID, sellerID, offerAmount])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: create transaction', err.message);
    });
};
