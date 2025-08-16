import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destinationInterest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destinationInterest: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@vibetribetravels.com',
      color: '#3b82f6'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: '#10b981'
    },
    {
      icon: '📍',
      title: 'Office',
      value: '123 Travel Street, Adventure City, AC 12345',
      color: '#8b5cf6'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      color: '#f59e0b'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero py-5">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>📞 Get In Touch</span>
            </div>
            <h1 className="hero-title">Let's Plan Your Dream Trip</h1>
            <p className="hero-subtitle">
              Our travel experts are here to help you create unforgettable memories
            </p>
            <div className="title-underline mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="section-badge mb-3">
              <span>📞 Contact Us</span>
            </div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Ready to start your next adventure? Contact us and let's plan the trip of your dreams.</p>
            <div className="title-underline mx-auto"></div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
              <div className="contact-info">
                <div className="contact-header mb-4">
                  <h3 className="contact-title">Let's Start Planning Your Journey</h3>
                  <p className="contact-description">
                    Our travel experts are here to help you create the perfect itinerary. 
                    Whether you're looking for a romantic getaway, family adventure, or solo exploration, 
                    we'll make sure every detail is perfect.
                  </p>
                </div>
                
                <div className="contact-methods">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={index} 
                      className="contact-method"
                      style={{ '--method-color': method.color }}
                    >
                      <div className="contact-icon">{method.icon}</div>
                      <div className="contact-details">
                        <h5>{method.title}</h5>
                        <p>{method.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="contact-form-container">
                <div className="form-header mb-4">
                  <h3 className="form-title">Send Us a Message</h3>
                  <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input 
                          type="text" 
                          id="firstName"
                          name="firstName"
                          className="form-control" 
                          placeholder="Enter your first name" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input 
                          type="text" 
                          id="lastName"
                          name="lastName"
                          className="form-control" 
                          placeholder="Enter your last name" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          className="form-control" 
                          placeholder="Enter your email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          className="form-control" 
                          placeholder="Enter your phone number" 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="form-group">
                      <label htmlFor="destinationInterest" className="form-label">Destination Interest</label>
                      <select 
                        id="destinationInterest"
                        name="destinationInterest"
                        className="form-select"
                        value={formData.destinationInterest}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your preferred destination type</option>
                        <option value="beach">🏖️ Beach Destinations</option>
                        <option value="mountain">🏔️ Mountain Adventures</option>
                        <option value="city">🏙️ City Breaks</option>
                        <option value="culture">🏛️ Cultural Tours</option>
                        <option value="wildlife">🦁 Wildlife Safaris</option>
                        <option value="luxury">💎 Luxury Escapes</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Tell us about your dream trip *</label>
                      <textarea 
                        id="message"
                        name="message"
                        className="form-control" 
                        rows="4" 
                        placeholder="Describe your ideal vacation, preferred dates, budget, and any special requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    <span className="btn-icon">📤</span>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="info-card">
                <div className="info-icon mb-4">
                  <span>📍</span>
                </div>
                <h3>Visit Our Office</h3>
                <p>123 Travel Street<br />Adventure City, AC 12345<br />United States</p>
                <div className="office-hours">
                  <h5>Office Hours:</h5>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="info-card">
                <div className="info-icon mb-4">
                  <span>📱</span>
                </div>
                <h3>Contact Methods</h3>
                <div className="contact-methods">
                  <div className="method">
                    <span className="method-icon">📞</span>
                    <div>
                      <h5>Phone</h5>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="method">
                    <span className="method-icon">📧</span>
                    <div>
                      <h5>Email</h5>
                      <p>info@vibetribetravels.com</p>
                    </div>
                  </div>
                  <div className="method">
                    <span className="method-icon">💬</span>
                    <div>
                      <h5>Live Chat</h5>
                      <p>Available 24/7 on our website</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="info-card">
                <div className="info-icon mb-4">
                  <span>🌐</span>
                </div>
                <h3>Connect With Us</h3>
                <p>Follow us on social media for travel inspiration, special offers, and updates.</p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <span>📘</span>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>📷</span>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>🐦</span>
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our services</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="faq-item">
                <h5>How far in advance should I book my trip?</h5>
                <p>We recommend booking at least 3-6 months in advance for international trips and 1-3 months for domestic travel to secure the best rates and availability.</p>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="faq-item">
                <h5>Do you offer travel insurance?</h5>
                <p>Yes, we provide comprehensive travel insurance options to protect your investment and ensure peace of mind during your journey.</p>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="faq-item">
                <h5>Can you customize itineraries?</h5>
                <p>Absolutely! We specialize in creating personalized travel experiences tailored to your preferences, budget, and travel style.</p>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="faq-item">
                <h5>What if I need to cancel my trip?</h5>
                <p>We understand that plans can change. Our cancellation policies vary by package, and we'll work with you to find the best solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="cta-content text-center" data-aos="fade-up">
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-description">
              Don't wait! Contact us today and let our travel experts help you plan the perfect adventure.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary btn-lg me-3 mb-2">
                <span className="btn-icon">📞</span>
                Contact Us Now
              </a>
              <a href="#destinations" className="btn btn-outline-light btn-lg mb-2">
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

export default ContactPage; 