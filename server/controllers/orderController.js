const Order = require("../models/Order");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");

const createOrder = async (req, res) => {
  const { product } = req.body;
  const dbProduct = await Product.findOne({ _id: product });

  if (!dbProduct) {
    throw new CustomError.NotFoundError(`No product with id : ${product}`);
  }

  const order = await Order.create(req.body);

  res.status(StatusCodes.CREATED).json({ order });
};

const getAllOrders = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const statusFilter = req.query.status; // Get the status filter from the query parameters

  let query = {};

  if (statusFilter === "verified") {
    query = { status: "verified" };
  } else if (statusFilter === "unverified") {
    query = { status: "unverified" };
  } else if (statusFilter === "pending") {
    query = { status: "pending" };
  }

  const totalCount = await Order.countDocuments(query);

  const orders = await Order.find(query).skip(skip).limit(limit);

  if (!orders) {
    throw new CustomError.NotFoundError("Failed to retrieve orders.");
  }

  res.status(StatusCodes.OK).json({
    orders,
    currentPage: page,
    totalPages: Math.ceil(totalCount / limit),
    totalCount,
  });
};

const getAllOrdersFiltred = async (req, res) => {
  const verifiedOnly = req.query.verifiedOnly === "true";
  const pendingOnly = req.query.pendingOnly === "true";
  const unverifiedOnly = req.query.unverifiedOnly === "true";

  let query = {};
  if (verifiedOnly) {
    query = { status: "verified" };
  } else if (unverifiedOnly) {
    query = { status: "unverified" };
  } else if (pendingOnly) {
    query = { status: "pending" };
  }

  const orders = await Order.find(query);
  res.status(StatusCodes.OK).json({ orders });
};
module.exports = {
  createOrder,
  getAllOrders,
};
