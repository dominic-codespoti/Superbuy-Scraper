import React from "react";
import LandingPage from "./Pages/LandingPage.js"
import ScraperPage from "./Pages/ClothesPage.js"

import {
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/clothes" component={ScraperPage} />
    </Switch>
  );
}