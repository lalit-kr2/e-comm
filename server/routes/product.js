const express = require("express");
const router = express.Router();
const axios = require("axios");
const Product = require("../model/product");

require("../database");

router.post("/post", async (req, res) => {
  try {
    // const response = await axios.get("https://api.storerestapi.com/products/");
    const response = await axios.request({
      method: "GET",
      url: "https://trundler.p.rapidapi.com/product",
      params: {
        regex: "false",
        ignore_case: "true",
        barcode: "5011013506132",
        product: "coffee",
        limit: "100",
        brand: "Nescaf[eé]",
      },

      headers: {
        "X-RapidAPI-Key": "5025aab41bmshb2be65575213932p16613ejsn2abfa3a3cb81",
        "X-RapidAPI-Host": "trundler.p.rapidapi.com",
      },
    });
    const productsData = response.data;

    // for (const productData of productsData) {
    //   const product = new Product(productData);
    //   await product.save();
    // }

    console.log("Data inserted into the product collection successfully.");
    res.status(201).json(productsData);
  } catch (error) {
    console.error("Error fetching or saving products data:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

router.get("/getproducts", async (req, res) => {
  try {
    const search = req.query.search;
    let data
    if (search) {
      data = await Product.find({
        name: { $regex: new RegExp(search, "i") },
      });
    } else {
      data = await Product.find();
    }
    // console.log(params);

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching products data:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

module.exports = router;
