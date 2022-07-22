DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE prices (
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  price DECIMAL(10,2)
);

CREATE TABLE books(
  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  price INTEGER,
  in_stock BOOLEAN,
  FOREIGN KEY (price)
  REFERENCES prices(id)
  ON DELETE SET NULL
);
