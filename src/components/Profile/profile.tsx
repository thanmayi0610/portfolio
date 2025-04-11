import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import portfolioData from '../../data/portfolioData';
import './Profile.css';

const Profile: React.FC = () => {
  const { name, title, socialLinks } = portfolioData;

  // Map social media names to their corresponding icons
  const getIconForSocial = (name: string) => {
    switch (name.toLowerCase()) {
      case 'linkedin':
        return faLinkedin;
      case 'github':
        return faGithub;
      case 'instagram':
        return faInstagram;
      default:
        return null;
    }
  };

  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-image-container">
          <img 
            src="/profilepic.jpg" 
            alt={name} 
            className="profile-image" 
          />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">
            {name} <span className="profile-title">({title})</span>
          </h1>
          <div className="profile-badges">
            <span className="profile-badge">Developer</span>
            {/* <span className="profile-badge">Creator</span> */}
          </div>
          <div className="profile-social-links">
            {socialLinks.map(link => {
              const icon = getIconForSocial(link.name);
              return (
                icon && (
                  <a 
                    key={link.id} 
                    href={link.url} 
                    className="profile-social-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={icon} className="social-icon" />
                    {link.name}
                  </a>
                )
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
