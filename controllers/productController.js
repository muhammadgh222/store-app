const Product = require("../models/productModel");

const {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
} = require("./handleFactory");

const createProduct = createOne(Product);
const getProduct = getOne(Product, { path: "reviews" });
const getAllProducts = getAll(Product);
const updateProduct = updateOne(Product);
const deleteProduct = deleteOne(Product);

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
