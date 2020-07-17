import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Sandbox from "./containers/Sandbox";
import Canvas from "./containers/Canvas";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sandbox">
        <Sandbox />
      </Route>
      <Route exact path="/canvas">
        <Canvas />
      </Route>
    </Switch>
  );
}
