// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           Kabir Asani
//         </Link>
//         <div className="navbar-links">
//           <a href="#about" className="navbar-link">About</a>
//           <a href="#experience" className="navbar-link">Experience</a>
//           <a href="#projects" className="navbar-link">Projects</a>
//           <a href="#interests" className="navbar-link">Interests</a>
//           <a href="#education" className="navbar-link">Education</a>
//           <a href="#contact" className="navbar-link">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import portfolioData from '../../data/portfolioData';

const Navbar: React.FC = () => {
  const { name } = portfolioData;
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          {name}
        </Link>
        <div className="navbar-links">
          <Link to="/#about" className="navbar-link">About</Link>
          <Link to="/#experience" className="navbar-link">Experience</Link>
          <Link to="/#projects" className="navbar-link">Projects</Link>
          <Link to="/#interests" className="navbar-link">Interests</Link>
          <Link to="/#education" className="navbar-link">Education</Link>
          <Link to="/#contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;