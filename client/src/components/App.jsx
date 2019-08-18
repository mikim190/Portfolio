import React, { Component } from "react";
import Menu from "./Menu.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />

        <main id="home">
          <h1 className="lg-heading">
            Kim <span className="text-secondary">Tran</span>
          </h1>
          <h2 className="sm-heading">Full Stack Software Engineer</h2>
          <div className="icons">
            <a href="#!">
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x" />
            </a>
            <a href="#!">
              <i className="fas fa-envelope-square fa-2x" />
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
