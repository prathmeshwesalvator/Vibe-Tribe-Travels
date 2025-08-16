import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', url: '#about' },
      { name: 'Our Team', url: '#about' },
      { name: 'Careers', url: '#' },
      { name: 'Press', url: '#' }
    ],
    services: [
      { name: 'Destinations', url: '#destinations' },
      { name: 'Travel Packages', url: '#' },
      { name: 'Custom Tours', url: '#' },
      { name: 'Group Travel', url: '#' }
    ],
    support: [
      { name: 'Help Center', url: '#' },
      { name: 'Contact Us', url: '#contact' },
      { name: 'Travel Insurance', url: '#' },
      { name: 'Emergency Support', url: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Cookie Policy', url: '#' },
      { name: 'GDPR', url: '#' }
    ]
  };

  const socialLinks = [
    { icon: '📘', label: 'Facebook', url: '#', color: '#1877f2' },
    { icon: '📷', label: 'Instagram', url: '#', color: '#e4405f' },
    { icon: '🐦', label: 'Twitter', url: '#', color: '#1da1f2' },
    { icon: '💼', label: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: '📺', label: 'YouTube', url: '#', color: '#ff0000' }
  ];

  return (
    <footer className="footer">
      <div className="footer-main py-5">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer-brand">
                <div className="logo-container mb-3">
                  <div className="logo-icon">✈️</div>
                </div>
                <h3 className="brand-name">Vibe Tribe Travels</h3>
                <p className="brand-description">
                  Making your travel dreams come true since 2013. We specialize in creating 
                  unforgettable experiences that connect you with the world's most beautiful destinations.
                </p>
                <div className="footer-social">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                    >
                      <span className="social-icon">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-links">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-links">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-links">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 className="footer-title">Legal</h5>
              <ul className="footer-links">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="footer-link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright mb-0">
                &copy; {currentYear} Vibe Tribe Travels. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="made-with mb-0">
                Made with ❤️ for travelers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 