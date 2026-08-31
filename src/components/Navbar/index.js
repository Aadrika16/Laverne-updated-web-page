import React from 'react';
import './index.css';
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">
          <img src="/laverneLogo/laverne_logo_transparent.png" alt="Laverne Studio by Weedy JewelZz" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="active">HOME</a></li>
        <li><a href="#collections">COLLECTIONS</a></li>
        <li><a href="#story">OUR STORY</a></li>
        <li><a href="#crafts">SIGNATURE CRAFTS</a></li>
        <li><a href="#journal">JOURNAL</a></li>
      </ul>
      <div className="nav-icons">
        <FiSearch className="icon" />
        <div className="icon-badge-wrapper">
          <FiHeart className="icon" />
          <span className="badge">2</span>
        </div>
        <div className="icon-badge-wrapper">
          <FiShoppingBag className="icon" />
          <span className="badge">0</span>
        </div>
        <FiUser className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;