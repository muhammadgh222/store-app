const Review = require("../models/reviewModel");
const AppError = require("../utilities/AppError");
const AsyncHandler = require("../utilities/AsyncHandler");

const getAllReviews = AsyncHandler(async (req, res, next) => {
  const reviews = await Review.find({});

  res.status(200).json({
    status: "success",
    reviews,
  });
});

const createReview = AsyncHandler(async (req, res, next) => {
  const review = await Review.create(req.body);

  res.status(201).json({
    status: "success",
    review,
  });
});

module.exports = { getAllReviews, createReview };
