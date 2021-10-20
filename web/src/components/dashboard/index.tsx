import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../stateManagement/reducers/rootReducer";
import UserListItem from "./userListItem/index";
import Chat from "./chat";
import { usersService } from "../../services/users.service";
import { IThread, threadsService } from "./../../services/threads.service";
import Thread from './thread';
import { useDispatch } from "react-redux";
import { setAllUsers } from './../../stateManagement/actions/actionCreators/usersActionCreator';
import { IUser } from './../../services/users.service';
import "./index.css";

const socket = io("http://localhost:4000");

const theme = createTheme({
  palette: {
    primary: {
      main: "#ae3fdd",
    },
  },
});

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => {
    return {
      userName: state.auth.userName,
      email: state.auth.email,
      id: state.auth.id,
    };
  });
  const users = useSelector((state: RootState) => state.usersState.users)
  // const [users, setUsers] = useState<IUser[]>([]);
  const [thread, setThread] = useState("");
  const [threads, setThreads] = useState<IThread[]>([]);
  const [messages, updateMessages] = useState<any[]>([]);

  useEffect(() => {
    if (!usersService.getAllUsersExceptOwner) return;
    usersService
      .getAllUsersExceptOwner(currentUser.id)
      .then((data) => {
        dispatch(setAllUsers(data))
        // setUsers([...data])
      });
  }, []);

  const enterThread = () => {
    if (thread !== "") {
      socket.emit("enter_thread", thread);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data, "data");
      updateMessages((prev) => [...prev, data]);
    });
  }, [socket]);

  useEffect(() => {
    if (!threadsService.getUserThreads) return;
    threadsService
      .getUserThreads(currentUser.id)
      .then((data) => setThreads(data));
  }, []);

  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="dashboard-content">
          <div className="dashboard-threads">
            <h1 className="dashboard-threads-header">Threads</h1>
            <div className="dashboard-threads-wrapper">
              {threads.map((thread) => {
                return (
                  <Thread key={thread.id} thread={thread}/>
                );
              })}
            </div>
          </div>
          <div className="dashboard-chat-content">
            <Chat
              messages={messages}
              socket={socket}
              updateMessages={updateMessages}
              thread={thread}
            />
          </div>
          <div className="dashboard-users">
            <h1 className="dashboard-users-header">Users</h1>
            <ul className="users-list">
              {users.map((user: IUser) => {
                return <UserListItem key={user.id} user={user} />;
              })}
            </ul>
          </div>
        </div>
        <div className="username-roomname">
          <input
            type="text"
            placeholder="Type room name"
            value={thread}
            onChange={(event) => setThread(event.target.value)}
          />
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={enterThread}
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
