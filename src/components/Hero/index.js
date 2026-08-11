import React from 'react';
import './index.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="hero-subtitle">HANDCRAFTED LIVING</span>
        <h1>Timeless Woodcraft for Modern Living.</h1>
        <p>Handcrafted furniture born from sustainable forests.</p>
        <button className="explore-btn">
          Explore Collections <span>&rarr;</span>
        </button>
      </div>
      <div className="hero-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Hero;