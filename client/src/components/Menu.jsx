import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    let menu = this.state.showMenu;
    let show = menu ? "show" : "";

    return (
      <header>
        <div
          className={`menu-btn ${menu ? "close" : ""}`}
          onClick={this.toggleMenu}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={`menu ${show}`}>
          <div className={`menu-branding ${show}`}>
            <div className="portrait" />
          </div>

          <ul className={`menu-nav ${show}`}>
            <li className={`nav-item current ${show}`}>
              {/* <a href="/" className="nav-link">
                HOME
              </a> */}
              <NavLink
                className="nav-link"
                activeStyle={{ color: "$secondary-color" }}
                to="/client/dist/index.html"
              >
                HOME
              </NavLink>
            </li>
            <li className={`nav-item ${show}`}>
              {/* <a href="about.html" className="nav-link">
                ABOUT ME
              </a> */}
              <NavLink className="nav-link" to="/about">
                ABOUT ME
              </NavLink>
            </li>
            <li className={`nav-item ${show}`}>
              {/* <a href="projects.html" className="nav-link">
                MY PROJECTS
              </a> */}
              <NavLink className="nav-link" to="/projects">
                MY PROJECTS
              </NavLink>
            </li>
            <li className={`nav-item ${show}`}>
              {/* <a href="contact.html" className="nav-link">
                CONTACT ME
              </a> */}
              <NavLink className="nav-link" to="/contact">
                CONTACT ME
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
