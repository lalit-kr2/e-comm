const express = require("express");
const route = require("./routes/product");
const cors = require('cors');

const app = express();
app.use(cors());
app.use("/api", route);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running at " + PORT);
});
