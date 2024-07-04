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
        I am currently pursuing a B.Tech in Computer Science Engineering with a specialization in Bioinformatics at Vellore Institute Of Technology, maintaining a strong CGPA of 8.76. My technical expertise includes proficiency in Java, DSA, HTML, CSS, JavaScript, Python, React, MongoDB, and a solid understanding of OS, DBMS, Computer Networks, OOPS, and SQL.
        </p>
        <p>
        I have a passion for solving complex problems and implementing innovative solutions, demonstrated through various academic projects and practical applications. I am committed to continuous learning and have acquired certifications in MERN Full Stack Development and AWS Cloud Foundation, enhancing my skill set and adaptability in the ever-evolving field of technology. </p>
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
