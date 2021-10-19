import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Button from "@material-ui/core/Button";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./index.css";
import { useSelector } from "react-redux";
import { RootState } from "../../stateManagement/reducers/rootReducer";
import UserListItem from "./userListItem/index";
import Chat from "./chat";

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
  const currentUser = useSelector((state: RootState) => {
    return {
      userName: state.auth.userName,
      email: state.auth.email,
      id: state.auth.id,
    };
  });
  const [users, setUsers] = useState<IUser[]>([]);
  const [conversation, setConversation] = useState("");
  const [messages, updateMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/users?id_ne=${currentUser.id}`)
      .then((resp) => resp.json())
      .then((data) => setUsers([...data]));
  }, []);

  const enterConversation = () => {
    if (conversation !== "") {
      socket.emit("enter_conversation", conversation);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data, 'data')
      updateMessages((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="dashboard-content">
          <div className="dashboard-users">
            <ul className="users-list">
              {users.map((user) => {
                return <UserListItem key={user.id} user={user} />;
              })}
            </ul>
          </div>
          <div className="dashboard-chat-content">
            <Chat
              messages={messages}
              socket={socket}
              updateMessages={updateMessages}
              conversation={conversation}
            />
          </div>
        </div>
        <div className="username-roomname">
          <input
            type="text"
            placeholder="Type room name"
            value={conversation}
            onChange={(event) => setConversation(event.target.value)}
          />
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={enterConversation}
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
