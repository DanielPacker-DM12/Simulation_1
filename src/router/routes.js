import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/shelves/home";
import ShelfA from "./components/shelves/shelfA";
import ShelfB from "./components/shelves/shelfB";
import ShelfC from "./components/shelves/shelfC";
import ShelfD from "./components/shelves/shelfD";

export default (
  <Switch>
    <Route component={shelves} exact path="/" />
    <Route component={bin} path="/components/shelves/shelfA" />
    <Route component={detail} path="/components/shelves/shelfB" />
    <Route component={create} path="/components/shelves/shelfC" />
  </Switch>
);
