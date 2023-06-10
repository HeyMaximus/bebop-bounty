DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS bounty CASCADE;
DROP TABLE IF EXISTS offer;
DROP TABLE IF EXISTS transaction;

CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  profile_image TEXT,
  rating_thumbs_up INT,
  rating_thumbs_down INT
);

CREATE TABLE bounty (
  id SERIAL PRIMARY KEY,
  buyer_id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  description TEXT,
  condition ENUM,
  category ENUM,
  location TEXT,
  completed BOOLEAN,
  price NUMERIC(12,2),
  deadline TIMESTAMP,
  preferred_payment ENUM,
  image TEXT,
  created_at TIMESTAMP,
  FOREIGN KEY(buyer_id) REFERENCES user(id)
);
CREATE INDEX ON bounty (buyer_id);

CREATE TABLE offer (
  id SERIAL PRIMARY KEY,
  bounty_id INT NOT NULL,
  seller_id INT NOT NULL,
  offer_amount NUMERIC(12, 2),
  completed BOOLEAN,
  FOREIGN KEY (bounty_id) REFERENCES bounty(id),
  FOREIGN KEY (seller_id) REFERENCES user(id)
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
  buyer_rated BOOLEAN,
  seller_rated BOOLEAN,
  FOREIGN KEY (offer_id) REFERENCES offer(id),
  FOREIGN KEY (bounty_id) REFERENCES bounty(id),
  FOREIGN KEY (seller_id) REFERENCES user(id),
  FOREIGN KEY (buyer_id) REFERENCES user(id)
);

CREATE INDEX ON transaction (offer_id);
CREATE INDEX ON transaction (bounty_id);
CREATE INDEX ON transaction (seller_id);
CREATE INDEX ON transaction (buyer_id);

