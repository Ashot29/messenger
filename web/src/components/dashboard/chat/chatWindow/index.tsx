import Message from './message';
import { useSelector } from 'react-redux';
import { RootState } from "../../../../stateManagement/reducers/rootReducer";
import { IMessage } from './../../../../services/messages.service';

interface ChatProps {
  messages: any[]
}

const ChatWindow = () => {
  const userId = useSelector((state: RootState) => state.auth.id);
  const currentThread = useSelector((state: RootState) => state.currentThread) 
  const messages: IMessage[] = useSelector((state: RootState) => state.messages.messages.filter((message: IMessage) => message.threadId === currentThread.id))

  return (
    <div className="dashboard-chat">
      {messages.map((messageData, index) => {
        return (
          <Message own={messageData.senderId === userId} message={messageData} key={index} />
        );
      })}
    </div>
  );
};

export default ChatWindow;
