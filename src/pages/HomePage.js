import React from 'react';
import LatestProducts from '../components/LatestProducts';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Online Marketplace</h1>
      <p>Browse products, categories, and more!</p>
      <LatestProducts />
    </div>
  );
}

export default HomePage;