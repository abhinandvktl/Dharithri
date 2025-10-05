import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h1 className="hero-title">
            Welcome to <span className="highlight">DHARITHRI</span>
          </h1>
          <p className="hero-subtitle">
            Premium Postnatal Care for New Mothers and Newborn Babies
          </p>
          <p className="hero-description">
            Experience compassionate, professional care in a warm, nurturing environment 
            designed specifically for new mothers and their precious little ones.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary animate-pulse">
              Book Your Stay
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>
        
        <div className={`hero-stats ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Families</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Care Available</p>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
