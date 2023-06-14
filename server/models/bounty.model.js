const { pool } = require('../db');

module.exports.getBounties = (
  page,
  count,
  sortBy,
  sortDir,
  category,
  city,
  state,
  searchQuery,
  userID
) => {
  // const queryStr =
  //   'SELECT * FROM bounty WHERE ($5 IS NULL OR category=$5) AND ($6 IS NULL OR city=$6) AND ($7 IS NULL OR state=$7) AND ($8 IS NULL OR description LIKE '') ORDER BY $3 $4 LIMIT $2 OFFSET (($1 - 1) * $2)';
  // return pool
  //   .query(queryStr, [page, count, sortBy, sortDir, category, city, state, searchQuery])
  //   .then((queryRes) => queryRes.rows)
  //   .catch((err) => {
  //     console.error('Query failed: get all bounties', err.message);
  //   });
};

module.exports.createBounty = (bounty) => {
  const {
    buyerID,
    name,
    category,
    description,
    condition,
    deadline,
    price,
    city,
    state,
    payment,
    image,
  } = bounty;
  const insertedCols = [
    'buyer_id',
    'name',
    'category',
    'description',
    'condition',
    'deadline',
    'price',
    'city',
    'state',
  ];
  const insertedValues = [
    buyerID,
    name,
    category,
    description,
    condition,
    deadline,
    Number(price),
    city,
    state,
  ];
  if (payment) {
    insertedCols.push('preferred_payment');
    insertedValues.push(payment);
  }
  if (image) {
    insertedCols.push('image');
    insertedValues.push(image);
  }
  const queryCols = insertedCols.join(',');
  const queryValues = insertedValues.map((val, index) => `$${index + 1}`).join(',');
  const queryStr = `INSERT INTO bounty (${queryCols}) VALUES (${queryValues})`;
  return pool
    .query(queryStr, insertedValues)
    .then((queryRes) => queryRes.rows)
    .catch((err) => {
      console.error('Query failed: create bounty', err.message);
    });
};
