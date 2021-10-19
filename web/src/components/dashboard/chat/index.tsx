import ChatWindow from "./chatWindow";
import "./index.css";
import ChatInput from "./chatInputs/index";

interface ChatProps {
  messages: any[];
  socket: any
  updateMessages: any
  conversation: string
}

const Chat = ({ messages, socket, updateMessages, conversation }: ChatProps) => {
  return (
    <>
      <ChatWindow messages={messages} />
      <ChatInput socket={socket} updateMessages={updateMessages} conversation={conversation} />
    </>
  );
};

export default Chat;
