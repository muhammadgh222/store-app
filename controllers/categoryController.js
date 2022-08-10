const Category = require("../models/categoryModel");
const {
  deleteOne,
  updateOne,
  createOne,
  getAll,
  getOne,
} = require("./handleFactory");

const createCategory = createOne(Category);
const getOneCategory = getOne(Category, { path: "product" });
const getAllCategories = getAll(Category);
const updateCategory = updateOne(Category);
const deleteCategory = deleteOne(Category);

module.exports = {
  getOneCategory,
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
