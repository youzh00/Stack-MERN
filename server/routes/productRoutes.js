const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/productController");

router.route("/").post(createProduct).get(getAllProducts);
router.route("/:id").get(getSingleProduct);
module.exports = router;
