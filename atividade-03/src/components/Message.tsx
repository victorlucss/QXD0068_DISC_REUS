
interface MessageProps {
  id: number;
  message: string;
}

const Message = ({ id, message }: MessageProps) => {
  return (
    <p>{id} - {message}</p>
  )
}

export default Message