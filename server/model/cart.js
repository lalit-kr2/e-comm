const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productId: {
    type: Number,
  },
  itemCount: {
    type: Number,
    default: 1,
  },
  userid: {
    type: Number,
  },
  timeadded: {
    type: Date,
    default: new Date(),
  },
});

const Cart = new mongoose.model("cart", cartSchema);

module.exports = Cart;
