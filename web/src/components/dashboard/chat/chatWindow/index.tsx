import React from "react";
import Message from './message';
import { useSelector } from 'react-redux';
import { RootState } from "../../../../stateManagement/reducers/rootReducer";

interface ChatProps {
  messages: any[]
}

const ChatWindow = ({messages}: ChatProps) => {
  const userName = useSelector((state: RootState) => state.auth.userName);

  return (
    <div className="dashboard-chat">
      {messages.map((messageData, index) => {
        return (
          <Message own={messageData.userName === userName} message={messageData} key={index} />
        );
      })}
    </div>
  );
};

export default ChatWindow;
