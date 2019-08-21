import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  handleClick(e) {
    this.setState({
      showMenu: false
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
            <li
              onClick={e => this.handleClick(e)}
              className={`nav-item ${show}`}
            >
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li
              onClick={e => this.handleClick(e)}
              className={`nav-item ${show}`}
            >
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                ABOUT ME
              </NavLink>
            </li>
            <li
              onClick={e => this.handleClick(e)}
              className={`nav-item ${show}`}
            >
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/projects"
              >
                MY PROJECTS
              </NavLink>
            </li>
            <li
              onClick={e => this.handleClick(e)}
              className={`nav-item ${show}`}
            >
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact"
              >
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
