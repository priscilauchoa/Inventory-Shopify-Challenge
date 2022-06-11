# Project
`This project is an API with the objective of creating and managing products in an inventory.`

# Run instructions

## To run the backend application

-   In a terminal window run: `npm install`;
-   Start server with: `npm start`.

## API Routes:

### Get all products

-   GET `/api/product`

### Get product by id

-   GET `/api/product/:id`

### Create a new product

-   POST `/api/product`

    `Content-Type: application/json`

```javascript
{
    "name": "Macbook Air M2 Late 22",
    "quantity": 5,
    "barcode": "1298981289313692931241"
}
```

### Update a product

-   PUT `/api/product/:id`

    `Content-Type: application/json`

```javascript
{
    "name": "iPhone 13 Pro 128GB",
    "quantity": 2
}
```

### Deactivate (delete) a product

-   POST `/api/product/deactivate/:id`

    `Content-Type: application/json`

```javascript
{
    "comment": "This product is duplicate"
}
```

### Reactivate (undelete) a product

-   POST `/api/product/reactivate/:id`
