import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const exclusiveImages = [
  {
    id: 1,
    url: "/exclusiveCollection/E1.png",
    alt: "Modern Sofa Set",
  },
  {
    id: 2,
    url: "/exclusiveCollection/E2.png",
    alt: "Luxury Bedroom",
  },
  {
    id: 3,
    url: "/exclusiveCollection/E10.png",
    alt: "Interior Decor",
  },
  {
    id: 4,
    url: "/exclusiveCollection/E4.png",
    alt: "Designer Armchair",
  },
  {
    id: 5,
    url: "/exclusiveCollection/E9.png",
    alt: "Contemporary Living",
  },
  {
    id: 6,
    url: "/exclusiveCollection/E6.png",
    alt: "Dining Collection",
  },
  {
    id: 7,
    url: "/exclusiveCollection/E7.png",
    alt: "Minimalist Coffee Table",
  },
  {
    id: 8,
    url: "/exclusiveCollection/E8.png",
    alt: "Cabinet & Console",
  },
];

const ExclusiveCollection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animation only once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="exclusive-collection"
      className={`exclusive-section ${
        isVisible ? "scroll-reveal-active" : ""
      }`}
    >
      <div className="exclusive-masonry">

        {/* Heading */}
        <div className="exclusive-title-block masonry-item">
          <h2 className="exc-main-title">
            EXCLUSIVE
            <br />
            COLLECTION
          </h2>

          <span className="exc-year">2026</span>
        </div>

        {/* Images */}
        {exclusiveImages.map((image) => (
          <div
            className="exc-img-card masonry-item"
            key={image.id}
          >
            <img
              src={image.url}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default ExclusiveCollection;