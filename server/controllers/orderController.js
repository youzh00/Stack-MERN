const Order = require("../models/Order");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");

const createOrder = async (req, res) => {
  const { product, quantity, unityPrice } = req.body;
  req.body.totalPrice = quantity * unityPrice;
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

  const statusFilter = req.query.status;
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

const deleteOrderById = async (req, res) => {
  const orderId = req.params.id;

  const deletedOrder = await Order.findByIdAndRemove(orderId);

  if (!deletedOrder) {
    throw new CustomError.NotFoundError("Order not found.");
  }
  res.status(StatusCodes.ACCEPTED).json({ deletedOrder });
};
const getDashboardInfos = async (req, res) => {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const lastThirtyDaysOrders = await Order.find({
    createdAt: { $gte: thirtyDaysAgo },
  });

  const pendingOrders = lastThirtyDaysOrders.filter(
    (order) => order.status === "pending"
  );
  const verifiedOrders = lastThirtyDaysOrders.filter(
    (order) => order.status === "verified"
  );
  const totalRevenue = verifiedOrders.reduce((sum, curr) => {
    return sum + curr.unityPrice * curr.quantity;
  }, 0);

  res.json({
    totalSales: verifiedOrders.length,
    pendingOrders: pendingOrders.length,
    totalRevenue,
  });
};
module.exports = {
  createOrder,
  getAllOrders,
  deleteOrderById,
  getDashboardInfos,
};
