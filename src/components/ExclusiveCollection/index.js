import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const exclusiveImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800", alt: "Modern Sofa Set" },
  { id: 2, url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800", alt: "Luxury Bedroom" },
  { id: 3, url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", alt: "Interior Decor" },
  { id: 4, url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800", alt: "Designer Armchair" },
  { id: 5, url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", alt: "Contemporary Living" },
  { id: 6, url: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800", alt: "Dining Collection" },
  { id: 7, url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", alt: "Minimalist Coffee Table" },
  { id: 8, url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800", alt: "Cabinet & Console" },
  { id: 9, url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&q=80&w=800", alt: "Lounge Seating" },
  { id: 10, url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800", alt: "Bespoke Interior" }
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
          <div className="exc-img-card img-small">
            <img src={exclusiveImages[3].url} alt={exclusiveImages[3].alt} />
          </div>
        </div>

        {/* Column 3: Image 5, 6, 7 */}
        <div className="exc-col exc-col-3">
          <div className="exc-img-card img-medium">
            <img src={exclusiveImages[4].url} alt={exclusiveImages[4].alt} />
          </div>
          <div className="exc-img-card img-tall">
            <img src={exclusiveImages[5].url} alt={exclusiveImages[5].alt} />
          </div>
        </div>

        {/* Column 4: Image 8, 9, 10 */}
        <div className="exc-col exc-col-4">
          <div className="exc-img-card img-small">
            <img src={exclusiveImages[6].url} alt={exclusiveImages[6].alt} />
          </div>
          <div className="exc-img-card img-medium">
            <img src={exclusiveImages[7].url} alt={exclusiveImages[7].alt} />
          </div>
          <div className="exc-img-row">
            <div className="exc-img-card img-tiny">
              <img src={exclusiveImages[8].url} alt={exclusiveImages[8].alt} />
            </div>
            <div className="exc-img-card img-tiny">
              <img src={exclusiveImages[9].url} alt={exclusiveImages[9].alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveCollection;