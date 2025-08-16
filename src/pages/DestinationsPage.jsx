import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DestinationsPage.css';

const DestinationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      description: 'Experience the perfect blend of culture, nature, and luxury in this tropical paradise.',
      price: 'From $1,299',
      image: '🏝️',
      features: ['Beach', 'Culture', 'Adventure'],
      rating: 4.8,
      duration: '7 Days',
      category: 'beach',
      color: '#3b82f6',
      highlights: ['Sacred Monkey Forest', 'Rice Terraces', 'Beach Clubs', 'Temple Tours']
    },
    {
      id: 2,
      name: 'Swiss Alps',
      description: 'Breathtaking mountain landscapes, world-class skiing, and charming alpine villages.',
      price: 'From $1,899',
      image: '🏔️',
      features: ['Mountains', 'Adventure', 'Luxury'],
      rating: 4.9,
      duration: '10 Days',
      category: 'mountain',
      color: '#10b981',
      highlights: ['Skiing & Snowboarding', 'Mountain Hiking', 'Alpine Villages', 'Luxury Resorts']
    },
    {
      id: 3,
      name: 'Santorini, Greece',
      description: 'Stunning white architecture, crystal blue waters, and unforgettable sunsets.',
      price: 'From $999',
      image: '🏛️',
      features: ['Island', 'Romance', 'Culture'],
      rating: 4.7,
      duration: '6 Days',
      category: 'island',
      color: '#8b5cf6',
      highlights: ['Sunset Views', 'White Architecture', 'Wine Tasting', 'Beach Relaxation']
    },
    {
      id: 4,
      name: 'Kyoto, Japan',
      description: 'Ancient temples, traditional gardens, and the essence of Japanese culture.',
      price: 'From $1,599',
      image: '🌅',
      features: ['Culture', 'History', 'Nature'],
      rating: 4.9,
      duration: '8 Days',
      category: 'culture',
      color: '#f59e0b',
      highlights: ['Temple Tours', 'Cherry Blossoms', 'Traditional Gardens', 'Tea Ceremonies']
    },
    {
      id: 5,
      name: 'Serengeti, Tanzania',
      description: 'Witness the great migration and experience the raw beauty of African wildlife.',
      price: 'From $2,199',
      image: '🦁',
      features: ['Wildlife', 'Adventure', 'Safari'],
      rating: 4.8,
      duration: '12 Days',
      category: 'wildlife',
      color: '#ef4444',
      highlights: ['Wildlife Safaris', 'Great Migration', 'Luxury Lodges', 'Cultural Tours']
    },
    {
      id: 6,
      name: 'New York City',
      description: 'The city that never sleeps offers endless entertainment and cultural experiences.',
      price: 'From $799',
      image: '🗽',
      features: ['City', 'Culture', 'Entertainment'],
      rating: 4.6,
      duration: '5 Days',
      category: 'city',
      color: '#06b6d4',
      highlights: ['Broadway Shows', 'Museum Visits', 'Central Park', 'Shopping']
    },
    {
      id: 7,
      name: 'Maldives',
      description: 'Overwater bungalows, pristine beaches, and crystal-clear turquoise waters.',
      price: 'From $2,499',
      image: '🌊',
      features: ['Beach', 'Luxury', 'Romance'],
      rating: 4.9,
      duration: '8 Days',
      category: 'beach',
      color: '#3b82f6',
      highlights: ['Overwater Bungalows', 'Snorkeling', 'Spa Treatments', 'Private Beaches']
    },
    {
      id: 8,
      name: 'Machu Picchu, Peru',
      description: 'Ancient Incan citadel set high in the Andes Mountains.',
      price: 'From $1,799',
      image: '🏛️',
      features: ['Culture', 'History', 'Adventure'],
      rating: 4.8,
      duration: '9 Days',
      category: 'culture',
      color: '#f59e0b',
      highlights: ['Inca Trail', 'Ancient Ruins', 'Mountain Views', 'Cultural Tours']
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

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  return (
    <div className="destinations-page">
      {/* Hero Section */}
      <section className="destinations-hero py-5">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <div className="section-badge mb-4">
              <span>🌍 Destinations</span>
            </div>
            <h1 className="hero-title">Explore Our World-Class Destinations</h1>
            <p className="hero-description">
              Discover handpicked destinations that will leave you breathless. From pristine beaches to majestic mountains, 
              we've curated the perfect collection of travel experiences for every type of adventurer.
            </p>
            <div className="hero-stats">
              <div className="row justify-content-center">
                <div className="col-4 col-md-3">
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Destinations</div>
                  </div>
                </div>
                <div className="col-4 col-md-3">
                  <div className="stat-item">
                    <div className="stat-number">4.8</div>
                    <div className="stat-label">Average Rating</div>
                  </div>
                </div>
                <div className="col-4 col-md-3">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Happy Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section py-4">
        <div className="container">
          <div className="filter-container" data-aos="fade-up">
            <div className="d-flex justify-content-center flex-wrap gap-3">
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
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="destinations-grid py-5">
        <div className="container">
          <div className="row g-4">
            {filteredDestinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className="col-lg-6 col-xl-4" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="destination-card">
                  <div className="destination-image">
                    <div className="image-placeholder" style={{ background: destination.color }}>
                      <span>{destination.image}</span>
                    </div>
                    <div className="destination-overlay">
                      <div className="destination-price">{destination.price}</div>
                      <div className="destination-rating">
                        <span className="rating-stars">★★★★★</span>
                        <span className="rating-number">{destination.rating}</span>
                      </div>
                    </div>
                    <div className="destination-duration">{destination.duration}</div>
                    <div className="destination-category">
                      <span className="category-badge">{destination.category}</span>
                    </div>
                  </div>
                  
                  <div className="destination-content">
                    <h4 className="destination-name">{destination.name}</h4>
                    <p className="destination-description">{destination.description}</p>
                    
                    <div className="destination-features">
                      {destination.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="destination-highlights">
                      <h6>Highlights:</h6>
                      <ul>
                        {destination.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="destination-actions">
                      <button className="btn btn-outline-primary btn-sm">
                        <span className="btn-icon">📖</span>
                        Learn More
                      </button>
                      <button className="btn btn-primary btn-sm">
                        <span className="btn-icon">💳</span>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="destinations-cta py-5">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="cta-title">Can't Find Your Perfect Destination?</h2>
            <p className="cta-description">
              Our travel experts can create a custom itinerary just for you. Let us know your preferences!
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg me-3 mb-2">
                <span className="btn-icon">📞</span>
                Contact Our Experts
              </Link>
              <Link to="/services" className="btn btn-outline-primary btn-lg mb-2">
                <span className="btn-icon">🛠️</span>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage; 