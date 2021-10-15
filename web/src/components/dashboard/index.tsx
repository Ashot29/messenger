import React from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ae3fdd",
    },
  },
});

const useStyles = makeStyles({
  button: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="dashboard-content-wrapper">
      <div className="dashboard-content">
        <div className="dashboard-users">
          <ul className="users-list">
            <li className='user-list-item'>Ashot</li>
            <li className='user-list-item'>Ashot</li>
            <li className='user-list-item'>Ashot</li>
            <li className='user-list-item'>Ashot</li>
          </ul>
        </div>
        <div className="dashboard-chat-content">
          <div className="dashboard-chat">chat</div>
          <div className="dashboard-chat-input-send">
            <div className="dashboard-input">
              <input className='message-box' type='text' placeholder='Type a message...' />
            </div>
            <div className="dashboard-input-send-button">
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  className={classes.button}
                  size="large"
                  color="primary"
                >
                  <SendIcon sx={{ color: "#FFF" }} />
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
