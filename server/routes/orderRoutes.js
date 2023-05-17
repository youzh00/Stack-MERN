const express = require("express");
const router = express.Router();

const { createOrder, getAllOrders } = require("../controllers/orderController");

router.route("/").post(createOrder).get(getAllOrders);

module.exports = router;
