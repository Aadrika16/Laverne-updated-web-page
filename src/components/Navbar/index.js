import React, { useState } from 'react';
import './index.css';
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX
} from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <a href="#home" onClick={handleNavClick}>
          <img
            src="/laverneLogo/laverne_logo_transparent.png"
            alt="Laverne Studio by Weedy JewelZz"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <a href="#home" onClick={handleNavClick}>
            HOME
          </a>
        </li>

        <li>
          <a href="#collections" onClick={handleNavClick}>
            COLLECTIONS
          </a>
        </li>

        <li>
          <a href="#categories" onClick={handleNavClick}>
            CATEGORIES
          </a>
        </li>

        <li>
          <a href="#our-story" onClick={handleNavClick}>
            OUR STORY
          </a>
        </li>

        <li>
          <a href="#exclusive" onClick={handleNavClick}>
            EXCLUSIVE
          </a>
        </li>

        <li>
          <a href="#instagram" onClick={handleNavClick}>
            INSTAGRAM
          </a>
        </li>
      </ul>

      {/* Icons */}
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

        {/* Mobile Menu */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FiX className="icon" />
          ) : (
            <FiMenu className="icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;