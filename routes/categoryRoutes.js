const express = require("express");
const { protect } = require("../controllers/authController");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getOneCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.route("/").get(protect, getAllCategories).post(protect, createCategory);

router
  .route("/:id")
  .get(getOneCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = router;
