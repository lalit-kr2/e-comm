const express = require("express");
const router = express.Router();
const axios = require("axios");
const Product = require("../model/product");

require("../database");

router.post("/post", async (req, res) => {
  try {
    const response = await axios.get("https://dummyapi.online/api/products");
    const productsData = response.data;

    for (const productData of productsData) {
      const product = new Product(productData);
      await product.save();
    }

    console.log("Data inserted into the product collection successfully.");
    res.status(201).json({ success: true, msg: "Products Created" });
  } catch (error) {
    console.error("Error fetching or saving products data:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

router.get("/getproducts", async(req, res) => {
  try{
    const data = await Product.find();
    res.status(200).json(data)
  } catch(error) {
    console.error("Error fetching products data:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
})

module.exports = router;
