import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation: React.FC = () => {
  return (
    <nav className='navigation'>
      <div className='navgation-wrapper'>
        <Link to="/dashboard" className="brand-logo nav-link">
          Messenger
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/dashboard" className='nav-link'>Dashboard</Link>
          </li>
          <li>
            <Link to="/about" className='nav-link'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
