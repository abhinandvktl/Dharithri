import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>DHARITHRI</h3>
              <p>Postnatal Care Center</p>
            </div>
            <p className="footer-description">
              Providing compassionate, professional postnatal care for new mothers
              and their precious babies in a warm, nurturing environment.
            </p>
            {/* <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div> */}
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a href="#facilities" onClick={() => scrollToSection('facilities')}>Facilities</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="#">Newborn Care</a></li>
              <li><a href="#">Mother's Recovery</a></li>
              <li><a href="#">Feeding Support</a></li>
              <li><a href="#">Family Bonding</a></li>
              <li><a href="#">Education & Training</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Near Devathar highschool,
                  K.puram, Puthentheru,
                  Malappuram - 676307
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 7034187123, +91 9744517475</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>dharithripostnatalcare@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} DHARITHRI Postnatal Care Center. All rights reserved.</p>
            {/* <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
