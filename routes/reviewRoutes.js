const express = require("express");
const { protect } = require("../controllers/authController");
const {
  getAllReviews,
  createReview,
  setProductUserIds,
  updateReview,
  deleteReview,
  getReview,
} = require("../controllers/reviewController");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReviews)
  .post(protect, setProductUserIds, createReview);

router
  .route("/:id")
  .get(protect, getReview)
  .patch(protect, updateReview)
  .delete(protect, deleteReview);

module.exports = router;
