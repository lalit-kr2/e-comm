const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://lalit-kr:decimaL.117@cluster0.ipnek8u.mongodb.net/ecomm")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err);
  });
