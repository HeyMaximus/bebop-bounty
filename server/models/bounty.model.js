const { pool } = require('../db');

module.exports.getBounties = (page, count, sortBy, sortDir, category, city, state, searchQuery) => {
  // const queryStr =
  //   'SELECT * FROM bounty WHERE ($5 IS NULL OR category=$5) AND ($6 IS NULL OR city=$6) AND ($7 IS NULL OR state=$7) AND ($8 IS NULL OR description LIKE '') ORDER BY $3 $4 LIMIT $2 OFFSET (($1 - 1) * $2)';
  // return pool
  //   .query(queryStr, [page, count, sortBy, sortDir, category, city, state, searchQuery])
  //   .then((queryRes) => queryRes.rows)
  //   .catch((err) => {
  //     console.error('Query failed: get all bounties', err.message);
  //   });
};

module.exports.getUserBounties = () => {};
module.exports.createBounty = () => {};
