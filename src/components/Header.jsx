import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <button className="menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item montserrat-font"><a href="#">Home</a></li>
            <li className="nav-item montserrat-font"><a href="#">Category</a></li>
            <li className="nav-item farro-font"><a href="#">TEXTURA</a></li>
            <li className="nav-item montserrat-font"><a href="#">Service</a></li>
          </ul>
        </nav>
        
        <div className="header-icons">
          <a href="#" className="icon-link user-icon" aria-label="User account">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>
          
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <a href="#" className="icon-link search-icon" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;