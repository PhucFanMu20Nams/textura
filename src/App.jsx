import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      
      {/* Product Grid Section */}
      <section className="product-grid-section">
        <div className="product-grid-container">
          <div className="product-grid">
            <div className="product-item large">
              <img src="/public/assets/images/blog-1.jpg" alt="Fashion model" />
            </div>
            <div className="product-item-container">
              <div className="product-item medium">
                <img src="/public/assets/images/blog-2.jpg" alt="White shoes" />
              </div>
              <div className="product-item-small-container">
                <div className="product-item small">
                  <img src="/public/assets/images/blog-3.jpg" alt="Jewelry" />
                </div>
                <div className="product-item small">
                  <img src="/public/assets/images/blog-4.jpg" alt="Handbag" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Items Section */}
      <section className="popular-items">
        <h2 className="section-title">POPULAR ITEMS</h2>
        <p className="section-subtitle">Top-Selling Pieces from Last Month</p>
        
        <div className="popular-items-grid">
          <div className="popular-item"></div>
          <div className="popular-item"></div>
          <div className="popular-item"></div>
          <div className="popular-item"></div>
          <div className="popular-item"></div>
          <div className="popular-item"></div>
        </div>
        
        <div className="see-more">
          <span className="arrow">‹</span>
          <a href="#" className="see-more-link">See More</a>
          <span className="arrow">›</span>
        </div>
      </section>

      <Footer />
      
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
