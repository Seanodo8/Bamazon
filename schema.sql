DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(75) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES ("Lightsaber Chopsticks", "Home/Kitchen", 21.99, 20),
        ("Snuggie", "Clothing", 18.99, 30),
        ("Eloquent Javascript", "Books", 23.99, 10),
        ("Chuck Taylors", "Clothing", 39.99, 20),
        ("Operation", "Entertainment", 13.49, 20),
        ("Whoopee Cushion", "Entertainment", 4.99, 100),
        ("Drone", "Electronics", 349.99, 5),
        ("Bluetooth Headphones", "Electronics", 59.99, 25),
        ("You Don't Know JS", "Books", 21.05, 35),
        ("Kendama", "Entertainment", 12.99, 50);
 