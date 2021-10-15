import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import io from "socket.io-client";
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard/index";
import Login from "./components/login";
import Register from "./components/register/index";
import "./App.css";

const socket = io("http://localhost:4000");

function App(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          {!isAuth ? <Redirect to='/login' /> : <Redirect to='/dashboard' />}
        </Route>
        <Route exact path="/dashboard">
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
