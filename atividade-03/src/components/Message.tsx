interface MessageProps {
  id: number;
  message: string;
}

const Message = ({ id, message }: MessageProps) => {
  return (
    <p>
      <b>Message</b> - {message}
    </p>
  );
};

export default Message;
