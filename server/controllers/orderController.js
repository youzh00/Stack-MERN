const Order = require("../models/Order");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");

const createOrder = async (req, res) => {
  const { productId } = req.body;
  const dbProduct = await Product.findOne({ _id: productId });

  if (!dbProduct) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  const order = await Order.create(req.body);

  res.status(StatusCodes.CREATED).json({ order });
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders });
};
module.exports = {
  createOrder,
  getAllOrders,
};
