import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/client/dist/index.html" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
