import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import './assets/styles/containers/App.css'
const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
  </BrowserRouter>
);

export default App;
