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
          <h2 className="sm-heading">Take a look at these projects...</h2>
          <div className="about-info">
            <div className="bio">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis soluta quas aut autem sapiente nam aliquam numquam
                harum placeat, blanditiis mollitia, repudiandae corporis nihil
                quis quos laudantium modi necessitatibus. Veniam?
              </p>
            </div>

            <div className="job job-1">
              <h3>EATNOW</h3>
              <h6>Full Stack Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                vitae enim quis eum! Voluptatibus velit repudiandae laudantium
                perspiciatis sapiente similique repellat nesciunt dolorem?
                Voluptates nemo earum provident sed velit non.
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
