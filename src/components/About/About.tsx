// src/components/About/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
  // Splitting the about text into paragraphs
  const aboutParagraphs = [
    "I’m Thanmayi,a passionate full-stack development intern at Stacklane. I'm currently improving my skills in both frontend and backend technologies.Beyond tech, I’m a keen learner who enjoys exploring new perspectives and experiences. I love diving into books, having meaningful conversations, and discovering the little things that make life interesting. Curiosity drives me, and I believe growth comes from staying open, humble, and always willing to learn."
  ];
  
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-title-container">
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-content">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;