import React from 'react';
import portfolioData from '../../data/portfolioData';
import './Education.css';

const Education: React.FC = () => {
  const { education } = portfolioData;
  
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map(edu => (
          <div key={edu.id} className="education-card">
            <div className="education-header">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-badges">
                <span className="institution-badge">{edu.institution}</span>
                <span className="duration-badge">{edu.duration}</span>
              </div>
            </div>
            {edu.description && (
              <p className="education-description">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;