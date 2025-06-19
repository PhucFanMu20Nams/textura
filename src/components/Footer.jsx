function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <h1>Textura</h1>
            </a>
            <p className="footer-text">
              Creative design solutions for your business needs.
            </p>
          </div>
          
          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <h3 className="h4 footer-item-title">Company</h3>
              </li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
            
            <ul className="footer-list">
              <li>
                <h3 className="h4 footer-item-title">Connect</h3>
              </li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Textura. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer