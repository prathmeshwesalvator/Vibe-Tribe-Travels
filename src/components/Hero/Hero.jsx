import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content glass-card">
  <h1 className="hero-title" style={{color : '#0b3d2e'}}>VIBE TRIBE TRAVELS</h1>
  <h2 className="hero-subtitle" style={{color : '#333333'}}>Where Fun Meet Travel</h2>
  <p className="hero-text">
    We curate travel experiences that go beyond sightseeing—connecting
    people, places, and unforgettable moments, all tailored to your
    unique vibe.
  </p>
  <div className="hero-buttons">
    <Link to="/destinations" className="btn btn-primary">
      Get Started
    </Link>
    <Link to="/contact" className="btn btn-secondary">
      Contact Us
    </Link>
  </div>
</div>

      <div className="hero-visual">
        <div className="hero-logo">
          <img src="/logo.png" alt="Vibe Tribe Travels" />
        </div>
      </div>

      {/* Floating icons */}
      {/* <img src="/icons/sunglasses.png" alt="" className="icon icon-1" /> */}
      <img src="/icons/suitcase.png" alt="" className="icon icon-2" />
      <img src="/icons/ticket.png" alt="" className="icon icon-3" />
      <img src="/icons/beach.png" alt="" className="icon icon-4" />
      <img src="/icons/camera.png" alt="" className="icon icon-5" />
      <img src="/icons/passport.png" alt="" className="icon icon-6" />
      <img src="/icons/balloon.png" alt="" className="icon icon-7" />
      <img src="/icons/backpack.png" alt="" className="icon icon-8" />
      <img src="/icons/globe.png" alt="" className="icon icon-9" />
    </section>
  );
};

export default Hero;
