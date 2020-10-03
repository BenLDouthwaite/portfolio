import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Sandbox from "./containers/Sandbox";
import Canvas from "./containers/CanvasPage";
import Tree from "./containers/TreePage";
import ThreeFiber from "./containers/ThreeFiber";
import Sudoku from "./containers/Sudoku";

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
      <Route exact path="/tree">
        <Tree />
      </Route>
      <Route exact path="/three-fiber">
        <ThreeFiber />
      </Route>
      <Route exact path="/sudoku">
        <Sudoku />
      </Route>
    </Switch>
  );
}
