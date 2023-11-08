import React from 'react';

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      <div className="columns">
        <div className="column">
          <strong>Programming Languages:</strong>
          <ul>
            <li>C/C++</li>
            <li>Python</li>
            <li>Java (beginner)</li>
          </ul>
        </div>
        <div className="column">
          <strong>Web Development:</strong>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <strong>Tools and Technologies:</strong>
          <ul>
            <li>AWS Cloud Foundation</li>
            <li>MERN Full Stack</li>
          </ul>
        </div>
        <div className="column">
          <strong>Machine Learning:</strong>
          <ul>
            <li>K-Means</li>
          </ul>
        </div>
        <div className="column">
          <strong>Data Visualization:</strong>
          <ul>
            <li>Matplotlib</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
