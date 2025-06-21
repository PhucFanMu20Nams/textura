import React from 'react';
import './PopularItems.css';

function PopularItems() {
  // Sample product data
  const popularProducts = [
    {
      id: 1,
      name: 'Luxury Jersey Quarter-Zip Pullover',
      brand: 'Polo Ralph Lauren',
      price: '500.000 VND',
      // Fix: Use web-relative path instead of Windows absolute path
      image: '/assets/images/ralph_product.jpg'
    },
    {
      id: 2,
      name: 'Luxury Jersey Quarter-Zip Pullover',
      brand: 'Polo Ralph Lauren',
      price: '500.000 VND',
      image: '/assets/images/ralph_product.jpg'
    },
    {
      id: 3,
      name: 'Luxury Jersey Quarter-Zip Pullover',
      brand: 'Polo Ralph Lauren',
      price: '500.000 VND',
      image: '/assets/images/ralph_product.jpg'
    },
    {
      id: 4,
      name: 'Luxury Jersey Quarter-Zip Pullover',
      brand: 'Polo Ralph Lauren',
      price: '500.000 VND',
      image: '/assets/images/ralph_product.jpg'
    },
    {
      id: 5,
      name: 'Luxury Jersey Quarter-Zip Pullover',
      brand: 'Polo Ralph Lauren',
      price: '500.000 VND',
      image: '/assets/images/ralph_product.jpg'
    },
    {
      id: 6,
      name: 'Luxury Jersey Quarter-Zip Pullover',
      brand: 'Polo Ralph Lauren',
      price: '500.000 VND',
      image: '/assets/images/ralph_product.jpg'
    }
  ];

  return (
    <section className="popular-items">
      <div className="container">
        <h2 className="section-title">POPULAR ITEMS</h2>
        <p className="section-subtitle">Top-Selling Pieces from Last Month</p>
        
        <div className="products-grid">
          {popularProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-brand">{product.brand}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="shop-now-container">
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default PopularItems;