import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../stateManagement/reducers/rootReducer";
import { socket } from "../..";
import { messagesService } from "../../../../services/messages.service";
import { threadsService } from "../../../../services/threads.service";
import { addMessage } from "../../../../stateManagement/actions/actionCreators/messagesActionCreator";
import { IMessage } from './../../../../services/messages.service';

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


const ChatInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentThread = useSelector((state: RootState) => state.currentThread)
  const [currentMessage, setCurrentMessage] = useState("");
  const userId = useSelector((state: RootState) => state.auth.id);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        threadId: currentThread.id,
        senderId: userId,
        message: currentMessage,
      };

      if (!messageData.threadId) return;
      await socket.emit("send_message", messageData);
      messagesService.post(messageData)
      .then(data => {
        dispatch(addMessage(data))
      })
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
