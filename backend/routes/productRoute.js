const express = require("express");
const router = express.Router();

const {
    getProductDetails,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
  } = require("../controllers/productController");

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/product/:id").delete(deleteProduct);

// The about line can be written as  router.route("/product/:id").put(updateProduct).get(getProductDetails).delete(deleteProduct);

module.exports = router;