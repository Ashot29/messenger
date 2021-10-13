import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import io from "socket.io-client";
import Navigation from "./components/navigation/index";
import Main from "./components/main/index";
import "./App.css";
import AuthForm from "./components/authForm";

const socket = io("http://localhost:4000");

function App(): JSX.Element {
  const [loginState, setLoginState] = useState(true);

  const renderElement = !loginState ? (
    <AuthForm />
  ) : (
    <>
      <Navigation />
      <Main />
    </>
  );

  return (
    <div className="app">
      <Router>
        {renderElement}
      </Router>
    </div>
  );
}

export default App;
