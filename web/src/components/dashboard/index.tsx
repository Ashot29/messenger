import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { RootState } from "../../stateManagement/reducers/rootReducer";
import UserListItem from "./userListItem/index";
import Chat from "./chat";
import { usersService } from "../../services/users.service";
import { IThread, threadsService } from "./../../services/threads.service";
import Thread from "./thread";
import { useDispatch } from "react-redux";
import { setAllUsers } from "./../../stateManagement/actions/actionCreators/usersActionCreator";
import { IUser } from "./../../services/users.service";
import { setUserInitialThreads } from "./../../stateManagement/actions/actionCreators/userThreadsActionCreator";
import { messagesService } from "../../services/messages.service";
import "./index.css";
import {
  messagesLoadStart,
  messagesLoadSuccess,
  messagesLoadFailure,
  addMessage,
} from "./../../stateManagement/actions/actionCreators/messagesActionCreator";

export const socket = io("http://localhost:4000");

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => {
    return {
      userName: state.auth.userName,
      email: state.auth.email,
      id: state.auth.id,
    };
  });
  const currentThread = useSelector((state: RootState) => state.currentThread);
  const users = useSelector((state: RootState) => state.usersState.users);
  const threads = useSelector((state: RootState) => state.userThreads.threads);

  useEffect(() => {
    if (!usersService.getAllUsersExceptOwner) return;
    usersService.getAllUsersExceptOwner(currentUser.id).then((data) => {
      dispatch(setAllUsers(data));
    });
  }, []);

  useEffect(() => {
    console.log("mtav");
    dispatch(messagesLoadStart());
    messagesService
      .get()
      .then((data) => dispatch(messagesLoadSuccess(data)))
      .catch(() => dispatch(messagesLoadFailure()));
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      dispatch(addMessage(data));
    });
  }, [socket]);

  useEffect(() => {
    if (!threadsService.getUserThreads) return;
    threadsService.getUserThreads(currentUser.id).then((data) => {
      dispatch(setUserInitialThreads(data));
    });
  }, []);

  return (
    <>
      <div className="dashboard-content-wrapper">
        <div className="dashboard-content">
          <div className="dashboard-threads">
            <h1 className="dashboard-threads-header">Threads</h1>
            <div className="dashboard-threads-wrapper">
              {threads.map((thread: IThread) => {
                return <Thread key={thread.id} thread={thread} />;
              })}
            </div>
          </div>
          <div className="dashboard-chat-content">
            <Chat />
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
      </div>
    </>
  );
};

export default Dashboard;
