import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    });
  };

return (
  <section id="contact" className="contact">
    <div className="container">
      <div className="contact-header">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch with us to discuss your postnatal care needs
        </p>
      </div>

      <div className="contact-content">
        <div className={`contact-info ${isVisible ? 'animate-fadeInLeft' : ''}`}>
          <h3>Get in Touch</h3>
          <p>
            We're here to help you and your family during this special time.
            Contact us to learn more about our services or to schedule a visit.
          </p>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-content">
                <h4>Address</h4>
                <p>K.Puram, Puthentheru, Tanur, Malappuram, 676307</p>
                <h4 style={{ marginTop: 12 }}>Phone</h4>
                <p>+91 7034187123, +91 9744517475</p>
                <h4 style={{ marginTop: 12 }}>Email</h4>
                <p>dharithripostnatalcare@gmail.com</p>
                <h4 style={{ marginTop: 12 }}>Hours</h4>
                <p>24/7 Care Available</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
        </div>

        <div className={`contact-form-container ${isVisible ? 'animate-fadeInRight' : ''}`}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">Select a service</option>
                <option value="newborn-care">Newborn Care</option>
                <option value="mother-recovery">Mother's Recovery</option>
                <option value="feeding-support">Feeding Support</option>
                <option value="family-bonding">Family Bonding</option>
                <option value="education">Education & Training</option>
                <option value="consultation">General Consultation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us about your needs and how we can help..."
              ></textarea>
            </div>

            <button type="submit" className="btn form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
};

export default Contact;
