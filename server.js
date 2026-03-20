const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// In-memory storage for products (in production, use a database)
let products = [];

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// API endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const product = req.body;
  products.unshift(product);
  res.status(201).json({ message: 'Product added' });
});

app.delete('/api/products', (req, res) => {
  products = [];
  res.json({ message: 'All products cleared' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});