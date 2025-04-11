
import React from 'react';
import portfolioData from '../../data/portfolioData';
import './Contact.css';

const Contact: React.FC = () => {
  const { contact } = portfolioData;

  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/thanmayi-j-r-a0965224b/', '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href={`mailto:${contact.email}`} className="contact-value">{contact.email}</a>
          </div>
          {contact.phone && (
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href={`tel:${contact.phone}`} className="contact-value">{contact.phone}</a>
            </div>
          )}
          {contact.address && (
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-value">{contact.address}</span>
            </div>
          )}
          <button className="connect-btn" onClick={handleConnectClick}>
            Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
