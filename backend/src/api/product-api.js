const { Router } = require("express");
const productController = require("./controller/product-controller");

const router = new Router();

router.get("/", productController.allProducts);
router.post("/new", productController.createProduct);
router.post("/:id", productController.removeProduct);
router.put("/:id", productController.editProduct);

module.exports = router;
