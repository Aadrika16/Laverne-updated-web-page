import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// Main Category Cards including Outdoors and Artifacts & Decors
const categoriesData = [
  {
    id: "beds",
    title: "Beds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Modern Wooden", image: "/beds/bed1.png" },
      { id: 2, title: "2. Modern Upholstered", image: "/beds/bed2.png" },
      { id: 3, title: "3. Modern Classic", image: "/beds/bed3.png" },
      { id: 4, title: "4. Classic Carved", image: "/beds/bed10.png" },
      { id: 5, title: "5. Classic Wooden", image: "/beds/bed8.png" },
      { id: 6, title: "6. Bunk Beds", image: "/beds/bed6.png" },
      { id: 7, title: "7. Custom Beds", image: "/beds/bed9.png" }
    ]
  },
  {
    id: "sofas",
    title: "Sofas & Seating",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 2, title: "2. Modern Wooden", image: "/sofas/s1.png" },
      { id: 3, title: "3. Modern Classic", image: "/sofas/s2.png" },
      { id: 4, title: "4. Classic Upholstered", image: "/dining/d3.png" },
      { id: 5, title: "5. Classic Carved", image: "/sofas/s3.png" },
      { id: 6, title: "6. Sectional Sofas", image: "/sofas/s4.png" },
      { id: 7, title: "7. Custom Seating", image: "/sofas/s5.png" }
    ]
  },
  {
    id: "dining",
    title: "Dining",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Modern Dining", image: "/dining/d1.png" },
      { id: 2, title: "2. Modern Classic", image: "/dining/d2.png" },
      { id: 3, title: "3. Classic Dining", image: "/dining/d3.png" },
      { id: 4, title: "4. Dining Tables", image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "5. Dining Chairs", image: "/dining/d4.png" },
    ]
  },
  {
    id: "armchairs",
    title: "Armchairs",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Modern", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Modern Classic", image: "/armchairs/a1.png" },
      { id: 3, title: "3. Classic", image: "/armchairs/a2.png" },
      { id: 6, title: "6. Accent Chairs", image: "/armchairs/a3.png" }
    ]
  },
  {
    id: "swings",
    title: "Swings",
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Indoor Swings", image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Outdoor Swings", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
      { id: 3, title: "3. Wooden Swings", image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800" },
      { id: 4, title: "4. Upholstered Swings", image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "5. Classic Swings", image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800" },
      { id: 6, title: "6. Custom Swings", image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "mirrors",
    title: "Mirrors",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Modern", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Modern Classic", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
      { id: 3, title: "3. Classic", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
      { id: 4, title: "4. Carved", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "5. Statement Mirrors", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
      { id: 6, title: "6. Console & Mirror Sets", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "tea-tables",
    title: "Tea & Coffee Tables",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Modern", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Modern Classic", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
      { id: 3, title: "3. Classic", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
      { id: 4, title: "4. Carved", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "5. Statement Tables", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
      { id: 6, title: "6. Side Tables", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
      { id: 7, title: "7. Nesting Tables", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "cabinets",
    title: "Cabinets & Consoles",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Modern Cabinets", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Modern Classic", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
      { id: 3, title: "3. Classic", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
      { id: 4, title: "4. Carved", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "5. Console Tables", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
      { id: 6, title: "6. Display Cabinets", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
      { id: 7, title: "7. Bar Cabinets", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" },
      { id: 8, title: "8. Custom Storage", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "deewan",
    title: "Deewan",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Modern", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Modern Classic", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" },
      { id: 3, title: "3. Classic", image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&q=80&w=800" },
      { id: 4, title: "4. Upholstered", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "5. Wooden", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800" },
      { id: 6, title: "6. Custom Deewan", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "interiors",
    title: "Interiors",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Kids Interiors", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. School Interiors", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800" },
      { id: 3, title: "3. Store & Retail Interiors", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
      { id: 4, title: "Showroom Interiors", image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "Office Interiors", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { id: 6, title: "Custom Residential Interiors", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
      { id: 7, title: "Hospitality & Leisure Interiors", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" },
      { id: 8, title: "Furnishings & Curtains", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" },
      { id: 9, title: "Flooring & Carpets", image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800" },
      { id: 10, title: "Kitchens", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
      { id: 11, title: "Wardrobes", image: "https://images.unsplash.com/photo-1558997594-818164789528?auto=format&fit=crop&q=80&w=800" },
      { id: 12, title: "Libraries", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" },
      { id: 13, title: "Built-in Cabinets", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800" },
      { id: 14, title: "Pool & Billiards Rooms", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800" },
      { id: 15, title: "Custom Interior Projects", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" }
    ]
  },
 {
    id: "outdoors",
    title: "Outdoors",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Terrace", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Backyards", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  {
    id: "artifacts-decors",
    title: "Artifacts and Decors",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    items: [
      { id: 1, title: "1. Artifacts", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "2. Decors", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" }
    ]
  }
];

const CuratedCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(0);
  const [mainCardsPage, setMainCardsPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const mainItemsPerPage = 3;
  const mainTotalPages = Math.ceil(categoriesData.length / mainItemsPerPage);
  const mainStartIndex = mainCardsPage * mainItemsPerPage;
  const visibleMainCards = categoriesData.slice(mainStartIndex, mainStartIndex + mainItemsPerPage);

  const activeSubItems = selectedCategory ? selectedCategory.items : [];
  const isScrollable = activeSubItems.length > 2;
  const itemsPerPage = isScrollable ? 3 : activeSubItems.length;
  const totalPages = Math.ceil(activeSubItems.length / itemsPerPage);
  const startIndex = activePage * itemsPerPage;
  const visibleItems = activeSubItems.slice(startIndex, startIndex + itemsPerPage);

  const handleSubPrev = () => {
    setActivePage(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleSubNext = () => {
    setActivePage(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleMainPrev = () => {
    setMainCardsPage(prev => (prev === 0 ? mainTotalPages - 1 : prev - 1));
  };

  const handleMainNext = () => {
    setMainCardsPage(prev => (prev === mainTotalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className={`curated-categories-section ${isVisible ? 'scroll-reveal-active' : ''}`} 
      id="curated-catalog"
      ref={sectionRef}
    >
      <div className="main-catalog-header">
        <span className="main-subtitle">Handpicked designs. Timeless style. Made for you.</span>
        <h2>{selectedCategory ? selectedCategory.title.toUpperCase() : "CURATED COLLECTIONS"}</h2>
        <div className="catalog-header-divider"></div>
        
        {selectedCategory && (
          <button className="back-to-main-btn" onClick={() => { setSelectedCategory(null); setActivePage(0); }}>
            &larr; Back to All Collections
          </button>
        )}
      </div>

      {!selectedCategory ? (
        <div className="main-categories-view">
          <div className="signature-grid-wrapper">
            <button className="carousel-arrow left-arrow" onClick={handleMainPrev}>&#8592;</button>

            <div className="signature-grid">
              {visibleMainCards.map((cat) => (
                <div 
                  className="signature-card main-cat-card" 
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat); setActivePage(0); }}
                >
                  <div className="signature-img-wrapper">
                    <img src={cat.image} alt={cat.title} />
                  </div>
                  <div className="signature-content">
                    <div className="signature-icon-circle">
                      <span className="icon-symbol">✦</span>
                    </div>
                    <h3>{cat.title}</h3>
                    <span className="explore-subtext">Explore Subsections &rarr;</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-arrow right-arrow" onClick={handleMainNext}>&#8594;</button>
          </div>

          <div className="signature-dots">
            {Array.from({ length: mainTotalPages }).map((_, dotIdx) => (
              <span
                key={dotIdx}
                className={`dot ${dotIdx === mainCardsPage ? 'active' : ''}`}
                onClick={() => setMainCardsPage(dotIdx)}
              ></span>
            ))}
          </div>
        </div>
      ) : (
        <div className="category-block active-subview">
          <div className="signature-grid-wrapper">
            {isScrollable && (
              <button className="carousel-arrow left-arrow" onClick={handleSubPrev}>&#8592;</button>
            )}

            <div className={`signature-grid ${!isScrollable ? 'two-items-grid' : ''}`}>
              {visibleItems.map((item) => (
                <div className="signature-card" key={item.id}>
                  <div className="signature-img-wrapper">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="signature-content">
                    <div className="signature-icon-circle">
                      <span className="icon-symbol">✦</span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {isScrollable && (
              <button className="carousel-arrow right-arrow" onClick={handleSubNext}>&#8594;</button>
            )}
          </div>

          {isScrollable && (
            <div className="signature-dots">
              {Array.from({ length: totalPages }).map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`dot ${dotIdx === activePage ? 'active' : ''}`}
                  onClick={() => setActivePage(dotIdx)}
                ></span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CuratedCategories;