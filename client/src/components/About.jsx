import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <main id="about">
          <h1 className="lg-heading">
            About <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">Let me tell you a few things...</h2>
          <div className="about-info">
            {/* <img src="" alt="Kim Tran" className="bio-image" /> */}
            <div className="bio-image" />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis soluta quas aut autem sapiente nam aliquam numquam
                harum placeat, blanditiis mollitia, repudiandae corporis nihil
                quis quos laudantium modi necessitatibus. Veniam?
              </p>
            </div>
          </div>
        </main>
        <div className="main-footer footer">Copyright &copy; 2019</div>
      </div>
    );
  }
}

export default About;
