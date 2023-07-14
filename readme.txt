POST /register: endpoint to register a new user
POST /login: endpoint to log in a user and return a JWT token
GET /products: endpoint to get all products, with filters, search, sorting, and min-max price range features
GET /users: endpoint to get all users
POST /products: endpoint to add a new product
PUT /products/:id: endpoint to update a product by ID
DELETE /products/:id: endpoint to delete a product by ID
to start the server : npm start



the possible endpoints for this code are:

GET /products
GET /products?filter={category}
GET /products?search={searchTerm}
GET /products?sortBy=priceLowToHigh
GET /products?sortBy=priceHighToLow
GET /products?sortBy=nameAtoZ
GET /products?sortBy=nameZtoA
GET /products?minPrice={minPrice}&maxPrice={maxPrice}
GET /products?filter={category}&search={searchTerm}
GET /products?filter={category}&sortBy=priceLowToHigh
GET /products?filter={category}&sortBy=priceHighToLow
GET /products?filter={category}&sortBy=nameAtoZ
GET /products?filter={category}&sortBy=nameZtoA
GET /products?filter={category}&minPrice={minPrice}&maxPrice={maxPrice}
GET /products?search={searchTerm}&sortBy=priceLowToHigh
GET /products?search={searchTerm}&sortBy=priceHighToLow
GET /products?search={searchTerm}&sortBy=nameAtoZ
GET /products?search={searchTerm}&sortBy=nameZtoA
GET /products?search={searchTerm}&minPrice={minPrice}&maxPrice={maxPrice}
GET /products?filter={category}&search={searchTerm}&sortBy=priceLowToHigh
GET /products?filter={category}&search={searchTerm}&sortBy=priceHighToLow
GET /products?filter={category}&search={searchTerm}&sortBy=nameAtoZ
GET /products?filter={category}&search={searchTerm}&sortBy=nameZtoA
GET /products?filter={category}&search={searchTerm}&minPrice={minPrice}&maxPrice={maxPrice}


GET /products

Example: https://example.com/products

GET /products?filter={category}

Example: https://example.com/products?filter=electronics

GET /products?search={searchTerm}

Example: https://example.com/products?search=phone

GET /products?sortBy=priceLowToHigh

Example: https://example.com/products?sortBy=priceLowToHigh

GET /products?sortBy=priceHighToLow

Example: https://example.com/products?sortBy=priceHighToLow

GET /products?sortBy=nameAtoZ

Example: https://example.com/products?sortBy=nameAtoZ

GET /products?sortBy=nameZtoA

Example: https://example.com/products?sortBy=nameZtoA

GET /products?minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?minPrice=10&maxPrice=1000

GET /products?filter={category}&search={searchTerm}

Example: https://example.com/products?filter=electronics&search=phone

GET /products?filter={category}&sortBy=priceLowToHigh

Example: https://example.com/products?filter=electronics&sortBy=priceLowToHigh

GET /products?filter={category}&sortBy=priceHighToLow

Example: https://example.com/products?filter=electronics&sortBy=priceHighToLow

GET /products?filter={category}&sortBy=nameAtoZ

Example: https://example.com/products?filter=electronics&sortBy=nameAtoZ

GET /products?filter={category}&sortBy=nameZtoA

Example: https://example.com/products?filter=electronics&sortBy=nameZtoA

GET /products?filter={category}&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?filter=electronics&minPrice=10&maxPrice=1000

GET /products?search={searchTerm}&sortBy=priceLowToHigh

Example: https://example.com/products?search=phone&sortBy=priceLowToHigh

GET /products?search={searchTerm}&sortBy=priceHighToLow

Example: https://example.com/products?search=phone&sortBy=priceHighToLow

GET /products?search={searchTerm}&sortBy=nameAtoZ

Example: https://example.com/products?search=phone&sortBy=nameAtoZ

GET /products?search={searchTerm}&sortBy=nameZtoA

Example: https://example.com/products?search=phone&sortBy=nameZtoA

GET /products?search={searchTerm}&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?search=phone&minPrice=10&maxPrice=1000

GET /products?filter={category}&search={searchTerm}&sortBy=priceLowToHigh

Example: https://example.com/products?filter=electronics&search=phone&sortBy=priceLowToHigh

GET /products?filter={category}&search={searchTerm}&sortBy=priceHighToLow

Example: https://example.com/products?filter=electronics&search=phone&sortBy=priceHighToLow

GET /products?filter={category}&search={searchTerm}&sortBy=nameAtoZ

Example: https://example.com/products?filter

GET /products?filter={category}&search={searchTerm}&sortBy=priceLowToHigh

Example: https://example.com/products?filter=electronics&search=phone&sortBy=priceLowToHigh

GET /products?filter={category}&search={searchTerm}&sortBy=priceHighToLow

Example: https://example.com/products?filter=electronics&search=phone&sortBy=priceHighToLow

GET /products?filter={category}&search={searchTerm}&sortBy=nameAtoZ

Example: https://example.com/products?filter=electronics&search=phone&sortBy=nameAtoZ

GET /products?filter={category}&search={searchTerm}&sortBy=nameZtoA

Example: https://example.com/products?filter=electronics&search=phone&sortBy=nameZtoA

GET /products?filter={category}&search={searchTerm}&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?filter=electronics&search=phone&minPrice=10&maxPrice=1000

GET /products?search={searchTerm}&sortBy=priceLowToHigh&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?search=phone&sortBy=priceLowToHigh&minPrice=10&maxPrice=1000

GET /products?search={searchTerm}&sortBy=priceHighToLow&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?search=phone&sortBy=priceHighToLow&minPrice=10&maxPrice=1000

GET /products?search={searchTerm}&sortBy=nameAtoZ&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?search=phone&sortBy=nameAtoZ&minPrice=10&maxPrice=1000

GET /products?search={searchTerm}&sortBy=nameZtoA&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?search=phone&sortBy=nameZtoA&minPrice=10&maxPrice=1000

GET /products?filter={category}&search={searchTerm}&sortBy=priceLowToHigh&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?filter=electronics&search=phone&sortBy=priceLowToHigh&minPrice=10&maxPrice=1000

GET /products?filter={category}&search={searchTerm}&sortBy=priceHighToLow&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?filter=electronics&search=phone&sortBy=priceHighToLow&minPrice=10&maxPrice=1000

GET /products?filter={category}&search={searchTerm}&sortBy=nameAtoZ&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?filter=electronics&search=phone&sortBy=nameAtoZ&minPrice=10&maxPrice=1000

GET /products?filter={category}&search={searchTerm}&sortBy=nameZtoA&minPrice={minPrice}&maxPrice={maxPrice}

Example: https://example.com/products?filter=electronics&search=phone&sortBy=nameZtoA&minPrice=10&maxPrice=1000


<---------------------------------cart for multiple user with users cart------------>
Endpoint to add a product to a user's cart

URL: /cart/:userId
Method: POST
Request Body: { "productId": 123 }
Example: POST /cart/1, with request body { "productId": 123 }
Response: { "message": "Product added to cart successfully" }
Endpoint to get a user's cart

URL: /cart/:userId
Method: GET
Example: GET /cart/1
Response:
css
Copy code
[    {        "id": 123,        "name": "Product A",        "price": 10.99    },    {        "id": 456,        "name": "Product B",        "price": 24.99    }]
Endpoint to remove a product from a user's cart

URL: /cart/:userId/:productId
Method: DELETE
Example: DELETE /cart/1/123
Response: { "message": "Product removed from cart successfully" }