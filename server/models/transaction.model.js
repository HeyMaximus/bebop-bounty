const { pool } = require('../db');
const userModel = require('./user.model');

module.exports.getTransactions = (userID) => {
  const queryStr =
    'SELECT bounty.name AS bounty_name, \
    t.*, \
    u1.username AS buyer_name, \
    u2.username AS seller_name \
    FROM transaction AS t \
    JOIN bounty ON bounty.id=t.bounty_id \
    JOIN bounty_user AS u1 ON u1.id=t.buyer_id \
    JOIN bounty_user AS u2 ON u2.id=t.seller_id \
    WHERE t.seller_id=$1 OR t.buyer_id=$1 \
    ORDER BY transaction_date DESC';
  return pool.query(queryStr, [userID]).then((queryRes) => queryRes.rows);
};

module.exports.updateTransaction = async (transactionID, transaction) => {
  const queryRes = await pool.query(
    'SELECT seller_id, buyer_id \
  FROM transaction \
  WHERE id=$1',
    [transactionID]
  );
  const sellerID = queryRes.rows[0].seller_id;
  const buyerID = queryRes.rows[0].buyer_id;
  let userID;
  let rating;
  const updatedCols = [];
  const updatedValues = [];
  if ('ratingToBuyer' in transaction) {
    updatedCols.push('rating_to_buyer');
    updatedValues.push(transaction.ratingToBuyer);
    userID = buyerID;
    rating = transaction.ratingToBuyer;
  }
  if ('ratingToSeller' in transaction) {
    updatedCols.push('rating_to_seller');
    updatedValues.push(transaction.ratingToSeller);
    userID = sellerID;
    rating = transaction.ratingToSeller;
  }
  if ('feedbackToBuyer' in transaction) {
    updatedCols.push('feedback_to_buyer');
    updatedValues.push(transaction.feedbackToBuyer);
  }
  if ('feedbackToSeller' in transaction) {
    updatedCols.push('feedback_to_seller');
    updatedValues.push(transaction.feedbackToSeller);
  }

  const querySegment = updatedCols.map((col, index) => `${col}=$${index + 1}`).join(',');
  const queryStr = `UPDATE transaction SET ${querySegment} WHERE id=$${updatedCols.length + 1}`;
  await pool.query(queryStr, [...updatedValues, transactionID]);
  await userModel.rateUser(userID, rating);
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
  return pool.query(queryStr, [offerID, bountyID, sellerID, offerAmount]);
};
