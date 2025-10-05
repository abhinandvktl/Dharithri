import React, { useEffect, useState } from 'react';
import './Facilities.css';

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Placeholder images - replace with your actual facility photos
  const facilities = [
    {
      id: 1,
      title: "Private Recovery Rooms",
      description: "Comfortable, well-equipped private rooms for mothers and babies",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop",
      category: "Accommodation"
    },
    {
      id: 2,
      title: "Nursery & Care Center",
      description: "Specialized nursery with modern equipment for newborn care",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop",
      category: "Care Facilities"
    },
    {
      id: 3,
      title: "Dining & Nutrition Center",
      description: "Nutritious meals prepared by our expert nutritionists",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      category: "Dining"
    },
    {
      id: 4,
      title: "Recreation & Relaxation",
      description: "Peaceful spaces for relaxation and family bonding",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      category: "Recreation"
    },
    {
      id: 5,
      title: "Medical Consultation Room",
      description: "Professional medical consultation and examination facilities",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999e9?w=500&h=400&fit=crop",
      category: "Medical"
    },
    {
      id: 6,
      title: "Family Lounge",
      description: "Comfortable family areas for visiting relatives and friends",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
      category: "Family Areas"
    }
  ];

  const categories = ["All", "Accommodation", "Care Facilities", "Dining", "Recreation", "Medical", "Family Areas"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFacilities = activeCategory === "All" 
    ? facilities 
    : facilities.filter(facility => facility.category === activeCategory);

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="facilities-header">
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            Take a virtual tour of our world-class postnatal care facilities
          </p>
        </div>

        <div className={`facility-categories ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={`facilities-grid ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {filteredFacilities.map((facility, index) => (
            <div 
              key={facility.id} 
              className={`facility-card ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(facility)}
            >
              <div className="facility-image">
                <img src={facility.image} alt={facility.title} />
                <div className="facility-overlay">
                  <div className="overlay-content">
                    <span className="category-tag">{facility.category}</span>
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div className="facility-content">
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <span className="modal-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Facilities;
