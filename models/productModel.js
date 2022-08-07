const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Each product shoud have a name"],
    unique: [true, "Each product shoud have unique name"],
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Each product shoud have a price"],
  },
  imageCover: String,
  images: [String],
  brand: {
    type: String,
  },
  category: String, //Temporary
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  ratingsQuantity: {
    type: Number,
  },
  ratingsAvg: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
