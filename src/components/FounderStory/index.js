import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const FounderStory = () => {
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
      className={`founder-story-section ${isVisible ? 'scroll-reveal-active' : ''}`}
      ref={sectionRef}
    >
      <div className="founder-container">
        <h2 className="founder-main-title">Laverne Studio</h2>
        
        <div className="founder-content-grid">
          <div className="founder-text-column">
            <p>
              At Laverne Studio, we believe beautiful interiors begin with intention. 
              We blend timeless design with thoughtful details to create pieces that 
              bring warmth, balance and character into your home.
            </p>
            <p>
              From natural materials to custom finishes, every element is chosen 
              with care. Our collections are designed to mix, match and evolve 
              with your space and your story.
            </p>
            <p className="founder-highlight-text">
              <strong>Imagine it. Personalise it. Live with it.</strong>
            </p>
            <p>
              Let’s create something uniquely yours.<br />
              Explore Laverne Studio today.
            </p>
          </div>

          <div className="founder-image-column">
            <div className="founder-image-wrapper">
              <img 
                src="/carousalimages/ChatGPT Image Aug 20, 2026, 06_49_22 PM.png"
                alt="Laverne Studio Interior Setup" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;