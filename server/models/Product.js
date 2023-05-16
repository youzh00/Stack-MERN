const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide product name"],
      maxlength: [100, "Name can not be more than 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    image: {
      type: String,
      default: "/uploads/example.jpeg",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
