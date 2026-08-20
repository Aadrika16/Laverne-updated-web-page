import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { FiInstagram } from 'react-icons/fi';

const Instagram = () => {
  const [instaImages, setInstaImages] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await fetch('https://feeds.behold.so/jIkhjfVerdMi05W0MBzr');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feed');
        }

        const data = await response.json();
        const postsArray = data.posts || (Array.isArray(data) ? data : []);

        const mappedPosts = postsArray
          .slice(0, 6)
          .map((post) => ({
            id: post.id || Math.random(),
            // Safely extracts from Behold's optimized sizes object or direct media urls
            url: post.sizes?.medium?.mediaUrl || post.sizes?.large?.mediaUrl || post.mediaUrl || post.thumbnailUrl,
            permalink: post.permalink || "https://instagram.com/lavernestudio.in",
            likes: post.likeCount || '0',
            comments: post.commentsCount || '0'
          }))
          .filter(post => post.url);

        setInstaImages(mappedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching live Instagram feed:', error);
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  return (
    <section 
      className={`instagram-section ${isVisible ? 'scroll-reveal-active' : ''}`}
      ref={sectionRef}
    >
      <div className="insta-profile-header">
        <div className="insta-profile-info">
          <div className="insta-avatar-circle">
            <FiInstagram className="insta-avatar-icon" />
          </div>
          <div>
            <div className="insta-handle-row">
              <h3>lavernestudio.in</h3>
              <a 
                href="https://instagram.com/lavernestudio.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="insta-profile-follow-btn"
              >
                Follow
              </a>
            </div>
            <p className="insta-bio">
              Handcrafted Wooden Furniture & Decor • Custom Designs & Spaces • Made for You
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="insta-loading">Loading live updates...</div>
      ) : instaImages.length === 0 ? (
        <div className="insta-loading">No posts found. Please check your Behold feed settings.</div>
      ) : (
        <div className="insta-grid">
          {instaImages.map((img) => (
            <a 
              href={img.permalink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-item" 
              key={img.id}
            >
              <img src={img.url} alt="Instagram post" />
              <div className="insta-overlay">
                <span>❤️ {img.likes}</span>
                <span>💬 {img.comments}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Instagram;