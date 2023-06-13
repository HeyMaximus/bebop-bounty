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
module.exports.getUser = async (uid, cb) => {
  const getUserQuery = `
  SELECT * FROM bounty_user WHERE uid = $1`;
  const queryValue = [uid];
  try {
    const client = await pool.connect();
    const result = await client.query(getUserQuery, queryValue);
    client.release();
    cb(null, result);
  } catch (err) {
    cb(err, null);
  }
};
