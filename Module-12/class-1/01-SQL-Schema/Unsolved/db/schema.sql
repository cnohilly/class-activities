DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;
USE inventory_db;
CREATE TABLE inventory (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    stock INTEGER NOT NULL
);
CREATE TABLE special_inventory (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    stock INTEGER NOT NULL
);