const { Router } = require("express");
const productApi = require("./product-api");

const router = new Router();

router.use("/product", productApi);

module.exports = router;
