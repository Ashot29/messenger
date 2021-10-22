import ChatWindow from "./chatWindow";
import "./index.css";
import ChatInput from "./chatInputs/index";

interface ChatProps {
  updateMessages: any;
}

const Chat = ({ updateMessages }: ChatProps) => {
  return (
    <>
      <ChatWindow />
      <ChatInput
        updateMessages={updateMessages}
      />
    </>
  );
};

export default Chat;
