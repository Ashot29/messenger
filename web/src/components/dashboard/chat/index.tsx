import ChatWindow from "./chatWindow";
import "./index.css";
import ChatInput from "./chatInputs/index";

interface ChatProps {
  messages: any[];
  socket: any;
  updateMessages: any;
  thread: string;
}

const Chat = ({ messages, socket, updateMessages, thread }: ChatProps) => {
  return (
    <>
      <ChatWindow messages={messages} />
      <ChatInput
        socket={socket}
        updateMessages={updateMessages}
        thread={thread}
      />
    </>
  );
};

export default Chat;
