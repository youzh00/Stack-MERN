const express = require("express");
const router = express.Router();

const {
  createOrder,
  getAllOrders,
  deleteOrderById,
} = require("../controllers/orderController");

router.route("/").post(createOrder).get(getAllOrders);
router.route("/:id").delete(deleteOrderById);

module.exports = router;
