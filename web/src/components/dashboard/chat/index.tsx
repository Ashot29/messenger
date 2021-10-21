import ChatWindow from "./chatWindow";
import "./index.css";
import ChatInput from "./chatInputs/index";

interface ChatProps {
  messages: any[];
  socket: any;
  updateMessages: any;
}

const Chat = ({ messages, socket, updateMessages }: ChatProps) => {
  return (
    <>
      <ChatWindow messages={messages} />
      <ChatInput
        updateMessages={updateMessages}
      />
    </>
  );
};

export default Chat;
