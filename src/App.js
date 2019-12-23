import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import "./forecast.css";

class App extends Component {
  state = {
    displayHomePage: true
  };
  displayDetails = () => {
    this.setState({
      displayHomePage: false
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar displayDetails={this.displayDetails} />
        <p>Hello from app</p>
      </React.Fragment>
    );
  }
}

export default App;
