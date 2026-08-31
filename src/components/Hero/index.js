import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const slides = [
 {
  image: "/carousalimages/library2.0.png",
  alt: "Library and Living Room",
  title: "Spaces That Inspire",
  subtitle: "Thoughtfully designed interiors where storage, comfort, and timeless character come together."
},

{
  image: "/carousalimages/ship.png",
  alt: "Pirate Ship Playroom",
  title: "Adventures Indoors",
  subtitle: "Imaginative themed environments that transform everyday play into unforgettable experiences."
},

{
  image: "/carousalimages/playhouse.png",
  alt: "Outdoor Activity Gym",
  title: "Built For Movement",
  subtitle: "Contemporary outdoor activity structures designed for climbing, swinging, balancing, and exploration."
},

{
  image: "/carousalimages/indoorplayhouse.png",
  alt: "Indoor Activity Loft",
  title: "Little Worlds Within",
  subtitle: "Warm, beautifully crafted indoor play spaces created for imagination, discovery, and everyday play."
},

{
  image: "/carousalimages/outdoorplayhouse.png",
  alt: "Outdoor Wooden Playhouse",
  title: "Play Beyond The Walls",
  subtitle: "Bespoke outdoor play structures that turn gardens into places of adventure, creativity, and connection."
},

{
  image: "/carousalimages/treeplayhouse.png",
  alt: "Treehouse with Blue Slide",
  title: "Elevated Adventures",
  subtitle: "Architectural treehouses with slides, climbing features, and elevated spaces made for endless discovery."
}
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
          
          <div className="hero-content-wrapper">
            <div className="hero-text-container">
              <span className="hero-subtitle">{slide.subtitle}</span>
              <h1 className="hero-title">{slide.title}</h1>
            </div>
            
            <div className="hero-action-container">
              <button className="explore-btn">
                Explore Collections <span>&rarr;</span>
              </button>
            </div>
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