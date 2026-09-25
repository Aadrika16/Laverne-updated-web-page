import React, { useState } from 'react';
import './index.css';
import {
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

      {/* LEFT - LOGO */}
      <div className="nav-logo">
        <a href="#home" onClick={handleNavClick}>
          <img
            src="/laverneLogo/laverne_logo_transparent.png"
            alt="Laverne Studio"
          />
        </a>
      </div>

      {/* CENTER - NAVIGATION LINKS */}
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

        {/* Mobile Instagram */}
        <li className="mobile-instagram">
          <a
            href="#instagram"
            onClick={handleNavClick}
          >
            INSTAGRAM
          </a>
        </li>

      </ul>

      {/* RIGHT - INSTAGRAM BUTTON */}
      <div className="nav-right">
        <a
          href="#instagram"
          className="instagram-btn"
          onClick={handleNavClick}
        >
          INSTAGRAM
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="hamburger"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;