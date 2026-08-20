import React from 'react';
import './index.css';
import { FiInstagram, FiGlobe, FiFacebook, FiYoutube, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        {/* Column 1: Brand & Bio */}
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

        {/* Column 2: Shop Links */}
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

        {/* Column 3: Customer Care Links */}
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

        {/* Column 4: Contact Info (Matching Reference Image) */}
        <div className="footer-col-contact">
          <ul>
            <li>
              <FiMail className="footer-contact-icon" /> hello@lavernestudio.in
            </li>
            <li>
              <FiInstagram className="footer-contact-icon" /> @lavernestudio
            </li>
            <li>
              <FiPhone className="footer-contact-icon" /> +91 98765 43210
            </li>
            <li>
              <FiYoutube className="footer-contact-icon" /> Laverne Studio
            </li>
            <li>
              <FiFacebook className="footer-contact-icon" /> Laverne Studio
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Laverne Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;