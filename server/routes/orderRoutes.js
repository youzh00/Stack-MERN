const express = require("express");
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  deleteOrderById,
  getDashboardInfos,
} = require("../controllers/orderController");

router.route("/").post(createOrder).get(getAllOrders);
router.route("/:id").delete(deleteOrderById);
router.route("/dashboard").get(getDashboardInfos);

module.exports = router;
