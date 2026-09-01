import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const slides = [
  {
    desktopImage: "/carousalimages/library2.0.png",
    mobileImage: "/mobileviewcarousals/m1.png", // Update filenames as needed
    alt: "Library and Living Room",
    title: "Spaces That Inspire",
    subtitle: "Thoughtfully designed interiors where storage, comfort, and timeless character come together."
  },
  {
    desktopImage: "/carousalimages/ship.png",
    mobileImage: "/mobileviewcarousals/m2.png",
    alt: "Pirate Ship Playroom",
    title: "Adventures Indoors",
    subtitle: "Imaginative themed environments that transform everyday play into unforgettable experiences."
  },
  {
    desktopImage: "/carousalimages/playhouse.png",
    mobileImage: "/mobileviewcarousals/m3.png",
    alt: "Outdoor Activity Gym",
    title: "Built For Movement",
    subtitle: "Contemporary outdoor activity structures designed for climbing, swinging, balancing, and exploration."
  },
  {
    desktopImage: "/carousalimages/indoorplayhouse.png",
    mobileImage: "/mobileviewcarousals/m4.png",
    alt: "Indoor Activity Loft",
    title: "Little Worlds Within",
    subtitle: "Warm, beautifully crafted indoor play spaces created for imagination, discovery, and everyday play."
  },
  {
    desktopImage: "/carousalimages/daytimetreehouse1.png",
    mobileImage: "/mobileviewcarousals/m5.png",
    alt: "Daytime Treehouse",
    title: "Play Beyond The Walls",
    subtitle: "Bespoke outdoor play structures that turn gardens into places of adventure, creativity, and connection."
  },
  {
    desktopImage: "/carousalimages/treeplayhouse.png",
    mobileImage: "/mobileviewcarousals/m6.png",
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
          {/* Picture element handles swapping between desktop and mobile sources automatically */}
          <picture className="hero-img-container">
            <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
            <img src={slide.desktopImage} alt={slide.alt} className="hero-img" />
          </picture>
          
          <div className="hero-content-wrapper">
            <div className="hero-text-container">
              <span className="hero-subtitle">{slide.subtitle}</span>
              <h3 className="hero-title">{slide.title}</h3>
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