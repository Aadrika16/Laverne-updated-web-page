import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const slides = [
  {
    subtitle: "HANDCRAFTED LIVING",
    title: "Timeless Woodcraft for Modern Living.",
    description: "Handcrafted furniture born from sustainable forests.",
    image: "/carousalimages/TreeHouse.png",
    alt: "Tree House"
  },
  {
    subtitle: "INDOOR PLAY & WONDER",
    title: "Indoor Activity Loft Adventures.",
    description: "Designed for endless indoor exploration and play.",
    image: "/carousalimages/IndoorActivityloft.png",
    alt: "Indoor Activity Loft"
  },
  {
    subtitle: "OUTDOOR DISCOVERY",
    title: "Outdoor Activity Loft & Play Spaces.",
    description: "Blending nature with active outdoor structures.",
    image: "/carousalimages/OutdoorActivityloft.png",
    alt: "Outdoor Activity Loft"
  },
  {
    subtitle: "ELEGANT INTERIORS",
    title: "Exquisite Living Room Furniture.",
    description: "Crafted comfort to elevate your everyday spaces.",
    image: "/carousalimages/Furniture.png",
    alt: "Furniture Living Room"
  },
  {
    subtitle: "ARTISANAL DINING",
    title: "Handmade Dining Room Sets.",
    description: "Gather around pieces built with enduring quality.",
    image: "/carousalimages/Furniture1.png",
    alt: "Furniture Dining Room"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Trigger scroll-reveal effect when hero section enters viewport
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
    <div 
      className={`hero-section ${isVisible ? 'scroll-reveal-active' : ''}`}
      ref={sectionRef}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})` }}
        >
          <div className="hero-content">
            <span className="hero-subtitle">{slide.subtitle}</span>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
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