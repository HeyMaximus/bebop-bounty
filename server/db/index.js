const { Pool } = require('pg');
const dbConfig = require('./config/db.config');

module.exports.pool = new Pool({
  host: process.env.NODE_ENV === 'production' ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: dbConfig.POOL.max,
  idleTimeoutMillis: dbConfig.POOL.idle,
});
