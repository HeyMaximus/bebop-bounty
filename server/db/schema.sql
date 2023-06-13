DROP TABLE IF EXISTS bounty_user CASCADE;
DROP TABLE IF EXISTS bounty CASCADE;
DROP TABLE IF EXISTS offer;
DROP TABLE IF EXISTS transaction;

CREATE TYPE condition AS ENUM ('new', 'like new', 'good', 'fair', 'poor');
CREATE TYPE category AS ENUM ('clothing', 'furniture', 'gadget');
CREATE TYPE payment AS ENUM ('paypal', 'zelle', 'venmo', 'visa', 'cash');
CREATE TYPE rating AS ENUM ('good', 'bad');

CREATE TABLE bounty_user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  profile_image TEXT,
  last_edited TIMESTAMP,
  rating_thumbs_up INT,
  rating_thumbs_down INT
);

CREATE TABLE bounty (
  id SERIAL PRIMARY KEY,
  buyer_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  description TEXT,
  condition condition,
  category category,
  city VARCHAR(20),
  state VARCHAR(20),
  completed BOOLEAN,
  price NUMERIC(12,2),
  deadline TIMESTAMP,
  preferred_payment payment,
  image TEXT,
  created_at TIMESTAMP,
  FOREIGN KEY(buyer_id) REFERENCES bounty_user(id)
);
CREATE INDEX ON bounty (buyer_id);

CREATE TABLE offer (
  id SERIAL PRIMARY KEY,
  bounty_id INT NOT NULL,
  seller_id INT NOT NULL,
  condition condition,
  offer_amount NUMERIC(12, 2),
  completed BOOLEAN,
  FOREIGN KEY (bounty_id) REFERENCES bounty(id),
  FOREIGN KEY (seller_id) REFERENCES bounty_user(id)
);
CREATE INDEX ON offer (bounty_id);
CREATE INDEX ON offer (seller_id);


CREATE TABLE transaction (
  id SERIAL PRIMARY KEY,
  offer_id INT NOT NULL,
  bounty_id INT NOT NULL,
  seller_id INT NOT NULL,
  buyer_id INT NOT NULL,
  sale_amount NUMERIC(12, 2),
  transaction_date TIMESTAMP,
  rating_to_buyer rating,
  rating_to_seller rating,
  feedback_to_buyer TEXT,
  feedback_to_seller TEXT,
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  FOREIGN KEY (bounty_id) REFERENCES bounty(id),
  FOREIGN KEY (seller_id) REFERENCES bounty_user(id),
  FOREIGN KEY (buyer_id) REFERENCES bounty_user(id)
);

CREATE INDEX ON transaction (offer_id);
CREATE INDEX ON transaction (bounty_id);
CREATE INDEX ON transaction (seller_id);
CREATE INDEX ON transaction (buyer_id);

