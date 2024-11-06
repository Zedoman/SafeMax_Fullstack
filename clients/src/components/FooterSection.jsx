// client/src/components/FooterSection.js
import React from 'react';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import TestimonialsSection from './TestimonialsSection';
import './FooterSection.css';

const FooterSection = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="footer-column">
        <AboutUsSection />
      </div>
      <div className="footer-column">
        <ServicesSection />
      </div>
      <div className="footer-column">
        <WhyChooseUsSection />
      </div>
      <div className="footer-column">
        <TestimonialsSection />
      </div>
    </div>

    <div className="footer-links">
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-of-service">Terms of Service</a>
    </div>

    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>

    <p>© 2024 SafeMax Security. All Rights Reserved.</p>
  </footer>
);

export default FooterSection;
