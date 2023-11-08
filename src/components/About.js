import React, { useState } from 'react';
import '../About.css';
import Skills from './Skills'; // Import the Skills component
import Education from './Education';

const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about">
      <div className="left-content">
      <img
          src="https://www.usnews.com/object/image/00000186-7a58-d975-aff7-fffbc5a30000/torres-del-paine-national-park-stock.jpg?update-time=1677089882979&size=responsive640"
          alt="Paridhi Gupta"
          class="small-profile-image"
        />
        <p>
          Hi, I'm Paridhi Gupta, a Full Stack Developer currently pursuing my Bachelor's degree at VIT Vellore.
        </p>
        <p>
          My journey in the world of technology has been an exciting one, where I've honed my skills to become proficient in programming, skilled in problem-solving, and committed to contributing effectively within a global team environment while providing innovative solutions.
        </p>
      </div>
      <div className="right-content">
        <div className="tab-buttons">
          <button
            onClick={() => handleTabClick('Skills')}
            className={activeTab === 'Skills' ? 'active' : ''}
          >
            Skills
          </button>
          <button
            onClick={() => handleTabClick('Education')}
            className={activeTab === 'Education' ? 'active' : ''}
          >
            Education
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'Skills' && (
            <Skills />
          )}

          {activeTab === 'Education' && (
            <Education />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
