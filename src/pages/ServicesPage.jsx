import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      icon: '✈️',
      title: 'Flight Booking',
      description: 'Best deals on flights to destinations worldwide with major airlines and budget carriers.',
      features: ['24/7 Support', 'Price Match', 'Flexible Dates'],
      color: '#3b82f6'
    },
    {
      icon: '🏨',
      title: 'Hotel Reservations',
      description: 'Luxury hotels, boutique stays, and budget accommodations handpicked for your comfort.',
      features: ['Verified Reviews', 'Best Rates', 'Free Cancellation'],
      color: '#10b981'
    },
    {
      icon: '🚗',
      title: 'Transportation',
      description: 'Airport transfers, car rentals, and local transportation for seamless travel.',
      features: ['Meet & Greet', 'GPS Navigation', 'Insurance Included'],
      color: '#8b5cf6'
    },
    {
      icon: '🎫',
      title: 'Activity Tickets',
      description: 'Skip-the-line tickets and exclusive access to top attractions and experiences.',
      features: ['Instant Confirmation', 'Mobile Tickets', 'Guided Tours'],
      color: '#f59e0b'
    },
    {
      icon: '🛡️',
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for medical emergencies, trip cancellation, and lost luggage.',
      features: ['24/7 Assistance', 'Worldwide Coverage', 'Quick Claims'],
      color: '#ef4444'
    },
    {
      icon: '👥',
      title: 'Group Travel',
      description: 'Specialized packages for families, corporate groups, and special occasions.',
      features: ['Custom Itineraries', 'Group Discounts', 'Dedicated Guide'],
      color: '#06b6d4'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero py-5">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>🛠️ Our Services</span>
            </div>
            <h1 className="hero-title">Comprehensive Travel Solutions</h1>
            <p className="hero-subtitle">
              From planning to execution, we handle every aspect of your journey with expertise and care
            </p>
            <div className="title-underline mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>🛠️ Our Services</span>
            </div>
            <h2 className="section-title">Comprehensive Travel Solutions</h2>
            <p className="section-subtitle">From planning to execution, we handle every aspect of your journey</p>
            <div className="title-underline mx-auto"></div>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="col-lg-4 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="service-card">
                  <div className="service-icon" style={{ background: service.color }}>
                    <span>{service.icon}</span>
                  </div>
                  
                  <div className="service-content">
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="service-actions">
                      <button className="btn btn-outline-primary btn-sm">
                        <span className="btn-icon">📖</span>
                        Learn More
                      </button>
                      <button className="btn btn-primary btn-sm">
                        <span className="btn-icon">💳</span>
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="services-info py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="info-card">
                <div className="info-icon mb-4">
                  <span>💡</span>
                </div>
                <h3>Why Choose Our Services?</h3>
                <ul className="info-list">
                  <li>Expert travel consultants with years of experience</li>
                  <li>24/7 customer support throughout your journey</li>
                  <li>Best price guarantees and exclusive deals</li>
                  <li>Personalized itineraries tailored to your preferences</li>
                  <li>Comprehensive travel insurance and protection</li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="info-card">
                <div className="info-icon mb-4">
                  <span>📋</span>
                </div>
                <h3>Our Service Process</h3>
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h5>Consultation</h5>
                      <p>We discuss your travel dreams and requirements</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h5>Planning</h5>
                      <p>We create a customized travel itinerary</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h5>Booking</h5>
                      <p>We secure all reservations and tickets</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h5>Support</h5>
                      <p>We provide ongoing support during your trip</p>
                    </div>
                  </div>
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
            <h2 className="cta-title">Ready to Experience Our Services?</h2>
            <p className="cta-description">
              Let our travel experts help you create the perfect journey. Contact us today for a personalized consultation!
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary btn-lg me-3 mb-2">
                <span className="btn-icon">📞</span>
                Get Started
              </a>
              <a href="#destinations" className="btn btn-outline-primary btn-lg mb-2">
                <span className="btn-icon">🌍</span>
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 