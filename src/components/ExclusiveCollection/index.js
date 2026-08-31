import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const exclusiveImages = [
  { id: 1, url: "/exclusiveCollection/E1.png", alt: "Modern Sofa Set" },
  { id: 2, url: "/exclusiveCollection/E2.png", alt: "Luxury Bedroom" },
  { id: 3, url: "/exclusiveCollection/E3.png", alt: "Interior Decor" },
  { id: 4, url: "/exclusiveCollection/E4.png", alt: "Designer Armchair" },
  { id: 5, url: "/exclusiveCollection/E9.png", alt: "Contemporary Living" },
  { id: 6, url: "/exclusiveCollection/E6.png", alt: "Dining Collection" },
  { id: 7, url: "/exclusiveCollection/E7.png", alt: "Minimalist Coffee Table" },
  { id: 8, url: "/exclusiveCollection/E8.png", alt: "Cabinet & Console" }
];

const ExclusiveCollection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      className={`exclusive-section ${isVisible ? 'scroll-reveal-active' : ''}`} 
      id="exclusive-collection"
      ref={sectionRef}
    >
      <div className="exclusive-grid-layout">
        {/* Column 1: Heading Title + Image 1 */}
        <div className="exc-col exc-col-1">
          <div className="exclusive-title-block">
            <h2 className="exc-main-title">EXCLUSIVE<br />COLLECTION</h2>
            <span className="exc-year">2026</span>
          </div>
          <div className="exc-img-card img-tall">
            <img src={exclusiveImages[0].url} alt={exclusiveImages[0].alt} />
          </div>
        </div>

        {/* Column 2: Image 2, 3, 4 */}
        <div className="exc-col exc-col-2">
          <div className="exc-img-card img-small">
            <img src={exclusiveImages[1].url} alt={exclusiveImages[1].alt} />
          </div>
          <div className="exc-img-card img-medium">
            <img src={exclusiveImages[2].url} alt={exclusiveImages[2].alt} />
          </div>
          <div className="exc-img-card img-small-bottom">
            <img src={exclusiveImages[3].url} alt={exclusiveImages[3].alt} />
          </div>
        </div>

        {/* Column 3: Image 5, 6 */}
        <div className="exc-col exc-col-3">
          <div className="exc-img-card img-medium-top">
            <img src={exclusiveImages[4].url} alt={exclusiveImages[4].alt} />
          </div>
          <div className="exc-img-card img-tall-bottom">
            <img src={exclusiveImages[5].url} alt={exclusiveImages[5].alt} />
          </div>
        </div>

        {/* Column 4: Image 7, 8 */}
        <div className="exc-col exc-col-4">
          <div className="exc-img-card img-medium-top">
            <img src={exclusiveImages[6].url} alt={exclusiveImages[6].alt} />
          </div>
          <div className="exc-img-card img-medium-bottom">
            <img src={exclusiveImages[7].url} alt={exclusiveImages[7].alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveCollection;