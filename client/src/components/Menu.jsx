import React, { Component } from "react";

class Menu extends React.Component {
  render() {
    return (
      <header>
        <div className="menu-btn">
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>

          <ul className="menu-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="/about.html" className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a href="/projects.html" className="nav-link">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact.html" className="nav-link">
                CONTACT ME
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
