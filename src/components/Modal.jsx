import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <h2 className="modal-title">Get Started</h2>
        <p className="modal-text">
          Fill out this form and we'll get back to you shortly.
        </p>
        
        <form className="modal-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <select defaultValue="">
            <option value="" disabled>Select Service</option>
            <option value="design">Web Design</option>
            <option value="development">Web Development</option>
            <option value="branding">Branding</option>
          </select>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;