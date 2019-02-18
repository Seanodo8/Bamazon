var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected as id " + connection.threadId);
});

var itemDisplay = function() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err;
        var displayTable = new Table({
            head: ["ID", "Product Name", "Category", "Price", "Stock"],
            colWidths: [6, 30, 30, 12, 7]
        });
        for(var i = 0; i < res.length; i++) {
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        purchase();
    });
};

var purchase = function() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Enter Item ID #: ",
            validate: function(value) {
                if(isNaN(value) == false) {
                    return true; 
                }else {
                    return false;
                }
            }
        },
        {
            name: "Quantity",
            type: "input",
            message: "Quantity to buy:",
            validate: function(value) {
                if(isNaN(value) == false) {
                    return true; 
                }else {
                    return false;
                }
            }
        },
    ]).then(function(answers){
        var amt= answers.Quantity;
        var ID = answers.ID;
        purchaseOrder(ID, amt);
    });
};

var purchaseOrder = function(ID, amt) {
connection.query("SELECT * FROM products WHERE ?", [{ item_id: ID }], function(err, res) {
        if(err) throw err;
        if(amt <= res[0].stock_quantity) {
            var total = "$" + (res[0].price * amt).toFixed(2);
            console.log("Your order is in stock!");
            console.log("The total for " + amt + " " + res[0].product_name + " is.. \n" + total + " \nThank you!");
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: res[0].stock_quantity - amt
            }, {
                item_id: ID
            }])
        }else {
            console.log("Insufficient quantity in stock for " + res[0].product_name);
        };

        continueShopping();
    });
};

var continueShopping = function(err) {
    if (err) throw err;
        inquirer.prompt({
            type: 'confirm',
            name: 'continue',
            message: 'Would you like to continue shopping?'
        }).then(function(answer) {
            if (answer.continue) {
                itemDisplay();
            } else {
                console.log('\nThank you for shopping with Bamazon!\n');
                connection.end();
            };
        });    
};

itemDisplay();
