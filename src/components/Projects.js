import React from 'react';
import './Project.css'; // Import the CSS file for styling

const projects = [
  {
    name: 'Hospital Management System',
    description: 'Implemented a robust Hospital Management System streamlining patient data management, appointment scheduling, and prescription tracking.      STACK USED: React, Node.js, MongoDB.',
    
    githubLink: 'https://github.com/paridhigupta24/user_page',
  },
  {
    name: 'Weather Forecast Prediction',
    description: 'The page takes the city name as input and gives the weather forecast with a 90% accuracy.         STACK USED: HTML, CSS, Javascript (ES6+), Bootstrap, OpenWeatherMap API. ',
   
    githubLink: 'https://github.com/paridhigupta24/WeatherAppe',
  },
  {
    name: 'Color Detection Model',
    description: 'A machine learning model to detect colors in images.        STACK USED: Machine Learning- OpenCV, K-Means, MatPlotLib',
  
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
