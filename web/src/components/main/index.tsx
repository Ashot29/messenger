import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Dashboard from './pages/dashboard';

const Main: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
