import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation: React.FC = () => {
  return (
    <nav className='navigation'>
      <div className='navgation-wrapper'>
        <Link to='/' className="brand-logo nav-link">
          Messenger
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to='/login' className='nav-link'>Login</Link>
          </li>
          <li>
            <Link to='/register' className='nav-link'>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
