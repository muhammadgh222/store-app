const Product = require("../models/productModel");
const AsyncHandler = require("../utilities/AsyncHandler.js");
const AppError = require("../utilities/AppError");
const APIFeatures = require("../utilities/APIFeatures");

const createProduct = AsyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    status: "success",
    product,
  });
});

const getAllProducts = AsyncHandler(async (req, res, next) => {
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const products = await features.query;

  if (!products) {
    return next(new AppError("There are no products to show", 404));
  }

  res.status(200).json({
    status: "success",
    productsList: products.length,
    products,
  });
});

const getProduct = AsyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId).populate("reviews");

  if (!product) {
    return next(new AppError("There is no product with this id", 404));
  }

  res.status(200).json({
    status: "success",
    product,
  });
});

const updateProduct = AsyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new AppError("There is no product with this id", 404));
  }

  res.status(200).json({
    status: "success",
    product,
  });
});

const deleteProduct = AsyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    return next(new AppError("There is no product with this id", 404));
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
