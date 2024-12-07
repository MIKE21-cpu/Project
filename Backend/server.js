const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let cart = [];

app.use(bodyParser.json());

// Get cart items
app.get("/cart", (req, res) => {
  res.json(cart);
});

// Add item to cart
app.post("/cart", (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json(cart);
});

// Remove item from cart
app.delete("/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((_, index) => index !== id);
  res.json(cart);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
