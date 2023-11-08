import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="left-content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxj8oDpcDZHanZ8Qu3edkc30QXkVhGJNbLwQ&usqp=CAU"
          alt="Paridhi Gupta"
          className="profile-image"
        />
      </div>
      <div className="right-content">
        <h2 className="name">Hi, I'm Paridhi Gupta</h2>
        <div className="content">
          <p className="greeting">
            I'm a passionate full-stack developer and an aspiring computer science student.
          </p>
          <p>
            Here, you can explore my projects and get to know more about me. Welcome to my portfolio!
          </p>
          <div className="cta-buttons">
            <a href="/about" className="btn about-btn">About Me</a>
            <a href="/projects" className="btn projects-btn">My Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
