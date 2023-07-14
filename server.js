const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');

const app = express();

const dataPath = './data.json';
const users = require(dataPath).users;
const products = require(dataPath).products;
const secret = 'mysecretkey';

app.use(bodyParser.json());
app.use(cors());

// Endpoint to register a new user
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  if (users.find(user => user.email === email)) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }

  // Generate a new user ID
  const id = Math.max(...users.map(user => user.id)) + 1;

  // Create the new user
  const user = { id, name, email, password };
  users.push(user);

  // Write the updated user data to the file
  const data = { users, products };
  fs.writeFileSync(dataPath, JSON.stringify(data));

  res.json({ message: 'User created successfully' });
});

// Endpoint to log in a user
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find the user by email and password
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    res.status(401).json({ error: 'Invalid email or password' });
    return;
  }

  // Generate a new token
  const token = jwt.sign({ userId: user.id }, secret);

  // Return the token and user details
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

// Endpoint to get all products
// Endpoint to get all products with filters, search, sorting, and min-max features
app.get('/products', (req, res) => {
    // Get the query parameters
    const { filter, search, sortBy, minPrice, maxPrice } = req.query;
  
    // Filter the products
    let filteredProducts = products;
    if (filter) {
      filteredProducts = filteredProducts.filter(product => product.categories.includes(filter));
    }
  
    // Search the products
    if (search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    // Sort the products
    if (sortBy) {
      if (sortBy === 'priceLowToHigh') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'priceHighToLow') {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'nameAtoZ') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'nameZtoA') {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
    }
  
    // Min-max price range
    if (minPrice && maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }
  
    // Return the filtered, searched, and sorted products
    res.json(filteredProducts);
  });
  //get with id 
  app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
  
    // Find the product with the matching ID
    const product = products.find(product => product.id === productId);
  
    // If the product was not found, return a 404 error
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    res.json(product);
  });

// Endpoint to get all users
app.get('/users', (req, res) => {
  res.json(users);
});
//add product 
app.post('/products', (req, res) => {
    const { name, description, price } = req.body;
  
    // Generate a new product ID
    const id = Math.max(...products.map(product => product.id)) + 1;
  
    // Create the new product
    const product = { id, name, description, price };
    products.push(product);
  
    // Write the updated product data to the file
    const data = { users, products };
    fs.writeFileSync(dataPath, JSON.stringify(data));
  
    res.json({ message: 'Product created successfully' });
  });
 //update products
 app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
  
    // Find the product by ID
    const product = products.find(product => product.id == id);
  
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
  
    // Update the product details
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
  
    // Write the updated product data to the file
    const data = { users, products };
    fs.writeFileSync(dataPath, JSON.stringify(data));
  
    res.json({ message: 'Product updated successfully' });
  });
 
  //delete products
  app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
  
    // Find the product by ID
    const index = products.findIndex(product => product.id == id);
  
    if (index === -1) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
  
    // Remove the product from the array
    products.splice(index, 1);
  
    // Write the updated product data to the file
    const data = { users, products };
    fs.writeFileSync(dataPath, JSON.stringify(data));
  
    res.json({ message: 'Product deleted successfully' });
  });
  
  
  

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
