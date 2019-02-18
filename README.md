# Bamazon

# Overview

Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

# Bamazon Customer View 
* Running 'customer.js` will first display all of the items available for sale. This will include the ids, names, prices of products for sale and the stock quantity.

* The app will then prompt users with two messages.

   * The first will ask for the ID of the product that they would like to buy.
   * The second message will ask how many units of the product they would like to buy.

* Once the customer has placed the order, the application will check if the store has sufficient product items to meet the customer's request.

   * If there is enough stock to fulfill the order the total will be displayed and the stock(db) will be updated.
   * If not, the app will log `Insufficient quantity!`, and prevent the order from going through.



# **Screenshot Images**
### The app first displays all items available for sale in the bamazon inventory.

![Items Command](images/Screenshot(1).png)

### The app then prompts users with two messages, to place an order. The cost of the purchase is also displayed.

![itemselection](images/Screenshot(2).png)

### The app then prompts the user if they would like to continue shopping. If YES the items list is re-displayed with the updated stock.

![continueShopping](images/Screenshot(3).png)

### If there is not enough stock to fulfill the order...

![Insufficient](images/Screenshot(4).png)

### Finally, if the user does not wish to continue shopping, the connection is ended and the "Thank you for shopping with Bamazon is displayed.

![End](images/Screenshot(5).png)


# Technologies Used
    * Node.js
    * MySQL
    * Javascript
    * Inquirer 
    * cli - table
    