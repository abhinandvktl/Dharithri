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
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 12.06C22 6.55 17.52 2.06 12 2.06S2 6.55 2 12.06c0 4.97 3.66 9.09 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34v7.03C18.34 21.15 22 17.03 22 12.06z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" fill="currentColor"/>
                </svg>
              </a>
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
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
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
