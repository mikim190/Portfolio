import React, { Component } from "react";
import Menu from "./Menu.jsx";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <main id="contact">
          <h1 className="lg-heading">
            Contact <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">Contact me at...</h2>
          <div className="about-info" />
        </main>
        <div className="main-footer footer">Copyright &copy; 2019</div>
      </div>
    );
  }
}

export default Contact;
