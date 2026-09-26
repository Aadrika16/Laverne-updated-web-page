import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const signatureItems = [
  /* =========================================================
     TREE HOUSE / PLAY HOUSE
  ========================================================= */
  {
    id: 'tree-house',
    title: 'Tree House / Play House',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description:
      'Imaginative outdoor retreats crafted for endless childhood adventures.',
    image: '/mobileviewcarousals/Treehousefinal.png',

    items: [
      {
        id: 1,
        title: '1. Custom Tree House Exterior',
        description:
          'Bespoke outdoor structures designed for imaginative play.',
        image: '/tree&playhouse/p2.webp'
      },
      {
        id: 2,
        title: '2. Playhouse View',
        description:
          'A playful retreat made for little everyday adventures.',
        image: '/mobileviewcarousals/Treehousefinal.png'
      },
      {
        id: 3,
        title: '3. Tree House with Slide',
        description:
          'Elevated play combined with an exciting slide experience.',
        image: '/tree&playhouse/p4.webp'
      },
      {
        id: 4,
        title: '4. Tree House with Rope Ladder',
        description:
          'Adventure-inspired climbing designed to encourage active play.',
        image: '/tree&playhouse/p5.webp'
      },
      {
        id: 5,
        title: '5. Tree House with Swing',
        description:
          'A charming play retreat with space to swing and explore.',
        image: '/tree&playhouse/p6.webp'
      },
      {
        id: 6,
        title: '6. Tree House with Slide',
        description:
          'Elevated play combined with an exciting slide experience.',
        image: '/tree&playhouse/p3.webp'
      }
    ]
  },

  /* =========================================================
     INDOOR ACTIVITY LOFT
  ========================================================= */
  {
    id: 'indoor-loft',
    title: 'Indoor Activity Loft',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description:
      'Playful indoor environments designed to inspire movement and imagination.',
    image: '/indoor/indoor22.webp',

    items: [
      {
        id: 1,
        title: '1. Playhouse & Climbing Loft',
        description:
          'A playful loft combining climbing, discovery and imagination.',
        image: '/indoor/indoor-006.webp'
      },
      {
        id: 2,
        title: '2. Little Explorer Loft',
        description:
          'A cozy elevated space made for curious little explorers.',
        image: '/indoor/indoor-008.webp'
      },
      {
        id: 3,
        title: '3. Interactive Climbing Hub',
        description:
          'An engaging activity zone created for active indoor play.',
        image: '/indoor/indoor-009.webp'
      },
      {
        id: 4,
        title: '4. Multi-Level Play Loft',
        description:
          'Layered play spaces designed for adventure at every level.',
        image: '/indoor/indoor-011.webp'
      },
      {
        id: 5,
        title: '5. Signature Indoor Playhouse',
        description:
          'A beautifully crafted hideaway for creative everyday play.',
        image: '/indoor/indoor-013.webp'
      },
      {
        id: 6,
        title: '6. Adventure Loft Playground',
        description:
          'A dynamic indoor playground built around movement and discovery.',
        image: '/indoor/indoor-001.webp'
      },
      {
        id: 7,
        title: '7. Climb & Explore Zone',
        description:
          'A compact adventure space for climbing and exploration.',
        image: '/indoor/indoor-002.webp'
      },
      {
        id: 8,
        title: '8. Elevated Playhouse Retreat',
        description:
          'A raised retreat creating a world of its own.',
        image: '/indoor/indoor-003.webp'
      },
      {
        id: 9,
        title: '9. Indoor Activity Loft',
        description:
          'A multifunctional loft designed for energetic indoor play.',
        image: '/indoor/indoor-004.webp'
      },
      {
        id: 10,
        title: '10. Climbing Wall Adventure',
        description:
          'A playful climbing feature that builds confidence and movement.',
        image: '/indoor/indoor-005.webp'
      },
      {
        id: 11,
        title: '11. Slide & Rope Adventure',
        description:
          'Slides and ropes come together for endless active fun.',
        image: '/indoor/indoor-007.webp'
      },
      {
        id: 12,
        title: '12. Indoor Adventure Gym',
        description:
          'A creative activity gym designed for movement and exploration.',
        image: '/indoor/indoor-010.webp'
      },
      {
        id: 13,
        title: '13. Custom Tree House Exterior',
        description:
          'A handcrafted structure bringing outdoor adventure indoors.',
        image: '/playyhouse/play1.png'
      },
      {
        id: 14,
        title: '14. Playhouse View',
        description:
          'A charming play space made for imaginative moments.',
        image: '/playyhouse/play2.png'
      },
      {
        id: 15,
        title: '15. Tree House with Slide',
        description:
          'A playful structure combining climbing and sliding adventures.',
        image: '/playyhouse/play3.png'
      },
      {
        id: 16,
        title: '16. Tree House with Rope Ladder',
        description:
          'A climbing-focused design made for active young adventurers.',
        image: '/playyhouse/play4.png'
      },
      {
        id: 17,
        title: '17. Tree House with Swing',
        description:
          'A playful retreat designed for swinging and exploring.',
        image: '/playyhouse/play5.png'
      }
    ]
  },

  /* =========================================================
     OUTDOOR ACTIVITY LOFT
  ========================================================= */
  {
    id: 'outdoor-loft',
    title: 'Outdoor Activity Loft',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description:
      'Purposeful outdoor play structures created for movement and discovery.',
    image: '/outdoor/outdoor-03.png',

    items: [
      {
        id: 1,
        title: '1. Outdoor Discovery Structure',
        description:
          'A creative outdoor structure built for exploration and play.',
        image: '/outdoor/outdoor-01.png'
      },
      {
        id: 2,
        title: '2. Creative Play Space',
        description:
          'An imaginative environment designed for open-ended outdoor play.',
        image: '/outdoor/outdoor-02.png'
      },
      {
        id: 3,
        title: '3. Outdoor Adventure Loft',
        description:
          'An elevated outdoor escape created for active adventures.',
        image: '/outdoor/outdoor-03.png'
      },
      {
        id: 4,
        title: '4. Elevated Play Structure',
        description:
          'A raised play environment encouraging movement and exploration.',
        image: '/mobileviewcarousals/Treehousefinal.png'
      },
      {
        id: 5,
        title: '5. Outdoor Climbing Zone',
        description:
          'A dedicated climbing space designed for energetic outdoor play.',
        image: '/outdoor/outdoor-05.png'
      },
      {
        id: 6,
        title: '6. Adventure Play Tower',
        description:
          'A statement play tower built for climbing and discovery.',
        image: '/outdoor/outdoor-06.png'
      },
      {
        id: 7,
        title: '7. Outdoor Explorer Hub',
        description:
          'A playful destination designed for curious young explorers.',
        image: '/outdoor/outdoor-07.png'
      },
      {
        id: 8,
        title: '8. Nature-Inspired Play Area',
        description:
          'A playful environment thoughtfully connected with the outdoors.',
        image: '/outdoor/outdoor-08.png'
      },
      {
        id: 9,
        title: '9. Outdoor Activity Zone',
        description:
          'An active play zone designed for movement and creativity.',
        image: '/outdoor/outdoor-09.png'
      },
      {
        id: 10,
        title: '10. Kids Adventure Playground',
        description:
          'A joyful playground designed for energetic everyday adventures.',
        image: '/outdoor/outdoor-10.png'
      },
      {
        id: 11,
        title: '11. Outdoor Imagination Space',
        description:
          'A flexible outdoor setting where imagination leads the play.',
        image: '/outdoor/outdoor-11.png'
      },
      {
        id: 12,
        title: '12. Multi-Level Play Area',
        description:
          'Multiple levels create more ways to climb and explore.',
        image: '/outdoor/outdoor-12.png'
      },
      {
        id: 13,
        title: '13. Outdoor Exploration Zone',
        description:
          'A discovery-led space encouraging active outdoor experiences.',
        image: '/outdoor/outdoor-13.png'
      },
      {
        id: 14,
        title: '14. Adventure Play Pavilion',
        description:
          'A beautifully crafted pavilion designed around adventurous play.',
        image: '/outdoor/outdoor-14.png'
      },
      {
        id: 15,
        title: '15. Outdoor Discovery Hub',
        description:
          'A playful outdoor hub created for exploration and connection.',
        image: '/outdoor/outdoor-15.png'
      },
      {
        id: 16,
        title: '16. Active Play Playground',
        description:
          'An energetic playground encouraging movement, balance and confidence.',
        image: '/outdoor/outdoor-16.png'
      }
    ]
  },

  /* =========================================================
     KIDS INTERIOR
  ========================================================= */
  {
    id: 'kids-interior',
    title: 'Kids Interior',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description:
      'Thoughtful interiors designed around comfort, creativity and childhood.',
    image: '/carousalimages/KidsInterior.png',

    items: [
      {
        id: 1,
        title: '1. Whimsical Kids Room',
        description:
          'A playful room designed to make imagination feel limitless.',
        image:
          '/kids-interior-space-images/kids_room_01_enhanced_zoomout.webp'
      },
      {
        id: 2,
        title: '2. Creative Playful Space',
        description:
          'A vibrant interior balancing creativity, comfort and functionality.',
        image:
          '/kids-interior-space-images/kids_room_02_enhanced_zoomout.webp'
      },
      {
        id: 3,
        title: '3. Playful Room Design',
        description:
          'A joyful room where thoughtful design meets everyday play.',
        image:
          '/kids-interior-space-images/kids_room_01_enhanced_zoomout.webp'
      },
      {
        id: 4,
        title: '4. Creative Kids Room',
        description:
          'A personalized space created for learning, play and rest.',
        image:
          '/kids-interior-space-images/kids_room_02_enhanced_zoomout.webp'
      },
      {
        id: 5,
        title: '5. Imaginative Play Area',
        description:
          'A playful interior encouraging creativity and independent exploration.',
        image:
          '/kids-interior-space-images/kids_room_03_enhanced_zoomout.webp'
      },
      {
        id: 6,
        title: '6. Whimsical Kids Room',
        description:
          'Soft details and playful forms create a magical retreat.',
        image:
          '/kids-interior-space-images/kids_room_04_enhanced_zoomout.webp'
      },
      {
        id: 7,
        title: '7. Cozy Kids Room',
        description:
          'A warm and functional room designed for growing children.',
        image:
          '/kids-interior-space-images/kids_room_06_enhanced_zoomout.webp'
      }
    ]
  },

  /* =========================================================
     CUSTOM MADE
  ========================================================= */
  {
    id: 'custom-made',
    title: 'Custom Made',
    subtitle: 'OUR SIGNATURE COLLECTION',
    description:
      'Bespoke furniture and interiors tailored uniquely to your space.',
    image: '/carousalimages/CustomMade.png',

    items: [
      {
        id: 1,
        title: '1. Custom Furniture Design',
        description:
          'Furniture thoughtfully created around your space and lifestyle.',
        image: '/custom-made/custom_made_01.webp'
      },
      {
        id: 2,
        title: '2. Personalized Home Decor',
        description:
          'Personalized details that bring warmth and individuality home.',
        image: '/custom-made/custom_made_02.webp'
      },
      {
        id: 3,
        title: '3. Tailored Interior Solutions',
        description:
          'Smart interiors designed to make every corner work beautifully.',
        image: '/custom-made/custom_made_03.webp'
      },
      {
        id: 4,
        title: '4. Unique Custom Designs',
        description:
          'Distinctive spaces crafted around your individual requirements.',
        image: '/custom-made/custom_made_04.webp'
      },
      {
        id: 5,
        title: '5. Bespoke Home Furnishings',
        description:
          'Refined storage and dressing solutions tailored to your style.',
        image: '/custom-made/custom_made_05.webp'
      },
      {
        id: 6,
        title: '6. Classic Upholstered',
        description:
          'Timeless upholstered pieces created for comfort and elegance.',
        image: '/dining/d3.png'
      },
      {
        id: 7,
        title: '7. Sectional Sofas',
        description:
          'Flexible modular seating made for contemporary everyday living.',
        image: '/sofas/s4.png'
      },
      {
        id: 8,
        title: '8. Custom Seating',
        description:
          'Bespoke seating crafted for comfort, proportion and style.',
        image: '/sofas/s5.png'
      }
    ]
  }
];

/* =========================================================
   COLLECTIONS COMPONENT
========================================================= */

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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
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

  /* =========================================================
     MAIN COLLECTION PAGINATION
  ========================================================= */

  const mainItemsPerPage = 3;

  const mainTotalPages = Math.ceil(
    signatureItems.length / mainItemsPerPage
  );

  const mainStartIndex =
    mainCardsPage * mainItemsPerPage;

  const visibleMainCards = signatureItems.slice(
    mainStartIndex,
    mainStartIndex + mainItemsPerPage
  );

  /* =========================================================
     SUB COLLECTION PAGINATION
  ========================================================= */

  const activeSubItems =
    selectedCategory?.items || [];

  const itemsPerPage = 3;

  const totalPages =
    activeSubItems.length > 0
      ? Math.ceil(activeSubItems.length / itemsPerPage)
      : 0;

  const isScrollable =
    totalPages > 1;

  const startIndex =
    activePage * itemsPerPage;

  const visibleItems =
    activeSubItems.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  /* =========================================================
     CONTROLS
  ========================================================= */

  const handleSubPrev = () => {
    if (totalPages <= 1) return;

    setActivePage((prev) =>
      prev === 0
        ? totalPages - 1
        : prev - 1
    );
  };

  const handleSubNext = () => {
    if (totalPages <= 1) return;

    setActivePage((prev) =>
      prev === totalPages - 1
        ? 0
        : prev + 1
    );
  };

  const handleMainPrev = () => {
    setMainCardsPage((prev) =>
      prev === 0
        ? mainTotalPages - 1
        : prev - 1
    );
  };

  const handleMainNext = () => {
    setMainCardsPage((prev) =>
      prev === mainTotalPages - 1
        ? 0
        : prev + 1
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActivePage(0);
  };

  const handleBackToCollections = () => {
    setSelectedCategory(null);
    setActivePage(0);
  };

  return (
    <section
      className={`collections-section ${
        isVisible
          ? 'scroll-reveal-active'
          : ''
      }`}
      id="collections"
      ref={sectionRef}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="signature-header">

        <span className="section-subtitle">
          {selectedCategory
            ? selectedCategory.subtitle
            : 'OUR SIGNATURE COLLECTION'}
        </span>

        <h2>
          {selectedCategory
            ? selectedCategory.title.toUpperCase()
            : 'Signature Collection'}
        </h2>

        {!selectedCategory && (
          <p className="section-desc">
            Curated spaces, crafted with intention.
            <br />
            Explore our signature offerings designed to
            inspire, engage and elevate.
          </p>
        )}

        {selectedCategory?.description && (
          <p className="selected-category-description">
            {selectedCategory.description}
          </p>
        )}

        <div className="catalog-header-divider" />

        {selectedCategory && (
          <button
            type="button"
            className="back-to-main-btn"
            onClick={handleBackToCollections}
          >
            ← Back to All Collections
          </button>
        )}

      </div>

      {/* =====================================================
          MAIN COLLECTION VIEW
      ===================================================== */}

      {!selectedCategory ? (
        <div className="main-categories-view">

          <div className="signature-grid-wrapper">

            {mainTotalPages > 1 && (
              <button
                type="button"
                className="carousel-arrow left-arrow"
                onClick={handleMainPrev}
                aria-label="Previous collections"
              >
                ←
              </button>
            )}

            <div className="signature-grid">

              {visibleMainCards.map((category) => (
                <article
                  className="signature-card main-cat-card"
                  key={category.id}
                  role="button"
                  tabIndex={0}

                  onClick={() =>
                    handleCategoryClick(category)
                  }

                  onKeyDown={(event) => {
                    if (
                      event.key === 'Enter' ||
                      event.key === ' '
                    ) {
                      event.preventDefault();

                      handleCategoryClick(category);
                    }
                  }}
                >

                  {/* SAME IMAGE WRAPPER FOR EVERY CARD */}

                  <div className="signature-img-wrapper">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="signature-content">

                    <div className="signature-icon-circle">
                      <span className="icon-symbol">
                        ✦
                      </span>
                    </div>

                    <h3>
                      {category.title}
                    </h3>

                    <p className="category-card-description">
                      {category.description}
                    </p>

                    <span className="explore-subtext">
                      Explore Subsections →
                    </span>

                  </div>

                </article>
              ))}

            </div>

            {mainTotalPages > 1 && (
              <button
                type="button"
                className="carousel-arrow right-arrow"
                onClick={handleMainNext}
                aria-label="Next collections"
              >
                →
              </button>
            )}

          </div>

          {mainTotalPages > 1 && (
            <div className="signature-dots">

              {Array.from({
                length: mainTotalPages
              }).map((_, index) => (

                <button
                  type="button"
                  key={index}

                  className={`dot ${
                    index === mainCardsPage
                      ? 'active'
                      : ''
                  }`}

                  onClick={() =>
                    setMainCardsPage(index)
                  }

                  aria-label={`Go to collection page ${
                    index + 1
                  }`}
                />

              ))}

            </div>
          )}

        </div>

      ) : (

        /* =====================================================
           SUB CATEGORY VIEW
        ===================================================== */

        <div className="category-block active-subview">

          <div className="signature-grid-wrapper">

            {isScrollable && (
              <button
                type="button"
                className="carousel-arrow left-arrow"
                onClick={handleSubPrev}
                aria-label="Previous items"
              >
                ←
              </button>
            )}

            <div
              className={`signature-grid ${
                activeSubItems.length <= 2
                  ? 'two-items-grid'
                  : ''
              }`}
            >

              {visibleItems.map((item) => (

                <article
                  className="signature-card"
                  key={`${selectedCategory.id}-${item.id}`}
                >

                  {/* SAME IMAGE WRAPPER FOR EVERY SUB CARD */}

                  <div className="signature-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="signature-content">

                    <div className="signature-icon-circle">
                      <span className="icon-symbol">
                        ✦
                      </span>
                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p className="item-description">
                      {item.description}
                    </p>

                  </div>

                </article>

              ))}

            </div>

            {isScrollable && (
              <button
                type="button"
                className="carousel-arrow right-arrow"
                onClick={handleSubNext}
                aria-label="Next items"
              >
                →
              </button>
            )}

          </div>

          {totalPages > 1 && (
            <div className="signature-dots">

              {Array.from({
                length: totalPages
              }).map((_, index) => (

                <button
                  type="button"
                  key={index}

                  className={`dot ${
                    index === activePage
                      ? 'active'
                      : ''
                  }`}

                  onClick={() =>
                    setActivePage(index)
                  }

                  aria-label={`Go to page ${
                    index + 1
                  }`}
                />

              ))}

            </div>
          )}

        </div>

      )}

    </section>
  );
};

export default Collections;