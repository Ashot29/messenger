import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import io from "socket.io-client";
import Navigation from "./components/navigation";
import Dashboard from './components/dashboard/index';
import Login from "./components/login";
import Register from './components/register/index';
import "./App.css";

const socket = io("http://localhost:4000");

function App(): JSX.Element {

  return (
    <>
    <Navigation />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default App;
