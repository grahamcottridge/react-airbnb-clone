import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "../src/components/navbar/NavBar.component";
import Home from "../src/pages/home/Home.component";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
