import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMobileMenu}>
          <div className="logo-container me-3">
            <div className="logo-icon">✈️</div>
          </div>
          <div className="brand-text-container">
            <span className="brand-text-primary">Vibe Tribe</span>
            <span className="brand-text-secondary">Travels</span>
          </div>
        </Link>
        
        <button 
          className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`}
          type="button" 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/" 
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
                to="/about" 
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">👥</span>
                <span className="nav-text">About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/destinations') ? 'active' : ''}`} 
                to="/destinations" 
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🌍</span>
                <span className="nav-text">Destinations</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`} 
                to="/services" 
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🛠️</span>
                <span className="nav-text">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} 
                to="/gallery" 
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">📸</span>
                <span className="nav-text">Gallery</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact" 
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">📞</span>
                <span className="nav-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 