import React from "react";
import Login from "./login";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import Register from "./register/index";

const AuthForm: React.FC = () => {
  return (
    <div className="login-form-wrapper">
      <Switch>
        <div className="login-form">
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </div>
      </Switch>
    </div>
  );
};

export default AuthForm;
