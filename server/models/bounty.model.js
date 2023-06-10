const { pool } = require('../db');

module.exports.getAllBounties = (page, count, sort, category, location, searchQuery) => {
  const queryStr = 'SELECT * FROM <> ORDER BY <> LIMIT <> OFFSET <>';
  return pool
    .query(queryStr, [page, count, sort, category, location, searchQuery])
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: get all bounties', err.message);
    });
};

module.exports.getUserBounties = () => {};
module.exports.createBounty = () => {};
