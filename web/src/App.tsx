import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard/index";
import Login from "./components/login";
import Register from "./components/register/index";
import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./stateManagement/reducers/rootReducer";

function App(): JSX.Element {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          {!isAuth ? <Redirect to="/login" /> : <Redirect to="/dashboard" />}
        </Route>
        <Route exact path="/dashboard">
          {!isAuth ? <Redirect to="/login" /> : <Dashboard />}
        </Route>
        <Route path="/login">
          {!isAuth ? <Login /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/register">
          {!isAuth ? <Register /> : <Redirect to="/dashboard" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
