import React from 'react';
import { Link } from 'react-router-dom';
import './LatestProducts.css';

const products = [
  { id: 1, name: 'Product 1', image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', image: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', image: '/images/product3.jpg' },
  { id: 4, name: 'Product 4', image: '/images/product4.jpg' },
  { id: 5, name: 'Product 5', image: '/images/product5.jpg' },
];

function LatestProducts() {
  return (
    <section className="latest-products">
      <h2>Latest Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default LatestProducts;