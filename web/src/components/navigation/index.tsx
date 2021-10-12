import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 pd-r-l">
        <Link to="/" className="brand-logo">
          Messenger
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Chat</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
