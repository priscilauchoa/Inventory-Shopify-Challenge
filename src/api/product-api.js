const { Router } = require("express");
const productController = require("./controller/product-controller");

const router = new Router();

router.get("/", productController.allProducts);
router.get("/:id", productController.byId);
router.post("/", productController.createProduct);
router.put("/:id", productController.editProduct);

router.post("/deactivate/:id", productController.deactivateProduct);
router.post("/reactivate/:id", productController.reactivateProduct);

module.exports = router;
