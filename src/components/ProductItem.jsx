// File: src/components/ProductItem.jsx
import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;