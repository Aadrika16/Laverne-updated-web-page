import React, { useState } from 'react';
import './index.css';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">
          <img src="/laverneLogo/laverne_logo_transparent.png" alt="Laverne Studio by Weedy JewelZz" />
        </a>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="active" onClick={() => setMenuOpen(false)}>HOME</a></li>
        <li><a href="#collections" onClick={() => setMenuOpen(false)}>COLLECTIONS</a></li>
        <li><a href="#story" onClick={() => setMenuOpen(false)}>OUR STORY</a></li>
        <li><a href="#crafts" onClick={() => setMenuOpen(false)}>SIGNATURE CRAFTS</a></li>
        <li><a href="#journal" onClick={() => setMenuOpen(false)}>JOURNAL</a></li>
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
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX className="icon" /> : <FiMenu className="icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;