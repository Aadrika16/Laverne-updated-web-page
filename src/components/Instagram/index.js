import React from 'react';
import './index.css';
import { FiInstagram } from 'react-icons/fi';

const instaImages = [
  { id: 1, likes: '1.4k', comments: '48', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=300' },
  { id: 2, likes: '982', comments: '36', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=300' },
  { id: 3, likes: '1.1k', comments: '52', url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=300' },
  { id: 4, likes: '1.6k', comments: '64', url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=300' },
  { id: 5, likes: '1.3k', comments: '40', url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=300' }
];

const Instagram = () => {
  return (
    <div className="instagram-section">
      <div className="insta-header">
        <div className="insta-title-group">
          <FiInstagram className="insta-icon-main" />
          <div>
            <h3>Follow Our Journey</h3>
            <span>@LaverneStudio</span>
          </div>
        </div>
        <p className="insta-sub">Behind the scenes, new creations, and woodworking tips.</p>
        <button className="insta-follow-btn">
          <FiInstagram /> Follow on Instagram
        </button>
      </div>

      <div className="insta-grid">
        {instaImages.map((img) => (
          <div className="insta-item" key={img.id}>
            <img src={img.url} alt="Instagram post" />
            <div className="insta-overlay">
              <span>❤️ {img.likes}</span>
              <span>💬 {img.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;