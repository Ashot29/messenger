import './index.css'

interface MessageProps {
    own: boolean
    message: any
}

const Message = ({ own, message }: MessageProps) => {
  return (
    <div className={own ? "own-message": "message"}>
      <div className={own ? "own-message-content": "message-content"}>{message.message}</div>
    </div>
  );
};

export default Message;
