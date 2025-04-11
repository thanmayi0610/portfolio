import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Thanmayi J R. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/thanmayi-j-r-a0965224b/" className="footer-link">LinkedIn</a>
          <a href="https://www.instagram.com/thanmayi.jr?igsh=MXQxOGF5b3R0MTFqeA==" className="footer-link">Instagram</a>
          <a href="https://github.com/thanmayi0610" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;