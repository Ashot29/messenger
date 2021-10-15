import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import "./index.css";
import { usersService, IUser } from "./../../services/users.service";
import { Redirect, useHistory } from "react-router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7B1FA2",
    },
  },
});

const useStyles = makeStyles({
  field: {
    borderColor: "#7B1FA2",
  },
  button: {
    width: "100%",
  },
});

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const [registeringUser, updateRegisteringUser] = useState<IUser>({
    userName: "",
    email: "",
    password: "",
  });

  function changeUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = event.target;
    updateRegisteringUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function registeringNewUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    usersService.post(registeringUser);
    updateRegisteringUser({
      userName: "",
      email: "",
      password: "",
    });
    history.push('./login')
  }

  return (
    <div className="login-form-wrapper">
      <div className="login-form">
        <h2>Register</h2>
        <form id="register" onSubmit={registeringNewUser}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", margin: "12px 0" }}
            >
              <AlternateEmailIcon sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
              <TextField
                required
                value={registeringUser.email}
                name="email"
                label="Enter an Email"
                inputProps={{
                  pattern: "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                }}
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
              <AccountCircle sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
              <TextField
                required
                value={registeringUser.userName}
                name="userName"
                label="Create a UserName"
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
                value={registeringUser.password}
                name="password"
                label="Create a Password"
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
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                >
                  Register
                </Button>
              </Box>
              <div className="login-or">or</div>
              <div className="login-or-register">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span className="login-or-register-button">Login</span>
                </Link>
              </div>
            </div>
          </ThemeProvider>
        </form>
      </div>
    </div>
  );
};

export default Register;
