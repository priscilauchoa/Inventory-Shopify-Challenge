const productRepository = require("../../repository/product-repository");

const createProduct = (req, res) => {
    console.log("req", req.body);
    const product = productRepository.create({
        name: req.body.name,
        quantity: req.body.quantity,
        barcode: req.body.barcode,
    });
    res.json(product);
};

const allProducts = (req, res) => {
    const products = productRepository.getAll();
    res.json(products);
};

const byId = (req, res) => {
    const product = productRepository.getById(req.params.id);
    res.json(product);
};

const editProduct = (req, res) => {
    productRepository.update(req.params.id, {
        name: req.body.name,
        quantity: req.body.quantity,
    });
    res.send();
};

const deactivateProduct = (req, res) => {
    productRepository.update(req.params.id, {
        active: false,
        deactivateComment: req.body.comment,
    });
    res.send();
};

const reactivateProduct = (req, res) => {
    productRepository.update(req.params.id, { active: true });
    res.send();
};

module.exports = {
    byId,
    createProduct,
    allProducts,
    editProduct,
    deactivateProduct,
    reactivateProduct,
};
