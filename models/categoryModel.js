const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A category must have a name "],
    trim: true,
  },
  photo: {
    type: String,
    default: "",
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
});

categorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
    select: "name",
  });
  next();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
