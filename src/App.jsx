// File: src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: '$999', description: 'High performance laptop' },
    { id: 2, name: 'Headphones', price: '$199', description: 'Noise cancelling headphones' },
    { id: 3, name: 'Smartwatch', price: '$249', description: 'Track your fitness and notifications' },
  ]);

  return (
    <div className="app-container">
      <h1>Product Listings</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
