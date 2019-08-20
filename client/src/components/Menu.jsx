import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      current: ""
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
      showMenu: false,
      current: e.target.dataset.id
    });
  }

  render() {
    let menu = this.state.showMenu;
    let show = menu ? "show" : "";
    let curr = this.state.current ? "current" : "";

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
              className={`nav-item ${curr} ${show}`}
            >
              <Link data-id="1" className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li
              onClick={e => this.handleClick(e)}
              className={`nav-item ${curr} ${show}`}
            >
              <Link data-id="2" className="nav-link" to="/about">
                ABOUT ME
              </Link>
            </li>
            <li className={`nav-item ${show}`}>
              <Link className="nav-link" to="/projects">
                MY PROJECTS
              </Link>
            </li>
            <li className={`nav-item ${show}`}>
              <Link className="nav-link" to="/contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
