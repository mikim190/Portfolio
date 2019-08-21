import React, { Component } from "react";
import Menu from "./Menu.jsx";
import Main from "./Main.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
