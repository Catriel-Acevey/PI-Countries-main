import React from "react";
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
      <Route exact path="/home" component={Home} />
      <Route path="/home/:id" component={Detail} />
      <Route path="/home/activity" component={Activity} />
    </div>
  );
}

export default App;
