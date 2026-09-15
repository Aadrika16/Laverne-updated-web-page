import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const categoriesData = [
  /* =========================================================
     BEDS
  ========================================================= */
  {
    id: "beds",
    title: "Beds",
    description: "Beautifully crafted beds designed for comfort, character and timeless living.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Modern Wooden",
        description: "Clean wooden forms crafted for warm contemporary bedrooms.",
        image: "/beds/bed1.png"
      },
      {
        id: 2,
        title: "2. Modern Upholstered",
        description: "Soft upholstered comfort with a refined modern silhouette.",
        image: "/beds/bed2.png"
      },
      {
        id: 3,
        title: "3. Modern Classic",
        description: "Timeless detailing balanced with contemporary proportions.",
        image: "/beds/bed3.png"
      },
      {
        id: 4,
        title: "4. Classic Carved",
        description: "Intricate craftsmanship inspired by traditional furniture design.",
        image: "/beds/bed10.png"
      },
      {
        id: 5,
        title: "5. Classic Wooden",
        description: "Natural wood craftsmanship with enduring classic appeal.",
        image: "/beds/bed8.png"
      },
      {
        id: 6,
        title: "6. Bunk Beds",
        description: "Smart space-saving beds designed for playful shared rooms.",
        image: "/beds/bed6.png"
      },
      {
        id: 7,
        title: "7. Custom Beds",
        description: "Personalized bed designs created around your space and style.",
        image: "/beds/bed9.png"
      }
    ]
  },

  /* =========================================================
     SOFAS & SEATING
  ========================================================= */
  {
    id: "sofas",
    title: "Sofas & Seating",
    description: "Statement seating designed around comfort, proportion and refined living.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 2,
        title: "2. Modern Wooden",
        description: "Streamlined wooden seating with a warm contemporary character.",
        image: "/sofas/s1.png"
      },
      {
        id: 3,
        title: "3. Modern Classic",
        description: "Elegant seating blending classic detail with modern comfort.",
        image: "/sofas/s2.png"
      },
      {
        id: 5,
        title: "5. Classic Carved",
        description: "Gracefully carved seating crafted with timeless sophistication.",
        image: "/sofas/s3.png"
      }
    ]
  },

  /* =========================================================
     DINING
  ========================================================= */
  {
    id: "dining",
    title: "Dining",
    description: "Thoughtful dining furniture created for gatherings, conversations and everyday moments.",
    image:
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Modern Dining",
        description: "Contemporary dining crafted for effortless everyday gatherings.",
        image: "/dining/d1.png"
      },
      {
        id: 2,
        title: "2. Modern Classic",
        description: "Classic elegance refined for modern dining spaces.",
        image: "/dining/d2.png"
      },
      {
        id: 3,
        title: "3. Classic Dining",
        description: "Traditional dining furniture with enduring craftsmanship.",
        image: "/dining/d3.png"
      },
      {
        id: 4,
        title: "4. Dining Tables",
        description: "Statement tables designed to anchor memorable gatherings.",
        image:
          "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        title: "5. Dining Chairs",
        description: "Comfortable dining chairs shaped with refined proportions.",
        image: "/dining/d4.png"
      }
    ]
  },

  /* =========================================================
     ARMCHAIRS
  ========================================================= */
  {
    id: "carpets & flooring",
    title: "Carpets & Flooring",
    description: "Curated flooring and carpets designed to ground interiors with warmth, texture and character.",
    image:
      "./c&f/c&f1.webp",

     items: [
      {
        id: 1,
        title: "1. Ocean Flow Rug",
        description: "A rug that evokes the gentle movement of ocean waves, bringing a sense of calm and serenity to your space.",
        image:
          "./c&f/c&f1.webp"
      },
      {
        id: 2,
        title: "2. Soft Geometry Rug",
        description: "A rug with a subtle geometric pattern that adds visual interest without overwhelming the space.",
        image:
          "./c&f/c&f2.webp"
      },
      {
        id: 3,
        title: "3. Warm Wave Rug",
        description: "A rug that brings a sense of warmth and movement to any room.",
        image:
          "./c&f/c&f3.webp"
      },
      {
        id: 4,
        title: "4. Modern Grid Carpet",
        description: "A modern take on the classic grid pattern, perfect for adding structure to any room.",
        image:
          "./c&f/c&f4.webp"
      },
      {
        id: 5,
        title: "5. Geo Office Carpet",
        description: "A carpet with a geometric pattern that adds a contemporary touch to office spaces.",
        image:
          "./c&f/c&f5.webp"
      }
    ]
  },

  /* =========================================================
     SWINGS
  ========================================================= */
  {
    id: "swings",
    title: "Swings",
    description: "Elegant swings designed to bring comfort, movement and charm into your space.",
    image:
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Indoor Swings",
        description: "Relaxed indoor seating with a playful sense of movement.",
        image:
          "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "2. Outdoor Swings",
        description: "Comfortable swings designed for relaxed outdoor living.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "3. Wooden Swings",
        description: "Natural wooden craftsmanship with warm traditional character.",
        image:
          "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "4. Upholstered Swings",
        description: "Soft upholstered swings created for elevated comfort.",
        image:
          "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        title: "5. Classic Swings",
        description: "Timeless swing designs inspired by traditional elegance.",
        image:
          "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 6,
        title: "6. Custom Swings",
        description: "Bespoke swings tailored to your interior or outdoor space.",
        image:
          "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },

  /* =========================================================
     MIRRORS
  ========================================================= */
  {
    id: "mirrors",
    title: "Mirrors",
    description: "Decorative mirrors designed to add light, depth and distinctive character.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Modern",
        description: "Clean contemporary mirrors with refined minimalist detailing.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "2. Modern Classic",
        description: "Elegant mirrors combining traditional form with modern restraint.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "3. Classic",
        description: "Timeless mirror designs with graceful decorative details.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "4. Carved",
        description: "Artfully carved frames crafted as decorative focal points.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        title: "5. Statement Mirrors",
        description: "Bold mirrors designed to transform walls into focal points.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 6,
        title: "6. Console & Mirror Sets",
        description: "Coordinated compositions created for elegant entryways and rooms.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },

  /* =========================================================
     TEA & COFFEE TABLES
  ========================================================= */
  {
    id: "furniture/curtains",
    title: "Furniture & Curtains",
    description: "Elegant curtains designed to add warmth, privacy, and style to any room.",
    image:
      "./f&c/c1.webp",

    items: [
      {
        id: 1,
        title: "1. Classic Beige Drapes",
        description: "Elegant curtains in a classic beige tone, perfect for adding warmth and sophistication to any room.",
        image:
          "./f&c/c1.webp"
      },
      {
        id: 2,
        title: "2. Sage Serenity Curtains",
        description: "Elegant curtains in a soothing sage green tone, perfect for creating a tranquil atmosphere.",
        image:
          "./f&c/c2.webp"
      },
      {
        id: 3,
        title: "3. Warm Bronze Elegance",
        description: "Elegant curtains in a warm bronze tone, perfect for adding a touch of luxury to any room.",
        image:
          "./f&c/c3.webp"
      },
      {
        id: 4,
        title: "4. Teal & Neutral Harmony",
        description: "A modern take on the classic grid pattern, perfect for adding structure to any room.",
        image:
          "./f&c/c6.webp"
      },
      {
        id: 5,
        title: "5. Golden Luxe Drapes",
        description: "Elegant curtains in a luxurious golden tone, perfect for adding a touch of opulence to any room.",
        image:
          "./f&c/c5.webp"
      }
    ]
  },

  /* =========================================================
     CABINETS & CONSOLES
  ========================================================= */
  {
    id: "cabinets",
    title: "Cabinets & Consoles",
    description: "Elegant storage pieces balancing everyday function with considered design.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Modern Cabinets",
        description: "Streamlined storage crafted for clean contemporary interiors.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "2. Modern Classic",
        description: "Refined cabinetry combining classic detail with modern proportions.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "3. Classic",
        description: "Timeless cabinetry designed with traditional elegance.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "4. Carved",
        description: "Artisanal carved cabinetry with distinctive handcrafted details.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        title: "5. Console Tables",
        description: "Slim statement tables designed for elegant transitional spaces.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 6,
        title: "6. Display Cabinets",
        description: "Elegant displays created to showcase treasured collections.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 7,
        title: "7. Bar Cabinets",
        description: "Sophisticated storage designed for refined entertaining spaces.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 8,
        title: "8. Custom Storage",
        description: "Tailored storage solutions designed around your exact requirements.",
        image:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },

  /* =========================================================
     DEEWAN
  ========================================================= */
  {
    id: "deewan",
    title: "Deewan",
    description: "Comfortable deewans reimagined through timeless craftsmanship and modern refinement.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Modern",
        description: "Clean-lined deewans shaped for relaxed contemporary living.",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "2. Modern Classic",
        description: "Traditional comfort refined with modern proportions and details.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "3. Classic",
        description: "Graceful traditional seating with timeless cultural character.",
        image:
          "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "4. Upholstered",
        description: "Plush upholstered seating designed for relaxed everyday comfort.",
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        title: "5. Wooden",
        description: "Warm wooden craftsmanship shaped with timeless simplicity.",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 6,
        title: "6. Custom Deewan",
        description: "Bespoke deewans tailored to your interior and lifestyle.",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },

  /* =========================================================
     INTERIORS
  ========================================================= */
  {
    id: "interiors",
    title: "Interiors",
    description: "Complete interior solutions thoughtfully designed around people, purpose and place.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Kids Interiors",
        description: "Creative spaces designed around play, learning and growth.",
        image:
          "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "2. School Interiors",
        description: "Engaging learning environments designed for comfort and curiosity.",
        image:
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "3. Store & Retail Interiors",
        description: "Immersive retail environments shaped around brand experience.",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "4. Showroom Interiors",
        description: "Refined display spaces designed to showcase products beautifully.",
        image:
          "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        title: "5. Office Interiors",
        description: "Productive workplaces balanced with comfort and contemporary design.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 6,
        title: "6. Custom Residential Interiors",
        description: "Personalized homes crafted around your lifestyle and identity.",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 7,
        title: "7. Hospitality & Leisure Interiors",
        description: "Welcoming environments created for memorable guest experiences.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 8,
        title: "8. Furnishings & Curtains",
        description: "Layered textiles and furnishings that complete every room.",
        image:
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 9,
        title: "9. Flooring & Carpets",
        description: "Thoughtful flooring solutions that ground interiors beautifully.",
        image:
          "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 10,
        title: "10. Kitchens",
        description: "Functional kitchens crafted for elegant everyday living.",
        image:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 11,
        title: "11. Wardrobes",
        description: "Tailored wardrobe systems designed for organized luxury.",
        image:
          "https://images.unsplash.com/photo-1558997594-818164789528?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 12,
        title: "12. Libraries",
        description: "Custom libraries designed for books, objects and quiet moments.",
        image:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 13,
        title: "13. Built-in Cabinets",
        description: "Integrated cabinetry designed for seamless everyday storage.",
        image:
          "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 14,
        title: "14. Pool & Billiards Rooms",
        description: "Sophisticated leisure spaces created for play and entertaining.",
        image:
          "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 15,
        title: "15. Custom Interior Projects",
        description: "Bespoke spaces developed from concept through final detail.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },

  /* =========================================================
     OUTDOORS
  ========================================================= */
  {
    id: "outdoors",
    title: "Outdoors",
    description: "Thoughtful outdoor spaces designed for relaxation, connection and everyday living.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Terrace",
        description: "Inviting terrace spaces designed for relaxed outdoor moments.",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "2. Backyards",
        description: "Beautiful backyard environments created for living and gathering.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },

  /* =========================================================
     ARTIFACTS & DECORS
  ========================================================= */
  {
    id: "artifacts-decors",
    title: "Artifacts and Decors",
    description: "Curated decorative pieces designed to add character, warmth and individuality.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",

    items: [
      {
        id: 1,
        title: "1. Artifacts",
        description: "Distinctive objects chosen to bring personality into interiors.",
        image:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "2. Decors",
        description: "Thoughtful accents that complete and elevate your space.",
        image:
          "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];


/* =========================================================
   COMPONENT
========================================================= */

const CuratedCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [mainCardsPage, setMainCardsPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

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
     MAIN CATEGORY PAGINATION
  ========================================================= */

  const mainItemsPerPage = 3;

  const mainTotalPages = Math.ceil(
    categoriesData.length / mainItemsPerPage
  );

  const mainStartIndex =
    mainCardsPage * mainItemsPerPage;

  const visibleMainCards = categoriesData.slice(
    mainStartIndex,
    mainStartIndex + mainItemsPerPage
  );


  /* =========================================================
     SUB CATEGORY PAGINATION
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
     SUB NAVIGATION
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


  /* =========================================================
     MAIN NAVIGATION
  ========================================================= */

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


  /* =========================================================
     OPEN CATEGORY
  ========================================================= */

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActivePage(0);
  };


  /* =========================================================
     BACK
  ========================================================= */

  const handleBack = () => {
    setSelectedCategory(null);
    setActivePage(0);
  };


  return (
    <section
      className={`curated-categories-section ${
        isVisible
          ? 'scroll-reveal-active'
          : ''
      }`}
      id="curated-catalog"
      ref={sectionRef}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="main-catalog-header">

        <span className="main-subtitle">
          Handpicked designs. Timeless style. Made for you.
        </span>

        <h2>
          {selectedCategory
            ? selectedCategory.title.toUpperCase()
            : "CURATED COLLECTIONS"}
        </h2>


        {/* CATEGORY DESCRIPTION */}

        {selectedCategory && (
          <p className="selected-category-description">
            {selectedCategory.description}
          </p>
        )}


        <div className="catalog-header-divider" />


        {selectedCategory && (
          <button
            type="button"
            className="back-to-main-btn"
            onClick={handleBack}
          >
            ← Back to All Collections
          </button>
        )}

      </div>


      {/* =====================================================
          MAIN CATEGORIES
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

              {visibleMainCards.map((cat) => (

                <article
                  className="signature-card main-cat-card"
                  key={cat.id}
                  onClick={() =>
                    handleCategoryClick(cat)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      handleCategoryClick(cat);
                    }
                  }}
                >

                  <div className="signature-img-wrapper">

                    <img
                      src={cat.image}
                      alt={cat.title}
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
                      {cat.title}
                    </h3>


                    {/* MAIN CATEGORY DESCRIPTION */}

                    <p className="category-card-description">
                      {cat.description}
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


          {/* MAIN PAGINATION */}

          {mainTotalPages > 1 && (

            <div className="signature-dots">

              {Array.from({
                length: mainTotalPages
              }).map((_, dotIdx) => (

                <button
                  type="button"
                  key={dotIdx}
                  className={`dot ${
                    dotIdx === mainCardsPage
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setMainCardsPage(dotIdx)
                  }
                  aria-label={`Collection page ${dotIdx + 1}`}
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
                  ? "two-items-grid"
                  : ""
              }`}
            >

              {visibleItems.map((item) => (

                <article
                  className="signature-card"
                  key={`${selectedCategory.id}-${item.id}`}
                >

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


                    {/* ITEM DESCRIPTION */}

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


          {/* SUB PAGINATION */}

          {totalPages > 1 && (

            <div className="signature-dots">

              {Array.from({
                length: totalPages
              }).map((_, dotIdx) => (

                <button
                  type="button"
                  key={dotIdx}
                  className={`dot ${
                    dotIdx === activePage
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActivePage(dotIdx)
                  }
                  aria-label={`Item page ${dotIdx + 1}`}
                />

              ))}

            </div>

          )}

        </div>

      )}

    </section>
  );
};

export default CuratedCategories;