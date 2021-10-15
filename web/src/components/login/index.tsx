import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { usersService } from "../../services/users.service";
import "./index.css";
import {
  authLoadingEndFailure,
  authLoadingEndSuccess,
  authLoadingStart,
} from "./../../stateManagement/actions/actionCreators/authActionCreator";
import { useDispatch } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7B1FA2",
    },
  },
});

const useStyles = makeStyles({
  // hook useStyles
  field: {
    borderColor: "#7B1FA2",
  },
  button: {
    width: "100%",
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [loginUser, updateLoginUser] = useState({
    email: "",
    password: "",
  });

  function authorizingUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    usersService.checkEmail(loginUser.email).then((data: any) => {
      dispatch(authLoadingStart());
      data.length > 0 && data[0].password === loginUser.password
        ? dispatch(authLoadingEndSuccess({ token: data[0].id }))
        : dispatch(authLoadingEndFailure());
    });
    updateLoginUser({
      email: "",
      password: "",
    });
  }

  function changeUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    updateLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-form-wrapper">
      <div className="login-form">
        <h2>Login Form</h2>
        <form id="login" onSubmit={authorizingUser}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", margin: "12px 0" }}
            >
              <AlternateEmailIcon sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
              <TextField
                required
                value={loginUser.email}
                inputProps={{
                  pattern: "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                }}
                name="email"
                label="Email"
                fullWidth
                variant="standard"
                color="primary"
                className={classes.field}
                onChange={changeUserInfo}
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", margin: "12px 0" }}
            >
              <LockIcon sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
              <TextField
                required
                value={loginUser.password}
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                color="primary"
                className={classes.field}
                onChange={changeUserInfo}
              />
            </Box>
            <div className="login-actions">
              <Box sx={{ "& button": { mt: 4 } }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                  type="submit"
                >
                  Login
                </Button>
              </Box>
              <div className="login-or">or</div>
              <div className="login-or-register">
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span className="login-or-register-button">Register</span>
                </Link>
              </div>
            </div>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
};

export default Login;
