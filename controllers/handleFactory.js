const AsyncHandler = require("../utilities/AsyncHandler.js");
const AppError = require("../utilities/AppError");
const APIFeatures = require("../utilities/APIFeatures");

const createOne = (Model) =>
  AsyncHandler(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const getAll = (Model) =>
  AsyncHandler(async (req, res, next) => {
    let filter = {};
    if (req.params.productId) filter = { tour: req.params.productId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const doc = await features.query;

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
const getOne = (Model, popOptions) =>
  AsyncHandler(async (req, res, next) => {
    let query = await Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const updateOne = (Model) =>
  AsyncHandler(async (req, res, next) => {
    const modelId = req.params.id;
    const doc = await Model.findByIdAndUpdate(modelId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const deleteOne = (Model) =>
  AsyncHandler(async (req, res, next) => {
    const modelId = req.params.id;
    const doc = await Model.findByIdAndDelete(modelId);

    if (!doc) {
      return next(new AppError("There is no document with this id", 404));
    }

    res.status(200).json({
      status: "success",
      data: null,
    });
  });

module.exports = { deleteOne, updateOne, createOne, getOne, getAll };
