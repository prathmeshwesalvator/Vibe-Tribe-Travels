import React from "react";
import Lottie from "lottie-react";
import "./About.css";

// Import your Lottie JSON file
import travelAnimation from "./lotties/travel.json";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left: Lottie Animation */}
        <div className="about-animation">
          <Lottie
            animationData={travelAnimation}
            loop
            autoplay
            className="lottie-animation"
          />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">LEARN MORE ABOUT WHAT WE DO</p>
          <p className="about-text">
            <strong>Vibe Tribe Travels</strong> is your one-stop destination for
            curated travel experiences that blend adventure, comfort, and
            connection. Based in India, we specialize in creating customized
            travel plans and group tours that cater to a wide range of
            travelers—from solo wanderers and families to corporate teams and
            student groups.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
