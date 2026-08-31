import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const slides = [
  { image: "/carousalimages/library-0003.png", alt: "Tree House" },
  { image: "/carousalimages/23.png", alt: "Indoor Activity Loft" },
  { image: "/carousalimages/almara.png", alt: "Indoor Activity Loft" },
  { image: "/carousalimages/2.4.png", alt: "Outdoor Activity Loft" },
  { image: "/carousalimages/22.png", alt: "Furniture Living Room" },
  { image: "/carousalimages/555.png", alt: "Furniture Dining Room" },
  { image: "/carousalimages/lastCarousal1.png", alt: "Outdoor Activity Loft" }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <div 
      className={`hero-section ${isVisible ? 'scroll-reveal-active' : ''}`}
      ref={sectionRef}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.alt} className="hero-img" />
          
          <div className="hero-action-container">
            <button className="explore-btn">
              Explore Collections <span>&rarr;</span>
            </button>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;