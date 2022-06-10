const moment = require("moment");
const { v4 } = require("uuid");
let products = [
    {
        id: v4(),
        name: "Storage Jar",
        quantity: 6,
        barcode: "32874627567862786",
        date: moment(),
    },
];

const createProduct = (req, res) => {
    console.log("req", req.body);
    products.unshift({
        id: v4(),
        name: req.body.name,
        quantity: req.body.quantity,
        barcode: req.body.barcode,
        date: moment(),
    });
    res.send();
};

const allProducts = (req, res) => {
    res.json(products);
};

const editProduct = (req, res) => {
    console.log("request put done");
    productToEdit = products.find((product) => product.id !== req.params.id);
    productToEdit.name = req.body.name;
    productToEdit.quantity = req.body.quantity;
    res.send();
};


module.exports = {
    createProduct,
    allProducts,
    removeProduct,
    editProduct,
};
