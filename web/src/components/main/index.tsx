import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Home from './pages/home';

const Main: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
