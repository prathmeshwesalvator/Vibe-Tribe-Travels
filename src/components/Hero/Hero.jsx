import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-8 col-md-10 mx-auto text-center text-white">
            <div className="hero-content" data-aos="fade-up">
              <div className="hero-badge mb-4">
                <span>🌟 Premium Travel Experiences</span>
              </div>
              
              <h1 className="hero-title display-1 fw-bold mb-4">
                Discover Your Next
                <span className="hero-title-highlight"> Adventure</span>
              </h1>
              
              <p className="hero-subtitle lead mb-5">
                Experience the world through our curated travel experiences. 
                From pristine beaches to majestic mountains, let us guide you to unforgettable destinations.
              </p>
              
              <div className="hero-stats mb-5">
                <div className="row justify-content-center">
                  <div className="col-4 col-md-3">
                    <div className="stat-item">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Happy Travelers</div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3">
                    <div className="stat-item">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Destinations</div>
                    </div>
                  </div>
                  <div className="col-4 col-md-3">
                    <div className="stat-item">
                      <div className="stat-number">10+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hero-buttons">
                <a href="#destinations" className="btn btn-primary btn-lg me-3 mb-2">
                  <span className="btn-icon">🌍</span>
                  Explore Destinations
                </a>
                <a href="#about" className="btn btn-outline-light btn-lg mb-2">
                  <span className="btn-icon">📖</span>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 