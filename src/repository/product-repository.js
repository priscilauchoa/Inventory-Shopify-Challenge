const moment = require("moment");
const { v4 } = require("uuid");

let products = [
    {
        id: v4(),
        name: "Storage Jar",
        quantity: 6,
        barcode: "32874627567862786",
        active: true,
        date: moment(),
    },
];

const update = (id, product) => {
    let productToUpdate = getById(id);

    products[products.indexOf(productToUpdate)] = {
        ...productToUpdate,
        ...product,
        id,
    };
};

const getAll = () => products.filter((product) => product.active);

const create = (product) => {
    const entity = {
        ...product,
        id: v4(),
        date: moment(),
        active: true,
    };
    products.unshift(entity);
    return entity;
};

const getById = (id) => products.find((product) => product.id === id);

module.exports = {
    create,
    getById,
    update,
    getAll,
};
