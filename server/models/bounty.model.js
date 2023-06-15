const { pool } = require('../db');

module.exports.getAllBounties = (params) => {
  const page = params.page ? Number(params.page) : 1;
  const count = params.count ? Number(params.count) : 10;
  let sortBy = 'created_at';
  let sortDir = 'DESC';
  if (params.sortBy === 'price-low-to-high' || params.sortBy === 'price-high-to-low') {
    sortBy = 'price';
    sortDir = params.sortBy === 'price-low-to-high' ? 'ASC' : 'DESC';
  }

  const filterCols = [];
  const filterValues = [];
  if (['clothing', 'furniture', 'decor', 'gadgets'].includes(params.category)) {
    filterCols.push('category');
    filterValues.push(params.category);
  }
  if ('city' in params) {
    filterCols.push('city');
    filterValues.push(params.city);
  }
  if ('state' in params) {
    filterCols.push('state');
    filterValues.push(params.state);
  }
  const conditions = filterCols.map((col, index) => {
    if (col === 'category') {
      return `${col} = $${index + 1}`;
    }
    return `LOWER(${col}) = LOWER($${index + 1})`;
  });
  if ('searchQuery' in params) {
    conditions.push(
      `LOWER(name) LIKE LOWER($${filterCols.length + 1}) OR LOWER(description) LIKE LOWER($${
        filterCols.length + 1
      })`
    );
    filterValues.push(`%${params.searchQuery}%`);
  }
  const conditionSegment = ['TRUE', ...conditions].join(' AND ');

  const queryStr = `SELECT bounty.*, \
  COALESCE((SELECT count(id) FROM offer GROUP BY bounty_id HAVING bounty_id=bounty.id), 0) AS offer_count, \
  username AS buyer_name \
  FROM bounty \
  JOIN bounty_user \
  ON bounty.buyer_id=bounty_user.id \
  WHERE ${conditionSegment} \
  ORDER BY ${sortBy} ${sortDir} \
  LIMIT ${count} OFFSET ((${page - 1}) * ${count})`;

  return pool.query(queryStr, [...filterValues]).then((queryRes) => queryRes.rows);
};

module.exports.getUserBounties = (userID) => {
  const queryStr =
    'SELECT bounty.*, COALESCE((SELECT count(id) FROM offer GROUP BY bounty_id HAVING bounty_id=bounty.id),0) AS offer_count FROM bounty WHERE buyer_id=$1 ORDER BY created_at DESC';
  return pool.query(queryStr, [userID]).then((queryRes) => queryRes.rows);
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
<<<<<<< HEAD
  return pool.query(queryStr, insertedValues).then((queryRes) => queryRes.rows);
=======
  return pool.query(queryStr, insertedValues);
>>>>>>> b1a3fca (fix sort bounty issue and refactor controller and model)
};
