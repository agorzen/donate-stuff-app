import React from "react";
import Home from "./components/Home";
//
import Login from "./components/1.Header/Login";
import Logout from "./components/1.Header/Logout";
import Registration from "./components/1.Header/Registration";

import "./App.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
