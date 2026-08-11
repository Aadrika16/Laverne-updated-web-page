import React from 'react';
import './index.css';

const products = [
  {
    id: 1,
    title: 'Nordic Oak Lounge Chair',
    category: 'SOLID WHITE OAK & LINEN',
    price: '$850',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Walnut Round Dining Table',
    category: 'SOLID WALNUT',
    price: '$1,650',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'Heritage Teak Sideboard',
    category: 'RECLAIMED TEAK',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    title: 'Ash Wood Pendant Light',
    category: 'HAND-TURNED ASH',
    price: '$320',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=600'
  }
];

const Collections = () => {
  return (
    <div className="collections-section" id="collections">
      <div className="collections-header">
        <div>
          <span className="section-tag">HANDMADE CATALOG</span>
          <h2>Curated Collections</h2>
        </div>
        <span className="view-all">View All Collections &rarr;</span>
      </div>

      <div className="filter-tabs">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Living Room</button>
        <button className="filter-btn">Dining</button>
        <button className="filter-btn">Decor</button>
        <button className="filter-btn">Lighting</button>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-img-wrapper">
              <span className="quick-view-badge">QUICK VIEW</span>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-info">
              <span className="product-category">{item.category}</span>
              <h4>{item.title}</h4>
              <div className="product-footer">
                <span className="price">{item.price}</span>
                <span className="add-to-cart">Add to Cart +</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;