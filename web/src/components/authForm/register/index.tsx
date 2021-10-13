import React from "react";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

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

const Register: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <h2>Register</h2>
      <form
        id="register"
        onSubmit={(event) => {
          event?.preventDefault();
          console.log("Register");
        }}
      >
        <ThemeProvider theme={theme}>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", margin: "12px 0" }}
          >
            <AlternateEmailIcon sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
            <TextField
              label="Enter an Email"
              fullWidth
              variant="standard"
              color="primary"
              className={classes.field}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", margin: "12px 0" }}
          >
            <AccountCircle sx={{ color: "#7B1FA2", mr: 1, my: 0.5 }} />
            <TextField
              label="Create a UserName"
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
              label="Create a Password"
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
            <div className="login-or-register" onClick={() => console.log(1)}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span className="login-or-register-button">Login</span>
              </Link>
            </div>
          </div>
        </ThemeProvider>
      </form>
    </>
  );
};

export default Register;
