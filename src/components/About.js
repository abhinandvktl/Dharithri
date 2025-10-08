import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

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

  // Inauguration details
  const inauguration = {
    photos: ['/inauguration.jpg', '/InStills1.jpg', '/InStills2.jpg', '/InStills3.jpg'],
    title: 'Inauguration Ceremony',
    guestName: 'Dr. Sabine Sivadasan',
    guestTitle: 'Founder & Medical Director, Sabine Hospital and Research Centre, Muvattupuzha',
    date: '',
    awardsTitle: 'Awards & Recognitions',
    awards: [
      'Lifetime Achievement Award in Healthcare – 2023 by The Times of India Group',
      'Best IVF and Infertility Award'
    ]
  };

  const totalSlides = inauguration.photos.length;

  const setSlideWithFade = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setSlideIndex(newIndex);
      // allow the new image to fade back in
      setTimeout(() => setIsFading(false), 50);
    }, 150);
  };

  const nextSlide = () => setSlideWithFade((slideIndex + 1) % totalSlides);
  const prevSlide = () => setSlideWithFade((slideIndex - 1 + totalSlides) % totalSlides);
  const goToSlide = (idx) => setSlideWithFade(idx);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideWithFade((slideIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(id);
  }, [slideIndex, totalSlides]);

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
          </div>
          
          <div className={`about-image ${isVisible ? 'animate-fadeInRight' : ''}`}>
            <div className="inauguration-card">
              <div className="inauguration-photo">
                <img
                  src={inauguration.photos[slideIndex]}
                  alt={`Inauguration ${slideIndex + 1}`}
                  className={`carousel-image ${isFading ? 'is-fading' : ''}`}
                />
                <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous photo">‹</button>
                <button className="carousel-btn next" onClick={nextSlide} aria-label="Next photo">›</button>
                <div className="carousel-dots">
                  {inauguration.photos.map((_, idx) => (
                    <button
                      key={idx}
                      className={`dot ${idx === slideIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="inauguration-info">
                <h3>{inauguration.title}</h3>
                <p className="guest-name">{inauguration.guestName}</p>
                <p className="guest-title">{inauguration.guestTitle}</p>
                {inauguration.date && (
                  <p className="inauguration-date">{inauguration.date}</p>
                )}
                <div className="awards">
                  <p className="awards-title">{inauguration.awardsTitle}</p>
                  <ul className="awards-list">
                    {inauguration.awards.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
