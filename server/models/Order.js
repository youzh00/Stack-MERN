const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please provide user name"],
    },
    phone: {
      type: String,
      required: [true, "Please provide phone number"],
    },
    unityPrice: {
      type: Number,
      required: [true, "Please provide unity price"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide quantity"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "unverified", "verified"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
