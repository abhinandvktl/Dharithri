import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "🤱",
      title: "Newborn Care",
      description: "Expert care for your precious newborn with specialized attention to feeding, sleeping, and developmental milestones.",
      features: ["Feeding support", "Sleep guidance", "Health monitoring", "Growth tracking"]
    },
    {
      icon: "👩‍⚕️",
      title: "Mother's Recovery",
      description: "Comprehensive postnatal care for new mothers including physical recovery, emotional support, and wellness guidance.",
      features: ["Physical recovery", "Emotional support", "Nutrition guidance", "Exercise programs"]
    },
    {
      icon: "🍼",
      title: "Feeding Support",
      description: "Professional lactation support and feeding guidance to ensure both mother and baby thrive during feeding journey.",
      features: ["Lactation support", "Bottle feeding", "Feeding schedules", "Nutrition advice"]
    },
    {
      icon: "🏠",
      title: "Family Bonding",
      description: "Facilitate precious bonding moments between family members in a supportive, nurturing environment.",
      features: ["Bonding activities", "Family time", "Photo sessions", "Memory making"]
    },
    {
      icon: "📚",
      title: "Education & Training",
      description: "Comprehensive education for new parents on baby care, safety, and development milestones.",
      features: ["Parenting classes", "Safety training", "Development guidance", "Resource materials"]
    },
    {
      icon: "🆘",
      title: "24/7 Support",
      description: "Round-the-clock professional support and emergency care to ensure peace of mind for your family.",
      features: ["24/7 availability", "Emergency care", "Professional support", "Peace of mind"]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive postnatal care designed for your family's unique needs
          </p>
        </div>
        
        <div className={`services-grid ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className={`services-cta ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h3>Ready to Experience Our Care?</h3>
          <p>Contact us today to discuss your family's specific needs and book your stay.</p>
          <div className="cta-buttons">
            <button className="btn">Book Consultation</button>
            <button className="btn btn-outline">View Packages</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
