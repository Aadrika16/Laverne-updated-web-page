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

            <h2>Bespoke Spaces, Crafted From Your Imagination</h2>

            <p>
              At Laverne Studio, we specialise in creating bespoke tree houses,
              playhouses and activity lofts for children and adults, designed for
              backyards, lawns, villas, farmhouses and schools.
            </p>

            <p>
              From a reference image you love to a space designed around your exact
              requirements, we bring your vision to life through custom craftsmanship,
              carefully selected materials and precise detailing.
            </p>

            <p>
              We are particularly known for crafting custom replicas and inspired
              recreations of selected furniture, structures and spaces—reimagined to
              suit your dimensions, environment and functional needs.
            </p>

            <p className="founder-highlight-text">
              <strong>You imagine it. We craft it.</strong>
            </p>

          </div>
          <div className="founder-image-column">
            <div className="founder-image-wrapper">
              <img 
                src="/founder_img/IMG_14131.png"
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