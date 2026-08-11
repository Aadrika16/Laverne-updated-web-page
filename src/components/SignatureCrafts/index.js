import React from 'react';
import './index.css';

const crafts = [
  {
    id: 1,
    title: 'The Curved Harmony Chair',
    desc: 'Steam-bent ash with hand-rubbed natural oil finish.',
    edition: 'EDITION OF 25',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'The Artisan Dining Table',
    desc: 'Mortise & tenon joinery with a walnut slab top.',
    edition: 'EDITION OF 10',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'Keepsake Cabinet',
    desc: 'Hand-cut dovetail joints in reclaimed teak.',
    edition: 'EDITION OF 15',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600'
  }
];

const SignatureCrafts = () => {
  return (
    <div className="signature-section" id="crafts">
      <div className="signature-top-row">
        <div>
          <span className="section-tag-light">LIMITED SERIES</span>
          <h2>Masterpieces of the Workshop</h2>
        </div>
        <div className="slider-arrows">
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
      </div>

      <div className="crafts-grid">
        {crafts.map((item) => (
          <div className="craft-card" key={item.id}>
            <div className="craft-img-box">
              <span className="edition-badge">{item.edition}</span>
              <img src={item.image} alt={item.title} />
            </div>
            <div className="craft-details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default SignatureCrafts;