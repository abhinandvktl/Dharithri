import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'animate-fadeInLeft' : ''}`}>
            <h2 className="section-title">About DHARITHRI</h2>
            <p className="section-subtitle">
              Your Trusted Partner in Postnatal Care
            </p>
            <p className="about-description">
              At DHARITHRI, we understand that the postnatal period is a crucial time 
              for both mother and baby. Our dedicated team of healthcare professionals 
              provides comprehensive care in a warm, supportive environment designed 
              to promote healing, bonding, and confidence.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">👩‍⚕️</div>
                <div className="feature-content">
                  <h4>Expert Care</h4>
                  <p>Licensed healthcare professionals with specialized training in postnatal care</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🏠</div>
                <div className="feature-content">
                  <h4>Home-like Environment</h4>
                  <p>Comfortable, private rooms designed to feel like home</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">💝</div>
                <div className="feature-content">
                  <h4>Personalized Care</h4>
                  <p>Individualized care plans tailored to each family's unique needs</p>
                </div>
              </div>
            </div>
            
            <button className="btn">Learn More About Us</button>
          </div>
          
          <div className={`about-image ${isVisible ? 'animate-fadeInRight' : ''}`}>
            <div className="image-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">🏥</div>
                <p>Facility Image</p>
                <small>Add your facility photos here</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
