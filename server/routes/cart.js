const express = require("express");
const router = express.Router();
const Cart = require("../model/cart");
const Product = require("../model/product");
const { ObjectId } = require("mongodb");

require("../database");

router.post("/addtocart/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id });
    if (product) {
      const itemExist = await Cart.findOne({ productId: product.id });
      let result;
      if (itemExist) {
        itemExist.itemCount += 1;
        result = await itemExist.save();
      } else {
        const cartItem = { productId: product.id, userid: 1 };
        const item = new Cart(cartItem);
        result = await item.save();
      }

      if (result) {
        console.log("Data inserted into the cart collection successfully.");
        res.status(201).json(result);
      } else {
        console.error("Error adding to cart:", error.message);
        res.status(500).json({ success: false, msg: "Internal Server Error" });
      }
    } else {
      res.status(400).send("Couldn't find the product");
    }
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

router.get("/cartitems", async (req, res) => {
  try {
    const products = await Cart.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
    ]);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting data from cart:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

router.post("/additem/:id", async (req, res) => {
  const id = req.params.id;
  const cartItem = await Cart.findOne({ _id: new ObjectId(id) });
  cartItem.itemCount += 1;
  const result = await cartItem.save();
  if (result) {
    console.log("Item count increased by 1.");
    res.status(201).json(result);
  } else {
    console.error("Error increasing item to cart:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

router.post("/removeitem/:id", async (req, res) => {
  const id = req.params.id;
  const cartItem = await Cart.findOne({ _id: new ObjectId(id) });
  cartItem.itemCount -= 1;
  const result = await cartItem.save();
  if (result) {
    console.log("Item count decreased by 1.");
    res.status(201).json(result);
  } else {
    console.error("Error increasing item to cart:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

router.delete("/deletecart", async (req, res) => {
  try {
    const result = await Cart.deleteMany({});
    if (result) {
      console.log(`${result.deletedCount} document(s) deleted`);
      res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } else {
      console.error("Error deleting documents:", err);
      res.status(500).send("Error deleting documents");
    }
  } catch (error) {
    console.error("Error getting data from cart:", error.message);
    res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
});

module.exports = router;
