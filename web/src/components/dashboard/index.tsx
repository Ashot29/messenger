import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./index.css";
import { useSelector } from "react-redux";
import { RootState } from "../../stateManagement/reducers/rootReducer";
import UserListItem from './userListItem/index';

const socket = io("http://localhost:4000");

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

interface IUser {
  userName: string;
  email: string;
  password: string;
  created_at: number;
  id: string;
}

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const currentUser = useSelector((state: RootState) => {
    return {
      userName: state.auth.userName,
      email: state.auth.email,
      id: state.auth.id,
    };
  });
  const userName = useSelector((state: RootState) => state.auth.userName)
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [room, setRoom] = useState("");
  const [messages, updateMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/users?id_ne=${currentUser.id}`)
      .then((resp) => resp.json())
      .then((data) => setUsers([...data]));
  }, []);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room,
        userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      updateMessages((prev) => [...prev, messageData]);
    }
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      updateMessages((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="dashboard-content">
          <div className="dashboard-users">
            <ul className="users-list">
              {users.map(user => {
                return <UserListItem key={user.id} user={user}/>
              })}
            </ul>
          </div>
          <div className="dashboard-chat-content">
            <div className="dashboard-chat">
              {messages.map((messageData, index) => {
                return <h1 key={index}>{messageData.message}</h1>;
              })}
            </div>
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
          </div>
        </div>
        <div className="username-roomname">
          <input
            type="text"
            placeholder="Type room name"
            value={room}
            onChange={(event) => setRoom(event.target.value)}
          />
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={joinRoom}
            >
              Enter Room
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
