import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import "./App.css";
import NavbarCustom from "./components/navbar";
import Home from "./screens/home";
import Profile from "./screens/profile";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <NavbarCustom title={"Boostrap"} />
          <Route exact path="/" component={withRouter(Home)} exact />
          <Route path="/profile" component={withRouter(Profile)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
