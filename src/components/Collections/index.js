import React, { useState } from 'react';
import './index.css';

const signatureItems = [
  {
    id: 1,
    title: 'Tree House/Play House',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Nature inspired retreats that reconnect you.',
    image: '/carousalimages/TreeHouse.png'
  },
  {
    id: 2,
    title: 'Indoor Activity loft',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Playful interiors that spark creativity every day.',
    image: '/carousalimages/IndoorActivityloft.png'
  },
  {
    id: 3,
    title: 'Outdoor Activity loft',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Designed for adventure, built for memories.',
    image: '/carousalimages/OutdoorActivityloft.png'
  },
  {
    id: 4,
    title: 'Kids Interior',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Thoughtfully designed spaces for little imaginations.',
    image: '/carousalimages/KidsInterior.png'
  },
  {
    id: 5,
    title: 'Custom Made',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Bespoke designs tailored uniquely for you.',
    image: '/carousalimages/CustomMade.png'
  }
];

const Collections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex(2);
  };

  const visibleItems = signatureItems.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="collections-section" id="collections">
      <div className="signature-header">
        <span className="section-subtitle">OUR SIGNATURE COLLECTION</span>
        <h2>Signature Collection</h2>
        <p className="section-desc">
          Curated spaces, crafted with intention.<br />
          Explore our signature offerings designed to inspire, engage and elevate.
        </p>
      </div>

      <div className="signature-grid">
        {visibleItems.map((item) => (
          <div className="signature-card" key={item.id}>
            <div className="signature-img-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="signature-content">
              <div className="signature-icon-circle">
                <span className="icon-symbol">✦</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlighted Navigation Arrows Placed Below */}
      <div className="carousel-arrows-bottom">
        <button 
          className={`carousel-arrow-btn ${currentIndex === 0 ? 'disabled' : ''}`} 
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8592; Prev
        </button>
        <button 
          className={`carousel-arrow-btn ${currentIndex === 2 ? 'disabled' : ''}`} 
          onClick={handleNext}
          disabled={currentIndex === 2}
        >
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default Collections;