const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  productCategory: {
    type: String,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  description: {
    type: String,
  },
  basePrice: {
    type: Number,
  },
  inStock: {
    type: Boolean,
  },
  stock: {
    type: Number,
  },
  featuredImage: {
    type: String,
  },
  thumbnailImage: {
    type: String,
  },
  storageOptions: {
    type: Array,
  },
  colorOptions: {
    type: Array,
  },
  display: {
    type: String,
  },
  CPU: {
    type: String,
  },
  GPU: {
    type: String,
  },
  camera: {
    type: Object,
  },
});

const Product = new mongoose.model("products", productSchema);

module.exports = Product;
