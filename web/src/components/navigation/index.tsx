import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { RootState } from "../../stateManagement/reducers/rootReducer";
import { authLogout } from "../../stateManagement/actions/actionCreators/authActionCreator";
import { useDispatch } from "react-redux";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const logout = () => {
    dispatch(authLogout());
  };

  const navLink = !isAuth ? (
    <>
      <li>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </>
  ) : (
    <li>
      <span className="nav-link" onClick={logout}>
        Logout
      </span>
    </li>
  );

  return (
    <nav className="navigation">
      <div className="navgation-wrapper">
        <Link to="/" className="brand-logo nav-link">
          Messenger
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {navLink}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
