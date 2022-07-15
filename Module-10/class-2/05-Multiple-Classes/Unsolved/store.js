class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  // attempts to purchase a toy in stock
  processProductSale(name) {
    // iterates through the array of toys in stock
    this.stock.forEach(item => {
      // if toy name is equal to name passed in
      if (item.name === name) {
        // if item is in stock
        if (item.count > 0) {
          // decrement stock by one, add the price to the revenue and log that item was purchased
          item.count--;
          this.revenue += item.price;
          console.log(`Purchased ${item.name} for ${item.price}`);
          // else item can not be purchased and log that item is out of stock
        } else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }

  // adds to the stock for an item
  replenishStock(name, count) {
    // iterates through the array of toys in stock
    this.stock.forEach(item => {
      // if toy name is equal to the name specified
      if (item.name === name) {
        // increment the count of the toy in stock by the amount specified and log that the stock was replenished
        item.count += count;
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  // logs the current revenue
  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  // Prints a welcome message to the console
  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
