import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stateManagement/reducers/rootReducer";

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

interface ChatInputProps {
  updateMessages: any;
  socket: any;
  thread: string;
}

const ChatInput = ({ updateMessages, socket, thread }: ChatInputProps) => {
  const classes = useStyles();
  const [currentMessage, setCurrentMessage] = useState("");
  const userName = useSelector((state: RootState) => state.auth.userName);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        thread,
        userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      updateMessages((prev: any) => [...prev, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="dashboard-chat-input-send">
      <div className="dashboard-input">
        <input
          className="message-box"
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
      </div>
      <div className="dashboard-input-send-button">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            className={classes.button}
            size="large"
            color="primary"
            onClick={sendMessage}
          >
            <SendIcon sx={{ color: "#FFF" }} />
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ChatInput;
