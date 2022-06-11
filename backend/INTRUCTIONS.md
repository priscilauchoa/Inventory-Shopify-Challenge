# Run instructions

## To run the backend application

-   In a terminal window, enter the directory **backend** and run: `npm install`;
-   Start server with: `npm run dev`.

## APi Routers:

### Get all products

-   GET [http://localhost:8080/api/product]

### Get product by id

-   GET [http://localhost:8080/api/product/][id]

### Create a new product

-   POST [http://localhost:8080/api/product]

    `Content-Type: application/json`

```javascript

{
    "name": "Table",
    "quantity": 5,
    "active": true,
}
```

### Update a product

-   PUT [http://localhost:8080/api/product/][id]

    `Content-Type: application/json`

```javascript
{
    "name": "TABLE",
    "quantity": 5
}

```

### Delete a product

-   POST [http://localhost:8080/api/product/deactivate/][id]

    `Content-Type: application/json`

```javascript
{
    "comment": "This product is duplicate"
}

```

### Undelete a product

-   POST [http://localhost:8080/api/product/reactivate/][id]
