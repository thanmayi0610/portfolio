import React from 'react';
import portfolioData from '../../data/portfolioData';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  const { experiences } = portfolioData;
  
  return (
    <section id="experience" className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map(experience => (
          <div key={experience.id} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title">{experience.title}</h3>
              <div className="experience-badges">
                <span className="company-badge">{experience.company}</span>
                <span className="duration-badge">{experience.duration}</span>
              </div>
            </div>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;