const { pool } = require('../db');

module.exports.createUser = async (userData, cb) => {
  const createUserQuery = `
  INSERT INTO bounty_user (username, uid, email)
  VALUES ($1, $2, $3);`;
  const queryValues = [userData.username, userData.uid, userData.email];
  try {
    const client = await pool.connect();
    const result = await client.query(createUserQuery, queryValues);
    client.release();
    cb(null, result);
  } catch (err) {
    cb(err, null);
  }
};
module.exports.getUser = async (id, auth, cb) => {
  const queryID = auth === 'true' ? 'uid' : 'id';
  const getUserQuery = `SELECT * FROM bounty_user WHERE ${queryID} = $1`;
  const queryValue = [id];
  try {
    const client = await pool.connect();
    const result = await client.query(getUserQuery, queryValue);
    client.release();
    cb(null, result);
  } catch (err) {
    cb(err, null);
  }
};

module.exports.updateUser = (userID, user) => {
  const updatedCols = [];
  const updatedValues = [];
  if ('username' in user) {
    updatedCols.push('username');
    updatedValues.push(user.username);
  }
  if ('email' in user) {
    updatedCols.push('email');
    updatedValues.push(user.email);
  }
  if ('image' in user) {
    updatedCols.push('image');
    updatedValues.push(user.image);
  }

  if (!updatedCols.length) {
    return Promise.resolve([]);
  }
  const querySegment = updatedCols.map((col, index) => `${col}=$${index + 1}`).join(',');
  const queryStr = `UPDATE bounty_user SET ${querySegment} WHERE id=$${updatedCols.length + 1}`;
  return pool.query(queryStr, [...updatedValues, userID]);
};

module.exports.rateUser = (userID, rating) => {
  const ratingQuery = rating === 'good' ? 'rating_thumbs_up' : 'rating_thumbs_down';
  const queryStr = `UPDATE bounty_user SET ${ratingQuery} = ${ratingQuery} + 1 WHERE id=$1`;
  return pool
    .query(queryStr, [userID])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: rate user', err.message);
    });
};
