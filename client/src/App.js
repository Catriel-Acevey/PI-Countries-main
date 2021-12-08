import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Activity from "./components/Activity";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Nav} />
      <Switch>
        <Route path="/home/activity" component={Activity} />
        <Route path="/home/:id" component={Detail} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
