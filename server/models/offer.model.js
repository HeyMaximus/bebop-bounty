const { pool } = require('../db');

module.exports.getBountyOffers = (bountyID) => {
  const queryStr =
    'SELECT offer.*, bounty_user.username AS seller_name FROM offer JOIN bounty_user ON seller_id=bounty_user.id AND bounty_id=$1 ORDER BY offer_amount ASC';
  return pool.query(queryStr, [bountyID]).then((queryRes) => queryRes.rows);
};

module.exports.getUserOffers = (userID) => {
  const queryStr =
    'SELECT offer.*, bounty_user.username AS seller_name FROM offer JOIN bounty_user ON seller_id=bounty_user.id AND seller_id=$1';
  return pool.query(queryStr, [userID]).then((queryRes) => queryRes.rows);
};

module.exports.getOffer = (offerID) => {
  const queryStr = 'SELECT * FROM offer WHERE id=$1';
  return pool.query(queryStr, [offerID]).then((queryRes) => queryRes.rows[0]);
};

module.exports.createOffer = (offer) => {
  const { bountyID, sellerID, condition, offerAmount, description, city, state, image } = offer;

  const insertedCols = [
    'bounty_id',
    'seller_id',
    'condition',
    'offer_amount',
    'description',
    'city',
    'state',
  ];
  const insertedValues = [bountyID, sellerID, condition, offerAmount, description, city, state];
  if (image) {
    insertedCols.push('image');
    insertedValues.push(image);
  }
  const queryCols = insertedCols.join(',');
  const queryValues = insertedValues.map((val, index) => `$${index + 1}`).join(',');

  const queryStr = `INSERT INTO offer (${queryCols}) VALUES (${queryValues})`;
  return pool.query(queryStr, [...insertedValues]);
};

module.exports.completeOffer = (offerID) => {
  const queryStr = 'UPDATE offer SET completed=true WHERE id=$1';
  return pool.query(queryStr, [offerID]);
};
