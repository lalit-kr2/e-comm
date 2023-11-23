const express = require("express");
const productRoutes  = require("./routes/product");
const cartRoutes = require("./routes/cart");
const cors = require('cors');

const app = express();
app.use(cors());
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running at " + PORT);
});
