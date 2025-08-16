import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      image: '👩‍💼',
      description: '15+ years in luxury travel industry',
      specialties: ['Luxury Destinations', 'VIP Services', 'Corporate Travel']
    },
    {
      name: 'Michael Chen',
      position: 'Head of Operations',
      image: '👨‍💼',
      description: 'Expert in travel logistics and planning',
      specialties: ['Logistics', 'Crisis Management', 'Quality Control']
    },
    {
      name: 'Emma Rodriguez',
      position: 'Senior Travel Consultant',
      image: '👩‍💻',
      description: 'Specialist in adventure and cultural tours',
      specialties: ['Adventure Travel', 'Cultural Tours', 'Group Planning']
    },
    {
      name: 'David Thompson',
      position: 'Customer Experience Manager',
      image: '👨‍💻',
      description: 'Ensuring exceptional customer satisfaction',
      specialties: ['Customer Service', 'Feedback Management', 'Loyalty Programs']
    }
  ];

  const milestones = [
    { year: '2013', title: 'Company Founded', description: 'Started with a vision to make luxury travel accessible' },
    { year: '2015', title: 'First 1000 Clients', description: 'Reached our first major milestone' },
    { year: '2018', title: 'International Expansion', description: 'Opened offices in 5 countries' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched our online booking platform' },
    { year: '2023', title: 'Industry Recognition', description: 'Won "Best Travel Agency" award' },
    { year: '2024', title: 'Future Vision', description: 'Expanding to 50+ destinations worldwide' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
              <div className="hero-content">
                <div className="section-badge mb-4">
                  <span>👥 About Us</span>
                </div>
                <h1 className="hero-title">Crafting Unforgettable Travel Experiences Since 2013</h1>
                <p className="hero-description">
                  We are passionate about creating extraordinary travel experiences that connect you with the world's most beautiful destinations. 
                  Our mission is to make luxury travel accessible while maintaining the highest standards of service and safety.
                </p>
                <div className="hero-stats">
                  <div className="row">
                    <div className="col-4">
                      <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Happy Travelers</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Destinations</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-item">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="hero-image-container">
                <div className="hero-image">
                  <div className="image-placeholder">
                    <span>🌍</span>
                  </div>
                  <div className="experience-badge">
                    <span className="years">10+</span>
                    <span className="text">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="mission-card">
                <div className="card-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To provide exceptional travel experiences that inspire, educate, and create lasting memories. 
                  We believe that travel has the power to transform lives and broaden perspectives.
                </p>
                <ul className="mission-points">
                  <li>Personalized service for every client</li>
                  <li>Uncompromising quality and safety</li>
                  <li>Sustainable and responsible tourism</li>
                  <li>24/7 support throughout your journey</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="vision-card">
                <div className="card-icon">🔮</div>
                <h3>Our Vision</h3>
                <p>
                  To become the world's most trusted and innovative travel company, setting new standards 
                  for luxury travel while making extraordinary experiences accessible to discerning travelers.
                </p>
                <ul className="vision-points">
                  <li>Global network of premium partners</li>
                  <li>Cutting-edge technology integration</li>
                  <li>Exclusive access to hidden gems</li>
                  <li>Industry-leading customer satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>👥 Our Team</span>
            </div>
            <h2 className="section-title">Meet the Experts Behind Your Journey</h2>
            <p className="section-subtitle">
              Our experienced team of travel professionals is dedicated to crafting your perfect adventure
            </p>
            <div className="title-underline mx-auto"></div>
          </div>
          
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-card">
                  <div className="member-image">
                    <div className="image-placeholder">{member.image}</div>
                  </div>
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-position">{member.position}</p>
                    <p className="member-description">{member.description}</p>
                    <div className="member-specialties">
                      {member.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="specialty-tag">{specialty}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>📅 Our Journey</span>
            </div>
            <h2 className="section-title">A Decade of Excellence</h2>
            <p className="section-subtitle">
              From humble beginnings to industry leadership
            </p>
            <div className="title-underline mx-auto"></div>
          </div>
          
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4 className="timeline-title">{milestone.title}</h4>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta py-5">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="cta-title">Ready to Experience the Vibe Tribe Difference?</h2>
            <p className="cta-description">
              Let our expert team craft your next unforgettable adventure
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg me-3 mb-2">
                <span className="btn-icon">📞</span>
                Get Started
              </Link>
              <Link to="/destinations" className="btn btn-outline-primary btn-lg mb-2">
                <span className="btn-icon">🌍</span>
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 