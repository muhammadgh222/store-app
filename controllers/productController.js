const Product = require("../models/productModel");
const AsyncHandler = require("../utilities/AsyncHandler.js");

const createProduct = AsyncHandler(async (req, res, next) => {
  console.log(req.body);

  const product = await Product.create(req.body);

  res.status(201).json({
    status: "success",
    product,
  });
});

module.exports = { createProduct };
