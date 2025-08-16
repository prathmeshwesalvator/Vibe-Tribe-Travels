import React from 'react';
import './Destinations.css';

const Destinations = () => {
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
      color: '#3b82f6'
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
      color: '#10b981'
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
      color: '#8b5cf6'
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
      color: '#f59e0b'
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
      color: '#ef4444'
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
      color: '#06b6d4'
    }
  ];

  return (
    <section id="destinations" className="destinations-section py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="section-badge mb-3">
            <span>🌍 Destinations</span>
          </div>
          <h2 className="section-title">Explore Our Destinations</h2>
          <p className="section-subtitle">Discover handpicked destinations that will leave you breathless</p>
          <div className="title-underline mx-auto"></div>
        </div>
        
        <div className="row g-4">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="col-lg-4 col-md-6" 
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
  );
};

export default Destinations; 