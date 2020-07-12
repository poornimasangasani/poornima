import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from "./components/About";
class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default AppRoutes;
