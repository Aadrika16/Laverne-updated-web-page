import React from 'react';
import './index.css';

const FounderStory = () => {
  return (
    <div className="story-section" id="story">
      <div className="story-text-content">
        <span className="section-tag">THE ARTISAN HERITAGE</span>
        <h2>Carved by Passion, Defined by Nature.</h2>
        <p>
          Every piece of wood tells a story. Founded in 2015, our workshop bridges traditional woodworking techniques with contemporary minimalist design. We believe in creating heirlooms that last for generations.
        </p>
        <div className="signature-area">
          <span className="signature-font">Julian Vance</span>
          <span className="founder-title">Master Woodworker & Founder</span>
        </div>
        <span className="read-story">Read Our Full Story &rarr;</span>
      </div>

      <div className="story-image-grid">
        <div className="main-artisan-img">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Artisan working" />
        </div>
        <div className="floating-quote-box">
          <p>"Wood remembers every hand that shapes it."</p>
        </div>
        <div className="small-artisan-img">
          <img src="https://res.cloudinary.com/doyaebals/image/upload/v1786433044/ChatGPT_Image_Aug_11_2026_12_53_53_PM_huqrcu.png" alt="Chiseling wood" />
        </div>
      </div>
    </div>
  );
};

export default FounderStory;