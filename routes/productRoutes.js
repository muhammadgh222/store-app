const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const reviewRoutes = require("../routes/reviewRoutes");
const router = express.Router();

router.use("/:productId/reviews", reviewRoutes);

router.route("/").post(createProduct).get(getAllProducts);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);
module.exports = router;
