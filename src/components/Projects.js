import React from 'react';
import './Project.css'; // Import the CSS file for styling

const projects = [
  {
    name: 'Netflix Clone',
    description: 'A Netflix clone built using React and Firebase.',
    
    githubLink: 'https://github.com/paridhigupta24/Netflix_clone',
  },
  {
    name: 'Hangman Game',
    description: 'A classic Hangman game developed in JavaScript.',
   
    githubLink: 'https://github.com/hangman-game',
  },
  {
    name: 'Color Detection Model',
    description: 'A machine learning model to detect colors in images.',
  
    githubLink: 'https://github.com/paridhigupta24/Color_detection',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
           
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
