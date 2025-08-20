import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Destinations from '../components/Destinations/Destinations';
import Services from '../components/Services/Services';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      <hr />
      
      {/* About Section */}
      <About />
      
      <hr />
      
      {/* Destinations Preview Section */}
      <Destinations />
      
      {/* Services Preview Section */}
      <Services />

      {/* CTA Section */}
 <section
  className="cta-section"
  style={{
    background: "#FDF6EC", // Cream background
    padding: "3rem 0",
    borderTop: "2px solid #1D7A85", // Ocean Blue accent
    borderBottom: "2px solid #F4A261", // Sunset Orange accent
  }}
>
  <div className="container">
    <div className="cta-content text-center" data-aos="fade-up">
      <h2
        className="cta-title"
        style={{
          color: "#0B3D2E", // Deep Forest Green
          fontWeight: 900,
          marginBottom: "1rem",
        }}
      >
        Ready to Start Your Journey?
      </h2>
      <p
        className="cta-description"
        style={{
          color: "#333333", // Charcoal Gray
          fontSize: "1.15rem",
          marginBottom: "2rem",
        }}
      >
        Let us help you create the perfect travel experience. Contact our experts today!
      </p>
      <div className="cta-buttons" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        <Link
          to="/contact"
          className="btn"
          style={{
            background: "#1D7A85", // Ocean Blue
            color: "#FDF6EC", // Cream
            fontWeight: 800,
            borderRadius: 999,
            padding: "0.75rem 2.2rem",
            fontSize: "1.1rem",
            boxShadow: "0 4px 18px rgba(29,122,133,0.13)",
            border: "none",
            transition: "background 0.2s, color 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseOver={e => { e.currentTarget.style.background = "#F4A261"; e.currentTarget.style.color = "#333"; }}
          onMouseOut={e => { e.currentTarget.style.background = "#1D7A85"; e.currentTarget.style.color = "#FDF6EC"; }}
        >
          <span className="btn-icon" style={{ fontSize: "1.3em" }}>📞</span>
          Get Started
        </Link>
        {/* <Link
          to="/gallery"
          className="btn"
          style={{
            background: "#FFFFFF", // White
            color: "#1D7A85", // Ocean Blue
            fontWeight: 800,
            borderRadius: 999,
            padding: "0.75rem 2.2rem",
            fontSize: "1.1rem",
            border: "2px solid #1D7A85",
            boxShadow: "0 4px 18px rgba(29,122,133,0.08)",
            transition: "background 0.2s, color 0.2s, border 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseOver={e => { e.currentTarget.style.background = "#F4A261"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.border = "2px solid #F4A261"; }}
          onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#1D7A85"; e.currentTarget.style.border = "2px solid #1D7A85"; }}
        >
          <span className="btn-icon" style={{ fontSize: "1.3em" }}>📸</span>
          View Gallery
        </Link> */}
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default HomePage;