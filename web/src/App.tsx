import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import io from "socket.io-client";
import Navigation from "./components/navigation/index";
import Main from './components/main/index';

const socket = io("http://localhost:4000");

function App(): JSX.Element {
  const [state, setState] = useState({ message: "", name: "" });

  return (
    <div className="app">
      <Router>
        <Navigation />
        <Main />
      </Router>
    </div>
  );
}

export default App;
