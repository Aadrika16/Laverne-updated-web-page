import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const signatureItems = [
  {
    id: 'tree-house',
    title: 'Tree House/Play House',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Nature inspired retreats that reconnect you.',
    image: '/carousalimages/TreeHouse3.png',
    items: [
      { id: 1, title: '1. Custom Tree House Exterior', image: '/playyhouse/play1.png' },
      { id: 2, title: '2. Playhouse View', image: '/playyhouse/play2.png' },
      { id: 3, title: '3. Tree House with Slide', image: '/playyhouse/play3.png' },
      { id: 4, title: '4. Tree House with Rope Ladder', image: '/playyhouse/play4.png' },
      { id: 5, title: '5. Tree House with Swing', image: '/playyhouse/play5.png' },
    ]
  },
  {
    id: 'indoor-loft',
    title: 'Indoor Activity loft',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Playful interiors that spark creativity every day.',
    image: '/indoor/indoor22.png',
    items: [
      { id: 1, title: '1. Adventure Loft Playground', image: '/indoor/indoor-001.png' },
      { id: 2, title: '2. Climb & Explore Zone', image: '/indoor/indoor-002.png' },
      { id: 3, title: '3. Elevated Playhouse Retreat', image: '/indoor/indoor-003.png' },
      { id: 4, title: '4. Indoor Activity Loft', image: '/indoor/indoor-004.png' },
      { id: 5, title: '5. Climbing Wall Adventure', image: '/indoor/indoor-005.png' },
      { id: 6, title: '6. Playhouse & Climbing Loft', image: '/indoor/indoor-006.png' },
      { id: 7, title: '7. Slide & Rope Adventure', image: '/indoor/indoor-007.png' },
      { id: 8, title: '8. Little Explorer Loft', image: '/indoor/indoor-008.png' },
      { id: 9, title: '9. Interactive Climbing Hub', image: '/indoor/indoor-009.png' },
      { id: 10, title: '10. Indoor Adventure Gym', image: '/indoor/indoor-010.png' },
      { id: 11, title: '11. Multi-Level Play Loft', image: '/indoor/indoor-011.png' },
      { id: 12, title: '12. Creative Movement Zone', image: '/indoor/indoor-012.png' }, 
      { id: 12, title: '13.  Signature Indoor Playhouse', image: '/indoor/indoor-013.png' },
    ]
  },
  {
    id: 'outdoor-loft',
    title: 'Outdoor Activity loft',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Designed for adventure, built for memories.',
    image: '/outdoor/outdoor-03.png',
    items: [
      { id: 1, title: '1. Outdoor Discovery Structure', image: '/outdoor/outdoor-01.png' },
      { id: 2, title: '2. Creative Play Space', image: '/outdoor/outdoor-02.png' },
      { id: 3, title: '3. Outdoor Adventure Loft', image: '/outdoor/outdoor-03.png' },
      { id: 4, title: '4. Elevated Play Structure', image: '/outdoor/outdoor-04.png' },
      { id: 5, title: '5. Outdoor Climbing Zone', image: '/outdoor/outdoor-05.png' },
      { id: 6, title: '6. Adventure Play Tower', image: '/outdoor/outdoor-06.png' },
      { id: 7, title: '7. Outdoor Explorer Hub', image: '/outdoor/outdoor-07.png' },
      { id: 8, title: '8. Nature-Inspired Play Area', image: '/outdoor/outdoor-08.png' },
      { id: 9, title: '9. Outdoor Activity Zone', image: '/outdoor/outdoor-09.png' },
      { id: 10, title: '10. Kids Adventure Playground', image: '/outdoor/outdoor-10.png' },
      { id: 11, title: '11. Outdoor Imagination Space', image: '/outdoor/outdoor-11.png' },
      { id: 12, title: '12. Multi-Level Play Area', image: '/outdoor/outdoor-12.png' },
      { id: 13, title: '13. Outdoor Exploration Zone', image: '/outdoor/outdoor-13.png' },
      { id: 14, title: '14. Adventure Play Pavilion', image: '/outdoor/outdoor-14.png' },
      { id: 15, title: '15. Outdoor Discovery Hub', image: '/outdoor/outdoor-15.png' },
      { id: 16, title: '16. Active Play Playground', image: '/outdoor/outdoor-16.png' }
    ]
  },
  {
    id: 'kids-interior',
    title: 'Kids Interior',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Thoughtfully designed spaces for little imaginations.',
    image: '/carousalimages/KidsInterior.png',
    items: [
      { id: 1, title: '1. Elegantly Styled Room', image: '/carousalimages/1.png' },
      { id: 2, title: '2. Kids Interior Space', image: '/carousalimages/KidsInterior.png' }
    ]
  },
  {
    id: 'custom-made',
    title: 'Custom Made',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description: 'Bespoke designs tailored uniquely for you.',
    image: '/carousalimages/CustomMade.png',
    items: [
      { id: 1, title: '1. Handmade Dining & Custom Set', image: '/carousalimages/5.png' },
      { id: 2, title: '2. Bespoke Craftsmanship', image: '/carousalimages/CustomMade.png' }
    ]
  }
];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [mainCardsPage, setMainCardsPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const mainItemsPerPage = 3;
  const mainTotalPages = Math.ceil(signatureItems.length / mainItemsPerPage);
  const mainStartIndex = mainCardsPage * mainItemsPerPage;
  const visibleMainCards = signatureItems.slice(mainStartIndex, mainStartIndex + mainItemsPerPage);

  const activeSubItems = selectedCategory ? selectedCategory.items : [];
  const isScrollable = activeSubItems.length > 2;
  const itemsPerPage = isScrollable ? 3 : activeSubItems.length;
  const totalPages = Math.ceil(activeSubItems.length / itemsPerPage);
  const startIndex = activePage * itemsPerPage;
  const visibleItems = activeSubItems.slice(startIndex, startIndex + itemsPerPage);

  const handleSubPrev = () => {
    setActivePage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleSubNext = () => {
    setActivePage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleMainPrev = () => {
    setMainCardsPage(prev => (prev === 0 ? mainTotalPages - 1 : prev - 1));
  };

  const handleMainNext = () => {
    setMainCardsPage(prev => (prev === mainTotalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className={`collections-section ${isVisible ? 'scroll-reveal-active' : ''}`} 
      id="collections"
      ref={sectionRef}
    >
      <div className="signature-header">
        <span className="section-subtitle">
          {selectedCategory ? selectedCategory.subtitle : "OUR SIGNATURE COLLECTION"}
        </span>
        <h2>{selectedCategory ? selectedCategory.title.toUpperCase() : "Signature Collection"}</h2>
        {!selectedCategory && (
          <p className="section-desc">
            Curated spaces, crafted with intention.<br />
            Explore our signature offerings designed to inspire, engage and elevate.
          </p>
        )}
        <div className="catalog-header-divider"></div>
        
        {selectedCategory && (
          <button className="back-to-main-btn" onClick={() => { setSelectedCategory(null); setActivePage(0); }}>
            &larr; Back to All Collections
          </button>
        )}
      </div>

      {!selectedCategory ? (
        <div className="main-categories-view">
          <div className="signature-grid-wrapper">
            <button className="carousel-arrow left-arrow" onClick={handleMainPrev}>&#8592;</button>

            <div className="signature-grid">
              {visibleMainCards.map((cat) => (
                <div 
                  className="signature-card main-cat-card" 
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat); setActivePage(0); }}
                >
                  <div className="signature-img-wrapper">
                    <img src={cat.image} alt={cat.title} />
                  </div>
                  <div className="signature-content">
                    <div className="signature-icon-circle">
                      <span className="icon-symbol">✦</span>
                    </div>
                    <h3>{cat.title}</h3>
                    <p>{cat.description}</p>
                    <span className="explore-subtext">Explore Subsections &rarr;</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-arrow right-arrow" onClick={handleMainNext}>&#8594;</button>
          </div>

          <div className="signature-dots">
            {Array.from({ length: mainTotalPages }).map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`dot ${dotIdx === mainCardsPage ? 'active' : ''}`}
                onClick={() => setMainCardsPage(dotIdx)}
              ></span>
            ))}
          </div>
        </div>
      ) : (
        <div className="category-block active-subview">
          <div className="signature-grid-wrapper">
            {isScrollable && (
              <button className="carousel-arrow left-arrow" onClick={handleSubPrev}>&#8592;</button>
            )}

            <div className={`signature-grid ${!isScrollable ? 'two-items-grid' : ''}`}>
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
                  </div>
                </div>
              ))}
            </div>

            {isScrollable && (
              <button className="carousel-arrow right-arrow" onClick={handleSubNext}>&#8594;</button>
            )}
          </div>

          {isScrollable && (
            <div className="signature-dots">
              {Array.from({ length: totalPages }).map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`dot ${dotIdx === activePage ? 'active' : ''}`}
                  onClick={() => setActivePage(dotIdx)}
                ></span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Collections;