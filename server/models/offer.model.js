const { pool } = require('../db');

module.exports.getBountyOffers = (bountyID) => {
  const queryStr =
    'SELECT offer.*, bounty_user.username AS seller_name FROM offer JOIN bounty_user ON seller_id=bounty_user.id AND bounty_id=$1 ORDER BY offer_amount ASC';
  return pool
    .query(queryStr, [bountyID])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: get bounty offers', err.message);
    });
};

module.exports.getOffer = (offerID) => {
  const queryStr = 'SELECT * FROM offer WHERE id=$1';
  return pool
    .query(queryStr, [offerID])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: get offer', err.message);
    });
};

module.exports.createOffer = (offer) => {
  const {
    bounty_id,
    seller_id,
    condition,
    offer_amount,
    description,
    city,
    state,
    image,
    complete,
  } = offer;
  console.log('MODEL>>>', offer);

  const queryStr =
    'INSERT INTO offer (bounty_id, seller_id, condition, offer_amount, description, city, state, completed, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
  return pool
    .query(queryStr, [bountyID, sellerID, condition, offerAmount, false])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed in Model: create offer', err.message);
    });
};

module.exports.completeOffer = (offerID) => {
  const queryStr = 'UPDATE offer SET completed=true WHERE id=$1';
  return pool
    .query(queryStr, [offerID])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: complete offer', err.message);
    });
};

module.exports.getUserOffers = (userID) => {
  const queryStr = 'SELECT * FROM offer WHERE seller_id=$1';
  return pool
    .query(queryStr, [userID])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: get user offers', err.message);
    });
};

module.exports.checkOfferCompleted = (offerID) => {
  const queryStr = 'SELECT completed FROM offer WHERE id=$1';
  return pool
    .query(queryStr, [offerID])
    .then((queryRes) => queryRes.rows[0])
    .catch((err) => {
      console.error('Query failed: check offer complete', err.message);
    });
};
