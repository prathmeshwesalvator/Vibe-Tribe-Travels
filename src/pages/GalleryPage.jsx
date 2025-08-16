import React, { useState } from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'beach',
      image: '🏝️',
      title: 'Tropical Paradise',
      location: 'Bali, Indonesia',
      description: 'Crystal clear waters and pristine beaches'
    },
    {
      id: 2,
      category: 'mountain',
      image: '🏔️',
      title: 'Alpine Majesty',
      location: 'Swiss Alps',
      description: 'Breathtaking mountain landscapes'
    },
    {
      id: 3,
      category: 'city',
      image: '🏙️',
      title: 'Urban Adventure',
      location: 'New York City',
      description: 'The city that never sleeps'
    },
    {
      id: 4,
      category: 'culture',
      image: '🏛️',
      title: 'Ancient Wonders',
      location: 'Kyoto, Japan',
      description: 'Traditional temples and gardens'
    },
    {
      id: 5,
      category: 'wildlife',
      image: '🦁',
      title: 'Safari Experience',
      location: 'Serengeti, Tanzania',
      description: 'Wildlife in their natural habitat'
    },
    {
      id: 6,
      category: 'island',
      image: '🏛️',
      title: 'Island Escape',
      location: 'Santorini, Greece',
      description: 'Stunning white architecture'
    },
    {
      id: 7,
      category: 'beach',
      image: '🌊',
      title: 'Ocean Views',
      location: 'Maldives',
      description: 'Overwater bungalows and coral reefs'
    },
    {
      id: 8,
      category: 'mountain',
      image: '⛰️',
      title: 'Rocky Peaks',
      location: 'Rocky Mountains',
      description: 'Adventure and exploration'
    },
    {
      id: 9,
      category: 'city',
      image: '🗼',
      title: 'Modern Metropolis',
      location: 'Tokyo, Japan',
      description: 'Futuristic cityscape'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Destinations', icon: '🌍' },
    { key: 'beach', label: 'Beach', icon: '🏖️' },
    { key: 'mountain', label: 'Mountain', icon: '🏔️' },
    { key: 'city', label: 'City', icon: '🏙️' },
    { key: 'culture', label: 'Culture', icon: '🏛️' },
    { key: 'wildlife', label: 'Wildlife', icon: '🦁' },
    { key: 'island', label: 'Island', icon: '🏝️' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="page-hero py-5">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>📸 Photo Gallery</span>
            </div>
            <h1 className="hero-title">Capturing Travel Moments</h1>
            <p className="hero-subtitle">
              Explore stunning visuals from our travelers' adventures around the world
            </p>
            <div className="title-underline mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>📸 Photo Gallery</span>
            </div>
            <h2 className="section-title">Explore Our Travel Adventures</h2>
            <p className="section-subtitle">Discover the beauty of the world through our curated collection of travel moments</p>
            <div className="title-underline mx-auto"></div>
          </div>

          {/* Filter Buttons */}
          <div className="gallery-filters mb-5" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span className="filter-label">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="row g-4">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="col-lg-4 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="gallery-item">
                  <div className="gallery-image">
                    <div className="image-placeholder">
                      <span>{item.image}</span>
                    </div>
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <h4 className="gallery-title">{item.title}</h4>
                        <p className="gallery-location">{item.location}</p>
                        <p className="gallery-description">{item.description}</p>
                      </div>
                      <div className="gallery-actions">
                        <button className="btn btn-light btn-sm">
                          <span className="btn-icon">👁️</span>
                          View
                        </button>
                        <button className="btn btn-primary btn-sm">
                          <span className="btn-icon">💳</span>
                          Book
                        </button>
                      </div>
                    </div>
                    <div className="gallery-category">
                      <span className="category-badge">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Info Section */}
      <section className="gallery-info py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="info-card">
                <div className="info-icon mb-4">
                  <span>🌍</span>
                </div>
                <h3>Travel Destinations</h3>
                <p>Our gallery showcases breathtaking destinations from tropical paradises to mountain peaks, urban landscapes to serene countryside retreats.</p>
                <div className="destination-tags">
                  <span className="tag">Tropical</span>
                  <span className="tag">Mountain</span>
                  <span className="tag">Urban</span>
                  <span className="tag">Cultural</span>
                  <span className="tag">Adventure</span>
                  <span className="tag">Relaxation</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="info-card">
                <div className="info-icon mb-4">
                  <span>📱</span>
                </div>
                <h3>Share Your Journey</h3>
                <p>Have amazing travel photos? We'd love to feature them in our gallery! Share your adventures and inspire others to explore the world.</p>
                <div className="share-options">
                  <button className="btn btn-outline-primary me-2 mb-2">
                    <span className="btn-icon">📧</span>
                    Email Photos
                  </button>
                  <button className="btn btn-outline-primary mb-2">
                    <span className="btn-icon">📱</span>
                    Social Media
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="cta-title">Ready to Create Your Own Memories?</h2>
            <p className="cta-description">
              Let us help you plan the perfect trip and capture moments that will last a lifetime!
            </p>
            <div className="cta-buttons">
              <a href="#destinations" className="btn btn-primary btn-lg me-3 mb-2">
                <span className="btn-icon">🌍</span>
                Explore Destinations
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg mb-2">
                <span className="btn-icon">📞</span>
                Start Planning
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage; 