import React from 'react';

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      <div className="columns">
        <div className="column">
          <strong>Computer Fundamentals</strong>
          <ul>
            <li>Operating Systems</li>
            <li>DBMS</li>
            <li>Computer Networks</li>
            <li>OOPS</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="column">
          <strong>Technical Skills</strong>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Java</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>K-Means</li>
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
      </div>
    </div>
  );
};

export default Skills;
