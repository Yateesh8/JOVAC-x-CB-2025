//callback functions

function addToCart(product, callback) {
  console.log("Product " + product + " added to cart.");
  callback(product);
} // Function to add product to the cart 

function generateBill(product, callback) {
  const price = Math.floor(Math.random() * 900) + 100; // price range from ₹100 to ₹999
  console.log("Bill generated for " + product + ": ₹" + price);
  callback(product, price);
} // Function to Generate the bill of the product

function placeOrder(product, price, callback) {
  console.log("Order placed for " + product + " costing ₹" + price);
  callback(product);
} // Function for placing an order

function confirmOrder(product, callback) {
  console.log("Order confirmed for " + product + ".");
  callback(product);
} // Function to confirm the order

function deliveryStatus(product) {
  console.log(product + " is out for delivery. Will arrive soon!");
} // Function to know the delivery status of the product 

addToCart("Smartphone", function (product) {
  generateBill(product, function (product, price) {
    placeOrder(product, price, function (product) {
      confirmOrder(product, function (product) {
        deliveryStatus(product);
      });
    });
  });
}); 

// promises functions
function addToCart(product) {
  return new Promise(function (resolve) {
    console.log("Product " + product + " added to cart.");
    resolve(product);
  });
}

function generateBill(product) {
  return new Promise(function (resolve) {
    const price = Math.floor(Math.random() * 900) + 100; // ₹100 to ₹999
    console.log("Bill generated for " + product + ": ₹" + price);
    resolve({ product: product, price: price });
  });
}

function placeOrder(data) {
  return new Promise(function (resolve) {
    console.log("Order placed for " + data.product + " and the cost is ₹" + data.price);
    resolve(data.product);
  });
}

function confirmOrder(product) {
  return new Promise(function (resolve) {
    console.log("Order confirmed for " + product);
    resolve(product);
  });
}

function deliveryStatus(product) {
  console.log(product + " is out for delivery. Will arrive soon.");
}

addToCart("Smartphone")
  .then(generateBill)
  .then(placeOrder)
  .then(confirmOrder)
  .then(deliveryStatus)
  .catch(function (error) {
    console.log("Error: " + error);
  }); // promises


