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
            <li className="nav-item montserrat-font"><a href="#">Blog</a></li>
          </ul>
        </nav>
        
        <div className="header-icons">
          <a href="#" className="icon-link" aria-label="Shopping bag">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </a>
          <a href="#" className="icon-link" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;