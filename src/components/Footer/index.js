import React from 'react';
import './index.css';
import { FiInstagram, FiGlobe, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-col-brand">
          <h2>LAVERNE</h2>
          <span>STUDIO</span>
          <p>We craft timeless furniture and objects with respect for nature, tradition, and the art of living well.</p>
          <div className="social-icons">
            <FiInstagram />
            <FiGlobe />
            <FiFacebook />
            <FiYoutube />
          </div>
        </div>

        <div className="footer-col-links">
          <h4>SHOP</h4>
          <ul>
            <li>Shop All</li>
            <li>New Arrivals</li>
            <li>Custom Orders</li>
            <li>Care Guide</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="footer-col-links">
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Track Order</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col-newsletter">
          <h4>Join the Inner Circle</h4>
          <p>Receive private previews of new collections and woodworking tips.</p>
          <div className="newsletter-input-box">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
          <div className="payment-badges">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PAY</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Laverne Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;