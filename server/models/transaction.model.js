const { pool } = require('../db');

module.exports.getUserTransactions = (userID) => {
  const queryStr =
    'SELECT * FROM transaction WHERE seller_id=$1 OR buyer_id=$1 ORDER BY transaction_date DESC';
  return pool
    .query(queryStr, [userID])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: get user transactions', err.message);
    });
};

module.exports.updateTransaction = (transactionID, body) => {
  const updatedCols = [];
  const updatedValues = [];
  if ('ratingToBuyer' in body) {
    updatedCols.push('rating_to_buyer');
    updatedValues.push(body.ratingToBuyer);
  }
  if ('ratingToSeller' in body) {
    updatedCols.push('rating_to_seller');
    updatedValues.push(body.ratingToSeller);
  }
  if ('feedbackToBuyer' in body) {
    updatedCols.push('feedback_to_buyer');
    updatedValues.push(body.feedbackToBuyer);
  }
  if ('feedbackToSeller' in body) {
    updatedCols.push('feedback_to_seller');
    updatedValues.push(body.feedbackToSeller);
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
      console.error('Query failed: add transaction review', err.message);
    });
};
