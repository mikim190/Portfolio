import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <main id="home">
          <h1 className="lg-heading">
            Kim <span className="text-secondary">Tran</span>
          </h1>
          <h2 className="sm-heading">Full Stack Software Engineer</h2>
          <div className="icons">
            <a href="https://www.linkedin.com/in/mkimtran/">
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="https://github.com/mikim190">
              <i className="fab fa-github fa-2x" />
            </a>
            <a href="#!">
              <i className="fas fa-envelope-square fa-2x" />
            </a>
          </div>
        </main>
        <footer>
          <cite>Photo by NASA on Unsplash</cite>
        </footer>
      </div>
    );
  }
}

export default Home;
