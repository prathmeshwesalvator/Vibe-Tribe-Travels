import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Destinations from '../components/Destinations/Destinations';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Destinations Preview Section */}
      <section className="destinations-preview py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>🌍 Featured Destinations</span>
            </div>
            <h2 className="section-title">Discover Your Next Adventure</h2>
            <p className="section-subtitle">
              Explore our handpicked destinations that will leave you breathless
            </p>
            <div className="title-underline mx-auto"></div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="destination-preview-card">
                <div className="card-image">
                  <div className="image-placeholder bali">
                    <span>🏝️</span>
                  </div>
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h4>Bali, Indonesia</h4>
                      <p>From $1,299</p>
                      <Link to="/destinations" className="btn btn-light btn-sm">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="destination-preview-card">
                <div className="card-image">
                  <div className="image-placeholder swiss">
                    <span>🏔️</span>
                  </div>
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h4>Swiss Alps</h4>
                      <p>From $1,899</p>
                      <Link to="/destinations" className="btn btn-light btn-sm">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="destination-preview-card">
                <div className="card-image">
                  <div className="image-placeholder santorini">
                    <span>🏛️</span>
                  </div>
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <h4>Santorini, Greece</h4>
                      <p>From $999</p>
                      <Link to="/destinations" className="btn btn-light btn-sm">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/destinations" className="btn btn-primary btn-lg">
              <span className="btn-icon">🌍</span>
              View All Destinations
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="services-preview py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>🛠️ Our Services</span>
            </div>
            <h2 className="section-title">Comprehensive Travel Solutions</h2>
            <p className="section-subtitle">
              From planning to execution, we handle every aspect of your journey
            </p>
            <div className="title-underline mx-auto"></div>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-preview-card">
                <div className="service-icon">✈️</div>
                <h5>Flight Booking</h5>
                <p>Best deals on flights worldwide</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-preview-card">
                <div className="service-icon">🏨</div>
                <h5>Hotel Reservations</h5>
                <p>Luxury and budget accommodations</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-preview-card">
                <div className="service-icon">🚗</div>
                <h5>Transportation</h5>
                <p>Seamless travel arrangements</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-preview-card">
                <div className="service-icon">🎫</div>
                <h5>Activity Tickets</h5>
                <p>Exclusive access to attractions</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-outline-primary btn-lg">
              <span className="btn-icon">🛠️</span>
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-description">
              Let us help you create the perfect travel experience. Contact our experts today!
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg me-3 mb-2">
                <span className="btn-icon">📞</span>
                Get Started
              </Link>
              <Link to="/gallery" className="btn btn-outline-light btn-lg mb-2">
                <span className="btn-icon">📸</span>
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 