import React, { useEffect, useState } from 'react';
import './Facilities.css';

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('facilities');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Amenities chips (no icons)
  const amenities = [
    'Wi‑Fi',
    'Hot Water',
    'Laundry Service',
    'Single Room (A/C)',
    'Single Room (Non A/C)',
    'Double Room (A/C)',
    'Deluxe Room'
  ];

  // Local facility images named facility1.jpg ... facility12.jpg in public/
  const galleryImages = Array.from({ length: 12 }, (_, i) => `/facility${i + 1}.jpg`);
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 3);

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="facilities-header">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            Take a virtual tour of our world-class postnatal care facilities
          </p>
        </div>

        {/* Amenities Chips */}
        <div className={`amenities ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {amenities.map((label, idx) => (
            <span key={idx} className="amenity-chip">{label}</span>
          ))}
        </div>

        {/* Simple gallery from local images */}
        <div className={`facility-gallery ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {imagesToShow.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`Facility ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* See more / less */}
        {galleryImages.length > 3 && (
          <div className="gallery-actions">
            <button className="see-more-ghost" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'See Less' : 'See More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Facilities;
