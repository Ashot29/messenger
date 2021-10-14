import React from "react";
import TextField from "@material-ui/core/TextField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import "./index.css";

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
  const classes = useStyles();

  return (
    <div className="login-form-wrapper">
      <div className="login-form">
        <h2>Login Form</h2>
        <form
          id="login"
          onSubmit={(event) => {
            event?.preventDefault();
            console.log("Login");
          }}
        >
          <ThemeProvider theme={theme}>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", margin: "12px 0" }}
            >
              <AlternateEmailIcon sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
              <TextField
                label="Email"
                fullWidth
                variant="standard"
                color="primary"
                className={classes.field}
              />
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "flex-end", margin: "12px 0" }}
            >
              <LockIcon sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                color="primary"
                className={classes.field}
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
                <Link
                  to="/register"
                  style={{ textDecoration: "none" }}
                >
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
