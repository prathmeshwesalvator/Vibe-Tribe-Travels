import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '🌟',
      title: 'Premium Experience',
      description: 'Handpicked accommodations and experiences',
      color: '#3b82f6'
    },
    {
      icon: '🛡️',
      title: 'Safe Travel',
      description: 'Your safety is our top priority',
      color: '#10b981'
    },
    {
      icon: '💎',
      title: 'Exclusive Access',
      description: 'Unique experiences not available elsewhere',
      color: '#8b5cf6'
    },
    {
      icon: '🌍',
      title: 'Global Network',
      description: 'Partners in over 50 countries',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div className="about-image-container">
              <div className="about-image">
                <div className="image-placeholder">
                  <span>🌍</span>
                </div>
                <div className="about-image-overlay">
                  <div className="experience-badge">
                    <span className="years">10+</span>
                    <span className="text">Years of Excellence</span>
                  </div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Travelers</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Destinations</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content">
              <div className="section-header mb-4">
                <div className="section-badge mb-3">
                  <span>About Us</span>
                </div>
                <h2 className="section-title">Crafting Unforgettable Travel Experiences</h2>
                <div className="title-underline"></div>
              </div>
              
              <p className="about-description lead mb-4">
                We are passionate about creating extraordinary travel experiences that connect you with the world's most beautiful destinations.
              </p>
              
              <p className="about-text mb-4">
                Founded with a vision to make world-class travel accessible to everyone, Vibe Tribe Travels has been crafting unforgettable journeys for over a decade. Our team of experienced travel experts works tirelessly to curate the perfect itinerary for every traveler.
              </p>
              
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-item"
                    style={{ '--feature-color': feature.color }}
                  >
                    <div className="feature-icon">{feature.icon}</div>
                    <h5>{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="about-cta mt-4">
                <a href="#destinations" className="btn btn-outline-primary">
                  <span className="btn-icon">🌍</span>
                  Explore Destinations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 