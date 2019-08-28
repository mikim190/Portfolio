import React, { Component } from "react";
import Menu from "./Menu.jsx";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <main id="projects">
          <h1 className="lg-heading">
            My <span className="text-secondary">Projects</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <div className="about-info">
            <div className="job job-1">
              <h3>EATNOW</h3>
              <h6>Full Stack Developer</h6>
              <a href="https://github.com/mikim190/EatNow.git" target="_blank">
                Github repo
              </a>
              <p>
                <li>
                  Technologies: React, Node, Express, PostgreSQL, Webpack,
                  Docker, AWS EC2, NginX
                </li>
              </p>
            </div>
            <div className="job job-2">
              <h3>OPEN RESTAURANT</h3>
              <h6>Front-End Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                vitae enim quis eum! Voluptatibus velit repudiandae laudantium
                perspiciatis sapiente similique repellat nesciunt dolorem?
                Voluptates nemo earum provident sed velit non.
              </p>
            </div>
            <div className="job job-3">
              <h3>MOOD TRACKER</h3>
              <h6>Full Stack Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                vitae enim quis eum! Voluptatibus velit repudiandae laudantium
                perspiciatis sapiente similique repellat nesciunt dolorem?
                Voluptates nemo earum provident sed velit non.
              </p>
            </div>
          </div>
        </main>
        <div className="main-footer footer">Copyright &copy; 2019</div>
      </div>
    );
  }
}

export default Projects;
